---
eleventyComputed:
  title: "{{ fr.RDMMAC }} RDP n'a pas réussi à se connecter à l'hôte"
---
Erreur silencieuse : échec de la connexion à l'hôte (131084) pour macOS

![!!KB4066](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4066.png)
## Solution
Généralement, cette erreur se produit en raison d'un échec dans le "handshake" de pré-authentification.

Assurez-vous de vérifier les éléments suivants :

* Valider avoir entré le nom d'utilisateur, le mot de passe et le domaine appropriés pour établir la connexion ou sélectionner l'Entrée d'Identifiants appropriée.
* Valider qu'aucun ***Paramètre Spécifique à l'Utilisateur*** ou ***Paramètre Spécifique à la Machine Locale*** n'a été activé par erreur ou avec les mauvais identifiants.
* Si vous utilisez un format de nom d'utilisateur différent pour vous connecter, sélectionner le format approprié à utiliser dans le champ ***Avancé - Format du Nom d'Utilisateur***.
* Activer/Désactiver l'option ***Authentification au Niveau du Réseau*** (NLA) dans l'onglet ***Connexion*** de la session RDP.
* Activer/Désactiver l'option ***Sécurité de la Couche de Transport*** (TLS) dans l'onglet ***Connexion*** de la session RDP.
