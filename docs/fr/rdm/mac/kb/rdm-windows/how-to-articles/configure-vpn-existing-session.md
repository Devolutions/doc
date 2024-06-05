---
eleventyComputed:
  title: Configurer un VPN avec une session existante
---
Suivre cette procédure pour configurer dans {{ fr.RDM }} une entrée VPN avec une session existante.

Dans cet exemple, nous lançons d'abord une entrée de session ***Site Web*** puis le RDP.

Pour cela, vous devrez configurer un VPN à l'intérieur de la session RDP et ce VPN lancera l'entrée de session ***Site Web***.

## Méthode

Vous devrez d'abord créer une entrée de session ***Site Web*** avec l'URL puis faire ce qui suit :

1. Aller dans les ***Propriétés*** de votre seconde entrée RDP, sous ***VPN/SSH/Gateway***.
1. Définir ***Ouvrir*** sur ***Toujours connecter***.
1. Définir ***Type*** sur ***Session***.
![!!KB4491](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4491.png)
1. Aller sous l'onglet ***Paramètres*** en haut.
1. Utiliser le bouton ellipsis (...) pour sélectionner l'entrée de session ***Site Web*** que vous avez créée.
![!!KB4492](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4492.png)

Une fois cela fait, utiliser la fonctionnalité {{ fr.RDMJ }} pour lancer votre seconde entrée RDP qui ouvrira d'abord l'entrée de session ***Site Web*** que vous avez configurée comme un VPN pour établir la connexion.
