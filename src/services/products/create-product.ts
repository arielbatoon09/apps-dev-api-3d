import { ProductRepository } from "@/repositories/ProductRepository";

export interface CreateProductData {
  name: string;
  description: string;
  price: number;
  stock: number;
}

export const createProductService = async (data: CreateProductData) => {
  // Validate required fields
  if (!data.name || !data.description || data.price == null || data.stock == null) {
    throw new Error("Missing required fields");
  }

  // Validate price and stock
  if (data.price < 0 || data.stock < 0) {
    throw new Error("Price and stock must be non-negative");
  }

  // Create Product into the Database
  return ProductRepository.create({
    name: data.name,
    description: data.description,
    price: data.price,
    stock: data.stock,
  });
}