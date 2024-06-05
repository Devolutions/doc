---
eleventyComputed:
  title: Navigateur Web Internet Explorer
---
## Problème 1
Une erreur s'est produite dans le script de cette page.
### Solution
Lancer un ***Site Web*** dans Internet Explorer directement (mode externe), les erreurs de script sont gérées par le navigateur, donc elles ne sont pas affichées.

En mode intégré, activer l'option ***Masquer les erreurs de script*** dans les propriétés de votre session.
![!!KB4103](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4103.png)
## Problème 2
L'extension de navigateur n'apparaît pas dans la barre d'outils mais elle est installée.
### Solution
Ce problème survient lorsqu'une option spécifique n'est pas cochée pour IE dans ***Outils – Options Internet – Avancé***.

L'option s'appelle ***Activer les extensions tierces du navigateur***. Après avoir activé cette option, IE doit être redémarré.
![!!KB4104](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4104.png)
## Problème 3
Le contenu html intégré n'est pas rendu avec la dernière version d'Internet Explorer.
### Solution
Par défaut {{ fr.RDM }} n'utilise pas la dernière version d'IE (mode d'émulation). Cela peut être modifié dans ***Fichier – Paramètres – Type – Web, Mode IE***.
## Problème 4
Accessviolationexception - tentative de lecture ou d'écriture dans une mémoire protégée.
### Solution
Lorsqu'un crash se produit dans {{ fr.RDM }} lors de l'utilisation de certains ActiveX dans IE, cela est souvent causé par la Prévention de l'exécution des données (DEP). DEP est une fonctionnalité de sécurité incluse dans Windows. Elle est utilisée pour empêcher une application ou un service d'exécuter du code à partir d'une région de mémoire non exécutable.

Pour corriger cela, modifier les paramètres DEP pour l'application comme suit :

1. Cliquer avec le bouton droit sur ***Mon Ordinateur – Propriétés***.
1. Choisir ***Paramètres système avancés***.
1. Cliquer sur l'onglet ***Avancé***.
1. Cliquer sur ***Paramètres*** sous ***Performance***.
1. Sélectionner l'onglet ***Prévention de l'exécution des données***.
1. Ajouter ***RDM*** à la liste.
## Problème 5
Les fenêtres externes lancées (telles que ie) apparaissent en arrière-plan.
### Solution
Il est possible que lors du lancement d'éléments tels que les fenêtres IE depuis {{ fr.RDM }}, elles apparaissent en arrière-plan.

La valeur de registre ForegroundLockTimeout pour le profil de l'utilisateur doit être modifiée de la valeur par défaut de 200000 à 0 :

[HKEY_CURRENT_USER\Control Panel\Desktop]

"ForegroundLockTimeout"=dword:00000000

Veuillez noter que certains programmes qui ont une vaste bibliothèque d'add-ons (comme MS Word) peuvent prendre le focus chaque fois que l'add-on effectue une action. Il faut observer la réaction de vos programmes les plus utilisés et juger quelle est la configuration qui fonctionne le mieux pour vous.
## Problème 6
Impossible de copier depuis ***Aperçu***.
### Solution
Activer l'option : ***Utiliser Microsoft Edge intégré pour le panneau d'aperçu*** dans ***Fichier – Paramètres – Avancé – Microsoft Edge***.

Activer l'option : ***Activer le menu contextuel dans Aperçu*** dans ***Fichier – Paramètres – Interface utilisateur – Tableau de bord***.

Ouvrir la boîte de dialogue ***Propriétés Internet***. Aller à ***Sécurité – Niveau personnalisé***, faire défiler jusqu'à ***Autoriser l'accès programmatique au presse-papiers*** et sélectionner ***Activer***.
