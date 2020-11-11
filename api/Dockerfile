FROM node:13.12.0-alpine


ARG PORT=5555
# set working directory
RUN mkdir /api
WORKDIR /api

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json .
RUN npm install 

COPY . .

EXPOSE ${PORT}
# start app
CMD ["npm","run", "start"]