---
eleventyComputed:
  title: Abonnés
  description: Au moins un abonné doit exister pour recevoir des notifications concernant les activités de {{ fr.DVLS }}.
---
Au moins un abonné doit exister pour recevoir des notifications concernant les activités de {{ fr.DVLS }}.
Pour créer un nouvel ***Abonné***, cliquer sur le bouton ***Ajouter***.
![Créer un abonné](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8154.png)

Remplir les informations dans les champs suivants.
![Propriétés de l'abonné par courriel](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8155.png)

![Propriétés de l'abonné du serveur Syslog](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2122.png)

## Abonné
| Option | Description                |
|--------|----------------------------|
| Nom    | Affichage de l'abonné.     |
| Type   | <ul><li>Email : La notification sera envoyée à une adresse courriel.<ul><li>Adresse courriel : Adresse courriel valide.</li><li>Nom du destinataire : Nom du destinataire du courriel.</li></ul></li><li>Syslog : La notification sera envoyée à un serveur syslog.<ul><li>Utiliser par défaut : Utilisera la configuration du serveur Syslog définie dans [Journalisation](/server/web-interface/administration/configuration/server-settings/general/logging/).</li><li>Nom d'hôte : Nom d'hôte du serveur Syslog.</li><li>Port : Port du serveur syslog.</li><li>Protocole : Protocole (TCP ou UDP) pour communiquer avec le serveur Syslog.</li></ul></li></ul> |
```
