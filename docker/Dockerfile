FROM node:12.7.0-alpine

ENV PORT 8080

EXPOSE 8080

RUN mkdir -p /usr/bin/rest
WORKDIR /usr/bin/rest

COPY . /usr/bin/rest/

RUN npm install

CMD ["npm", "run", "prod"]