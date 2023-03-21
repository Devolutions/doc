---
title: Liste de vérification relative à la sécurité
---
Pour atteindre le plus haut niveau de sécurité, vous devez suivre les recommandations suivantes.  

{% snippet icon.shieldWarning %} 
Ces recommandations sont valides seulement si l'instance de {{ fr.RDMS }} est hébergé EXCLUSIVEMENT sur votre intranet . Vous devez impliquer une personne spécialisée dans la sécurité d'Internet afin d'héberger sécuritairement toute application sur Internet. Vous devez protéger le site Web contre les attaques par Déni de service (DoS) en utilisant un appareil ou un module de sécurité externe à {{ fr.RDMS }} . 
{% endsnippet %}
 
## Général 

* Utiliser exclusivement l'authentification Windows.  
* S'assurer que toutes les communications LDAP utilisent [LDAP sur SSL](/fr/server/getting-started/security-checklist/ldap-over-ssl/) .  

## Serveur SQL 

* Activer uniquement le mode d'authentification Windows .  
* Créer un compte de domaine qui sera utilisé pour créer une base de données ( VaultOwner ), ainsi qu'un autre compte qui sera utilisé par le serveur Web pour se connecter à la base de données ( VaultRunner ). Ce compte n'a besoin que des permissions minimales pour réaliser ses tâches.  
* Communiquer UNIQUEMENT à l'aide d'une connexion chiffrée. Veuillez consulter la section [Chiffrement des connexions vers le serveur SQL](/fr/server/getting-started/security-checklist/encrypting-connections-sql-server/) .  

## Serveur Web 

* Configurer le pool d'applications de manière à utiliser les identifiants du domaine. Ce compte sera ajouté au serveur SQL en tant que connexion. Seules les permissions nécessaires y seront attribuées ( VaultRunner ).  
* Distribuer le contenu via SSL (https). Voir la section [Configurer SSL](/kb/devolutions-server/how-to-articles/configure-ssl/) .  



