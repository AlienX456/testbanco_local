FROM node:14 as node

WORKDIR /testangularbanco

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN ls
RUN npm run build --prod



FROM nginx:1.17.1-alpine

COPY --from=node /testangularbanco/dist/testangularbanco /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf


EXPOSE 80