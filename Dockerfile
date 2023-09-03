FROM node:18

WORKDIR /app

COPY package*.json .

RUN npm ci --omit=dev

COPY . .

RUN npm run build

EXPOSE 443

RUN mkdir -p /etc/jishnuthazhath

CMD ["npm", "run", "start-ssh"]
