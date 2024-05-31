---
eleventyComputed:
  title: Utiliser Lansweeper dans {{ fr.RDM }}
  description: Comment utiliser Lansweeper dans {{ fr.RDM }}.
---
Pour les personnes utilisant actuellement Lansweeper ou envisageant son ajout à leur boîte à outils informatique, l'intégration dans {{ fr.RDM }} offre des avantages substantiels. Elle permet aux utilisateurs de voir de manière transparente tous les actifs Lansweeper au sein de {{ fr.RDM }}. De plus, cette intégration facilite la synchronisation automatique et la génération d'entrées pour les actifs Lansweeper, améliorant considérablement l'efficacité et l'efficacité des processus de gestion informatique.

## Lier Lansweeper aux propriétés d'une entrée via l'onglet de gestion des actifs informatiques
La fonctionnalité de Gestion des Actifs Informatiques peut être utilisée pour lier un gestionnaire d'actifs (par exemple, [BlueTally](/rdm/kb/rdm-windows/how-to-articles/it-asset-management/), Lansweeper) via les propriétés d'une entrée. Un onglet intégré affichera alors la page principale de Lansweeper. Vous pouvez également basculer facilement entre vos données dans {{ fr.RDM }} et Lansweeper.

{% snippet, "badgeInfo" %}
Seuls les types d'entrée ***Session***, ***Gestion à Distance***, ***Divers***, ***VPN***, ***Synchroniseur*** et ***Modèle*** prennent en charge cette fonctionnalité pour le moment. Les entrées ***Gestion des Actifs Informatiques*** fonctionnent différemment de la fonctionnalité.
{% endsnippet %}

1. Faire un clic droit sur une entrée et sélectionner ***Propriétés***.
1. Aller à ***Afficher*** – ***Gestion des Actifs Informatiques***.
1. Sélectionner ***Lansweeper*** dans le menu déroulant.
1. Saisir l'URL vers un actif spécifique.
1. Taper un ***titre de gestion des actifs informatiques*** dans le champ correspondant.
1. Cliquer sur ***Mettre à jour*** pour sauvegarder les modifications et fermer la fenêtre.
![Gestion des Actifs Informatiques](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6165.png)
1. Dans le ***Tableau de bord***, sélectionner l'onglet ***Gestion des Actifs Informatiques***.
   {% snippet, "badgeInfo" %}
   L'onglet sera nommé selon ce qui a été écrit dans le champ ***titre de gestion des actifs informatiques***. Si le champ est laissé vide, ***Lansweeper*** s'affichera (si ce service a été choisi), ou s'affichera comme ***Gestion des Actifs Informatiques***.
   {% endsnippet %}

   ![Onglet Gestion des Actifs Informatiques](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6176.png)

## Importer des actifs depuis Lansweeper
Pour importer des actifs Lansweeper et créer des connexions dans {{ fr.RDM }}, utiliser l'option ***Import CSV***.

1. Aller à ***Fichier*** – ***Importer*** – ***Session*** – ***Lansweeper***.
![Fichier – Importer – Session – Lansweeper](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6175.png)
Vous pouvez également faire un clic droit sur le ***{{ fr.NPANE }}*** – ***Importer*** – ***Importer des Sessions Depuis*** – ***Lansweeper***.
1. Dans la fenêtre ***Importer depuis Lansweeper***, entrer le ***code d'identité*** et le ***site***.
   {% snippet, "badgeInfo" %}
   * Le code d'identité provient de l'autorisation d'une application personnelle sur votre site Lansweeper. Voici un lien vers leur documentation sur comment réaliser cela : [Comment s'Authentifier avec notre API](https://docs.lansweeper.com/DOCS/API/AUTHENTICATE#personal-application).
   * Le code d'identité et vos identifiants directs pour Lansweeper peuvent être sauvegardés dans les ***Paramètres de Mon Compte***. Ceux-ci peuvent être trouvés dans ***Fichier*** – ***Paramètres de Mon Compte*** – ***Lansweeper***.
   {% endsnippet %}
1. Cliquer sur ***Suivant***.
1. Sélectionner le ***type***.
1. Cliquer sur ***Importer***.

L'importation est terminée.

## Synchroniseur
Peupler les {{ fr.VLT }}s avec des actifs est une tâche chronophage dans {{ fr.RDM }}. Les [Synchroniseurs](/rdm/windows/concepts/advanced-concepts/synchronizers/) répondent à cela en permettant l'importation directe d'informations et de sessions depuis un fournisseur dans le bon format, assurant des données à jour et préservant l'héritage entre les éléments.

1. Ajouter une nouvelle entrée dans {{ fr.RDM }}.
1. Aller à ***Synchroniseur***.
1. Choisir ***Lansweeper***.
1. Cliquer sur ***Sélectionner***.
![Ajouter une nouvelle entrée – Synchroniseur – Lansweeper](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6167.png)

### Onglet Général
* ***Nom*** : Nom de l'entrée dans {{ fr.RDM }}.
* ***Dossier de destination*** : Cliquer sur le bouton ellipsis pour définir le chemin du dossier dans l'arborescence de {{ fr.RDM }} (qui ne peut être que dans le même {{ fr.VLT }}).
* ***Synchroniser automatiquement*** : L'entrée se synchronisera automatiquement avec Lansweeper.
* ***Utiliser les Paramètres de Mon Compte*** : Utiliser les Paramètres de Mon Compte au lieu du code d'identité.
* ***Code d'identité*** : Jeton pour demander des informations API.
* ***Site*** : Choisir un site Lansweeper.
* ***Modèle*** : Modèle Lansweeper créé au sein de {{ fr.RDM }}.
* ***Vérification des doublons*** n'importera pas les entrées ayant le même type et hôte.
    * ***Racine*** : Vérifier les doublons dans toute la source de données.
    * ***Dossier de destination*** : Vérifier les doublons uniquement dans le dossier de destination {{ fr.RDM }} ou sous-dossier.

![Onglet Général](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6173.png)

### Onglet Filtre
* ***Utiliser une requête personnalisée*** : Si nos paramètres pris en charge ne répondent pas à vos besoins, ou si vous avez déjà une requête pré-faite, vous pouvez l'entrer dans cette section. Suivant la documentation de Lansweeper [ici](https://docs.lansweeper.com/docs/api/getting-data#filtered-query), ce que vous devez entrer dans {{ fr.RDM }} est tout ce qui se trouve dans les crochets "filters:". Par exemple, voici un filtre qui récupère les Systèmes d'Alarme et les appareils Android, dont le nom contient la valeur "asset".

```
conjunction: AND,
groups:
[
	{
		conjunction: OR, conditions:
		[
			{operator: EQUAL path: "assetBasicInfo.type" value: "Alarm system"},
			{operator: EQUAL path: "assetBasicInfo.type" value: "Android"}
		]
	},
	{
		conjunction: OR, conditions:
		[
			{operator: LIKE path: "assetBasicInfo.name" value: "asset"}
		]
	}
]
```
* ***Type*** : Sélectionner le type d'actif que vous souhaitez importer depuis la liste des Types.
* ***Ajouter une Condition*** : Ajouter une condition au filtre. Vous devez d'abord saisir la valeur de la propriété, suivie de l'opérateur que vous souhaitez appliquer à cette condition.

![Onglet Filtre](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6171.png)

### Onglet Avancé
* ***Préfixe du nom de session*** : Un préfixe pour l'entrée qui sera créée via le synchroniseur
* ***Suffixe du nom de session*** : Un suffixe pour l'entrée qui sera créée via le synchroniseur
* ***Action en cas de non-concordance des entrées*** : L'action qui sera effectuée lorsque les entrées précédemment créées par le synchroniseur ne correspondent pas aux données trouvées lors de la synchronisation.
    * ***Aucune*** : Ne rien faire.
    * ***Supprimer*** : Supprimer cette entrée.
    * ***Déplacer vers*** : Déplacer vers le ***Dossier de destination*** sélectionné.
    * ***Marquer comme expiré*** : Marquer cette entrée comme expirée.
* ***Mode silencieux*** : Cette option désactive les dialogues d'erreur (utile lorsque le synchroniseur fonctionne automatiquement à des intervalles définis).

![Onglet Avancé](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6174.png)
