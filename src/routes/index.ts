import { Router } from "express";
import { ProductController } from "@/controllers/ProductController";

const router = Router();

router.get("/", (req, res) => {
  res.send("API is running...");
});

// Product Endpoints
router.post("/product-create", ProductController.createProduct);
router.post("/product-update", ProductController.updateProduct);

export default router;