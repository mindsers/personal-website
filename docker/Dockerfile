FROM node:latest as builder

WORKDIR /app

ADD ./package.json /app/
RUN yarn install

COPY ./ /app/
RUN yarn build --build-optimizer

FROM nginx:latest
LABEL maintainer="Nathaanel Cherrier <dev@nathanaelcherrier.com>"

RUN rm -v /etc/nginx/nginx.conf
ADD ./docker/nginx/nginx.conf /etc/nginx/
ADD ./docker/nginx/mime.types /etc/nginx/
RUN echo "daemon off;" >> /etc/nginx/nginx.conf

COPY --from=builder /app/dist/ /var/www/app

EXPOSE 80

CMD ["service", "nginx", "start"]
