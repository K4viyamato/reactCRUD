import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "../components/Products";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { BACK_END } from "../App";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getProducts = async () => {
    try { 
      setIsLoading(true);
      const response = await axios.get(`https://sample-node-api-x4kp.onrender.com/api/products/`);
      setProducts(response.data);
      setIsLoading(false);

    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <div>
          <Link to={'/create'} className="inline-block mt-4  text-center shadow-md text-sm bg-green-500 text-white rounded px-4 py-2 font-bold hover:bg-green-600 transition-all hover:cursor-pointer">Add Product</Link>
      </div>
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-5 ">
      {isLoading ? (<div>Loading....</div>) : (
        <>
          {products.length > 0 ? (
            <>
              {products.map((product, index) => {
                return (
                  <Product key={index} product={product} getProducts={getProducts}/>
                );
              })}
            </>
          ) : ( <div>There is No products</div>)}
        </>
      )}
    </div>
    </div>
  );
};

export default HomePage;
