---
eleventyComputed:
  title: Diagnostic du presse-papiers
  description: L'outil de diagnostic du presse-papiers permet de visualiser toutes les requêtes en temps réel et d'identifier quelle application est impliquée.
  status: Sujet disponible en langue allemande
---
Utiliser les fonctionnalités ***Copier le nom d'utilisateur*** et ***Copier le mot de passe*** dans {{ fr.RDM }} peut parfois ne pas fonctionner correctement à cause d'autres applications et processus qui volent les valeurs du presse-papiers. L'outil ***Diagnostic du presse-papiers*** aide à visualiser toutes les requêtes en temps réel et à identifier quelle application est impliquée.

## Étapes
1. Aller dans ***Aide – Diagnostic du presse-papiers*** pour ouvrir la boîte de dialogue de l'outil de diagnostic.
1. Sélectionner une de vos entrées d'identifiants et ***Copier le nom d'utilisateur et le mot de passe***.
1. Coller les informations dans le Bloc-notes.
1. Les cases ***Liste noire*** et ***Liste blanche*** devraient afficher toutes les applications impliquées.
   Dans la capture d'écran ci-dessous, "notepad++" l'historique du presse-papiers Windows (<kbd>Windows</kbd>+<kbd>V</kbd>) est bloqué par défaut. Dans votre cas, ***Bloc-notes*** devrait être en liste blanche, mais vous avez très probablement un autre processus soit en liste noire soit en liste blanche.
   ![!!KB8042](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8042.png)
1. Mettre en liste noire tout processus qui n'était pas le Bloc-notes pour visualiser le contenu du presse-papiers. Pour ce faire, cliquer avec le bouton droit sur le processus en liste blanche que vous souhaitez bloquer et sélectionner ***Ajouter***.
1. Entrer la ***Description*** (facultatif) et laisser le nom du processus tel quel.
   L'***Ajout*** crée une règle persistante pour toujours ignorer la demande du presse-papiers de ce processus.
   ![!!KB4949](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4949.png)
1. Dans l'onglet ***Configuration***, il y a une section appelée ***Délais***, cela est utile pour des applications comme Chrome qui demandent le contenu du presse-papiers plus d'une fois. Cela sert à définir un délai pendant lequel nous autoriserons Chrome, par exemple, à demander le contenu du presse-papiers. La même logique s'applique pour sélectionner quelles règles sont utilisées. Nous faisons correspondre sur le processus et si fourni la ligne de commande et appliquons le délai. Le défaut est de 100 ms, donc si pour une raison quelconque vous collez dans Chrome mais seul le mot de passe est collé, essayer d'augmenter le délai en commençant par 150 ms, ***Enregistrer*** puis essayer ***Copier le nom d'utilisateur & le mot de passe***.
1. Cela a-t-il fonctionné ? Si oui, vous avez terminé, sinon essayer 200 ms.
1. Si cela échoue toujours à 200 ms, régler le ***Nom du processus*** sur ***Commence par*** au lieu de ***Égale*** et augmenter le ***Délai*** à 500 ms.
![!!KB8044](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8044.png)

Il y a un bouton ***Envoyer*** en bas du formulaire qui enverra à notre équipe de support le ***Rapport de diagnostic du presse-papiers***. C'est essentiellement tout ce que vous voyez sur les deux onglets. À partir de là, nous pouvons vous conseiller sur la façon de configurer votre {{ fr.RDM }}.

## Applications suggérées pour la liste noire

* [PhoneExperienceHost (application Phone Link)](https://forum.devolutions.net/topics/39461/paste-once-and-teamviewer#186637)
* [StorageExplorer.exe (Explorateur de stockage Microsoft Azure)](https://github.com/microsoft/AzureStorageExplorer/releases)