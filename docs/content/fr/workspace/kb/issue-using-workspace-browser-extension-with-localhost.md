```
---
eleventyComputed:
  title: Problème d'utilisation du {{ fr.WBEX }} avec localhost avec HTTPS
---
Le {{ fr.WBEX }} ne fonctionnera probablement jamais avec HTTPS pour plusieurs raisons :

1. Générer un certificat, ce qui causera beaucoup de problèmes lors de la communication avec des applications natives [Certificats pour localhost](https://letsencrypt.org/docs/certificates-for-localhost/)
2. Même si vous pouviez générer un certificat, vous obtiendriez net::ERR_CERT_AUTHORITY_INVALID parce que le certificat sera auto-signé et sur localhost Chrome bloquera les requêtes.
3. Vous devrez cocher le drapeau ***Autoriser les certificats invalides pour les ressources chargées depuis localhost*** dans Chrome, ce qui n'est pas recommandé à chrome://flags/#allow-insecure-localhost

La seule solution de contournement est donc d'utiliser la messagerie native : [{{ fr.WBEX }} via Messagerie Native](/workspace/kb/workspace-browser-extension-via-native-messaging/)
```
