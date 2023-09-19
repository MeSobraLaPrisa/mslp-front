import type { Product } from "../components/ProductCard.astro";

export default async function loadProducts(): Promise<Product[]> {
  const response = await fetch("https://tubular-crepe-43a37d.netlify.app/.netlify/functions/products");
  const data = await response.json();

  console.log(data);

  if (Array.isArray(data)) {
    return data; // Si la respuesta ya es un array de productos, devuélvelo directamente
  } else if (data.products && Array.isArray(data.products)) {
    return data.products; // Si la respuesta tiene una propiedad 'products' que es un array, devuélvelo
  } else {
    throw new Error("La respuesta no contiene un array de productos.");
  }
}

  
  