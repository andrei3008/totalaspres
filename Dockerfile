FROM laravelsail/php82-composer:latest

# Install Node.js LTS (v20)
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get update && \
    apt-get install -y nodejs && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /var/www/html

# Copy application code (for Portainer deployment)
COPY . /var/www/html/

# Copy production environment file
COPY .env.production /var/www/html/.env

# Create required directories
RUN mkdir -p /var/www/html/storage/logs && \
    mkdir -p /var/www/html/storage/framework/cache && \
    mkdir -p /var/www/html/storage/framework/sessions && \
    mkdir -p /var/www/html/storage/framework/views && \
    mkdir -p /var/www/html/bootstrap/cache && \
    mkdir -p /var/www/html/database

# Install dependencies and build assets
RUN composer install --no-dev --optimize-autoloader && \
    npm ci && \
    npm run build

# Create SQLite database file
RUN touch /var/www/html/database/database.sqlite

# Set proper permissions
RUN chown -R www-data:www-data /var/www/html && \
    chmod -R 755 /var/www/html/storage && \
    chmod -R 755 /var/www/html/bootstrap/cache && \
    chmod 664 /var/www/html/database/database.sqlite

# Start command for production (Portainer)
CMD ["sh", "-c", "php artisan migrate --force && php artisan config:clear && php artisan cache:clear && php artisan route:clear && php artisan view:clear && php artisan serve --host=0.0.0.0 --port=80"]

EXPOSE 80
