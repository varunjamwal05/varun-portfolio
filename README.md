# Varun Jamwal — Developer Portfolio

A premium, awwwards-winning style developer portfolio built with modern web technologies. Focuses on smooth animations, clean typography, and a cohesive "minimal luxury" aesthetic.

🔗 **Live:** [varunjamwal.vercel.app](https://varunjamwal.vercel.app)

---

## 🌟 Features

- **Next.js 16** — Built with the App Router, prioritizing server components and modern React 19 paradigms.
- **Advanced Animations** — Powered by **Framer Motion** and **GSAP** for magnetic buttons, staggered reveals, and sophisticated scroll-triggered animations.
- **Smooth Scrolling** — Integrated **Lenis** for a silky smooth, native-feeling scroll experience.
- **Premium Design System** — Styled with **Tailwind CSS 4**, featuring glassmorphism, subtle glows, fine grid background textures, and high-contrast typography (Outfit font).
- **Smart Navigation** — Auto-hiding responsive navbar that maintains a clean viewport while exploring the site.
- **Working Contact Form** — Fully styled, premium-feeling contact form with **Nodemailer** integration.
- **Project Showcase** — Interactive 3D-tilt project cards with grouped tech stack display.

---

## 💻 Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (React 19, App Router) |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com/) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) & [GSAP](https://gsap.com/) |
| **Scroll Engine** | [Lenis](https://lenis.studiofreight.com/) |
| **Typography** | [Outfit](https://fonts.google.com/specimen/Outfit) via Google Fonts |
| **Icons** | [React Icons](https://react-icons.github.io/react-icons/) |
| **Mail** | [Nodemailer](https://nodemailer.com/) |
| **Deployment** | [Vercel](https://vercel.com/) |

---

## 🗂️ Featured Projects

### 🧠 HiddenEdge
A production-grade AI-powered investment research platform. An autonomous LangGraph agent fetches live financial data, classifies news sentiment, and delivers transparent INVEST / WATCH / PASS recommendations via a Bloomberg-inspired trading terminal UI.

- **Stack:** Next.js 15, React.js, Tailwind CSS, TypeScript, LangGraph.js, LangChain, Google Gemini, PostgreSQL, Supabase, Prisma ORM, Recharts, Docker, Vercel
- **GitHub:** [github.com/varunjamwal05/HiddenEdge](https://github.com/varunjamwal05/HiddenEdge)
- **Live:** [hidden-edge.vercel.app](https://hidden-edge.vercel.app/)

---

### 📚 Inkvero
A full-stack social network platform for readers & community groups supporting real-time interactions and discussions.

- **Stack:** Next.js, React.js, Tailwind CSS, MongoDB Atlas, Cloudinary, Vercel, Render
- **GitHub:** [github.com/varunjamwal05/inkvero](https://github.com/varunjamwal05/inkvero)
- **Live:** [inkvero.vercel.app](https://inkvero.vercel.app/)

---

### 🗺️ Roametra
A full-stack travel planning app with drag-and-drop itinerary builder, destination discovery, and seamless trip management — powered by a Node.js REST API backend.

- **Stack:** React.js, Vite, Framer Motion, Node.js, Express.js, MongoDB, Cloudinary, Axios, dnd-kit
- **GitHub:** [github.com/varunjamwal05/Roametra](https://github.com/varunjamwal05/Roametra)

---

## 🚀 Getting Started

Ensure you have **Node.js 20+** installed.

1. **Clone the repository**
   ```bash
   git clone https://github.com/varunjamwal05/varun-portfolio.git
   cd varun-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_app_password
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📂 Project Structure

```
├── app/          # Next.js App Router (layouts, pages, API routes, global styles)
├── components/   # Reusable UI sections (Hero, Projects, ProjectCard, Skills, Contact)
├── data/         # Static content (projects.ts)
└── public/       # Static assets
```

---

## 🤝 Deployment

Optimized for [Vercel](https://vercel.com/). Connect your GitHub repository to Vercel and add the environment variables (`EMAIL_USER`, `EMAIL_PASS`) in the project settings before deploying.
