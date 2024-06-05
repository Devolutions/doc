---
eleventyComputed:
  title: Accéder et gérer les variables
  description: "{{ fr.RDM }} a des listes de toutes les variables disponibles."
---
{{ fr.RDM }} a des listes de toutes les [variables](/rdm/concepts/intermediate-concepts/variables/) disponibles. Les variables sont des valeurs polyvalentes qui peuvent être modifiées en fonction du contexte. Elles agissent comme des conteneurs pour les données, facilitant le contrôle centralisé et la manipulation.

Pour accéder et gérer les variables, cliquer avec le bouton droit sur une entrée/dossier, sélectionner **Propriétés**, et cliquer sur le bouton **Variables**.

![Bouton Variables dans {{ fr.RDM }}](https://cdnweb.devolutions.net/docs/RDMW4006_2024_1.png)

## Disponibilité 
La disponibilité des variables varie d'une entrée/dossier à l'autre, car elle dépend des champs qui peuvent être remplis dans l'entrée ou le dossier. Si des [variables personnalisées](/rdm/mac/kb/rdm-windows/knowledge-base/manage-custom-variables/) ont été créées pour une entrée, elles apparaîtront dans la sous-section ***Variables personnalisées*** située sous ***Général*** dans la fenêtre ***Variables de l'entrée*** des ***Propriétés*** de l'entrée.

![Variables personnalisées](https://cdnweb.devolutions.net/docs/RDMW4007_2024_1.png)

{% snippet, "badgeInfo" %}
Normalement, la variable $PARENT_NAME$ fonctionne uniquement pour les sous-entrées et dossiers. Cependant, en 2023.1, elle se résout également avec le nom du dossier parent d'une entrée « standard » qui n'est pas une sous-entrée tant qu'elles ne sont pas directement à la racine.
{% endsnippet %}

## Utilisations des variables
En règle générale, les variables peuvent être utilisées dans n'importe quel champ de l'entrée/dossier, bien que seules les variables avec un ***X*** dans la colonne ***Pris en charge dans le nom*** peuvent être utilisées dans le champ ***Nom***.

{% snippet, "badgeInfo" %}
Certaines variables IP peuvent causer des problèmes de performance ou échouer à retourner des adresses IP dans certaines situations. Il est recommandé d'[utiliser cette solution](/rdm/mac/kb/rdm-windows/knowledge-base/ip-variables/) à la place.
{% endsnippet %}
