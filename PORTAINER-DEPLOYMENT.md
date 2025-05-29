# Laravel App Deployment în Portainer

## 🚀 Soluția finală pentru eroarea "Code not mounted properly"

### Pentru Portainer - folosește docker-compose.portainer.yml

1. **În Portainer, creează un nou Stack**
   - Nume: `totalaspres-app`
   - Selectează **Repository** 
   - Repository URL: URL-ul tău de Git
   - Branch: `main`
   - **Compose file path: `docker-compose.portainer.yml`** ⭐

2. **Deploy stack-ul**
   - Click "Deploy the stack"
   - Asteaptă ca aplicația să se construiască (poate dura 2-3 minute)

3. **Verifică aplicația**
   - Aplicația va fi disponibilă pe portul **8001**

## 🔧 Ce face docker-compose.portainer.yml

- Folosește Dockerfile-ul care copiază codul în container
- Copiază `.env.production` ca `.env` pentru configurația de producție
- Nu folosește volume mounting (care cauzează probleme în Portainer)
- Configurație simplificată specific pentru deployment

## ⚠️ Important

- **NU** folosi `docker-compose.yml` în Portainer (este pentru development local)
- **DA** folosește `docker-compose.portainer.yml` în Portainer

## 🐛 Troubleshooting

Dacă încă ai probleme:

1. Verifică logs-urile în Portainer pentru container
2. Asigură-te că ai selectat `docker-compose.portainer.yml` ca fișier compose
3. Verifică că portul 8001 nu este folosit de altă aplicație

## 📁 Fișiere importante

- `Dockerfile` - Configurația containerului (copiază codul în container)
- `docker-compose.portainer.yml` - Pentru Portainer ⭐
- `docker-compose.yml` - Pentru development local
- `.dockerignore` - Fișiere excluse din build

## Generarea APP_KEY

Pentru a genera o nouă APP_KEY:
```bash
php artisan key:generate --show
```

Apoi folosește outputul în Portainer.

## Verificare deployment

După deployment, verifică:
1. Container status în Portainer
2. Logs pentru erori
3. Accesează aplicația pe portul 8001

## Troubleshooting

### Container se restartează continuu
- Verifică logs-urile în Portainer
- Asigură-te că APP_KEY este setat corect
- Verifică permisiunile pe directorul database

### Aplicația nu se încarcă
- Verifică că portul 8001 este deschis
- Verifică network-ul în Portainer
- Verifică că nu sunt conflicte de porturi
