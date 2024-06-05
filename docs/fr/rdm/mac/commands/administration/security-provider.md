---
eleventyComputed:
  title: Fournisseur de sécurité
---
Le fournisseur de sécurité est disponible depuis ***Administration – Fournisseur de Sécurité***. Le fournisseur de sécurité est responsable du chiffrement des données dans la base de données.

{% snippet, "badgeInfo" %}
Cette fonctionnalité nécessite une [Source de Données Avancée](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/).
{% endsnippet %}

{% snippet, "badgeInfo" %}
Indépendamment du fournisseur de sécurité que vous avez sélectionné, les mots de passe qui sont stockés dans le magasin de données sont TOUJOURS chiffrés en utilisant le chiffrement AES 256 bits.
{% endsnippet %}

{% snippet, "shieldNotice" %}
En utilisant un Fournisseur de Sécurité, vous assurez que personne ne peut lire vos données de configuration d'entrée, même lorsque les gens ont un accès direct à votre(vos) base(s) de données ou une sauvegarde. Vous devriez toujours utiliser ceci lorsque vous utilisez une source de données qui n'est pas locale.
{% endsnippet %}

## Paramètres
{% snippet, "badgeInfo" %}
Veuillez noter que changer de fournisseur de sécurité sur une source de données avec un grand nombre d'entrées est une opération longue.
{% endsnippet %}

{% snippet, "badgeInfo" %}
Appliquer un nouveau fournisseur de sécurité traite toute la base de données, donc nous vous conseillons de créer une sauvegarde avant cette opération.
{% endsnippet %}

1. Cliquer sur Changer les paramètres de sécurité pour changer le fournisseur de sécurité.
![Fournisseur de Sécurité - Changer les paramètres de sécurité](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10378.png)
1. Sélectionner votre nouveau type de sécurité dans le menu déroulant.
![Fournisseur de Sécurité - Type de sécurité](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10379.png)

| OPTION            | DESCRIPTION                                                      |
|-------------------|------------------------------------------------------------------|
| Aucun             | Les données de session ne seront pas chiffrées sauf pour les mots de passe. |
| Basique           | Toutes les données sont chiffrées avec une clé stockée dans {{ fr.RDM }} et il est impossible pour un système externe d'y accéder. |
| Par défaut        | C'est le mode de sécurité par défaut. Le XML n'est pas chiffré par défaut. Veuillez noter que les mots de passe sont toujours chiffrés. |
| Phrase secrète partagée | Voir ci-dessous pour plus de détails.                                      |
| Certificat        | Voir ci-dessous pour plus de détails.                                      |

## Phrase Secrète Partagée
{% snippet, "badgeWarning" %}
Si la phrase secrète est perdue, rien ne peut être fait pour récupérer les données. Toujours la copier dans un emplacement sécurisé lors de sa mise en place.
{% endsnippet %}

Toutes les données de configuration des entrées sont chiffrées avec un mélange de clé stockée dans {{ fr.RDMMAC }} et la phrase secrète que vous avez entrée. La phrase secrète est requise uniquement lors de la configuration de la source de données.

## Certificat
Si vous avez choisi Certificat comme votre Fournisseur de Sécurité, il chiffrera les données de configuration des entrées avec un mélange de clé stockée dans {{ fr.RDM }} et la clé privée contenue dans le certificat.
![Fournisseur de Sécurité Certificat](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10380.png)

| OPTION     | DESCRIPTION                                                           |
|------------|-----------------------------------------------------------------------|
| Empreinte  | Sélectionner un certificat qui existe déjà pour l'utiliser pour le chiffrement. |
