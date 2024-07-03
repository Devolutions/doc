---
eleventyComputed:
  title: System {{ fr.VLT }}
  description: Le System {{ fr.VLT }} est disponible pour les sources de données avancées afin de centraliser les entrées partagées couramment à travers les coffres et n'est accessible que par les administrateurs.
---
Le ***System {{ fr.VLT }}*** est disponible pour les [sources de données avancées](/rdm/data-sources/data-sources-types/advanced-data-sources/) afin de centraliser les entrées partagées couramment à travers les coffres et n'est accessible que par les administrateurs. Le ***System {{ fr.VLT }}*** peut être trouvé sous l'onglet ***Affichage*** dans le ruban ou dans le {{ fr.NPANE }}. Il peut être utilisé avec un serveur Microsoft SQL Server, Azure SQL Server, {{ fr.DVLS }}, ou {{ fr.DHUB }}.
![Ribbon](https://cdnweb.devolutions.net/docs/RDMW0003_2024_2.png)
![{{ fr.NPANE }}](https://cdnweb.devolutions.net/docs/RDMW0004_2024_2.png)

Seuls les types d'entrées ***Contacts***, ***Macros/scripts/outils*** et ***VPNs/tunnels/gateways*** sont disponibles pour être créés et stockés dans le ***System {{ fr.VLT }}***. Les entrées peuvent ensuite être organisées avec des dossiers.

{% snippet, "badgeInfo" %}
Les types d'entrées ***Macros/scripts/outils*** ne peuvent être créés qu'à travers {{ fr.RDM }}.
{% endsnippet %}

## Lier les entrées du System {{ fr.VLT }} aux entrées {{ fr.VLT }}

### Permissions d'entrée
Dans une source de données {{ fr.DVLS }} ou {{ fr.DHUB }}, vous pouvez modifier les permissions des dossiers ou des entrées via les interfaces web respectives. Vous ne pouvez pas modifier les permissions racines du System {{ fr.VLT }}.

### Lier une entrée de contact du System {{ fr.VLT }}
1. Aller dans les ***Propriétés*** d'une entrée qui supporte le contact lié.
1. Sous ***Affichage*** – ***Actif***, cliquer sur le bouton ellipsis (***…***) dans le champ ***Propriétaire***.
![Option Propriétaire](https://cdnweb.devolutions.net/docs/RDMW0005_2024_2.png)
1. Choisir un contact du ***System {{ fr.VLT }}*** à lier à l'entrée.
![Contact du System {{ fr.VLT }}](https://cdnweb.devolutions.net/docs/RDMW0006_2024_2.png)
1. Cliquer sur ***Ok*** puis sur ***Mettre à jour*** pour sauvegarder les changements.

### Lier une entrée macro/script/outil du System {{ fr.VLT }}
1. Aller dans les ***Propriétés*** d'une entrée pertinente.
1. Sous ***Connexion*** – ***Événements*** aller à l'onglet ***Après ouverture***.
1. Choisir ***Macro/script/outil*** dans la liste déroulante.
1. Cliquer sur la deuxième liste déroulante et sélectionner une entrée macro/script/outil du ***System {{ fr.VLT }}*** à lier avec cette entrée.
![Entrée macro/script/outil du System {{ fr.VLT }}](https://cdnweb.devolutions.net/docs/RDMW0007_2024_2.png)
1. Cliquer sur ***Mettre à jour*** pour sauvegarder les changements.

### Lier une entrée VPN/tunnel/gateway du System {{ fr.VLT }}
1. Sélectionner une entrée qui supporte l'utilisation d'une connexion VPN et aller dans les ***Propriétés***.
1. Sous ***Connexion*** – ***VPN/tunnel/gateway***, définir la valeur ***Connecter***.
1. Cliquer sur le bouton ellipsis (***…***) à côté de l'option ***Type***.
![Option Type](https://cdnweb.devolutions.net/docs/RDMW0008_2024_2.png)
1. Sous l'onglet ***Existant*** sélectionner le type de ***Session*** ***Liée (coffre)***.
1. Cliquer sur le champ à côté pour sélectionner et lier l'entrée VPN/tunnel/gateway du ***System {{ fr.VLT }}***.
![Entrée VPN/tunnel/gateway du System {{ fr.VLT }}](https://cdnweb.devolutions.net/docs/RDMW0009_2024_2.png)
1. Cliquer sur ***Ok*** puis sur ***Mettre à jour*** pour sauvegarder les changements.
