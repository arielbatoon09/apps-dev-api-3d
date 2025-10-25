import { Request, Response } from 'express';
import {
  createProductService,
  updateProductService,
  getAllProductsService,
  getAllActiveProductsService,
  hardDeleteProductService,
  softDeleteProductService,
  restoreProductService,
  getProductByIdService
} from "@/services/products";

class ProductController {
  // Get All Products
  async getAllProducts(req: Request, res: Response) {
    const result = await getAllProductsService();

    if (result.status === "error") {
      return res.status(400).json(result);
    }

    return res.status(200).json(result);
  }

  // Get All Active Products
  async getAllActiveProducts(req: Request, res: Response) {
    const result = await getAllActiveProductsService();

    if (result.status === "error") {
      return res.status(400).json(result);
    }

    return res.status(200).json(result);
  }

  // Get Product By ID
  async getProductById(req: Request, res: Response) {
    const { id } = req.body;

    const result = await getProductByIdService(id);

    if (result.status === "error") {
      return res.status(400).json(result);
    }

    res.status(200).json(result);
  }

  // Create Product
  async createProduct(req: Request, res: Response) {
    const result = await createProductService(req.body);

    if (result.status === "error") {
      return res.status(400).json(result);
    }

    return res.status(201).json(result);
  }

  // Update Product
  async updateProduct(req: Request, res: Response) {
    const { id, ...data } = req.body;

    const result = await updateProductService(id, data);

    if (result.status === "error") {
      return res.status(400).json(result);
    }

    res.status(200).json(result);
  }

  // Hard Delete Product
  async hardDeleteProduct(req: Request, res: Response) {
    const { id } = req.body;

    const result = await hardDeleteProductService(id);

    if (result.status === "error") {
      return res.status(400).json(result);
    }

    res.status(200).json(result);
  }

  // Soft Delete Product
  async softDeleteProduct(req: Request, res: Response) {
    const { id } = req.body;

    const result = await softDeleteProductService(id);

    if (result.status === "error") {
      return res.status(400).json(result);
    }

    res.status(200).json(result);
  }

  // Restore Product
  async restoreProduct(req: Request, res: Response) {
    const { id } = req.body;

    const result = await restoreProductService(id);

    if (result.status === "error") {
      return res.status(400).json(result);
    }

    res.status(200).json(result);
  }

}

export default new ProductController();