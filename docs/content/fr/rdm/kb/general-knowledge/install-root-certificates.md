---
eleventyComputed:
  title: Installer des certificats racine
---
Voici diverses procédures pour installer des certificats racine :

* [Windows](#windows)
* [Linux](#linux-(ubuntu%2C-debian))
* [Exceptions pour les navigateurs web](#exceptions-pour-les-navigateurs-web)

## Windows

{% snippet, "badgeInfo" %}
Firefox ne fait pas confiance aux mêmes certificats que Windows et un paramètre doit être appliqué pour activer cela.

Veuillez consulter [l'article de la base de connaissances de Mozilla](https://support.mozilla.org/en-US/kb/setting-certificate-authorities-firefox).
{% endsnippet %}  

1. Ouvrir la Console de gestion Microsoft en recherchant ***MMC*** dans le menu ***Démarrer***. Une autre manière est de presser les touches <kbd>Windows</kbd>+<kbd>R</kbd> sur votre clavier et, dans la fenêtre ***Exécuter***, rechercher ***MMC***.
1. Sélectionner ***Fichier – Ajouter/Supprimer un composant logiciel enfichable***.
1. Dans la boîte ***Composants logiciels enfichables disponibles***, sélectionner ***Certificats***.
1. Cliquer sur le bouton ***Ajouter***.
1. Dans l'assistant, sélectionner ***Compte d'ordinateur***, puis cliquer sur ***Suivant***.
1. Sélectionner ***Ordinateur local***, puis cliquer sur ***Terminer*** pour finir l'assistant.
1. Cliquer sur ***OK*** pour sauvegarder vos changements. Cette action fermera également la boîte de dialogue ***Ajouter ou supprimer des composants logiciels enfichables***.
1. Dans la console, sélectionner ***Certificats (Ordinateur local)***.
1. Dans la boîte ***Nom du magasin logique***, faire un clic droit sur ***Autorités de certification racines de confiance*** et sélectionner ***Toutes les tâches – Importer***.
1. Suivre les instructions de l'***Assistant Importation de certificat*** et fournir le fichier de certificat que vous avez.

## Linux (ubuntu, debian)

{% snippet, "badgeInfo" %}
Firefox ne fait pas confiance aux mêmes certificats que Windows et un paramètre doit être appliqué pour activer cela.

Veuillez consulter [l'article de la base de connaissances de Mozilla](https://support.mozilla.org/en-US/kb/setting-certificate-authorities-firefox).
{% endsnippet %}  

1. sudo mkdir /usr/local/share/ca-certificates/extra
1. sudo cp ca.crt /usr/local/share/ca-certificates/extra/ca.crt
1. sudo update-ca-certificates

Surveiller un 1 ajouté dans les messages de sortie.  
