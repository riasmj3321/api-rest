# api-rest

# API de Productos

Esta API permite gestionar productos, incluyendo la creación, lectura, actualización y eliminación de productos. Los productos se almacenan en una base de datos ficticia.

## Rutas de la API

- **Obtener todos los productos**: `GET /productos`

  - Esta ruta devuelve una lista de todos los productos disponibles.

- **Obtener un producto por ID**: `GET /productos/:id`

  - Esta ruta permite obtener un producto específico mediante su ID.

- **Crear un nuevo producto**: `POST /productos`

  - Utiliza esta ruta para agregar un nuevo producto a la base de datos. Debes proporcionar el nombre, precio, color y stock del producto en el cuerpo de la solicitud en formato JSON.

- **Actualizar un producto por ID**: `PATCH /productos/:id`

  - Esta ruta te permite actualizar un producto existente. Debes proporcionar el ID del producto que deseas actualizar en la URL y enviar los campos que deseas modificar en el cuerpo de la solicitud en formato JSON.

- **Eliminar un producto por ID**: `DELETE /productos/:id`
  - Utiliza esta ruta para eliminar un producto existente según su ID.

## Ejemplos de Uso

- **Obtener todos los productos**:

GET /productos/:id

- **Crear un nuevo producto**:

POST /productos
Content-Type: application/json

{
"nombre": "Producto Nuevo",
"precio": 19.99,
"color": "Rojo",
"stock": 50
}

- **Actualizar un producto por su ID**:

PATCH /productos/:id
Content-Type: application/json

{
"precio": 24.99,
"stock": 60
}

- **Eliminar un producto por su ID**:

DELETE /productos/:id

**Respuestas**:

Éxito (Código de estado 200):

En caso de éxito, la API devuelve un objeto JSON con los datos solicitados.
Creación exitosa (Código de estado 201):

Cuando se crea un nuevo producto, la API devuelve un objeto JSON con los datos del nuevo producto y un mensaje de éxito.
No encontrado (Código de estado 404):

Si la solicitud se refiere a un recurso que no existe, la API devuelve un mensaje de error.
Error en la solicitud (Código de estado 400):

Si la solicitud no es válida o falta algún dato requerido, la API devuelve un mensaje de error.
Eliminación exitosa (Código de estado 204):

Cuando se elimina un producto con éxito, la API devuelve un código de estado 204 sin contenido.
