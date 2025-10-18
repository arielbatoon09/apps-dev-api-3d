import ProductRepository from "@/repositories/ProductRepository";

export async function restoreProductService(id: string) {
  // Check if Product ID is provided
  if (!id) {
    return { status: "error", message: "Product ID was not provided!" };
  }

  // Check if Product is existing in the Database
  const existingProduct = await ProductRepository.findById(id);
  if (!existingProduct) {
    return { status: "error", message: "Product is not found!" };
  }

  // Restore Product
  const result = await ProductRepository.restoreProduct(id);

  return {
    status: "success",
    message: `Activated Product ID: ${id} Successfully!`,
    data: result
  }
}