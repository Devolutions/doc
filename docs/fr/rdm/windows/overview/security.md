---
  title: Sécurité
---
Tous les mots de passe sauvegardés dans les sources de données de l'application sont chiffrés grâce à un puissant algorithme de chiffrement rendant le contenu illisible à un utilisateur qui tenterait d'accéder aux données directement dans la base de données.  

Si vous choisissez de stocker les mots de passe localement, {{ fr.RDM }} utilisera le même mécanisme que mstsc.exe (client {{ fr.RDM }}) qui stocke les mots de passe dans le gestionnaire d'informations d'identification Windows. Notez que le mot de passe ne sera pas visible en raison du chiffrement effectué par Windows. Pour des raisons évidentes, ce choix de stockage signifie que les identifiants ne seront pas partagés.  

## Chiffrement approuvé par le Gouvernement fédéral des États-Unis 

Notre application intègre l'algorithme Advanced Encryption Standard (AES) afin de protéger vos fichiers locaux et vos données confidentielles dans la base de données.  

Cette clé de chiffrement est éprouvée et sécuritaire. AES/Rijndael, standardisé au Gouvernement fédéral des États-Unis, est approuvé par la National Security Agency (NSA) pour les informations classées très secrètes. 

## Conseils 

{% snippet icon.shieldWarning %} 
Le chiffrement des données en transit est offert nativement par nos services infonuagiques. Lorsque vous décidez d'utiliser une solution déployée sur site, le chiffrement des données en transit doit être implémenté à l'aide des outils de la technologie que vous avez choisie. La plupart des clients inquiets à propos de la sécurité ont choisi des [Sources de données avancées](/fr/rdm/windows/data-sources/data-sources-types/advanced-data-sources/). Suivez également les instructions spécifiques à la solution sélectionnée. 
{% endsnippet %}
 
{% snippet icon.shieldWarning %} 
La clé de chiffrement, étant intégrée dans l'application, est alors la même pour toutes les copies du logiciel en circulation. Il est donc fortement recommandé de suivre les indications ci-bas et d'ajouter un [Fournisseur de sécurité](/fr/rdm/windows/commands/administration/settings/security-providers/) pour chiffrer non seulement les mots de passe, mais également toutes les données dans la source de données. Ainsi, vos données au repos seront protégées grâce à une clé exclusivement gérée par vous. 
{% endsnippet %}
 
Nous vous recommandons de suivre ces conseils pour sécuriser vos données :  

* Utiliser une [Source de données avancée](/fr/rdm/windows/data-sources/data-sources-types/advanced-data-sources/) et accorder les accès aux utilisateurs en attribuant des permissions. 
* Chiffrer toutes les communications avec la base de données. 
* Utiliser les [Paramètres du système](/fr/rdm/windows/commands/administration/settings/system-settings/general/security/) pour gérer les paramètres reliés à la sécurité. 
* Utiliser un [Fournisseur de sécurité](/fr/rdm/windows/commands/administration/settings/security-providers/) pour chiffrer les entrées plutôt que de les protéger uniquement par un mot de passe. 
* Ajouter un mot de passe pour une protection additionnelle du cache local en mode hors-ligne. Accéder à ***Fichier – Options – Sécurité***. 
* Demander un mot de passe pour lancer l’application et même exiger l’authentification à 2 facteurs (2FA). Accéder à ***Fichier – Options – Sécurité***. 
* Choisir de ne pas sauvegarder le mot de passe dans la source de données lorsque possible. Les identifiants seront alors demandés lors de la première connexion. 
* Utiliser nos [Stratégies de groupe](/kb/remote-desktop-manager/how-to-articles/group-policies/) (EN) pour paramétrer le système. 
