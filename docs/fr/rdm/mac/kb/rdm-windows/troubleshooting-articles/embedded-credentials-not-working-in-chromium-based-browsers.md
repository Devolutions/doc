---
eleventyComputed:
  title: Les identifiants intégrés ne fonctionnent pas dans les navigateurs basés sur Chromium
  description: Google Chrome, et donc tous les navigateurs web basés sur Chromium, ne prennent plus en charge les identifiants intégrés dans les URL.
---
Google Chrome, et donc tous les navigateurs web basés sur Chromium, ne prennent plus en charge les identifiants intégrés dans les URL. En conséquence, il n'est plus possible de pousser directement les identifiants dans une invite d'authentification basique.

## Solution
Dans {{ fr.RDM }}, un macro de frappe peut être configuré pour saisir automatiquement les noms d'utilisateur et les mots de passe :

1. Sélectionner l'entrée à modifier, puis aller dans ***Propriétés*** - ***Connexion*** - ***Événements***.

1. Dans l'onglet ***Après ouverture***, définir le temps d'attente initial à 2 ou 3 secondes, et entrer dans la boîte de macro de frappe : $USERNAME${TAB}$PASSWORD${ENTER}

![!!Macro de frappe](https://cdnweb.devolutions.net/docs/RDMW4043_2024_1.png)

3. Aller dans ***Propriétés*** - ***Sécurité*** - ***Paramètres de sécurité***, et s'assurer que la case à cocher ***Autoriser le mot de passe dans la variable*** est cochée.

![!!Autoriser le mot de passe dans la variable](https://cdnweb.devolutions.net/docs/RDMW4044_2024_1.png)

En utilisant cette méthode, les noms d'utilisateur et les mots de passe devraient être automatiquement saisis au lancement de la session.
