FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
COPY apps/api/package*.json ./apps/api/
COPY packages/shared/package*.json ./packages/shared/
COPY packages/typescript-config/package*.json ./packages/typescript-config/

RUN npm install

COPY . .

RUN npm run build -w apps/api

EXPOSE 3000

CMD ["npm", "start", "-w", "apps/api"]
