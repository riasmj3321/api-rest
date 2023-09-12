async function fetchProducts() {
  try {
    const response = await fetch("https://api-riascos-dev.fl0.io/productos/");
    const data = await response.json();
    const productTableBody = document.getElementById("productTableBody");

    data.forEach((product) => {
      const row = document.createElement("tr");
      row.innerHTML = `
                <td>${product.id}</td>
                <td>${product.nombre}</td>
                <td>${product.precio}</td>
                <td>${product.color}</td>
                <td>${product.stock}</td>
            `;
      productTableBody.appendChild(row);
    });
  } catch (error) {
    console.error("Error al obtener los productos:", error);
  }
}

window.addEventListener("load", fetchProducts);
