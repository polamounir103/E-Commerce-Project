import { useEffect } from "react";
import Banner from "../components/home/Banner";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/productsSlice";
export default function Home() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts("/public/DB/products.json"));
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div className="" style={{ minHeight: "40dvh" }}>
        <Banner />
        <>
          <div>
            <h3 className="text-5xl text-center mb-10 font-mono font-extrabold">
              ALl Products
            </h3>
            <ul className=" grid grid-cols-1 sm:grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
              {products.map((pro) => (
                <li key={pro.id}>
                  <a href={`/product/${pro.id}`} className="group relative block overflow-hidden">
                    <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
                      <span className="sr-only">Wishlist</span>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        />
                      </svg>
                    </button>

                    <img
                      src="https://images.unsplash.com/photo-1628202926206-c63a34b1618f?q=80&w=2574&auto=format&fit=crop"
                      alt=""
                      className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                    />

                    <div className="relative border border-gray-100 bg-white p-6">
                      <p className="text-gray-700">
                        {pro.price} $
                        <span className="text-gray-400 line-through"></span>
                      </p>

                      <h3 className="mt-1.5 text-lg font-medium text-gray-900">
                        {pro.name}
                      </h3>

                      <p className="mt-1.5 line-clamp-3 text-gray-700">
                      {pro.details}
                      </p>

                      <form className="mt-4 flex gap-4">
                        <button className="block w-full rounded bg-gray-100 px-4 py-3 text-sm font-medium text-gray-900 transition hover:scale-105">
                          Add to Cart
                        </button>

                        <button
                          type="button"
                          className="block w-full rounded bg-gray-900 px-4 py-3 text-sm font-medium text-white transition hover:scale-105"
                        >
                          Buy Now
                        </button>
                      </form>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </>
      </div>
    </>
  );
}
