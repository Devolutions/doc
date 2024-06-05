---
eleventyComputed:
  title: Actions sur la liste de lecture
  description: Vous pouvez créer une liste de lecture locale ou partagée dans {{ fr.RDM }}. Il existe plusieurs méthodes pour créer ou éditer une liste de lecture.
---
{% youtube 'VTGPUMl5zKY' %}

Vous pouvez créer une liste de lecture locale ou partagée dans {{ fr.RDM }}. Il existe plusieurs méthodes pour créer ou éditer une liste de lecture :

* Utiliser la gestion de la liste de lecture.
* Créer une liste de lecture en fonction de l'état et de la sélection des entrées.
* Éditer une liste de lecture existante.

{% snippet, "badgeInfo" %}
Vous pouvez également utiliser le menu contextuel pour créer et éditer votre liste de lecture. Lorsque vos entrées sont sélectionnées, faites un clic droit dans le ***{{ fr.NPANE }}*** et sélectionnez ***Liste de lecture – Ajouter la sélection à une liste de lecture existante***.
{% endsnippet %}

## Paramètres

### Utiliser la gestion de la liste de lecture
Depuis le ruban, allez dans ***Éditer – Liste de lecture – Gestion de la liste de lecture***.
![Liste de lecture locale](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10253.png)

Les listes de lecture peuvent être sauvegardées de trois manières différentes :

| OPTION            | DESCRIPTION |
|-------------------|-------------|
| Locale            | La liste de lecture est sauvegardée localement et ne peut être accédée que de cette manière. Elles ne peuvent être lancées que via la gestion de la liste de lecture. |
| Partagée          | La liste de lecture est sauvegardée dans la base de données. Elle peut être accédée par quiconque sur la source de données. Elles peuvent être lancées via la gestion de la liste de lecture ou en utilisant l'entrée elle-même. |
| {{ fr.UVLT_MAJ }} | La liste de lecture est sauvegardée dans votre {{ fr.UVLT }} et ne peut être accédée que par l'utilisateur. Elles peuvent être lancées via la gestion de la liste de lecture ou en utilisant l'entrée elle-même. |


## Actions

### Créer une liste de lecture en fonction de l'état et de la sélection des entrées
1. Si vous souhaitez prédéterminer une liste d'entrées, sélectionnez-les pour votre liste de lecture dans le {{ fr.UVLT }}.
![Entrées sélectionnées dans le {{ fr.NPANE }}](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10902.png)
1. Dans le menu ruban ***Éditer***, cliquez sur ***Liste de lecture***, puis sélectionnez le paramètre que vous préférez.
![Éditer - Liste de lecture - Nouveau](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10792.png)

| OPTION                                        | DESCRIPTION |
|-----------------------------------------------|-------------|
| Nouveau                                       | Crée directement une nouvelle liste de lecture, une fenêtre vous demandera où vous souhaitez la sauvegarder et quelle sélection vous souhaitez mettre en avant. |
| Créer à partir des sessions ouvertes          | Ouvre la fenêtre pour créer une nouvelle liste de lecture avec toutes les sessions actuellement ouvertes déjà sélectionnées pour la liste de lecture. Vous pouvez sélectionner et retirer des entrées supplémentaires si désiré. |
| Ajouter la sélection à une liste de lecture existante (X entrée) | Ouvre une fenêtre où vous pouvez sélectionner les listes de lecture actuellement accessibles et ajoute la sélection dans le {{ fr.NPANE }} à la liste de lecture. |

3. Choisissez si vous souhaitez sauvegarder votre liste de lecture localement, dans un {{ fr.VLT }} partagé ou dans votre {{ fr.UVLT }}. La sauvegarder localement ouvrira une fenêtre différente. Cette fenêtre contiendra tout ce qui est nécessaire pour une liste de lecture locale.
![Sauvegarder la nouvelle liste de lecture](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10255.png)
1. La fenêtre suivante vous permet de choisir comment vous souhaitez que votre sélection actuelle ou les sessions ouvertes affectent votre liste de lecture.
![Entrées sélectionnées dans {{ fr.NPANE }}](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10256.png)

| OPTION                                   | DESCRIPTION |
|------------------------------------------|-------------|
| Entrées sélectionnées dans ***{{ fr.NPANE }}*** | Toutes les entrées actuellement sélectionnées dans le ***{{ fr.NPANE }}*** seront déjà sélectionnées pour votre liste de lecture. Vous pouvez toujours ajouter et retirer des entrées à la liste de lecture si vous le désirez. |
| Sessions à onglets ouvertes              | Toutes les sessions actuellement ouvertes (uniquement intégrées) seront déjà sélectionnées pour votre liste de lecture. Vous pouvez toujours ajouter et retirer des entrées à la liste de lecture si vous le désirez. |
| Aucune sélection                         | Aucune sélection prédéterminée ne sera prise en compte, créez votre liste de lecture à partir de zéro. |

5. Suivez cette séquence :
	1. Entrez un nom pour votre ***Liste de lecture***.
	1. Vous pouvez revoir, ajouter ou retirer des entrées de la liste de lecture dans l'onglet ***Connexions***.
	1. Dans ***Avancé***, vous pouvez définir comment les entrées s'ouvrent.
	![Éditeur de liste de lecture](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10787.png)

Et voilà, votre ***Liste de lecture*** est prête à l'emploi.

### Éditer une liste de lecture existante
1. Dans ***Éditer***, cliquez sur ***Gestion de la liste de lecture***.
![Vue - Gestion de la liste de lecture](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11490.png)
1. Sélectionnez la ***Liste de lecture*** que vous souhaitez modifier et cliquez sur ***Éditer***.
![Gestion de la liste de lecture](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10259.png)

{% snippet, "badgeInfo" %}
Si la ***Liste de lecture*** est partagée ou sauvegardée dans votre {{ fr.UVLT }}, vous pouvez également faire un clic droit sur l'entrée et cliquer sur ***Propriétés*** pour y accéder.
{% endsnippet %}