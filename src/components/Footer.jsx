import { Link } from "react-router";

function Footer() {
  return (
    <div className="mt-20">
      <div className="mx-auto flex items-center justify-center gap-4 py-10">
        <img src="/logo.png" alt="logo" className="w-10 md:w-14" />
        <h1 className="text-xl font-bold md:text-2xl lg:text-3xl">
          Furni<span className="text-orange-500">style</span>
        </h1>
      </div>
      <div className="bg-linear-120 from-[#FFF7ED] to-[#D6CCC2] p-4 text-lg font-semibold md:text-xl">
        <nav className="flex flex-wrap items-center justify-center gap-10 py-10 md:gap-16">
          <Link to="/" className="hover:text-orange-500">
            Beranda
          </Link>
          <Link to="/products" className="hover:text-orange-500">
            Daftar Produk
          </Link>
          <Link to="/about" className="hover:text-orange-500">
            Tentang Kami
          </Link>
          <Link to="/github" className="hover:text-orange-500">
            GitHub
          </Link>
        </nav>
        <p className="border-t border-t-slate-800 py-4 text-center text-sm">
          Made with ❤️ by Muhammad Naufal Farras
        </p>
      </div>
    </div>
  );
}

export default Footer;
