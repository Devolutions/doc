---
eleventyComputed:
  title: Changer le port d'écoute du serveur d'enregistrement après l'installation
---
Ce sujet explique comment changer le port d'écoute du serveur d'enregistrement après avoir installé {{ fr.DVLS }} avec le {{ fr.DVLSCONSOLE }}.

## Étapes
1. Dans le {{ fr.DVLSCONSOLE }}, aller à l'onglet ***Companions***.
1. Dans la section ***Recording Server***, cliquer sur ***Explorer***.
![Explorer](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0062.png)
1. Cela ouvrira une fenêtre de l'Explorateur Windows, ouvrir le dossier ***collector***.
1. Faire un clic droit sur **collector.cfg** et l'ouvrir avec un éditeur.
1. Changer la valeur ***<Port></Port>*** pour celle désirée.
1. Fermer le document et sauvegarder les changements.
1. Se connecter à l'interface web de {{ fr.DVLS }} en tant qu'administrateur.
1. Aller à ***Administration*** – ***Paramètres Système*** – ***Recording Server***.
1. Changer le ***Port*** pour correspondre aux changements effectués à l'étape 5.
![Port](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0063.png)
1. Retourner à {{ fr.DVLS }}, trouver et ouvrir l'application Windows ***Services***.
1. Trouver et sélectionner ***Devolutions Recording Collector***, puis cliquer sur ***Redémarrer le service***.
