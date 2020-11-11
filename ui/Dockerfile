FROM node

RUN mkdir /app

WORKDIR /app

COPY ./package.json .

RUN rm -rf node_modules

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

RUN ls -a

# RUN ls -a -R /

ENV PATH /app/node_modules/.bin:$PATH
ENV PATH /app/node_modules:$PATH

RUN npm run build

CMD ["npm", "run", "start"]
