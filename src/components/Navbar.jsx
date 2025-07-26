import { useState } from "react";
import { Link } from "react-router";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative flex items-center justify-between p-4 md:static md:px-10 lg:px-20">
      <Link to="/" className="flex items-center gap-4">
        <img src="/logo.png" alt="logo" className="w-10" />
        <h1 className="text-2xl font-bold">
          Furni<span className="text-orange-500">style</span>
        </h1>
      </Link>
      <button
        className="cursor-pointer p-4 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="grid justify-items-center gap-1.5">
          <span
            className={`h-1 w-8 rounded-full bg-black transition duration-300 ${isOpen && "translate-y-2.5 rotate-45"}`}
          ></span>
          <span
            className={`h-1 w-8 rounded-full bg-black transition duration-300 ${isOpen && "scale-x-0"}`}
          ></span>
          <span
            className={`h-1 w-8 rounded-full bg-black transition duration-300 ${isOpen && "-translate-y-2.5 -rotate-45"}`}
          ></span>
        </div>
      </button>
      <nav
        className={`absolute top-20 left-0 flex w-full flex-col items-center justify-center gap-6 bg-white p-4 py-10 text-lg font-medium transition duration-300 md:static md:w-auto md:translate-x-0 md:flex-row md:p-0 ${!isOpen && "-translate-x-full"}`}
      >
        <Link to="/" className="hover:text-orange-500">
          Beranda
        </Link>
        <Link to="/products" className="hover:text-orange-500">
          Daftar Produk
        </Link>
        <Link to="/about" className="hover:text-orange-500">
          Tentang Kami
        </Link>
      </nav>
    </section>
  );
}

export default Navbar;
