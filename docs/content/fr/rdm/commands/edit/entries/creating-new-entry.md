---
eleventyComputed:
  title: Créer une entrée
  description: Lorsque vous commencez avec {{ fr.RDM }}, vous devez configurer vos entrées. Il existe de nombreux types d'entrées ; vous devez savoir quel tiers ou quelle technologie vous allez utiliser pour choisir le(s) type(s) d'entrée approprié(s) que vous prévoyez de configurer.
---
{% youtube '-3Dfoy1qaQ0' %}

Lorsque vous commencez avec {{ fr.RDM }}, vous devez configurer vos entrées. Il existe de nombreux types d'entrées ; vous devez savoir quel tiers ou quelle technologie vous allez utiliser pour choisir le(s) type(s) d'entrée approprié(s) que vous prévoyez de configurer.

## Créer une entrée

### Depuis le Ruban

Dans le ***{{ fr.NPANE }}***, sélectionner l'emplacement où vous souhaitez que l'entrée soit située. Dans le ***Ruban***, aller à ***Modifier*** et cliquer sur ***Nouvelle Entrée***. Vous serez invité à personnaliser vos paramètres dans la fenêtre des propriétés de l'entrée.
![Ajouter une entrée depuis le Ruban](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2182.png)

### Depuis le menu contextuel

Dans le ***{{ fr.NPANE }}***, faire un clic droit là où vous souhaitez que l'entrée soit située et sélectionner ***Ajouter*** dans le menu. Pour initialiser une nouvelle session, vous pouvez spécifier soit le type de session soit un modèle. Vous serez invité à personnaliser vos paramètres dans la fenêtre des propriétés de l'entrée.
![Ajouter une entrée depuis le menu contextuel](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2181.png)

### Avec glisser-déposer

Vous pouvez également créer une session en glissant et déposant un fichier RDP dans le ***{{ fr.NPANE }}***. En faisant cela, {{ fr.RDM }} vous demandera si vous souhaitez importer le contenu et créer une nouvelle session, ou créer une session liée au fichier RDP. Il est également possible de glisser-déposer le raccourci de bureau LogMeIn pour créer une session LogMeIn.
{% snippet, "badgeInfo" %}
Il est possible que le glisser-déposer ne fonctionne pas à cause de vos paramètres de sécurité. Ils peuvent empêcher les applications fonctionnant dans différents contextes d'interagir. Par exemple, si {{ fr.RDM }} fonctionne dans un contexte élevé (mode administrateur) et qu'Internet Explorer fonctionne en mode par défaut, Windows ne vous permettra pas de glisser un lien URL dans l'application.
{% endsnippet %}

### En important une configuration

Vous pouvez également importer des entrées en utilisant l'[Assistant d'importation d'ordinateur](/rdm/windows/commands/file/import/computer-wizard/), ou en important sa configuration directement depuis toute application compatible prise en charge par nos outils d'importation. En savoir plus dans [Importer](/rdm/windows/commands/file/import/).

## Créer une sous-entrée

{% snippet, "badgeInfo" %}
Depuis la version 2022.3 de {{ fr.RDM }}, les sous-entrées ont remplacé les sous-connexions. Elles diffèrent en ce que les sous-connexions étaient stockées en XML dans leur entrée parente, ce qui n'est pas le cas des sous-entrées, les rendant beaucoup plus polyvalentes.

La migration des sous-connexions préexistantes vers les nouvelles sous-entrées est automatique lors de la mise à jour de la version 2022.2 ou antérieure de {{ fr.RDM }} vers la version 2022.3 ou ultérieure.
{% endsnippet %}

Les sous-entrées sont des entrées à part entière, indépendantes situées sous une entrée "parente" dans l'affichage en arborescence. Elles se réfèrent à leur parent avec un ID. Elles sont compatibles avec les pièces jointes, la documentation, l'historique complet, etc.

Elles peuvent être trouvées sous l'entrée parente ou dans l'onglet ***Sous-Entrées*** du [***Tableau de bord***](/rdm/windows/user-interface/content-area/dashboards/) de l'entrée parente.

{% snippet, "badgeInfo" %}
Pour créer des sous-entrées, assurez-vous que l'option ***Autoriser les sous-entrées*** est activée dans les listes d'options dans ***Fichier – Paramètres – Avancé***.

Pour voir les sous-entrées dans le ***{{ fr.NPANE }}***, assurez-vous que l'option ***Charger la sous-entrée dans l'affichage en arborescence*** est activée dans les listes d'options dans ***Fichier – Paramètres – Interface Utilisateur – Vue en Arborescence***.
{% endsnippet %}

### Depuis le Ruban

Dans le ***{{ fr.NPANE }}***, sélectionner l'entrée sous laquelle vous souhaitez placer une sous-entrée. Dans le ***Ruban***, aller à ***Modifier*** et cliquer sur ***Nouvelle Entrée***. Puisque vous avez précédemment sélectionné l'entrée parente, vous serez invité à choisir soit de créer une sous-entrée soit une entrée. Sélectionner ***Nouvelle Sous-Entrée***. Ensuite, personnaliser vos paramètres dans la fenêtre des propriétés de l'entrée.

{% snippet, "badgeInfo" %}
Vous ne pouvez pas créer une sous-entrée sous une autre sous-entrée.
{% endsnippet %}

![Ajouter une sous-entrée depuis le Ruban](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2182.png)
![Invite Nouvelle Sous-Entrée](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2184.png)

### Depuis le menu contextuel

Dans le ***{{ fr.NPANE }}***, faire un clic droit sur l'entrée sous laquelle vous souhaitez placer une sous-entrée et sélectionner ***Ajouter*** dans le menu. Pour initialiser une nouvelle session, vous pouvez spécifier soit le type de session soit un modèle. Vous serez invité à choisir soit de créer une sous-entrée soit une entrée. Sélectionner ***Nouvelle Sous-Entrée***. Ensuite, personnaliser vos paramètres dans la fenêtre des propriétés de l'entrée.

{% snippet, "badgeInfo" %}
Vous ne pouvez pas créer une sous-entrée sous une autre sous-entrée.
{% endsnippet %}

![Ajouter une sous-entrée depuis le menu contextuel](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2183.png)
![Invite Nouvelle Sous-Entrée](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2184.png)
