# Etapa de construcción
FROM node:18 AS builder
WORKDIR /app

# Copiar package.json y package-lock.json para instalar dependencias
COPY frontend/package*.json ./
RUN npm ci

# Copiar TODO el código fuente del frontend
COPY frontend ./

# Construir la aplicación Next.js
RUN npm run build

# Etapa de producción
FROM node:18 AS runner
WORKDIR /app

# Establecer el entorno de producción
ENV NODE_ENV=production

# Copiar solo los archivos necesarios desde la etapa de construcción
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Exponer el puerto 3000
EXPOSE 3000

# Iniciar la aplicación Next.js
CMD ["npm", "start"]
