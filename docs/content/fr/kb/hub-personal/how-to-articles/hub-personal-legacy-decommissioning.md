---
eleventyComputed:
  title: Mise hors service de l'ancienne version de {{ fr.DHUBP }}
  description: Si cette transition ne se fait pas automatiquement, vous devrez migrer vos données manuellement.
---
Les équipes de {{ fr.DHUBP }} et Business fusionnent dans le cadre de l'initiative de Devolutions pour simplifier nos opérations et nos processus de développement. À compter du 31 octobre 2024, {{ fr.DHUBP }} adoptera le même back-end que {{ fr.DHUBB }}. Cette harmonisation standardise nos processus de mise à jour. Pour plus de détails sur les avantages de ces changements, veuillez lire notre article de blog : [Streamlining {{ fr.DHUBP }}](https://blog.devolutions.net/2023/10/streamlining-devolutions-hub-personal/).

La migration peut être effectuée en [vous connectant à votre {{ fr.DHUBP }}](https://hub.devolutions.net). Vous recevrez ensuite des invites pour vous guider à travers la mise à niveau des données et la transition. L'ancienne version de {{ fr.DHUBP }} sera complètement éliminée d'ici le 5 août 2024. Ne pas migrer avant la date limite entraînera une perte de données permanente.

## Problèmes de migration
Votre source de données devrait automatiquement passer de l'ancien système à la nouvelle plateforme sans nécessiter votre intervention. Cependant, si cette transition ne se fait pas automatiquement, vous devrez migrer vos données manuellement via {{ fr.RDM }} :

1. Mettre à jour {{ fr.RDM }} vers la version 2023.3 ou ultérieure si applicable.
1. Dans {{ fr.RDM }}, naviguer jusqu'à ***Fichier – Sources de données – Ajouter une nouvelle source de données***.
![Fichier – Sources de données – Ajouter une nouvelle source de données](https://cdnweb.devolutions.net/docs/RDMW2047_2024_1.png)
1. Choisir le type de source de données {{ fr.DHUBP }} et cliquer sur ***Ajouter***.
![Type de source de données {{ fr.DHUBP }}](https://cdnweb.devolutions.net/docs/RDMW2048_2024_1.png)
1. Fournir un nom pour votre source de données et le courriel associé à votre compte.
![Informations sur le Hub](https://cdnweb.devolutions.net/docs/RDMW2049_2024_1.png)
1. Cliquer sur ***Ajouter***, puis ***Enregistrer***.
1. Il se peut que vous soyez invité à vous authentifier via le web; si c'est le cas, saisir vos identifiants et cliquer sur ***Continuer***.
![Identifiants du Hub](https://cdnweb.devolutions.net/docs/CLOUD2002_2024_1.png)

La migration est terminée et vous pouvez maintenant accéder à vos entrées de {{ fr.DHUBP }} via la nouvelle source de données.

{% snippet icon.badgeHelp %}
Si vous rencontrez encore des problèmes ou pour toute question concernant cette migration, veuillez [contacter notre équipe de support](mailto:service@devolutions.net).
{% endsnippet %}

## Suppression de votre {{ fr.DHUBP }}

Si au lieu de migrer vous décidez de supprimer définitivement votre {{ fr.DHUBP }} et toutes les données associées :

1. Se rendre sur le [{{ fr.DPORTAL }}](https://portal.devolutions.com/hub-personal) et se connecter.
1. Sous {{ fr.DHUBP }}, cliquer sur les trois points à côté de votre Hub et sélectionner ***Supprimer***.
![Supprimer votre Hub](https://cdnweb.devolutions.net/docs/CLOUD2000_2024_1.png)
1. Lire attentivement l'avertissement, accepter en cochant la case ***Je comprends*** et confirmer en cliquant sur ***Supprimer***.
![Confirmation](https://cdnweb.devolutions.net/docs/CLOUD2001_2024_1.png)

Votre {{ fr.DHUBP }} ainsi que tout son contenu ont maintenant été définitivement supprimés.