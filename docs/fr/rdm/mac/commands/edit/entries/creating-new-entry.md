---
eleventyComputed:
  title: Créer une entrée
  description: Lorsque vous commencez avec {{ fr.RDMMAC }}, vous devez configurer vos entrées. Il existe de nombreux types d'entrées ; vous devez savoir quelle tierce partie ou technologie vous utiliserez pour choisir le(s) type(s) d'entrée approprié(s) que vous prévoyez de configurer.
---
Lorsque vous commencez avec {{ fr.RDMMAC }}, vous devez d'abord configurer vos entrées. Il existe de nombreux types d'entrées ; vous devez savoir quelle tierce partie ou technologie vous utiliserez pour choisir le(s) type(s) d'entrée approprié(s) que vous prévoyez de configurer.

## Créer une entrée

### Depuis le Ruban

Dans le ***{{ fr.NPANE }}***, sélectionner où vous souhaitez que l'entrée soit située. Dans le ***Ruban***, aller à ***Modifier*** et cliquer sur ***Nouvelle Entrée***. Vous serez invité à personnaliser vos paramètres dans la fenêtre des propriétés de l'entrée.
![Ajouter une entrée depuis le Ruban](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac2092.png)

### Depuis le menu contextuel

Dans le ***{{ fr.NPANE }}***, faire un clic droit où vous souhaitez que l'entrée soit située et sélectionner ***Ajouter*** depuis le menu. Pour initialiser une nouvelle session, vous pouvez spécifier soit le type de session soit un modèle. Vous serez invité à personnaliser vos paramètres dans la fenêtre des propriétés de l'entrée.
![Ajouter une entrée depuis le menu contextuel](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac2093.png)

### En important une configuration

Vous pouvez également importer des entrées dans ***Fichier – Importer***. En savoir plus dans [Importer](/rdm/mac/commands/file/import/sessions/).

## Créer une sous-entrée

{% snippet, "badgeInfo" %}
Depuis la version {{ fr.RDM }} 2022.3, les sous-entrées ont remplacé les sous-connexions. Elles sont différentes en ce que les sous-connexions étaient stockées en XML dans leur entrée parente, ce qui n'est pas le cas avec les sous-entrées, les rendant beaucoup plus polyvalentes.

La migration des sous-connexions préexistantes vers les nouvelles sous-entrées est automatique lors de la mise à jour de la version {{ fr.RDM }} 2022.2 ou antérieure vers la version 2022.3 ou ultérieure.
{% endsnippet %}

Les sous-entrées sont des entrées à part entière, indépendantes situées sous une entrée "parente" dans la vue en arborescence. Elles se réfèrent à leur parent avec un ID. Elles sont compatibles avec les pièces jointes, la documentation, l'historique complet, etc.

Elles peuvent être trouvées sous l'entrée parente ou dans l'onglet ***Sous-Entrées*** du [***Tableau de bord***](/rdm/mac/user-interface/content-area/dashboard/) de l'entrée parente.

{% snippet, "badgeInfo" %}
Vous ne pouvez pas créer une sous-entrée sous une autre sous-entrée.
{% endsnippet %}

### Depuis le Ruban

Dans le ***{{ fr.NPANE }}***, sélectionner l'entrée sous laquelle vous souhaitez placer une sous-entrée. Dans le ***Ruban***, aller à ***Modifier*** et cliquer sur ***Nouvelle Entrée***. Puisque vous avez précédemment sélectionné l'entrée parente, vous serez invité à choisir soit de créer une sous-entrée soit une entrée. Sélectionner ***Nouvelle Sous-Entrée***. Ensuite, personnaliser vos paramètres dans la fenêtre des propriétés de l'entrée.

{% snippet, "badgeInfo" %}
Vous ne pouvez pas créer une sous-entrée sous une autre sous-entrée.
{% endsnippet %}

![Ajouter une sous-entrée depuis le Ruban](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac2092.png)
![Invite Nouvelle Sous-Entrée](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac2096.png)

### Depuis le menu contextuel

Dans le ***{{ fr.NPANE }}***, faire un clic droit sur l'entrée sous laquelle vous souhaitez placer une sous-entrée et sélectionner ***Ajouter*** depuis le menu. Pour initialiser une nouvelle session, vous pouvez spécifier soit le type de session soit un modèle. Vous serez invité à choisir soit de créer une sous-entrée soit une entrée. Sélectionner ***Nouvelle Sous-Entrée***. Ensuite, personnaliser vos paramètres dans la fenêtre des propriétés de l'entrée.

{% snippet, "badgeInfo" %}
Vous ne pouvez pas créer une sous-entrée sous une autre sous-entrée.
{% endsnippet %}

![Ajouter une sous-entrée depuis le menu contextuel](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac2095.png)
![Invite Nouvelle Sous-Entrée](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac2096.png)