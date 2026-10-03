# 🌱 Climate Solutions Explorer

A web application for exploring climate solutions across different sectors, with dynamic filtering and detailed solution pages.

🔗 **Live Demo:** https://web-322-assignment2-gamma.vercel.app/

---

## 📖 About

Climate Solutions Explorer is a server-side web application built with Node.js and Express.js.

The application allows users to browse a collection of climate solutions, filter solutions by sector, and view detailed information about individual solutions.

This project was originally developed as part of my WEB322 coursework at Seneca Polytechnic and has been adapted for my portfolio.

---

## ✨ Features

- Browse climate solutions across multiple sectors
- Filter solutions by sector
- View detailed information for individual solutions
- Dynamic server-side rendering with EJS
- Responsive user interface
- Custom 404 error page
- Deployed as a live web application

---

## 🛠️ Tech Stack

**Backend**

`Node.js` `Express.js`

**Frontend**

`EJS` `HTML` `CSS` `Tailwind CSS` `DaisyUI`

**Data**

`JSON`

**Deployment**

`Vercel`

---

## 📁 Project Structure

```text
climate-solutions-explorer/
│
├── data/
│   ├── sectorData.json
│   └── solutionData.json
│
├── modules/
│   └── solutions.js
│
├── public/
│   └── css/
│       ├── main.css
│       └── tailwind.css
│
├── views/
│   ├── partials/
│   │   └── navbar.ejs
│   ├── 404.ejs
│   ├── about.ejs
│   ├── home.ejs
│   ├── solution.ejs
│   └── solutions.ejs
│
├── server.js
├── package.json
├── package-lock.json
└── vercel.json
