# Architecture Decision Document

## Current Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── layout.tsx         # Root layout (Server Component)
│   └── page.tsx           # Main page (Server Component)
├── components/            # React components
│   ├── MatchCard/         # Match card (Client Component)
│   │   ├── MatchCard.tsx
│   │   ├── MatchCard.styles.ts
│   │   ├── hooks/
│   │   └── utils/
│   ├── Filter/            # Filter (Client Component)
│   ├── MatchesPage/       # Page wrapper (Client Component)
│   ├── MatchesList/       # List component (Client Component)
│   └── BackToTop/         # Back to top button (Mobile only)
├── lib/                   # Library utilities
│   ├── matches.ts         # Server-side data fetching
│   └── styled-components-registry.tsx
├── shared/                # Shared resources
│   └── theme/             # Theme system
├── types/                 # TypeScript definitions
│   └── match.ts
└── utils/                 # Utility functions
    └── filterMatches.ts
```

## Why This Structure Fits the Project Size

### 1. **Simplicity Over Complexity**
This is a small-to-medium application with:
- **5 main UI components** (MatchCard, Filter, MatchesPage, MatchesList, BackToTop)
- **1 core feature** (match listing with filtering)
- **1 API endpoint** (matches data)
- **Well-organized business logic** (extracted to utilities and hooks)

The current structure provides:
- ✅ Clear separation of concerns without unnecessary abstraction
- ✅ Easy navigation for developers (flat, intuitive structure)
- ✅ Low cognitive overhead
- ✅ Fast development velocity

### 2. **Next.js App Router Alignment**
The structure follows Next.js 13+ conventions:
- `app/` directory for routing and layouts
- `app/api/` for API routes
- Co-located components, types, and utilities

This approach:
- ✅ Leverages framework conventions
- ✅ Reduces learning curve for Next.js developers
- ✅ Maintains compatibility with Next.js tooling

### 3. **Pragmatic Organization**
The current organization balances:
- **Grouping by technical layer** (components, utils, types) - easy to find code by type
- **Co-location of related code** (tests next to components)
- **Minimal nesting** - no deep folder hierarchies

## How to Scale This Structure

### Phase 1: Feature-Based Organization (Current → ~5-10 features)

When the app grows to multiple features, reorganize into feature folders:

```
src/
├── app/                    # Next.js App Router (unchanged)
├── features/
│   ├── matches/
│   │   ├── ui/
│   │   │   ├── MatchCard/
│   │   │   └── Filter/
│   │   ├── model/
│   │   │   ├── types.ts
│   │   │   └── filterMatches.ts
│   │   └── api/
│   │       └── matches.ts
│   ├── favorites/         # New feature
│   └── notifications/     # New feature
├── shared/
│   ├── ui/                # Reusable components
│   ├── lib/               # Third-party configs
│   └── utils/             # Pure utilities
└── widgets/               # Complex compositions
```

**Benefits:**
- Features are self-contained
- Easier to locate feature-specific code
- Better for team collaboration (feature ownership)

### Phase 2: Feature-Sliced Design (FSD) (~10+ features)

For larger applications, consider adopting [Feature-Sliced Design](https://feature-sliced.design/):

```
src/
├── app/                    # Next.js App Router
├── pages/                  # Page compositions
│   └── matches/
├── widgets/                # Complex UI blocks
│   └── match-list/
├── features/               # User interactions
│   ├── filter-matches/
│   └── view-match-details/
├── entities/               # Business entities
│   └── match/
│       ├── model/
│       ├── ui/
│       └── api/
├── shared/                 # Reusable code
│   ├── ui/
│   ├── lib/
│   └── utils/
```

**FSD Benefits:**
- Strict dependency rules (layers can only import from below)
- Clear architectural boundaries
- Excellent for large teams and complex domains
- Industry-standard for enterprise React applications

**When to adopt:**
- 10+ features
- Multiple teams working on the codebase
- Complex business domain
- Long-term maintenance requirements

### Phase 3: Micro-Frontends (Enterprise Scale)

For very large applications, consider:
- Module Federation
- Separate repositories per domain
- Independent deployment pipelines

## Trade-offs Considered

### 1. **Current Structure vs. Feature-Based**

| Aspect | Current (Layer-based) | Feature-Based |
|--------|----------------------|---------------|
| **Small projects** | ✅ Better (less overhead) | ❌ Over-engineering |
| **Medium projects** | ⚠️ Acceptable | ✅ Better (clearer boundaries) |
| **Large projects** | ❌ Becomes messy | ✅ Recommended |
| **Learning curve** | ✅ Lower | ⚠️ Slightly higher |
| **Code discovery** | ⚠️ By type | ✅ By feature |

**Decision:** Current structure chosen because the project has 1 feature and 2 components. Feature-based would add complexity without clear benefit.

### 2. **Component Organization**

**Current:** Component folders with co-location (Option B - implemented)

```
components/
  ├── MatchCard/
  │   ├── MatchCard.tsx
  │   ├── MatchCard.styles.ts
  │   ├── hooks/
  │   │   └── useMatchStatus.ts
  │   └── utils/
  │       ├── formatTimestamp.ts
  │       ├── parseMinute.ts
  │       └── getStatusDisplay.ts
  └── Filter/
      ├── Filter.tsx
      └── Filter.styles.ts
```

**Decision:** Component folders chosen because:
- ✅ Better separation of concerns (styles, logic, UI)
- ✅ Easier to locate related code
- ✅ Scales better as components grow
- ✅ Co-located business logic and hooks
- ✅ Clear component boundaries

**Benefits:**
- Styles separated from component logic
- Business logic extracted to utilities
- Component-specific hooks co-located
- Easier to test in isolation
- Better maintainability

### 3. **State Management**

**Current:** React `useState` and `useMemo` (local component state)

**Alternatives considered:**
- **Zustand/Redux:** Overkill for simple filtering
- **React Query/SWR:** Could be useful for data fetching, but API route is simple
- **Context API:** Unnecessary for single-page app

**Decision:** Local state is sufficient because:
- Filter state is page-scoped
- No complex state synchronization needed
- No global state requirements

**When to introduce state management:**
- Multiple pages sharing state
- Complex state logic (undo/redo, optimistic updates)
- Real-time updates requiring state synchronization

### 4. **Styling Approach**

**Current:** Styled-components (CSS-in-JS)

**Alternatives considered:**
- **CSS Modules:** More performant, but less flexible
- **Tailwind CSS:** Utility-first, faster development
- **Plain CSS:** Lower bundle size, but less maintainable

**Decision:** Styled-components chosen because:
- Type-safe styling with TypeScript
- Component-scoped styles
- Dynamic styling based on props
- Good developer experience

**Trade-offs:**
- ⚠️ Runtime CSS injection (slight performance cost)
- ⚠️ Larger bundle size
- ✅ Better for component libraries
- ✅ Excellent for theme support

### 5. **Data Fetching & Rendering Strategy**

**Current:** Server Components for data fetching + Client Components for interactivity

**Implementation:**
- **Server Component** (`app/page.tsx`) - Fetches data using `getMatches()` on the server
- **Client Components** - Handle user interactions (filtering, UI state)
- **Hybrid Approach** - Best of both worlds

**Benefits:**
- ✅ Faster initial page load (data available on first render)
- ✅ Better SEO (content rendered server-side)
- ✅ Reduced client-side JavaScript bundle
- ✅ Improved Core Web Vitals
- ✅ Maintains interactivity where needed

**Component Breakdown:**
- **Server Components:** `app/page.tsx`, `app/layout.tsx`
- **Client Components:** `MatchesPage`, `Filter`, `MatchesList`, `MatchCard` (uses hooks)

**Alternatives considered:**
- **Full Client-Side Fetching:** Larger bundle, slower initial load, worse SEO
- **React Query/SWR:** Adds complexity, not needed for static data
- **Direct JSON Import:** Simpler but not scalable for real APIs

**Decision:** Server Components approach because:
- Follows Next.js 13+ best practices
- Optimal performance out of the box
- Easy to migrate to real API (just change `getMatches()`)
- Maintains separation of concerns
- Progressive enhancement (works without JavaScript)

## Principles Applied

1. **YAGNI (You Aren't Gonna Need It)**
   - Avoid premature optimization
   - Add complexity only when needed

2. **Pragmatic Over Dogmatic**
   - Follow best practices, but adapt to project size
   - Don't force patterns that don't fit

3. **Scalability Path**
   - Structure allows growth without major refactoring
   - Clear migration path to more complex architectures

4. **Developer Experience**
   - Easy to understand and navigate
   - Fast development velocity
   - Good tooling support

## Future Considerations

### Short-term (if adding 2-3 features)
- Consider feature-based organization
- Extract shared UI components to `shared/ui/`
- Add error boundaries

### Medium-term (5-10 features)
- Evaluate Feature-Sliced Design
- Consider state management library
- Add data fetching library (React Query/SWR)

### Long-term (10+ features)
- Full FSD adoption
- Micro-frontend architecture
- Design system implementation

## Rendering Strategy

### Server vs Client Components

The application uses a hybrid rendering approach following Next.js 13+ best practices:

**Server Components:**
- `app/page.tsx` - Fetches data on the server
- `app/layout.tsx` - Root layout (no interactivity needed)

**Client Components:**
- `MatchesPage` - Manages filter state and user interactions, handles smooth scrolling
- `Filter` - Interactive filter buttons
- `MatchesList` - Client-side filtering logic, scrollable container
- `MatchCard` - Uses hooks for status computation
- `BackToTop` - Mobile-only back to top button with scroll detection

**Why This Approach:**
1. **Performance** - Data fetched on server, reducing client bundle
2. **SEO** - Content available on first render
3. **User Experience** - Faster initial load, progressive enhancement
4. **Maintainability** - Clear separation between server and client logic

**Best Practices Applied:**
- ✅ Use Server Components by default
- ✅ Only mark components as "use client" when needed
- ✅ Fetch data in Server Components
- ✅ Pass data as props to Client Components
- ✅ Keep Client Components minimal (only what needs interactivity)

### UX Enhancements

**Desktop Experience:**
- **Smooth Scrolling** - Filter changes trigger smooth scroll to top of matches list
- **Independent Scroll** - Matches container has its own scroll area

**Mobile Experience:**
- **Back to Top Button** - Appears after scrolling 300px, smoothly scrolls to top
- **Full-Page Scroll** - Natural mobile scrolling experience
- **Single Column Layout** - Optimized for smaller screens

**Implementation Details:**
- Independent scroll for matches list on desktop screens implemented through `height: 100%` and `overflow-y: auto`
- Smooth scrolling uses `scrollTo({ behavior: "smooth" })`
- Back to top button uses scroll event listener with cleanup
- Responsive breakpoints defined in theme system

## Conclusion

The current architecture is **appropriate for the project's size and complexity**. It provides:
- Clear structure without over-engineering
- Optimal rendering strategy (Server + Client Components)
- Easy path to scale when needed
- Good developer experience
- Alignment with Next.js 13+ best practices
- Centralized theme system for maintainability
- Separated concerns (styles, logic, UI)

As the project grows, the structure can evolve incrementally without requiring a complete rewrite, following the principle of **progressive enhancement** rather than **premature optimization**.
