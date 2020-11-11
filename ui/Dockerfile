FROM node:latest

RUN mkdir /app

WORKDIR /app

COPY ./package.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

RUN ls -a

RUN ls -a /var

ENV PATH /app/node_modules/.bin:$PATH
ENV PATH /var:$PATH

CMD ["npm", "run", "start"]
