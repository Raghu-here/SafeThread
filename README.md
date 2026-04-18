
# SafeThread  

![SafeThread Logo](https://raw.githubusercontent.com/Raghu-here/SafeThread/main/.github/logo.png)  

**Secure, searchable, and shareable personal memory threads**  

[![Node.js](https://img.shields.io/badge/Node.js-20.x-green?logo=node.js)](https://nodejs.org/)  
[![Docker](https://img.shields.io/badge/Docker-✓-blue?logo=docker)](https://www.docker.com/)  
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)  
[![Build Status](https://img.shields.io/github/actions/workflow/status/Raghu-here/SafeThread/ci.yml?branch=main)](https://github.com/Raghu-here/SafeThread/actions)  
[![Coverage](https://img.shields.io/codecov/c/github/Raghu-here/SafeThread)](https://codecov.io/gh/Raghu-here/SafeThread)  

**Quick links** – [Demo](#demo) • [Documentation](#documentation) • [Issues](https://github.com/Raghu-here/SafeThread/issues)  

---  

## Overview 🧵

SafeThread is a secure, full-stack platform designed to preserve delicate memories as immutable records. It provides a dignified space to document truths at your own pace, automatically weaving fragmented memories into a coherent, chronological timeline.

- **Immutable Records** – Memories are cryptographically hashed upon saving, ensuring a verifiable chain of custody and preventing alterations for legal admissibility.
- **Chronological Unity** – Log fragments in any order; the system automatically assembles them into a structured, dated timeline.
- **Privacy-First** – JWT-based authentication, bcrypt-hashed passwords, and encrypted storage (including optional AWS S3 support).
- **Multi-Modal Support** – Capture memories via text, images, PDFs (up to 50MB), or voice-to-text and audio recordings.
- **Advocacy Ready** – Generate secure chronological documents to share your story with counselors or advocates when you're ready.

Current version: **0.0.0** (development)

---
## 🛠️ Features  

| Feature | Description | Status |
|---------|-------------|--------|
| **User authentication** | Secure JWT + refresh‑token flow, bcrypt password hashing | ✅ Stable |
| **Onboarding Tour** | Multi-step guided tour explaining immutability, timeline assembly, and legal-grade exports | ✅ Stable |
| **Memory CRUD** | Create and manage personal memories (text and audio) | ✅ Stable |
| **Grounding Modal** | Trauma-informed breathing exercise to center users before data entry | ✅ Stable |
| **Voice-to-Text** | Real-time speech recognition for hands-free memory capture | ✅ Stable |
| **AI Transcripts** | Integrated transcription for audio memories via OpenAI Whisper | ✅ Stable |
| **Memory Ledger** | Export a cryptographically sealed text record (.txt) of all entries | ✅ Stable |
| **Timeline View** | Chronological rendering with monthly grouping, audio playback, and integrity hashes | ✅ Stable |
| **Search & Filtering** | Filter by memory type and search through content for quick retrieval | ✅ Stable |
| **Loading States** | Polished skeleton screens for data fetching and transitions | ✅ Stable |
| **Responsive UI** | Mobile-first sidebar with Zustand state and support resource links | ✅ Stable |
| **Anti-Gravity UI** | Scroll-driven parallax field with floating cards, depth layering, and cursor-reactive motion | ✅ Stable |
| **Docker & Docker‑Compose** | One‑command dev and production environments | ✅ Stable |
| **Tailwind‑CSS UI** | Responsive, trauma-informed front-end built with Vite | ✅ Stable |

---
## 🛠️ Tech Stack

| Layer | Technology | Reason |
|-------|------------|--------|
| **Runtime** | Node.js 20 (ESM) | Modern JavaScript, native ESM support |
| **Web framework** | Express 4 | Minimal, battle‑tested HTTP server |
| **Database** | PostgreSQL (via Prisma 5) | Type‑safe ORM, migrations, schema‑first |
| **Auth** | jsonwebtoken, bcryptjs | Stateless JWT + secure password hashing |
| **File storage** | multer, multer‑s3, AWS SDK | Streamed uploads, optional S3 backend |
| **PDF** | pdfkit, jspdf | Server‑side and client‑side PDF generation |
| **Validation** | zod | Declarative schema validation |
| **Front‑end** | Vite 5, React (via Vite template), Tailwind‑CSS | Fast dev server, utility‑first styling |
| **Containerisation** | Docker, Docker‑Compose | Consistent dev/prod environments |
| **CI/CD** | GitHub Actions (build, test, lint) | Automated quality gates |
| **Shared code** | `@safethread/shared` (workspace package) | Re‑usable types & utilities across apps |

---
## Architecture  

plaintext
SafeThread/
├─ apps/
│  ├─ api/                # Express REST API
│  │  ├─ src/             # Controllers, routes, middleware
│  │  ├─ prisma/          # Prisma schema + migrations
│  │  └─ Dockerfile
│  └─ web/                # Vite + React front‑end
│     ├─ src/
│     ├─ dist/            # Production build (git‑ignored)
│     └─ Dockerfile
├─ packages/
│  ├─ shared/             # Types, constants, helpers
│  └─ tailwind-config/   # Central Tailwind configuration
├─ docker-compose.yml
└─ root package.json      # Workspace definition


- **API** (`apps/api`) exposes `/api/auth`, `/api/memories`, `/api/timeline`, `/api/storage`.  
- **Prisma** handles DB migrations (`prisma:migrate`) and generates the client (`prisma:generate`).  
- **Web** (`apps/web`) consumes the API and provides a responsive UI built with Tailwind.  
- **Docker Compose** spins up PostgreSQL, the API, and the web client together for local development.  

---  

## 🚀 Getting Started

### Prerequisites

| Tool | Minimum version |
|------|-----------------|
| Node.js | 20.x |
| npm | 10.x (or use `pnpm`/`yarn` – any works) |
| Docker & Docker‑Compose | 24.x |
| PostgreSQL | 14 (local or remote) |
| (Optional) AWS credentials | Access key + secret for S3 uploads |

### Installation

#### 1. Clone the repository

bash
git clone https://github.com/Raghu-here/SafeThread.git
cd SafeThread


#### 2. Install workspace dependencies

bash
npm install   # installs root + all packages (api, web, shared)


#### 3. Set up environment variables

Copy the example files and edit them with your configuration:

bash
cp apps/api/.env.example apps/api/.env
# edit apps/api/.env as needed


### Running locally

bash
docker-compose up --build


The API will be available at `http://localhost:3000/api` and the web client at `http://localhost:5173`.

---  

# API 🔌

Copy the example environment file and configure it:

bash
cp apps/api/.env.example apps/api/.env


The API now includes the following resources backed by Prisma models:

- **User** – registration, login, email verification, and password management.
- **RefreshToken** – endpoint to rotate and revoke refresh tokens.
- **MemoryCard** – create, read, update, delete memory cards; supports text, audio, transcripts, timestamps, confidence levels, and cryptographic hash generation.
- **Tag** – CRUD operations for tags that can be attached to memory cards.
- **MemoryCardTag** – associate tags with memory cards.
- **MemoryAttachment** – upload and retrieve audio/video/image attachments with optional AI‑generated transcripts.
- **Timeline** – create a personal timeline for each user.
- **TimelineEntry** – link memory cards to a timeline, enabling chronological reconstruction.

All endpoints follow REST conventions under `/api/v1/`. See the automatically generated OpenAPI spec at `/api/docs` for full request/response schemas.
# Edit the file and provide real values (see the table below)
```

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | PostgreSQL connection string |
| `JWT_SECRET` | Secret for signing access tokens |
| `JWT_REFRESH_SECRET` | Secret for signing refresh tokens |
| `PORT` | Port the API will listen on (default 3000) |
| `NODE_ENV` | `development` or `production` |

#### 4. Run with Docker Compose (recommended)  

```bash
docker compose up --build
```

- PostgreSQL will be available at `localhost:5432`.  
- API will be reachable at `http://localhost:3000`.  
- Web client will be reachable at `http://localhost:5173` (Vite dev server).  

#### 5. (Alternative) Run locally without Docker  

```bash
# Start the database manually or use a hosted instance
npm run prisma:migrate --workspace=api   # apply migrations
npm run dev --workspace=api              # start API (nodemon)
npm run dev --workspace=web              # start Vite dev server
```

### Verification  

```bash
curl -s http://localhost:3000/health | jq
# Expected output:
# {
#   "status": "healthy",
#   "timestamp": "2026-04-15T12:34:56.789Z"
# }
```

---  

## 📖 Usage

### 1. Authentication, Grounding & Onboarding

Access your secure vault by signing up or logging in. Upon entry, SafeThread presents a **Grounding Modal**—a brief breathing exercise designed to help you center yourself. New users are also presented with a multi-step **Onboarding Tour** that introduces the platform's core pillars: immutable records with cryptographic hashes, chronological timeline assembly, and legal‑grade document exports.

### 2. Capturing Memories

Use the **Dashboard** to record thoughts as they occur.
- **Text Entries**: Type directly into the input panel to save written memories.
- **Voice‑to‑Text**: Use the microphone icon to transcribe your speech into text in real‑time using browser‑native recognition.
- **Audio Recording**: Record raw audio clips that are automatically transcribed using AI and cryptographically sealed.
- **Contextual Metadata**: Add specific dates, times, confidence levels, and emotional tags to provide depth to your records.
- **Attachments**: Upload images, video, or additional audio files. Attachments are stored as `MemoryAttachment` records and, when possible, receive AI‑generated transcripts.
- **Tags**: Assign descriptive tags to each memory card for powerful filtering and semantic grouping.

### 3. Organizing with Tags & Attachments

- **Tags** let you categorize memories (e.g., #family, #work, #therapy). You can filter the dashboard or timeline view by one or multiple tags.
- **Attachments** are displayed alongside the corresponding memory entry, with playback controls for audio/video and preview thumbnails for images.

### 4. Navigating the Timeline

The **Timeline** page reconstructs your story chronologically:
- **Monthly Grouping**: Entries are organized into collapsible monthly sections for better organization and readability.
- **Search & Filter**: Use the search bar to find specific keywords or filter the view to show written, audio, or undated memories, as well as filter by tags.
- **Audio Playback**: Listen to your recorded memories and review AI‑generated transcripts.
- **Integrity Hashes**: Each entry displays a unique hash to verify that the record has not been altered.
- **Legal Ledger Export**: Generate a formal **Chronological Memory Ledger** as a PDF. This document includes entry numbers, timestamps, transcripts, and cryptographic hashes, formatted for use as a verifiable record.

### 5. Support Resources

SafeThread is designed with a trauma‑informed approach. The sidebar provides immediate access to the **RAINN** support network and the **988** crisis line for users in need of assistance.
# Example: obtain JWT tokens
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","password":"yourPassword"}'


### 2. Landing Page Overview  

The landing page now includes a **"Why SafeThread is Different"** section that showcases the trauma‑informed UI.  
Visit the app (e.g., `http://localhost:5173`) and scroll to the **Difference** section or navigate directly to `#difference`.

html
<!-- Example snippet from the landing page -->
<UniquePointsSection id="difference" />


---  

# Sign‑up
curl -X POST http://localhost:3000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"email":"you@example.com","password":"StrongP@ssw0rd"}'

# Login (returns access & refresh tokens)
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"you@example.com","password":"StrongP@ssw0rd"}'
```

All subsequent requests require the `Authorization: Bearer <access_token>` header.

### 2. Create a Memory  

```bash
curl -X POST http://localhost:3000/api/memories \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -F "title=My first memory" \
  -F "content=This is a text memory" \
  -F "file=@/path/to/photo.jpg"
```

### 3. Get Timeline  

```bash
curl -X GET http://localhost:3000/api/timeline \
  -H "Authorization: Bearer $ACCESS_TOKEN"
```

Response (pretty‑printed):

```json
{
  "memories": [
    {
      "id": "clz7k9a1x0000abcd1234",
      "title": "My first memory",
      "createdAt": "2026-04-15T10:20:30.000Z",
      "type": "image",
      "url": "https://s3.amazonaws.com/your-bucket/photo.jpg"
    }
    // …
  ]
}
```

### 4. Export as PDF  

```bash
curl -X GET http://localhost:3000/api/memories/export/pdf \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -o my-thread.pdf
```

---  

## Development  

| Command | Description |
|---------|-------------|
| `npm run dev --workspace=api` | Starts API with `nodemon` (auto‑restart on changes) |
| `npm run dev --workspace=web` | Starts Vite dev server (hot‑module reload) |
| `npm run test --workspace=api` | Runs Jest (or your test runner) for the API |
| `npm run lint --workspace=api` | Lints API source with ESLint |
| `npm run prisma:generate --workspace=api` | Regenerates Prisma client after schema changes |
| `npm run build --workspace=web` | Produces a production‑ready bundle in `apps/web/dist` |

### Code Style  

- **ESLint** (recommended) – run `npm run lint`.  
- **Prettier** – format on save (VS Code settings: `"editor.formatOnSave": true`).  

### Debugging  

- API: set `DEBUG=express:*` to see request logs.  
- Use `node --inspect-brk src/index.js` for VS Code remote debugging.  

---  

## Deployment  

### Docker (Production)  

```bash
docker compose -f docker-compose.yml up -d
```

The compose file defines three services:

| Service | Image | Port | Env |
|---------|-------|------|-----|
| `postgres` | `postgres:15-alpine` | `5432` | `POSTGRES_PASSWORD`, `POSTGRES_DB` |
| `api` | Built from `apps/api/Dockerfile` | `3000` | `DATABASE_URL`, `JWT_SECRET`, `JWT_REFRESH_SECRET` |
| `web` | Built from `apps/web/Dockerfile` | `80` (exposed) | `VITE_API_URL` (defaults to `http://api:3000`) |

**Environment variables** should be supplied via a `.env` file at the root or via your container orchestrator (e.g., Vercel, Render, Fly.io).

### Vercel / Netlify (Front‑end only)  

1. Connect the `apps/web` directory as the project root.  
2. Set the build command: `npm run build --workspace=web`.  
3. Set the output directory: `apps/web/dist`.  

### Scaling  

- **Database** – Use managed PostgreSQL (e.g., Supabase, Neon).  
- **API** – Horizontal scaling via Docker Swarm/Kubernetes; keep JWT secret consistent across replicas.  
- **Static assets** – Store uploads in S3 and serve via CloudFront for low latency.

---  

## API Documentation 📜

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| `POST` | `/api/auth/signup` | ❌ | Register a new user |
| `POST` | `/api/auth/login` | ❌ | Obtain access & refresh tokens |
| `POST` | `/api/auth/refresh` | ❌ | Refresh access token |
| `GET` | `/api/auth/me` | ✅ | Get current user profile |
| `POST` | `/api/memories` | ✅ | Create a new memory (multipart) |
| `GET` | `/api/memories/:id` | ✅ | Retrieve a single memory |
| `PATCH` | `/api/memories/:id` | ✅ | Update memory fields |
| `DELETE` | `/api/memories/:id` | ✅ | Delete a memory |
| `GET` | `/api/timeline` | ✅ | Paginated list of memories ordered by `createdAt` |
| `GET` | `/api/memories/export/pdf` | ✅ | Generate a PDF of the entire thread |
| `GET` | `/health` | ❌ | Liveness probe (returns `{status:"healthy"}`) |

**Error format**


{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Title must be at least 3 characters",
    "details": [...]
  }
}


**Rate limits** – 100 requests per minute per IP (configurable in `src/middleware/rateLimiter.js`).  

---
## Contributing  

1. **Fork** the repository and clone your fork.  
2. Create a feature branch: `git checkout -b feat/awesome-feature`.  
3. Install dependencies (`npm install`).  
4. Make your changes.  
5. Run tests & lint: `npm run test --workspace=api && npm run lint --workspace=api`.  
6. Commit with a clear message following the Conventional Commits spec.  
7. Open a Pull Request against `main`.  

### Development workflow  

- **Monorepo** – The repo uses npm workspaces (`apps/*` and `packages/*`).  
- **PR checks** – CI runs lint, type‑check, and unit tests.  
- **Code review** – At least one approving review from a maintainer is required.  

### Local testing of PRs  

```bash
docker compose -f docker-compose.yml up -d   # start services
npm run test --workspace=api                 # run API tests
npm run build --workspace=web                # ensure front‑end builds
```

---  

## Troubleshooting  

| Symptom | Likely Cause | Fix |
|---------|--------------|-----|
| `Error: connect ECONNREFUSED 127.0.0.1:5432` | PostgreSQL not running or wrong `DATABASE_URL` | Start the DB (`docker compose up postgres`) or update `.env` |
| `JWT verification failed` | Wrong `JWT_SECRET` or token expired | Ensure the same secret is used in both API and client; re‑login |
| File upload returns 500 | Missing AWS credentials or bucket policy | Set `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_REGION`, `S3_BUCKET` env vars |
| Front‑end cannot reach API (`CORS` error) | API URL not set correctly in Vite env | Set `VITE_API_URL` in `.env` at the web root (`apps/web/.env`) |
| Docker build hangs on `npm install` | Network proxy / missing `.npmrc` auth token | Verify `.npmrc` (present in repo) or use `npm config set registry https://registry.npmjs.org/` |

**Help** – Open an issue on GitHub or join the discussion in the `#support` channel of the repository’s Discord (link in the repo Wiki).

---  

## Roadmap  

- **v1.0.0** (Q4 2026) – Stable release, full test coverage, Docker Swarm ready.  
- **v1.1.0** – Swagger/OpenAPI UI, email verification, password reset flow.  
- **v2.0.0** – Real‑time timeline via WebSockets, end‑to‑end encryption for stored files.  
- **v2.1.0** – Mobile‑first PWA enhancements, offline support.  

---  

## License & Credits  

**License:** MIT © 2026 Raghu‑here. See the [LICENSE](LICENSE) file for details.  

### Contributors  

- **Raghu‑here** – Project founder & lead developer  
- *(Add your name here when you contribute!)*  

### Acknowledgments  

- **Prisma** – For the type‑safe ORM layer.  
- **Tailwind Labs** – For the utility‑first CSS framework.  
- **AWS SDK Team** – For seamless S3 integration.  

---  

*Happy coding! 🎉*  