import { Link } from "react-router";
import Hero from "../components/Hero";
import PopularProducts from "../components/PopularProducts";
import { FaArrowRightLong } from "react-icons/fa6";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      axios
        .get("https://dummyjson.com/products/category/furniture")
        .then((response) => {
          const popularProducts = response.data.products
            .sort((a, b) => b.rating - a.rating)
            .slice(0, 2);

          setProducts(popularProducts);
        })
        .catch((error) => {
          console.error("Error: ", error);
          toast.error(
            "Terjadi kesalahan saat mengambil data produk populer, silahkan coba lagi nanti.",
          );
        });
    }, 2000);
  }, []);

  return (
    <section>
      <Hero />
      <div className="mt-20 p-4">
        <h3 className="text-center text-2xl font-semibold md:text-3xl lg:text-4xl">
          Selamat datang di Furnistyle!
        </h3>
        <PopularProducts products={products} />
        <div className="mt-10 px-4 md:px-10">
          <Link
            to="/products"
            className="flex w-full items-center justify-center gap-4 rounded-full border px-8 py-2 text-lg font-semibold hover:border-orange-400 hover:text-orange-500"
          >
            <span>Lihat Produk Kami Selengkapnya</span>{" "}
            <FaArrowRightLong className="text-xl" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
