---
eleventyComputed:
  title: Service de billetterie
  description: La fonctionnalité de service de billetterie vous aide à distribuer des informations à tous les utilisateurs du système de billetterie utilisé à l'intérieur de {{ fr.RDM }}.
  keywords:
  - billetterie
  - jeton d'API
---
{% snippet, "badgeInfo" %}
Cette fonctionnalité est uniquement disponible dans {{ fr.RDM }} avec une source de données avancée, par exemple {{ fr.DVLS }}.
{% endsnippet %}

La fonctionnalité ***Service de billetterie*** vous aide à distribuer des informations à tous les utilisateurs du système de billetterie utilisé à l'intérieur de {{ fr.RDM }}. Le but de cette intégration est de pouvoir créer des billets dans votre système de billetterie directement depuis {{ fr.RDM }}.

{% snippet, "badgeInfo" %}
Pour le moment, le système de billetterie Jira est le seul pris en charge.
{% endsnippet %}

Vous pouvez trouver cette fonctionnalité dans ***Administration – Paramètres Système – Avancé – Service de Billetterie*** dans {{ fr.RDM }}.
![Administration – Paramètres Système – Avancé – Service de Billetterie](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2198.png)

Si vous utilisez une source de données {{ fr.DVLS }}, vous pouvez également y accéder via l'interface web dans ***Administration – Paramètres Système – Service de Billetterie***.
![Administration – Paramètres Système – Service de Billetterie](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2199.png)

Le tableau ci-dessous vous donne une explication de chaque paramètre à configurer. Vous devrez [créer un jeton d'API](https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/) pour compléter la configuration.

| Paramètres                  | Description                                                                                   |
| --------------------------- | --------------------------------------------------------------------------------------------- |
| ***Type de billetterie***   | Le système de billetterie que vous utilisez intégré avec {{ fr.RDM }}. Pour le moment, seul Jira est pris en charge. |
| ***URI du serveur de billetterie*** | L'URL pour atteindre votre instance de Jira.                                                  |
| ***Nom d'utilisateur***     | Le nom d'utilisateur du compte utilisé pour créer le jeton d'API.                             |
| ***Jeton d'API***           | Le jeton d'API créé au préalable. Si ce n'est pas déjà fait, suivez le lien ci-dessus.        |
| ***Filtre par défaut***     | Ce champ est obligatoire ; vous devez avoir au moins un filtre favori dans Jira.              |
| ***Application de la billetterie*** | Votre préférence entre l'application de ce service de billetterie ou non.                     |