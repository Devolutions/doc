---
title: Gestion des utilisateurs d'application
---
Voici les étapes pour créer et attribuer des ***Utilisateurs d'application*** pour {{ fr.DHUBB }}.  

### Créer un utilisateur d'application 

1. Dans ***Administration – Utilisateurs d'application***, cliquer sur ***Ajouter un utilisateur d'application*** dans le coin supérieur droit.  
![Ajouter un utilisateur d'application](https://webdevolutions.azureedge.net/docs/fr/hub/Hub2062.png) 
1. Nommer l'***Utilisateur d'application*** et cliquer sur ***Ajouter***.  
![Nom de l'utilisateur d'application](https://webdevolutions.azureedge.net/docs/fr/hub/Hub2052.png) 
1. Copier la ***Clé secrète d'application*** et la ***Clé de l'application*** ou télécharger le fichier PDF fourni pour l'enregistrer dans un endroit sécuritaire.  
![Nom de l'utilisateur d'application](https://webdevolutions.azureedge.net/docs/fr/hub/Hub2053.png) 
{% snippet icon.badgeCaution %} 
Conservez sécuritairement les informations nouvellement créées de l'***Utilisateur d'application***. 
{% endsnippet %}
 
4. ***Fermer*** la fenêtre. 
{% snippet icon.shieldCaution %} 
Par défaut, un ***Utilisateur d'application*** nouvellement créé n'a aucune permission. Consultez la section suivante pour lui en assigner. 
{% endsnippet %}
 
### Attribuer des permissions 

En fonction des actions que cet utilisateur d'application doit effectuer, vous devez lui attribuer les droits appropriés :  

* [Assigner des permissions de système à l'utilisateur d'application](/fr/hub/web-interface/hub-overview/administration/configuration-security/system-permissions/) 
* [Assigner des permissions de {{ fr.VLT }} à l'utilisateur d'application](/fr/hub/web-interface/hub-overview/administration/management/vaults/create-manage-vaults/)  

Lorsque les permissions ont été attribuées, vous êtes prêt à accéder à {{ fr.DHUB }} avec le [module {{ fr.PS }}](/fr/hub/powershell-module/) et votre utilisateur d'application. 
