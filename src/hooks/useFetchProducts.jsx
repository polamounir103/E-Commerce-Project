import { useState, useEffect } from "react";
import axios from "axios";

export default function useFetchProducts(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(url);
        setData(response.data);
        setError(null); 
      } catch (err) {
        setError(err.message || "Something went wrong"); 
      } finally {
        setLoading(false); 
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error }; 
}
