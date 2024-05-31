---
eleventyComputed:
  title: Plantage de Windows dans un environnement Citrix
---
Lorsqu'un serveur RDS demande des identifiants, il utilise une dll et si nous le sollicitons trop souvent par de nombreux utilisateurs, Windows va planter.

## Solution
Toutes les sessions doivent être configurées pour ne pas utiliser l'invite de Windows. Dans les propriétés des entrées :
1. Changer le type d'identifiants à ***Default***.
1. Cocher la case ***Always ask password***.

Si vous avez de nombreuses entrées à modifier, suivre ces étapes (Une sauvegarde de votre base de données est recommandée) :
1. Sélectionner chaque session RDP que vous devez éditer (une [recherche avancée](/rdm/windows/commands/view/panels/search/advanced/) peut être utilisée).
1. Faire un clic droit sur celles-ci et sélectionner ***Edit – Edit (Special Actions)***.
![!!KB4628](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4628.png)
1. Sélectionner ***Custom Powershell Command***.
![!!KB4629](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4629.png)
1. Et dans la fenêtre suivante, taper le texte ci-dessous :
   ```powershell
   $connection.PromptCredentials = $true;
   $RDM.Save();
   ```
1. Cliquer sur ***OK***. Ensuite, chaque session sera configurée avec la demande d'identifiants.
