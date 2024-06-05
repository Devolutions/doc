---
eleventyComputed:
  title: Mise à niveau de la base de données
  status: Sujet disponible en langue allemande
  description: Certaines versions de {{ fr.RDM }} doivent modifier la structure de la base de données. Ces modifications sont effectuées automatiquement pour vous, mais il est recommandé d'effectuer une sauvegarde de votre source de données au préalable.
---
Les informations ci-dessous s'appliquent aux installations avec des sources de données utilisant une base de données comme leur magasin de données.

Certaines versions de {{ fr.RDM }} doivent modifier la structure de la base de données. Ces modifications sont effectuées automatiquement pour vous, mais il est recommandé d'effectuer une sauvegarde de votre source de données au préalable. De plus, si vous travaillez en équipe, vous devez être le seul utilisateur connecté à la base de données pendant la mise à niveau.

{% snippet, "badgeWarning" %} 
Points clés à considérer :
* L'utilisateur effectuant la mise à jour doit avoir des privilèges administratifs sur la base de données sous-jacente. (SYSDBA ou DB_OWNER).
* Effectuer une sauvegarde de la base de données et s'assurer que vous pouvez rapidement effectuer une restauration si nécessaire.
* Si votre organisation permet un cache hors ligne en lecture/écriture, assurez-vous que tous vos utilisateurs ont fusionné leurs modifications hors ligne.
{% endsnippet %}

Suivre ces étapes pour une mise à jour de version réussie :

1. S'assurer d'être le seul utilisateur de la base de données pendant le processus de mise à niveau. Si votre environnement permet une utilisation hors ligne, demander à votre équipe de passer en mode hors ligne ; ou leur demander de passer à une autre source de données.
1. Sauvegarder votre base de données en utilisant les outils de la base de données.
1. Installer la version désirée de {{ fr.RDM }}, en utilisant le modèle de déploiement [Portable (USB)](/rdm/windows/installation/client/portable-usb/) peut être souhaitable si vous effectuez cela sur votre poste de travail personnel.
1. Ouvrir {{ fr.RDM }} en étant connecté en tant qu'utilisateur avec des droits administratifs. Vous devez également être SYSDBA ou DB_OWNER.
1. Vous pourriez être invité avec un message de mise à niveau lorsque votre source de données est accédée. Si c'est le cas, accepter la mise à niveau. Sinon, en utilisant ***Fichier – Sources de données***, localiser votre source de données à mettre à niveau et ouvrir sa fenêtre de propriété. Passer à l'onglet ***Mise à niveau***, puis cliquer sur ***Mettre à jour la base de données***.
1. Attendre un dialogue de confirmation.
1. Fermer le dialogue.
1. S'assurer que votre application {{ fr.RDM }} utilise actuellement cette source de données.
1. Appuyer sur <kbd>Ctrl</kbd>+<kbd>F5</kbd> pour forcer un rafraîchissement complet.
1. Valider le contenu et effectuer un contrôle des technologies qui sont critiques dans votre environnement.
1. Mettre à jour le logiciel client sur tous les postes de travail.