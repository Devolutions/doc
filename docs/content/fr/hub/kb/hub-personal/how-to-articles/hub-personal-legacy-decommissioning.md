---
eleventyComputed:
  title: "{{ fr.DHUBP }} arrêt de l'ancienne version"
  description: Si cette transition ne se fait pas automatiquement, vous devrez migrer vos données manuellement.
---
Les équipes de {{ fr.DHUBP }} et Business fusionnent dans le cadre de l'initiative de Devolutions pour rationaliser nos opérations et nos processus de développement. À compter du 31 octobre 2024, {{ fr.DHUBP }} adoptera la même dorsale que {{ fr.DHUBB }}. Cette alignement standardise nos processus de mise à jour. Pour plus de détails sur les avantages de ces changements, veuillez lire notre article de blog : [Rationaliser {{ fr.DHUBP }}](https://blog.devolutions.net/2023/10/streamlining-devolutions-hub-personal/).

Le processus de migration est initié en [se connectant à votre {{ fr.DHUBP }}](https://hub.devolutions.net) via l'interface web. Si vous accédez à votre Hub via {{ fr.RDM }}, vous recevrez un message d'avertissement. En acceptant de migrer, vous serez ensuite redirigé vers l'interface web, qui propose les mêmes étapes que si vous y aviez accédé directement via le web. Suivez les invites à l'écran pour vous guider sans encombre à travers la mise à niveau des données et la transition.

Après la fin du processus, une nouvelle source de données pour votre {{ fr.DHUBP }} sera créée dans {{ fr.RDM }} pour que vous puissiez accéder au {{ fr.DHUBP }} nouvellement migré. L'ancienne source de données restera dans {{ fr.RDM }} avec une étiquette "(Obsolète)" au début de son nom et une petite icône d'avertissement superposée au logo du Hub.

![Source de données obsolète](https://cdnweb.devolutions.net/docs/RDMW2050_2024_1.png)

{% snippet, "badgeWarning" %}
L'ancienne version de {{ fr.DHUBP }} sera complètement éliminée d'ici le 5 août 2024. Ne pas migrer avant la date limite entraînera une perte de données permanente.
{% endsnippet %}

## Résolution des problèmes de migration

Bien que {{ fr.DHUBP }} soit conçu pour passer automatiquement de l'ancien système à la nouvelle plateforme sans nécessiter votre intervention, il peut y avoir des cas où le flux de travail est incomplet, signifiant que la nouvelle source de données mise à jour n'a pas été ajoutée comme prévu, même après avoir suivi le processus via {{ fr.RDM }}. Si vous rencontrez ce problème, veuillez suivre ces étapes :

* **Vérifier la connexion et l'accès réussis** : Assurez-vous que vous vous êtes connecté avec succès à votre {{ fr.DHUBP }} via le web et mis à jour. C'est l'étape initiale.
* **Vérifier l'achèvement** : Dans {{ fr.RDM }}, ouvrez votre liste de sources de données. Vérifiez que l'ancienne source de données {{ fr.DHUBP }} est présente ; elle peut être identifiée par l'étiquette "(Obsolète)" au début de son nom et par une petite icône d'avertissement superposée au logo du Hub. Vous devriez également voir la nouvelle source de données {{ fr.DHUBP }} dans la liste.
![Source de données obsolète](https://cdnweb.devolutions.net/docs/RDMW2050_2024_1.png)
* **Processus de migration manuelle** : Le problème est que le processus n'a pas ajouté la nouvelle source de données {{ fr.DHUBP }}. Dans ce cas, vous devez l'ajouter manuellement comme expliqué dans la section suivante.

### Migration manuelle
1. Mettre à jour vers la dernière version de {{ fr.RDM }} si applicable.
1. Dans {{ fr.RDM }}, naviguer vers ***Fichier – Sources de données – Ajouter une nouvelle source de données***.
![Fichier – Sources de données – Ajouter une nouvelle source de données](https://cdnweb.devolutions.net/docs/RDMW2047_2024_1.png)
1. Choisir le type de source de données {{ fr.DHUBP }} et cliquer sur ***Ajouter***.
![Type de source de données {{ fr.DHUBP }}](https://cdnweb.devolutions.net/docs/RDMW2048_2024_1.png)
1. Fournir un nom pour votre source de données et l'email associé à votre compte.
![Informations du Hub](https://cdnweb.devolutions.net/docs/RDMW2049_2024_1.png)
1. Cliquer sur ***Ajouter***, puis ***Enregistrer***.
1. Vous pourriez être invité à vous authentifier via le web ; si c'est le cas, entrez vos identifiants et cliquez sur ***Continuer***.
![Identifiants du Hub](https://cdnweb.devolutions.net/docs/CLOUD2002_2024_1.png)

La migration est complète, et vous pouvez maintenant accéder à vos entrées {{ fr.DHUBP }} via la nouvelle source de données.

{% snippet, "badgeHelp" %}
Si vous rencontrez toujours des problèmes ou pour toute question concernant cette migration, veuillez [contacter notre équipe de support](mailto:service@devolutions.net).
{% endsnippet %}

## Suppression de votre {{ fr.DHUBP }}

Si au lieu de migrer, vous décidez de supprimer définitivement votre {{ fr.DHUBP }} et toutes les données associées :

1. Aller sur le [{{ fr.DPORTAL }}](https://portal.devolutions.com/hub-personal) et se connecter.
1. Sous {{ fr.DHUBP }}, cliquer sur les trois points à côté de votre Hub et sélectionner ***Supprimer***.
![Supprimer votre Hub](https://cdnweb.devolutions.net/docs/CLOUD2000_2024_1.png)
1. Lire attentivement l'avertissement, reconnaître en cochant la case ***Je comprends***, et confirmer en cliquant sur ***Supprimer***.
![Confirmation](https://cdnweb.devolutions.net/docs/CLOUD2001_2024_1.png)

Votre {{ fr.DHUBP }} a maintenant été définitivement supprimé, ainsi que tout son contenu.