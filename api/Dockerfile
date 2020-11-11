FROM node:latest


ARG PORT=5555
# set working directory
RUN mkdir /api
WORKDIR /api

# add `/app/node_modules/.bin` to $PATH

# install app dependencies
COPY ./package.json .

RUN npm install 

COPY . .

ENV PATH /api/node_modules/.bin:$PATH
ENV PATH /var:$PATH


EXPOSE ${PORT}


RUN ls -a

RUN ls -a /var
# start app
CMD ["npm","run", "start"]