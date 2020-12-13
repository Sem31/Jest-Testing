# FROM node:8.15

# RUN npm install -g --save-dev jest && npm i jest-stare

# COPY . /app/user 
# WORKDIR /app/user/

# RUN command ls
# RUN pwd


# CMD npm run test1

FROM node:10.20.1-alpine3.11 As development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=development

COPY . .

RUN npm run build
