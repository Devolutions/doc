---
eleventyComputed:
  title: Erreur de synchroniseur Active Directory
---
Des entrées sont créées avec un suffixe *cnf:{guid} ou le nom d'hôte est ajouté avec cnf, et le nom de l'entrée contient également un suffixe guid.
## Solution
Ceci est un problème causé par la réplication multimaster des objets d'annuaire. Lorsqu'il y a des collisions de noms, le système renomme automatiquement l'un des comptes en ajoutant CNF pour indiquer la résolution de conflit et un GUID qui est garanti d'être unique.

Il existe une commande à exécuter pour supprimer ces objets, à savoir repadmin/removelingeringobject, veuillez consulter ces références pour la recette à suivre.

[http://technet.microsoft.com/en-us/library/bb727059.aspx et https://social.technet.microsoft.com/Forums/windowsserver/en-US/e9327be6-922c-4b9f-8357-417c3ab6a1af/cnf-remove-from-ad?forum=winserverDS](http://technet.microsoft.com/en-us/library/bb727059.aspx et https://social.technet.microsoft.com/Forums/windowsserver/en-US/e9327be6-922c-4b9f-8357-417c3ab6a1af/cnf-remove-from-ad?forum=winserverDS)
