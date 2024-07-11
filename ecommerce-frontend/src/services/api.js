const API_BASE_URL = "http://20.240.50.144/test";

export const getTopProducts = async (
  company,
  category,
  minPrice,
  maxPrice,
  token
) => {
  const url = `http://20.244.56.144/test/companies/${company}/categories/${category}/products?top=10&minPrice=${minPrice}&maxPrice=${maxPrice}`;

  // http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=1000
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};
