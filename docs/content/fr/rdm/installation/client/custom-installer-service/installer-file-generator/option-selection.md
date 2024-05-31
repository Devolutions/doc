---
eleventyComputed:
  title: Sélection d'option
  description: Lors de la génération du fichier d'installation, vous devez décider ce qu'il faut inclure dans la configuration.
---
Lors de la génération du fichier d'installation, vous devez décider ce qu'il faut inclure dans la configuration. Ce processus va répliquer la configuration de l'instance {{ fr.RDM }} actuellement utilisée et va générer un fichier d'installation (.rdi). Une fois généré, le fichier d'installation peut être utilisé autant de fois que nécessaire pour créer des {{ fr.CI }}s. Pour des raisons de sécurité, certains paramètres qui peuvent contenir des identifiants tels que ***Modèles enregistrés*** sont désactivés par défaut. Activez-les en fonction de votre niveau de risque.

{% snippet, "shieldWarning" %}
La même boîte de dialogue est utilisée pour le {{ fr.CIS }} et pour exporter le fichier de configuration {{ fr.RDM }}. Certaines options ne doivent **pas** être utilisées pour le {{ fr.CIS }} afin d'éviter de partager des identifiants qui doivent rester confidentiels. Veuillez lire attentivement la documentation.
{% endsnippet %}

{% snippet, "badgeInfo" %}
{{ fr.RDM }} peut installer automatiquement les add-ons requis lorsqu'il détecte qu'ils sont nécessaires (configuré dans ***Fichier – Paramètres – Chemins***). Si vous devez personnaliser le chemin d'installation d'un add-on, vous devez d'abord effectuer la modification, puis créer le paquet d'installation. Ce paramètre sera répliqué dans le fichier d'installation (*.rdi).
{% endsnippet %}

## Options

Vous pouvez ouvrir le ***Générateur de fichier d'installation*** depuis ***Fichier – {{ fr.DA }} – Générateur de fichier d'installation***. Il est également accessible lors de la création d'un paquet d'installation dans ***Fichier – {{ fr.DA }} – {{ fr.CIM }}***.
![Générateur de fichier d'installation](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11249.png)

### Divers

{% snippet, "shieldWarning" %}
Ne redistribuez pas les ***identifiants {{ fr.DA }}***. Ce faisant, vous partageriez ces informations avec tous les utilisateurs ayant accès au compte en ligne utilisé pour créer le paquet d'installation.

Tous les ***Modèles locaux*** seront inclus. Si l'un d'entre eux contient des identifiants, cela peut poser un risque de sécurité. Assurez-vous de ne partager que ce qui est nécessaire.
{% endsnippet %}

![Options diverses](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11260.png)

| OPTION                                 | DESCRIPTION                                                                                               |
|----------------------------------------|-----------------------------------------------------------------------------------------------------------|
| Paramètres de proxy                    | Inclut vos paramètres de proxy Internet. Cette option est activée par défaut.                             |
| Chemins d'installation enregistrés     | Préserve vos chemins d'installation configurés pour les applications tierces. Utilisez cette option uniquement lorsque tous les ordinateurs des utilisateurs utilisent les mêmes chemins. Cette option est activée par défaut. |
| Modèles enregistrés                    | Inclut vos modèles locaux dans le {{ fr.CI }}. Les modèles de base de données sont stockés dans la source de données et peuvent être une meilleure option si vous devez les partager. |
| Identifiants {{ fr.DA }}               | Inclut vos identifiants {{ fr.DA }} utilisés pour créer le {{ fr.CI }}. Consultez l'avertissement de sécurité ci-dessus. |
| Inclure les identifiants de source de données | Inclut les identifiants pour toutes les sources de données sélectionnées ci-dessous. Consultez l'avertissement de sécurité ci-dessus.         |
| Effacer les informations de verrouillage de l'application | Efface les informations de ***Fichier – Paramètres – Sécurité – Verrou – Verrouiller l'application*** (local).            |
| Forcer toujours la récupération d'une nouvelle inscription | Permet à l'administrateur de forcer les utilisateurs à utiliser ce nouveau fichier de configuration.                           |

{% snippet, "badgeInfo" %}
Depuis la version 2022.3 de {{ fr.RDM }}, les informations d'enregistrement de licence sont stockées dans la source de données, ce qui signifie qu'elles ne peuvent plus être incluses dans un {{ fr.CI }}. Suivez ce [guide étape par étape](/rdm/windows/installation/client/registration/team-edition/) pour ajouter votre clé de licence et l'attribuer à vos utilisateurs à partir d'une [source de données avancée](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/).

Si vos utilisateurs ont chacun leur propre source de données individuelle ({{ fr.DHUBP }}, SQLite), vous devez leur fournir la clé de licence afin qu'ils puissent s'enregistrer manuellement dans ***Administration – Gestion – Licences***.
{% endsnippet %}

### Sources de données

Sélectionnez les sources de données qui doivent être incluses dans la configuration. Dans la colonne ***Description***, vous verrez des détails sur chaque source de données.

{% snippet, "shieldWarning" %}
Vous ne devriez partager que les sources de données qui utilisent soit la Sécurité intégrée soit une variable d'environnement pour le nom d'utilisateur. Les mots de passe pour accéder à une source de données ne devraient jamais être partagés.
{% endsnippet %}