FROM node:alpine

WORKDIR /home/darshildpanchal/IDP/Nodejs_MongoDB_docker-compose/app.js

COPY package*.json .

RUN npm ci

COPY . .

CMD ["npm", "start"]
