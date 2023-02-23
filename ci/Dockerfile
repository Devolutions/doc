## Build a small nginx image with static website
FROM devolutions/nginx-brotli

## Copy our default nginx config
COPY ci/nginx/default.conf /etc/nginx/conf.d/

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## Copy static website to default nginx public folder
COPY dist /usr/share/nginx/html/
RUN ln -sf /dev/stdout /var/log/nginx/access.log \
    && ln -sf /dev/stderr /var/log/nginx/error.log

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
