const fs = require('fs');

const fichiers = [
  'http.txt',
  'https.txt',
  'socks4.txt',
  'socks5.txt'
];

const resultats = {};

fichiers.forEach((fichier) => {
  const contenu = fs.readFileSync(fichier, 'utf-8');
  const lignes = contenu.split('\n');
  const nombreLignes = lignes.length;

  resultats[fichier] = {
    lines: nombreLignes
  };

  console.log(`Le fichier ${fichier} contient ${nombreLignes} lignes.`);
});

const jsonResultats = JSON.stringify(resultats, null, 2);
fs.writeFileSync('proxies.json', jsonResultats, 'utf-8');

console.log('Les résultats ont été sauvegardés dans le fichier "proxies.json".');