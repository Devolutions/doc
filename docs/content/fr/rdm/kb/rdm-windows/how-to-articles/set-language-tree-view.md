---
eleventyComputed:
  title: Définir une langue pour l'arborescence
  description: Dans {{ fr.RDM }}, vous pouvez spécifier une langue (et un emplacement) pour l'arborescence dans le {{ fr.NPANE }}.
  keywords:
  - culture
  - langue
  - emplacement
  - région
---
Dans {{ fr.RDM }}, vous pouvez spécifier une langue (et un emplacement) pour l'arborescence dans le ***{{ fr.NPANE }}***. Cela est particulièrement utile pour les langues qui utilisent des caractères autres que ou en plus de l'alphabet A-Z.

{% snippet, "badgeInfo" %}
Notez que le système sur lequel {{ fr.RDM }} est installé doit prendre en charge la langue spécifique pour qu'elle fonctionne dans {{ fr.RDM }}.
{% endsnippet %}

- Dans {{ fr.RDM }}, aller à ***Fichier – Paramètres – Interface utilisateur – Arborescence***.
- Dans le champ ***Culture de l'arborescence***, spécifier une ***Étiquette de langue***.
   ![Champ Culture de l'arborescence](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2110.png)

   {% snippet, "badgeInfo" %}
   Une liste d'étiquettes est disponible sur [cette page Microsoft](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-lcid/a9eac961-e77d-41a6-90a5-ce1a8b0cdb9c), dans un tableau sous la colonne ***Étiquette de langue***. Les étiquettes sont généralement composées de lettres minuscules représentant la langue (par exemple, *fr* pour français) suivies de lettres majuscules représentant l'emplacement ou le type (par exemple, *FR* pour la France), séparées par un trait d'union. Par exemple, *fr-FR* est l'étiquette pour le français en France. D'autres formats d'étiquettes existent également.
   {% endsnippet %}

- Cliquer sur le bouton ***Vérifier*** à côté du champ ***Culture de l'arborescence***. Une fenêtre apparaîtra pour confirmer la langue et l'emplacement. Cliquer sur ***OK*** pour la fermer.
![Vérifier la culture](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2111.png)

- Cliquer sur ***OK*** dans la fenêtre ***Arborescence*** pour sauvegarder vos modifications et redémarrer {{ fr.RDM }} pour les appliquer.

Vous avez réussi à modifier la langue de l'arborescence.
