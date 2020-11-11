FROM node:12.12.0


ARG PORT=5555
# set working directory
RUN mkdir /api
WORKDIR /api

# add `/app/node_modules/.bin` to $PATH

# install app dependencies
COPY ./package.json .

RUN rm -rf node_modules

RUN npm install 

COPY . .

ENV PATH /api/node_modules/.bin:$PATH
ENV PATH /api/node_modules:$PATH


EXPOSE ${PORT}


RUN ls -a

# RUN ls -a -R /
# start app
CMD ["npm","run", "start"]