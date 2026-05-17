# Tech Guru

> An interactive frontend platform for developers to learn, practice, and master programming skills through hands-on tutorials, coding challenges, and curated tech resources.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.x-blue.svg)](https://reactjs.org/)

---

## 📖 Table of Contents

- [About Tech Guru](#about-tech-guru)
- [Key Features](#key-features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Running the Application](#running-the-application)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Development Guide](#development-guide)
- [Deployment](#deployment)
- [Contributing](#contributing)
  - [For Frontend Developers](#for-frontend-developers)
  - [For UI/UX Designers](#for-uiux-designers)
  - [For Content Creators](#for-content-creators)
- [Features Roadmap](#features-roadmap)
- [Browser Support](#browser-support)
- [Performance](#performance)
- [Accessibility](#accessibility)
- [Troubleshooting](#troubleshooting)
- [Community & Support](#community--support)
- [License](#license)

---

## 🎯 About Tech Guru

Tech Guru is a modern, interactive learning platform designed to help developers of all skill levels improve their coding abilities through practical, hands-on experience. Whether you're a beginner learning your first programming language or an experienced developer exploring new technologies, Tech Guru provides the tools and resources you need to succeed.

### Why Tech Guru?

**For Beginners:**
- Step-by-step interactive tutorials
- Visual code explanations with syntax highlighting
- Instant feedback on coding exercises
- Beginner-friendly challenges
- Progress tracking and achievements
- Supportive community forum

**For Intermediate Developers:**
- Advanced coding challenges
- Real-world project tutorials
- Algorithm and data structure practice
- Interview preparation resources
- Code review and feedback
- Peer learning opportunities

**For Advanced Developers:**
- Complex system design challenges
- Performance optimization tutorials
- Architecture pattern examples
- Open-source contribution guides
- Tech leadership resources
- Mentorship opportunities

**For Educators:**
- Create custom learning paths
- Track student progress
- Assign coding challenges
- Provide personalized feedback
- Manage classroom activities
- Generate progress reports

---

## ✨ Key Features

### 📚 Interactive Tutorials
- Step-by-step coding lessons
- Live code editor with instant preview
- Syntax highlighting for 20+ languages
- Interactive code examples
- Video tutorials integration
- Downloadable code snippets

### 💻 Code Playground
- In-browser code execution
- Multi-language support (JavaScript, TypeScript, Python, Java, C++, etc.)
- Real-time output display
- Code sharing and collaboration
- Version history
- Fork and remix functionality

### 🎯 Coding Challenges
- 500+ coding problems across difficulty levels
- Algorithm and data structure challenges
- Frontend-specific challenges (HTML/CSS/JS)
- System design problems
- Timed coding contests
- Leaderboards and rankings

### 🏆 Gamification
- XP points and level system
- Achievement badges
- Daily coding streaks
- Challenge completion rewards
- Skill trees and progression paths
- Community challenges

### 📊 Progress Tracking
- Personal dashboard with statistics
- Skill assessment and recommendations
- Learning path progress
- Time spent coding analytics
- Strengths and weaknesses analysis
- Goal setting and tracking

### 👥 Community Features
- Discussion forums
- Code review requests
- Solution sharing
- Mentor matching
- Study groups
- Live coding sessions

### 🎨 Modern UI/UX
- Clean, intuitive interface
- Dark and light themes
- Responsive design (mobile, tablet, desktop)
- Keyboard shortcuts
- Customizable layout
- Accessibility features (WCAG 2.1 AA compliant)

### 🔍 Smart Search
- Search tutorials by topic
- Filter challenges by difficulty
- Find solutions by language
- Discover learning paths
- Search community discussions
- AI-powered recommendations

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have:

- **Node.js** (v20.x or higher) - [Download here](https://nodejs.org/)
- **npm** (v10.x or higher) or **yarn** (v1.22.x or higher)
- **Git** - [Download here](https://git-scm.com/)

Optional:
- **VS Code** with recommended extensions

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/Emoji-dot/tech_guru.git
cd tech_guru
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

```bash
cp .env.example .env
```

### Configuration

Edit `.env` file:

```env
# Application
VITE_APP_NAME=Tech Guru
VITE_APP_URL=http://localhost:5173

# API Configuration
VITE_API_URL=http://localhost:3000/api
VITE_WS_URL=ws://localhost:3000

# Code Execution Service
VITE_CODE_RUNNER_URL=https://api.jdoodle.com/v1/execute
VITE_CODE_RUNNER_KEY=your-api-key

# Authentication (Firebase/Auth0)
VITE_AUTH_DOMAIN=your-auth-domain
VITE_AUTH_CLIENT_ID=your-client-id

# Analytics
VITE_GA_TRACKING_ID=your-ga-id

# Feature Flags
VITE_ENABLE_CODE_EXECUTION=true
VITE_ENABLE_LIVE_SESSIONS=true
VITE_ENABLE_AI_HINTS=true
```

### Running the Application

**Development mode:**

```bash
npm run dev
```

**Build for production:**

```bash
npm run build
```

**Preview production build:**

```bash
npm run preview
```

**Run tests:**

```bash
npm test
```

The application will be available at `http://localhost:5173`

---

## 🛠️ Tech Stack

### Frontend Framework
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server

### State Management
- **Redux Toolkit** - Global state management
- **React Query** - Server state management

### Styling
- **Tailwind CSS** - Utility-first CSS
- **Styled Components** - CSS-in-JS (optional)
- **Framer Motion** - Animations

### Code Editor
- **Monaco Editor** - VS Code's editor
- **CodeMirror** - Alternative lightweight editor
- **Prism.js** - Syntax highlighting

### UI Components
- **Radix UI** - Accessible components
- **Headless UI** - Unstyled components
- **React Icons** - Icon library

### Forms & Validation
- **React Hook Form** - Form management
- **Zod** - Schema validation

### Testing
- **Vitest** - Unit testing
- **React Testing Library** - Component testing
- **Playwright** - E2E testing

### Development Tools
- **ESLint** - Linting
- **Prettier** - Code formatting
- **Husky** - Git hooks

---

## 📁 Project Structure

```
tech_guru/
├── public/                     # Static assets
│   ├── images/
│   ├── icons/
│   └── fonts/
├── src/
│   ├── components/             # React components
│   │   ├── common/             # Shared components
│   │   ├── layout/             # Layout components
│   │   ├── features/           # Feature-specific components
│   │   └── ui/                 # UI primitives
│   ├── pages/                  # Page components
│   │   ├── Home/
│   │   ├── Tutorials/
│   │   ├── Challenges/
│   │   ├── Playground/
│   │   └── Profile/
│   ├── hooks/                  # Custom React hooks
│   ├── store/                  # Redux store
│   │   ├── slices/
│   │   └── api/
│   ├── services/               # API services
│   ├── utils/                  # Utility functions
│   ├── types/                  # TypeScript types
│   ├── styles/                 # Global styles
│   ├── assets/                 # Images, fonts, etc.
│   ├── config/                 # Configuration files
│   ├── App.tsx                 # Root component
│   └── main.tsx                # Entry point
├── tests/                      # Test files
│   ├── unit/
│   ├── integration/
│   └── e2e/
├── .env.example                # Example environment file
├── .eslintrc.json              # ESLint config
├── .prettierrc                 # Prettier config
├── tailwind.config.js          # Tailwind config
├── vite.config.ts              # Vite config
├── tsconfig.json               # TypeScript config
├── package.json                # Dependencies
└── README.md                   # This file
```

---

## 💻 Development Guide

### Code Style

We follow the [Airbnb React/TypeScript Style Guide](https://github.com/airbnb/javascript/tree/master/react).

**Run linter:**

```bash
npm run lint
```

**Auto-fix issues:**

```bash
npm run lint:fix
```

**Format code:**

```bash
npm run format
```

### Component Guidelines

- Use functional components with hooks
- Keep components small and focused
- Use TypeScript for type safety
- Write tests for all components
- Follow accessibility best practices
- Document complex logic

### Git Workflow

1. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature
   ```

2. Commit with conventional commits:
   ```bash
   git commit -m "feat: add code playground"
   ```

3. Push and create PR:
   ```bash
   git push origin feature/your-feature
   ```

### Testing

**Run all tests:**

```bash
npm test
```

**Run with coverage:**

```bash
npm run test:coverage
```

**Run E2E tests:**

```bash
npm run test:e2e
```

---

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Vercel

```bash
vercel deploy
```

### Deploy to Netlify

```bash
netlify deploy --prod
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

---

## 🤝 Contributing

### For Frontend Developers

- Build new features and components
- Improve performance and optimization
- Fix bugs and issues
- Add tests and documentation
- Implement responsive designs
- Enhance accessibility

### For UI/UX Designers

- Design new features and layouts
- Create design systems
- Improve user experience
- Design icons and illustrations
- Conduct usability testing
- Provide design feedback

### For Content Creators

- Write tutorials and guides
- Create coding challenges
- Record video tutorials
- Curate learning resources
- Write documentation
- Create example projects

---

## 🗺️ Features Roadmap

### Current (v1.0)
- ✅ Interactive tutorials
- ✅ Code playground
- ✅ Basic challenges
- ✅ User profiles

### Upcoming (v1.1)
- 🔄 Live coding sessions
- 🔄 AI-powered hints
- 🔄 Mobile app
- 🔄 Offline mode

### Future (v2.0)
- 📅 VR coding environment
- 📅 Pair programming
- 📅 Code competitions
- 📅 Certification program

---

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## ⚡ Performance

- Lighthouse score: 95+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Code splitting and lazy loading
- Image optimization
- Service worker caching

---

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation
- Screen reader support
- High contrast mode
- Focus indicators
- ARIA labels

---

## 🔧 Troubleshooting

### Common Issues

**Build errors:**
- Clear node_modules and reinstall
- Check Node.js version
- Verify environment variables

**Code execution not working:**
- Check API keys
- Verify CORS settings
- Check network connectivity

**Styling issues:**
- Clear browser cache
- Rebuild Tailwind CSS
- Check for conflicting styles

---

## 💬 Community & Support

- **Discord:** [Join our server](https://discord.gg/techguru)
- **GitHub Issues:** [Report bugs](https://github.com/Emoji-dot/tech_guru/issues)
- **Twitter:** [@TechGuruDev](https://twitter.com/techgurudev)
- **Email:** support@techguru.dev

---

## 📄 License

MIT License - see [LICENSE](LICENSE) file

---

**Built with ❤️ by the Tech Guru Team**

Learn. Code. Master. 🚀
