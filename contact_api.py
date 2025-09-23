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

# Environment variables (set these in your deployment)
load_dotenv()  # loads .env

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
        # Basic sanitization
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
    """Create HTML and text templates for emails"""
    
    # Auto-reply template
    if is_epk:
        # EPK auto-reply (I/my phrasing)
        auto_reply_subject = "Thank you for your message"
        auto_reply_html = f"""
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
                    <div style="margin-bottom: 12px;">
                        <div style="font-size: 18px; margin-bottom: 4px;">📧</div>
                        <a href="mailto:mifzalmusic@gmail.com" style="color: #007cba; text-decoration: none;">mifzalmusic@gmail.com</a>
                    </div>
                    
                    <div style="margin-bottom: 12px;">
                        <div style="font-size: 18px; margin-bottom: 4px;">🌐</div>
                        <a href="https://www.mifzal.co" target="_blank" rel="noopener" style="color: #007cba; text-decoration: none;">www.mifzal.co</a>
                    </div>
                    
                    <div style="margin-bottom: 12px;">
                        <div style="font-size: 18px; margin-bottom: 4px;">📷</div>
                        <a href="https://instagram.com/mifzalv" target="_blank" rel="noopener" style="color: #007cba; text-decoration: none;">@mifzalv</a>
                    </div>
                </div>
                
                <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
                <p style="font-size: 12px; color: #666;">
                    This is an automated response. Please do not reply directly to this email.
                </p>
            </div>
        </body>
        </html>
        """
    else:
        # Main site auto-reply (we/our phrasing)
        auto_reply_subject = "Thank you for reaching out"
        auto_reply_html = f"""
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
                    <div style="margin-bottom: 12px;">
                        <div style="font-size: 18px; margin-bottom: 4px;">📧</div>
                        <a href="mailto:mifzalmusic@gmail.com" style="color: #007cba; text-decoration: none;">mifzalmusic@gmail.com</a>
                    </div>
                    
                    <div style="margin-bottom: 12px;">
                        <div style="font-size: 18px; margin-bottom: 4px;">🌐</div>
                        <a href="https://www.mifzal.co" target="_blank" rel="noopener" style="color: #007cba; text-decoration: none;">www.mifzal.co</a>
                    </div>
                    
                    <div style="margin-bottom: 12px;">
                        <div style="font-size: 18px; margin-bottom: 4px;">📷</div>
                        <a href="https://instagram.com/mifzalv" target="_blank" rel="noopener" style="color: #007cba; text-decoration: none;">@mifzalv</a>
                    </div>
                </div>
                
                <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
                
                
        
                <p style="font-size: 12px; color: #666;">
                    This is an automated response. Please do not reply directly to this email.
                </p>
            </div>
        </body>
        </html>
        """
    
    # Inbox notification now uses **the same HTML as auto-reply**
    inbox_subject = auto_reply_subject
    inbox_html = auto_reply_html

    return auto_reply_subject, auto_reply_html, inbox_subject, inbox_html

def send_email(to_email: str, subject: str, html_content: str, reply_to: Optional[str] = None):
    """Send email using SMTP"""
    try:
        msg = MIMEMultipart('alternative')
        msg['From'] = SMTP_USERNAME
        msg['To'] = to_email
        msg['Subject'] = subject
        
        if reply_to:
            msg['Reply-To'] = reply_to
        
        # Add HTML content
        html_part = MIMEText(html_content, 'html')
        msg.attach(html_part)
        
        # Send email
        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
            server.starttls()
            server.login(SMTP_USERNAME, SMTP_PASSWORD)
            server.send_message(msg)
            
        logger.info(f"Email sent successfully to {to_email}")
        return True
        
    except Exception as e:
        logger.error(f"Failed to send email to {to_email}: {str(e)}")
        raise e

@app.post("/contact/main")
async def contact_main_site(request: Request):
    """Handle contact form submissions from the main website"""
    try:
        # Get raw body and log it for debugging
        body = await request.body()
        logger.info(f"Received request body: {body.decode()}")
        
        # Parse JSON manually for better error handling
        try:
            data = json.loads(body.decode())
        except json.JSONDecodeError as e:
            logger.error(f"Invalid JSON: {str(e)}")
            raise HTTPException(status_code=400, detail="Invalid JSON format")
        
        # Validate data
        try:
            form_data = ContactForm(**data)
        except ValidationError as e:
            logger.error(f"Validation error: {str(e)}")
            # Extract clean error message from first validation error
            error_msg = e.errors()[0]['msg'] if e.errors() else "Validation failed"
            raise HTTPException(status_code=422, detail=error_msg)
        
        logger.info(f"Validated form data from {form_data.email}")
        
        # Create email templates
        auto_reply_subject, auto_reply_html, inbox_subject, inbox_html = create_email_template(
            form_data.name, form_data.email, form_data.message, is_epk=False
        )
        
        # Send confirmation email to sender
        try:
            send_email(form_data.email, auto_reply_subject, auto_reply_html)
        except Exception as e:
            logger.error(f"Failed to send auto-reply: {str(e)}")
            raise HTTPException(status_code=500, detail="Failed to send confirmation email")
        
        # Send notification to inbox
        try:
            send_email(INBOX_EMAIL, inbox_subject, inbox_html, reply_to=form_data.email)
        except Exception as e:
            logger.error(f"Failed to send inbox notification: {str(e)}")
            raise HTTPException(status_code=500, detail="Failed to send notification email")
        
        return {
            "success": True, 
            "message": "Message sent successfully. You should receive a confirmation email shortly."
        }
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Unexpected error in main contact: {str(e)}")
        raise HTTPException(status_code=500, detail="An unexpected error occurred")

@app.post("/contact/epk")
async def contact_epk(request: Request):
    """Handle contact form submissions from the EPK"""
    try:
        # Get raw body and log it for debugging
        body = await request.body()
        logger.info(f"Received EPK request body: {body.decode()}")
        
        # Parse JSON manually for better error handling
        try:
            data = json.loads(body.decode())
        except json.JSONDecodeError as e:
            logger.error(f"Invalid JSON: {str(e)}")
            raise HTTPException(status_code=400, detail="Invalid JSON format")
        
        # Validate data
        try:
            form_data = ContactForm(**data)
        except ValidationError as e:
            logger.error(f"Validation error: {str(e)}")
            # Extract clean error message from first validation error
            error_msg = e.errors()[0]['msg'] if e.errors() else "Validation failed"
            raise HTTPException(status_code=422, detail=error_msg)
        
        logger.info(f"Validated EPK form data from {form_data.email}")
        
        # Create email templates
        auto_reply_subject, auto_reply_html, inbox_subject, inbox_html = create_email_template(
            form_data.name, form_data.email, form_data.message, is_epk=True
        )
        
        # Send confirmation email to sender
        try:
            send_email(form_data.email, auto_reply_subject, auto_reply_html)
        except Exception as e:
            logger.error(f"Failed to send auto-reply: {str(e)}")
            raise HTTPException(status_code=500, detail="Failed to send confirmation email")
        
        # Send notification to inbox
        try:
            send_email(INBOX_EMAIL, inbox_subject, inbox_html, reply_to=form_data.email)
        except Exception as e:
            logger.error(f"Failed to send inbox notification: {str(e)}")
            raise HTTPException(status_code=500, detail="Failed to send notification email")
        
        return {
            "success": True, 
            "message": "Message sent successfully. You should receive a confirmation email shortly."
        }
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Unexpected error in EPK contact: {str(e)}")
        raise HTTPException(status_code=500, detail="An unexpected error occurred")

@app.get("/health")
async def health_check():
    """Health check endpoint"""
    return {"status": "healthy", "timestamp": datetime.now().isoformat()}

@app.get("/")
async def root():
    return {"message": "Hello World"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)