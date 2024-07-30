---
eleventyComputed:
  title: Le client web RDP n'apparaît pas
  description: Si vous ne parvenez pas à lancer le client web RDP, vérifiez si vous avez les exigences nécessaires.
  keywords:
  - rdp
  - client web
---
Si vous ne parvenez pas à lancer le client web RDP dans l'interface web de {{ fr.DVLS }}, vérifier si vous avez les exigences nécessaires en utilisant les solutions ci-dessous.

## Solutions

### Licences
Une licence [Gateway](/dgw/overview/what-is-dgw/) doit être attribuée à l'utilisateur, ainsi qu'une licence [{{ fr.RDM }}](/rdm/commands/administration/management/licenses/) ou une licence [{{ fr.DLAUNCHER }}](/server/launcher/installation/launcher-license-registration/). Si vous n'avez pas l'une de ces licences, le bouton ***Ouvrir dans le client web*** qui permet d'ouvrir l'entrée RDP dans un client web ne s'affichera pas.
![Ouvrir dans le client web (Aperçu)](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2163.png)

### {{ fr.DGW }}
{{ fr.DGW }} est requis pour ouvrir une session RDP dans le client web de {{ fr.DVLS }}. Si vous avez un Gateway installé, vérifiez sa [configuration](/dgw/server/server-configuration/).

### Permission de voir le mot de passe
Vous devez avoir la permission ***Voir le mot de passe*** pour lancer la session RDP.

Pour vérifier si cette permission vous a été accordée, sélectionnez votre entrée dans l'interface web de {{ fr.DVLS }}, puis cliquez sur l'onglet ***Permissions***. Si vous voyez une coche verte à côté de la permission ***Voir le mot de passe***, vous avez les permissions appropriées et votre problème est ailleurs. Si vous avez une croix rouge à la place, vous n'avez pas cette permission. Si vous pensez que vous devriez l'avoir, contactez votre administrateur.
![Permission de voir le mot de passe](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2162.png)
