---
eleventyComputed:
  title: Configurer {{ fr.DVLS }} pour qu'il soit toujours disponible
---
Pour éviter que l'application web {{ fr.DVLS }} se recycle périodiquement et passe en mode inactif, veuillez suivre ces instructions.

1. Ouvrir le gestionnaire IIS et déployer l'***Arborescence*** et sélectionner ***Pools d'applications***. Dans la liste ***Pools d'applications***, sélectionner votre application web et cliquer sur ***Paramètres avancés*** dans le panneau Actions à droite. Ensuite, changer l'option ***Mode de démarrage*** à la valeur ***AlwaysRunning***.
![!!KB4371](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4371.png)

1. Toujours dans les ***Paramètres avancés***, régler l'option ***Délai d'inactivité (minutes)*** à la valeur 0. Lorsque cette valeur est réglée sur une valeur différente de zéro, lors de la première connexion au site web après une période d'inactivité, le pool d'applications doit créer un nouveau processus, charger tous les cadres nécessaires. Ces opérations peuvent être très lentes.
![!!KB4370](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4370.png)

1. Enfin, régler l'option ***Intervalle de temps régulier (minutes)*** à la valeur 0. Cela empêchera le pool d'applications de se recycler périodiquement.
![!!KB4369](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4369.png)
