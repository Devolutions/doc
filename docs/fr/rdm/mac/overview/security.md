---
eleventyComputed:
  title: Sécurité
---
Tous les mots de passe stockés dans la base de données de l'application sont chiffrés en utilisant un algorithme de chiffrement fort, de sorte que si un utilisateur tente d'accéder directement aux données dans la base de données, elles seront considérées comme illisibles.

## Algorithme de chiffrement

Notre application utilise l'algorithme de chiffrement XChaCha20Poly1305 pour protéger les données sensibles dans la base de données. Consulter [la bibliothèque cryptographique de Devolutions](https://github.com/Devolutions/devolutions-crypto) pour plus de détails.

{% snippet, "shieldInfo" %}
Les données locales RDM sont chiffrées en utilisant la norme de chiffrement avancé (AES) pour les ordinateurs fonctionnant en mode FIPS.
{% endsnippet %}

## Conseils

{% snippet, "shieldWarning" %}
Le chiffrement des données en transit est offert nativement par nos services cloud. Lorsque vous décidez d'utiliser une solution locale, la mise en œuvre du chiffrement des données en transit doit être réalisée en utilisant les outils impliquant vos technologies choisies. La plupart des clients ayant des préoccupations de sécurité choisissent déjà l'une des [Sources de Données Avancées](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/), suivent les instructions spécifiques à la solution choisie.
{% endsnippet %}

{% snippet, "shieldWarning" %}
Le chiffrement est intégré dans l'application et est donc le même pour toutes les copies du logiciel en circulation. Il est impératif de suivre nos étapes recommandées et d'appliquer un [Fournisseur de Sécurité](/rdm/mac/commands/administration/security-provider/) pour chiffrer non seulement les mots de passe, mais aussi toutes les données de connexion qui sont stockées dans la source de données. Cela vous donnera une protection sur vos données au repos, en utilisant une clé sous votre contrôle exclusif.
{% endsnippet %}

Nous vous recommandons de suivre ces étapes pour garantir la sécurité :

* Utiliser une [Source de Données Avancée](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/) et octroyer l'accès utilisateur en attribuant des permissions.
* Utiliser une communication chiffrée avec la base de données lorsque disponible.
* Utiliser les [Paramètres de la Source de Données](/rdm/mac/commands/administration/system-settings/) pour contrôler de nombreux paramètres impactant la sécurité.
* Utiliser le [Fournisseur de Sécurité](/rdm/mac/commands/administration/security-provider/) pour chiffrer complètement les entrées au lieu de juste le mot de passe.
* Si vous utilisez le mode hors ligne, ajouter votre propre mot de passe pour une couche supplémentaire de protection au cache local. Aller à ***Fichier - Préférences - Sécurité***.
* Exiger un mot de passe pour lancer l'application et même exiger une authentification à deux facteurs. Aller à ***Fichier - Préférences - Sécurité***.
* Si votre source de données le permet, choisir de ne pas sauvegarder le mot de passe dans la source de données, ce qui demandera l'identification lors de la première connexion.
