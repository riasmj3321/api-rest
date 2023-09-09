import express from "express";
import cors from "cors";
import "dotenv/config";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  productosDB,
  updateProduct,
} from "./models/productos.js";
import { randomUUID } from "node:crypto";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/productos", (req, res) => {
  res.json(productosDB);
});

app.get("/productos/:id", (req, res) => {
  const id = req.params.id;

  const product = productosDB.find((product) => product.id === id);

  if (!product) {
    return res.status(404).json({ error: "Producto no encontrado" });
  }

  res.json(product);
});

app.post("/productos", (req, res) => {
  const { nombre, precio, color, stock } = req.body;
  if (!nombre || !precio || !color || !stock) {
    return res.status(400).json({ error: "error en la peticion" });
  }
  const nuevoProducto = {
    id: randomUUID(),
    nombre,
    precio,
    color,
    stock,
  };
  productosDB.push(nuevoProducto);
  return res.status(201).json(nuevoProducto);
});

app.patch("/productos/:id", (req, res) => {
  const id = req.params.id;
  const index = productosDB.findIndex((nombre) => nombre.id == id);
  if (index === -1) {
    return res.status(404).json({ error: "no encontrado" });
  } else {
    const nombreactualizado = { ...productosDB[index], ...req.body };
    productosDB[index] = nombreactualizado;
    res.json(nombreactualizado);
  }
});

app.delete("/productos/:id", (req, res) => {
  const id = req.params.id;

  const index = productosDB.findIndex((nombre) => nombre.id === id);
  if (index === -1) {
    return res.status(404).json({ error: "no encontrado producto" });
  }
  productosDB.splice(index, 1);
  res.sendStatus(204);
});

const port = process.env.PORT ?? 3000;
app.listen(port, () => {
  console.log(`Puerto activo ${port}`);
});
