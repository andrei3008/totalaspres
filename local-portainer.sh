#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Functions
log_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Portainer is running
check_portainer() {
    if docker ps | grep -q portainer; then
        log_success "Portainer is running"
        log_info "Access Portainer at: http://localhost:9000"
        return 0
    else
        log_warning "Portainer is not running"
        return 1
    fi
}

# Start Portainer if not running
start_portainer() {
    if ! check_portainer; then
        log_info "Starting Portainer..."
        docker run -d \
            --name portainer \
            --restart=always \
            -p 8000:8000 \
            -p 9000:9000 \
            -v /var/run/docker.sock:/var/run/docker.sock \
            -v portainer_data:/data \
            portainer/portainer-ce:latest
        
        if [ $? -eq 0 ]; then
            log_success "Portainer started successfully!"
            log_info "Access Portainer at: http://localhost:9000"
            log_info "Wait a few seconds for Portainer to initialize, then create your admin account."
        else
            log_error "Failed to start Portainer"
            exit 1
        fi
    fi
}

# Deploy application to Portainer
deploy_app() {
    log_info "Deploying Total As Pres application locally..."
    
    # Stop existing containers if running
    docker-compose -f docker-compose.local.yml down --remove-orphans
    
    # Build and start the application
    docker-compose -f docker-compose.local.yml up -d --build
    
    if [ $? -eq 0 ]; then
        log_success "Application deployed successfully!"
        log_info "Application running at: http://localhost:8001"
        log_info "Redis running at: localhost:6379"
        log_info ""
        log_info "To view logs: docker-compose -f docker-compose.local.yml logs -f"
        log_info "To stop: docker-compose -f docker-compose.local.yml down"
    else
        log_error "Failed to deploy application"
        exit 1
    fi
}

# Show application status
show_status() {
    log_info "Application Status:"
    docker-compose -f docker-compose.local.yml ps
    echo ""
    
    if docker ps | grep -q totalaspres-app-local; then
        log_success "Application is running at: http://localhost:8001"
    else
        log_warning "Application is not running"
    fi
    
    echo ""
    check_portainer
}

# Show logs
show_logs() {
    log_info "Showing application logs (Ctrl+C to exit)..."
    docker-compose -f docker-compose.local.yml logs -f
}

# Stop application
stop_app() {
    log_info "Stopping application..."
    docker-compose -f docker-compose.local.yml down
    log_success "Application stopped"
}

# Rebuild application
rebuild_app() {
    log_info "Rebuilding application..."
    docker-compose -f docker-compose.local.yml down --remove-orphans
    docker-compose -f docker-compose.local.yml build --no-cache
    docker-compose -f docker-compose.local.yml up -d
    
    if [ $? -eq 0 ]; then
        log_success "Application rebuilt and started successfully!"
        log_info "Application running at: http://localhost:8001"
    else
        log_error "Failed to rebuild application"
        exit 1
    fi
}

# Main menu
show_menu() {
    echo ""
    echo "=========================================="
    echo "  Total As Pres - Local Development"
    echo "=========================================="
    echo "1. Start Portainer"
    echo "2. Deploy Application"
    echo "3. Show Status"
    echo "4. Show Logs"
    echo "5. Stop Application"
    echo "6. Rebuild Application"
    echo "7. Exit"
    echo "=========================================="
}

# Main script
while true; do
    show_menu
    read -p "Choose an option (1-7): " choice
    
    case $choice in
        1)
            start_portainer
            ;;
        2)
            deploy_app
            ;;
        3)
            show_status
            ;;
        4)
            show_logs
            ;;
        5)
            stop_app
            ;;
        6)
            rebuild_app
            ;;
        7)
            log_info "Goodbye!"
            exit 0
            ;;
        *)
            log_error "Invalid option. Please choose 1-7."
            ;;
    esac
    
    echo ""
    read -p "Press Enter to continue..."
done
