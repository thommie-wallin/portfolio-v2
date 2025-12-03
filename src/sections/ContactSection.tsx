

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-16 px-6">
      <div className="max-w-md mx-auto flex flex-col items-center gap-4">
        <h2 className="text-3xl font-bold text-gray-900">Contact</h2>
        <p className="text-gray-600 text-center">I'm open to new opportunities and collaborations. Reach out via the links below or send a message using the form.</p>

        <div className="flex gap-4 mt-2">
          <a
            href="https://github.com/thommie-wallin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub — opens in a new tab"
            className="text-gray-800 hover:underline focus:outline-2 focus:outline-offset-2"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/thommie-wallin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn — opens in a new tab"
            className="text-gray-800 hover:underline focus:outline-2 focus:outline-offset-2"
          >
            LinkedIn
          </a>

          <a
            href="/resume.pdf"
            aria-label="Download resume (PDF)"
            className="text-gray-800 hover:underline focus:outline-2 focus:outline-offset-2"
          >
            Resume
          </a>
        </div>

        <form
          action="https://formspree.io/f/yourFormId"
          method="POST"
          className="w-full mt-4 flex flex-col gap-4"
          aria-label="Contact form"
        >
          <div className="flex flex-col">
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your name"
              className="w-full border border-gray-200 rounded-md px-3 py-2 text-gray-900 focus:outline-2 focus:outline-offset-2"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              name="_replyto"
              type="email"
              required
              placeholder="your.email@example.com"
              className="w-full border border-gray-200 rounded-md px-3 py-2 text-gray-900 focus:outline-2 focus:outline-offset-2"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Write your message..."
              className="w-full border border-gray-200 rounded-md px-3 py-2 text-gray-900 focus:outline-2 focus:outline-offset-2 resize-vertical"
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-2 focus:outline-offset-2"
            aria-label="Send message"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
