---
eleventyComputed:
  title: Gérer la clé maîtresse
---
Utiliser ***Fichier – Gérer la Clé Maîtresse*** pour chiffrer la source de données.

La clé maîtresse empêche les utilisateurs non autorisés d'accéder à la source de données sans connaître la clé maîtresse. Il est fortement recommandé d'appliquer une clé maîtresse à la source de données si vous utilisez {{ fr.RDM }} dans un environnement portable (c.-à-d., Clé USB, Disque Dur USB).

Une clé maîtresse peut être utilisée avec les sources de données suivantes :

* {{ fr.DOD }}
* Dropbox
* Google Drive
* XML
{% snippet, "badgeInfo" %}
Depuis la version 14.0.4.0, l'utilisateur est automatiquement invité à ajouter une clé maîtresse lors de la connexion à l'une des sources de données mentionnées ci-dessus pour la première fois. La clé maîtresse est complètement optionnelle (mais fortement recommandée).
{% endsnippet %}

![Changer la Clé Maîtresse](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10079.png)
