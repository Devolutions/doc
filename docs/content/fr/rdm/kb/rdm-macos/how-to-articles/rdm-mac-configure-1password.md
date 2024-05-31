---
eleventyComputed:
  title: "{{ fr.RDMMAC }} configurer 1Password"
  description:
---
{% snippet, "badgeInfo" %}
L'intégration des identifiants des gestionnaires de mots de passe est uniquement disponible dans la version Équipe de {{ fr.RDM }}.
{% endsnippet %}

Vous pouvez créer des entrées d'identifiants 1Password dans {{ fr.RDMMAC }}. Cependant, 1Password doit être configuré pour permettre la synchronisation de la base de données.

1. Ouvrir 1Password et sélectionner le {{ fr.VLT }} que vous souhaitez synchroniser avec {{ fr.RDMMAC }}.
![!!KB4184](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4184.png)
1. Cliquer sur ***1Password 5*** et sélectionner ***Préférences***.
![!!KB4185](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4185.png)
1. Cliquer sur ***Sync***.
![!!KB4186](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4186.png)
1. Sélectionner ***Dropbox*** si vous souhaitez créer votre fichier 1Password.agilekeychain sur Dropbox, ou ***Dossier*** si vous souhaitez créer le fichier sur votre ordinateur.
![!!KB4187](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4187.png)
Vous pouvez maintenant créer une entrée d'identifiants 1Password dans {{ fr.RDMMAC }}.
1. Dans le champ de la base de données, sélectionner le fichier *.agilekeychain que vous avez créé dans les Préférences de Synchronisation.
![!!KB4188](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4188.png)
