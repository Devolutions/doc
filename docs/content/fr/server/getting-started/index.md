---
eleventyComputed:
  title: Commencer
  description: Après avoir complété votre achat de l'édition Entreprise de {{ fr.DVLS }}, vous recevrez un courriel avec trois clés de licence.
  order: 20
---
Après avoir reçu votre [édition gratuite](/server/getting-started/installation/registration/register-free-server-license/) ou avoir complété votre achat d'une [édition de {{ fr.DVLS }}](/server/getting-started/installation/registration/register-server-license/), vous recevrez un courriel contenant les licences selon votre édition. Chaque clé de licence permet d'exécuter une instance de {{ fr.DVLS }}.

Une instance est en elle-même une application serveur web qui agit comme une dorsale pour nos applications clientes. Vous pouvez la considérer comme une base de données spécialisée pour vos données. Toutes les instances peuvent être installées sur le même serveur physique ou réparties sur plusieurs. {{ fr.DVLS }} peut être installé à travers différentes [topologies](/server/overview/topologies/).

## Exigences de domaine

Ces exigences s'appliquent particulièrement si vous avez l'intention d'utiliser la Création Automatique de Compte Utilisateur (voir [Authentification](/server/web-interface/administration/configuration/server-settings/general/authentication/)) et/ou les Groupes d'Utilisateurs pour gérer votre instance.

1. Créer des groupes Active Directory pour gérer votre instance. Des exemples typiques sont : {{ fr.RDM }} Admins, {{ fr.RDM }} Opérateurs, {{ fr.RDM }} Utilisateurs.
1. Ajouter des utilisateurs de domaine aux groupes Active Directory.
1. Créer un compte VaultDBOwner qui sera le propriétaire de la base de données. Effectuer des mises à jour avec ce compte garantira que les droits appropriés sont détenus.
1. Créer un compte VaultDBRunner qui sera utilisé comme identité du site web. Cela vous permettra de renforcer les permissions à ce qui est minimalement requis.

## Étapes d'installation

1. Créer une nouvelle instance de {{ fr.DVLS }} (voir [Créer une instance {{ fr.DVLS }}](/server/getting-started/installation/create-server-instance/)).
1. Créer un compte administrateur {{ fr.DVLS }} dans la [Gestion des utilisateurs](/server/web-interface/administration/security-management/users/).
1. Créer des [Groupes d'utilisateurs](/server/web-interface/administration/security-management/user-groups/).
1. Ajouter des utilisateurs de domaine ou des utilisateurs intégrés (voir [Gestion des utilisateurs](/server/web-interface/administration/security-management/users/)).
