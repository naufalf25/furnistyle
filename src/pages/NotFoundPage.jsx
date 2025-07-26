import { Link } from "react-router";

function NotFoundPage() {
  return (
    <div className="flex h-[60vh] flex-col items-center justify-center gap-10">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-5xl font-bold md:text-6xl lg:text-7xl">404</h2>
        <p className="text-xl font-medium italic md:text-2xl">
          Halaman tidak ditemukan
        </p>
      </div>
      <Link
        to="/"
        className="w-full max-w-[300px] rounded-full border px-6 py-2 text-center font-semibold md:w-[300px]"
      >
        Kembali Ke Beranda
      </Link>
    </div>
  );
}

export default NotFoundPage;
