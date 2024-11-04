const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    // Traitement à effectuer lorsque la route '/admin-login' est atteinte
    res.sendFile(__dirname + '/public/index.html'); // Envoyer le fichier HTML de la page de connexion admin
});


app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
