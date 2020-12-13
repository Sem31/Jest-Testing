FROM node:alpine3.11 as dev

WORKDIR /app/Jest

# To use packages in CLI without global install
ENV PATH /app/Jest/node_modules/.bin:$PATH

COPY . .

RUN npm install --silent

EXPOSE 4200

CMD ["/bin/sh", "-c", "npm run test"]