# Deployment în Portainer

## Problema rezolvată

Containerul nu pornea în Portainer cu eroarea "Code not mounted properly" pentru că folosea volume mounting în loc să copieze codul în container.

## Soluții implementate

### 1. Dockerfile actualizat
- Copiază codul în container în timpul build-ului
- Instalează dependențele în timpul build-ului
- Configurează permisiunile corecte

### 2. docker-compose.prod.yml
Fișier specific pentru producție/Portainer fără volume mounting:
```bash
docker-compose -f docker-compose.prod.yml up -d
```

### 3. docker-compose.yml îmbunătățit
Detectează automat dacă rulează în dev (cu volumes) sau prod (cu cod copiat).

## Instrucțiuni pentru Portainer

### Opțiunea 1: Folosește docker-compose.prod.yml
1. În Portainer, când creezi stack-ul, folosește conținutul din `docker-compose.prod.yml`
2. Setează variabilele de environment necesare
3. Deploy stack-ul

### Opțiunea 2: Build manual
1. Rulează script-ul de deployment:
```bash
./deploy-portainer.sh
```

### Opțiunea 3: Stack în Portainer cu Git
1. În Portainer, creează un nou Stack
2. Selectează "Git Repository"
3. Adaugă URL-ul repository-ului
4. Setează compose file la `docker-compose.prod.yml`
5. Deploy

## Variabile de environment necesare în Portainer

```env
APP_ENV=production
APP_DEBUG=false
APP_KEY=base64:YOUR_GENERATED_KEY_HERE
DB_CONNECTION=sqlite
DB_DATABASE=/var/www/html/database/database.sqlite
```

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
