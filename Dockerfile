FROM node:16

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN chown -R node.node /app

COPY . ./

# Start app
CMD ["yarn", "start"]
EXPOSE 3000