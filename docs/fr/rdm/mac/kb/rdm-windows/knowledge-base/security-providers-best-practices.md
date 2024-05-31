---
eleventyComputed:
  title: Meilleures pratiques des fournisseurs de sécurité
  description: Les fournisseurs de sécurité existent pour chiffrer les données au repos (les informations stockées dans la base de données) en utilisant une clé partagée sur chaque instance de {{ fr.RDM }}. De cette manière, un attaquant aurait besoin de compromettre à la fois la base de données et le fournisseur de sécurité pour compromettre les données.
---
***Fournisseurs de Sécurité*** existent pour chiffrer les données au repos (les informations stockées dans la base de données) en utilisant une clé partagée sur chaque instance de {{ fr.RDM }}. De cette manière, un attaquant aurait besoin de compromettre à la fois la base de données et le fournisseur de sécurité pour compromettre les données.

Ci-dessous se trouve une liste des ***types de sécurité*** disponibles.

* ***Par défaut*** : Ne définit aucun fournisseur de sécurité.
* ***Phrase secrète partagée*** : Chiffre les données en utilisant un mot de passe stocké sur chaque instance de {{ fr.RDM }}. La ***v3*** utilise un algorithme de hachage plus sécurisé que la ***v2***.
* ***Certificat*** : Chiffre les données en utilisant la clé privée d'un certificat installé sur chaque poste de travail. La ***v2*** utilise un algorithme de chiffrement plus sécurisé.
* ***Fichier clé*** : Chiffre les données en utilisant la clé stockée dans un fichier installé sur chaque poste de travail.
![Types de sécurité](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2247.png)

Pour garantir un déploiement sécurisé de {{ fr.RDM }} avec SQL Server sur les postes de travail au sein d'une organisation, il est recommandé d'utiliser un certificat d'entreprise pour le chiffrement des données. Cela peut être réalisé en mettant en œuvre une configuration Active Directory ou en utilisant d'autres méthodes telles qu'un logiciel de gestion des appareils mobiles (MDM).

Cependant, il est important de reconnaître que lorsqu'un certificat est exposé à plusieurs postes de travail, il existe un risque accru qu'il soit compromis par des acteurs malveillants. Pour atténuer ce risque, nous recommandons d'utiliser un {{ fr.DVLS }} qui gère efficacement le chiffrement au repos tout en protégeant la clé de chiffrement des utilisateurs de {{ fr.RDM }}.

{% snippet, "badgeHelp" %}
Pour plus d'informations détaillées, veuillez vous référer à [Modèle de Sécurité et Chiffrement (PDF)](https://cdn.devolutions.net/documents/legal/security/security-encryption-en.pdf).
{% endsnippet %}
