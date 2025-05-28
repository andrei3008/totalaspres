FROM laravelsail/php82-composer:latest

# Instalare Node.js LTS (v18)
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get update && \
    apt-get install -y nodejs

# Directorul aplicației
WORKDIR /var/www/html

# Copiază tot codul
COPY . .

# Expune portul Laravel
EXPOSE 80
