FROM node:16

WORKDIR /usr/src/app

# ENV PORT 8080

COPY package*.json ./

RUN npm ci

COPY . .

# EXPOSE 8080

CMD [ "node", "server.js" ]