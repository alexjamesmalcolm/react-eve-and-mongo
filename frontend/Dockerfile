FROM node

COPY ./ /react
WORKDIR /react
RUN npm i
RUN npm run build

FROM nginx

COPY --from=0 /react/build /usr/share/nginx/html