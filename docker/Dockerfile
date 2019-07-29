FROM node:12.7.0-alpine

ENV PORT 8080

EXPOSE 8080

RUN mkdir -p /usr/bin/rest

COPY package.json /usr/bin/backend/
COPY src /usr/bin/backend/

RUN npm install

CMD ["npm", "run", "prod"]