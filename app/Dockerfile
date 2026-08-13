FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY index.js .

EXPOSE 3000

CMD ["npm", "start"]