---
eleventyComputed:
  title: Mise hors service de {{ fr.DHUBP }} (déprécié)
  description: Si cette transition ne se fait pas automatiquement, vous devrez migrer vos données manuellement.
---
Les équipes de {{ fr.DHUBP }} et Business fusionnent dans le cadre de l'initiative de Devolutions pour simplifier nos opérations et nos processus de développement. À compter du 31 octobre 2024, {{ fr.DHUBP }} adoptera le même back end que {{ fr.DHUBB }}. Cette alignement standardise nos processus de mise à jour. Pour plus de détails sur les avantages de ces changements, veuillez lire notre article de blog : [Mise à jour : simplification de {{ fr.DHUBP }}](https://blog.devolutions.net/fr/2023/10/devolutions-hub-personal-est-simplifie/).

Le processus de migration est enclenché en [se connectant à votre {{ fr.DHUBP }}](https://hub.devolutions.net) via l'interface Web. Si vous accédez à votre Hub via {{ fr.RDM }}, vous recevrez un message d'avertissement. En acceptant de migrer, vous serez ensuite redirigé vers l'interface Web, qui offre les mêmes étapes que si vous y aviez accédé directement via le Web. Suivez les invites à l'écran pour vous guider sans problème à travers la mise à niveau des données et la transition.

{% snippet icon.badgeWarning %}
L'ancienne version de {{ fr.DHUBP }} sera complètement éliminée d'ici le 5 août 2024. Ne pas migrer avant la date limite entraînera une perte de données permanente.
{% endsnippet %}

## Dépannage des problèmes de migration

Bien que {{ fr.DHUBP }} soit conçu pour passer automatiquement de l'ancien système à la nouvelle plateforme sans nécessiter votre intervention, il peut y avoir des cas où la migration ne se produit pas automatiquement. Si vous rencontrez ce problème, veuillez suivre ces étapes pour assurer une transition réussie :

* Vérification de la connexion et de l'accès : S'assurer que vous vous êtes connecté avec succès à votre {{ fr.DHUBP }} et avez accédé au Hub via le Web. C'est la première indication que les premières étapes vers la migration sont en place.
* Vérification de l'achèvement de la migration : Dans {{ fr.RDM }}, vérifier votre source de données {{ fr.DHUBP }} : l'ancien système peut être identifié par une petite icône à côté du logo de {{ fr.DHUBP }}. Si vous voyez cette icône, cela indique que la migration n'a pas été complétée automatiquement.
* Processus de migration manuelle : Si la migration automatique n'a pas eu lieu, vous devrez effectuer une migration manuelle de vos données via {{ fr.RDM }} comme expliqué dans la section suivante.

### Migration manuelle
1. Mettre à jour vers la dernière version de {{ fr.RDM }} si applicable.
1. Dans {{ fr.RDM }}, naviguer jusqu'à ***Fichier – Sources de données – Ajouter une nouvelle source de données***.
![Fichier – Sources de données – Ajouter une nouvelle source de données](https://cdnweb.devolutions.net/docs/RDMW2047_2024_1.png)
1. Choisir le type de source de données {{ fr.DHUBP }} et cliquer sur ***Ajouter***.
![Type de source de données {{ fr.DHUBP }}](https://cdnweb.devolutions.net/docs/RDMW2048_2024_1.png)
1. Fournir un nom pour votre source de données et le courriel associé à votre compte.
![Informations sur le Hub](https://cdnweb.devolutions.net/docs/RDMW2049_2024_1.png)
1. Cliquer sur ***Ajouter***, puis ***Enregistrer***.
1. Il se peut que vous soyez invité à vous authentifier via le web; si c'est le cas, saisir vos identifiants et cliquer sur ***Continuer***.
![Identifiants du Hub](https://cdnweb.devolutions.net/docs/CLOUD2002_2024_1.png)

La migration est complète, et vous pouvez maintenant accéder à vos entrées {{ fr.DHUBP }} via la nouvelle source de données.

{% snippet icon.badgeHelp %}
Si vous rencontrez encore des problèmes ou pour toute question concernant cette migration, veuillez [contacter notre équipe de support](mailto:service@devolutions.net).
{% endsnippet %}

## Supprimer votre {{ fr.DHUBP }}

Si au lieu de migrer, vous décidez de supprimer définitivement votre {{ fr.DHUBP }} et toutes les données associées :

1. Aller sur le [{{ fr.DPORTAL }}](https://portal.devolutions.com/hub-personal) et se connecter.
1. Sous {{ fr.DHUBP }}, cliquer sur les trois points à côté de votre Hub et sélectionner ***Supprimer***.
![Supprimer votre Hub](https://cdnweb.devolutions.net/docs/CLOUD2000_2024_1.png)
1. Lire attentivement l'avertissement, reconnaître en cochant la case ***Je comprends***, et confirmer en cliquant sur ***Supprimer***.
![Confirmation](https://cdnweb.devolutions.net/docs/CLOUD2001_2024_1.png)

Votre {{ fr.DHUBP }} a maintenant été définitivement supprimé, ainsi que tout son contenu.
