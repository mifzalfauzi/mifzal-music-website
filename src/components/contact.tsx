import { Mail, Copy, Check, Instagram } from "lucide-react"
import { useState } from "react"
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const form = e.target as HTMLFormElement;
  //   const formData = new FormData(form);

  //   setFormData({
  //     name: formData.get('name') as string,
  //     email: formData.get('email') as string,
  //     message: formData.get('message') as string,
  //   });
  //   setShowModal(true);
  // };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowModal(true); // open confirmation modal
  };
  
  const confirmSubmit = () => {
    setIsSubmitting(true);
    emailjs.send(
      'service_rp7z9mf',     // replace with your EmailJS Service ID
      'template_a6eisf8',    // replace with your Template ID
      formData,
      'EJPGR-7Zd6ABDOl_Y'    // replace with your Public Key
    ).then(() => {
      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setShowModal(false);
      setIsSubmitting(false);
    }).catch((err) => {
      console.error('EmailJS error:', err);
      setError(true);
      setShowModal(false);
      setIsSubmitting(false);
    });
  };
  



  if (success) {
    return (
      <div className="container mx-auto px-4 text-center min-h-screen flex flex-col justify-center">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-light mb-6 tracking-wider text-green-500">MESSAGE SENT!</h2>
          <p className="text-muted-foreground mb-8">Thank you for reaching out.</p>
          <button
            onClick={() => setSuccess(false)}
            className="cursor-pointer bg-white text-black px-6 py-2 rounded hover:bg-black hover:text-white transition-colors border border-black"
          >
             Back to Website
          </button>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 text-center min-h-screen flex flex-col justify-center">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-light mb-6 tracking-wider text-red-500">MESSAGE FAILED</h2>
          <p className="text-muted-foreground mb-8">Something went wrong. Please try again or contact me directly at mifzalmusic@gmail.com</p>
          <button
            onClick={() => setError(false)}
            className="cursor-pointer bg-white text-black px-6 py-2 rounded hover:bg-black hover:text-white transition-colors border border-black"
          >
            Go Back to Website
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-lg md:text-3xl font-light mb-12 tracking-wider">CONTACT</h2>

      <div className="mb-8">
        {/* <p className="text-lg mb-4">Get in touch directly:</p> */}
        <p className="text-muted-foreground text-sm md:text-sm mb-8"> Click email to send or copy.</p>
        <div className="flex justify-center items-center gap-3">

          <Mail className="w-4 h-4 md:w-5 md:h-5 text-foreground" />
          <a
            href="mailto:mifzalmusic@gmail.com"
            className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors"
          >
            mifzalmusic@gmail.com
          </a>
          <button
            onClick={() => copyToClipboard('mifzalmusic@gmail.com')}
            className={`transition-colors text-sm md:text-base cursor-pointer ${copied
                ? 'text-green-500'
                : 'text-muted-foreground hover:text-foreground'
              }`}
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex items-center justify-center gap-4">
          <div className="h-px bg-border flex-1"></div>
          <span className="text-muted-foreground text-sm">OR</span>
          <div className="h-px bg-border flex-1"></div>
        </div>
      </div>

      <form
        id="contact-form"
        action="https://formspree.io/f/mnngaqyb"// replace with your Formspree form ID
        method="POST"
        onSubmit={handleSubmit}
        className="flex flex-col max-w-3xl mx-auto gap-4"
      >
        <p className="text-muted-foreground text-sm">Fill in the form directly.</p>
        <input
        type="text"
        placeholder="Your Name"
        value={formData.name}
        onChange={e => setFormData({ ...formData, name: e.target.value })}
        required
        className="border rounded px-3 py-2"
      />
      <input
        type="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={e => setFormData({ ...formData, email: e.target.value })}
        required
        className="border rounded px-3 py-2"
      />
      <textarea
        placeholder="Your Message"
        value={formData.message}
        onChange={e => setFormData({ ...formData, message: e.target.value })}
        required
        className="border rounded px-3 py-2"
      />
        <button
          type="submit"
          className="bg-white text-black px-4 py-2 rounded hover:bg-black hover:text-white cursor-pointer transition-colors border border-black"
        >
          Send
        </button>
        <p className="text-muted-foreground text-sm mx-auto">Powered by EmailJS</p>
      </form>

      <div className="mt-8 flex items-center justify-center gap-2">
        <Instagram className="w-4 h-4" />
        <p className="text-muted-foreground text-sm"><a href="https://instagram.com/mifzalv" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-sm md:text-sm">
          say hello on Instagram
        </a></p>

      </div>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-black text-white p-6 rounded-lg max-w-md w-full mx-4">
            <h3 className="text-lg font-light mb-4">Confirm Your Message</h3>
            <div className="space-y-3 text-sm text-left">
              <div>
                <p className="text-muted-foreground text-md">Name</p>
                <input
                  type="text"
                  value={formData.name}
                  readOnly
                  className="mt-1 p-2 bg-black rounded text-md w-full cursor-not-allowed"
                />
              </div>

              <div>
                <p className="text-muted-foreground text-md">Email</p>
                <input
                  type="email"
                  value={formData.email}
                  readOnly
                  className="mt-1 p-2 bg-black rounded text-md w-full cursor-not-allowed"
                />
              </div>

              <div>
                <p className="text-muted-foreground text-md">Message</p>
                <textarea
                  value={formData.message}
                  readOnly
                  className="mt-1 p-2 bg-black rounded text-md w-full h-32 resize-none cursor-not-allowed overflow-y-auto"
                />
              </div>
            </div>
            <div className="flex gap-3">
             
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={confirmSubmit}
                disabled={isSubmitting}
                className="flex-1 bg-white text-black px-4 py-2 rounded hover:bg-black hover:text-white transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </div>
                ) : (
                  'Send Message'
                )}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
