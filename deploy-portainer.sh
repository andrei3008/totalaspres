#!/bin/bash

# Portainer Deployment Script for Laravel App
# This script should be used when deploying from Git in Portainer

echo "=== Laravel Portainer Deployment ==="

# Build the Docker image
echo "Building Docker image..."
docker build -t totalaspres-app:latest .

# Stop and remove existing containers
echo "Stopping existing containers..."
docker-compose -f docker-compose.prod.yml down

# Start the application
echo "Starting application..."
docker-compose -f docker-compose.prod.yml up -d

echo "Deployment completed! Application should be available on port 8001"
echo "Check logs with: docker-compose -f docker-compose.prod.yml logs -f"
