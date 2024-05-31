---
eleventyComputed:
  title: Passer de {{ fr.RDM }} Gratuit à {{ fr.RDM }} Équipe
---
{% snippet, "badgeInfo" %}
Depuis la version 2022.3 de {{ fr.RDM }}, l'Édition Gratuite et l'Édition Équipe (précédemment Édition Entreprise) ont été fusionnées en [un seul téléchargement](https://devolutions.net/remote-desktop-manager), permettant aux utilisateurs de mettre à niveau plus facilement. Pour en savoir plus sur ce changement, vous pouvez lire notre article de blog [{{ fr.RDM }} Gratuit et Entreprise sont maintenant unifiés](https://blog.devolutions.net/2022/10/news-remote-desktop-manager-is-changing-for-the-better/).

Si vous utilisez {{ fr.RDM }} version 2022.3 ou ultérieure, consultez [Édition Équipe](/rdm/windows/installation/client/registration/team-edition/) pour apprendre à enregistrer une licence Équipe. Sinon, continuez ci-dessous.
{% endsnippet %}

{% snippet, "badgeInfo" %}
Les sources de données basées sur des fichiers (XML, SQLite, etc.) sont par défaut stockées dans le dossier de configuration. Par précaution, passer en revue chaque source de données dans ***Fichier – Sources de données*** et regarder le chemin local (le cas échéant). Tout fichier qui se trouve dans le dossier de configuration doit être copié manuellement.
{% endsnippet %}

{% snippet, "badgeInfo" %}
Les chemins mentionnés ici sont pour ceux qui ont installé en utilisant les paramètres par défaut. La meilleure façon de localiser votre dossier de configuration est d'aller à ***Fichier – Paramètres – Avancé***. Vous trouverez un hyperlien près du bas sous la section ***Information*** qui ouvre votre dossier de configuration.
{% endsnippet %}

{% snippet, "badgeCaution" %}
Veuillez vous assurer de fermer l'application avant de continuer.
{% endsnippet %}

1. Télécharger {{ fr.RDM }} Édition Équipe depuis notre [site web](https://devolutions.net/remote-desktop-manager/home/download).
1. Installer {{ fr.RDM }} Édition Équipe.
1. Lancer l'application une fois pour que son propre dossier de configuration soit initialisé, puis la fermer.
1. Ouvrir une fenêtre de l'explorateur vers **%localappdata%\Devolutions\RemoteDesktopManagerFree**.
1. Ouvrir une seconde fenêtre de l'explorateur vers **%localappdata%\Devolutions\RemoteDesktopManager**.
1. Depuis la fenêtre de l'explorateur de l'Édition Gratuite, copier les fichiers suivants vers le dossier **RemoteDesktopManager** :  

* **RemoteDesktopManagerFree.cfg**  
* **RemoteDesktopManagerFree.stv**  
* **RemoteDesktopManagerFree.enc**  
* **RemoteDesktopManagerFree.ext**  
* **Connections.db. (nom par défaut de la source de données locale)**  
* Tout autre fichier de source de données identifié dans la liste des sources de données  

7. Renommer les fichiers copiés pour supprimer le suffixe "Free" :  

* **RemoteDesktopManagerFree.cfg** en **RemoteDesktopManager.cfg**  
* **RemoteDesktopManagerFree.stv** en **RemoteDesktopManager.stv**  
* **RemoteDesktopManagerFree.enc** en **RemoteDesktopManager.enc**  
* **RemoteDesktopManagerFree.ext** en **RemoteDesktopManager.ext**  

8. Exécuter l'Édition Équipe et s'assurer que toutes vos sources de données sont disponibles.
1. Désinstaller l'Édition Gratuite seulement lorsque vous êtes sûr que tout fonctionne comme prévu.  
{% snippet, "badgeInfo" %}
Si vous souhaitez rétrograder de l'Édition Équipe à l'Édition Gratuite, faire l'inverse aux étapes 3, 4 et 5.
{% endsnippet %}
