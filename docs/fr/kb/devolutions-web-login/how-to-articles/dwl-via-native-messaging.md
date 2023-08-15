---
title: Devolutions Web Login via la messagerie native
---
{{ fr.DWL }} peut fonctionner sans employer le protocole HTTP(S) en utilisant la messagerie native. Voici comment s’y prendre : 
1. Dans le navigateur, cliquer sur l’icône de l’extension {{ fr.DWL }}, puis cliquer sur ***Paramètres***. 
1. Sous ***Sources de données***, cliquer sur ***{{ fr.RDM }}***. 
1. Cliquer sur ***Avancé*** et cocher la case ***Activer la messagerie native*** et ***Enregistrer***.  
![!!KB4008.png](https://webdevolutions.azureedge.net/docs/fr/kb/KB4008.png) 
1. Dans {{ fr.RDM }}, aller dans ***Fichier - Options - Extensions de navigateur - Avancé***.  
![!!KB4007.png](https://webdevolutions.azureedge.net/docs/fr/kb/KB4007.png) 
1. Cocher la case ***Activer la messagerie native***. 
1. Décocher la case ***Activer écouteur HTTP***, puis cliquer sur ***OK***. 
1. Aller dans le fichier d’installation de {{ fr.RDM }} installé par défaut dans **\Program Files (x86)\Devolutions\Remote Desktop Manager**. 
1. Ouvrir le fichier com.devolutions.rdmnativemessaging.json. 
1. Copier ces quelques lignes de code dans le fichier, puis sauvegarder. 
```
{  
"name": "com.devolutions.rdmnativemessaging",  
"description": "{{ fr.DWL }}",  
"path": "RemoteDesktopManager.NativeMessagingHost.exe",  
"type": "stdio",  
"allowed_origins": [  
"chrome-extension://neimonjjffhehnojilepgfejkneaidmo/",  
"chrome-extension://ddloeodolhdfbohkokiflfbacbfpjahp/"  
]  
}  
```
10. Sur le bureau, ouvrir l’ ***Éditeur du Registre***. 
1. Aller dans HKLM\Software\Google\Chrome\NativeMessagingHosts. 
1. Vérifier que la clé com.devolutions.rdmnativemessaging existe bel et bien à cet endroit. Dans le cas contraire, en créer une avec le même nom. 
1. Changer la valeur de chaîne par défaut pour qu’elle corresponde au chemin complet du fichier ***com.devolutions.rdmnativemessaging.json*** dans l’installation de {{ fr.RDM }}. 
1. Aller dans HKCU\Software\Google\Chrome\NativeMessagingHosts. 
1. Vérifier que la clé com.devolutions.rdmnativemessaging existe bel et bien à cet endroit. Dans le cas contraire, en créer une avec le même nom. 
1. Changer la valeur de chaîne par défaut pour qu’elle corresponde au chemin complet du fichier ***com.devolutions.rdmnativemessaging.json*** dans l’installation de {{ fr.RDM }}. 
1. Redémarrer {{ fr.RDM }}. 
1. Redémarrer {{ fr.DWL }} (ce redémarrage peut s’effectuer en désactivant, puis en réactivant {{ fr.DWL }} dans l’option ***Gérer les extensions*** du navigateur). 

