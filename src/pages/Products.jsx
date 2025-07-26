import Skeleton from "@mui/material/Skeleton";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductsItem from "../components/ProductsItem";
import TextField from "@mui/material/TextField";
import { toast } from "sonner";

function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const delay = setTimeout(() => {
      axios
        .get("https://dummyjson.com/products/category/furniture")
        .then((response) => {
          console.log("Terpanggil!");
          if (search !== "") {
            const filteredProducts = response.data.products?.filter((product) =>
              product.title.toLowerCase().includes(search.toLowerCase()),
            );
            setProducts(filteredProducts);
          } else {
            setProducts(response.data.products || []);
          }
        })
        .catch((error) => {
          console.error("Error: ", error);
          toast.error(
            "Terjadi kesalahan saat mengambil data produk, silahkan coba lagi nanti.",
          );
        });
    }, 1000);

    return () => clearTimeout(delay);
  }, [search]);

  return (
    <div className="p-4">
      <div className="flex flex-col items-center justify-center gap-10">
        <h2 className="text-center text-2xl font-bold md:text-3xl">
          Daftar Produk
        </h2>
        <TextField
          label="Cari Barang"
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
          className="w-80"
        />
      </div>
      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {products.length === 0 ? (
          <>
            <div>
              <Skeleton
                variant="rectangular"
                width="100%"
                height={200}
                animation="wave"
              />
              <Skeleton variant="text" width="30%" animation="wave" />
              <Skeleton
                variant="text"
                sx={{ fontSize: "1rem" }}
                width="80%"
                animation="wave"
              />
              <Skeleton variant="text" width="60%" animation="wave" />
              <Skeleton variant="text" width="40%" animation="wave" />
            </div>
            <div>
              <Skeleton
                variant="rectangular"
                width="100%"
                height={200}
                animation="wave"
              />
              <Skeleton variant="text" width="30%" animation="wave" />
              <Skeleton
                variant="text"
                sx={{ fontSize: "1rem" }}
                width="80%"
                animation="wave"
              />
              <Skeleton variant="text" width="60%" animation="wave" />
              <Skeleton variant="text" width="40%" animation="wave" />
            </div>
            <div>
              <Skeleton
                variant="rectangular"
                width="100%"
                height={200}
                animation="wave"
              />
              <Skeleton variant="text" width="30%" animation="wave" />
              <Skeleton
                variant="text"
                sx={{ fontSize: "1rem" }}
                width="80%"
                animation="wave"
              />
              <Skeleton variant="text" width="60%" animation="wave" />
              <Skeleton variant="text" width="40%" animation="wave" />
            </div>
          </>
        ) : (
          <>
            {products.map((product) => (
              <ProductsItem key={product.id} product={product} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default Products;
