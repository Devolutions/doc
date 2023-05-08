---
title: Portable (USB)
---
{{ fr.RDM }} peut être utilisé comme une application portable. Voici les étapes nécessaires pour garantir son bon fonctionnement: 

{% snippet icon.badgeInfo %} 
Le mode d&apos;installation portable vous permet d&apos;exécuter plusieurs versions de {{ fr.RDM }} , en utilisant diverses clés de licence et configurations. 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
Pour installer une seule application portable de {{ fr.RDM }} , suivre cette rubrique: [Installation de RDM portable](/kb/remote-desktop-manager/how-to-articles/portable-rdm-installation/) . 
{% endsnippet %}
 
{% snippet icon.badgeWarning %} 
Cette procédure n&apos;est pas recommandée pour exécuter {{ fr.RDM }} à partir d&apos;un réseau partagé par plusieurs utilisateurs. Cela empêcherait d&apos;identifier les utilisateurs individuels et il y aurait des conflits avec les préférences des utilisateurs. 
{% endsnippet %}
 
{% snippet icon.badgeNotice %} 
{{ fr.RDM }} stocke le cache hors ligne dans votre profil Windows par défaut. Si vous utilisez une source de données avancée et prévoyez d&apos;utiliser le mode hors ligne, aller dans ***Fichier – Options – Avancé*** et activer l&apos;option ***Utiliser le dossier d&apos;application pour la cache hors ligne*** pour que la mise en cache hors ligne soit stockée dans le dossier de l&apos;application. 
{% endsnippet %}
 
{% snippet icon.badgeNotice %} 
Les étapes suivantes garantissent une véritable portabilité et une facilité de maintenance. Il peut facilement être adapté à votre convenance. 
{% endsnippet %}
 

## Procédure 

1. Télécharger le paquet ***ZIP*** de {{ fr.RDM }} Team.  
![!!clip11586.png](/img/fr/rdm/windows/clip11586.png) 
1. Créer un dossier RemoteDesktopManager sur votre appareil portable. 
1. Dans le dossier d&apos;installation créé à l&apos;étape 2, créer deux dossiers: 
    1. Un dossier config . 
    1. Un dossier data . 
    1. Et un dossier tools (facultatif, uniquement si vous avez l&apos;intention d&apos;utiliser des outils externes comme Filezilla). 
1. Décompresser {{ fr.RDM }} dans le dossier d&apos;installation. 
1. Créer un fichier texte nommé ***override.cfg*** dans le dossier d&apos;installation. Définir le contenu du fichier a .\config 
1. Ouvrir {{ fr.RDM }} et afficher la fenêtre des sources de données à l&apos;aide de ***Fichier - Sources de données*** . 
1. Créer une nouvelle source de données d&apos;un type pouvant être stocké sur votre appareil portable. c&apos;est-à-dire SQLite, XML, etc. 
1. Configurer la source de données à l&apos;aide d&apos;un chemin d&apos;accès relatif afin qu&apos;elle soit stockée sur le périphérique portable: .\Data\Connections.db  
![!!clip11276.png](/img/fr/rdm/windows/clip11276.png) 
1. Configurer vos applications portables (FileZilla, UltraVNC, etc.) de la même manière (par rapport au dossier d&apos;installation). Cliquer sur ***Configurer le chemin d&apos;installation*** pour sélectionner votre application portable préférée.  
![!!clip10449.png](/img/fr/rdm/windows/clip10449.png) 
![!!clip11277.png](/img/fr/rdm/windows/clip11277.png) 
1. Vous pouvez maintenant supprimer la source de données locale préexistante qui avait été créée automatiquement. 

