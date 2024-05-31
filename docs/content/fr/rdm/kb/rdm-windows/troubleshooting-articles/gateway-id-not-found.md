---
eleventyComputed:
  title: "Erreur « ID (par défaut) de {{ fr.DGW }} non trouvé »"
  description: "Dans {{ fr.RDM }}, si l'enregistrement de session est configuré pour une passerelle mais qu'une passerelle par défaut n'a pas été définie, alors la session ne peut pas se dérouler."
---
Dans {{ fr.RDM }}, si l'enregistrement de session est configuré pour une passerelle mais qu'une passerelle par défaut n'a pas été définie, alors la session ne peut pas se dérouler. {{ fr.RDM }} renvoie alors l'erreur suivante :

![ID de passerelle par défaut non trouvé](https://cdnweb.devolutions.net/docs/RDMW4020_2024_1.png)

Pour remédier à cela, ouvrir votre source de données {{ fr.DVLS }} ou {{ fr.DHUB }}, aller dans ***Administration***, et cliquer sur l'icône Devolutions Gateway.

![{{ fr.DGW }} dans {{ fr.DVLS }}](https://cdnweb.devolutions.net/docs/RDMW4022_2024_1.png)

Définir la passerelle par défaut souhaitée dans la section ***Général*** du menu Devolutions Gateway et enregistrer vos modifications.

![Définir la passerelle souhaitée comme par défaut](https://cdnweb.devolutions.net/docs/RDMW4021_2024_1.png)
