from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, field_validator, ValidationError
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
import re
from typing import Optional
import logging
from datetime import datetime
from dotenv import load_dotenv
import json

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(title="Mifzal Contact API", version="1.0.0")

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "https://mifzal.co", "https://www.mifzal.co"],
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["*"],
)

# Load environment variables
load_dotenv()
SMTP_SERVER = os.getenv("SMTP_SERVER")
SMTP_PORT = int(os.getenv("SMTP_PORT"))
SMTP_USERNAME = os.getenv("SMTP_USERNAME")
SMTP_PASSWORD = os.getenv("SMTP_PASSWORD")
INBOX_EMAIL = os.getenv("INBOX_EMAIL")


class ContactForm(BaseModel):
    name: str
    email: EmailStr
    message: str

    @field_validator('name')
    @classmethod
    def validate_name(cls, v):
        if not v or len(v.strip()) < 2:
            raise ValueError('Name must be at least 2 characters long')
        if len(v.strip()) > 100:
            raise ValueError('Name must be less than 100 characters')
        if re.search(r'[<>"\'\\/]', v):
            raise ValueError('Name contains invalid characters')
        return v.strip()

    @field_validator('message')
    @classmethod
    def validate_message(cls, v):
        if not v or len(v.strip()) < 10:
            raise ValueError('Message must be at least 10 characters long')
        if len(v.strip()) > 5000:
            raise ValueError('Message must be less than 5000 characters')
        return v.strip()


def create_email_template(name: str, email: str, message: str, is_epk: bool = False) -> tuple[str, str]:
    """Full auto-reply template for user"""
    if is_epk:
        subject = "Thank you for your message"
        html = f"""
        <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
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
                    <div style="margin-bottom: 12px;">📧 <a href="mailto:mifzalmusic@gmail.com" style="color: #007cba;">mifzalmusic@gmail.com</a></div>
                    <div style="margin-bottom: 12px;">🌐 <a href="https://www.mifzal.co" target="_blank" style="color: #007cba;">www.mifzal.co</a></div>
                    <div style="margin-bottom: 12px;">📷 <a href="https://instagram.com/mifzalv" target="_blank" style="color: #007cba;">@mifzalv</a></div>
                </div>
                <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
                <p style="font-size: 12px; color: #666;">This is an automated response. Please do not reply directly to this email.</p>
            </div>
        </body>
        </html>
        """
    else:
        subject = "Thank you for reaching out"
        html = f"""
        <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
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
                    <div style="margin-bottom: 12px;">📧 <a href="mailto:mifzalmusic@gmail.com" style="color: #007cba;">mifzalmusic@gmail.com</a></div>
                    <div style="margin-bottom: 12px;">🌐 <a href="https://www.mifzal.co" target="_blank" style="color: #007cba;">www.mifzal.co</a></div>
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


def send_email(to_email: str, subject: str, html_content: str, reply_to: Optional[str] = None):
    """Send email via SMTP"""
    try:
        msg = MIMEMultipart('alternative')
        msg['From'] = SMTP_USERNAME
        msg['To'] = to_email
        msg['Subject'] = subject
        if reply_to:
            msg['Reply-To'] = reply_to
        msg.attach(MIMEText(html_content, 'html'))
        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
            server.starttls()
            server.login(SMTP_USERNAME, SMTP_PASSWORD)
            server.send_message(msg)
        logger.info(f"Email sent to {to_email}")
    except Exception as e:
        logger.error(f"Failed to send email to {to_email}: {str(e)}")
        raise e


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

    # Create auto-reply email to user
    auto_subject, auto_html = create_email_template(
        form_data.name, form_data.email, form_data.message, is_epk
    )
    
    # Send auto-reply to user
    try:
        send_email(form_data.email, auto_subject, auto_html)
    except Exception:
        raise HTTPException(status_code=500, detail="Failed to send confirmation email to user")

    # Send a copy of the auto-reply to your inbox with Reply-To set to user
    try:
        send_email(INBOX_EMAIL, f"📩 Copy of : {auto_subject}", auto_html, reply_to=form_data.email)
    except Exception:
        raise HTTPException(status_code=500, detail="Failed to send copy to inbox")

    # Send simple internal notification as well
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



@app.post("/contact/main")
async def contact_main_site(request: Request):
    return await handle_contact(request, is_epk=False)


@app.post("/contact/epk")
async def contact_epk(request: Request):
    return await handle_contact(request, is_epk=True)


@app.get("/health")
async def health_check():
    return {"status": "healthy", "timestamp": datetime.now().isoformat()}


@app.get("/")
async def root():
    return {"message": "Hello World"}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
