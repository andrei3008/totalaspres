# 🚀 Pentru Portainer - FOLOSEȘTE ACEASTA

## Instrucțiuni simple pentru deployment în Portainer:

### 1. Creează Stack în Portainer
- **Nume**: `totalaspres-app`
- **Metodă**: Repository (Git)
- **Repository URL**: [URL-ul tău de Git]
- **Branch**: `main`
- **⭐ Compose file path**: `docker-compose.prod.yml`

### 2. Deploy
- Click "Deploy the stack"
- Aștaptă 2-3 minute pentru build

### 3. Accesează aplicația
- URL: `http://[IP-SERVER]:8001`

## ⚠️ Dacă nu funcționează:
1. Verifică logs în Portainer
2. Asigură-te că ai folosit `docker-compose.prod.yml` (NU `docker-compose.yml`)

---

## 🔧 Pentru development local:
```bash
docker-compose up -d
```

## 📝 Fișiere importante:
- `docker-compose.prod.yml` - Pentru Portainer ⭐
- `docker-compose.yml` - Pentru development local
- `Dockerfile` - Configurația containerului
