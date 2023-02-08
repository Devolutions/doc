---
title: Configurer un SSO existant pour le provisionnement d'Azure AD
---
Si vous avez activé l'authentification unique (SSO) avec {{ fr.PHUB }} Business avant le 9 janvier 2023, elle n'est pas configurée pour le provisionnement avec Azure AD. Pour bénéficier de cette fonctionnalité, vous devez créer une nouvelle configuration avec Azure AD qui synchronisera vos ***Groupes d'utilisateurs*** souhaités avec {{ fr.PHUB }} Business.  

Comme vous utilisez déjà le SSO et pour éviter tout temps d'arrêt lors de cette nouvelle configuration, voici quelques étapes supplémentaires et conseils à suivre. 
### Configurer l'authentification SSO avec Microsoft Azure 
Suivez les étapes de [Configuration de l'authentification SSO avec Microsoft Azure](https://helphub.devolutions.net/fr/hub_connect_azuread_office365_authentification.html) , mais avec ces spécifications supplémentaires :  

* Dans la section ***Créer une nouvelle organisation dans le Devolutions Portal*** , vous devez créer une nouvelle organisation avec le même compte avec lequel vous avez créé l'organisation précédente qui est liée à votre {{ fr.PHUB }} . Lorsque vous nommez votre nouvelle organisation, nous vous recommandons de placer le mot « Sync » à la fin. 
* Dans la section ***Ajouter un utilisateur/groupe*** , lorsque vous ajoutez vos ***Groupes d'utilisateurs*** , assurez-vous que les utilisateurs de ces groupes sont ceux qui sont déjà dans {{ fr.PHUB }} Business. 
* Après la synchronisation avec l'organisation, assurez-vous que tous vos utilisateurs dans leurs groupes respectifs sont affichés dans l'organisation. 
### Activer le SSO dans {{ fr.PHUB }} Business 
Suivez les étapes de la section [Activer le SSO dans {{ fr.PHUB }} Business](https://helphub.devolutions.net/fr/hub_enable_sso_hub_business.html) , mais avec ces spécifications supplémentaires : 
* Dans la section ***Activer le SSO*** , puisque vous avez déjà activé le SSO dans {{ fr.PHUB }} , il vous suffit de changer l'organisation pour la nouvelle, puis de suivre les étapes suivantes pour ***Activer la synchronisation de l'organisation*** . 
* Une fois la synchronisation effectuée, vérifiez que tous vos utilisateurs existants sont marqués comme synchronisés et qu'ils sont dans leurs ***Groupes d'utilisateurs*** Azure respectifs. Si certains utilisateurs ne sont pas marqués comme synchronisés, cela signifie qu'ils ne sont pas membres d'un groupe Azure qui fait partie de l'application d'entreprise dans Azure. 
### Remplacer les groupes d'utilisateurs personnalisés de {{ fr.PHUB }} avec les groupes d'utilisateurs d'Azure 
{% snippet icon.badgeNotice %} 
Notez que cette tâche peut être effectuée lorsque que vous en avez l'occasion, un groupe à la fois. 
{% endsnippet %}
 
Si vous avez des ***Groupes d'utilisateurs*** personnalisés {{ fr.PHUB }} , assurez-vous que vous avez un ***Groupe d'utilisateurs*** Azure qui contient les mêmes utilisateurs.  

Une fois que les groupes Azure correspondent aux groupes personnalisés, vous pouvez commencer à remplacer ces groupes personnalisés par les groupes Azure partout où vous les attribuez dans les ***Permissions du système*** , les ***Permissions des coffres*** et les ***Permissions de dossiers/d'entrées*** . 
{% snippet icon.badgeInfo %} 
Contactez notre équipe d'assistance à l'adresse [service@devolutions.net](mailto:service@devolutions.net) si vous avez besoin d'aide ou de précisions sur certains aspects. 
{% endsnippet %}
 

