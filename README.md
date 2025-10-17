# 🚀 Zerodha Clone

A full-stack web application inspired by **Zerodha**, built for learning and practice purposes.
It includes **user authentication**, a **dashboard**, and a simple **trading interface** using the **MERN stack** (MongoDB, Express.js, React, Node.js).

---

## 🌐 Live Demo

| Part      | URL                                                                                          |
| --------- | -------------------------------------------------------------------------------------------- |
| Frontend  | [https://zerodha-clone-kappa-eight.vercel.app](https://zerodha-clone-kappa-eight.vercel.app) |
| Dashboard | [https://zerodha-clone-okb8.vercel.app](https://zerodha-clone-okb8.vercel.app)               |
| Backend   | [https://zerodha-clone-q795.onrender.com](https://zerodha-clone-q795.onrender.com)           |

---

## 🧠 Features

✅ User Registration & Login (JWT authentication)
✅ Cookie-based session handling
✅ Display of Holdings, Positions & Orders
✅ Responsive UI built with Bootstrap
✅ RESTful API using Express & MongoDB

---

## ⚙️ Tech Stack

**Frontend:** React.js, Bootstrap, Axios, React Router
**Backend:** Node.js, Express.js, MongoDB, Mongoose
**Authentication:** JWT, Cookies
**Deployment:**

* Backend → Render
* Frontend & Dashboard → Vercel
* Database → MongoDB Atlas

---

## 🏗️ Project Structure

```
zerodha-clone/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── index.js
│   └── .env
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── dashboard/
│   ├── src/
│   ├── public/
│   └── package.json
```

---

## 🪄 Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/zerodha-clone.git
cd zerodha-clone
```

### 2️⃣ Backend setup

```bash
cd backend
npm install        # or yarn install
```

Create a `.env` file inside `backend` folder:

```env
MONGODB_URI=your_mongodb_connection_string
TOKEN_KEY=your_jwt_secret_key
PORT=5000
```

---

## 🔒 Authentication Flow

1. **User signs up or logs in** — backend creates a JWT token.
2. Token is stored in a **secure HTTP-only cookie** (`sameSite: none`, `secure: true`).
3. When visiting the dashboard, it verifies the token using `/verify` API.
4. If valid → user stays logged in; otherwise → redirected back to login.

---

## 🧾 API Endpoints

| Method | Endpoint     | Description           |
| ------ | ------------ | --------------------- |
| `POST` | `/signup`    | Register new user     |
| `POST` | `/login`     | Login existing user   |
| `POST` | `/logout`    | Logout user           |
| `GET`  | `/verify`    | Verify authentication |
| `GET`  | `/holdings`  | Get user holdings     |
| `GET`  | `/positions` | Get user positions    |
| `GET`  | `/orders`    | Get user orders       |

---

## 💡 Future Enhancements

* Live stock data integration
* Trade simulation feature
* Portfolio performance chart
* Email verification

---

## 🧑‍💻 Author

**Mohd Ashif**

Full Stack Developer (MERN Stack Learner)

---

## 📄 License

This project is created for **educational purposes** only.
All trademarks belong to their respective owners.
