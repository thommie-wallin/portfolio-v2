interface FooterProps {
  name?: string;
}

export default function Footer({ name = "My Name" }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 px-6 bg-white border-t border-gray-200">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-4">
        <p className="text-sm text-gray-500">
          © {currentYear} {name}
        </p>

        <div className="flex gap-4">
          <a
            href="https://github.com/thommie-wallin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-blue-600"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/thommie-wallin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-blue-600"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
