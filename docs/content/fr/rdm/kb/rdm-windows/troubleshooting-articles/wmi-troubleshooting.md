---
eleventyComputed:
  title: Dépannage WMI
  description: Dans notre environnement, nous exécutons essentiellement winrm quickconfig sur toutes nos machines. Pour celles qui ne sont pas jointes à un domaine, nous les ajoutons également à la liste des hôtes de confiance. Pour les machines non jointes à un domaine, il y a une difficulté supplémentaire. Si vous utilisez l'adresse IP au lieu du nom d'hôte, cela offre définitivement quelques défis.
---
{% snippet, "badgeInfo" %}
Notez que les outils à distance dans les sessions RDP ne fonctionneront pas dans {{ fr.RDM }} si vous n'avez pas WMI. Consultez ce [guide sur le WMI à distance](https://msdn.microsoft.com/en-us/library/aa389290.aspx).
{% endsnippet %}  

Dans notre environnement, nous exécutons essentiellement winrm quickconfig sur toutes nos machines. Pour celles qui ne sont pas jointes à un domaine, nous les ajoutons également à la liste des hôtes de confiance. Pour les machines non jointes à un domaine, il y a une difficulté supplémentaire. Si vous utilisez l'adresse IP au lieu du nom d'hôte, cela offre définitivement quelques défis.  

Une bonne stratégie est de faire fonctionner remoteWMI, puis de l'intégrer dans {{ fr.RDM }}. Nous aimons utiliser [WMIC](https://msdn.microsoft.com/en-us/library/aa394531(v=vs.85).aspx).

{% snippet, "badgeHelp" %}
Veuillez nous contacter à [service@devolutions.net](mailto:service@devolutions.net) pour plus d'assistance.
{% endsnippet %}  

## Problème 1
Erreur d'accès refusé.

### Solution
Assurez-vous que le compte utilisateur dispose des autorisations nécessaires pour accéder à un ordinateur à distance. Voir [Sécuriser une connexion WMI à distance (Windows)](https://docs.microsoft.com/fr-fr/windows/win32/wmisdk/securing-a-remote-wmi-connection?redirectedfrom=MSDN#setting_dcom_security_to_allow_a_user_to_access_a_computer_remotely).  

Vous pouvez également trouver des conseils de dépannage dans [Dépannage WMI (Windows)](https://docs.microsoft.com/en-us/windows/win32/wmisdk/wmi-troubleshooting?redirectedfrom=MSDN).

## Problème 2
Erreur lors de l'obtention des informations sur les produits.

### Solution
Classe WMI invalide ou classe WMI introuvable sur Windows Server 2003. Sur Windows Server 2003, Win32_Product n'est pas activé par défaut. Vous pouvez l'activer en suivant les étapes fournies dans ce [Forum Microsoft](https://social.msdn.microsoft.com/Forums/vstudio/en-US/6fb0d3ea-1ccf-4554-bdf1-79c9e24388af/invalid-class-wmi-windows-2003-server).  

## Problème 3
Test depuis un ordinateur distant.

### Solution
La commande WMIC est utilisée pour tester si vous avez accès à la machine via WMI. Vous devez entrer la commande suivante :
`wmic /NODE:"NomOrdinateur" bios get serialnumber`  

Ci-dessous un exemple avec d'autres identifiants :
`wmic /NODE:"NomOrdinateur" /user:"nomutilisateur" /password:"motdepasse" bios get serialnumber`

## Problème 4
Le chargement à partir des informations système ne fonctionne pas. Erreur lors de l'obtention des informations du Bios.

### Solution
Cette erreur peut avoir plusieurs origines. Veuillez valider les points suivants :  

* Les sessions doivent être en RDP.
* La station doit être sur le même domaine.
* Les identifiants doivent être dans la section ***Outils*** de la session et être précis.
* Tester les requêtes WMI directement depuis la station pour voir si la communication fonctionne.
