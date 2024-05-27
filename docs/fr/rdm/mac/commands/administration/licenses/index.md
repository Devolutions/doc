---
eleventyComputed:
  title: Licences
---
La gestion globale de l'enregistrement {{ fr.RDM }} pour tous vos utilisateurs peut être effectuée avec une licence stockée dans une source de données avancée telle que {{ fr.DVLS }}, Microsoft SQL Server ou Azure SQL.

{% snippet, "badgeInfo" %}
Il est possible de [demander un essai](/fr/rdm/mac/installation/client/registration/trial-request/) pour essayer {{ fr.RDM }} pendant 30 jours. Si vous décidez de ne pas enregistrer l'application à la fin de la période de 30 jours, vos données ne seront ni modifiées ni effacées et vous y aurez un accès complet une fois que vous aurez fourni un numéro de série valide.
{% endsnippet %}

Lorsque la licence est stockée dans une [Source de données avancée](/fr/rdm/mac/data-sources/data-sources-types/advanced-data-sources/), il n'est pas nécessaire d'enregistrer {{ fr.RDM }} car le numéro de série de la licence est récupéré directement à partir de celle-ci. Lors du premier lancement de l'application, ajoutez la source de données contenant le numéro de série.

1. Pour ajouter une clé de licence, accéder à ***Administration – Licences***.
![Administration – Licences](https://cdnweb.devolutions.net/docs/fr/rdm/mac/RdmMac4009.png)
1. Cliquer ***Ajouter une licence***.
![Gestion des usagers et de la sécurité – Licence](https://cdnweb.devolutions.net/docs/fr/rdm/mac/RdmMac4044.png)
1. Saisir la ***Licence***.
![Licence](https://cdnweb.devolutions.net/docs/fr/rdm/mac/clip0152.png)
1. Facultatif : Cocher la case ***Assignation automatique*** pour fournir automatiquement la clé de licence {{ fr.RDM }} à tous les utilisateurs nouvellement créés.
1. Cliquer sur ***OK*** pour enregistrer.

Votre licence est maintenant enregistrée dans la source de données avancée. Suivre les insctructions pour [Assigner automatiquement les nouveaux utilisateurs](/fr/rdm/mac/commands/administration/licenses/assign/) sélectionnés, supprimant ainsi le besoin d'interagir localement avec leur {{ fr.RDM }}.
