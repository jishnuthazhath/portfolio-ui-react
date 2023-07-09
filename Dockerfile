FROM node:18

WORKDIR /app

COPY package*.json .

RUN npm ci --omit=dev

COPY . .

RUN npm run build

EXPOSE 443

# COPY /Users/jishnu/Dev/certificates/jishnuthazhath.dev/privkey.pem /etc/jishnuthazhath/
# COPY /Users/jishnu/Dev/certificates/jishnuthazhath.dev/fullchain.pem /etc/jishnuthazhath/

RUN mkdir -p /etc/jishnuthazhath

ENV CERTIFICATE="/etc/jishnuthazhath/fullchain.pem"
ENV CERTIFICAET_KEY="/etc/jishnuthazhath/privkey.pem"

CMD ["npm", "run", "start-ssh"]
