 
FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install --only=production

# Bundle app source
COPY . .

ENV PORT 8082

EXPOSE 8082
CMD [ "node", "init.js" ]