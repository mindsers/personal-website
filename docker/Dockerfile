FROM node:latest as builder

WORKDIR /app

COPY ./package.json /app/
RUN yarn install

COPY ./ /app/
RUN yarn build --build-optimizer --output-path dist/en --base-href /en/ --locale en --i18n-format xlf --i18n-file src/locale/messages.en.xlf --missing-translation ignore
RUN yarn build --build-optimizer --output-path dist/fr --base-href /fr/ --locale fr --i18n-format xlf --i18n-file src/locale/messages.fr.xlf --missing-translation ignore

FROM nginx:latest
LABEL maintainer="Nathaanel Cherrier <dev@nathanaelcherrier.com>"

RUN rm -v /etc/nginx/nginx.conf
COPY ./docker/nginx/nginx.conf /etc/nginx/
COPY ./docker/nginx/mime.types /etc/nginx/
RUN echo "daemon off;" >> /etc/nginx/nginx.conf

COPY --from=builder /app/dist/ /var/www/app

EXPOSE 80

CMD ["service", "nginx", "start"]
