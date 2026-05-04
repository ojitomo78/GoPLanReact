# --- ETAPA 1: Construcción del Frontend ---
FROM node:20-slim AS build-frontend
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ ./
RUN npm run build

# --- ETAPA 2: Configuración del Backend ---
FROM node:20-slim
WORKDIR /app

# Instalamos solo lo necesario para el backend
COPY backend/package*.json ./backend/
RUN cd backend && npm install --production

# Copiamos el código del backend
COPY backend/ ./backend/

# Copiamos el Frontend ya construido a una carpeta que el Backend pueda servir
COPY --from=build-frontend /app/frontend/dist ./backend/public

WORKDIR /app/backend

# Railway asigna el puerto automáticamente
ENV PORT=5000
EXPOSE ${PORT}

# Comando para iniciar tu servidor
CMD ["node", "index.js"]