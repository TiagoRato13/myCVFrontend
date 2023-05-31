FROM node:18.12-alpine

WORKDIR /cvproject

COPY . .

RUN rm -rf node_modules

RUN npm install

RUN npm run build

EXPOSE 5173

CMD ["npm", "run", "preview"]