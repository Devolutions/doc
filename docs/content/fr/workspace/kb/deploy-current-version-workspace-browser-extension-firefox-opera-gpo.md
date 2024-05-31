---
eleventyComputed:
  title: Déployer la version actuelle du {{ fr.WBEX }} dans Firefox et Opera en utilisant les GPOs
  description: Distribuer la version actuelle du {{ fr.WBEX }} dans les navigateurs Firefox et Opera en utilisant les GPOs.
  keywords:
  - GPO
---
{% snippet, "badgeInfo" %}
NOTE IMPORTANTE (pour les versions de {{ fr.WBEX }} antérieures à 2021.2.3.0)

Les paramètres déployés avec l'objet de stratégie de groupe (GPO) sont uniquement appliqués lorsque l'extension est utilisée pour la première fois. Cela signifie que les paramètres ne seront pas appliqués et modifiés si vous modifiez les paramètres dans le GPO et que l'extension a déjà été utilisée par un utilisateur au moins une fois.
{% endsnippet %}

Pour distribuer la version la plus récente du {{ fr.WBEX }} dans les navigateurs Firefox et Opera en utilisant les GPOs, nous utilisons les URL suivantes :
* [URL Firefox](https://cdn.devolutions.net/download/BrowserExtension/DevolutionsWorkspaceFirefox.Latest.xpi)
* [URL Opera](https://cdn.devolutions.net/download/BrowserExtension/DevolutionsWorkspaceOpera.Latest.crx)

Lorsqu'une nouvelle version du {{ fr.WBEX }} est disponible, les paquets sont écrasés pour maintenir le lien à jour.

{% snippet, "badgeInfo" %}
La mise à jour est déjà effectuée par le navigateur avec le fichier de mise à jour. Les utilisateurs n'ont rien à faire.
{% endsnippet %}
