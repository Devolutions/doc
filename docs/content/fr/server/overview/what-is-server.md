---
eleventyComputed:
  title: "{{ fr.DVLS }}"
  description: "{{ fr.DVLS }} est une solution locale pour stocker et partager des informations dans toute votre organisation. Gérer les connexions à distance, les identifiants et les informations sensibles facilement."
  order: 10
  keywords:
  - sur site
  - auto-hébergé
  - rôles
---
![!!{{ fr.DVLS }} logo]({{ locale[lang].projects.server.logo }})

{{ fr.DVLS }} est une solution locale pour stocker et partager des informations dans toute votre organisation. Gérer les connexions à distance, les identifiants et les informations sensibles facilement.

Utiliser notre ***contrôle d'accès basé sur les groupes d'utilisateurs*** pour octroyer des permissions de manière granulaire. Un journal avancé de toute l'activité des utilisateurs est inclus pour offrir une visibilité sur tous les aspects de la solution.

Grâce à son architecture web, vous pouvez proposer {{ fr.DVLS }} uniquement depuis votre intranet ou le publier en ligne.

{% youtube 'bOTKsqdPulI' %}

Il y a deux manières d'utiliser {{ fr.DVLS }} :

| ![!!clip10056](https://cdnweb.devolutions.net/docs/docs_en_server_clip10056.png)<br><br>**{{ fr.VLT }} basé sur le Web**<br><br>Accès par navigateur web et [{{ fr.WBEX }}](/workspace/workspace-browser-extension/) | ![!!Application64x64](https://cdnweb.devolutions.net/docs/docs_common_Application64x64.png)<br><br>**Gestion de session**<br><br>Utilisation d'une application cliente (bureau ou mobile) |
| --- | --- |
| Accéder aux ressources {{ fr.VLT }} depuis un navigateur web en utilisant une Licence d'Accès Client (CAL). Les identifiants sont gérés directement depuis l'interface web, et aucune application cliente n'est requise.<br><br>Avec le {{ fr.WBEX }}, les identifiants peuvent être automatiquement soumis lors de la connexion à un site web. | Accéder aux ressources {{ fr.VLT }} en utilisant nos applications clientes, qui communiquent avec les services web {{ fr.DVLS }}. Une installation locale d'une application cliente telle que {{ fr.RDM }} est requise pour gérer la source de données et ses ressources. Notez que nous proposons des éditions pour Windows, macOS, Android et iOS.<br><br>Utiliser n'importe quel type d'entrée, gérer tous les aspects de la source de données et surveiller l'activité des utilisateurs dans la même application. |
| Les technologies d'accès à distance telles que RDP, SSH et la console web Active Directory sont prises en charge dans l'interface web via {{ fr.DGW }}. | Contrairement à l'accès par navigateur web, {{ fr.RDM }} peut lancer une large gamme de sessions en utilisant des technologies d'accès à distance. |

## Points forts

| ![!!clip10054](https://cdnweb.devolutions.net/docs/docs_en_server_clip10054.png)<br><br>**Serveur haut de gamme** | ![!!clip10055](https://cdnweb.devolutions.net/docs/docs_en_server_clip10055.png)<br><br>**Intégration complète à Active Directory (AD)** | ![!!clip10057](https://cdnweb.devolutions.net/docs/docs_en_server_clip10057.png)<br><br>Architecture web |
| --- | --- | --- |
| Auto-hébergé localement sur un serveur d'applications ou un cloud privé. Stocker les entrées dans un nombre illimité de {{ fr.VLT }}s et gérer l'accès à ces entrées avec notre ***contrôle d'accès basé sur les groupes d'utilisateurs***. | Les utilisateurs accédant au système se verront octroyer des permissions basées sur leur appartenance à des groupes AD spécifiques, rendant la gestion des utilisateurs presque transparente pour les organisations qui utilisent AD pour gérer les équipes. | Implémenté en utilisant une architecture Web de sorte qu'il peut être exposé publiquement sur Internet ou uniquement à votre Intranet ou cloud privé. |

| ![!!clip10050](https://cdnweb.devolutions.net/docs/docs_en_server_clip10050.png)<br><br>**Authentification multi-facteurs** | ![!!clip10062](https://cdnweb.devolutions.net/docs/docs_en_server_clip10062.png)<br><br>**Notifications par courriel** | ![!!clip10060](https://cdnweb.devolutions.net/docs/docs_en_server_clip10060.png)<br><br>**Restrictions IP** |
| --- | --- | --- |
| Le plus large choix de fournisseurs d'[authentification multi-facteurs](/server/web-interface/administration/configuration/server-settings/security/two-factor/) (AMF). Plusieurs fournisseurs peuvent être activés simultanément. Ils peuvent être appliqués sélectivement par utilisateur. | Recevoir facultativement des notifications par courriel pour divers événements sur les sessions, les utilisateurs, les groupes d'utilisateurs, etc. | Contrôler l'accès à {{ fr.DVLS }} depuis des adresses/plages IP, incluant la restriction GeoIP et la liste blanche/liste noire d'IP. |