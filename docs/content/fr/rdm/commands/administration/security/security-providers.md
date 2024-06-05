---
eleventyComputed:
  title: Fournisseurs de sécurité
  description: Le fournisseur de sécurité permet de chiffrer le contenu de la source de données. Pour accéder au fournisseur de sécurité, naviguer vers Administration – Fournisseur de sécurité.
---
{% youtube 'phg2jL9fsIQ' %}

Le ***Fournisseur de Sécurité*** permet de chiffrer le contenu de la source de données. Pour accéder au fournisseur de sécurité, naviguer vers ***Administration – Fournisseur de Sécurité***.

{% snippet, "badgeInfo" %}
Cette fonctionnalité nécessite une [Source de Données Avancée](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/).
{% endsnippet %}

Indépendamment du fournisseur de sécurité sélectionné, les mots de passe stockés dans les sources de données sont **TOUJOURS** chiffrés en utilisant le chiffrement AES 256 bits.

Lors de la configuration d'un Fournisseur de Sécurité Certificat dans un environnement d'application publiée (Citrix, RemoteApp, XenApp) comme Fournisseur de Sécurité, l'utilisateur qui exécutera {{ fr.RDM }} dans l'environnement RemoteApp (Citrix) nécessitera une ***autorisation de lecture*** sur le certificat.

Si l'***autorisation de lecture*** n'est pas correctement définie, {{ fr.RDM }} générera la boîte de dialogue d'erreur CryptographicException - Keyset does not exist. Suivre [Fournisseur de Sécurité Certificat dans un Environnement d'Application Publiée](/rdm/kb/rdm-windows/how-to-articles/certificate-security-provider-published-app-environment/) pour résoudre le problème.

En utilisant un fournisseur de sécurité, vous assurez que personne ne peut lire les données de configuration des entrées, même lorsque les personnes ont un accès direct à la base de données ou à une sauvegarde. Les sources de données partagées devraient toujours être sécurisées avec un fournisseur de sécurité.

{% snippet, "shieldCaution" %}
Avant d'appliquer un nouveau fournisseur de sécurité ou de changer un fournisseur existant, assurez-vous que tous les utilisateurs sont déconnectés de la source de données. Si vous changez un Passphrase Partagé ou Certificat existant, veuillez noter que les utilisateurs récupéreront l'accès à la source de données lorsqu'ils entreront le nouveau Passphrase Partagé ou Certificat sur leur ordinateur.
{% endsnippet %}

## Paramètres

Veuillez noter que changer un fournisseur de sécurité sur une source de données avec un grand nombre d'entrées est une opération longue.

{% snippet, "badgeCaution" %}
Appliquer un nouveau fournisseur de sécurité traite toute la base de données, donc nous vous conseillons de créer une sauvegarde avant cette opération.
{% endsnippet %}

1. Aller vers ***Administration*** – ***Fournisseur de Sécurité*** dans le ruban de {{ fr.RDM }}.
1. Cliquer sur ***Changer les Paramètres de Sécurité*** pour changer le fournisseur de sécurité.
![Fournisseur de Sécurité](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6226.png)
1. Sélectionner un type de sécurité dans la liste déroulante.
![Type de Sécurité](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6227.png)

| OPTION           | DESCRIPTION                                                                                                                  |
|------------------|------------------------------------------------------------------------------------------------------------------------------|
| Par défaut          | C'est le mode de sécurité par défaut. Le XML n'est pas chiffré par défaut. Veuillez noter que les mots de passe sont toujours chiffrés. |
| Passphrase partagé (V2) | Le fournisseur de sécurité chiffre tout le XML en utilisant AES avec un passphrase mélangé à une clé privée. Le passphrase sera demandé une fois sur chaque machine. |
| Passphrase partagé (V3) | Le fournisseur de sécurité chiffre tout le XML avec un passphrase. Le passphrase sera demandé une fois sur chaque machine.                                                                        |
| Certificat      | Configurer un Certificat pour le Fournisseur de Sécurité. Nécessite des privilèges élevés.  
| Certificat (V2)     | Le fournisseur de sécurité chiffre tout le XML en utilisant la clé privée d'un certificat.                                                                 |
| Fichier clé     | Le fournisseur de sécurité chiffre tout le XML en utilisant un fichier clé fourni par vous. 

## Passphrase Partagé

{% snippet, "shieldWarning" %}
Si le passphrase est perdu, rien ne peut être fait pour récupérer les données. Lors de l'utilisation d'un passphrase, toujours le copier dans un emplacement sécurisé.
{% endsnippet %}

![Fournisseur de Sécurité - Passphrase Partagé](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6228.png)

Les données de configuration des entrées sont chiffrées en utilisant un mélange d'une clé stockée dans {{ fr.RDM }} et le passphrase que vous avez entré.

Le passphrase est requis uniquement lors de la configuration de la source de données. Une politique peut être activée pour toujours demander le passphrase lors de la connexion à la source de données.

Lors de la configuration d'un fournisseur de sécurité avec un passphrase partagé, vous avez le choix de sauvegarder ou non dans le registre. {{ fr.RDM }} essaiera d'abord de le sauvegarder sur le LOCAL_MACHINE, si impossible il le sauvegardera dans le CURRENT_USER à la place.

* **HKEY_CURRENT_USER\SOFTWARE\RemoteDesktopManager<Datasource ID>.shk**
* **HKEY_LOCAL_MACHINE\SOFTWARE\RemoteDesktopManager<Datasource ID>.shk**

Si l'option n'est pas activée, alors le passphrase est sauvegardé localement à l'emplacement suivant :

* **%LOCALAPPDATA%\Devolutions\RemoteDesktopManager<Datasource ID>.shk**

Dans un environnement de Services Terminal, il devrait être sauvegardé à cet emplacement :

* **%APPDATA%\Devolutions\RemoteDesktopManager<Datasource ID>.shk**

Dans une installation portable de {{ fr.RDM }}, le passphrase sera sauvegardé au même emplacement que l'instance portable de {{ fr.RDM }}.

## Certificat

Lors du choix de ***Certificat*** comme Fournisseur de Sécurité, les données de configuration des entrées sont chiffrées en utilisant un mélange d'une clé stockée dans {{ fr.RDM }} et la clé privée contenue dans le certificat.
![Fournisseur de Sécurité - Certificat](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6229.png)

| OPTION    | DESCRIPTION                                                                                   |
|-----------|-----------------------------------------------------------------------------------------------|
| Emplacement  | Indiquer l'emplacement du certificat. Sélectionner entre :<br><ul><li>***Utilisateur actuel***</li><li>***Machine locale***</li></ul> |
| Magasin     | Indiquer l'emplacement du magasin du certificat. Sélectionner entre :<br><ul><li>***Autres personnes***</li> <li>***Autorités de Certification Racine de Confiance***</li> <li>***Certification Intermédiaire***</li> <li>***Certificats Non Fiables***</li> <li>***Personnel***</li> <li>***Autorités de Certification Racine de Confiance***</li> <li>***Personnes de Confiance***</li> <li>***Éditeur de Confiance***</li></ul> |
| Empreinte| Sélectionner un certificat RSA existant.                                                           |

### Créer Certificat

Il est possible de créer un certificat auto-signé en cliquant sur ***Créer Certificat***.
![Certificat Auto-Signé](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6230.png)

| OPTION                    | DESCRIPTION                                                                                     |
|---------------------------|-------------------------------------------------------------------------------------------------|
| Nom commun               | Nom du certificat.                                                                        |
| Taille de clé (bits)           | Indiquer la taille de clé (bits) du certificat. Sélectionner entre :<br><ul><li>384</li><li>512</li><li>1024</li><li>2048</li><li>4096</li><li>8192</li><li>16384</li></ul> |
| Valide de                | Date de début du certificat.                                                                  |
| Valide jusqu'à                  | Date de fin du certificat.                                                                    |
| Méthode de sauvegarde       | Sauvegarder le certificat comme un fichier pfx et sécuriser ce certificat avec un mot de passe. Indiquer l'emplacement et le magasin pour sauvegarder le certificat.                   |
| Mot de passe | Spécifier un mot de passe pour le certificat.                                |
