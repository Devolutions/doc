---
  title: Installation des certificats racine
---
Voici différentes procédures pour installer les certificats racine : 

* <a href="#windows">Windows</a>
* <a href="#linux">Linux</a>
* <a href="#exception">Exceptions pour les navigateurs Web</a>

## Windows 
<a name="windows"></a>

{% snippet icon.badgeInfo %}
Firefox ne fait pas confiance aux mêmes certificats que Windows et un paramètre doit être appliqué afin de l'activer.  

Veuillez consulter la [base de connaissances de Mozilla](https://support.mozilla.org/en-US/kb/setting-certificate-authorities-firefox) (EN). 
{% endsnippet %}  

1. Ouvrir la Microsoft Management Console en recherchant ***MMC*** dans le menu ***Démarrer***. Une autre méthode consiste à appuyer sur les touches <kbd>Windows</kbd>+<kbd>R</kbd> de votre clavier et, dans la fenêtre ***Exécuter***, à rechercher ***MMC***. 
1. Sélectionner ***Fichier – Ajouter/Supprimer un composant logiciel enfichable***. 
1. Dans la zone ***Composants logiciels enfichables disponibles***, sélectionner ***Certificats***. 
1. Cliquer sur le bouton ***Ajouter***. 
1. Dans l'assistant, sélectionner ***Un compte d'ordinateur***, puis cliquer sur ***Suivant***. 
1. Sélectionner ***L'ordinateur local***, puis cliquer sur ***Terminer*** pour fermer l'assistant. 
1. Cliquer sur ***OK*** pour sauvegarder vos changements. Cette action fermera également la boîte de dialogue ***Ajouter ou supprimer des composants logiciels enfichables***. 
1. Dans la console, sélectionner ***Certificats (ordinateur local)***. 
1. Dans la zone ***Nom de magasin logique***, faire un clic droit sur ***Autorités de certification racines de confiance*** et sélectionner ***Toutes les tâches – Importer***. 
1. Suivre les instruction de l'***Assistant Importation du certificat*** et fournir le fichier de certificat dont vous disposez. 

## Linux (Ubuntu, Debian) 
<a name="linux"></a>

{% snippet icon.badgeInfo %}
Firefox et Chrome utilisent leurs propres magasins de confiance de certificats.  

Veuillez consulter la même [base de connaissances de Mozilla](https://support.mozilla.org/en-US/kb/setting-certificate-authorities-firefox) (EN). 
{% endsnippet %}  

1. sudo mkdir /usr/local/share/ca-certificates/extra 
1. sudo cp ca.crt /usr/local/share/ca-certificates/extra/ca.crt 
1. sudo update-ca-certificates  

Regardez si un ***1 added*** apparaît dans les messages de sortie. 
