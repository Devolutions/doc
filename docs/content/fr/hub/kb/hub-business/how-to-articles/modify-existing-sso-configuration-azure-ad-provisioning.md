---
eleventyComputed:
  title: Modifier une configuration SSO existante pour la provision Azure AD
---
Si vous avez activé l'authentification unique (SSO) avec {{ fr.DHUBB }} avant le 9 janvier 2023, elle n'est pas configurée pour la Provision avec Azure AD. Pour bénéficier de cette fonctionnalité, vous devez créer une nouvelle configuration avec Azure AD qui synchronisera vos ***Groupes d'utilisateurs*** désirés avec {{ fr.DHUBB }}.

## Créer une application d'entreprise dans Azure AD et changer la configuration OpenID

* Puisque vous avez déjà configuré l'authentification Single Sign-on, vous devrez créer une nouvelle application d'entreprise dans Azure AD en suivant les étapes dans [Configurer l'authentification SSO avec Microsoft Azure](/hub/getting-started/get-started-sso-hub-business/configure-sso-authentication-microsoft-azure/) et modifier la configuration OpenID actuelle dans {{ fr.DHUBB }}.
* La fonctionnalité de provisionnement avec Azure AD doit être réalisée au sein de cette nouvelle application d'entreprise.
* Après la synchronisation, vérifiez que tous vos utilisateurs existants sont marqués comme synchronisés et qu'ils sont dans leurs respectifs Azure ***Groupes d'Utilisateurs***. Si certains utilisateurs ne sont pas marqués comme synchronisés, cela signifie qu'ils ne sont membres d'aucun groupe Azure faisant partie de l'application d'entreprise dans Azure.

{% snippet, "badgeCaution" %}
Pour éviter toute interruption de service pendant cette nouvelle configuration, vous devez compléter la configuration dans {{ fr.DHUBB }}. Une fois les nouvelles valeurs enregistrées, l'authentification Microsoft changera l'application d'entreprise et devrait être transparente.
{% endsnippet %}

## Remplacer les ***Groupes d'Utilisateurs Personnalisés*** {{ fr.DHUB }} par les Groupes d'Utilisateurs Azure

{% snippet, "badgeNotice" %}
Notez que cette tâche peut être réalisée lorsque vous en avez l'opportunité, un groupe à la fois.
{% endsnippet %}

Si vous avez des ***Groupes d'Utilisateurs Personnalisés*** {{ fr.DHUB }}, assurez-vous d'avoir un ***Groupe d'Utilisateurs Azure*** qui contient les mêmes utilisateurs.

Une fois que les groupes Azure correspondent aux groupes personnalisés, vous pouvez commencer à remplacer ces groupes personnalisés par les groupes Azure partout où vous les assignez dans les ***Permissions Système***, les ***Permissions {{ fr.VLT_MAJ }}***, et les ***Permissions de Dossier/Entrée***.

{% snippet, "badgeHelp" %}
Contactez notre équipe de support à [service@devolutions.net](mailto:service@devolutions.net) si vous avez besoin d'aide.
{% endsnippet %}
