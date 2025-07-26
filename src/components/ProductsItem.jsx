import Card from "@mui/material/Card";
import Rating from "@mui/material/Rating";

function ProductsItem({ product }) {
  return (
    <Card key={product.id} variant="outlined">
      <div className="bg-slate-100">
        <img
          src={product.thumbnail}
          alt={`product-${product.id}`}
          className="mx-auto"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 text-sm">
          <p className="italic">{product.rating}</p>
          <Rating defaultValue={product.rating} precision={0.1} readOnly />
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold">{product.title}</h3>
          <p className="font-medium">${product.price}</p>
          <p className="mt-4 text-slate-600">
            Available Stock: {product.stock}
          </p>
        </div>
      </div>
    </Card>
  );
}

export default ProductsItem;
