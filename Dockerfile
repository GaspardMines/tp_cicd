FROM node:16
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app
EXPOSE 3000
RUN npm ci
CMD [ "npm", "start" ]

