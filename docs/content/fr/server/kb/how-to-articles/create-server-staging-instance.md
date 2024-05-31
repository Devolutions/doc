---
eleventyComputed:
  title: Créer une instance de test {{ fr.DVLS }}
  description: Pour effectuer des tests sur une instance de {{ fr.DVLS }} sans altérer les données en production, déployer une instance de test basée sur une copie de l'instance en production.
---
Pour effectuer des tests sur une instance de {{ fr.DVLS }} sans altérer les données en production, déployer une instance de test basée sur une copie de l'instance en production.

Les étapes suivantes décrivent comment créer une instance de test hébergée sur la même machine que l'instance de production.

## Étapes

1. Effectuer une sauvegarde complète de la base de données de production.
1. Restaurer la base de données sous un nouveau nom.
1. [Exporter les clés de chiffrement](/server/kb/how-to-articles/manage-encryption-keys/) de l'instance de production {{ fr.DVLS }} (si cette étape n'a pas déjà été effectuée).
1. [Créer une nouvelle instance](/server/getting-started/installation/create-server-instance/) dans la {{ fr.DVLSCONSOLE }}. Nous recommandons de créer l'instance de test à la même version que l'instance de production.
1. Dans l'étape de la base de données, saisir les informations relatives à la copie de la base de données créée à l'étape 2.
1. Fournir, une fois invité à le faire, le fichier de clé de chiffrement exporté à l'étape 3.
![Clés de chiffrement pour la base de données existante](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8113.png)
1. Lorsque la création est terminée, effectuer une sauvegarde complète de la base de données de test.
1. Installer toutes les fonctionnalités supplémentaires pour les tester comme le service de planification, le serveur d'enregistrement et le {{ fr.DGW }}.

À partir de ce point, vous pouvez effectuer la mise à niveau de la {{ fr.DVLSCONSOLE }} et [mettre à jour l'instance de test](/server/getting-started/installation/upgrade-server/). La console est conçue pour prendre en charge les versions antérieures de {{ fr.DVLS }}.

## Déplacer {{ fr.DVLS }} vers un autre serveur

Les instructions ci-dessus peuvent être utilisées pour déplacer l'instance {{ fr.DVLS }} vers un nouveau serveur.

Il est possible de déconnecter l'ancienne machine de votre domaine et de renommer la nouvelle pour avoir exactement le même nom de machine. Dans ce cas, il n'est pas nécessaire de mettre à jour l'URI d'accès et la source de données {{ fr.DVLS }} dans {{ fr.RDM }}.

Si vous prévoyez de migrer la base de données SQL sur un nouveau serveur, cela peut être complété une fois la migration de {{ fr.DVLS }} terminée. Une fois fait, mettre à jour la configuration de la base de données depuis la {{ fr.DVLSCONSOLE }}.

Si vous prévoyez de déplacer {{ fr.DVLS }} vers un nouveau fournisseur d'identité, vous pouvez également utiliser l'[outil de migration d'authentification](/server/kb/how-to-articles/authentication-migration/) pour migrer vos utilisateurs et groupes d'utilisateurs vers le nouveau fournisseur d'identité.
