---
eleventyComputed:
  title: "{{ fr.DGW }} configuration avec {{ fr.DVLS }}"
  order: 30
  description: Ce sujet décrit comment configurer {{ fr.DVLS }}, gratuit ou non, pour se connecter avec {{ fr.DGW }}.
  keywords:
  - VPN
  - Listener
---
Ce sujet décrit comment configurer {{ fr.DVLS }} pour se connecter avec {{ fr.DGW }}. Il existe deux manières d'installer un {{ fr.DGW }} : l'[***Installation côte à côte***](#side-by-side-installation) et l'[***Installation autonome***](#standalone-installation).
{% snippet, "badgeInfo" %}
Plusieurs passerelles peuvent être utilisées par {{ fr.DVLS }}, mais un seul {{ fr.DGW }} peut être installé sur une machine.
{% endsnippet %}

{% snippet, "badgeCaution" %}
Si vos clients échouent à se connecter avec {{ fr.DGW }}, assurez-vous que le certificat contient toute la chaîne. Cette chaîne de certificats inclut tous les certificats intermédiaires. Par exemple :
Autorité de Certification Racine – Autorité de Certification Sécurisée – Certificat XYZ Acheté
{% endsnippet %}

## Différences entre l'installation côte à côte et l'installation autonome
L'***Installation côte à côte*** sera utilisée si vous avez besoin d'installer {{ fr.DGW }} sur la même machine où {{ fr.DVLS }} est hébergé. C'est un processus d'installation simplifié qui configurera automatiquement le nouveau {{ fr.DGW }} avec des informations de l'instance {{ fr.DVLS }} (URI d'accès et clé publique).

Pour installer {{ fr.DGW }} sur une autre machine que celle où {{ fr.DVLS }} est hébergé, vous devez suivre le processus d'***Installation autonome***. La procédure est similaire, mais vous devrez fournir plus d'informations sur votre instance {{ fr.DVLS }} pour la compléter.

## Installation côte à côte
Cette méthode prend en charge plus de sessions s'il y a des licences {{ fr.DGW }} disponibles. Ce processus d'installation est le plus facile des deux et est la méthode recommandée pour des configurations réseau plus simples.
1. Depuis la {{ fr.DVLSCONSOLE }}, cliquer sur l'onglet ***Companions***.
![Onglet Companions](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2083.png)
1. Dans la section {{ fr.DGW }}, cliquer sur ***Installer***.
1. Choisir ***Installation côte à côte***.
![Côte à côte](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp0004.png)
   {% snippet, "badgeHelp" %}
   Il est possible de télécharger un fichier [.msi](https://devolutions.net/gateway/download) pour installer {{ fr.DGW }} sur un {{ fr.DVLS }} hors ligne.
   {% endsnippet %}

1. Si les valeurs par défaut ne conviennent pas à votre environnement, entrer les paramètres souhaités.
    1. ***HTTP Listener*** : Port HTTP(s) pour atteindre la Passerelle. (7171 est la valeur par défaut)
{type="a"}
    1. ***TCP Listener*** : port utilisé pour les sessions RDP. (8181 est la valeur par défaut)
1. Cliquer sur ***OK***.
![Bouton OK](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp0005.png)
1. Aller à l'interface web de {{ fr.DVLS }}, se connecter avec un compte administrateur.
1. Aller à ***Administration – {{ fr.DGW }}***.
![{{ fr.DGW }}](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp0006.png)
1. Cliquer sur le bouton ***Ping*** pour la passerelle désirée dans la liste pour voir si une connexion peut être établie avec succès. Si la page était déjà ouverte, la rafraîchir d'abord.
![Ping](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp0007.png)

## Installation autonome
La méthode ***Autonome*** permet d'installer {{ fr.DGW }} sur un serveur séparé de {{ fr.DVLS }}. Cela peut être pour des raisons de performance ou pour accéder à des réseaux auxquels {{ fr.DVLS }} ne peut pas accéder.
{% snippet, "badgeInfo" %}
La {{ fr.DVLSCONSOLE }} doit être installée sur le serveur sur lequel {{ fr.DGW }} sera installé.
{% endsnippet %}

1. Depuis la {{ fr.DVLSCONSOLE }}, cliquer sur l'onglet ***Companions***.
![Onglet Companions](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp0018.png)
1. Dans la section {{ fr.DGW }}, cliquer sur ***Installer***.
1. Choisir ***Installation autonome***.
![Autonome](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp0008.png)
1. Choisir entre ***Télécharger la version*** & ***Installer à partir du fichier msi***.
   {% snippet, "badgeHelp" %}
   Il est possible de télécharger un fichier [.msi](https://devolutions.net/gateway/download) pour installer {{ fr.DGW }} sur un {{ fr.DVLS }} hors ligne.
   {% endsnippet %}

1. Cliquer sur ***Suivant***.
![Version à télécharger ou fichier msi](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp0009.png)
1. Entrer les informations ***URI d'accès***, par exemple https://gateway.example.com.
![Listeners](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp0023.png)
1. Choisir les ports ***Listeners*** de {{ fr.DGW }} (par défaut, ils sont 7171 et 8181).
    1. Si HTTPS est choisi au lieu de HTTP à l'étape précédente, la ***Configuration du certificat*** sera nécessaire.
{type="a"}
    1. ***Fichier de certificat*** : Doit être un certificat à chaîne complète (.pfx, .p12, .pem, .crt).
    1. ***Mot de passe du certificat*** : Nécessaire uniquement si un certificat .pfx ou .p12 a été utilisé.
    1. ***Fichier de clé privée*** : Nécessaire uniquement si un .pem ou .crt a été utilisé comme certificat.
   {% snippet, "shieldWarning" %}
   Ne partagez pas la clé privée avec d'autres utilisateurs, car elle peut être utilisée pour déchiffrer la communication entre un utilisateur et {{ fr.DGW }}. Seule la clé publique doit être partagée.
   {% endsnippet %}

1. Cliquer sur ***Suivant***.
1. Choisir entre :
    * ***Utiliser la clé publique de l'instance {{ fr.DVLS }} '{{ fr.DVLS }}'*** : cette option est utilisée si le {{ fr.DGW }} installé est sur le même serveur que le {{ fr.DVLS }};
    * ***Depuis le fichier*** : Si vous installez {{ fr.DGW }} sur un autre ordinateur, télécharger la clé publique depuis le {{ fr.DVLS }} que vous souhaitez associer à ce {{ fr.DGW }}. Elle se trouve sous ***Administration – {{ fr.DGW }}***.
![Télécharger la clé publique](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp0016.png)
1. Cliquer sur ***Suivant***.
![Configuration de la paire de clés](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp0011.png)
1. Cliquer sur ***Installer***.
![Résumé](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp0012.png)
1. Cliquer sur ***Fermer***.
![Résumé de l'installation](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp0013.png)
1. Sur l'interface web de {{ fr.DVLS }}, se connecter avec un compte administrateur.
1. Aller à ***Administration – {{ fr.DGW }}***.
![{{ fr.DGW }}](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp0006.png)
1. Cliquer sur le bouton ***Ajouter*** dans le coin supérieur droit.
![Bouton Ajouter](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp0014.png)
1. Entrer les informations suivantes.
    1. ***Nom*** : Nom de la passerelle qui sera affiché dans {{ fr.RDM }}.
{type="a"}
    1. ***Description*** : Description de la passerelle.
    1. ***Définir par défaut*** : Si activé, cette passerelle sera sélectionnée par défaut lors de la configuration de {{ fr.RDM }}.
    1. ***URL {{ fr.DGW }}*** : L'URL et le port de {{ fr.DGW }} auxquels {{ fr.DVLS }} se connectera, par exemple : **https://gateway.example.com:7171**.
    1. ***Port d'écoute TCP*** : Définir le port avec la même valeur de port TCP configurée dans la {{ fr.DVLSCONSOLE }}.
1. Cliquer sur ***Enregistrer***.
![Informations sur {{ fr.DGW }}](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp0015.png)

La passerelle devrait maintenant être visible dans la liste. Il est possible de vérifier le statut de la passerelle avec le bouton ***Ping***.
![Ping](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp0007.png)
