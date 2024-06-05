---
eleventyComputed:
  title: Configuration de la gestion des appareils mobiles depuis {{ fr.RDM }}
  description: Utiliser une application comme Workspace One pour pousser la configuration vers les appareils iOS et/ou Android d'autres utilisateurs.
---
L'environnement Devolutions n'a pas d'outil de Gestion des Appareils Mobiles (MDM) pour pousser la configuration vers les appareils iOS et/ou Android d'autres utilisateurs. Mais avec l'utilisation d'une application comme Workspace One, il est possible de le faire.

## Solution
1. Configurer un appareil iOS et/ou Android {{ fr.RDM }}.
1. Exporter la configuration dans un fichier MDM.
    * Dans {{ fr.RDMIOS }}, aller à ***Paramètres – Avancé – Générer un fichier de configuration d'application gérée (xml, plist)***.
    * Dans {{ fr.RDMANDROID }}, aller à ***Paramètres – Générer un fichier de configuration d'application gérée (xml, plist)***.
1. Dans votre application MDM, utiliser le fichier MDM exporté pour le pousser vers tous les appareils.