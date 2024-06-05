---
eleventyComputed:
  title: Fournisseurs de sécurité – Paramètres Argon2
  description: Dans {{ fr.RDM }}, le ***mot de passe partagé (v3)*** pour le ***Fournisseur de Sécurité*** utilise la Fonction de Dérivation de Clé Argon2id (KDF) pour transformer le mot de passe en une clé de chiffrement.
---
Dans {{ fr.RDM }}, le ***mot de passe partagé (v3)*** pour le ***Fournisseur de Sécurité*** utilise la Fonction de Dérivation de Clé Argon2id (KDF) pour transformer le mot de passe en une clé de chiffrement.

Le menu ***Avancé*** est utilisé pour ajuster la dérivation pour la rendre plus facile ou plus difficile à calculer.
![Administration – Fournisseur de Sécurité – Mot de passe partagé (v3) – Avancé](https://cdnweb.devolutions.net/docs/docs_en_kb_KB5017.png)

## Pourquoi rendre la dérivation plus difficile à calculer ?
Disons qu'un acteur malveillant obtient l'accès à un ordinateur inscrit chez le fournisseur. Cet attaquant aurait accès à la clé de chiffrement utilisée pour déchiffrer les données sur la base de données, mais n'aurait pas directement accès au mot de passe lui-même à cause de la dérivation.

Ce qu'un attaquant peut faire est d'essayer de récupérer le mot de passe par force brute, en essayant plusieurs mots de passe et en comparant le résultat avec la clé jusqu'à trouver une correspondance. Rendre le hachage plus lent à calculer par une marge qui n'est pas perceptible pour les utilisateurs légitimes rend beaucoup plus difficile pour un attaquant de retrouver le mot de passe par force brute.

{% snippet, "badgeInfo" %}
Cette dérivation est effectuée une seule fois lors de l'inscription d'une instance {{ fr.RDM }} au ***Fournisseur de Sécurité***, donc mettre des valeurs plus élevées ici n'affectera pas la performance des opérations quotidiennes régulières.
{% endsnippet %}

## Quels sont les différents paramètres ?
* ***Itérations*** : Communément nommé le paramètre « temps », il rend la clé plus longue à calculer. Pour prévenir certaines attaques, il devrait être réglé à au moins 2, mais plus c'est mieux.
* ***Mémoire*** : C'est le nombre de kilo-octets de RAM utilisés par l'algorithme. Augmenter ce nombre rend le calcul plus gourmand en RAM et également plus lent. Ce paramètre existe parce que la force brute est généralement effectuée sur le GPU, qui peut calculer beaucoup de dérivations en parallèle mais dispose d'une quantité relativement faible de VRAM disponible. L'idée d'augmenter l'utilisation de la RAM est de limiter la force brute du GPU via la quantité limitée de VRAM disponible.
* ***Canaux*** : C'est le nombre de cœurs de CPU, si disponibles, qui vont être utilisés pour la dérivation. Augmenter cela rendra le calcul plus rapide tant que vous avez suffisamment de cœurs de CPU disponibles pour le calculer.

## Quelles valeurs devrais-je utiliser ?
Les paramètres par défaut sont suffisamment bons pour prévenir la plupart des attaques par force brute. Cependant, si vous souhaitez l'ajuster vous-même, vous pouvez suivre ces étapes en utilisant le bouton ***Test*** pour voir combien de temps il faudrait pour calculer la clé :

1. Régler le paramètre ***Canaux*** sur le nombre de cœurs de CPU de l'ordinateur avec le moins de cœurs qui va se connecter à la base de données. Par exemple, si les ordinateurs que vous utilisez pour accéder à la base de données ont 2, 4 ou 8 cœurs, régler ***Canaux*** sur 2.
1. Régler ***Itérations*** sur 2 pour l'instant.
1. Augmenter le paramètre ***Mémoire*** aussi haut que souhaité.
    * Si vous arrêtez parce que vous ne voulez pas le rendre plus lent, vous pouvez passer à l'étape 4.
    * Si vous arrêtez parce que vous ne voulez pas utiliser plus de RAM, mais que vous êtes prêt à rendre le calcul plus long, continuer à l'étape 4.
4. Augmenter le paramètre ***Itérations*** aussi haut que souhaité avant qu'il ne devienne trop lent.
{% snippet, "badgeHelp" %}
Pour plus d'informations, référez-vous aux ressources suivantes :

* [Argon2 : la fonction résistante à la mémoire pour le hachage de mot de passe et autres applications](https://www.password-hashing.net/argon2-specs.pdf)
* [Comment choisir les bons paramètres pour Argon2](https://www.twelve21.io/how-to-choose-the-right-parameters-for-argon2/)
{% endsnippet %}