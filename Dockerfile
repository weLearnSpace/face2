FROM nginx

ADD ./dist/ /usr/share/nginx/html

RUN rm -f /etc/nginx/conf.d/default.conf
ADD vhost.conf /etc/nginx/conf.d