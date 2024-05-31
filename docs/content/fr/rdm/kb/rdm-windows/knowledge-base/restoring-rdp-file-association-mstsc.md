---
eleventyComputed:
  title: Restaurer l'association de fichier RDP avec mstsc.exe
---
Si vous avez choisi de le faire pendant l'installation, l'extension de fichier *.rdp a été associée à {{ fr.RDM }}, cela signifie qu'elle n'utilise plus le client mstsc.exe de Microsoft.

## Solution
Depuis une invite de commande élevée (exécuter en tant qu'administrateur), exécuter la commande suivante :  
`ftype RDP.File="%systemroot%\system32\mstsc.exe" "%1"`

## Conseil
Ajouter la commande ci-dessus au script de connexion de domaine pour corriger tous vos utilisateurs en une fois.
