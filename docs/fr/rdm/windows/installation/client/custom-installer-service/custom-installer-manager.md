---
title: Gestionnaire d'installateur personnalisé
---
{% snippet icon.badgeNotice %} 
Pour des raisons de stabilité, dans les grandes bases d'installation, la dernière version officielle n'est pas disponible pour le service d'installateur personnalisé pendant une période indéterminée, le temps que nous nous assurions qu'aucun problème majeur n'est présent. Nous vous recommandons d'utiliser cette période avec votre organisation pour effectuer des tests d'intégration sur quelques postes de travail avant de mettre à niveau l'ensemble de votre équipe. 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
Veuillez vous assurer d'avoir lu et compris le contenu du [Service d'installateur personnalisé](/fr/rdm/windows/installation/client/custom-installer-service/) avant de vous abonner au service. 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
Vous pouvez stocker et créer jusqu'à six paquets de fichiers de configuration d' ***Installateur personnalisé*** dans votre {{ fr.DA }} . 
{% endsnippet %}
 
## Créer un paquet d'installation 

1. Dans {{ fr.RDM }} , cliquer sur ***Fichier –*** ***{{ fr.DA }}*** ***– Connectez-vous*** &#32; pour vous connecter à votre {{ fr.DA }} .  
![Connextion au Compte Devolutions](/img/fr/rdm/windows/RdmWin4015.png) 
1. Sous ***Outils*** , cliquer sur ***Gestionnaire de paquets d'installation personnalisés*** pour créer un nouvel installateur personnalisé avec des paramètres spécifiques.  
![Fichier – Compte Devolutions – Gestionnaire de paquets d'installation personnalisés](/img/fr/rdm/windows/clip11247.png) 
1. Cliquer sur ***Nouveau kit*** .  
![Gestionnaire de paquets d'installation personnalisés – Nouveau kit](/img/fr/rdm/windows/clip11251.png) 
1. Sélectionner la ***Version*** de l'application dans la liste déroulante. Un ***Nom*** sera automatiquement généré pour votre paquet. Il peut être modifié. Il est aussi possible d'ajouter une courte ***Description*** de votre paquet, mais cela reste optionnel.  
![Création d'un paquet d'installation](/img/fr/rdm/windows/clip11252.png) 
1. S'il n'y a pas de fichier d'installateur {{ fr.RDM }} (.rdi), laisser l'option ***Créer une configuration juste pour ce kit*** activée. Si un fichier a déjà été créé, activer plutôt l'option ***Utiliser un fichier « Remote Desktop Installer » (rdi) existant*** et sélectionner le fichier sur votre ordinateur en utilisant le bouton des points de suspension. 
1. Cliquer sur ***Créer*** . Aller directement à l'étape 9 si l'option ***Utiliser un fichier « Remote Desktop Installer » (rdi) existant*** a été choisie à l'étape précédente. 
1. La fenêtre ***Gestionnaire de package d'installation*** s'affichera pour créer un nouveau fichier de configuration. Voir notre guide de [Sélection des options](/fr/rdm/windows/installation/client/custom-installer-service/installer-file-generator/option-selection/) pour plus d'informations sur les différentes options disponibles.  
![Générateur de fichier d'installateur](/img/fr/rdm/windows/clip11253.png) 
1. Lorsque la sélection est terminée, cliquer sur ***Générer*** pour créer le fichier. 
1. Une fois le paquet d'installation créé, la demande est soumise à notre service en ligne. Une fenêtre de dialogue de confirmation apparaît en cas de succès.  
![Nouveau package créé avec succès](/img/fr/rdm/windows/clip10477.png) 
1. Le ***Gestionnaire d'installateur personnalisé*** affiche une icône de sablier indiquant que le paquet est en cours de traitement. Une fois le paquet généré avec succès, le ***Gestionnaire d'installateur personnalisé*** affiche une coche verte. Il est à noter que ce processus peut prendre un certain temps. 

## Télécharger un paquet d'installation 

Une fois terminé, vous recevrez un courriel de confirmation :  
![Courriel de confirmation – Demande traitée](/img/fr/rdm/windows/clip11254.png) 

À partir d'ici, il existe deux façons de télécharger le paquet :vous pouvez le télécharger directement depuis le ***Gestionnaire d'installateur personnalisé*** ou vous connecter au {{ fr.DA }} avec lequel vous avez créé l'installateur. 

### Télécharger avec le Gestionnaire de paquets d'installation personnalisés 

Dans le ***Gestionnaire de paquets d'installation personnalisés*** , cliquer sur ***Télécharger MSI*** et sauvegarder le fichier sur l'ordinateur.  
![Gestionnaire d'installateur personnalisé – Télécharger MSI](/img/fr/rdm/windows/clip11257.png) 

### Télécharger depuis les services en ligne Devolutions Online Services 

Vous pouvez cliquer sur le bouton &#160;dans le courriel de confirmation pour accéder directement à votre liste d' ***Installateurs personnalisés*** dans Devolutions Online Services. Vous devrez vous connecter avec les informations d'identification de votre {{ fr.DA }} . Vous pouvez aussi y aller manuellement à partir du bouton ***Autres apps*** dans le Devolutions Portal avec lequel vous avez créé l'installateur personnalisé.  

À partir de là, il vous faudra cliquer sur ***.msi*** à côté de votre paquet et sauvegarder le fichier sur votre ordinateur.  
![Devolutions Online Services – Installateur personnalisé](/img/fr/rdm/windows/clip11258.png) 

