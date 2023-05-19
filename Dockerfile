FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json package-lock.json ./

RUN npm ci

# Bundle app source
COPY . .

# Build app
RUN npm run build

# Expose port
EXPOSE 3000

# Start app
CMD [ "node", "build/" ]
