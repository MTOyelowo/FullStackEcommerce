import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Products' list");
});

router.get("/:id", (req, res) => {
  console.log(req.params);
  res.send(`Product with id ${req.params.id}`);
});

router.post("/", (req, res) => {
  res.send("New product created");
});

export default router;
