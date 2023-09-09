export const productosDB = [
  {
    id: "e92d77d1-21a6-45a9-ba2f-23f0ad485980",
    nombre: "Zapatillas Nike tornado",
    precio: 200000,
    color: "rojo",
    stock: 18,
  },
  {
    id: "0283ab23-83db-4b13-a654-73ac7f44aac4",
    nombre: "Camiseta Adidas Originals",
    precio: 45000,
    color: "Negro",
    stock: 35,
  },
  {
    id: "6608b7d6-46fd-4f35-bb35-f162ef8f8efe",
    nombre: "Pantalones Vaqueros Levi's",
    precio: 80000,
    color: "Azul",
    stock: 25,
  },
  {
    id: "a0b55aed-61c8-4a4f-9da0-3bc1c75d03fb",
    nombre: "Reloj Casio G-Shock",
    precio: 150000,
    color: "Negro",
    stock: 12,
  },
  {
    id: "209d4079-8e24-4e1b-a6a4-a1694bea9aa2",
    nombre: "Portátil Dell XPS 13",
    precio: 1500000,
    color: "Plateado",
    stock: 8,
  },
];

export function getAllProducts() {
  return products;
}

export function getProductById(id) {
  return products.find((product) => product.id === id);
}

export function createProduct(newProduct) {
  newProduct.id = products.length + 1;
  products.push(newProduct);
  return newProduct;
}

export function updateProduct(id, updatedProduct) {
  const index = products.findIndex((product) => product.id === id);
  if (index !== -1) {
    products[index] = { ...products[index], ...updatedProduct };
    return products[index];
  }
  return null;
}

export function deleteProduct(id) {
  const index = products.findIndex((product) => product.id === id);
  if (index !== -1) {
    products.splice(index, 1);
    return true;
  }
  return false;
}
