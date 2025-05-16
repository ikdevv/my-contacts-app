# MyContacts App

A full-stack application for managing contacts with image support.  
The project consists of two main parts:

- **Backend:** Node.js/Express API server with MongoDB for data storage.
- **Frontend:** React + TypeScript + Vite app for user interface.

---

## Technologies Used

### Backend

- Node.js
- Express
- MongoDB (via Mongoose)
- Multer (for image uploads)
- CORS
- dotenv

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- Axios
- React Router

---

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- MongoDB instance (local or cloud)
- npm or yarn package manager

---

## Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd mycontacts-backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the `mycontacts-backend` directory with the following variables:

   ```
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   ```

4. Start the backend server:
   - For production:
     ```bash
     npm start
     ```
   - For development with auto-reload:
     ```bash
     npm run dev
     ```

The backend server will start on the port specified in `.env` (default 5000).

---

## Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd mycontacts-frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the frontend development server:
   ```bash
   npm run dev
   ```

The frontend will start on `http://localhost:5173` by default and communicate with the backend API.

---

## Usage

- Access the frontend app at `http://localhost:5173`.
- The frontend communicates with the backend API at `http://localhost:<PORT>` (default 5000).
- You can manage contacts and upload images through the UI.

---

## Project Structure

```
mycontacts-app/
├── mycontacts-backend/       # Backend API server
│   ├── controllers/          # API route controllers
│   ├── models/               # Mongoose models
│   ├── routes/               # Express routes
│   ├── config/               # Database connection and config
│   ├── images/               # Uploaded images storage
│   ├── server.js             # Backend server entry point
│   └── package.json          # Backend dependencies and scripts
├── mycontacts-frontend/      # Frontend React app
│   ├── src/                  # React source code
│   ├── public/               # Public assets
│   ├── package.json          # Frontend dependencies and scripts
│   ├── vite.config.ts        # Vite configuration
│   └── README.md             # Frontend README (template)
└── README.md                 # This file
```

---

## License

This project is licensed under the ISC License.

---

## Author

ikdevv
