import { useState } from 'react'

interface NavbarProps {
  /** Text shown in the left-side brand/link. */
  logoText?: string
}

export default function Navbar({ logoText = 'Your Name' }: NavbarProps) {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#hero', label: 'Home' },
    { href: '#projects', label: 'Projects' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm" aria-label="Main navigation">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-6 py-4">
        <a href="#hero" className="text-xl font-bold text-gray-900">
          {logoText}
        </a>

        {/* Mobile: hamburger button */}
        <div className="md:hidden">
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-controls="mobile-menu"
            aria-expanded={open}
            onClick={() => setOpen((s) => !s)}
            className="p-2 rounded-md focus:outline-2 focus:outline-offset-2 focus:outline-blue-500"
          >
            <span className="sr-only">Toggle menu</span>
            <div className="w-6 h-6 relative">
              <span
                className={`block absolute left-0 top-1/2 w-6 h-0.5 bg-gray-900 transform transition duration-200 ${
                  open ? 'rotate-45' : '-translate-y-1.5'
                }`}
              />
              <span
                className={`block absolute left-0 top-1/2 w-6 h-0.5 bg-gray-900 transition duration-200 ${
                  open ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block absolute left-0 top-1/2 w-6 h-0.5 bg-gray-900 transform transition duration-200 ${
                  open ? '-rotate-45' : 'translate-y-1.5'
                }`}
              />
            </div>
          </button>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex space-x-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-gray-700 hover:text-gray-900 focus:outline-2 focus:outline-offset-2 focus:outline-blue-500"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {open && (
        <div id="mobile-menu" className="md:hidden">
          <div className="px-6 pb-4 space-y-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-gray-700 py-2 rounded-md hover:bg-gray-50 focus:outline-2 focus:outline-offset-2 focus:outline-blue-500"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
