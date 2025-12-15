export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 px-6 bg-white border-t border-gray-200">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-4">
        <p className="text-sm text-gray-500">
          © {currentYear} Thommie Wallin
        </p>
      </div>
    </footer>
  );
}
