import { Request, Response } from 'express';
import { createProductService, updateProductService } from "@/services/products";

export const ProductController = {
  // Create Product
  async createProduct(req: Request, res: Response) {
    const result = await createProductService(req.body);
    
    res.status(201).json({
      status: "success",
      message: "Product created successfully",
      data: result,
    });
  },

  // Update Product
  async updateProduct(req: Request, res: Response) {
    const result = await updateProductService();
    res.status(200).json(result);
  }
  // Delete Product
}