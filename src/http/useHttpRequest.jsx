import { useEffect, useState } from "react";

export const useHttpRequest = (url, opts) => {
  console.log(url)

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const fetchData = async () => {
    try {
      const res = await fetch(url, opts);
      const result = await res.json();
      if (res.status > 399) {
        throw result;
      }
      setLoading(true);
      setData(result);
    } catch (error) {
      setError(error);
    }
  }
  useEffect(() => {
    setLoading(false);
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return [data, loading, error];
}