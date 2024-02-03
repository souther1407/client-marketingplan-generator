import { useState } from "react";

export const useFetch = () => {
  const [fetching, setFeching] = useState(false);

  const fetchApi = async (fetchData) => {
    try {
      setFeching(true);
      const response = await fetchData();
      return response;
    } catch (error) {
      alert(error.message);
    } finally {
      setFeching(false);
    }
  };

  return { fetching, fetchApi };
};
