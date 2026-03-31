# Minimal Luxury Developer Portfolio

A premium, awwwards-winning style developer portfolio built with modern web technologies. Focuses on smooth animations, clean typography, and a cohesive "minimal luxury" aesthetic.

## 🌟 Features

- **Next.js 16** - Built with the App Router, prioritizing server components and modern React 19 paradigms.
- **Advanced Animations** - Powered by **Framer Motion** and **GSAP** for magnetic buttons, staggered reveals, and sophisticated scroll-triggered animations.
- **Smooth Scrolling** - Integrated **Lenis** for a silky smooth, native-feeling scroll experience.
- **Premium Design System** - Styled with **Tailwind CSS 4**, featuring glassmorphism, subtle glows, fine grid background textures, and high-contrast typography (Outfit font).
- **Smart Navigation** - Auto-hiding responsive navbar that maintains a clean viewport while exploring the site.
- **Working Contact Form** - Fully styled, premium-feeling contact form with **Nodemailer** integration.

## 💻 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (React)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) & [GSAP](https://gsap.com/)
- **Scroll Engine**: [Lenis](https://lenis.studiofreight.com/)
- **Typography**: [Outfit](https://fonts.google.com/specimen/Outfit) via Google Fonts
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Mail**: [Nodemailer](https://nodemailer.com/)

## 🚀 Getting Started

First, ensure you have Node.js 20+ installed.

1. **Clone the repository**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add your Nodemailer credentials:
   ```env
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_app_password
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 📂 Project Structure

- `app/` - Next.js App Router core (layouts, pages, API routes, global styles)
- `components/` - Reusable UI sections and components (Hero, Projects, Skills, Contact)
- `data/` - Static configuration and content arrays
- `public/` - Static images, fonts, and assets

## 🤝 Deployment

This project is optimized for deployment on [Vercel](https://vercel.com/). Simply connect your GitHub repository to Vercel and ensure you add the environment variables in the project settings before building.
