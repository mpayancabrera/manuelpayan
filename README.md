# Manuel Payán Cabrera Portfolio

Responsive personal portfolio website for Manuel Payán Cabrera, a Senior Frontend Developer. It's designed to showcase his professional experience, technical skills, and projects in an elegant and interactive way.

## ✨ Features

- **Responsive Design**: Adapts seamlessly to desktop, tablet, and mobile devices.
- **Multi-Page Layout**: Clear navigation to different sections:
  - **Homepage**: A welcoming landing page with quick links.
  - **Resume**: Detailed professional resume, including experience, education, skills, courses, and interests.
  - **Portfolio**: A gallery of projects with descriptions, technologies used, and links to live versions.
  - **Blog**: A section for articles and insights (content coming soon).
- **Multi-Language Support**: Content available in both English and Spanish, with an easy-to-use language switcher.
- **Dark/Light Mode**: User-selectable theme preference for optimal viewing comfort.
- **Smooth Animations**: Subtle and engaging animations powered by GSAP to enhance user experience.
- **Interactive UI**: Built with modern UI components for a clean and professional look.

## 🚀 Tech Stack

This project is built with a modern, performant, and developer-friendly technology stack:

- **Framework**: [Next.js](https://nextjs.org/) (using the App Router)
- **UI Library**: [React](https://reactjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [ShadCN UI](https://ui.shadcn.com/)
- **Animations**: [GSAP (GreenSock Animation Platform)](https://greensock.com/gsap/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Internationalization (i18n)**: Custom solution for managing English and Spanish translations.

## 📂 Project Structure (Overview)

- `src/app/`: Contains the page routes, layouts, and global CSS.
- `src/components/`: Reusable UI components (layout elements, ShadCN UI components, custom components).
- `src/contexts/`: React Context providers (e.g., LanguageContext).
- `src/hooks/`: Custom React hooks.
- `src/lib/`: Utility functions, type definitions (`types.ts`), and resume/portfolio data (`resume-data.ts`).
- `public/`: Static assets.

## 🏁 Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- npm

### Installation

Install dependencies:

```bash
npm install
```

### Running the Development Server

To start the development server (usually on `http://localhost:3000`):

```bash
npm run dev
```

### Building for Production

To create a production build:

```bash
npm run build
```

This will generate an optimized static site in the `.next` directory. You can then serve these files using `npm start` or deploy them to a static hosting provider.

## 📄 License

This project is for personal use.
