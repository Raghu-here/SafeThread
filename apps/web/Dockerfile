FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
COPY apps/web/package*.json ./apps/web/
COPY packages/shared/package*.json ./packages/shared/
COPY packages/tailwind-config/package*.json ./packages/tailwind-config/
COPY packages/typescript-config/package*.json ./packages/typescript-config/

RUN npm install

COPY . .

RUN npm run build -w apps/web

FROM nginx:alpine
COPY --from=build /app/apps/web/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
