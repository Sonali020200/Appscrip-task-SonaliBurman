export default async function fetchProducts() {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
  
    return data.map((product) => ({
      ...product,
      category:
        product.category.includes("women") ? "Women" :
        product.category.includes("men") ? "Men" :
        "Baby & Kids"
    }));
  }
  