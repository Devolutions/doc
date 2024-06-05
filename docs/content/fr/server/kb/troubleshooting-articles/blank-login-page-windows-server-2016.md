---
eleventyComputed:
  title: Page de connexion vide sur Windows Server 2016
---
Lorsque vous ouvrez la page web de l'instance {{ fr.DVLS }} hébergée sur un Windows Server 2016, **la page web est vide**.

## Étapes

1. Ouvrir le **gestionnaire IIS** sur le serveur.
2. Développer la racine et sélectionner ***Pools d'applications***.
![!!KB4295](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4295.png)
1. Sélectionner le pool d'applications {{ fr.DVLS }} et cliquer sur ***Paramètres avancés***... dans le volet ***Actions*** à droite.
![!!KB4296](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4296.png)
1. Définir ***Activer les applications 32 bits*** à la valeur ***Vrai***.
![!!KB4297](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4297.png)
