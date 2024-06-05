---
eleventyComputed:
  title: Définition des surcharges
---
***Paramètres Spécifiques*** sont utilisés pour remplacer les propriétés d'une entrée. Plusieurs paramètres peuvent être remplacés, tels que les identifiants ou le mode d'affichage. Il existe deux types de ***Paramètres Spécifiques*** : les paramètres spécifiques à l'utilisateur et les paramètres spécifiques à la machine locale.

* ***Paramètres Spécifiques Utilisateur*** remplacent les propriétés d'une entrée pour un seul utilisateur.
* ***Paramètres Spécifiques Locaux*** remplacent les propriétés d'une entrée pour tous les utilisateurs d'un appareil spécifique.

{% snippet, "badgeInfo" %}
Cette fonctionnalité est uniquement disponible lors de l'utilisation d'une [Source de Données Avancée](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/). Un paramètre sur la source de données permet l'utilisation de ***Paramètres Spécifiques***. Contacter votre administrateur si le menu est grisé.
{% endsnippet %}

{% snippet, "badgeInfo" %}
***Paramètres Spécifiques Utilisateur*** sont partagés entre {{ fr.RDM }}, {{ fr.DVLS }} et {{ fr.DHUB }}.
{% endsnippet %}

{% snippet, "badgeInfo" %}
Si à la fois ***Paramètres Spécifiques Utilisateur*** et ***Paramètres Spécifiques Locaux*** sont définis sur la même entrée, les Paramètres Spécifiques Locaux ont la priorité.
{% endsnippet %}

Les options sont disponibles dans le ruban. Sélectionner ***Modifier*** – ***Surcharges de Paramètres*** – ***Paramètres Spécifiques Utilisateur*** ou ***Paramètres Spécifiques Locaux***.

![Modifier – Surcharges de Paramètres – Paramètres Spécifiques Utilisateur ou Paramètres Spécifiques Locaux](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6166.png)

Ces options peuvent également être accessibles en utilisant le clic droit sur une entrée et en allant à ***Modifier – Paramètres Spécifiques Utilisateur/Locaux***.

![Menu contextuel – Modifier – Paramètres Spécifiques Utilisateur et Locaux](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10214.png)

### Indicateur de paramètres spécifiques

Un icône indicateur est affiché dans le tableau de bord lorsqu'une entrée avec ***Paramètres Spécifiques*** est sélectionnée. Cliquer sur l'icône pour ouvrir le dialogue ***Paramètres Spécifiques***.
![Indicateur de Paramètres Spécifiques](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6167.png)

## Flux de travail

Dans la majorité des cas, l'édition des ***Paramètres Spécifiques*** affiche le dialogue suivant :
![Paramètres Spécifiques Utilisateur](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6168.png)
{% snippet, "badgeInfo" %}
***Les paramètres spécifiques*** sont sensibles au contexte, et plusieurs paramètres peuvent ne pas être disponibles pour certains types d'entrée.
{% endsnippet %}
