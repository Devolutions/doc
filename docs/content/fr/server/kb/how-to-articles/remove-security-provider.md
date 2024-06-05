---
eleventyComputed:
  title: Supprimer le fournisseur de sécurité
  description: La procédure suivante explique comment supprimer le fournisseur de sécurité et mettre en œuvre le chiffrement au repos en utilisant les clés de chiffrement.
---
{% snippet, "badgeNotice" %}
Pour toute question ou pour obtenir de l'aide avec cette procédure, contactez-nous à [service@devolutions.net](mailto:service@devolutions.net).
{% endsnippet %}

Le fournisseur de sécurité a été implémenté dans les versions antérieures de {{ fr.DVLS }}. Il a été déprécié dans la version {{ fr.DVLS }} 2019.2.9.0. Il n'est plus considéré comme sécurisé comme mentionné dans [Mise à jour sur la dépréciation du fournisseur de sécurité {{ fr.DVLS }}](https://blog.devolutions.net/2020/02/update-on-devolutions-password-server-security-provider-deprecation).

La procédure suivante explique comment supprimer le fournisseur de sécurité et mettre en œuvre le chiffrement au repos en utilisant les clés de chiffrement.

1. S'assurer qu'aucun utilisateur n'est connecté à la source de données {{ fr.DVLS }} ou à l'interface web {{ fr.DVLS }}. Il est possible de vérifier et de déconnecter tous les utilisateurs dans ***Rapports – Liste des utilisateurs connectés*** dans l'interface web {{ fr.DVLS }}.
1. Passer l'instance {{ fr.DVLS }} en mode hors ligne avec le bouton ***Passer hors ligne*** dans l'onglet ***Serveur*** de la {{ fr.DVLSCONSOLE }}.
![Passer hors ligne](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8046.png)
1. Si le planificateur est installé, le désinstaller depuis la {{ fr.DVLSCONSOLE }} dans ***Companions – Service de planification – Désinstaller***. Si un compte de service est configuré pour exécuter le service de planification, s'assurer d'avoir le mot de passe du compte de service pour le réinstaller à la fin de la procédure.
![Désinstaller le planificateur](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8083.png)
1. Sauvegarder le dossier de l'application web {{ fr.DVLS }} ou, si possible, prendre un instantané de la machine virtuelle où {{ fr.DVLS }} est hébergé.
1. Faire une sauvegarde complète de la base de données.
1. Dans le menu ***Outils*** de la {{ fr.DVLSCONSOLE }}, cliquer sur ***Supprimer le fournisseur de sécurité***.
![Supprimer le fournisseur de sécurité](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8047.png)
1. Cliquer sur ***Oui*** lorsqu'une invitation à confirmer la suppression du fournisseur de sécurité apparaît.
![Message de confirmation](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8048.png)
1. Le fournisseur de sécurité a été supprimé avec succès. Cliquer sur ***OK*** pour fermer la fenêtre.
![Suppression réussie](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8049.png)
1. Passer l'instance {{ fr.DVLS }} en mode en ligne en utilisant ***Passer en ligne*** dans l'onglet ***Serveur*** de la {{ fr.DVLSCONSOLE }}.
![Passer en ligne](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8050.png)
1. Une fois terminé, vérifier que les données sont disponibles (configuration des entrées, mots de passe, etc.). Vérifier les documents ou les pièces jointes existant dans la base de données.
   {% snippet, "badgeInfo" %}
   Si {{ fr.DVLS }} est installé dans une topologie d'équilibrage de charge / haute disponibilité, ne supprimer le fournisseur de sécurité que sur un nœud. Ensuite, actualiser les autres nœuds pour constater que le fournisseur de sécurité a été supprimé.
   {% endsnippet %}

1. En cas de succès, passer l'instance en mode hors ligne, faire une autre sauvegarde de la base de données, et une capture d'écran de la machine virtuelle où {{ fr.DVLS }} est hébergé. Si pour une raison quelconque, l'une des étapes suivantes échoue, une sauvegarde sera disponible pour revenir à cette étape au lieu de recommencer depuis le début.
   {% snippet, "badgeInfo" %}
   Si le bouton ***Activer le chiffrement au repos*** n'est pas visible dans ***Outils***, cela signifie qu'il est déjà activé. Dans ce cas, veuillez passer à l'étape 15.
   {% endsnippet %}

1. Aller dans ***Outils*** dans la {{ fr.DVLSCONSOLE }}, puis cliquer sur ***Activer le chiffrement au repos***. Cette étape est essentielle pour chiffrer correctement les données dans la base de données SQL.
![Activer le chiffrement au repos](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8051.png)
1. Une fois terminé, exporter les clés de chiffrement. S'assurer de sauvegarder ce fichier et le mot de passe dans un endroit sûr pour pouvoir construire une autre instance {{ fr.DVLS }} connectée à la même base de données SQL. Sans ces clés de chiffrement, il est impossible d'accéder aux données.
   {% snippet, "badgeCaution" %}
   Nous recommandons de ne pas stocker le fichier des clés de chiffrement et son mot de passe dans votre instance {{ fr.DVLS }}.
   {% endsnippet %}

   ![Exporter les clés de chiffrement](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8052.png)
   ![Nom de fichier et mot de passe du fichier](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8053.png)

1. Une fois terminé, vérifier à nouveau si les entrées, documents et pièces jointes sont disponibles.
1. Si le service de planification a été désinstallé à l'étape 3, le réinstaller depuis la {{ fr.DVLSCONSOLE }} dans l'onglet ***Companions***.
![Installer le planificateur](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8084.png)
1. En cas de succès, une dernière sauvegarde de la base de données et une capture d'écran de la machine virtuelle peuvent être effectuées.
   {% snippet, "badgeInfo" %}
   Si {{ fr.DVLS }} est installé dans une topologie d'équilibrage de charge / haute disponibilité, actualiser la {{ fr.DVLSCONSOLE }} et importer les clés de chiffrement pour s'assurer d'utiliser les mêmes sur chaque nœud.
   {% endsnippet %}
