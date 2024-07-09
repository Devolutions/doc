---
eleventyComputed:
  title: Enregistrer une licence {{ fr.DVLS }}
  order: 10
  description: Enregistrer votre licence {{ fr.DVLS }} dans l'interface web de {{ fr.DVLS }}.
---
Enregistrer votre licence {{ fr.DVLS }} dans l'interface web de {{ fr.DVLS }}.

{% snippet, "badgeInfo" %}
L'option ***Activer l'accès internet*** doit être activée dans le menu [***Fonctionnalités***](/server/web-interface/administration/configuration/server-settings/general/features/).
{% endsnippet %}

1. Dans l'interface web de {{ fr.DVLS }}, aller à ***Administration – Licences***.
![Administration – Licences](https://cdnweb.devolutions.net/docs/DVLS2012_2024_1.png)
1. ***Modifier*** votre licence {{ fr.DVLS }} actuelle.
![Modifier votre licence](https://cdnweb.devolutions.net/docs/DVLS2017_2024_1.png)
1. Saisir la nouvelle licence ou importer le fichier de licence, puis cliquer sur ***Enregistrer la licence***.
   {% snippet, "badgeInfo" %}
   Importer la licence en utilisant le fichier **.lic** est le plus utile lorsque vous êtes hors ligne. Voir la section suivante sur l'enregistrement hors ligne pour plus d'informations.
   {% endsnippet %}

   ![Enregistrer la licence](https://cdnweb.devolutions.net/docs/DVLS2018_2024_1.png)

### Enregistrement hors ligne
Si vous avez besoin d'enregistrer votre licence en étant hors ligne (si l'internet est désactivé ou si pour une raison quelconque vous ne pouvez pas atteindre les serveurs), vous pouvez le faire uniquement en important le fichier **.lic** qui vous a été fourni, contenant un Jeton Web JSON (JWT).
* ***Licence d'essai*** : Le fichier de licence doit être téléchargé à partir de l'email de confirmation de Devolutions et importé comme décrit dans les étapes ci-dessus pour {{ fr.DVLS }} 2023.3 et ultérieur.
* ***Licence achetée*** : La licence achetée doit être téléchargée depuis votre compte [{{ fr.DPORTAL }}](https://portal.devolutions.com/) et importée comme décrit dans les étapes ci-dessus pour {{ fr.DVLS }} 2023.3 et ultérieur.
