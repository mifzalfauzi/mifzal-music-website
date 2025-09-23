# Contact Form API

FastAPI backend for handling contact form submissions from both the main website and EPK.

## Setup

1. Install dependencies:
```bash
pip install -r requirements.txt
```

2. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your SMTP credentials
```

3. Run the API:
```bash
python contact_api.py
```

The API will be available at `http://localhost:8000`

## Environment Variables

- `SMTP_SERVER`: SMTP server (default: smtp.gmail.com)
- `SMTP_PORT`: SMTP port (default: 587)
- `SMTP_USERNAME`: Your email address
- `SMTP_PASSWORD`: Your app password (not regular password)
- `INBOX_EMAIL`: Where form submissions should be sent

## Gmail Setup

1. Enable 2-factor authentication
2. Generate an app password: Google Account → Security → 2-Step Verification → App passwords
3. Use the app password as `SMTP_PASSWORD`

## Endpoints

### POST /contact/main
Handle contact forms from the main website (uses "we/our" phrasing)

### POST /contact/epk  
Handle contact forms from the EPK (uses "I/my" phrasing)

### GET /health
Health check endpoint

## Request Format

```json
{
  "name": "John Doe",
  "email": "john@example.com", 
  "message": "Your message here"
}
```

## Response Format

Success:
```json
{
  "success": true,
  "message": "Message sent successfully. You should receive a confirmation email shortly."
}
```

Error:
```json
{
  "detail": "Error message"
}
```

## Frontend Integration

Update your React components to call these endpoints instead of EmailJS:

```javascript
const response = await fetch('http://localhost:8000/contact/main', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData),
});

const result = await response.json();
```

## Deployment

For production, use a proper WSGI server like Gunicorn:

```bash
pip install gunicorn
gunicorn contact_api:app -w 4 -k uvicorn.workers.UvicornWorker
```