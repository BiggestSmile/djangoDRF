FROM node:14.9

# builder
WORKDIR /frontend
COPY ./frontend/package*.json ./
RUN npm install
RUN npm install npm-watch axios bootstrap react-bootstrap redux react-redux redux-thunk redux-devtools-extension react-router-dom react-router-bootstrap
COPY ./frontend/ /frontend/
RUN npm run build

# prod
FROM nginx:latest
#COPY ./build /var/www
COPY --from=build /frontend/build /var/www
COPY ./docker/prod/frontend-nginx/nginx.conf /etc/nginx/nginx.conf
