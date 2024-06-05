---
eleventyComputed:
  title: Mise à niveau de la base de données
  description: Certaines versions de {{ fr.RDMMAC }} doivent modifier la structure de la base de données. Ces modifications sont effectuées automatiquement pour vous, mais il est recommandé d'effectuer une sauvegarde de votre source de données au préalable.
---
Les informations ci-dessous s'appliquent aux installations avec des sources de données utilisant une base de données comme magasin de données.

Certaines versions de {{ fr.RDMMAC }} doivent modifier la structure de la base de données. Ces modifications sont effectuées automatiquement pour vous, mais il est recommandé d'effectuer une sauvegarde de votre source de données au préalable. De plus, si vous travaillez en équipe, vous devez être le seul utilisateur connecté à la base de données pendant la mise à niveau.

{% snippet, "badgeWarning" %}
Points clés à considérer :
* L'utilisateur effectuant les actions sur cet écran doit avoir des privilèges administratifs sur le système de gestion de base de données. Vous devez également être SYSDBA ou DB_OWNER.
* Effectuer une sauvegarde de la base de données et s'assurer que vous pouvez rapidement effectuer une restauration si le besoin se présente.
* Si votre organisation permet un cache hors ligne en lecture/écriture, assurez-vous que tous vos utilisateurs ont fusionné leurs modifications hors ligne.
{% endsnippet %}

Suivre ces étapes pour une mise à jour de version réussie :

1. S'assurer d'être le seul utilisateur de la base de données pendant le processus de mise à niveau. Si votre environnement permet une utilisation hors ligne, demander à votre équipe de passer en mode hors ligne ; ou leur demander de passer à une autre source de données.
1. Sauvegarder votre base de données en utilisant les outils de la base de données.
1. Ouvrir {{ fr.RDMMAC }} en étant connecté en tant qu'utilisateur avec des droits administratifs. Vous devez également être SYSDBA ou DB_OWNER.
1. Vous pourriez recevoir un message de mise à niveau lorsque votre source de données est accédée. Si c'est le cas, accepter la mise à niveau ou en utilisant ***Fichier – Sources de données***, localiser et éditer votre source de données pour la mise à niveau.
![Modifier votre source de données](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip11015.png)
1. Passer à l'onglet ***Mise à niveau***, puis cliquer sur ***Mettre à jour la base de données***.
![Onglet Mise à niveau – Mettre à jour la base de données](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip11016.png)

   | Option              | Description                                                                                  |
   |---------------------|----------------------------------------------------------------------------------------------|
   | Tester le serveur   | Tester la connexion avec le serveur pour valider si les informations correctes ont été fournies. |
   | Créer la base de données | Créer la base de données sur le serveur SQL.                                                       |
   | Mettre à jour la base de données | Suivre ces étapes pour une mise à jour de version réussie : <ol><li>S'assurer d'être le seul utilisateur de la base de données pendant le processus de mise à niveau.</li><li>Sauvegarder votre base de données en utilisant les outils du SGBD.</li><li>Ouvrir {{ fr.RDMMAC }} en étant connecté en tant qu'utilisateur avec des droits administratifs. Vous devez également être SYSDBA ou DB_OWNER.</li><li>Vous pourriez recevoir un message de mise à niveau lorsque votre source de données est accédée. Si c'est le cas, accepter la mise à niveau.</li><li>Mettre à jour le logiciel client sur tous les postes de travail.</li></ol> |
   | Tester la base de données | Tester la connexion à la base de données pour valider si les informations correctes ont été fournies. La base de données de test utilise le nom de la base de données dans l'onglet Général. |
   | Voir le script de mise à niveau | Permettre de visualiser le script mis à jour avant le lancement de la mise à jour de la base de données.                   |

1. Attendre un message de succès.
1. Fermer la boîte de dialogue.
1. S'assurer que votre {{ fr.RDMMAC }} utilise actuellement cette source de données.
1. Appuyer sur <kbd>Ctrl</kbd>+<kbd>F5</kbd> pour forcer un rafraîchissement complet.
1. Valider le contenu et effectuer une vérification des technologies les plus critiques dans votre environnement.
1. Mettre à jour le logiciel client sur tous les postes de travail.
