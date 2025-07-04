# Zapp - Full-Stack Application

This repository contains the source code for Zapp, a full-stack web application. The project is divided into a React-based frontend and a Node.js/Express backend.

---

## About The Project

This document provides a guide to setting up and running both the frontend and backend services for the Zapp application. It includes lists of technologies used, setup instructions, and available scripts.

---

## Built With

### Frontend

* React
* Vite
* React Router
* Axios
* Google Maps Platform

### Backend

* Node.js
* Express
* Mongoose
* MongoDB
* CORS

---

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

* npm
    ```bash
    npm install npm@latest -g
    ```
* Node.js (v14 or later)

### Installation

1.  Clone the repo
    ```bash
    git clone [https://github.com/your_username/zapp.git](https://github.com/your_username/zapp.git)
    ```
2.  Navigate to the frontend directory and install NPM packages
    ```bash
    cd zapp/zapp-frontend
    npm install
    ```
3.  Navigate to the backend directory and install NPM packages
    ```bash
    cd ../zapp-backend
    npm install
    ```
4.  Create a `.env` file in both the `zapp-frontend` and `zapp-backend` directories. You'll need to add your configuration variables here (e.g., database connection strings, API keys).
    * Example `zapp-backend/.env`:
        ```
        PORT=8000
        DATABASE_URL=your_mongodb_connection_string
        ```
    * Example `zapp-frontend/.env`:
        ```
        VITE_API_BASE_URL=http://localhost:8000
        VITE_Maps_API_KEY=your_Maps_api_key
        ```

---

## Usage

### Running the Frontend

To run the frontend development server, navigate to the `zapp-frontend` directory and use the following command. The application will be available at `http://localhost:5173` by default.

```bash
npm run dev
