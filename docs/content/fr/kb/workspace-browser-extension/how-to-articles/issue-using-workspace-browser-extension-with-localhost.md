---
eleventyComputed:
  title: Problème lors de l'utilisation de {{ fr.DWL }} avec Localhost et HTTPS
---
Il est peu probable que {{ fr.DWL }} fonctionne un jour avec HTTPS. Voici quelques-unes des raisons :  
1. Il est nécessaire de générer un certificat, ce qui entraîne de nombreux problèmes de communication avec les [Certificats pour localhost](https://letsencrypt.org/fr/docs/certificates-for-localhost/) des applications natives. 
1. Même si un certificat est généré, une erreur de type ::ERR_CERT_AUTHORITY_INVALID devrait apparaître puisque le certificat est auto signé et que Chrome localhost bloque de telles requêtes.   
1. Il sera nécessaire d’ ***Autoriser les certificats invalides pour les ressources chargées à partir de localhost*** dans Chrome, mais cette méthode n’est pas recommandé chrome://flags/#allow-insecure-localhost.  

La seule vraie manière de contourner ce problème est d’utiliser la messagerie native : [DWL via la messagerie native](/fr/kb/devolutions-web-login/how-to-articles/dwl-via-native-messaging/). 

