---
title: Configurer un SSO existant pour le provisionnement d'Azure AD
---
Si vous avez activé l'authentification unique (SSO) avec {{ fr.HUB }} Business avant le 9 janvier 2023, elle n'est pas configurée pour le provisionnement avec Azure AD. Pour bénéficier de cette fonctionnalité, vous devez créer une nouvelle configuration avec Azure AD qui synchronisera vos ***Groupes d'utilisateurs*** souhaités avec {{ fr.PHUB }} Business.

Comme vous utilisez déjà le SSO et pour éviter tout temps d'arrêt lors de cette nouvelle configuration, voici quelques étapes supplémentaires et conseils à suivre.

### Créer une application d'entreprise dans Azure AD et modifier la configuration OpenID

* Comme vous avez déjà configuré le SSO, vous devrez créer une nouvelle application d'entreprise dans Azure AD en suivant les étapes de [Configurer l'authentification SSO avec Microsoft Azure](https://helphub.devolutions.net/fr/hub_connect_azuread_office365_authentification.html) et modifier la configuration OpenId actuelle dans {{ en.PHUB }}.
* La fonction de provisionnement avec Azure AD doit être faite dans cette nouvelle application d'entreprise.
* Une fois la synchronisation effectuée, vérifiez que tous vos utilisateurs existants sont marqués comme synchronisés et qu'ils sont dans leurs ***Groupes d'utilisateurs*** Azure respectifs. Si certains utilisateurs ne sont pas marqués comme synchronisés, cela signifie qu'ils ne sont pas membres d'un groupe Azure qui fait partie de l'application d'entreprise dans Azure.

{% snippet icon.badgeCaution %}
Pour éviter tout temps d'arrêt lors de cette nouvelle configuration, vous devez compléter la configuration dans {{ en.PHUB }} Business. Une fois les valeurs enregistrées, l'authentification Microsoft changera l'application d'entreprise et devrait être transparente.
{% endsnippet %}

### Remplacer les groupes d'utilisateurs personnalisés de {{ fr.PHUB }} avec les groupes d'utilisateurs d'Azure 
{% snippet icon.badgeNotice %}
Notez que cette tâche peut être effectuée lorsque que vous en avez l'occasion, un groupe à la fois.
{% endsnippet %}
 
Si vous avez des ***Groupes d'utilisateurs*** {{ fr.HUB }} personnalisés, assurez-vous que vous avez un ***Groupe d'utilisateurs*** Azure qui contient les mêmes utilisateurs.

Une fois que les groupes Azure correspondent aux groupes personnalisés, vous pouvez commencer à remplacer ces groupes personnalisés par les groupes Azure partout où vous les attribuez dans les ***Permissions du système***, les ***Permissions des coffres*** et les ***Permissions de dossiers/d'entrées***.
{% snippet icon.badgeInfo %}
Contactez notre équipe d'assistance à l'adresse [service@devolutions.net](mailto:service@devolutions.net) si vous avez besoin d'aide.
{% endsnippet %}
 