---
eleventyComputed:
  title: "{{ fr.WMAPP }} installation avec {{ fr.DVLS }}"
  description: Avant d'utiliser votre application, vous devrez compléter une configuration rapide qui implique de sélectionner vos produits Devolutions, de vous connecter à votre {{ fr.DVLS }}, et de configurer certains paramètres de sécurité.
---
Avant d'utiliser votre application, vous devrez compléter une configuration rapide qui implique de sélectionner vos produits Devolutions, de vous connecter à votre {{ fr.DVLS }}, et de configurer certains paramètres de sécurité.

## Configuration de {{ fr.WMAPP }}

Suivre les étapes ci-dessous pour effectuer la configuration initiale de votre {{ fr.WMAPP }} avec {{ fr.DVLS }} :

1. [Télécharger et installer le {{ fr.WMAPP }}](https://devolutions.net/workspace/) si ce n'est pas déjà fait.
1. Après l'installation, dans la fenêtre ***Configuration de {{ fr.WS }}***, cocher ***{{ fr.DVLS }}***, puis appuyer sur ***Commencer la Configuration***.
![Configuration de {{ fr.DVLS }}](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2076.png)

{% snippet, "badgeInfo" %}
Pendant la configuration, vous pouvez toujours appuyer sur ***Passer Cette Étape*** pour configurer ce paramètre spécifique plus tard.
{% endsnippet %}

3. Se connecter à votre {{ fr.DVLS }} en entrant son URL complète, puis appuyer sur ***Connexion***.
![URL de {{ fr.DVLS }}](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2077.png)
1. Choisir votre méthode d'authentification, puis se connecter en utilisant vos identifiants correspondants.
![Authentification](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2078.png)
1. Facultativement, activer l'utilisation d'un ***Verrouillage Biométrique*** (Touch/Face ID). C'est une pratique recommandée. Votre appareil vous demandera de vous authentifier en utilisant cette méthode. Elle doit d'abord être configurée sur votre appareil pour fonctionner avec {{ fr.WS }}.
![Paramètres de sécurité](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2079.png)
1. Appuyer sur ***Terminé*** pour finir la configuration initiale.

## Ajouter un espace supplémentaire

Suivre les étapes ci-dessous pour ajouter un {{ fr.DVLS }} supplémentaire dans {{ fr.WMAPP }}.

1. Sélectionner ***Espace Supplémentaire***.
1. Choisir {{ fr.DVLS }}.
1. Scanner un ***code QR*** ou entrer une ***URL***.
1. Choisir votre méthode d'authentification.
![Choisir votre méthode d'authentification](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp6107.png)
Votre compte {{ fr.DVLS }} est maintenant disponible dans le {{ fr.WMAPP }}.
