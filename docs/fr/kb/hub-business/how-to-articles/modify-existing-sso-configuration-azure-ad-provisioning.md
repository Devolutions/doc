---
eleventyComputed:
  title: Configurer un SSO existant pour le provisionnement d'Azure AD
---
Si vous avez activé l'authentification unique (SSO) avec {{ fr.DHUBB }} avant le 9 janvier 2023, elle n'est pas configurée pour le provisionnement avec Azure AD. Pour bénéficier de cette fonctionnalité, vous devez créer une nouvelle configuration avec Azure AD qui synchronisera vos ***Groupes d'utilisateurs*** souhaités avec {{ fr.DHUBB }}.

### Créer une application d'entreprise dans Azure AD et modifier la configuration OpenID

* Comme vous avez déjà configuré le SSO, vous devrez créer une nouvelle application d'entreprise dans Azure AD en suivant les étapes de [Configurer l'authentification SSO avec Microsoft Azure](/hub/getting-started/get-started-sso-hub-business/configure-sso-authentication-microsoft-azure/) et modifier la configuration OpenID actuelle dans {{ fr.DHUB }}.
* La fonction de provisionnement avec Azure AD doit être faite dans cette nouvelle application d'entreprise.
* Une fois la synchronisation effectuée, vérifiez que tous vos utilisateurs existants sont marqués comme synchronisés et qu'ils sont dans leurs ***Groupes d'utilisateurs*** Azure respectifs. Si certains utilisateurs ne sont pas marqués comme synchronisés, cela signifie qu'ils ne sont pas membres d'un groupe Azure qui fait partie de l'application d'entreprise dans Azure.

{% snippet icon.badgeCaution %}
Pour éviter tout temps d'arrêt lors de cette nouvelle configuration, vous devez compléter la configuration dans {{ fr.DHUBB }}. Une fois les valeurs enregistrées, l'authentification Microsoft changera l'application d'entreprise et devrait être transparente.
{% endsnippet %}

### Remplacer les groupes d'utilisateurs personnalisés de {{ fr.DHUB }} avec les groupes d'utilisateurs d'Azure 
{% snippet icon.badgeNotice %}
Notez que cette tâche peut être effectuée lorsque que vous en avez l'occasion, un groupe à la fois.
{% endsnippet %}
 
Si vous avez des ***Groupes d'utilisateurs*** {{ fr.DHUB }} personnalisés, assurez-vous que vous avez un ***Groupe d'utilisateurs*** Azure qui contient les mêmes utilisateurs.

Une fois que les groupes Azure correspondent aux groupes personnalisés, vous pouvez commencer à remplacer ces groupes personnalisés par les groupes Azure partout où vous les attribuez dans les ***Permissions du système***, les ***Permissions des {{ fr.VLT }}s*** et les ***Permissions de dossiers/d'entrées***.
{% snippet icon.badgeInfo %}
Contactez notre équipe d'assistance à l'adresse [service@devolutions.net](mailto:service@devolutions.net) si vous avez besoin d'aide.
{% endsnippet %}
