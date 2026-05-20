<img width="1919" height="906" alt="image" src="https://github.com/user-attachments/assets/350ab551-bcd9-457b-9aca-4f16dea45fe3" />

# JWT Auth Flow — React + TypeScript + Vite + Node.js + Express

A modern full-stack JWT Authentication starter template built with **React**, **TypeScript**, **Vite**, **Node.js**, and **Express**.

Perfect for learning authentication flow or using as a production-ready starter for your next project.

## Features

* JWT Authentication
* User Signup & Login
* Protected Routes
* React Context API Auth State
* Persistent Login
* TypeScript Support
* REST API Architecture
* Axios API Handling
* Express Backend
* Clean Folder Structure
* Modern UI with Tailwind CSS

---

## Tech Stack

### Frontend

* React
* TypeScript
* Vite
* React Router DOM
* Axios
* Tailwind CSS

### Backend

* Node.js
* Express.js
* JWT (jsonwebtoken)
* bcryptjs
* MongoDB / Mongoose

---

## Project Structure

```bash
JWT-Auth-Flow/
│
├── client/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── routes/
│   │   └── App.tsx
│
├── server/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── server.ts
│
└── README.md
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/tejayy/JWT-Auth-Flow-React-TS-Vite-Node.js-Express.git
```

Move into the project:

```bash
cd JWT-Auth-Flow-React-TS-Vite-Node.js-Express
```

---

# Frontend Setup

Move into client folder:

```bash
cd client
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# Backend Setup

Move into server folder:

```bash
cd server
```

Install dependencies:

```bash
npm install
```

Create `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
```

Start server:

```bash
npm run dev
```

Backend runs on:

```bash
http://localhost:5000
```

---

# Authentication Flow

## Signup

User creates an account.

## Login

Server validates credentials and returns JWT token.

## Store Token

Frontend stores token in localStorage.

## Protected Routes

Authenticated users can access protected pages.

---

## API Routes

### Auth Routes

| Method | Route              | Description   |
| ------ | ------------------ | ------------- |
| POST   | `/api/auth/signup` | Register user |
| POST   | `/api/auth/login`  | Login user    |

### Protected Routes

| Method | Route               | Description      |
| ------ | ------------------- | ---------------- |
| GET    | `/api/user/profile` | Get user profile |

---

## Environment Variables

### Server `.env`

```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
```

---

## Screenshots

### Login Page

* Clean UI
* Form validation
* Error handling

### Signup Page

* JWT Registration
* Protected auth flow

---

## Future Improvements

* Refresh Tokens
* Role-Based Authentication
* Email Verification
* Forgot Password
* OAuth Login
* Docker Support
* Rate Limiting
* Zod Validation
* Redis Session Handling

---

## Learnings

This project demonstrates:

* JWT Authentication Flow
* React Context API
* Protected Routes
* API Integration
* Backend Authentication
* Express Middleware
* Token Handling
* Full Stack TypeScript Setup

---

## Contributing

Pull requests are welcome.

Fork the repo and create your feature branch:

```bash
git checkout -b feature/amazing-feature
```

Commit changes:

```bash
git commit -m "Add amazing feature"
```

Push branch:

```bash
git push origin feature/amazing-feature
```

---

## License

This project is licensed under the MIT License.

---

## Author

Built by [tejayy](https://github.com/tejayy?utm_source=chatgpt.com)

Project Repository:

[JWT-Auth-Flow-React-TS-Vite-Node.js-Express](https://github.com/tejayy/JWT-Auth-Flow-React-TS-Vite-Node.js-Express?utm_source=chatgpt.com)

Inspired by common JWT authentication patterns used in React + Express applications.
