---
eleventyComputed:
  title: Fournisseur de sécurité de certificat dans un environnement d'application publiée
---
Lors de la configuration d'un Fournisseur de Sécurité de Certificat dans un environnement d'application publiée (Citrix, RemoteApp, XenApp) en tant que Fournisseur de Sécurité, l'utilisateur qui exécutera {{ fr.RDM }} dans l'environnement RemoteApp (Citrix) nécessitera une autorisation de lecture sur le certificat. Si l'autorisation de lecture n'est pas correctement définie, {{ fr.RDM }} générera la boîte de dialogue d'erreur CryptographicException - Keyset does not exist.
![!!KB4208](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4208.png)

## Guide étape par étape

Ces étapes nécessitent que le certificat ait été installé avec succès sur la machine sur laquelle {{ fr.RDM }} sera exécuté.

1. Ouvrir ***Gestionnaire de Certificats de la Machine Locale*** sur la machine (certlm.msc).
1. Localiser les ***Certificats***.
1. Cliquer avec le bouton droit sur ***Certificats - Toutes les Tâches - Gérer les Clés Privées***.
![!!KB4859](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4859.png)
1. Accorder l'***autorisation de lecture*** sur le fichier de certificat au(x) groupe(s) ou utilisateur(s) approprié(s).

{% snippet, "badgeInfo" %}
L'article de blog suivant de Microsoft fournit plus de méthode sur comment trouver le fichier de certificat : [https://docs.microsoft.com/en-us/archive/blogs/dsnotes/service-failure-with-cryptographicexception-keyset-does-not-exist](https://docs.microsoft.com/en-us/archive/blogs/dsnotes/service-failure-with-cryptographicexception-keyset-does-not-exist)
{% endsnippet %}
