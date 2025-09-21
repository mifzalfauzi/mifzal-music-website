export default function Contact() {
  return (
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-light mb-12 tracking-wider">CONTACT</h2>
      
      <form
        action="https://formspree.io/f/mnngaqyb"// replace with your Formspree form ID
        method="POST"
        className="flex flex-col max-w-3xl mx-auto gap-4"
      >
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
      </form>
    </div>
  )
}
