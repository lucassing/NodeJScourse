FROM node:15.5.1-buster
MAINTAINER Lucas M. Sing


RUN mkdir /ejercicios
WORKDIR /ejercicios
RUN npm install express-generator -g

RUN npm install mongoose
COPY ./ejercicios /ejercicios
