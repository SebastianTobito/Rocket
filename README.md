# 🚀 Prueba Técnica: Contact Sync Dashboard (HubSpot API Simulation)

Este proyecto implementa una solución full-stack que simula la interacción con la API de Contactos de HubSpot. Incluye una **API mock en Node.js/Express** para manejar la lógica del negocio y un **Frontend en React/Vite** para la visualización y gestión de los contactos.

---

## 🏗️ Estructura del Proyecto

El backend fue refactorizado para seguir una arquitectura modular, separando la lógica de la configuración y asegurando la persistencia de datos:

/prueba_rocket_contacto (Carpeta Raíz del Proyecto) ├── README.md │ ├── /frontend │ └── ... (Código React y Componentes) │ └── /backend ├── /src├── /data │ └── contactos.json  ├── /routes │ └── contactRoutes.js  (GET, POST, Persistencia) ├── app.js  ├── index.js (Arranque del servidor) └── contact_status.html 

## 🛠️ Requisitos e Instalación

### Requisitos Previos

* **Node.js** (v18+)
* **npm**

### Proceso de Instalación y Ejecución

1.  Abre dos terminales separadas, una para el **Backend** y otra para el **Frontend**.

### 1. Ejecución del Backend (API)

El servidor de la API simula las rutas de HubSpot y corre en **`http://localhost:3000`**.

# 1. Navegar a la carpeta del Backend
cd backend

# 2. Instalar dependencias
npm install

# 3. Iniciar el servidor con Nodemon (soporta persistencia y actualización en vivo)
npx nodemon index.js


### 1. Ejecución del Frontend (React)

# 1. Navegar a la carpeta del Frontend
cd frontend

# 2. Instalar dependencias
npm install

# 3. Iniciar la aplicación
npm run dev