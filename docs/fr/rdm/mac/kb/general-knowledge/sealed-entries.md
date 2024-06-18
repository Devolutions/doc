---
eleventyComputed:
  title: Entrées scellées
  description: Lorsqu'une tentative d'accès à une entrée scellée est faite, le système affiche un message de confirmation à l'utilisateur, indiquant que l'entrée est protégée.
---
Les entrées scellées peuvent être utilisées en cas d'urgence. Lorsqu'une tentative d'accès à une entrée scellée est faite, le système affiche un message de confirmation à l'utilisateur, indiquant que l'entrée est protégée. De plus, une notification est envoyée aux administrateurs, les alertant de la tentative d'accès.

{% snippet, "badgeInfo" %}
L'entrée scellée doit être créée dans une [source de données {{ fr.DVLS }}](/rdm/concepts/basic-concepts/data-sources/).
{% endsnippet %}

 ### Sceller l'entrée

1. Aller aux propriétés de l'entrée.
1. Aller à ***Paramètres de sécurité***.
1. Sélectionner ***Scellé*** sous ***État de scellement***.
1. Cliquer ***Mettre à jour*** pour sauvegarder.

 ### Tentatives d'accès

Décacheter une entrée envoie une notification aux administrateurs, fournissant des détails sur la tentative d'accès. Cela inclut l'identité de l'utilisateur tentant d'accéder, la date et l'heure de la tentative, et le nom du {{ fr.VLT }}.