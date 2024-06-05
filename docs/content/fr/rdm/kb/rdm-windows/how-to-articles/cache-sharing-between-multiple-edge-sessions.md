---
eleventyComputed:
  title: Partage de cache entre plusieurs sessions Edge
  description: Le partage d'un cache entre plusieurs sessions de site Web avec Edge comme navigateur Web dans {{ fr.RDM }} est affecté par cinq paramètres différents.
---
Le cache Edge est contrôlé par quelques paramètres. C'est une limitation du contrôle EdgeView2, qui nécessite un dossier unique plutôt que des paramètres définis. Essayer de partager des caches avec des paramètres conflictuels empêchera le contrôle EdgeView2 de se charger, conduisant ainsi à un écran vide.

Voici les paramètres qui affectent le partage d'un cache entre plusieurs sessions de site Web utilisant Microsoft Edge :

## Dans les paramètres de {{ fr.RDM }}

1. Partager le code de langue (dans l'entrée ***Propriétés*** – ***Commun*** – ***Général*** – ***Avancé***).
![Code de langue](https://cdnweb.devolutions.net/docs/RDMW4034_2024_1.png)
1. Partager SmartScreen (dans l'entrée ***Propriétés*** – ***Commun*** – ***Général*** – ***Général***)
![Option SmartScreen](https://cdnweb.devolutions.net/docs/RDMW4035_2024_1.png)
1. Activer l'authentification unique avec les comptes Windows (***Fichier*** – ***Paramètres*** – ***Types*** – ***Sessions*** – ***Site Web*** – ***Microsoft Edge***).
![Activer l'authentification unique](https://cdnweb.devolutions.net/docs/RDMW4038_2024_1.png)

Ces paramètres doivent être ajoutés au chemin du dossier de cache de Microsoft Edge. Voici quelques exemples :

C:\Users\{user}\AppData\Local\Devolutions\RemoteDesktopManager\WebView2.Cache\de\EBWebView     
C:\Users\{user}\AppData\Local\Devolutions\RemoteDesktopManager\WebView2.Cache\SingleSignOn\EBWebView       
C:\Users\{user}\AppData\Local\Devolutions\RemoteDesktopManager\WebView2.Cache\de\DisableSmartScreen\SingleSignOn\EBWebView

## Profil

Un profil doit ensuite être spécifié en utilisant le contrôle Edgeview2, ce qui permet diverses configurations de correspondance de cache.
1. Mode privé : Ce mode possède son propre profil privé composé d'un nom de profil – s'il existe – et de l'ID de l'entrée.
1. Nom de profil : Ce profil permet le partage avec toutes les autres sessions qui correspondent aux trois paramètres précédemment définis dans {{ fr.RDM }} et au nom de profil.
1. Aucun nom de profil : Ce profil permet le partage avec toutes les autres sessions qui correspondent aux trois paramètres précédemment définis dans {{ fr.RDM }} sans nom de profil (il revient à un nom de dossier codé en dur).

## Effacer le cache au démarrage

Avec tout cela configuré, le paramètre ***Effacer le cache au démarrage*** peut être activé. Dès lors, le cache sera effacé lors du premier lancement d'une session, et les sessions suivantes n'auront pas leur cache effacé jusqu'à ce que toutes soient fermées et qu'une nouvelle soit lancée.
