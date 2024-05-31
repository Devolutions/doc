```
---
eleventyComputed:
  title: "{{ fr.WBEX }} résolution des problèmes de journaux de connexion"
---
Lorsqu'un problème survient avec le {{ fr.WBEX }}, le personnel de support peut vous demander de leur fournir des journaux pour fournir plus d'informations à notre département d'ingénierie, veuillez suivre ces étapes :

1. Dans votre navigateur, cliquer avec le bouton droit sur l'icône {{ fr.WBEX }}.
1. Cliquer sur ***Gérer l'Extension***.
1. Activer le ***Mode Développeur***.
![!!KB4786](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4786.png)
1. Dans la même fenêtre, sous ***Vues d'inspection***, cliquer sur le lien ***background/background.html***. Cela ouvrira la fenêtre ***DevTools*** du navigateur.
![!!KB4787](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4787.png)
1. Dans le menu pop-up de {{ fr.WBEX }}, cliquer sur le bouton ***Actualiser***.
![!!KB4788](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4788.png)
1. Dans la fenêtre ***DevTools***, cliquer sur ***Réseau***.
![!!KB4789](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4789.png)
1. Dans l'onglet ***Réseau***, l'un des éléments de la liste devrait être en rouge, c'est l'événement où {{ fr.RDM }} a échoué à récupérer les identifiants. Cliquer dessus.
1. Prendre une capture d'écran du message complet affiché et l'envoyer à [service@devolutions.net](mailto:service@devolutions.net).
```
