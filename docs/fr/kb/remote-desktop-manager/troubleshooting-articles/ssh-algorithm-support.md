---
title: Prise en charge des algorithmes SSH
description: Pour les versions 2020.3.13.0 et ultérieures de Remote Desktop Manager, il se peut qu’un message d’erreur apparaisse lors de l’ouverture d’une session Secure Shell (SSH).
keywords:
- SSH
- Algorithme
---
Pour les versions 2020.3.13.0 et ultérieures de {{ fr.RDM }}, il se peut qu'un message d'erreur apparaisse lors de l'ouverture d'une session Secure Shell (SSH) : « Une erreur inattendue s’est produite : Code d'erreur SSH_FAIL_NO_MATCH (-3006) Unable to find a matching algorithm with the SSH server ». 
## Solution locale pour une seule entrée 
{% snippet icon.shieldCaution %} 
{{ fr.RDM }} dispose désormais de toute une gamme d'algorithmes pour les sessions de type SSH. Notez que les algorithmes **non sécurisés** sont désactivés par défaut. Il est donc recommandé de s'assurer de leur intégrité directement sur votre serveur pour en garantir la sécurité. Sinon, vous pouvez suivre les étapes ci-dessous pour résoudre votre problème. 
{% endsnippet %}
 
1. Faire un clic droit sur l'entrée, puis sélectionner ***Propriétés***. Dans les propriétés, s'assurer d'être dans ***Commun – Général*** dans le menu de gauche. 
1. Dans l'onglet ***Avancé***, définir l'option ***Prise en charge des algorithmes*** à ***Personnalisé***. 
![Prise en charge des algorithmes personnalisée](/img/fr/kb/KB2038.png) 
*Prise en charge des algorithmes personnalisée*{.caption} 
1. Cliquer sur le bouton qui est apparu à droite du paramètre ***Prise en charge des algorithmes***. 
1. Dans la nouvelle fenêtre ***SSH***, sélectionner les algorithmes manquants dans la liste. 
{% snippet icon.badgeCaution %} 
Assurez-vous de passer en revue les algorithmes dans **tous les onglets** avant de poursuivre. 
{% endsnippet %}
 
![Sélection des algorithmes manquants](/img/fr/kb/KB2039.png) 
*Sélection des algorithmes manquants*{.caption}  

5. Cliquer sur ***OK*** dans la fenêtre ***SSH***, puis sur ***OK*** dans la fenêtre des propriétés de l'entrée. 
{% snippet icon.badgeInfo %} 
Le redémarrage de {{ fr.RDM }} peut s'avérer nécessaire pour que la solution fonctionne. 
{% endsnippet %}
 
6. Tester votre connexion. Si la connexion reste impossible après avoir sélectionné les algorithmes, retourner dans l'onglet ***Avancé*** dans les propriétés de l'entrée et cocher l'option ***Sauter la configuration des variables d’environnement***. Cliquer ***OK***. 
![Sauter la configuration des variables d'environnement](/img/fr/kb/KB2040.png) 
*Sauter la configuration des variables d'environnement*{.caption} 
## Solution globale pour toutes les entrées 
Il est également possible de réactiver tous les algorithmes dans {{ fr.RDM }} à l'aide du menu situé dans ***Fichier – Options – Types – Terminal – Prise en charge des algorithmes***. Il suffit de sélectionner les algorithmes manquants, puis de cliquer sur ***OK***. 
{% snippet icon.badgeCaution %} 
Assurez-vous de passer en revue les algorithmes dans **tous les onglets**. 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
Le redémarrage de {{ fr.RDM }} peut s'avérer nécessaire pour que la solution fonctionne. 
{% endsnippet %}
 
![Fichier – Options – Types – Terminal – Prise en charge des algorithmes](/img/fr/kb/KB2041.png) 
*Fichier – Options – Types – Terminal – Prise en charge des algorithmes*{.caption} 
 
## Script de commande PowerShell personnalisée 
Si le problème persiste sur une seule entrée, vous pouvez exécuter le script PowerShell ci-dessous dans {{ fr.RDM }}. 
1. Faire un clic droit sur l'entrée problématique, puis sélectionner ***Modifier – Modifier (Actions spéciales)***. 
1. Dans la fenêtre ***Modifier – Sélection de l'action spéciale***, sélectionner l'action spéciale générale ***Commande PowerShell personnalisée*** et cliquer sur ***OK***. 
![Modifier - Sélection de l'action spéciale](/img/fr/kb/KB2074.png) 
*Modifier - Sélection de l'action spéciale*{.caption} 
1. Coller le script suivant dans le champ ***Commande*** : 
```
$Connection.Terminal.AlgorithmSupportMode = &quot;Custom&quot; 
$Connection.Terminal.SshAlgorithmCipherList = &quot;aes256-gcm@openssh.com=True;aes128-gcm@openssh.com=True;aes128-cbc=True;aes192-cbc=True;aes256-cbc=True;rijndael-cbc@lysator.liu.se=True;3des-cbc=True&quot; 
$Connection.Terminal.SshAlgorithmHostKeyList = &quot;ssh-dss=True&quot; 
$Connection.Terminal.SshAlgorithmKexList = &quot;diffie-hellman-group14-sha1=True;diffie-hellman-group-exchange-sha1=True;diffie-hellman-group1-sha1=True&quot; 
$Connection.Terminal.SshAlgorithmMaclist = &quot;hmac-sha1-96=True;hmac-sha1=True;hmac-md5-96=True;hmac-md5=True&quot; 
$RDM.Save(); 
```
4. Cliquer sur ***OK***. 
![Commande PowerShell personnalisée](/img/fr/kb/KB2042.png) 
*Commande PowerShell personnalisée*{.caption} 
1. Une notification devrait confirmer le succès du script. Cliquer sur ***OK*** et retenter la connexion. 

