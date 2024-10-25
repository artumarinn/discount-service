# Discount Service Microservice

## Overview 

The Discount Service is a microservice that provides an efficient way to manage discounts within a broader application through a RESTful API. It enables users to create, retrieve, update, and delete discount records stored in a PostgreSQL database. Designed to be modular, scalable, and easy to deploy, this service is containerized using Docker, ensuring consistent performance across various environments.

This microservice is ideal for e-commerce platforms, retail management systems, or any application requiring a robust discount management feature. By decoupling the discount functionality into its own microservice, it allows for easier maintenance, scaling, and integration with other services within the larger application ecosystem.

## 🚀 Features

- **Create Discounts**: Add new discounts with name and percentage
- **Retrieve Discounts**: Fetch all existing discounts
- **Update Discounts**: Modify existing discounts
- **Delete Discounts**: Remove discounts from the database

## 🛠 Tech Stack

- **Node.js**: JavaScript runtime for building scalable network applications
- **Express**: Web framework for Node.js to build APIs quickly and easily
- **PostgreSQL**: Powerful, open-source relational database management system
- **Docker**: Platform for developing, shipping, and running applications in containers

## 📁 Project Structure

```
discount-service/
│
├── config/
│   └── database.js             # Database connection configuration
│
├── controllers/
│   └── discountController.js   # Logic for handling discount requests
│
├── models/
│   └── discountModel.js        # Database queries related to discounts
│
├── routes/
│   └── discountRoutes.js       # Routes for the discount API
│
├── .env                        # Environment variables
├── .gitignore                  # Specifies ignored files
├── Dockerfile                  # Docker image instructions
├── docker-compose.yml          # Docker services configuration
└── app.js                      # Application entry point
```

## 📄 File Descriptions

### `config/database.js`
Contains PostgreSQL database connection configuration using the `pg` library, with connection details from environment variables.

### `controllers/discountController.js`
Manages incoming HTTP requests for discounts with functions to create, retrieve, update, and delete discounts.

### `models/discountModel.js`
Contains database queries for the discounts table with CRUD operations.

### `routes/discountRoutes.js`
Defines API routes and maps HTTP methods to controller functions.

### `app.js`
Application entry point that sets up the Express server, middleware, and routes.

## 🚀 Deployment Instructions

### Prerequisites
- Docker and Docker Compose installed

### Setup Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/<your-username>/discount-service.git
   cd discount-service
   ```

2. **Configure Environment**
   Create a `.env` file in the root directory:
   ```env
   DB_USER=your_db_user
   DB_HOST=postgres
   DB_NAME=discounts
   DB_PASSWORD=your_db_password
   DB_PORT=5432
   ```

3. **Build and Run**
   ```bash
   docker-compose up -d
   ```

4. **Verify Deployment**
   ```bash
   docker ps
   ```
   You should see both PostgreSQL and Node.js containers running.

5. **Access the API**
   The API will be available at `http://localhost:3000/api/discounts`

### Stopping the Service
```bash
docker-compose down
```

## 💡 Implementation

The Discount Service offers a clean and organized architecture:

- **Separation of Concerns**: The project is modular, with clear separation between routes, controllers, and models, facilitating maintenance and scalability.
- **Environment Management**: Environment variables allow easy configuration without altering the codebase, promoting security and flexibility.
- **Containerization**: Docker simplifies the deployment process, providing consistency across different systems and reducing setup time.

## 📦 Docker Integration

The service uses Docker Compose to manage:
- **PostgreSQL database container****
- **Node.js application container**
- **Container networking**
- **Environment variable management**

This ensures consistent development and deployment environments across different machines.

## 🔧 Development

The microservice is built to be extensible. Future improvements could include:

- **Adding authentication** for better security.
- **Enhancing error handling** and logging.
- **Integrating with other microservices** for more comprehensive application scenarios.
- **Implementing caching** to optimize read performance.
