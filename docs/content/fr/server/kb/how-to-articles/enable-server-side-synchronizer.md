---
eleventyComputed:
  title: Activer le synchroniseur côté serveur
---
{% snippet, "badgeCaution" %}
Le planificateur {{ fr.DVLS }} doit être installé et en cours d'exécution pour activer cette fonctionnalité.
{% endsnippet %}

{% snippet, "badgeNotice" %}
Seuls les types d'entrées de synchroniseur Active Directory et VMWare sont pris en charge par cette fonctionnalité.
{% endsnippet %}

Les étapes suivantes décrivent comment activer le synchroniseur côté serveur pour être exécuté par le planificateur {{ fr.DVLS }}.

1. Depuis l'interface web {{ fr.DVLS }}, créer une nouvelle entrée de Synchroniseur.
![Nouvelle entrée de Synchroniseur](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8056.png)
1. Remplir les propriétés pour le Synchroniseur sélectionné.
1. Aller dans Général - Planification
1. Cocher la case Activer et définir l'occurrence et l'heure de l'exécution du Synchroniseur.
![Synchroniseur - Planification](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8057.png)
1. Dans {{ fr.RDM }}, cette option peut être configurée dans Général - Planification.
![!!KB8058](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8058.png)
