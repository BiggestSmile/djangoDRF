# syntax=docker/dockerfile:1
#inside backendfolder run: 'sudo docker-compose run web django-admin startproject config .'
FROM python:3
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
WORKDIR /backend
COPY ./backend/requirements.txt /backend/
#RUN sudo apt-get install libpq-dev
RUN pip install --upgrade pip
RUN pip install -r requirements.txt
COPY ./backend/ /backend/