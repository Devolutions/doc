---
eleventyComputed:
  title: Problèmes de connexion avec les sources de données SQL
  description: Les utilisateurs incapables de se connecter à leurs sources de données Microsoft SQL Server et Microsoft Azure SQL via {{ fr.RDM }} peuvent rencontrer des défis en raison de divers problèmes de réseau ou de configuration.
---
Les utilisateurs incapables de se connecter à leurs sources de données Microsoft SQL Server ou Microsoft Azure SQL via {{ fr.RDM }} peuvent rencontrer des défis en raison de divers problèmes de réseau ou de configuration.

## Solution

1. Ouvrir l'invite de commande ou le terminal et utiliser la commande `ping` pour vérifier la connexion réseau au serveur hébergeant la base de données SQL. Cela assure que le serveur est accessible sur le réseau.
1. Tenter de se connecter au serveur SQL en utilisant SSMS. Cette étape vérifie si les informations d'identification et les permissions réseau sont correctement configurées pour accéder à la source de données SQL.
1. Si une connexion via SSMS est établie, le problème pourrait être lié à la configuration de RDM. Essayer de recréer la connexion dans RDM pour voir si cela résout le problème.
1. Si la connexion est toujours impossible, envisager de créer une version portable de RDM. Cela pourrait contourner les problèmes de configuration spécifiques à l'application.
1. Si aucune des étapes ci-dessus ne résout le problème, le problème provient probablement des configurations ou restrictions réseau. Consulter un administrateur réseau pour diagnostiquer et résoudre davantage les problèmes de connectivité liés au réseau.

## Conseils supplémentaires
- S'assurer que les paramètres du pare-feu, tant sur votre machine locale que sur le réseau, ne bloquent pas RDM ou SQL Server.
- Vérifier s'il y a des changements récents dans les politiques de réseau ou les informations d'identification qui pourraient affecter la connectivité.
- Mettre régulièrement à jour RDM et SSMS vers les dernières versions pour éviter les problèmes de compatibilité.
