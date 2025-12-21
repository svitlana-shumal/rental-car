# 🚙 RentalCar Frontend

**RentalCar** is a frontend web application for a car rental company.  
The project was created as a learning task using **Next.js (App Router)** and **TypeScript**, following modern frontend development practices.

The application allows users to browse available cars, filter them by various criteria, view detailed information about a selected car, and submit a rental request.

---

## 🔗 Live Demo

👉 [View live demo](https://rental-car-fawn.vercel.app/)

---

## 📌 Project Goals

The goal of this project is to build the frontend part of a car rental service using a ready-made backend API.  
The application includes multiple pages and implements filtering, pagination, routing, and global state management.

Backend API documentation:  
👉 https://car-rental-api.goit.global/api-docs/

---

## 📄 Pages & Routing

- `/` — Home page with a banner and call-to-action
- `/catalog` — Catalog page with a list of available cars and filters
- `/catalog/:id` — Car details page with rental form

---


## 🛠 Tech Stack

- **Next.js** (App Router)
- **React**
- **TypeScript**
- **Zustand** — global state management
- **Axios** — API requests
- **CSS Modules**
- **Vercel** — deployment

---

## 📦 State Management

Global state is managed with **Zustand**, including:
- list of vehicles
- filter parameters
- favorites list

Before sending a new filtered request, previous search results are cleared to ensure data accuracy.

---

## 💻 Installation

```bash
git clone YOUR_REPO_URL
cd your-project
npm install
npm run dev
```

---

## 👩‍💻 Author

 Svitlana Shumal-Frontend Developer

 👉 GitHub: https://github.com/svitlana-shumal
