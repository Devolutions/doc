---
eleventyComputed:
  title: Recherche Multi {{ fr.VLT }} 
  description: La fonctionnalité de Recherche Multi {{ fr.VLT }} de {{ fr.RDMMAC }} permet de rechercher des dossiers et des entrées dans tous les {{ fr.VLT }}s de la source de données sélectionnée en une seule fois.
---
![Bouton de Recherche Multi {{ fr.VLT }}](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac0025.png)

La fonctionnalité de ***Recherche Multi {{ fr.VLT }}*** de {{ fr.RDMMAC }} permet de rechercher des dossiers et des entrées dans tous les {{ fr.VLT }}s de la source de données sélectionnée en une seule fois.
![Fenêtre de Recherche Multi {{ fr.VLT }}](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac0028.png)

### Types de Critères

Les critères suivants sont disponibles pour affiner votre recherche : ***Type de connexion***, ***Date de création***, ***Dossier***, ***Date de dernière mise à jour***, ***Nom*** et ***Logiciel***.
{% snippet, "badgeInfo" %}
Au moins un critère doit être utilisé pour filtrer vos résultats, et un maximum de quatre critères peuvent être appliqués à la fois.
{% endsnippet %}

![Critères de Recherche Multi {{ fr.VLT }}](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac0029.png)

{% snippet, "badgeInfo" %}
Dans les bases de données ***Hub***, seul le critère ***Nom*** est disponible.
{% endsnippet %}

Des listes déroulantes apparaîtront lors de la sélection de certains critères pour vous donner plus d'options de recherche.
![Liste déroulante de Recherche Multi {{ fr.VLT }}](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac0030.png)

Ci-dessous, une description de ce à quoi chaque type de ces listes déroulantes est utilisé.

| CRITÈRES                         | DESCRIPTION DE LA LISTE DÉROULANTE |
|----------------------------------|------------------------------------|
| Type de connexion                | Sélectionner dans la liste le type de connexion des entrées que vous recherchez. |
| Date de création<br>Date de dernière mise à jour| Sélectionner dans la liste la période de temps, jusqu'à 90 jours auparavant, lorsque les entrées/dossiers ont été créés ou dernièrement mis à jour. Il y a aussi une option personnalisée dans la liste qui vous permet de spécifier des dates pour délimiter votre période de temps. Cela peut être utile si vous souhaitez rechercher entre des dates spécifiques ou si les entrées ou dossiers ont été créés / dernièrement mis à jour il y a plus de 90 jours.                       |
| Logiciel<br>Dossier<br>Nom       | Rechercher en tapant une partie ou la totalité d'un mot dans le nom des entrées ou des dossiers ou dans leur description. De la liste, sélectionner l'option qui s'applique :<ul><li>Contient – tout nom qui inclut les caractères que vous avez entrés, n'importe où dans le nom du champ.</li><li>Commence par – tout nom commençant par les caractères que vous avez entrés.</li><li>Se termine par – tout nom se terminant par les caractères que vous avez entrés.</li><li>Expression exacte – tout nom correspondant exactement à chaque caractère que vous avez entré.</li><li>Ne contient pas – tout nom qui n'inclut pas les caractères que vous avez entrés.</li><li>Expression régulière (regex) – toute séquence de caractères spécifiant un motif de recherche.</li></ul> |


### Affichage des Résultats

Les résultats sont affichés lorsque le bouton ***Rechercher*** est pressé. Une fois fait, le nom de toutes les entrées et le {{ fr.VLT }} dans lequel elles se trouvent sont montrés dans le champ des résultats.
![Bouton Rechercher](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac0031.png)

Il est possible de sélectionner plusieurs entrées à la fois en cliquant avec <kbd>Shift</kbd> ou toutes avec le raccourci <kbd>Cmd</kbd>+<kbd>A</kbd>. Un clic droit sur une ou plusieurs entrées affiche le même menu et les mêmes options que dans le ***{{ fr.NPANE }}***.

### Autres fonctions

Le bouton ***Sélectionner dans {{ fr.NPANE }}***, lorsqu'il est pressé, vous amène directement à l'entrée ou au dossier sélectionné dans le {{ fr.VLT }} correspondant du ***{{ fr.NPANE }}***.

Le bouton ***Réinitialiser*** efface tous vos résultats et options de recherche, vous donnant une page vierge pour une nouvelle recherche.

