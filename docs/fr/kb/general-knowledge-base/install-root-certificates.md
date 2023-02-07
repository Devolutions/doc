---
title: Installation des certificats racine
---
Voici différentes procédures pour installer les certificats racine : 
[Windows]( 
[Linux]( 
[Exceptions pour les navigateurs Web]( 
## Windows 
1. Ouvrir la Microsoft Management Console en recherchant ***MMC*** dans le menu ***Démarrer*** . Une autre méthode consiste à appuyer sur les touches Win+R de votre clavier et, dans la fenêtre ***Exécuter*** , à rechercher ***MMC*** . 
2. Sélectionner ***Fichier – Ajouter/Supprimer un composant logiciel enfichable*** . 
3. Dans la zone ***Composants logiciels enfichables disponibles*** , sélectionner ***Certificats*** . 
4. Cliquer sur le bouton ***Ajouter*** . 
5. Dans l&apos;assistant, sélectionner ***Un compte d&apos;ordinateur*** , puis cliquer sur ***Suivant*** . 
6. Sélectionner ***L&apos;ordinateur local*** , puis cliquer sur ***Terminer*** pour fermer l&apos;assistant. 
7. Cliquer sur ***OK*** pour sauvegarder vos changements. Cette action fermera également la boîte de dialogue ***Ajouter ou supprimer des composants logiciels enfichables*** . 
8. Dans la console, sélectionner ***Certificats (ordinateur local)*** . 
9. Dans la zone ***Nom de magasin logique*** , faire un clic droit sur ***Autorités de certification racines de confiance*** et sélectionner ***Toutes les tâches – Importer*** . 
10. Suivre les instruction de l&apos; ***Assistant Importation du certificat*** et fournir le fichier de certificat dont vous disposez. 
## Linux (ubuntu, debian) 
1. sudo mkdir /usr/local/share/ca-certificates/extra 
2. sudo cp ca.crt /usr/local/share/ca-certificates/extra/ca.crt 
3. sudo update-ca-certificates 
Regardez si un ***1 added*** apparaît dans les messages de sortie. 
## Exceptions pour les navigateurs Web 
### windows 
Firefox ne fait pas confiance aux mêmes certificats que Windows et un paramètre doit être appliqué afin de l&apos;activer. 
Veuillez consulter la [base de connaissances de Mozilla](https://support.mozilla.org/en-US/kb/setting-certificate-authorities-firefox) (EN). 
### linux 
Firefox et Chrome utilisent leurs propres magasins de confiance de certificats. 
Veuillez consulter la même [base de connaissances de Mozilla](https://support.mozilla.org/en-US/kb/setting-certificate-authorities-firefox) (EN). 

