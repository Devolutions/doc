---
eleventyComputed:
  title: Licences
  description: Gérer l'enregistrement de {{ fr.RDM }} globalement pour tous vos utilisateurs peut être fait avec une clé de licence stockée dans une source de données avancée.
---
Gérer l'enregistrement de {{ fr.RDM }} globalement pour tous vos utilisateurs peut être fait avec une clé de licence stockée dans une source de données avancée (petites équipes et entreprises) : {{ fr.DVLS }}, {{ fr.DHUBB }}, CyberArk, Microsoft Azure SQL et Microsoft SQL Server.

Le menu ***Licences*** est disponible pour tous les types de sources de données (à condition d'avoir accès à la section ***Administration***) mais se comporte différemment :
* Pour {{ fr.DVLS }}, {{ fr.DHUBB }} et {{ fr.DHUBP }}, le menu ouvre la page web de la source de données correspondante. Il se peut qu'on vous demande de vous connecter à votre compte sur le web.
* Pour tous les autres types de sources de données, le menu s'ouvre dans {{ fr.RDM }}.

Avec la licence stockée dans une [source de données avancée](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/), il n'est pas nécessaire d'enregistrer {{ fr.RDM }} car la clé de licence est récupérée directement depuis celle-ci. Lors du lancement de l'application pour la première fois, ajouter la source de données contenant la clé.

{% snippet, "badgeInfo" %}
Il est possible de [demander un essai](/rdm/windows/installation/client/registration/trial-request/) pour essayer {{ fr.RDM }} pendant 30 jours. Si vous décidez de ne pas enregistrer l'application à la fin de la période de 30 jours, vos données ne seront ni altérées ni effacées, et vous aurez un accès complet à celles-ci une fois que vous fournirez une clé de licence valide.
{% endsnippet %}

1. Pour ajouter une clé de licence, naviguer vers ***Administration – Licences***.
![Administration – Licences](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip3417.png)
1. Cliquer sur ***Ajouter une licence***.
![Gestion des utilisateurs et de la sécurité – Ajouter une licence](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6035.png)
1. Entrer la licence ou importer le fichier de licence en utilisant le bouton ***Importer***.
   {% snippet, "badgeInfo" %}
   Importer la licence en utilisant le fichier **.lic** est le plus utile lorsque vous êtes hors ligne. Voir la section suivante sur l'enregistrement hors ligne pour plus d'informations.
   {% endsnippet %}

   ![Licence](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2238.png)
1. Cliquer sur ***Ok*** pour sauvegarder la licence.
1. Optionnel : L'option ***Attribution automatique*** sera affichée lorsque vous entrerez la licence. La case est déjà cochée pour fournir la clé {{ fr.RDM }} à tous les nouveaux utilisateurs créés. Une fenêtre d'avertissement apparaîtra si vous décochez la case et cliquez sur ***OK***.
![Fenêtre d'avertissement](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6033.png)

Votre licence est maintenant sauvegardée dans la source de données avancée. Suivre [Attribuer des licences](/rdm/windows/commands/administration/management/licenses/assign/) pour les attribuer automatiquement aux utilisateurs sélectionnés, éliminant le besoin d'interagir localement avec leur {{ fr.RDM }}.

### Enregistrement hors ligne

Si vous avez besoin d'enregistrer votre licence alors que vous êtes hors ligne (si internet est désactivé ou si pour une raison quelconque vous ne pouvez pas atteindre les serveurs), vous pouvez le faire uniquement en important le fichier **.lic** qui vous a été fourni, contenant un Jeton Web JSON (JWT).

* ***Licence d'essai*** : Le fichier de licence doit être téléchargé depuis l'email de confirmation de Devolutions et importé comme décrit dans les étapes ci-dessus pour {{ fr.RDM }} 2023.3 et ultérieur.
* ***Licence achetée*** : La licence achetée doit être téléchargée depuis votre compte {{ fr.DPORTAL }} et importée comme décrit dans les étapes ci-dessus pour {{ fr.RDM }} 2023.3 et ultérieur.
