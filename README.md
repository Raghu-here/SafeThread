# SafeThread

A secure, trauma-informed web platform for survivors to log fragmented memories non-linearly and automatically assemble them into a chronological, legally-admissible timeline.

## Tech Stack

- **Monorepo:** Turborepo, npm workspaces
- **Frontend:** React 18, Vite, Tailwind CSS, Framer Motion, Zustand
- **Backend:** Node.js, Express, Prisma ORM, PostgreSQL
- **Security:** JWT Rotation, SHA-256 Memory Hashing (Chain of Custody)
- **Features:** Live Speech-to-Text, Audio Recording, PDF Timeline Export

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment:**
   Create `.env` files in `apps/api` and `apps/web` based on the provided schemas.

3. **Run database migrations:**
   ```bash
   cd apps/api
   npx prisma migrate dev
   ```

4. **Start development:**
   ```bash
   npm run dev
   ```

## Trauma-Informed Design Principles

- **Minimal Cognition:** Simple layouts, no distracting UI elements.
- **Settling Breath:** Animations follow a calming `cubic-bezier` curve.
- **Immutability:** Once a memory is saved, it cannot be deleted or edited, only superseded by a correction to preserve the chain of custody.
- **Sensory Grounding:** Earthy, warm color palette (`warm-white`, `blush`, `terracotta`).
