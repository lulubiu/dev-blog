export default function Footer() {
  return (
    <footer className="flex w-full flex-col border-t border-gray-600">
      <div className="max-w-7xl px-3 md:px-6 py-1 mt-4 md:mt-8 text-xs md:text-sm">
        <p className="text-center md:text-left">Copyright &copy; {new Date().getFullYear()}
          <a className="hover:text-fuchsia-400" href='https://lulubiu.com/'> Developer.lulu</a>
        </p>
      </div>
    </footer>
  );
}