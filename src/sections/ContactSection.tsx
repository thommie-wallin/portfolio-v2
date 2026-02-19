import { useForm, ValidationError } from '@formspree/react';
import { useEffect, useState } from 'react';
const FORM_HASHID = import.meta.env.VITE_FORMSPREE_HASHID;

export default function ContactSection() {
  const [state, handleSubmit] = useForm(FORM_HASHID);
  const [visible, setVisible] = useState(false);
  
    useEffect(() => {
      const id = setTimeout(() => setVisible(true), 50);
      return () => clearTimeout(id);
    }, []);

  if (state.succeeded) {
    return (
      <section id="contact" className="w-full py-16 px-6">
        <div className={`max-w-md mx-auto gap-6 text-center transition-all duration-500 ease-out ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
          <div className="w-full bg-green-50 border border-green-200 rounded-xl shadow-md py-10 px-6">
            <div className="flex flex-col items-center gap-3">
              <h2 className="text-3xl font-bold text-gray-900">
                Thank you!
              </h2>
              <p className="text-gray-600 mt-2">
                Your message has been sent successfully.
              </p>
              <p className="text-gray-600">
                I'll get back to you as soon as possible.
              </p>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
                ✓
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="w-full py-16 px-6 bg-gray-50">
      <div className="max-w-md mx-auto flex flex-col items-center gap-6">
        <h2 className="text-3xl font-semibold">Contact</h2>
        <p className="text-gray-600 text-center max-w-sm">I'm open to new opportunities and collaborations. Reach out via the links below or send me a message.</p>

        <div className="flex gap-6 mt-2">
          <a
            href="https://github.com/thommie-wallin"
            target="_blank"
            aria-label="GitHub — opens in a new tab"
            className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/thommie-wallin"
            target="_blank"
            aria-label="LinkedIn — opens in a new tab"
            className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            LinkedIn
          </a>

          {/* <a
            href="/resume.pdf"
            aria-label="Download resume (PDF)"
            className="text-gray-800 hover:underline focus:outline-2 focus:outline-offset-2"
          >
            Resume
          </a> */}
        </div>

        <form
          onSubmit={handleSubmit}
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
              minLength={2}
              placeholder="Your name"
              className="w-full border border-gray-200 rounded-md px-3 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 focus:ring-2 focus:ring-offset-2 transition-shadow duration-150"
            />
            <ValidationError 
              prefix="Name" 
              field="name"
              errors={state.errors}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="your.email@example.com"
              className="w-full border border-gray-200 rounded-md px-3 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 focus:ring-2 focus:ring-offset-2 transition-shadow duration-150"
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
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
              minLength={10}
              rows={5}
              placeholder="Write your message..."
              className="w-full border border-gray-200 rounded-md px-3 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 focus:ring-2 focus:ring-offset-2 transition-shadow duration-150 resize-vertical"
            />
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="md:cursor-pointer disabled:md:cursor-not-allowed disabled:opacity-70 inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-2 focus:outline-offset-2 transition-colors duration-200"
            aria-label="Send message"
          >
            {state.submitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
}
