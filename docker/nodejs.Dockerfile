#sudo docker-compose run nodejs npx create-react-app frontend
#sudo docker-compose run nodejs npm init react-app frontend
FROM node:14.9
WORKDIR /frontend
COPY ./frontend/package*.json ./
RUN npm install
RUN npm install npm-watch axios bootstrap react-bootstrap redux react-redux redux-thunk redux-devtools-extension react-router-dom react-router-bootstrap
COPY ./frontend/ /frontend/
EXPOSE 3000
CMD [ "npm", "start" ]
#CMD [ "npm", "run", "watch" ]
#CMD ["node", "./frontend/server.js"]