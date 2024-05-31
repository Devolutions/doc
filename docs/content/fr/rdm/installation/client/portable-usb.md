---
eleventyComputed:
  title: Portable (USB)
  status: Sujet disponible en langue allemande
  description: "{{ fr.RDM }} peut être utilisé comme une application portable. Voici les étapes nécessaires pour s'assurer qu'il fonctionne correctement."
---
{{ fr.RDM }} peut être utilisé comme une application portable. Le mode portable vous permet d'exécuter plusieurs versions de {{ fr.RDM }}, en utilisant divers numéros de série de licence et configurations. Pour utiliser une seule application portable {{ fr.RDM }}, suivre [Version portable de {{ fr.RDM }}](/rdm/kb/rdm-windows/how-to-articles/portable-rdm-installation/).

{{ fr.RDM }} stocke le cache hors ligne dans votre profil Windows par défaut. Si vous utilisez une source de données avancée et prévoyez d'utiliser le mode hors ligne, aller à ***Fichier – Paramètres – Avancé*** et activer ***Utiliser le répertoire de l'application pour le cache hors ligne*** pour avoir le cache hors ligne stocké dans le dossier de l'application.

{% snippet, "badgeWarning" %}
Cette procédure n'est pas recommandée pour exécuter {{ fr.RDM }} à partir d'un partage réseau partagé par plusieurs utilisateurs. Cela empêcherait d'identifier les utilisateurs individuellement et il y aurait des conflits avec les préférences des utilisateurs.
{% endsnippet %}

Les étapes suivantes assurent une véritable portabilité et facilitent la maintenance. Elles peuvent facilement être adaptées à vos préférences.

1. Télécharger le paquet ***ZIP*** de {{ fr.RDM }} Team.
![Paquet ZIP de {{ fr.RDM }} Team](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11586.png)
1. Créer un dossier RemoteDesktopManager sur votre appareil portable.
1. Dans le dossier créé à l'étape 2, créer ces dossiers :
    1. Un dossier de configuration. {type="a"}
    1. Un dossier de données. {type="a"}
    1. Un dossier d'outils (facultatif, seulement si vous prévoyez d'utiliser des outils externes comme Filezilla). {type="a"}
1. Décompresser {{ fr.RDM }} dans le dossier.
1. Créer un fichier texte nommé **override.cfg** dans le dossier. Définir le contenu du fichier à **.\config**.
1. Ouvrir {{ fr.RDM }} et afficher la fenêtre des sources de données en utilisant ***Fichier – Sources de données***.
1. Créer une nouvelle source de données d'un type qui peut être stocké sur votre appareil portable (SQLite, XML, etc.).
1. Configurer la source de données en utilisant un chemin relatif pour qu'elle soit stockée sur l'appareil portable : **.\Data\Connections.db**.
![Configurer la source de données](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11276.png)
1. Configurer vos applications portables (FileZilla, UltraVNC, etc.) de la même manière (relatif au dossier). Cliquer sur ***Configurer le chemin d'installation*** pour sélectionner votre application portable préférée.
![Configurer le chemin d'installation](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10449.png)
![Chemin d'installation](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11277.png)
1. Vous pouvez maintenant supprimer la ***source de données locale*** qui avait été créée automatiquement.