FROM node:16-buster

WORKDIR /app

COPY ["package*.json","./app"]

RUN npm ci

COPY . /app

EXPOSE 3000

CMD [ "npm", "run", "start" ]