# Oprava Smartphonů – web aplikace

## Backend (Node.js + Express)
1. V adresáři `backend/`:
   - `npm install express cors dotenv`
   - Vytvoř `.env` s proměnnou `ADMIN_PASSWORD` (nebo použij defaultní v kódu)
   - `node server.js` (spustí backend na portu 4000)

## Frontend (React + Tailwind)
1. V adresáři `frontend/`:
   - `npm install`
   - `npm run dev` (lokálně na portu 5173)
2. Otevři v prohlížeči: [http://localhost:5173](http://localhost:5173)

### Poznámky
- API endpointy jsou v kódu nastaveny na `http://localhost:4000`
- Pro admin rozhraní použij heslo z `.env` (default: `servis2024`)
- Data se ukládají do `backend/db.json` (demo databáze, lze rozšířit na SQLite/MongoDB)

---

Hotovo!  
Pokud chceš jednodušší statickou verzi (čisté HTML/CSS), napiš – udělám to v jednom souboru.  
Nebo můžu dodat zip projektu/strukturu pro **Netlify** nebo **Vercel** nasazení.

Chceš přidat další sekce/funkce? Nebo něco upravit? Stačí říct!
