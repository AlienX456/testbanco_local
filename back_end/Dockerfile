FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN ./node_modules/mocha/bin/mocha --exit

EXPOSE 4000

CMD [ "node", "index.js" ]