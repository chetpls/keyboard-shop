import React, { useEffect, useState,useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../Shop/CartContext";

function ProductPage() {
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/products/${id}`
        );
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product", error);
      }
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart({
        _id: product._id,
        name: product.name,
        price: product.price,
        type: product.type,
        image: product.image,
      });
    }
  };

  if (!product) return <div>Loading...</div>;
  return (
    <div className="flex flex-col min-h-screen bg-[#141414] p-5 text-green">
        <div className="px-5 pt-20 mb-5 lg:grid lg:grid-cols-2 lg:gap-5  gap-5 flex flex-col">
                <img className="rounded-3xl w-96 lg:w-auto place-self-center  " src={product.image} alt={product.name} />
            <div className="order-1 lg:order-2 flex flex-col gap-5">
                <h1 className="text-3xl lg:text-5xl self-start font-bold">{product.name}</h1>
                <h2 className="text-2xl lg:text-3xl font-semibold text-white">${product.price.toFixed(2)}</h2>
                <p className="text-gray-400">
                    Category: <span className="text-white">{product.type}</span>
                </p>
                <p className="text-gray-400">{product.description}</p>
                    <button className="px-5 py-2 mb-2 rounded-md bg-green text-black hover:bg-black lg:w-fit" onClick={handleAddToCart}>
                        <h3 glitch="ADD TO CART">ADD TO CART</h3>
                    </button>
            </div>
        </div>
    </div>
);
}

export default ProductPage;
