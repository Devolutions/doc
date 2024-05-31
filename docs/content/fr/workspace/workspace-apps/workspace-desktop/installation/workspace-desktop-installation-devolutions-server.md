---
eleventyComputed:
  title: "{{ fr.WDAPP }} installation avec {{ fr.DVLS }}"
  description: Avant d'utiliser votre application, vous devrez compléter une configuration rapide qui implique de sélectionner vos produits Devolutions, de vous connecter à votre {{ fr.DVLS }}, et de configurer certains paramètres de sécurité.
---
Avant d'utiliser votre application, vous devrez compléter une configuration rapide qui implique de sélectionner vos produits Devolutions, de vous connecter à votre {{ fr.DVLS }}, et de configurer certains paramètres de sécurité.

## Configuration de {{ fr.WDAPP }}

Suivre les étapes ci-dessous pour effectuer la configuration initiale de votre {{ fr.WDAPP }} avec {{ fr.DVLS }} :

1. [Télécharger et installer le {{ fr.WDAPP }}](https://devolutions.net/workspace/) si ce n'est pas déjà fait.
1. Après l'installation, dans la fenêtre ***Configuration de {{ fr.WS }}***, cocher ***{{ fr.DVLS }}***, puis cliquer sur ***Démarrer la configuration***.
![Configuration de {{ fr.DVLS }}](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2080.png)

{% snippet, "badgeInfo" %}
Pendant la configuration, vous pouvez toujours cliquer sur ***Passer cette étape*** pour configurer ce paramètre spécifique plus tard.
{% endsnippet %}

3. Se connecter à votre {{ fr.DVLS }} en entrant son URL complète, puis cliquer sur ***Connexion***.
![URL de {{ fr.DVLS }}](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2081.png)
1. Choisir d'utiliser un verrouillage biométrique (Windows Hello, Touch ID, etc.) ou un mot de passe maître.
![Paramètres de sécurité](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2082.png)
    * ***Verrouillage biométrique*** : Votre appareil vous demandera de vous authentifier en utilisant cette méthode. Elle doit d'abord être configurée sur votre appareil pour fonctionner avec {{ fr.WS }}.
    * ***Mot de passe maître*** : {{ fr.WS }} vous demandera de créer un mot de passe d'au moins 8 caractères.
1. Cliquer sur ***Terminé*** pour finir la configuration initiale.

## Ajouter un espace supplémentaire

Suivre les étapes ci-dessous pour ajouter un {{ fr.DVLS }} supplémentaire dans {{ fr.WDAPP }}.

1. Sélectionner ***Espace supplémentaire***.
![Choisir votre méthode d'authentification](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp6108.png)
1. Choisir {{ fr.DVLS }}.
1. Cliquer sur ***Suivant***.
1. Entrer votre ***URL de {{ fr.DVLS }}***.
1. Choisir votre méthode d'authentification.
![Choisir votre méthode d'authentification](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp6107.png)
Votre compte {{ fr.DVLS }} est maintenant disponible dans {{ fr.WDAPP }}.
