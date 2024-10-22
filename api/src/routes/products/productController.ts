import { Request, Response } from "express";

export function listProducts(req: Request, res: Response) {
  res.send("Products' list");
}

export function getProductById(req: Request, res: Response) {
  res.send(`Get product by Id: ${req.params.id}`);
}

export function createProduct(req: Request, res: Response) {
  console.log(req.body);
  res.send("Create a product");
}

export function updateProduct(req: Request, res: Response) {
  res.send(`Update product: ${req.params.id}`);
}

export function deleteProduct(req: Request, res: Response) {
  res.send(`Delete product ${req.params.id}`);
}
