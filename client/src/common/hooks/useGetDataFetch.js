import { useEffect, useState } from "react";

const url = import.meta.env.VITE_URL;

export function useGetDataFetch({ letter }) {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    if (!letter) return;
    const getData = async () => {
      try {
        const response = await fetch(`${url}places?letter=${letter}`, {
          method: "GET",
        });
        if (!response.ok) {
          throw new Error("Data failed to fetch");
        }
        const data = await response.json();
        setCities(data);
      } catch (error) {
        console.log("Error: ", error || error.message);
      }
    };
    getData();
  }, [letter]);

  return { cities };
}
