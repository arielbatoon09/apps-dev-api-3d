import { PrismaClient } from "@prisma/client";
import { type CreateProductData } from "@/services/products";

const prisma = new PrismaClient();

export const ProductRepository = {
  async create(data: CreateProductData) {
    return await prisma.product.create({ data });
  }
}