# syntax=docker/dockerfile:1
FROM python:3
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
WORKDIR /backend
COPY ./backend/requirements.txt /backend/
RUN pip install --upgrade pip
RUN pip install -r requirements.txt
COPY ./backend/ /backend/