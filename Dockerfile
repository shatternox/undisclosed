FROM php:8.1-apache

RUN apt-get update && apt-get install -y \
		libfreetype6-dev \
		libjpeg62-turbo-dev \
		libpng-dev \
	&& docker-php-ext-configure gd --with-freetype --with-jpeg \
	&& docker-php-ext-install -j$(nproc) gd

RUN adduser ctfplayer --disabled-password

COPY ./php.ini /etc/php/8.1/apache2/php.ini

USER player_ctf

RUN systemctl restart apache2









