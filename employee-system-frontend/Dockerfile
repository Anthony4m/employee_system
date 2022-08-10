FROM node:17-alpine

WORKDIR /app

COPY employee-system-frontend/package.json .

RUN npm install

COPY employee-system-frontend .

EXPOSE 3000

CMD ["npm", "start"]