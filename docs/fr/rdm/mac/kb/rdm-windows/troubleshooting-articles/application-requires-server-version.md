---
eleventyComputed:
  title: L'application nécessite une version de {{ fr.DVLS }} supérieure ou égale à...
---
Cette application nécessite une version de {{ fr.DVLS }} supérieure ou égale à...
![!!KB4045](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4045.png)
Lorsque {{ fr.RDM }} est connecté à une source de données {{ fr.DVLS }}, il valide au démarrage la compatibilité des versions des deux applications. Si une incompatibilité survient, le message d'avertissement ci-dessus apparaîtra dans {{ fr.RDM }}
## Solution
Premièrement, nous recommandons une mise à niveau de {{ fr.DVLS }}. Ce lien fournira des instructions sur comment effectuer la mise à niveau : [Mise à niveau de {{ fr.DVLS }}](/server/getting-started/installation/upgrade-server/) Si vous avez besoin d'assistance pour effectuer la mise à niveau, veuillez nous contacter à [service@devolutions.net](mailto:service@devolutions.net)
## Recommandation
1. Nous conseillons vivement de désactiver la fonction de mise à jour automatique pour éviter toute mise à jour non désirée. Suivre ce lien pour plus d'informations sur comment appliquer des politiques sur les politiques de groupe {{ fr.RDM }} (GPO).
1. Nous recommandons l'utilisation de l'outil ***Gestion des Versions*** dans ***Administration - Paramètres Système - Applications*** de {{ fr.RDM }} Cette fonctionnalité empêchera toute mise à niveau non désirée à moins qu'elle ne soit approuvée par l'administrateur. Utiliser cette fonctionnalité permet à l'administrateur de contrôler les versions de {{ fr.RDM }} disponibles au sein de l'organisation.
![Paramètres Système - Application - Gestion des Versions](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4046.png)
