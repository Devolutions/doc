---
eleventyComputed:
  title: Erreurs de configuration du fournisseur de sécurité de certificat
  description: Occasionnellement, configurer des fournisseurs de sécurité de certificat peut entraîner des erreurs.
---
Occasionnellement, configurer des fournisseurs de sécurité de certificat peut entraîner des erreurs. Pour effectuer le chiffrement à l'aide du certificat, l'application doit accéder à la clé privée du certificat, ce qui peut parfois causer des problèmes.

{% snippet, "badgeInfo" %}
D'abord essayer de résoudre le problème en exécutant {{ fr.RDM }} en mode administrateur pour écarter toute erreur de permission commune.
{% endsnippet %}

### Erreurs de permission communes

|   |
|---|
| `Une erreur s'est produite en tentant d'accéder à la clé privée du certificat. (0x80100001, SCARD_F_INTERNAL_ERROR)`<br><br>Si vous utilisez un certificat de carte à puce YubiKey, veuillez vous référer à [Dépannage SCARD_F_INTERNAL_ERROR](https://support.yubico.com/hc/en-us/articles/360013718020-Troubleshooting-SCARD-F-INTERNAL-ERROR). Cette erreur est causée par un problème interne avec la configuration de Yubikey. Ils recommandent d'activer la journalisation de débogage pour diagnostiquer le problème avec le Yubikey. |
| `Invite de carte à puce annulée. (0x8010006E, SCARD_W_CANCELLED_BY_USER)`<br><br>L'invite d'identification de carte à puce a été annulée, ce qui a empêché l'accès à la clé privée. |
| `Accès refusé (0x80090010, NTE_PERM)`<br><br>L'application n'a pas pu accéder à la clé privée du certificat en raison de problèmes de permission.<ul><li>Cela pourrait également être causé par l'annulation de l'invite du NIP du certificat.</li><li>L'utilisateur n'est pas autorisé à lire la clé privée du certificat.</li></ul> |
| `Impossible d'ouvrir le conteneur de clés cryptographiques Windows. (0x80090016, NTE_BAD_KEYSET)`<br><br>L'application n'a pas pu accéder à la clé privée du certificat dans le conteneur de clés cryptographiques Windows.<br><br>Ce problème pourrait être causé par des problèmes de permission ou par une clé inexistante ou corrompue. Ce dernier pourrait se produire si l'utilisateur change son mot de passe, entraînant la rotation des clés DPAPI et par conséquent empêchant le déchiffrement réussi des conteneurs de clés. |
