---
eleventyComputed:
  title: Télécharger le plugin KeePass
  description: Vous avez besoin du plug-in KeePass pour envoyer les identifiants à {{ fr.RDM }}.
  keywords:
  - KeePass
  - Plugin
---
{% youtube 'J9BXNjsLYhI' %}

Vous avez besoin du plug-in KeePass pour envoyer les identifiants à {{ fr.RDM }} (RDM).

![Le plug-in KeePass n'est pas installé](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4021.png)

{% snippet, "badgeCaution" %}
KeePass 1.X n'est pas pris en charge.
{% endsnippet %}

1. En raison des modifications apportées dans {{ fr.RDM }} concernant l'add-on, vous devrez télécharger manuellement le plugin KeePass en utilisant ce lien : [Plugin KeePass](https://cdn.devolutions.net/download/Devolutions.RemoteDesktopManager.KeePassPlugin.2.1.2.0.zip).
1. Une fois le téléchargement terminé, copier les fichiers .dll dans le dossier d'installation de KeePass (vous pouvez localiser votre dossier d'installation KeePass avec l'aide du Centre d'aide KeePass).
{% snippet, "badgeCaution" %}
L'application KeePass doit être en cours d'exécution et la base de données doit être ouverte.
{% endsnippet %}

3. Dans {{ fr.RDM }}, créer une entrée KeePass et valider que le plug-in KeePass est maintenant installé.

{% snippet, "badgeInfo" %}
L'entrée KeePass est uniquement prise en charge avec {{ fr.RDM }} Team.
{% endsnippet %}

   ![Le plug-in KeePass est installé](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4022.png)

   {{ fr.RDM }} sélectionnera par défaut la base de données ; cette option peut être remplacée en entrant manuellement le chemin. {{ fr.RDM }} peut également prendre en charge la liaison avec plusieurs bases de données KeePass simultanément. Pour cela, ajouter tous les chemins séparés par des points-virgules.

4. Dans l'onglet ***Entrée***, choisir votre méthode préférée. C'est là que vous pouvez entrer votre Identificateur Unique Universel (UUID) et le nom de l'entrée dans la base de données, ou être toujours invité avec une liste.
![Onglet Entrée KeePass](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4023.png)
