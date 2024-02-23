# Spaarks Backend Developer Assignment

This project implements CRUD operations for managing restaurants. It includes features like fetching restaurants based on location and ratings, implementing user authentication, and securing API endpoints. MongoDB Atlas is used as the database, and Docker is utilized for containerization.

## Prerequisites

- Node.js installed on your local machine
- MongoDB Atlas account for accessing sample data
- Postman installed for testing API endpoints

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/Saiteja-Goli/OSOS-Backend-Assignment
```

2.Install dependencies:
```bash
npm install
```
3.Set up environment variables:
Create a `.env` file in the root directory and add the following variables:
```bash
PORT=3000
MONGODB_URI=<your_mongodb_uri>
SECRET_KEY=<your_secret_key>
```
4.Run the application:
```bash
npm start
```

## API Endpoints

### Authentication

- **POST /auth/signup**: Register a new user.
- **POST /auth/login**: Login with registered credentials to obtain a JWT token.

### Restaurant Operations

- **GET /restaurants/byRadius**: Retrieve restaurants based on location and radius.
- **GET /restaurants/byMinMax**: Retrieve restaurants based on location and distance range.

## Docker

1. Build the Docker image:

```bash
docker build -t spaarks-backend .
```
Run the Docker container:
```bash
docker run -p 3000:3000 -d spaarks-backend
```


