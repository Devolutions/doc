---
eleventyComputed:
  title: Édition d'équipe
  order: 10
  description: Lors de l'utilisation d'une Source de Données Avancée, il n'est pas nécessaire d'enregistrer {{ fr.RDM }} puisque la clé de licence est stockée dans la source de données et récupérée directement à partir de celle-ci.
---
Lors de l'utilisation d'une [Source de Données Avancée](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/), il n'est pas nécessaire d'enregistrer {{ fr.RDM }} puisque la clé de licence est stockée dans la source de données et récupérée directement à partir de celle-ci. Lors du lancement de l'application pour la première fois, il suffit d'[ajouter la source de données](/rdm/windows/data-sources/create-new-data-source/) contenant la clé.

{% snippet, "badgeInfo" %}
Le menu de licence pour enregistrer {{ fr.RDM }} est disponible pour SQLite et {{ fr.DHUBP }}, mais pas pour les autres sources de données individuelles.

Il est possible de [demander un essai](/rdm/windows/installation/client/registration/trial-request/) pour essayer {{ fr.RDM }} Équipe pendant 30 jours. Si vous décidez de ne pas enregistrer l'application avec une clé de licence Édition d'équipe à la fin de la période de 30 jours, vos données ne seront pas altérées ou effacées, et vous aurez un accès complet à celles-ci une fois que vous fournirez une clé de licence.
{% endsnippet %}

1. Pour ajouter une clé de licence à la source de données, naviguer vers ***Administration – Gestion – Licences***.
![Administration – Gestion – Licences](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip3417.png)
1. Cliquer sur ***Ajouter Licence***.
![Bouton Ajouter Licence](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2236.png)
1. Entrer la clé de licence dans le champ ***Licence*** ou importer le fichier de licence en utilisant le bouton ***Importer***.
   {% snippet, "badgeInfo" %}
   Importer la licence en utilisant le fichier **.lic** est le plus utile lorsque vous êtes hors ligne. Voir la section suivante sur l'enregistrement hors ligne pour plus d'informations.
   {% endsnippet %}

   ![Champ Licence](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2238.png)
1. Optionnel : Cocher la case ***Attribution automatique*** pour fournir automatiquement la clé {{ fr.RDM }} à tous les nouveaux utilisateurs créés.
![Paramètre Attribution Automatique](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin0001.png)
1. Cliquer sur ***Attribué À*** dans le menu de gauche.
1. Cliquer sur ***Attribuer À Tous*** ou sélectionner dans la colonne ***Attribué*** qui devrait avoir un accès à la clé {{ fr.RDM }}. Cette étape attribuera automatiquement la licence aux utilisateurs sélectionnés, éliminant le besoin d'interagir avec chaque utilisateur.
![Onglet Attribué À](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2237.png)
1. Cliquer sur ***OK*** et ***Fermer*** la fenêtre ***Gestion des Utilisateurs et de la Sécurité***.

### Enregistrement hors ligne

Si vous avez besoin d'enregistrer votre licence alors que vous êtes hors ligne (si internet est désactivé ou si pour une raison quelconque vous ne pouvez pas atteindre les serveurs), vous pouvez le faire uniquement en important le fichier **.lic** qui vous a été fourni, contenant un Jeton Web JSON (JWT).

* ***Licence d'essai*** : Le fichier de licence doit être téléchargé à partir de l'email de confirmation de Devolutions et importé comme décrit dans les étapes ci-dessus pour {{ fr.RDM }} 2023.3 et ultérieur.
* ***Licence achetée*** : La licence achetée doit être téléchargée depuis votre compte {{ fr.DPORTAL }} et importée comme décrit dans les étapes ci-dessus pour {{ fr.RDM }} 2023.3 et ultérieur.