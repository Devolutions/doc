---
eleventyComputed:
  title: Problèmes BeyondTrust
---
## Problème 1
System.uriformatexception : URI invalide : le format de l'URI n'a pas pu être déterminé.
### Solution
Dans le champ ***Host*** de l'entrée BeyondTrust Password Safe Dashboard, s'assurer de saisir le nom du serveur comme https<area>://beyondtserver.  

Ne pas saisir l'adresse IP du serveur. Saisir l'adresse IP au lieu du nom du serveur retournera cette erreur.
## Problème 2
System.net.webexception : le serveur distant a retourné une erreur : (404)
### Solution
Dans le champ ***Host*** de l'entrée BeyondTrust Password Safe Dashboard, s'assurer de saisir le nom du serveur comme https<area>://beyondtserver.  

Ne pas saisir l'URL web pour accéder à la console depuis un navigateur web, exemple https<area>://beyondtserver/eEye.RetinaCS.Server/PasswordSafe.
## Problème 3
Non trouvé system.net.webexception : le serveur distant a retourné une erreur : (500) erreur interne du serveur.
### Solution
Dans le champ ***Host*** de l'entrée BeyondTrust Password Safe Dashboard, s'assurer de saisir le nom du serveur comme https<area>://beyondtserver.  

Ne pas saisir l'URL web pour accéder à la console depuis un navigateur web, exemple https<area>://beyondtserver/eEye.RetinaCS.Server/PasswordSafe.
## Problème 4
System.net.webexception : le serveur distant a retourné une erreur : (401) non autorisé.
### Solution
Dans le champ ***Application API*** de l'entrée BeyondTrust Password Safe Dashboard, s'assurer que la clé appropriée a été saisie.
## Problème 5
Beyond Trust Password Safe ou BeyondTrust Password Safe Dashboard est vide et aucune erreur n'est retournée.
### Solution
S'assurer que l'option ***Enable for API*** est cochée pour votre compte privilégié dans BeyondTrust.