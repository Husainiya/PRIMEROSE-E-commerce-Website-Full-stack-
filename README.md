# PRIMEROSE e-Commerce Website (Full-stack)🌸🛒

**PRIMEROSE** is a fully-featured e-commerce platform built using the **MERN stack** (MongoDB, Express.js, React, Node.js)and other modern technologies. The website is designed to provide a seamless online shopping experience, including a user-friendly frontend, an intuitive admin panel for administrators to manage the store, and a robust backend to handle all the necessary server-side operations.This project aims to showcase the power of full-stack development and deliver an efficient, secure, and scalable e-commerce solution.

### Features:

- **Frontend:**
  - Built using **React** and **Bootstrap** to create a responsive, mobile-first design. 
  - Dynamic product listings with filtering and sorting options. 
  - User authentication and session management. 
  - Integrated payment gateway for secure transactions. 
  
- **Admin Panel:**
  - Admin users can manage products, categories, and orders.
  - Ability to add, edit, and delete products.
  - View and manage customer orders and update their status.

- **Backend:**
  - **Node.js** and **Express.js** handle the server-side logic.
  - **MongoDB Atlas** is used for data storage, providing a scalable and reliable database solution.
  - RESTful API endpoints for handling user actions such as authentication, product management, and order processing.
  - Integrated with **Cloudinary** for managing product images and media uploads.

### Technologies Used:

- **Frontend:** React, Bootstrap
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **Cloud Storage:** Cloudinary
- **Authentication:** JWT, bcrypt.js

### Installation and Setup:

Follow these steps to set up the PRIMEROSE e-commerce project locally on your machine:

#### 1. Clone the repository:
```bash
git clone (https://github.com/Husainiya/PRIMEROSE-E-commerce-Website-Full-stack-.git)
cd primerose
```

#### 2. Set up the backend:
- Navigate to the backend directory:
```bash
cd backend
```
- Install the necessary dependencies:
```bash
npm install
```
- Create a `.env` file in the root of the backend directory and add the following variables:
```bash
MONGO_URI=your_mongo_atlas_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_URL=your_cloudinary_url
```
  Replace `your_mongo_atlas_connection_string`, `your_jwt_secret_key`, and `your_cloudinary_url` with your own credentials.

- Start the backend server:
```bash
npm run dev
```

#### 3. Set up the frontend:
- Navigate to the frontend directory:
```bash
cd ../frontend
```
- Install the necessary dependencies:
```bash
npm install
```
- Start the frontend development server:
```bash
npm start
```

#### 4. Access the website:
- Open your browser and go to `http://localhost:5173` to view the application.
```
