FROM node:18

WORKDIR /use/src/app

COPY package*.json ./

RUN npm install
#RUN npm ci --omit=dev

COPY . .
RUN npm run build
EXPOSE 8080
CMD [ "npm", "run", "start" ]
