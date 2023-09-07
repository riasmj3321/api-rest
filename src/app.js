import express from 'express';
import cors from "cors";
import 'dotenv/config';
import { createProduct, deleteProduct, getAllProducts, getProductById, productosDB, updateProduct } from './models/productos.js';
getAllProducts
getProductById
createProduct
updateProduct
deleteProduct


const app = express()
app.use(express.json());
app.use(cors());

app.get('/productos', (req, res) => {
  res.json(productosDB);
})

app.get('/productos/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = getProductById(productId);
  
    if (!product) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
  
    res.json({ product });
  });

  app.post('/productos', (req, res) => {
    const newProduct = createProduct(req.body);
    res.status(201).json({ message: 'Producto creado con éxito', newProduct });
  });

  app.put('/productos/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const updatedProduct = req.body;
    const product = updateProduct(productId, updatedProduct);
  
    if (!product) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
  
    res.json({ message: 'Producto actualizado con éxito', product });
  });

  app.delete('/productos/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const deleted = deleteProduct(productId);
  
    if (!deleted) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
  
    res.json({ message: 'Producto eliminado con éxito' });
  });


const port = process.env.PORT ?? 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})