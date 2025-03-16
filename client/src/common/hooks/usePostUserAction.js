const url = import.meta.env.VITE_URL;

export function usePostUserAction() {
  const postData = async (cityCode) => {
    if (!cityCode) return;

    console.log("Posting user action for:", cityCode);

    try {
      const response = await fetch(`${url}logs`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cityCode }),
      });

      if (!response.ok) throw new Error("Failed to send data log");

      const result = await response.json();
      console.log("Posted log result:", result);
    } catch (error) {
      console.error("Error posting user action:", error);
    }
  };

  return { postData };
}
