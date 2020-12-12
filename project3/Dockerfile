FROM node:8.15

RUN npm i && npm install -g --save-dev jest && npm i jest-stare

COPY . /app/user 
WORKDIR /app/user/

RUN command ls
RUN pwd


CMD npm run test1