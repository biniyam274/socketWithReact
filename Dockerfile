FROM node:16-alpine3.11
WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY  package*.json ./

RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

COPY . ./

EXPOSE 3000

CMD ["npm", "start"]
