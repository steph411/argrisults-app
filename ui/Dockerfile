FROM node:13.12.0-alpine

RUN mkdir /app

WORKDIR /app

COPY pakcage.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]
