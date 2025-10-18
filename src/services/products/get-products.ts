import ProductRepository from "@/repositories/ProductRepository";

// Get All Products regardles if Active / Not
export async function getAllProductsService() {
  const result = await ProductRepository.findAll();

  return {
    status: "success",
    message: "Fetched all products successfully!",
    data: result
  }
}

// Get All Active Products
export async function getAllActiveProductsService() {
  const result = await ProductRepository.findAllActive();

  return {
    status: "success",
    message: "Fetched all active products successfully!",
    data: result
  }
}