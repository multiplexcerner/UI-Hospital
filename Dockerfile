# base image
FROM node:latest

# set working directory
RUN mkdir -p /usr/src/app
WORKDIR usr/src/app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

COPY . /usr/src/app

# install and cache app dependencies
#COPY package.json /app/package.json
#COPY package-lock.json /app/package-lock.json

RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent

# start app
CMD ["npm", "start"]