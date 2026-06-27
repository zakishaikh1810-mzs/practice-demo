import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data));
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-5">
        Products
      </h1>

      <div className="grid md:grid-cols-3 gap-5">
        {products.map((item) => (
          <div
            key={item.id}
            className="border p-4 rounded"
          >
            <img
              src={item.image}
              alt=""
              className="h-40 mx-auto"
            />

            <h2 className="font-bold mt-3">
              {item.title.slice(0, 20)}
            </h2>

            <p>₹ {item.price}</p>

            <button
              onClick={() =>
                navigate(`/product/${item.id}`)
              }
              className="bg-blue-500 text-white px-3 py-1 rounded mt-3"
            >
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;