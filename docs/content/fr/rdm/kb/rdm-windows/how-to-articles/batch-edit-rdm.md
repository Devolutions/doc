---
eleventyComputed:
  title: Modification par lot dans {{ fr.RDM }}
  status: Sujet disponible en langue allemande
---
Dans {{ fr.RDM }}, éditer les propriétés de plusieurs entrées ou dossiers à la fois en utilisant les fonctionnalités [***Modification par lot***](/rdm/windows/commands/edit/batch/batch-edit/) ou [***Édition (Actions spéciales)***](/rdm/commands/edit/batch/edit-special-actions/).
![Édition (Actions spéciales) et Modification par lot](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2104.png)

## Sélection d'entrée/dossier
Sélectionner les entrées et dossiers à éditer en utilisant les méthodes ci-dessous. Choisir celle qui convient le mieux à vos besoins.

{% snippet, "badgeNotice" %}
La meilleure pratique suggère d'utiliser la ***[Recherche avancée](#advanced)*** ou la ***[Recherche Multi {{ fr.VLT }}](#multi)***, car les sélectionner manuellement dans le ***{{ fr.NPANE }}*** prend plus de temps et comporte le risque d'oublier certaines entrées/dossiers. Cette dernière méthode ne peut être recommandée que si vous avez seulement quelques entrées sélectionnées à éditer.

Quelle que soit la méthode utilisée, il est recommandé de ne sélectionner qu'un seul type d'entrée pour chaque action de modification par lot.
{% endsnippet %}

{% snippet, "badgeCaution" %}
Pour éditer les informations des dossiers, il FAUT passer par la ***[Recherche avancée](#advanced)*** ou la ***[Recherche Multi {{ fr.VLT }}](#multi)*** pour sélectionner les dossiers. Si vous sélectionnez les dossiers manuellement dans le ***{{ fr.NPANE }}***, vous éditerez les informations des entrées enfants des dossiers, et NON les informations des dossiers eux-mêmes.
{% endsnippet %}

* [Sélection manuelle](#manual)
* [Recherche avancée](#advanced)
* [Recherche Multi {{ fr.VLT }}](#multi)

### Sélection manuelle
Dans {{ fr.RDM }}, sélectionner toutes les entrées/dossiers manuellement dans le ***{{ fr.NPANE }}***. Utiliser <kbd>Ctrl</kbd>+clic gauche pour les sélectionner un par un ou <kbd>Shift</kbd>+clic gauche pour en sélectionner plusieurs en même temps. Noter qu'en sélectionnant un dossier, vous éditez les informations de ses entrées enfants et non les informations du dossier.

Poursuivre à la section [Actions de Modification par lot](#edit) pour les étapes suivantes ou continuer à lire sur les autres méthodes de sélection.

### Recherche avancée
La fonctionnalité ***[Recherche avancée](/rdm/windows/commands/view/panels/search/advanced/)*** permet de rechercher dans le {{ fr.VLT }} actuellement sélectionné.
![Recherche avancée](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2108.png)
1. Dans {{ fr.RDM }}, aller à ***Affichage – Recherche – Recherche avancée*** ou appuyer sur le raccourci clavier F11.
1. Dans l'onglet ***Recherche*** de la fenêtre ***Recherche avancée***, sélectionner et spécifier des critères pour filtrer votre recherche. D'autres paramètres de recherche sont également disponibles dans l'onglet ***Paramètres***. Lorsque terminé, cliquer sur ***Rechercher***.
{% snippet, "badgeInfo" %}
Pour filtrer votre recherche par type de dossier, vous devez utiliser la fonctionnalité ***Recherche avancée*** car elle n'est pas disponible dans ***Recherche Multi {{ fr.VLT }}***. Rechercher par ***Type de connexion*** et sélectionner le type de dossier dans la liste déroulante à côté.
{% endsnippet %}

3. Sélectionner les entrées/dossiers que vous souhaitez éditer. Pour les sélectionner tous, cliquer n'importe où dans le champ de résultats et utiliser le raccourci clavier <kbd>Ctrl</kbd>+<kbd>A</kbd>.
1. Lorsque votre sélection est complète, cliquer sur le bouton ***Sélectionner dans {{ fr.NPANE }}*** dans le coin inférieur droit de la fenêtre.

Poursuivre à la section [Actions de Modification par lot](#edit) pour les étapes suivantes ou continuer à lire sur les autres méthodes de sélection.

### Recherche Multi {{ fr.VLT }}
![Recherche Multi {{ fr.VLT }}](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2109.png)
La fonctionnalité [***Recherche Multi {{ fr.VLT }}***](/rdm/windows/commands/view/panels/search/multi-vault/) permet de rechercher dans tous les {{ fr.VLT }}s de la base de données sélectionnée en même temps.

1. Dans {{ fr.RDM }}, aller à ***Affichage – Recherche – Recherche Multi {{ fr.VLT }}*** ou appuyer sur le raccourci clavier F12.
1. Sélectionner et spécifier des critères pour filtrer votre recherche, puis cliquer sur ***Rechercher***.
{% snippet, "badgeInfo" %}
Pour filtrer votre recherche par type de dossier, vous devez utiliser la fonctionnalité ***[Recherche avancée](#advanced)***.
{% endsnippet %}

3. Sélectionner les entrées/dossiers que vous souhaitez éditer. Pour les sélectionner tous, cliquer n'importe où dans le champ de résultats et utiliser le raccourci clavier <kbd>Ctrl</kbd>+<kbd>A</kbd>.
1. Lorsque votre sélection est complète, cliquer sur le bouton ***Sélectionner dans {{ fr.NPANE }}*** dans le coin inférieur droit de la fenêtre.

Poursuivre à la section [Actions de Modification par lot](#edit) pour les étapes suivantes.

## Actions de Modification par lot
La fonctionnalité ***Modification par lot*** permet d'effectuer les actions suivantes :

* Changer le nom d'hôte/enregistrement des identifiants sauvegardés
* Réinitialiser tous les identifiants/mots de passe sauvegardés
* Éditer les entrées (Paramètres généraux / Paramètres de type de session / Groupe de sécurité hérité / Actif / Paramètres spécifiques à l'utilisateur / Paramètres spécifiques locaux)

{% snippet, "badgeWarning" %}
La sécurité héritée et les groupes de sécurité ont été dépréciés et seront complètement supprimés à partir de la version 2023.3 de {{ fr.RDM }}. Voir [Migrer des groupes de sécurité vers des groupes d'utilisateurs](/rdm/kb/rdm-windows/how-to-articles/migration-security-groups-user-groups/).
{% endsnippet %}

Continuer à la section suivante si les options de ***Modification par lot*** couvrent vos besoins. Sinon, vous pouvez aller à [Édition (Actions spéciales)](#editspecialactions) pour utiliser une commande PowerShell personnalisée dans ***Édition (Actions spéciales)***.

### Modification par lot
1. Avec vos entrées sélectionnées, aller à ***Édition – Lot – Modification par lot*** dans le ruban. Alternativement, vous pouvez faire un clic droit sur votre sélection d'entrées et aller à ***Édition – Modification par lot***.
1. Sélectionner une des options d'édition de la liste pour qu'une fenêtre apparaisse. Noter que seules les options pertinentes à vos types d'entrée seront disponibles.
![Options de Modification par lot](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2103.png)
1. Dans la fenêtre, éditer les informations et paramètres de votre choix, puis sauvegarder.
{% snippet, "badgeInfo" %}
Chaque option d'édition affiche différentes informations et paramètres qui peuvent être édités. Pour un aperçu de chacune d'elles, voir [Modification par lot](/rdm/windows/commands/edit/batch/batch-edit/).
{% endsnippet %}

Vos entrées/dossiers ont maintenant été modifiés.

### Édition (Actions spéciales)
1. Avec vos entrées sélectionnées, aller à ***Accueil – Presse-papiers – Copier*** dans le ruban. Alternativement, vous pouvez faire un clic droit sur votre sélection d'entrées et sélectionner ***Presse-papiers – Copier***.
![Accueil – Presse-papiers – Copier](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2105.png)
1. Dans la fenêtre ***Options de copie***, aller à l'onglet ***Aperçu***.
1. Sélectionner tout le contenu de la boîte, puis copier et coller dans un éditeur de texte pour récupérer le nom du(des) champ(s) que vous souhaitez éditer dans une étape ultérieure.
1. Dans {{ fr.RDM }}, fermer la fenêtre ***Options de copie***, mais s'assurer de garder vos entrées sélectionnées dans le ***{{ fr.NPANE }}***.
1. Avec vos entrées toujours sélectionnées, aller à ***Édition – Lot – Édition (Actions spéciales)*** dans le ruban. Alternativement, vous pouvez faire un clic droit sur votre sélection d'entrées et sélectionner ***Édition – Édition (Actions spéciales)***.
1. Dans la section ***Général***, sélectionner ***Commande PowerShell personnalisée***, puis cliquer sur ***OK***.
![Sélection d'Action Spéciale](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2106.png)
1. Dans la boîte, en utilisant les informations que vous avez copiées à l'étape 3, écrire votre script PowerShell personnalisé. Vous pouvez utiliser un de ces [échantillons](/powershell/rdm-powershell/powershell-scripting/custom-powershell-commands/batch-actions-samples/).
1. Cliquer sur ***OK***.

Vos entrées/dossiers ont maintenant été modifiés.