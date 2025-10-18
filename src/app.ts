import express from "express";
import cors from "cors";
import routes from "@/routes";

export const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
}));

app.use(express.json());

app.use("/api", routes);