Medusa backend + admin (docker)

This folder contains a Docker Compose stack to run Medusa (server) and the Medusa Admin dashboard with Postgres and Redis.

Quick start (requires Docker & Docker Compose):

1. Copy env file and edit secrets if desired:

```bash
cp .env.example .env
# edit .env and set MEDUSA_JWT_SECRET
```

2. Start services:

```bash
cd backend
docker compose up -d
```

3. Medusa server (API): http://localhost:9000
4. Medusa Admin: http://localhost:7000

Notes:
- The compose uses the official images: `medusajs/medusa` and `medusajs/admin`.
- For production you should replace default passwords and secrets, and use a managed Postgres/Redis.
- If you prefer a file-based install (no Docker), run `npx create-medusa-app` in a separate folder and follow Medusa docs: https://docs.medusajs.com/
