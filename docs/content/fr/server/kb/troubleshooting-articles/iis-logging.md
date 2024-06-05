---
eleventyComputed:
  title: Journalisation IIS
---
Voici la description des paramètres souhaités lorsque nous diagnostiquons un problème de performance/connectivité lié à l'application client.

## Journalisation du site Web IIS

1. Ouvrir le Gestionnaire IIS et aller dans les paramètres de ***Journalisation***.
![!!KB4290](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4290.png)
2. Cliquer sur ***Sélectionner les champs***.
![!!KB4291](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4291.png)
3. Nous recommandons que, au minimum, les champs suivants soient sélectionnés :
![!!KB4292](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4292.png)

## Recyclage du pool d'applications

Le pool d'applications qui exécute en fait l'instance peut être redémarré pour une multitude de raisons. Il peut être utile de savoir quand ces recyclages se produisent ainsi que les raisons. Aller dans la section ***Pools d'applications*** du gestionnaire IIS, puis ouvrir les ***Paramètres avancés*** pour votre pool d'applications. Activer tous les ***Événements de recyclage***, cela créera une entrée de journal dans le ***Journal des événements Windows***.
![!!KB4293](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4293.png)
