---
eleventyComputed:
  title: Identifier le serveur répondant dans une topologie à haute disponibilité
---
Les étapes suivantes expliqueront comment définir quel serveur répond lors de la connexion à la page web {{ fr.DVLS }} dans une topologie à Haute Disponibilité/Équilibrage de Charge.

1. Ouvrir le Gestionnaire IIS sur le serveur où le {{ fr.DVLS }} est hébergé.
1. Développer les nœuds dans le volet ***Connexions*** et sélectionner l'application web {{ fr.DVLS }}.
![!!KB4346](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4346.png)
1. Ouvrir les ***En-têtes de réponse HTTP***.
![!!KB4347](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4347.png)
1. Cliquer sur ***Ajouter***.. dans le volet ***Actions*** pour ajouter un nouvel ***En-tête de réponse HTTP***.
![!!KB4348](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4348.png)
1. Entrer un ***Nom*** et une ***Valeur*** qui identifieront le serveur. Puis cliquer sur ***OK*** pour sauvegarder cette information.
![!!KB4349](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4349.png)
1. Répéter les étapes 1 à 5 sur chaque serveur de votre cluster ***Haute Disponibilité/Équilibrage de Charge***. Il est important de définir une valeur différente pour chaque serveur tout en conservant le même ***Nom***.
1. Ouvrir votre navigateur préféré.
1. Ouvrir les ***Outils de développement*** dans le navigateur. Habituellement, la touche ***F12*** ouvrira les ***Outils de développement*** dans Google Chrome, Firefox ou Microsoft Edge.
1. Naviguer vers votre page web {{ fr.DVLS }}.
1. En utilisant Firefox, dans l'onglet ***Réseau***, vous devriez trouver la valeur de l'***En-tête de réponse HTTP personnalisé*** du serveur répondant du cluster.
![!!KB4350](https://cdnweb.devolutions.net/docs/INTERFACE4000.png)

## Ligne de commande
```
%systemroot%\system32\inetsrv\APPCMD.EXE set config "Default Web Site" -section:system.webServer/httpProtocol /+"customHeaders.[name='X-Server-Name',value='node1']" /commit:apphost
```
