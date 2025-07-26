import { Link } from "react-router";
import { FaArrowRightLong } from "react-icons/fa6";

function Hero() {
  return (
    <div className="flex flex-col gap-10 bg-linear-150 from-[#FDE68A] to-[#FCA5A5] p-10 lg:min-h-[70vh] lg:flex-row lg:items-center lg:justify-between">
      <div className="lg:w-1/2">
        <h2 className="text-3xl leading-14 font-semibold capitalize md:text-4xl xl:text-5xl">
          Temukan furniture terbaik, stylish, dan nyaman untuk rumahmu
        </h2>
        <p className="mt-4 text-lg md:text-xl">
          Pilihan terbaik untuk ruangan lebih nyaman dan bergaya
        </p>
        <Link
          to="/products"
          className="mx-auto mt-10 flex items-center justify-center gap-4 rounded-full border border-transparent bg-white px-6 py-3 font-semibold hover:border-slate-800 sm:w-80 lg:mx-0"
        >
          <span>Lihat Produk Selengkapnya</span>{" "}
          <FaArrowRightLong className="text-xl" />
        </Link>
      </div>
      <img src="/example.png" alt="example furniture" />
    </div>
  );
}

export default Hero;
