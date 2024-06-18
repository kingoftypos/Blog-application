# Blog Application

## Overview
This is a full-stack Blog Application built using the MERN (MongoDB, Express.js, React, Node.js) stack. This application allows users to create, read, update, and delete blog posts. It also supports user authentication and authorization, allowing only registered users to create and manage their own posts.

## Features
- User Authentication (Login, Register)
- Create, Read, Update, and Delete (CRUD) operations for blog posts
- Rich text editor for writing blog posts
- User profile management
- Responsive design

## Technologies Used
- **Frontend**: React, Redux, React Router, Axios
- **Backend**: Node.js, Express.js, JWT (JSON Web Tokens) for authentication
- **Database**: MongoDB, Mongoose
- **Styling**: TailwindCSS

## Installation

### Prerequisites
Make sure you have the following installed:
- Node.js
- MongoDB

### Backend Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/kingoftypos/blog-application.git
   cd blog-application
   ```

2. Navigate to the backend directory:
   ```sh
   cd server
   ```

3. Install backend dependencies:
   ```sh
   npm install
   ```

4. Create a `.env` file in the `backend` directory and add the following environment variables:
   ```env
   PORT=8000
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```

5. Start the backend server:
   ```sh
   npm start
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```sh
   cd client
   ```

2. Install frontend dependencies:
   ```sh
   npm install
   ```

3. Start the frontend development server:
   ```sh
   npm start
   ```

## Usage
1. Open your browser and navigate to `http://localhost:3000`.
2. Register a new account or log in with an existing account.
3. Create, edit, or delete blog posts from the user dashboard.

## Project Structure
```
mern-blog-app/
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── .env
│   ├── server.js
│   └── package.json
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── package.json
│   └── .env
│
└── README.md
```

## API Endpoints

### Auth
- `POST /api/auth/register`: Register a new user
- `POST /api/auth/login`: Login a user

### Posts
- `GET /api/posts`: Get all posts
- `POST /api/posts`: Create a new post
- `GET /api/posts/:id`: Get a single post by ID
- `PUT /api/posts/:id`: Update a post by ID
- `DELETE /api/posts/:id`: Delete a post by ID

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License
This project is licensed under the MIT License.

## Contact
If you have any questions or feedback, please feel free to contact me at [your-email@example.com].

---

Thank you for checking out this Blog Application! Happy coding!
