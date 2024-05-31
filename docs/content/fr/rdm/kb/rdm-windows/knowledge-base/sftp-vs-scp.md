---
eleventyComputed:
  title: Entrées SFTP vs. SCP
  description: Dans {{ fr.RDM }}, privilégier toujours les entrées SFTP aux entrées SCP sauf si SFTP ne fonctionne pas.
  keywords:
  - scp
  - sftp
---
Dans {{ fr.RDM }}, privilégier toujours les entrées SFTP aux entrées SCP sauf si SFTP ne fonctionne pas. Pour plus d'informations, voir les explications ci-dessous.

## SFTP vs. SCP

SCP n'est pas un protocole de transfert de fichiers ; c'est une commande permettant de transférer un ou plusieurs fichiers d'un hôte à un autre. Cela signifie que SCP ne prend pas en charge la possibilité de lister le contenu d'un répertoire distant. Certaines implémentations de SCP utilisent SFTP pour effectuer le listing, ce qui est plutôt contre-productif puisque vous pouvez tout aussi bien utiliser SFTP pour le transfert.

Dans {{ fr.RDM }}, pour implémenter SCP indépendamment de SFTP, des commandes non interactives sont disponibles pour faire ce que SCP ne prend pas en charge. Bien que cela fonctionne, cela est sujet à des problèmes liés à divers paramètres du serveur, y compris la langue. Cela pose également problème pour les grands répertoires et les transferts.

En revanche, SFTP est un protocole complet et formel qui garantit une excellente interopérabilité et s'adapte très bien aux grands répertoires et transferts. Les paramètres de langue du serveur n'ont aucun effet sur les données échangées, et les fichiers sont mieux protégés pendant les transferts contre les actions prises par d'autres parties.
