export const productosDB = [
    {
      id: 123,
      nombre: "Zapatillas Nike tornado",
      precio: 200000,
      color:
        "rojo",
      stock: 18,
    },
    {
        id: 124,
        nombre: "Camiseta Adidas Originals",
        precio: 45000,
        color: "Negro",
        stock: 35,
    },
    {
        id: 125,
        nombre: "Pantalones Vaqueros Levi's",
        precio: 80000,
        color: "Azul",
        stock: 25,
    },
    {
        id: 126,
        nombre: "Reloj Casio G-Shock",
        precio: 150000,
        color: "Negro",
        stock: 12,
    },
    {
        id: 127,
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