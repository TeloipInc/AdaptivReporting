FROM node:lts-alpine3.14

WORKDIR /app

# install dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm install react-scripts@4.0.3 -g

# copy source code
COPY src ./src
COPY public ./public

# create build
RUN npm run build

# extract build artifacts
COPY extract-build-artifacts.sh ./
RUN chmod 755 extract-build-artifacts.sh
RUN ./extract-build-artifacts.sh

COPY entrypoint.sh ./
RUN chmod 755 entrypoint.sh

ENTRYPOINT ["./entrypoint.sh"]
