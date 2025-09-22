import { Mail, Copy, Check } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-lg md:text-3xl font-light mb-12 tracking-wider">CONTACT</h2>
      
      <div className="mb-8">
        {/* <p className="text-lg mb-4">Get in touch directly:</p> */}
        <div className="flex justify-center items-center gap-3">
          <Mail className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground" />
          <a
            href="mailto:mifzalmusic@gmail.com"
            className="text-sm md:text-base text-foreground hover:text-primary transition-colors"
          >
            mifzalmusic@gmail.com
          </a>
          <button
            onClick={() => copyToClipboard('mifzalmusic@gmail.com')}
            className={`transition-colors text-sm md:text-base cursor-pointer ${
              copied 
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
        action="https://formspree.io/f/mnngaqyb"// replace with your Formspree form ID
        method="POST"
        className="flex flex-col max-w-3xl mx-auto gap-4"
      >
         <p className="text-muted-foreground text-sm">Fill in the form directly.</p>
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          className="border rounded px-3 py-2 w-full"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="border rounded px-3 py-2 w-full"
        />
        <textarea
          name="message"
          placeholder="Send a message"
          required
          className="border rounded px-3 py-2 w-full h-32"
        ></textarea>
        <button
          type="submit"
          className="bg-white text-black px-4 py-2 rounded hover:bg-black hover:text-white cursor-pointer transition-colors border border-black"
        >
          Send
        </button>
        <p className="text-muted-foreground text-sm mx-auto">Powered by Formspree</p>
      </form>
      
    </div>
  )
}
