FROM ubuntu:lunar
RUN apt-get update -y && apt-get upgrade -y

FROM node:18 AS base
COPY . .
WORKDIR /app

FROM base AS build
RUN ["npm", "i"]
RUN ["npm", "run", "build"]

FROM build AS final
CMD ["npm", "run", "dev"]