import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";

const url = import.meta.env.VITE_URL;

export function usePostUserAction() {
  const { selectedCity } = useContext(GlobalContext);

  useEffect(() => {
    if (!selectedCity) {
      return;
    }
    const postData = async () => {
      try {
        const response = await fetch(`${url}logs`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            cityCode: selectedCity.code,
            cityName: selectedCity.name,
          }),
        });

        if (!response.ok) throw new Error("Failed to send data log");

        if (response.ok) {
          const result = await response.json();
          console.log("result", result);
        }
      } catch (error) {
        console.error("Error: ", error);
      }
    };

    postData();
  }, [selectedCity]);
}
