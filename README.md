# 🌍 TourVisto – Your AI-Powered Travel Dashboard

TourVisto is a powerful, AI-enhanced travel planning dashboard built with the **React Router** framework. It offers a seamless experience for travelers and admins to create, manage, and explore trips with intelligent itinerary generation, insightful analytics, and a modern UI.

## ✨ Features

- 🧠 **AI-Powered Itinerary Generator**  
  Instantly generate customized trip plans tailored to users’ preferences.

- 🛠 **Admin Dashboard**  
  Manage users, trips, and platform activities with ease.

- 📈 **User Growth & Trip Analytics**  
  Track key metrics with beautiful, interactive charts and tables.

- 📊 **Data Visualizations**  
  Syncfusion-powered charts and data grids for actionable insights.

- 📅 **Detailed Trip Overview**  
  View comprehensive trip information with rich UX components.

- 🔐 **Secure Authentication & Data Management**  
  Using Appwrite for secure user handling and backend support.

- 🧱 **Modular Code Architecture**  
  Scalable, reusable components for clean and maintainable code.

- ⚡ **Blazing Fast Performance**  
  Powered by Vite, TailwindCSS, and optimized routing.

---

## 🔧 Tech Stack

- **React** + **React Router**
- **TypeScript**
- **TailwindCSS**
- **Appwrite** (Backend & Auth)
- **Syncfusion** (Charts & Tables)
- **Vite** (Bundler)

---

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## 📺 Tutorial Credit

This project was built by following the [YouTube tutorial by Adrian Hajdin - JS Mastery](https://www.youtube.com/watch?v=xZ1ba-RLrjo).

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.
