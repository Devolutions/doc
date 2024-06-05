---
eleventyComputed:
  title: Impossible de se connecter à la source de données
---
Lors de la tentative de connexion à une source de données Microsoft SQL Server dans {{ fr.RDM }}, vous pouvez rencontrer ce message d'erreur :

"Une connexion a été établie avec succès avec le serveur, mais ensuite une erreur s'est produite pendant la poignée de main pré-login."

Il est probable que votre SQL Server soit configuré avec un certificat auto-signé que vous n'avez pas dans votre magasin de certificats.

## Solution

Ajouter le certificat à votre magasin ou configurer {{ fr.RDM }} pour faire confiance au certificat. Suivre les étapes ci-dessous pour la configuration de {{ fr.RDM }} :
1. Sélectionner votre source de données dans le ***{{ fr.NPANE }}***.
1. Aller à ***Fichier – Sources de données***, puis cliquer sur ***Modifier la source de données***.

![Fichier – Sources de données – Modifier la source de données](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2158.png)

1. Dans l'onglet ***Avancé***, cliquer sur ***Plus de paramètres***.

![Avancé – Plus de paramètres](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2164.png)

1. Faire défiler jusqu'à l'option ***TrustServerCertificate*** et régler sa ***Valeur*** sur "true".

![TrustServerCertificate = true](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2165.png)

1. Cliquer sur ***OK*** dans toutes les fenêtres pour sauvegarder vos modifications, puis essayer de vous connecter à nouveau.
