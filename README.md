# Discount Service Microservice

A microservice designed to manage discounts within an application through a RESTful API. Built with Node.js, Express, and PostgreSQL.

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
- **Git**: Version control system for tracking changes in the codebase

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
   The API will be available at `http://localhost:3000/discounts`

### Stopping the Service
```bash
docker-compose down
```

## 💡 Implementation

The Discount Service provides a simple REST API for discount management, containerized with Docker for consistent deployment across environments. The service architecture ensures:

- Clean separation of concerns between routes, controllers, and models
- Centralized database configuration
- Environment-based configuration management
- Docker containerization for both application and database

## 📦 Docker Integration

The service uses Docker Compose to manage:
- PostgreSQL database container
- Node.js application container
- Container networking
- Environment variable management

This ensures consistent development and deployment environments across different machines.

## 🔧 Development

For development purposes, the codebase follows a modular structure allowing for easy maintenance and updates. The separation between controllers, models, and routes supports scalable development practices.

For questions or support, please open an issue in the repository.