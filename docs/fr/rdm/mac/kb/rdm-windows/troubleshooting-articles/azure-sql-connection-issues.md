---
eleventyComputed:
  title: Problèmes de connexion Azure SQL
---
Voici une liste de validation pour aider à résoudre les problèmes lors de l'échec de la connexion et de la connexion avec Azure SQL dans {{ fr.RDM }}.  
* Ajouter ou créer l'utilisateur dans {{ fr.RDM }} ?
* Vérifier que l'orthographe du nom d'utilisateur dans Azure et {{ fr.RDM }} est la même ?
* Vérifier que l'orthographe du nom de la base de données dans Azure et {{ fr.RDM }} est la même ?
* Comparer la configuration de la source de données avec celle qui fonctionne d'un autre utilisateur dans ***Fichier – Sources de données***.
    * Si cela échoue toujours, [Exporter et Importer la configuration de la source de données (.rdd)](/rdm/mac/kb/rdm-windows/how-to-articles/import-export-data-sources-configuration/) de l'utilisateur pour qui cela fonctionne.
    * Demander à l'utilisateur pour qui cela fonctionne de lancer une connexion avec ses identifiants. Cela confirmera qu'une connexion peut être établie avec la base de données Azure depuis cette instance de {{ fr.RDM }}.
        * Si cela fonctionne, changer les identifiants dans {{ fr.RDM }} avec ceux de l'utilisateur initial qui échoue et retester avec ces identifiants.
        * Si cela ne fonctionne pas, installer SSMS et essayer de se connecter avec le même utilisateur qui échoue et la même méthode d'authentification pour valider qu'une connexion peut être établie avec la base de données Azure.
* Si tout échoue, contacter notre [équipe de support](mailto:service@devolutions.net).
