# --- ETAPA 1: Frontend ---
FROM node:20-slim AS build-frontend
WORKDIR /app/frontend
# Copiamos archivos de dependencias primero para aprovechar el cache
COPY frontend/package*.json ./
RUN npm install
# Copiamos el resto del código del front
COPY frontend/ ./
RUN npm run build

# --- ETAPA 2: Backend ---
FROM node:20-slim
WORKDIR /app

# Copiamos dependencias del back
COPY backend/package*.json ./backend/
RUN cd backend && npm install --production

# Copiamos el código del back
COPY backend/ ./backend/

# Traemos el build del front a la carpeta public del back
COPY --from=build-frontend /app/frontend/dist ./backend/public

WORKDIR /app/backend
ENV PORT=5000
EXPOSE 5000

CMD ["node", "index.js"]
