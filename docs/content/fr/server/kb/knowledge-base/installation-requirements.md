---
eleventyComputed:
  title: Exigences d'installation
  status: Sujet disponible en langue allemande
---
Les éléments suivants décrivent ce que vous aurez besoin d'installer avant d'installer {{ fr.DVLS }}.

Veuillez nous contacter à [service@devolutions.net](mailto:service@devolutions.net) pour réserver une session où nous vous aiderons à installer {{ fr.DVLS }}.

## Étapes

1. Avoir déjà SQL Server (l'Édition Express est prise en charge). Pour les versions de SQL Server prises en charge, veuillez voir [Exigences Système](/server/overview/system-requirements/).
1. Sinon, installer SQL Server et SQL Server Management Studio.
1. Avoir déjà IIS Manager installé sur le serveur où {{ fr.DVLS }} sera hébergé. Pour les versions d'IIS Manager prises en charge, veuillez voir [Exigences Système](/server/overview/system-requirements/).
1. {{ fr.DVLSCONSOLE }} qui peut être téléchargé [via notre site web](https://server.devolutions.net/home/download).
1. [{{ fr.DVLS }} Prérequis](/server/getting-started/installation/installing-web-server-prerequisites/) déjà installés.
1. Devolutions pourrait utiliser plusieurs comptes pour se connecter à la base de données pour les différents composants. Ces comptes peuvent être des comptes de service de domaine (Sécurité intégrée) ou des comptes SQL, en savoir plus sur les comptes dans cet article sur [Enquête de Compte Pré-Déploiement](/server/kb/knowledge-base/pre-deployment-account-survey/).
1. Suivre les étapes dans [Créer une Instance {{ fr.DVLS }}](/server/getting-started/installation/create-server-instance/).

{% snippet, "shieldInfo" %}
Assurez-vous que les clés de chiffrement seront exportées et sauvegardées dans un endroit sûr à la fin du processus d'installation.
{% endsnippet %}