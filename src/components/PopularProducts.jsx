import Skeleton from "@mui/material/Skeleton";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";

function PopularProducts({ products }) {
  return (
    <div className="mt-20 p-4 md:px-10">
      <p className="text-center text-lg font-semibold md:text-xl lg:text-2xl">
        Produk Populer Kami
      </p>
      {products?.length === 0 ? (
        <div className="mt-10 flex flex-col items-center justify-center gap-10 md:flex-row">
          <div>
            <Stack spacing={1}>
              <Skeleton
                variant="rectangular"
                width={550}
                height={250}
                animation="wave"
              />
              <Skeleton
                variant="text"
                sx={{ fontSize: "1rem" }}
                animation="wave"
              />
              <Skeleton
                variant="text"
                sx={{ fontSize: "1rem" }}
                width="60%"
                animation="wave"
              />
              <Skeleton
                variant="text"
                sx={{ fontSize: "1rem" }}
                width="30%"
                animation="wave"
              />
            </Stack>
          </div>
          <div>
            <Stack spacing={1}>
              <Skeleton
                variant="rectangular"
                width={550}
                height={250}
                animation="wave"
              />
              <Skeleton
                variant="text"
                sx={{ fontSize: "1rem" }}
                animation="wave"
              />
              <Skeleton
                variant="text"
                sx={{ fontSize: "1rem" }}
                width="60%"
                animation="wave"
              />
              <Skeleton
                variant="text"
                sx={{ fontSize: "1rem" }}
                width="30%"
                animation="wave"
              />
            </Stack>
          </div>
        </div>
      ) : (
        <div className="mt-10 flex flex-col items-center justify-center gap-10 md:flex-row">
          {products?.map((product) => (
            <Card
              key={product.id}
              variant="outlined"
              className="w-full rounded-lg md:w-1/2"
            >
              <img
                src={product.thumbnail}
                alt={`product-${product.id}`}
                className="max-h-80 w-full bg-slate-200 object-cover p-4"
              />
              <div className="p-4">
                <div className="mb-2 flex items-center gap-2">
                  <p className="italic">{product.rating}</p>
                  <Rating
                    defaultValue={product.rating}
                    precision={0.1}
                    readOnly
                  />
                </div>
                <h4 className="text-lg font-semibold">{product.title}</h4>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

export default PopularProducts;
