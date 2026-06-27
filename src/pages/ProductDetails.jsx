import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data));
  }, [id]);

  if (!product) return <h1>Loading...</h1>;

  return (
    <div className="p-10">
      <img
        src={product.image}
        alt=""
        className="h-64"
      />

      <h1 className="text-3xl font-bold mt-5">
        {product.title}
      </h1>

      <p className="mt-3">
        {product.description}
      </p>

      <h2 className="text-2xl mt-3">
        ₹ {product.price}
      </h2>
    </div>
  );
}

export default ProductDetails;