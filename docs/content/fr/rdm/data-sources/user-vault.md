---
eleventyComputed:
  title: "{{ fr.UVLT_MAJ }}"
  status: Sujet disponible en langue allemande
---
Le ***{{ fr.UVLT }}*** est un {{ fr.VLT }} centré sur l'utilisateur pour des entrées de tout type. Il permet à chaque utilisateur de créer des entrées auxquelles lui seul peut accéder.
{% snippet, "badgeInfo" %}
Le {{ fr.UVLT }} est disponible pour toutes les [Sources de Données Avancées](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/).
{% endsnippet %}

![{{ fr.NPANE }} – {{ fr.UVLT_MAJ }}](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11205.png)

## Une note sur les Identifiants

Les identifiants dans le {{ fr.UVLT }} peuvent être utilisés de deux manières :

1. Depuis une session en utilisant la ***recherche {{ fr.UVLT }}***.
1. Lors de l'utilisation de la fonctionnalité ***Paramètres Spécifiques à l'Utilisateur***.

Ces restrictions peuvent facilement être comprises lorsque vous gardez à l'esprit que le {{ fr.UVLT }} est en fait contenu dans la zone utilisateur de la base de données. Il doit être utilisé depuis le {{ fr.UVLT }}, ou en utilisant notre mécanisme d'extension qui est spécifique à l'utilisateur.