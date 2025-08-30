import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Configuración de tu proyecto Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBnQuqzfIrJOjOhvLf-bsjgplSsxLUf3ig",
  authDomain: "operaciones78-623b3.firebaseapp.com",
  projectId: "operaciones78-623b3",
  appId: "1:1078547849407:web:26c0014a9e23fe0819660a",
};

// Inicializar Firebase solo si no está inicializado
if (getApps().length === 0) {
  initializeApp(firebaseConfig);
}

const auth = getAuth();
signInAnonymously(auth)
  .then(() => {
    console.log("Usuario anónimo autenticado");
  })
  .catch((error) => {
    console.error("Error en login anónimo:", error);
  });
