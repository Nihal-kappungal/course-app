# School of AI

A responsive landing page for an AI learning course. The site introduces the course, explains what students will learn, showcases testimonials and mentor information, and answers common enrolment questions.

## Tech stack

- React 19
- Vite
- Tailwind CSS 4
- Framer Motion and GSAP for animation
- Lenis for smooth scrolling
- Lucide React for icons

## Getting started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL shown by Vite in your browser. The page supports hot module replacement while you work.

## Available scripts

| Command           | Purpose                              |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the Vite development server    |
| `npm run build`   | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run ESLint across the project        |

## Project structure

```text
src/
├── App.jsx                 # App shell and smooth-scroll setup
├── pages/Home.jsx          # Home page composition and interactive state
├── components/
│   ├── Header.jsx
│   └── sections/           # Hero, course, testimonials, FAQ and footer sections
├── data/homeData.js        # Testimonials and FAQ content
├── assets/                 # Logo, fonts and user images
├── index.css               # Global styles and Tailwind entry point
└── main.jsx                # React entry point
```

## Content updates

Course copy, testimonials and FAQ entries are kept in `src/data/homeData.js`. Page sections live in `src/components/sections/`, so content and layout can be updated independently. Replace the remote testimonial avatar URLs with local assets before production if the site needs to work without a network connection.
