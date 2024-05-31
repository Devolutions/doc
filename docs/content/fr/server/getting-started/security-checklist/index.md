---
eleventyComputed:
  title: Liste de vérification de sécurité
---
Pour atteindre le plus haut niveau de sécurité, suivre les directives suivantes.

{% snippet, "shieldWarning" %}
Ces recommandations sont valides UNIQUEMENT si l'instance {{ fr.DVLS }} est hébergée exclusivement sur un intranet. Impliquer une personne ayant des connaissances en sécurité Internet pour héberger en toute sécurité toute application sur Internet. Protéger le site contre les attaques par déni de service à l'aide d'un appareil ou d'un module de sécurité externe à {{ fr.DVLS }}.
{% endsnippet %}

## Général

* Utiliser exclusivement l'authentification Windows.
* Assurer que toute communication LDAP utilise [LDAP sur SSL](/server/getting-started/security-checklist/ldap-over-ssl/).

## SQL Server

* Activer uniquement le ***Mode d'authentification Windows***.
* Créer un compte de domaine qui sera utilisé pour créer la base de données (VaultDBOwner), ainsi qu'un autre compte qui sera utilisé par le serveur web pour se connecter à la base de données (VaultDBRunner). Ce dernier doit avoir uniquement l'ensemble minimal de permissions pour effectuer ses tâches.
* Communiquer UNIQUEMENT à travers une connexion chiffrée, voir [Chiffrer les Connexions au SQL Server](/server/getting-started/security-checklist/encrypting-connections-sql-server/).

## Serveur Web

* Configurer le pool d'applications pour utiliser les identifiants de domaine. Ce compte sera ajouté au SQL Server comme un login et se verra accorder uniquement les permissions nécessaires (VaultDBRunner).
* Servir le contenu à travers SSL (https). Voir [Configurer SSL](/server/kb/how-to-articles/configure-ssl/).
