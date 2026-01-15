# Live Score App

A Next.js application for displaying live football match scores with filtering capabilities.

See the live app deployed to Vercel: [https://live-score-app-jade.vercel.app/](https://live-score-app-jade.vercel.app/)

## Features

- Display live football match scores
- Filter matches by status (All, Result, Live, Upcoming)
- Fully responsive design with mobile-optimized UX
- Modern UI with styled-components and centralized theme
- Real-time match status indicators
- Sticky filter sidebar on desktop
- Back to top button on mobile
- Smooth scrolling on filter changes
- Comprehensive test coverage

## Tech Stack

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Styled Components** - CSS-in-JS styling
- **Barlow Font** - Google Fonts typography
- **Jest & React Testing Library** - Testing framework

## Prerequisites

- Node.js 18+ (or Node.js 22+ recommended)
- npm, yarn, pnpm, or bun

## Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

## Running the Application

### Development Mode

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
# or
yarn build
yarn start
```

## Running Tests

```bash
npm test
# or
yarn test
# or
pnpm test
```

For watch mode:

```bash
npm run test:watch
```

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── matches/
│   │       └── route.ts          # API route for matches data
│   ├── layout.tsx                 # Root layout (Server Component)
│   ├── page.tsx                   # Main page (Server Component - fetches data)
│   └── globals.css                # Global styles
├── components/
│   ├── MatchCard/                 # Match card component
│   │   ├── MatchCard.tsx          # Component (Client Component)
│   │   ├── MatchCard.styles.ts    # Styled components
│   │   ├── hooks/
│   │   │   └── useMatchStatus.ts  # Component-specific hook
│   │   └── utils/                 # Business logic utilities
│   ├── Filter/                     # Filter component
│   │   ├── Filter.tsx             # Component (Client Component)
│   │   └── Filter.styles.ts       # Styled components
│   ├── MatchesPage/               # Page wrapper (Client Component)
│   │   ├── MatchesPage.tsx        # Interactive page component
│   │   └── MatchesPage.styles.ts  # Page styles
│   ├── MatchesList/               # Matches list (Client Component)
│   │   ├── MatchesList.tsx        # List component
│   │   └── MatchesList.styles.ts  # List styles
│   ├── BackToTop/                 # Back to top button (Mobile only)
│   │   ├── BackToTop.tsx          # Component (Client Component)
│   │   └── BackToTop.styles.ts    # Button styles
│   └── __tests__/                 # Component tests
├── lib/
│   ├── matches.ts                 # Server-side data fetching
│   └── styled-components-registry.tsx  # Styled-components SSR setup
├── shared/
│   └── theme/                      # Theme system
│       └── theme.ts                # Design tokens
├── types/
│   └── match.ts                    # TypeScript type definitions
└── utils/
    ├── filterMatches.ts            # Filtering utility functions
    └── __tests__/                  # Utility tests
```

## Match Statuses

The app displays matches with different status indicators:

- **PRE-MATCH** - Upcoming matches (not started)
- **LIVE** - Matches currently in progress (with minute indicator)
- **HT** - Half-time (with half-circle progress indicator)
- **ENDED/FT** - Finished matches
- **CANCELLED** - Cancelled matches

## Filtering

Users can filter matches by:

- **All** - Shows all matches
- **Result** - Shows finished matches only
- **Live** - Shows matches currently in progress
- **Upcoming** - Shows matches that haven't started yet

Each filter displays a count of matches in that category.

## Data Source

The app uses a mocked JSON file (`public/data/sports.json`) that simulates data from a third-party sports API provider. 

**Rendering Strategy:**
- **Server Component** (`app/page.tsx`) - Fetches data on the server using `getMatches()`
- **Client Components** - Handle interactivity (filtering, UI interactions)
- This approach provides:
  - ✅ Faster initial page load (data available on first render)
  - ✅ Better SEO (content available server-side)
  - ✅ Reduced client-side JavaScript bundle
  - ✅ Improved performance

## Responsive Design

The application is fully responsive and adapts to different screen sizes:

- **Desktop (≥968px):**
  - Two-column layout (filters + matches)
  - Independent scrollable matches container
  - Smooth scroll to top when filter changes

- **Tablet/Mobile (<968px):**
  - Single column layout
  - Back to top button (appears after scrolling 300px)
  - Full-page scrolling

## Architecture

For detailed information about architectural decisions, trade-offs, and scaling strategies, see [ARCHITECTURE.md](./ARCHITECTURE.md).

The architecture document covers:
- Why the current structure fits the project size
- How to scale the application (including Feature-Sliced Design)
- Trade-offs considered for key decisions
- Future migration paths

## Development Notes

- **Server Components** - Data fetching happens on the server for optimal performance
- **Client Components** - Used only when interactivity is needed (filtering, hooks, scroll behavior)
- **Styled Components** - With server-side rendering support
- **Theme System** - Centralized design tokens in `shared/theme/` for consistent styling
- **Component Organization** - Each component in its own folder with co-located styles, hooks, and utilities
- **Business Logic Separation** - Utilities and hooks extracted from components for better testability
- **UX Enhancements** - Scrollable list container on desktop, back to top on mobile, smooth scrolling
- **Barlow Font** - Loaded via Next.js font optimization
- **TypeScript** - Full type safety throughout the application
- **Testing** - Jest and React Testing Library for comprehensive test coverage

## License

This project is created for demonstration purposes.
