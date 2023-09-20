---
  title: Sécurité
---
Tous les mots de passe sauvegardés dans la base de données de l'application sont chiffrés grâce à un puissant algorithme de chiffrement rendant le contenu illisible à un utilisateur qui tenterait d'accéder aux données directement dans la base de données. 

## Chiffrement approuvé par le Gouvernement fédéral des États-Unis 

Notre application intègre l'algorithme Advanced Encryption Standard (AES) afin de protéger vos fichiers locaux et vos données confidentielles dans la base de données.  

Cette clé de chiffrement est très sécuritaire. AES/Rijndael, standardisé au Gouvernement fédéral des États-Unis, est approuvé par la National Security Agency (NSA) pour les informations classées très secrètes. 

## Conseils 

{% snippet icon.shieldWarning %} 
Le chiffrement des données en transit est offert nativement par nos services infonuagiques. Lorsque vous décidez d'utiliser une solution sur site, le chiffrement des données en transit doit être implémenté à l'aide des outils de la technologie que vous avez choisie. La plupart des clients inquiets à propos de la sécurité ont choisi des [Source de données avancée](/fr/rdm/mac/data-sources/data-sources-types/advanced-data-sources/). Suivez également les instructions spécifiques à la solution sélectionnée. 
{% endsnippet %}
 
{% snippet icon.shieldWarning %} 
La clé de chiffrement, étant intégrée dans l'application, est alors la même pour toutes les copies du logiciel en circulation. Il est donc fortement recommandé de suivre les indications ci-bas et d'ajouter un [Fournisseur de sécurité](/fr/rdm/mac/commands/administration/security-provider/) pour chiffrer non seulement les mots de passe, mais également toutes les données dans la source de données. Ainsi, vos données au repos seront protégées grâce à une clé exclusivement gérée par vous. 
{% endsnippet %}
 
Nous vous recommandons de suivre ces conseils pour sécuriser vos données :  

* Utiliser une [Source de données avancée](/fr/rdm/mac/data-sources/data-sources-types/advanced-data-sources/) et accorder les accès aux utilisateurs en attribuant des permissions. 
* Chiffrer toutes les communications avec la base de données. 
* Utiliser les [Paramètres du système](/fr/rdm/mac/commands/administration/system-settings/) pour contrôler les réglages qui affectent la sécurité. 
* Utiliser un [Fournisseur de sécurité](/fr/rdm/mac/commands/administration/security-provider/) pour chiffrer les entrées plutôt que de les protéger uniquement par un mot de passe. 
* Ajouter votre mot de passe pour une protection additionnelle du cache local en mode hors-ligne. Accéder à ***Fichier – Préférences – Sécurité***. 
* Demander un mot de passe pour lancer l'application et même exiger l'authentification à deux facteurs. Accéder à ***Fichier – Préférences – Sécurité***. 
* Choisir de ne pas sauvegarder le mot de passe dans la source de données lorsque possible. Les informations d'identification seront alors demandées lors de la première connexion. 

