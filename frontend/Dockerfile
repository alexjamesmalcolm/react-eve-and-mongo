FROM node

COPY ./ /react
WORKDIR /react
RUN npm i
RUN npm run build

FROM httpd:2.4
COPY ./my-httpd.conf /usr/local/apache2/conf/httpd.conf
COPY --from=0 /react/build /usr/local/apache2/htdocs/
