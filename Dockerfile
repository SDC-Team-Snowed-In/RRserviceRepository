FROM node:14.15.1
 WORKDIR /app
 COPY . .
 RUN npm install
 RUN ["apt-get", "update"]
 RUN ["apt-get", "-y", "install", "vim"]

 EXPOSE 3005
 CMD ["node", "./server/server.js"]