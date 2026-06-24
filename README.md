<h1 align="center">🎬 Vidly — Web Client</h1>

<p align="center">
  React front-end for the <a href="https://github.com/reiorozco/vidly-api">Vidly API</a> — browse, rent and manage movies.
</p>

<p align="center">
  <a href="https://vidly-app-reiorozco.vercel.app"><img src="https://img.shields.io/badge/Live_Demo-000?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo"/></a>
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black"/>
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white"/>
  <img src="https://img.shields.io/badge/MUI-007FFF?style=for-the-badge&logo=mui&logoColor=white"/>
  <img src="https://img.shields.io/badge/license-MIT-green?style=for-the-badge"/>
</p>

## 🔗 Links

- **Live demo:** [vidly-app-reiorozco.vercel.app](https://vidly-app-reiorozco.vercel.app)
- **Backend API:** [reiorozco/vidly-api](https://github.com/reiorozco/vidly-api)

## ✨ Features

- 🎞️ Browse movies and genres
- 🔐 Authentication with JWT
- 🛒 Rentals flow
- 🔎 Search, filtering and pagination
- ✅ Form validation with Joi
- 🧰 Error monitoring with Sentry

## 🛠️ Tech Stack

- **Core:** React · Vite
- **UI:** Material UI (MUI) · Emotion · React Toastify
- **Routing:** React Router
- **Data:** Axios (consumes the Vidly API)
- **Validation:** Joi · **Monitoring:** Sentry

## 🚀 Getting Started

```bash
git clone https://github.com/reiorozco/vidly-app.git
cd vidly-app
npm install
```

### Environment variables
Create a `.env` from `.env.example` and point it at a running [Vidly API](https://github.com/reiorozco/vidly-api) instance (e.g. `VITE_API_URL`).

### Run
```bash
npm run dev      # start dev server
npm run build    # production build
npm run preview  # preview production build
```

## 📸 Screenshots

> _Add screenshots or a short GIF of the app here._

## 📄 License

Released under the [MIT License](LICENSE).
