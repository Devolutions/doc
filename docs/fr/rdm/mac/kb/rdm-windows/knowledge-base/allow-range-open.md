---
eleventyComputed:
  title: Autoriser l'ouverture de plage
---
Cette fonctionnalité permet d'ouvrir plusieurs machines avec la connexion rapide dans {{ fr.RDM }}

Cochez l'option Autoriser l'ouverture de plage dans ***Fichier – Paramètres – Interface utilisateur – Connexion rapide***.
![!!KB4468](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4468.png)
{% snippet, "badgeCaution" %}
Cette fonction de plage nécessite qu'un numéro séquentiel soit à la fin du même nom pour toutes les machines comme cette liste : devolutions08, devolutions09, devolutions10.
{% endsnippet %}

Utiliser cette syntaxe dans Connexion rapide : MachineNameX~Y

Par exemple : pour ouvrir les machines devolutions3, devolutions4 et devolutions5, vous écririez devolutions3~5.
