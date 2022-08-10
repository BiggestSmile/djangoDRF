#sudo docker-compose run web django-admin startproject config .
#sudo docker-compose run nodejs npx create-react-app frontend
#sudo docker-compose run nodejs npm init react-app frontend
FROM node:14.9
WORKDIR /frontend
COPY ./frontend/package*.json ./
RUN npm install
COPY ./frontend/ /frontend/
EXPOSE 3000
CMD [ "npm", "start" ]