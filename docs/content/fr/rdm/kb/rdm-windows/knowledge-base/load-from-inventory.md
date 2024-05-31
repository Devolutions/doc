---
eleventyComputed:
  title: Charger à partir des informations système
  description: Comment utiliser la fonction charger à partir des informations système dans {{ fr.RDM }}
---
***La fonction Charger à partir des informations système*** vous permet de voir la configuration d'une entrée, ce qui est utile si vous avez un grand nombre d'ordinateurs.

La fonction peut être trouvée en cliquant avec le bouton droit sur une entrée et en allant à ***Propriétés*** – ***Actif*** – ***Charger à partir des informations système***.

![Charger à partir des informations système](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6103.png)

### Types de Linux pris en charge :

- Ubuntu
- Debian

### Erreur d'informations Bios :

- Les sessions doivent être RDP.
- La station doit être sur le même domaine.
- Les identifiants doivent être dans la section ***Outils*** de la session et être précis.
- Tester les requêtes WMI directement depuis la station pour voir si la communication fonctionne.

### Erreur lors de l'obtention des informations sur les produits :

Classe WMI invalide ou classe WMI introuvable sur Windows Server 2003. Sur Windows Server 2003, Win32_Product n'est pas activé par défaut. Vous pouvez l'activer en suivant les étapes fournies dans ce [Forum Microsoft](https://social.msdn.microsoft.com/Forums/vstudio/en-US/6fb0d3ea-1ccf-4554-bdf1-79c9e24388af/invalid-class-wmi-windows-2003-server).
