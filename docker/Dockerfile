FROM node:9 as builder

WORKDIR /app

COPY ./package.json /app/
COPY ./yarn.lock /app/

RUN yarn install --frozen-lockfile

COPY ./angular.json /app/
COPY ./tsconfig.json /app/
COPY ./src /app/src/

RUN yarn build:i18n

FROM nginx:latest
LABEL maintainer="Nathaanel Cherrier <dev@nathanaelcherrier.com>"

RUN rm -v /etc/nginx/nginx.conf
COPY ./docker/nginx/nginx.conf /etc/nginx/
COPY ./docker/nginx/mime.types /etc/nginx/
RUN echo "daemon off;" >> /etc/nginx/nginx.conf

COPY --from=builder /app/dist/ /var/www/app

EXPOSE 80

CMD ["service", "nginx", "start"]
