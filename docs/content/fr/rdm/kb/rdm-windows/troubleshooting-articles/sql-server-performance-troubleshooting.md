---
eleventyComputed:
  title: Dépannage des performances de SQL Server
---
Lorsque les performances des requêtes contre SQL Server diminuent, vérifier les éléments suivants :
## Taille des fichiers de base de données
Si votre fichier journal des transactions est énorme, il se peut que le modèle de récupération de la base de données soit défini sur COMPLET, ce qui signifie qu'il nécessite des sauvegardes régulières pour nettoyer les transactions passées.

Vous pouvez confirmer cela dans les propriétés de la base de données elle-même.

L'étape la plus urgente est d'effectuer une sauvegarde complète de la base de données.

Exécuter la déclaration suivante contre la base de données :

***exec sp_spaceused***
## VPN
Si vous travaillez via un VPN, votre pare-feu pourrait voir cette connexion comme une inondation UDP et penser qu'il est sous attaque. Résultant en ralentissant tout considérablement.

Comme solution de contournement, vous pouvez définir le VPN dans une exclusion.