---
eleventyComputed:
  title: Gérer les variables personnalisées
  description: "{{ fr.RDM }} a des listes de toutes les variables personnalisées qui peuvent être gérées dans deux emplacements différents selon leur utilisation prévue."
---
{{ fr.RDM }} a des listes de toutes les variables personnalisées, qui peuvent être gérées dans deux emplacements différents selon leur utilisation prévue.

Pour créer, modifier ou supprimer des variables personnalisées, aller à ***Fichier*** – ***Paramètres*** – ***Applications*** – ***Variables personnalisées***. Chaque variable nécessite au moins un ***Nom*** et une ***Valeur***. Notez que ces [variables](/rdm/concepts/intermediate-concepts/variables/) sont spécifiques à l'utilisateur et peuvent être utilisées dans toutes les sources de données.

![Variables personnalisées locales spécifiques à l'utilisateur](https://cdnweb.devolutions.net/docs/RDMW4008_2024_1.png)

Alternativement, les variables personnalisées peuvent être gérées dans ***Administration*** – ***{{ fr.VLT_MAJ }} Paramètres*** – ***Afficher*** – ***Variables***. Chacune nécessite au moins un ***Nom***, une ***Valeur***, et une ***Description***. Tous les utilisateurs ayant accès aux ***{{ fr.VLT_MAJ }} Paramètres*** peuvent les voir et les utiliser, mais elles ne peuvent être utilisées que dans ce {{ fr.VLT }} spécifique.

![Variables personnalisées spécifiques à {{ fr.VLT_MAJ }}](https://cdnweb.devolutions.net/docs/RDMW4009_2024_1.png)

{% snippet, "badgeHelp" %}
Les variables personnalisées apparaîtront également dans la sous-section ***Variables personnalisées*** située sous ***Général*** dans la fenêtre ***Variables d'entrée*** des ***Propriétés*** de l'entrée, comme montré dans [Accéder et gérer les variables](/rdm/kb/rdm-windows/knowledge-base/access-manage-rdm-variables/). 
{% endsnippet %}
