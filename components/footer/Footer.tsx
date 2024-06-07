export default function Footer() {
  return (
    <footer className="flex w-full flex-col border-t border-gray-600">
      <div className="max-w-7xl px-6 py-1 mt-8">
        <p>Copyright &copy; {new Date().getFullYear()}
          <a className="hover:text-fuchsia-400" href='https://lulubiu.com/'> Developer.lulu</a>
        </p>
      </div>
    </footer>
  );
}