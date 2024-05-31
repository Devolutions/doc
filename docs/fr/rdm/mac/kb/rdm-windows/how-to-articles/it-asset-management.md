---
eleventyComputed:
  title: Utiliser BlueTally dans {{ fr.RDM }}
  description: Comment utiliser BlueTally dans {{ fr.RDM }}.
---
La fonctionnalité de gestion des actifs informatiques peut être utilisée pour lier un gestionnaire d'actifs (par exemple, BlueTally, [Lansweeper](/rdm/mac/kb/rdm-windows/how-to-articles/lansweeper/)) via les propriétés d'une entrée.
{% snippet, "badgeInfo" %}
Seuls les types d'entrée ***Session***, ***Gestion à distance***, ***Divers***, ***VPN***, ***Synchroniseur*** et ***Modèle*** prennent en charge cette fonctionnalité pour le moment. Les entrées ***Gestion des actifs informatiques*** fonctionnent différemment de la fonctionnalité.
{% endsnippet %}

## Étapes
1. Cliquer avec le bouton droit sur une entrée et sélectionner ***Propriétés***.
1. Aller à ***Affichage*** – ***Gestion des actifs informatiques***.
1. Sélectionner un ***type de service*** dans le menu déroulant.
1. Entrer l'URL d'un actif spécifique.
![Gestion des actifs informatiques](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0058.png)
1. Cliquer sur ***OK*** pour sauvegarder les modifications et fermer la fenêtre.
1. Dans le ***Tableau de bord***, sélectionner l'onglet ***Gestion des actifs informatiques***.
{% snippet, "badgeInfo" %}
L'onglet sera nommé selon ce qui a été écrit dans le ***champ titre de la gestion des actifs informatiques***. Si le champ est laissé vide, ***BlueTally*** s'affichera (si ce service a été choisi), ou s'affichera comme ***Gestion des actifs informatiques***.
{% endsnippet %}

![Onglet Gestion des actifs informatiques](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0059.png)
7. Se connecter à ce service.
