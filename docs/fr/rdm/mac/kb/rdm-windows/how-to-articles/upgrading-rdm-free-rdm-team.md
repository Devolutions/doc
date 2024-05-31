---
eleventyComputed:
  title: Passer de {{ fr.RDM }} Free à {{ fr.RDM }} team
---
{% snippet, "badgeInfo" %}
Depuis la version 2022.3 de {{ fr.RDM }}, l'Édition Gratuite et l'Édition Team (précédemment Édition Entreprise) ont été fusionnées en [un seul téléchargement](https://devolutions.net/remote-desktop-manager), permettant aux utilisateurs de mettre à niveau plus facilement. Pour en savoir plus sur ce changement, vous pouvez lire notre article de blog [{{ fr.RDM }} Free et Enterprise sont maintenant unifiés](https://blog.devolutions.net/2022/10/news-remote-desktop-manager-is-changing-for-the-better/).

Si vous utilisez {{ fr.RDM }} version 2022.3 ou ultérieure, consultez [Édition Team](/rdm/windows/installation/client/registration/team-edition/) pour apprendre comment enregistrer une licence Team. Sinon, continuez ci-dessous.
{% endsnippet %}

{% snippet, "badgeInfo" %}
Les sources de données basées sur des fichiers (XML, SQLite, etc.) sont par défaut stockées dans le dossier de configuration. Par précaution, passer en revue chaque source de données dans ***Fichier – Sources de données*** et regarder le chemin local (le cas échéant). Tout fichier qui se trouve dans le dossier de configuration doit être copié manuellement.
{% endsnippet %}

{% snippet, "badgeInfo" %}
Les chemins mentionnés ici sont pour ceux qui ont installé en utilisant les paramètres par défaut. La meilleure façon de localiser votre dossier de configuration est d'aller dans ***Fichier – Paramètres – Avancé***. Vous trouverez un hyperlien près du bas sous la section ***Information*** qui ouvre votre dossier de configuration.
{% endsnippet %}

{% snippet, "badgeCaution" %}
Veuillez vous assurer de fermer l'application avant de continuer.
{% endsnippet %}

- Télécharger {{ fr.RDM }} Édition Team depuis notre [site web](https://devolutions.net/remote-desktop-manager/home/download).
- Installer {{ fr.RDM }} Édition Team.
- Lancer l'application une fois pour que son propre dossier de configuration soit initialisé, puis la fermer.
- Ouvrir une fenêtre de l'explorateur vers **%localappdata%\Devolutions\RemoteDesktopManagerFree**.
- Ouvrir une seconde fenêtre de l'explorateur vers **%localappdata%\Devolutions\RemoteDesktopManager**.
- Depuis la fenêtre de l'explorateur de l'Édition Gratuite, copier les fichiers suivants vers le dossier **RemoteDesktopManager** :  

* **RemoteDesktopManagerFree.cfg**  
* **RemoteDesktopManagerFree.stv**  
* **RemoteDesktopManagerFree.enc**  
* **RemoteDesktopManagerFree.ext**  
* **Connections.db. (nom par défaut de la source de données locale)**  
* Tout autre fichier de source de données identifié dans la liste des sources de données  

- Renommer les fichiers copiés pour supprimer le suffixe "Free" :  

* **RemoteDesktopManagerFree.cfg** en **RemoteDesktopManager.cfg**  
* **RemoteDesktopManagerFree.stv** en **RemoteDesktopManager.stv**  
* **RemoteDesktopManagerFree.enc** en **RemoteDesktopManager.enc**  
* **RemoteDesktopManagerFree.ext** en **RemoteDesktopManager.ext**  

- Exécuter l'Édition Team et s'assurer que toutes vos sources de données sont disponibles.
- Désinstaller l'Édition Gratuite seulement lorsque vous êtes sûr que tout fonctionne comme prévu.  
{% snippet, "badgeInfo" %}
Si vous souhaitez rétrograder de l'Édition Team à l'Édition Gratuite, faire l'inverse aux étapes 3, 4 et 5.
{% endsnippet %}
