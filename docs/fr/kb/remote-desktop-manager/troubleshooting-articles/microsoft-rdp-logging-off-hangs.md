---
eleventyComputed:
  title: Se déconnecter de Microsoft RDP bloque les fenêtres de {{ fr.RDM }}
  description: Les deux causes sont les modules d’extension RDP et l'utilisation de l'UDP dans certaines conditions.
  keywords:
  - RDP
---
Les deux causes sont les modules d'extension RDP et l'utilisation de l'UDP dans certaines conditions. 
## Solution pour les modules d'extension RDP 
Dirigez-vous vers l'onglet ***Expérience*** de votre session RDP et définir ***Charger plug-ins en mode intégré*** à ***Non***. Cette solution a un faible impact. 
![Charger plug-ins en mode intégré](https://webdevolutions.azureedge.net/docs/fr/kb/KB4021.png) 
## Solution pour l'utilisation d'UDP 
Il existe une option pour désactiver l'UDP dans {{ fr.RDM }}. 
1. Ouvrir {{ fr.RDM }} en tant qu’administrateur. 
2. Cliquer sur ***Outils – Plus d'outils – Gestionnaire RDP/RemoteApp local***. 
3. Cliquer sur ***Désactivé*** pour désactiver les ***Paramètres UDP***. 
![Paramètres UDP](https://webdevolutions.azureedge.net/docs/fr/kb/KB4022.png) 

Certains utilisateurs disent que le problème ne survient que lors de l’utilisation d’un VPN. D’autres précisent qu’il ne se produit que lorsque Windows 8 est associé à un serveur Gateway. Cette solution semble néanmoins fonctionner pour plusieurs de nos utilisateurs.  

Un changement au Registre Windows est nécessaire, alors usez de toutes les précautions habituelles (***gardez une copie!***). Veuillez consulter cet [article d’aide Microsoft](https://docs.microsoft.com/fr-ca/troubleshoot/windows-server/performance/windows-registry-advanced-users) pour plus d’information. 
### La solution consiste à désactiver le protocole UDP sur le poste de travail client 
1. Accéder à HKLM\SOFTWARE\Policies\Microsoft\Windows NT\Terminal Services\Client. 
2. Créer un DWORD nommé fClientDisableUDP, puis lui assigner une valeur de 1. 

