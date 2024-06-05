---
eleventyComputed:
  title: "{{ fr.RDMMAC }} configurer 1Password"
  description:
---
{% snippet, "badgeInfo" %}
L'intégration des identifiants provenant des gestionnaires de mots de passe est uniquement disponible dans la version Équipe de {{ fr.RDM }}.
{% endsnippet %}

Configurer 1Password pour permettre la synchronisation de la base de données est nécessaire pour créer des entrées d'identifiants 1Password dans {{ fr.RDMMAC }}.

1. Ouvrir 1Password et sélectionner le {{ fr.VLT }} que l'on souhaite synchroniser avec {{ fr.RDMMAC }}.
![!!KB4184](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4184.png)
1. Cliquer sur ***1Password 5*** et sélectionner ***Préférences***.
![!!KB4185](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4185.png)
1. Cliquer sur ***Sync***.
![!!KB4186](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4186.png)
1. Sélectionner ***Dropbox*** si l'on souhaite créer son fichier 1Password.agilekeychain sur Dropbox, ou ***Dossier*** si l'on souhaite créer le fichier sur son ordinateur.
![!!KB4187](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4187.png)
Il est maintenant possible de créer une entrée d'identifiants 1Password dans {{ fr.RDMMAC }}.
1. Dans le champ de la base de données, sélectionner le fichier *.agilekeychain que l'on a créé dans les Préférences de Synchronisation.
![!!KB4188](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4188.png)
