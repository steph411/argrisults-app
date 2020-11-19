FROM node:12.12.0 as build

RUN mkdir /app

WORKDIR /app

COPY ./package.json .

COPY ./package-lock.json .

# RUN rm -rf node_modules


# RUN npm install --save-dev typescript @types/react @types/node

# RUN yarn install

COPY . .

# RUN npm run build


RUN ls -a

# RUN ls -a -R /

ENV PATH /app/node_modules:$PATH
ENV PATH /app/node_modules/.bin:$PATH

RUN npm install

RUN npm install --save-dev typescript @types/react @types/node

# RUN npm install

# RUN rm -rf ./.next

RUN ls -a
# RUN yarn add --dev typescript @types/react @types/node


EXPOSE 3000

# RUN yarn build

CMD ["npm", "start"]
