from fastapi import FastAPI, HTTPException, Request, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, validator, ValidationError
from typing import Optional
import os, uvicorn, re, logging, json, asyncio, aiohttp
from datetime import datetime
from dotenv import load_dotenv
from contextlib import asynccontextmanager
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail, Email, To, Content

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Load environment variables
load_dotenv()
SENDGRID_API_KEY = os.getenv("SENDGRID_API_KEY")
INBOX_EMAIL = os.getenv("INBOX_EMAIL")

# Global variable to store the keep-alive task
keep_alive_task = None

async def keep_alive():
    """Background task to ping the server every 5 minutes"""
    base_url = os.getenv("RENDER_EXTERNAL_URL")
    while True:
        try:
            await asyncio.sleep(300)  # 5 minutes
            async with aiohttp.ClientSession() as session:
                async with session.get(f"{base_url}/ping") as response:
                    if response.status == 200:
                        logger.info("Keep-alive ping successful")
                    else:
                        logger.warning(f"Keep-alive ping failed with status: {response.status}")
        except Exception as e:
            logger.error(f"Keep-alive ping error: {str(e)}")

@asynccontextmanager
async def lifespan(app: FastAPI):
    global keep_alive_task
    keep_alive_task = asyncio.create_task(keep_alive())
    logger.info("Keep-alive task started")
    yield
    if keep_alive_task:
        keep_alive_task.cancel()
        logger.info("Keep-alive task cancelled")

app = FastAPI(
    title="Mifzal Contact API", 
    version="1.0.0",
    lifespan=lifespan
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "https://mifzal.co", "https://www.mifzal.co"],
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["*"],
)

# ----------------------------
# Models & Validators
# ----------------------------
class ContactForm(BaseModel):
    name: str
    email: EmailStr
    message: str

    @validator('name')
    @classmethod
    def validate_name(cls, v):
        if not v or len(v.strip()) < 2:
            raise ValueError('Name must be at least 2 characters long')
        if len(v.strip()) > 100:
            raise ValueError('Name must be less than 100 characters')
        if re.search(r'[<>"\'\\/]', v):
            raise ValueError('Name contains invalid characters')
        return v.strip()

    @validator('message')
    @classmethod
    def validate_message(cls, v):
        if not v or len(v.strip()) < 10:
            raise ValueError('Message must be at least 10 characters long')
        if len(v.strip()) > 5000:
            raise ValueError('Message must be less than 5000 characters')
        return v.strip()

# ----------------------------
# Email Templates
# ----------------------------
def create_email_template(name: str, email: str, message: str, is_epk: bool = False) -> tuple[str, str]:
    """Full auto-reply template for user"""
    if is_epk:
        subject = "Thank you for your message - {name}".format(name=name)
        html = f"""
        <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="text-align: center; margin-bottom: 20px;">
                <img src="https://www.mifzal.co/mifzal_co_gmail_img-144x144.png" alt="Mifzal Logo" style="max-width: 150px; height: auto;">
            </div>
                <h2 style="color: #2c2c2c; margin-bottom: 20px;">Thank you for reaching out, {name}!</h2>
                <p>I've received your message and will get back to you as soon as possible.</p>
                <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #007cba; margin: 20px 0;">
                    <h3 style="margin-top: 0; color: #007cba;">Your Message:</h3>
                    <p style="margin-bottom: 0; font-style: italic;">"{message}"</p>
                </div>
                <p>I appreciate your interest in my music and will respond personally soon.</p>
                <p>Best regards,<br>
                <strong>Mifzal</strong><br>
                <small>Composer/Artist</small></p>
                <div style="font-size: 14px; color: #666; margin-top: 20px;">
                    <div style="margin-bottom: 12px;">📧 <a href="mailto:contact@mifzal.co" style="color: #007cba;">Artist Email</a></div>
                    <div style="margin-bottom: 12px;">🌐 <a href="https://www.mifzal.co" target="_blank" style="color: #007cba;">mifzal.co</a></div>
                    <div style="margin-bottom: 12px;">📷 <a href="https://instagram.com/mifzalv" target="_blank" style="color: #007cba;">@mifzalv</a></div>
                </div>
                <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
                <p style="font-size: 12px; color: #666;">This is an automated response. Please do not reply directly to this email.</p>
            </div>
        </body>
        </html>
        """
    else:
        subject = "Thank you for reaching out - {name}".format(name=name)
        html = f"""
        <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="text-align: center; margin-bottom: 20px;">
                <img src="https://www.mifzal.co/mifzal_co_gmail_img-144x144.png" alt="Mifzal Logo" style="max-width: 150px; height: auto;">
            </div>
                <h2 style="color: #2c2c2c; margin-bottom: 20px;">Thank you for reaching out, {name}!</h2>
                <p>We've received your message and will get back to you as soon as possible.</p>
                <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #007cba; margin: 20px 0;">
                    <h3 style="margin-top: 0; color: #007cba;">Your Message:</h3>
                    <p style="margin-bottom: 0; font-style: italic;">"{message}"</p>
                </div>
                <p>We appreciate your interest and will respond personally soon.</p>
                <p>Best regards,<br>
                <strong>The Mifzal Team</strong></p>
                <div style="font-size: 14px; color: #666; margin-top: 20px;">
                    <div style="margin-bottom: 12px;">📧 <a href="mailto:contact@mifzal.co" style="color: #007cba;">Artist Email</a></div>
                    <div style="margin-bottom: 12px;">🌐 <a href="https://www.mifzal.co" target="_blank" style="color: #007cba;">mifzal.co</a></div>
                    <div style="margin-bottom: 12px;">📷 <a href="https://instagram.com/mifzalv" target="_blank" style="color: #007cba;">@mifzalv</a></div>
                </div>
                <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
                <p style="font-size: 12px; color: #666;">This is an automated response. Please do not reply directly to this email.</p>
            </div>
        </body>
        </html>
        """
    return subject, html

def create_simple_notification(name: str, email: str, is_epk: bool = False) -> tuple[str, str]:
    """Minimal internal notification for inbox"""
    source = "EPK" if is_epk else "Main Website"
    subject = f"🔔 New Form Submission - {source}"
    html = f"""
    <html>
    <body style="font-family: Arial, sans-serif; color: #333; line-height: 1.5;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
            <h2 style="color: #007cba; margin-top: 0;">📨 New Form Submission</h2>
            <p><strong>Source:</strong> {source}</p>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Email:</strong> <a href="mailto:{email}" style="color: #007cba;">{email}</a></p>
            <p style="font-size: 12px; color: #666; margin-top: 20px;">This is an automated notification for internal purposes. Do not reply.</p>
        </div>
    </body>
    </html>
    """
    return subject, html

# ----------------------------
# SendGrid Email Sender
# ----------------------------
def send_email(to_email: str, subject: str, html_content: str, reply_to: Optional[str] = None):
    """Send email via SendGrid"""
    try:
        message = Mail(
            from_email=Email(INBOX_EMAIL),
            to_emails=To(to_email),
            subject=subject,
            html_content=Content("text/html", html_content)
        )
        if reply_to:
            message.reply_to = Email(reply_to)

        sg = SendGridAPIClient(SENDGRID_API_KEY)
        response = sg.send(message)
        logger.info(f"Email sent to {to_email}, status code: {response.status_code}")
    except Exception as e:
        logger.error(f"Failed to send email to {to_email}: {str(e)}")
        raise e

# ----------------------------
# Contact Handler
# ----------------------------
async def handle_contact(request: Request, is_epk: bool = False):
    body = await request.body()
    logger.info(f"Received request body: {body.decode()}")
    
    try:
        data = json.loads(body.decode())
    except json.JSONDecodeError:
        raise HTTPException(status_code=400, detail="Invalid JSON format")
    
    try:
        form_data = ContactForm(**data)
    except ValidationError as e:
        error_msg = e.errors()[0]['msg'] if e.errors() else "Validation failed"
        raise HTTPException(status_code=422, detail=error_msg)

    # Auto-reply email
    auto_subject, auto_html = create_email_template(
        form_data.name, form_data.email, form_data.message, is_epk
    )
    try:
        send_email(form_data.email, auto_subject, auto_html)
    except Exception:
        raise HTTPException(status_code=500, detail="Failed to send confirmation email to user")

    # Copy to inbox with reply-to
    try:
        send_email(INBOX_EMAIL, f"📩 Copy of : {auto_subject}", auto_html, reply_to=form_data.email)
    except Exception:
        raise HTTPException(status_code=500, detail="Failed to send copy to inbox")

    # Internal notification
    notif_subject, notif_html = create_simple_notification(
        form_data.name, form_data.email, is_epk
    )
    try:
        send_email(INBOX_EMAIL, notif_subject, notif_html)
    except Exception:
        raise HTTPException(status_code=500, detail="Failed to send inbox notification")

    return {
        "success": True,
        "message": "Message sent successfully. You should receive a confirmation email shortly."
    }

# ----------------------------
# Routes
# ----------------------------
@app.post("/contact/main")
async def contact_main_site(request: Request):
    return await handle_contact(request, is_epk=False)

@app.post("/contact/epk")
async def contact_epk(request: Request):
    return await handle_contact(request, is_epk=True)

@app.get("/health")
async def health_check():
    return {"status": "healthy", "timestamp": datetime.now().isoformat()}

@app.get("/ping")
async def ping():
    return {
        "status": "alive", 
        "timestamp": datetime.now().isoformat(),
        "message": "Server is running"
    }

@app.get("/")
async def root():
    return {"message": "Hello World"}

# ----------------------------
# Run
# ----------------------------
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8000))
    uvicorn.run(app, host="0.0.0.0", port=port)
