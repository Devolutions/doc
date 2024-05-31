---
eleventyComputed:
  title: Problèmes de certificat TLS invalide pour l'enregistrement de session via {{ fr.DGW }}
  description: Si vous rencontrez des problèmes avec l'enregistrement de session via {{ fr.DGW }}, cela peut être dû à un certificat TLS invalide.
---
Si vous rencontrez des problèmes avec l'enregistrement de session via {{ fr.DGW }}, cela peut être dû à un certificat TLS invalide. Il existe plusieurs raisons pour lesquelles un certificat TLS pourrait être considéré comme invalide. Voici les causes les plus courantes :
* **Certificat mal configuré** : Configuration ou installation incorrecte du certificat TLS.
* **Inadéquation de domaine** : Le certificat est émis pour un domaine différent (par exemple, certificat émis pour *example.loc* mais l'adresse de destination de l'hôte est *not-example.loc*).
* **Rupture dans la chaîne de confiance** : L'identité de l'émetteur du certificat ne peut pas être vérifiée.
* **Date/heure incorrecte sur la machine cliente** : Si la date/l'heure locale sur la machine cliente est incorrecte, le certificat peut être considéré comme expiré s'il dépasse la date d'expiration du certificat.
* **Structure de certificat brisée** : Le certificat a une signature numérique invalide ou d'autres problèmes structurels.
* **Algorithme de hachage obsolète** : Le certificat utilise uniquement l'algorithme de hachage SHA-1, qui est obsolète et n'est plus considéré comme sécurisé.
* **Certificat révoqué** : Le certificat a été révoqué par l'autorité émettrice.
* **Certificat auto-signé et Sophos** : Lors de l'utilisation d'un certificat auto-signé, si le client utilise Sophos, le certificat peut être remplacé par un non fiable, contournant l'option de permettre les certificats auto-signés par {{ fr.RDM }}.
