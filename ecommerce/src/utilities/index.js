
export const fetchData = async (url) => {
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json"
    },
    method: "GET",
    mode: "cors"
  });

  return response.json();
};

