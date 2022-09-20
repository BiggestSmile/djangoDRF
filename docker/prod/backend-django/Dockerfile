FROM python:3
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
WORKDIR /backend
#COPY ./backend/requirements.txt /backend/
COPY ./backend/ /backend/
RUN pip install --upgrade pip
RUN pip install -r requirements.txt
RUN pip install gunicorn
