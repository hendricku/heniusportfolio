export default function Footer() {
  return (
    <footer className="w-full bg-white/95 backdrop-blur-lg border-t border-gray-100 py-6 mt-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} All Rights Reserved | Hendrick Paul Llamas Castro
        </p>
      </div>
    </footer>
  );
}
