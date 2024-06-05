---
eleventyComputed:
  title: Sécurité
---
Tous les mots de passe stockés dans les sources de données sont chiffrés en utilisant un algorithme de chiffrement fort, de sorte que si un utilisateur tente d'accéder directement aux données dans la base de données, elles seront considérées comme illisibles.

Si vous choisissez de stocker les mots de passe localement, {{ fr.RDM }} utilisera le même mécanisme utilisé par mstsc.exe (client {{ fr.RDM }}), qui stocke les mots de passe dans le Gestionnaire d'informations d'identification Windows. Il doit être noté que le mot de passe ne pourra pas être vu en raison de son chiffrement par Windows. Pour des raisons évidentes, ce choix signifie également que les identifiants stockés de cette manière ne sont pas partagés.

## Algorithme de chiffrement

Notre application utilise l'algorithme de chiffrement XChaCha20Poly1305 pour protéger les données sensibles dans la base de données. Consulter [la bibliothèque cryptographique de Devolutions](https://github.com/Devolutions/devolutions-crypto) pour plus de détails.

{% snippet, "shieldInfo" %}
Les données locales RDM sont chiffrées en utilisant la norme de chiffrement avancé (AES) pour les ordinateurs fonctionnant en mode FIPS.
{% endsnippet %}

## Conseils

{% snippet, "shieldWarning" %}
Le chiffrement des données en transit est offert nativement par nos services cloud. Lorsque vous décidez d'utiliser une solution locale, le chiffrement des données en transit doit être mis en œuvre en utilisant les outils impliquant vos technologies choisies. La plupart des clients préoccupés par la sécurité choisissent [les Sources de Données Avancées](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/). Suivre les instructions spécifiques à la solution choisie.
{% endsnippet %}

{% snippet, "shieldWarning" %}
La clé de chiffrement est intégrée dans l'application et est donc la même pour toutes les copies du logiciel en circulation. Il est impératif que vous suiviez nos étapes recommandées et appliquiez un [Fournisseur de Sécurité](/rdm/commands/administration/security/security-providers/) pour chiffrer non seulement les mots de passe, mais aussi ***toutes les données de connexion*** stockées dans la source de données. Cela fournira une protection sur vos données au repos, en utilisant une clé sous votre contrôle exclusif.
{% endsnippet %}

Nous vous recommandons de suivre ces étapes pour assurer la sécurité des données :

* Utiliser une [Source de Données Avancée](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/) et accorder l'accès utilisateur en attribuant des permissions.
* Utiliser une communication chiffrée avec la base de données lorsque disponible.
* Utiliser les [Paramètres Système](/rdm/commands/administration/settings/system-settings/vault-management/security/) pour contrôler les paramètres impactant la sécurité.
* Utiliser le [Fournisseur de Sécurité](/rdm/commands/administration/security/security-providers/) pour chiffrer complètement les entrées au lieu de juste le mot de passe.
* Si vous utilisez le mode hors ligne, ajouter votre propre mot de passe pour une couche supplémentaire de protection au cache local. Aller à ***Fichier – Paramètres – Sécurité***.
* Exiger un mot de passe pour lancer l'application et même exiger une authentification à deux facteurs. Aller à ***Fichier – Paramètres – Sécurité***.
* Si votre source de données le permet, choisir de ne pas sauvegarder le mot de passe dans la source de données, ce qui demandera les identifiants lors de la première connexion.
* Utiliser nos [Politiques de Groupe](/rdm/kb/rdm-windows/how-to-articles/group-policies/) pour configurer le système.
