---
eleventyComputed:
  title: Recycler le pool d'applications {{ fr.DVLS }} chaque nuit
---
La valeur par défaut définie dans les paramètres ***Intervalle de Temps Régulier*** des paramètres avancés d'un pool d'applications IIS est utilisée pour recycler le pool d'applications toutes les 29 heures. Parfois, il est nécessaire de recycler le pool d'applications chaque nuit pour éviter d'obtenir une application web non réactive.

1. Ouvrir le Gestionnaire IIS.
2. Développer l'arborescence et sélectionner le nœud ***Pools d'Applications***.
![!!KB4135](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4135.png)
1. Sélectionner le pool d'applications {{ fr.DVLS }} et ouvrir le menu ***Paramètres Avancés*** depuis le volet Actions sur la droite.
![!!KB4136](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4136.png)
1. Faire défiler la liste en bas et définir l'***Intervalle de Temps Régulier*** à la valeur 0.
![!!KB4137](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4137.png)
1. Sélectionner le paramètre ***Heures Spécifiques*** et cliquer sur le bouton des points de suspension.
![!!KB4138](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4138.png)
1. Cliquer sur le bouton ***Ajouter*** dans la boîte de dialogue ***Éditeur de Collection TimeSpan*** pour ajouter une nouvelle entrée.
![!!KB4139](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4139.png)
1. Définir l'heure à laquelle le pool d'applications sera recyclé. Cette heure doit être définie au format 24 heures. La capture d'écran suivante est définie pour recycler chaque nuit à 1h00.
![!!KB4140](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4140.png)
1. Enfin, cliquer sur ***OK*** pour sauvegarder la modification.
