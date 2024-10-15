// import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/productsSlice";

function AllProducts() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts("/public/DB/products.json"));
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h3 className="text-5xl text-center mb-10 font-mono font-extrabold">
        Popular Movies
      </h3>
      <ul className=" grid grid-cols-1 sm:grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
        {products.map((movie) => (
          <li
            key={movie.id}
            className="bg-orange-600 rounded-2xl overflow-hidden"
          >
            <div></div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllProducts;
