// Firebase-Konfiguration für den gemeinsamen Speicher.
// Solange hier null steht, speichert das Whiteboard nur lokal im Browser.
//
// So bekommst du die Werte:
// Firebase-Konsole → Projekt → Zahnrad „Projekteinstellungen“ → „Meine Apps“ → Web-App (</>)
// → das Objekt „firebaseConfig“ hierher kopieren.
//
// Diese Werte sind nicht geheim – sie dürfen öffentlich im Repo stehen.
// Geschützt wird der Speicher über die Regeln in database.rules.json.

window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyD5w4HVJWCpj6mqDLoRMWNTUQ6WzheQ0m4",
  authDomain: "whiteboard-22318.firebaseapp.com",
  databaseURL: "https://whiteboard-22318-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "whiteboard-22318",
  storageBucket: "whiteboard-22318.firebasestorage.app",
  messagingSenderId: "554795123883",
  appId: "1:554795123883:web:080746e2ff93716846a3ee"
};

/* Beispiel:
window.FIREBASE_CONFIG = {
  apiKey: "AIza...",
  authDomain: "dein-projekt.firebaseapp.com",
  databaseURL: "https://dein-projekt-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "dein-projekt",
  storageBucket: "dein-projekt.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef"
};
*/
