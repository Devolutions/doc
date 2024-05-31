---
eleventyComputed:
  title: Paramètres Spécifiques Utilisateur
  description: Les Paramètres Spécifiques sont utilisés pour remplacer les propriétés d'une entrée.
---
Permet de remplacer les paramètres de session pour un utilisateur. Plusieurs paramètres peuvent être remplacés, tels que le nom d'utilisateur, le mot de passe ou l'affichage.

Dans votre ***{{ fr.NPANE }}***, sélectionner l'entrée que vous souhaitez remplacer puis faire un clic droit Éditer - Éditer l'Entrée (Paramètres Spécifiques Utilisateur) ou dans le Ruban simplement sélectionner Éditer - Éditer l'Entrée (Paramètres Spécifiques Utilisateur).
![Éditer - Éditer l'Entrée (Paramètres Spécifiques Utilisateur)](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac6056.png)

## Paramètres

{% snippet, "badgeInfo" %}
Cette fonctionnalité est uniquement disponible lors de l'utilisation d'une [Source de Données Avancée](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/). Un paramètre sur la source de données permet l'utilisation des Paramètres Spécifiques Utilisateur. Contacter votre administrateur si le menu est grisé.
{% endsnippet %}

{% snippet, "badgeInfo" %}
Les ***Paramètres Spécifiques Utilisateur*** sont partagés entre {{ fr.RDM }}, {{ fr.DVLS }} et {{ fr.DHUB }}.
{% endsnippet %}

{% snippet, "badgeCaution" %}
Si les Paramètres Spécifiques Utilisateur et les Paramètres Spécifiques Machine Locale sont définis sur la même entrée, les Paramètres Spécifiques Machine Locale ont la priorité.
{% endsnippet %}

![Paramètres Spécifiques Utilisateur](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac6057.png)

Veuillez consulter chaque onglet pour plus d'informations :

* [Remplacer les Identifiants](/rdm/mac/commands/edit/setting-overrides/user-specific-settings/override-credentials/)
* [Général](/rdm/mac/commands/edit/setting-overrides/user-specific-settings/general/)
* [Paramètres](/rdm/mac/commands/edit/setting-overrides/user-specific-settings/settings/)
* [Plus](/rdm/mac/commands/edit/setting-overrides/user-specific-settings/more/)
* [VPN](/rdm/mac/commands/edit/setting-overrides/user-specific-settings/vpn/)
