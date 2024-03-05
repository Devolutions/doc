---
eleventyComputed:
  title: Fournisseur de sécurité – Paramètres d'Argon2
  description: Dans {{ fr.RDM }}, la Phrase secrète partagée (v3) pour le Fournisseur de sécurité utilise la fonction de dérivation de clé (KDF) Argon2id pour transformer la phrase secrète en une clé de chiffrement.
---
Dans {{ fr.RDM }}, la ***Phrase secrète partagée (v3)*** pour le ***Fournisseur de sécurité*** utilise la fonction de dérivation de clé (KDF) Argon2id pour transformer la phrase secrète en une clé de chiffrement.

Le menu ***Avancé*** est utilisé pour ajuster la dérivation afin de la rendre plus facile ou plus difficile à calculer.

![Administration – Fournisseur de sécurité – Phrase secrète partagée (v3) – Avancé](https://cdnweb.devolutions.net/docs/fr/kb/KB2075.png)

## Pourquoi rendre la dérivation plus difficile à calculer?
Supposons qu'un acteur malveillant obtienne l'accès à un ordinateur inscrit auprès du fournisseur. Cet attaquant aurait accès à la clé de chiffrement utilisée pour décrypter les données de la base de données, mais n'aurait pas directement accès à la phrase secrète elle-même en raison de la dérivation.

Ce qu'un attaquant peut faire, c'est essayer de récupérer le mot de passe par force brute, en essayant plusieurs mots de passe et en faisant correspondre le résultat avec la clé jusqu'à ce qu'il trouve une correspondance. En ralentissant le calcul du hachage d'une marge qui n'est pas perceptible pour les utilisateurs légitimes, il est beaucoup plus difficile pour un attaquant de récupérer le mot de passe par force brute.

{% snippet icon.badgeInfo %}
Cette dérivation n'est effectuée qu'une seule fois lors de l'inscription d'une instance {{ fr.RDM }} au ***Fournisseur de sécurité***, donc mettre des valeurs plus élevées ici n'affectera pas les performances des opérations quotidiennes régulières.
{% endsnippet %}

## Quels sont les différents paramètres?
* ***Itérations*** : Communément appelé le paramètre « temps », il rend directement la clé plus longue à calculer. Pour éviter certaines attaques, il doit être fixé à au moins 2, mais une valeur plus élevée est préférable.
* ***Mémoire*** : Il s'agit du nombre de kilo-octets de RAM utilisés par l'algorithme. Augmenter ce nombre fait en sorte que le calcul utilise plus de mémoire vive (RAM) et le rend aussi plus lent. Ce paramètre existe parce que la force brute est généralement effectuée sur l'unité de traitement graphique (GPU), qui peut calculer un grand nombre de dérivations en parallèle mais dispose d'une quantité relativement faible de mémoire vidéo (VRAM). L'idée d'augmenter l'utilisation de la RAM est de restreindre la force brute du GPU via la quantité limitée de VRAM disponible.
* ***Rangées*** : Il s'agit du nombre de cœurs de l'unité centrale (CPU), s'ils sont disponibles, qui vont être utilisés pour la dérivation. Si vous augmentez ce nombre, le calcul sera plus rapide, à condition que vous disposiez de suffisamment de cœurs de CPU pour le faire.

## Quelles valeurs dois-je utiliser?
Les paramètres par défaut sont suffisants pour empêcher la plupart des attaques par force brute. Cependant, si vous voulez l'ajuster vous-même, vous pouvez suivre ces étapes en utilisant le bouton ***Test*** pour voir combien de temps il faut pour calculer la clé :

1. Définir le paramètre ***Rangées*** au nombre de cœurs de CPU du PC ayant le moins de cœurs qui va se connecter à la base de données. Par exemple, si les ordinateurs que vous utilisez pour accéder à la base de données ont 2, 4 ou 8 cœurs, définir le paramètre ***Rangées*** à 2.
1. Définir le paramètre ***Itérations*** à 2 pour le moment.
1. Augmenter le paramètre ***Mémoire*** autant que souhaité.
    * Si vous vous arrêtez pour ne pas que le calcul soit plus lent, sauter l'étape 4.
    * Si vous vous arrêtez pour ne pas utiliser plus de RAM, mais que vous souhaitez que le calcul soit plus long, continuer à l'étape 4.
4. Augmenter le paramètre ***Itérations*** autant que souhaité avant qu'il ne devienne trop lent.
{% snippet icon.badgeHelp %}
Pour plus d'informations, référez-vous aux ressources suivantes (EN) :

* [Argon2: the memory-hard function for password hashing and other applications](https://www.password-hashing.net/argon2-specs.pdf)
* [How to Choose the Right Parameters for Argon2](https://www.twelve21.io/how-to-choose-the-right-parameters-for-argon2/)
{% endsnippet %}
