---
eleventyComputed:
  title: Configurer une entrée de partage de crédentials {{ fr.DVLS }} croisée {{ fr.VLT }}
  description: Il est possible de partager des entrées de crédentials {{ fr.DVLS }} à travers différents {{ fr.VLT }}s ou sources de données {{ fr.DVLS }}.
---
Ce sujet couvre comment partager un crédential d'un différent {{ fr.VLT }} dans le même {{ fr.DVLS }}, ou entre deux sources de données {{ fr.DVLS }}.

## Créer une entrée de partage de crédential
1. Dans {{ fr.RDM }} sélectionner une source de données {{ fr.DVLS }} et aller dans le {{ fr.VLT }} désiré.
1. Cliquer sur ***Nouvelle Entrée***.
1. Aller à ***Gestion des Crédentials*** – ***Gestion des Mots de Passe***.
1. Sélectionner {{ fr.DVLS }} et cliquer ***OK***.
![{{ fr.DVLS }}](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0156.png)
1. Entrer le ***Nom***.
![Onglet Général](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0157.png)
1. Remplir les informations dans l'onglet ***Général***;
    * ***Hôte***: L'URL vers {{ fr.DVLS }}
    * ***Utiliser "Mes Paramètres de Compte"***: Utiliser les paramètres de connexion {{ fr.DVLS }} définis dans ***Fichier*** – ***Paramètres***
    * ***Utiliser l'authentification Windows***: Utiliser l'authentification Windows pour se connecter à {{ fr.DVLS }}
    * ***Nom d'utilisateur***: Utiliser un email défini pour se connecter à {{ fr.DVLS }}
    * ***{{ fr.VLT_MAJ }}***: Cliquer sur le bouton ellipsis pour sélectionner de quel {{ fr.VLT }} obtenir le crédential
![Onglet Entrée](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0158.png)
7. Remplir les informations dans l'onglet ***Entrée***;
    * ***Défaut (crédential spécifique)***: Ce mode utilise un crédential spécifique
        * ***Crédential***: Cliquer sur le bouton ellipsis pour sélectionner quel crédential spécifique partager
    * ***Filtrage par nom***: Filtre à travers le {{ fr.VLT }} sélectionné basé sur les critères de recherche pour trouver une entrée avec un nom correspondant
        * ***Nom***: Entrer les caractères désirés
        * ***Mode***: ***Contient la valeur*** ou ***Correspondance exacte***
        * ***Sensibilité à la casse***: ***Non*** ou ***Oui***
    * ***Toujours demander avec la liste***: Demande toujours à l'utilisateur avec une liste des crédentials disponibles
8. Cliquer ***OK*** pour sauvegarder les changements et fermer cette fenêtre.
