---
eleventyComputed:
  title: Modifier
  description: L'onglet Modifier contient des opérations pour rapidement Ajouter, Modifier, Remplacer, Éditer en lot ou Exporter des entrées.
---
L'onglet ***Modifier*** contient des opérations pour rapidement ***Ajouter***, ***Modifier***, ***Remplacer***, ***Éditer en lot*** ou ***Exporter*** des entrées.
![Ribbon - Edit](https://cdnweb.devolutions.net/docs/RDMW6031_2024_2.png)

## Ajouter

| OPTION          | DESCRIPTION                                                             |
|-----------------|-------------------------------------------------------------------------|
| Nouvelle Entrée | Créer une nouvelle entrée (session, dossier, entrée d'information, identifiants, etc.). |
| Dupliquer       | Créer un duplicata de votre entrée.                                       |
| Créer Raccourci | Lier votre entrée à plus d'un groupe. Pour plus d'informations, consulter le texte ci-dessous. |
| Enregistrer comme Modèle| Enregistrer l'entrée sélectionnée comme un modèle local ou de base de données.                |

Un raccourci est la réitération d'une entrée existante. Contrairement à une entrée dupliquée, qui possède son propre ID et propriétés, un raccourci est un lien vers une entrée et ses propriétés. Vous pouvez créer des raccourcis facilement en cliquant droit sur l'entrée, puis en allant à ***Modifier – Créer Raccourci***, ou en utilisant le bouton susmentionné dans l'onglet ***Modifier***. Il existe quelques scénarios où un utilisateur souhaiterait utiliser la même entrée différemment, comme se connecter à deux hôtes différents avec une seule session RDP.

Par exemple, il est possible de :

* Assigner différents accès à la même entrée.
* Créer un dossier favori avec tout centralisé.
* Réutiliser un document pour différents scénarios.
![Ces deux entrées sont exactement les mêmes](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10209.png)

Les entrées réitérées de cette manière ont également les deux chemins de dossiers indiqués dans leur champ Dossier dans leurs propriétés, les chemins sont séparés par un point-virgule.

{% snippet, "badgeInfo" %}
Il n'y a pas de différences visuelles entre le raccourci et l'entrée originale. Par conséquent, vous devrez supprimer toutes les entrées pour supprimer complètement ladite entrée. Une confirmation vous sera demandée lors de la tentative de suppression dudit raccourci.
{% endsnippet %}

## Modifier

| OPTION     | DESCRIPTION                                                                 |
|------------|-----------------------------------------------------------------------------|
| Propriétés | Modifier les propriétés de l'entrée sélectionnée.                                  |
| Renommer     | Renommer l'entrée sélectionnée.                                                  |
| Déplacer       | Déplacer l'entrée sélectionnée vers un autre dossier.                                  |
| Supprimer     | Supprimer l'entrée sélectionnée. Une boîte de dialogue de confirmation s'affiche pour confirmer l'action. |
| Liste de Lecture  | Utiliser les différentes fonctionnalités de la liste de lecture.                                         |
| Gestion des étiquettes  | Gérer les [étiquettes](/rdm/concepts/intermediate-concepts/tags/) pour organiser ou rechercher certaines entrées liées.                                        |

La fonctionnalité ***Liste de Lecture*** dans {{ fr.RDM }} est beaucoup comme une liste de lecture de musique. Elle ouvre une liste d'entrées, dans un ordre spécifique, automatiquement. La Liste de Lecture peut être utilisée pour créer des groupes de sessions pour une tâche spécifique ou pour des raisons de sécurité. Vous pouvez construire votre propre Liste de Lecture et démarrer toutes les entrées d'une Liste de Lecture en même temps.

* [Créer et Modifier une Liste de Lecture](/rdm/windows/commands/edit/edit/play-list/play-list-actions/)
* [Utiliser une Liste de Lecture](/rdm/windows/commands/edit/edit/play-list/play-list-management/)

## Remplacements de Paramètres

| OPTION     | DESCRIPTION                                                                 |
|------------|-----------------------------------------------------------------------------|
| Paramètres Spécifiques Utilisateur  | Remplacer les propriétés de l'entrée sélectionnée avec des paramètres spécifiques à l'utilisateur actuel. Pour plus d'informations, veuillez consulter [Paramètres Spécifiques](/rdm/windows/commands/edit/setting-overrides/specific-settings/). |
| Paramètres Spécifiques Locaux | Remplacer les propriétés de l'entrée sélectionnée avec des paramètres spécifiques à la machine locale. Pour plus d'informations, veuillez consulter [Paramètres Spécifiques](/rdm/windows/commands/edit/setting-overrides/specific-settings/). |


{% snippet, "badgeInfo" %}
Une colonne Paramètres Spécifiques peut être ajoutée dans le ***{{ fr.NPANE }}***. Cliquez droit sur la colonne ***Nom*** dans le ***{{ fr.NPANE }}*** et sélectionnez ***Choix des Colonnes***. Double-Cliquez sur ***Paramètres Spécifiques*** pour ajouter la colonne. Maintenant, si un paramètre spécifique est appliqué à une entrée, il sera affiché à côté du nom de l'entrée.
![{{ fr.NPANE }} - Choix des Colonnes](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2252.png)
{% endsnippet %}

## Lot

| OPTION     | DESCRIPTION                                                                 |
|------------|-----------------------------------------------------------------------------|
| Éditer (Actions Spéciales) | Effectuer des actions spéciales sur les entrées sélectionnées, telles que changer le type, exécuter un script, et plus encore. Pour plus d'informations, veuillez consulter les [Exemples d'Actions en Lot](/powershell/rdm-powershell/powershell-scripting/custom-powershell-commands/batch-actions-samples/).                                                                   |
| Édition en Lot           | Effectuer une action sur plusieurs entrées à la fois. Cela est particulièrement utile pour effectuer des modifications de masse sur les entrées (telles que changer le mode d'affichage après avoir modifié l'espace de travail ou leurs entrées d'identifiants lors du changement de vos mots de passe). Plusieurs entrées doivent être sélectionnées pour que cette fonctionnalité soit visible. Pour plus d'informations, veuillez consulter [Édition en Lot](/rdm/windows/commands/edit/batch/batch-edit/). |
| Déplacer vers {{ fr.VLT }} | Transférer les entrées sélectionnées vers un autre {{ fr.VLT }} dans la base de données.|

## Exporter

| OPTION     | DESCRIPTION                                                                 |
|------------|-----------------------------------------------------------------------------|
| Exporter Entrée comme Fichier Bureau à Distance (.rdp) | Exporter les entrées sélectionnées au format de fichier Bureau à Distance (.rdp).                                                                                    |
| Exporter Sélection (.rdm)              | Exporter les entrées sélectionnées dans un fichier .rdm qui peut ensuite être importé dans n'importe quelle source de données {{ fr.RDM }}. Vous pourriez choisir d'inclure les identifiants de votre entrée dans votre format d'exportation et de sécuriser votre fichier avec une clé maître.    |
```