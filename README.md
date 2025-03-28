# 🥦 VeggieVibes

VeggieVibes è un'applicazione web che consuma l'API di **Spoonacular** per mostrare un elenco di ricette vegetariane e vegane. Gli utenti possono visualizzare informazioni dettagliate su ogni ricetta cliccando sugli appositi pulsanti.

---

## 🚀 Funzionalità
- Ricerca e visualizzazione di ricette vegetariane e vegane
- Possibilità di ottenere maggiori dettagli su ogni ricetta
- Interfaccia moderna e intuitiva

---

## 🛠️ Tecnologie utilizzate
- ⚛️ **React** - Libreria per costruire l'interfaccia utente
- 🔄 **React Router DOM v6** - Gestione della navigazione tra le pagine
- 🌍 **Axios** - Per effettuare richieste HTTP all'API
- 🎨 **React Icons** - Icone per un'interfaccia più accattivante
- 🚀 **Vite** - Ambiente di sviluppo veloce e ottimizzato

---

## 📦 Installazione e Avvio
1. **Clonare il repository**
   ```sh
   git clone https://github.com/tuo-username/VeggieVibes.git
   cd VeggieVibes
   ```
2. **Installare le dipendenze**
   ```sh
   npm install
   ```
3. **Avviare il server di sviluppo**
   ```sh
   npm run dev
   ```
4. Aprire il browser su `http://localhost:5173/`

---

## 🔄 Comandi Git Utili
Ecco alcuni comandi Git utili per gestire il progetto:

- **Inizializzare un repository Git (se non è già stato fatto)**
  ```sh
  git init
  ```
- **Aggiungere tutti i file al commit**
  ```sh
  git add .
  ```
- **Creare un commit con un messaggio**
  ```sh
  git commit -m "Messaggio del commit"
  ```
- **Inviare le modifiche al repository remoto**
  ```sh
  git push origin main
  ```
- **Aggiornare il progetto con le ultime modifiche dal repository remoto**
  ```sh
  git pull origin main
  ```

---

## 📖 API Utilizzata
L'app si connette all'API **Spoonacular**, che fornisce dati sulle ricette vegetariane e vegane in formato JSON.

Esempio di richiesta:
```sh
GET https://api.spoonacular.com/recipes/complexSearch?diet=vegetarian&apiKey=TUO_API_KEY
```
Esempio di risposta:
```json
[
  {
    "id": 12345,
    "title": "Insalata di quinoa",
    "image": "https://spoonacular.com/recipeImages/12345.jpg"
  }
]
```

---

## 🔧 Struttura del Progetto
```
VeggieVibes/
│── src/
│   ├── components/   # Componenti UI
│   ├── pages/        # Pagine dell'app
│   ├── routes/       # Configurazione delle rotte
│   ├── styles/       # File CSS
│   ├── App.jsx       # Componente principale
│   ├── main.jsx      # Punto di ingresso
│── public/
│── package.json
│── README.md
```

---

## 🛠️ Possibili Miglioramenti
- Aggiungere un sistema di **filtri avanzati** (es. senza glutine, keto, ecc.)
- Implementare un **sistema di preferiti** per salvare le ricette preferite
- Integrare un'opzione per **condividere le ricette** sui social media

---

## 📝 Licenza
Questo progetto è rilasciato sotto la licenza MIT.

---

## 👨‍💻 Autore
**Il tuo nome o username GitHub**
- GitHub: [@tuo-username](https://github.com/tuo-username)
- LinkedIn: [Il tuo profilo](https://www.linkedin.com/in/tuo-profilo/)

