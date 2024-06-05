---
eleventyComputed:
  title: Modification par lot dans {{ fr.RDM }}
  status: Sujet disponible en langue allemande
---
Dans {{ fr.RDM }}, vous pouvez modifier les propriétés de plusieurs entrées ou dossiers à la fois en utilisant les fonctionnalités [***Modification par lot***](/rdm/windows/commands/edit/batch/batch-edit/) ou [***Modifier (Actions Spéciales)***](/rdm/commands/edit/batch/edit-special-actions/).
![Modifier (Actions Spéciales) et Modification par lot](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2104.png)

## Sélection d'entrée/dossier
Les entrées et dossiers à modifier peuvent être sélectionnés en utilisant les méthodes ci-dessous. Choisissez celle qui convient le mieux à vos besoins.

{% snippet, "badgeNotice" %}
Il est recommandé d'utiliser la ***[Recherche Avancée](#advanced)*** ou la ***[Recherche Multi {{ fr.VLT }}](#multi)***, car les sélectionner manuellement dans le ***{{ fr.NPANE }}*** prend plus de temps et comporte le risque d'oublier certaines entrées/dossiers. Cette dernière méthode ne peut être recommandée que si vous avez seulement quelques entrées sélectionnées à modifier.

Quelle que soit la méthode utilisée, il est recommandé de ne sélectionner qu'un seul type d'entrée pour chaque action de modification par lot.
{% endsnippet %}

{% snippet, "badgeCaution" %}
Pour modifier les informations des dossiers, vous DEVEZ passer par la ***[Recherche Avancée](#advanced)*** ou la ***[Recherche Multi {{ fr.VLT }}](#multi)*** pour sélectionner les dossiers. Si vous sélectionnez les dossiers manuellement dans le ***{{ fr.NPANE }}***, vous modifierez les informations des entrées enfants des dossiers, et NON les informations des dossiers eux-mêmes.
{% endsnippet %}

* [Sélection manuelle](#manual)
* [Recherche Avancée](#advanced)
* [Recherche Multi {{ fr.VLT }}](#multi)

### Sélection manuelle
Dans {{ fr.RDM }}, sélectionnez toutes les entrées/dossiers manuellement dans le ***{{ fr.NPANE }}***. Utilisez <kbd>Ctrl</kbd>+clic gauche pour les sélectionner un par un ou <kbd>Shift</kbd>+clic gauche pour en sélectionner plusieurs en même temps. Notez qu'en sélectionnant un dossier, vous modifiez les informations de ses entrées enfants et non les informations du dossier.

Passez à la section [Actions de Modification par Lot](#edit) pour les étapes suivantes ou continuez à lire sur les autres méthodes de sélection.

### Recherche Avancée
La fonctionnalité ***[Recherche Avancée](/rdm/windows/commands/view/panels/search/advanced/)*** vous permet de rechercher dans le {{ fr.VLT }} actuellement sélectionné.
![Recherche Avancée](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2108.png)
1. Dans {{ fr.RDM }}, allez à ***Affichage – Recherche – Recherche Avancée*** ou appuyez sur le raccourci clavier F11.
1. Dans l'onglet ***Recherche*** de la fenêtre ***Recherche Avancée***, sélectionnez et spécifiez des critères pour filtrer votre recherche. D'autres paramètres de recherche sont également disponibles dans l'onglet ***Paramètres***. Lorsque vous avez terminé, cliquez sur ***Rechercher***.
{% snippet, "badgeInfo" %}
Pour filtrer votre recherche par type de dossier, vous devez utiliser la fonctionnalité ***Recherche Avancée*** car elle n'est pas disponible dans ***Recherche Multi {{ fr.VLT }}***. Recherchez par ***Type de connexion*** et sélectionnez le type de dossier dans la liste déroulante à côté.
{% endsnippet %}

3. Sélectionnez les entrées/dossiers que vous souhaitez modifier. Pour les sélectionner tous, cliquez n'importe où dans le champ de résultats et utilisez le raccourci clavier <kbd>Ctrl</kbd>+<kbd>A</kbd>.
1. Lorsque votre sélection est complète, cliquez sur le bouton ***Sélectionner dans {{ fr.NPANE }}*** dans le coin inférieur droit de la fenêtre.

Passez à la section [Actions de Modification par Lot](#edit) pour les étapes suivantes ou continuez à lire sur les autres méthodes de sélection.

### Recherche Multi {{ fr.VLT }}
![Recherche Multi {{ fr.VLT }}](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2109.png)
La fonctionnalité [***Recherche Multi {{ fr.VLT }}***](/rdm/windows/commands/view/panels/search/multi-vault/) vous permet de rechercher dans tous les {{ fr.VLT }}s de la base de données sélectionnée en même temps.

1. Dans {{ fr.RDM }}, allez à ***Affichage – Recherche – Recherche Multi {{ fr.VLT }}*** ou appuyez sur le raccourci clavier F12.
1. Sélectionnez et spécifiez des critères pour filtrer votre recherche, puis cliquez sur ***Rechercher***.
{% snippet, "badgeInfo" %}
Pour filtrer votre recherche par type de dossier, vous devez utiliser la fonctionnalité ***[Recherche Avancée](#advanced)***.
{% endsnippet %}

3. Sélectionnez les entrées/dossiers que vous souhaitez modifier. Pour les sélectionner tous, cliquez n'importe où dans le champ de résultats et utilisez le raccourci clavier <kbd>Ctrl</kbd>+<kbd>A</kbd>.
1. Lorsque votre sélection est complète, cliquez sur le bouton ***Sélectionner dans {{ fr.NPANE }}*** dans le coin inférieur droit de la fenêtre.

Passez à la section [Actions de Modification par Lot](#edit) pour les étapes suivantes.

## Actions de Modification par Lot
La fonctionnalité ***Modification par Lot*** vous permet d'effectuer les actions suivantes :

* Changer le Nom d'Hôte/Identifiants Enregistrés
* Réinitialiser Tous les Identifiants/Mots de Passe Enregistrés
* Modifier les Entrées (Paramètres Généraux / Paramètres de Type de Session / Groupe de Sécurité Hérité / Actif / Paramètres Spécifiques à l'Utilisateur / Paramètres Spécifiques Locaux)

{% snippet, "badgeWarning" %}
La sécurité héritée et les groupes de sécurité ont été dépréciés et seront complètement supprimés à partir de la version 2023.3 de {{ fr.RDM }}. Voir [Migrer des groupes de sécurité vers des groupes d'utilisateurs](/rdm/mac/kb/rdm-windows/how-to-articles/migration-security-groups-user-groups/).
{% endsnippet %}

Continuez à la section suivante si les options de ***Modification par Lot*** couvrent vos besoins. Sinon, vous pouvez aller à [Modifier (Actions Spéciales)](#editspecialactions) pour utiliser une commande PowerShell personnalisée dans ***Modifier (Actions Spéciales)***.

### Modification par Lot
1. Avec vos entrées sélectionnées, allez à ***Modifier – Lot – Modification par Lot*** dans le ruban. Alternativement, vous pouvez faire un clic droit sur votre sélection d'entrées et aller à ***Modifier – Modification par Lot***.
1. Sélectionnez l'une des options de modification de la liste pour qu'une fenêtre apparaisse. Notez que seules les options pertinentes pour vos types d'entrée seront disponibles.
![Options de Modification par Lot](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2103.png)
1. Dans la fenêtre, modifiez les informations et paramètres de votre choix, puis enregistrez.
{% snippet, "badgeInfo" %}
Chaque option de modification affiche différentes informations et paramètres qui peuvent être modifiés. Pour un aperçu de chacune d'elles, voir [Modification par Lot](/rdm/windows/commands/edit/batch/batch-edit/).
{% endsnippet %}

Vos entrées/dossiers ont maintenant été modifiés.

### Modifier (Actions Spéciales)
1. Avec vos entrées sélectionnées, allez à ***Accueil – Presse-papiers – Copier*** dans le ruban. Alternativement, vous pouvez faire un clic droit sur votre sélection d'entrée et sélectionner ***Presse-papiers – Copier***.
![Accueil – Presse-papiers – Copier](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2105.png)
1. Dans la fenêtre ***Options de Copie***, allez à l'onglet ***Aperçu***.
1. Sélectionnez tout le contenu de la boîte, puis copiez et collez-le dans un éditeur de texte pour récupérer le nom du ou des champ(s) que vous souhaitez modifier dans une étape ultérieure.
1. Dans {{ fr.RDM }}, fermez la fenêtre ***Options de Copie***, mais assurez-vous de garder vos entrées sélectionnées dans le ***{{ fr.NPANE }}***.
1. Avec vos entrées toujours sélectionnées, allez à ***Modifier – Lot – Modifier (Actions Spéciales)*** dans le ruban. Alternativement, vous pouvez faire un clic droit sur votre sélection d'entrée et sélectionner ***Modifier – Modifier (Actions Spéciales)***.
1. Dans la section ***Général***, sélectionnez ***Commande PowerShell Personnalisée***, puis cliquez sur ***OK***.
![Sélection d'Action Spéciale](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2106.png)
1. Dans la boîte, en utilisant les informations que vous avez copiées à l'étape 3, écrivez votre script PowerShell personnalisé. Vous pouvez utiliser l'un de ces [exemples](/powershell/rdm-powershell/powershell-scripting/custom-powershell-commands/batch-actions-samples/).
1. Cliquez sur ***OK***.

Vos entrées/dossiers ont maintenant été modifiés.