---
eleventyComputed:
  title: Clé non présente dans le dictionnaire
---
Après la mise à niveau, {{ fr.RDM }} affiche le message d'erreur suivant : La clé donnée n'était pas présente dans le dictionnaire.
![!!KB4900](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4900.png)

## Solution

Il s'agit d'un bug de Microsoft, mais il existe une solution de contournement.

1. Dans {{ fr.RDM }}, aller à ***Fichier – Sources de données***.
1. Sélectionner votre source de données.
1. Cliquer ***Modifier - Avancé - Plus de paramètres***.
1. Dans le champ ***Valeur du partenaire de basculement***, taper un ou plusieurs espaces.
1. Cliquer ***OK***.
![!!KB4901](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4901.png)