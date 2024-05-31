---
eleventyComputed:
  title: Vérification en deux étapes
  keywords:
  - authentification à deux facteurs
  - A2F
  - authentification
  - AMF
---
Ajouter une couche de sécurité à votre {{ fr.DA }} en configurant une méthode de vérification en deux étapes (A2F).

## Configuration de la récupération de compte

1. Se connecter à votre {{ fr.DA }} et cliquer sur ***Vérification en deux étapes***.
![!!Cloud4028](https://cdnweb.devolutions.net/docs/docs_en_cloud_Cloud4028.png)
1. Cliquer sur ***Configurer***.
1. Choisir votre méthode de récupération de compte entre ***SMS*** ou ***Email***.
![Vérification en deux étapes Étape 1](https://cdnweb.devolutions.net/docs/docs_en_cloud_Cloud4029.png)
1. Entrer soit votre numéro de téléphone soit votre adresse email, cliquer sur ***Envoyer***.
![Méthode de récupération par SMS](https://cdnweb.devolutions.net/docs/docs_en_cloud_Cloud4030.png)
1. Entrer le code à 6 chiffres reçu par la méthode choisie (Étape 3) puis ***Suivant***.

## Codes de récupération

Les codes de récupération sont utilisés pour accéder à votre compte en dernier recours. Vous pourrez les régénérer une fois le processus de configuration terminé. Cette étape est obligatoire pour des raisons de sécurité.

***Télécharger*** ou ***Imprimer*** les codes de récupération dans un endroit sûr et accessible. Cliquer sur ***Suivant***.

![Codes de récupération](https://cdnweb.devolutions.net/docs/docs_en_cloud_Cloud4031.png)

### Configuration de la vérification en deux étapes

Lors de la connexion, votre application d'authentification vous demandera de vérifier via une notification push.

Choisir [Authenticator Push](#push), [Authenticator App](#app) ou [Clé de sécurité](#key) pour configurer la vérification de votre compte.

## Authenticator push

1. Cliquer sur ***Authenticator Push***.
![Authenticator Push](https://cdnweb.devolutions.net/docs/docs_en_cloud_Cloud4032.png)
1. Télécharger et installer le {{ fr.WAPP }} sur votre appareil mobile.
![{{ fr.WMAPP }}](https://cdnweb.devolutions.net/docs/docs_en_cloud_Cloud4034.png)
1. Utiliser {{ fr.WAPP }} pour scanner le code-barres ou entrer manuellement le code.
![{{ fr.WS }} Scan de code-barres](https://cdnweb.devolutions.net/docs/docs_en_cloud_Cloud4036.png)
1. Attendre la synchronisation de l'application et la demande de jumelage sur l'appareil mobile. Accepter la demande de jumelage, cliquer sur ***Compléter***.
![Synchronisation de l'application](https://cdnweb.devolutions.net/docs/docs_en_cloud_Cloud4039.png)

## Application d'authentification

1. Cliquer sur ***Application d'authentification***.
![Application d'authentification](https://cdnweb.devolutions.net/docs/docs_en_cloud_Cloud4033.png)
1. Télécharger et installer une application d'authentification sur votre appareil mobile.
![Téléchargement de l'application d'authentification](https://cdnweb.devolutions.net/docs/docs_en_cloud_Cloud4035.png)
1. Utiliser votre application d'authentification pour scanner le code-barres ou entrer manuellement le code.
![Scan de code-barres de l'authentificateur](https://cdnweb.devolutions.net/docs/docs_en_cloud_Cloud4037.png)
1. Entrer le code à 6 chiffres généré par l'application d'authentification, cliquer sur ***Activer*** puis ***Compléter***.
![Code de l'application d'authentification](https://cdnweb.devolutions.net/docs/docs_en_cloud_Cloud4038.png)

## Clé de sécurité

1. Cliquer sur ***Clé de sécurité***.
![!!Cloud4048](https://cdnweb.devolutions.net/docs/docs_en_cloud_Cloud4048.png)
1. Vous serez redirigé vers la section [Clé de sécurité](/cloud/sign-in-security/security-key/) du {{ fr.DA }}.
