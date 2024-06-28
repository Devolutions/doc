---
eleventyComputed:
  title: Modifier des dossiers en lot avec des commandes PowerShell personnalisées
  description: Pour modifier plusieurs ou tous les dossiers dans un {{ fr.VLT }} spécifique, vous devez utiliser la fonctionnalité de recherche avancée.
---
Dans {{ fr.RDM }}, pour modifier plusieurs ou tous les dossiers dans un {{ fr.VLT }} spécifique, vous devez utiliser la fonctionnalité de [recherche avancée](/rdm/commands/view/view/search/advanced/).

1. Aller à ***Affichage – Recherche – Recherche avancée*** (ou y accéder en utilisant le raccourci clavier <kbd>F11</kbd>).
![Affichage – Recherche – Recherche avancée](https://cdnweb.devolutions.net/docs/RDMW2054_2024_2.png)
1. Définir la première condition de recherche à ***Type de connexion***, puis spécifier davantage le type ***Dossier*** dans le deuxième menu déroulant.
![Recherche par dossiers](https://cdnweb.devolutions.net/docs/RDMW2055_2024_2.png)
1. Cliquer sur ***Rechercher***.
1. Sélectionner les dossiers que vous souhaitez modifier dans les résultats.
    * Utiliser <kbd>Shift</kbd>+clique pour sélectionner plusieurs dossiers un par un.
    * Utiliser <kbd>Ctrl</kbd>+<kbd>A</kbd> pour sélectionner tous les dossiers à la fois.
1. Faire un clic droit sur votre sélection et sélectionner ***Modifier – Modifier (actions spéciales)***.
![Modifier – Modifier (actions spéciales)](https://cdnweb.devolutions.net/docs/RDMW2056_2024_2.png)
1. Sélectionner l'action spéciale ***Commande PowerShell personnalisée***, puis cliquer sur ***Exécuter***.
![Commande PowerShell personnalisée](https://cdnweb.devolutions.net/docs/RDMW2057_2024_2.png)
1. Entrer votre commande PowerShell puis cliquer sur ***Ok***.

La commande sera exécutée sur tous les dossiers et les modifiera en conséquence.