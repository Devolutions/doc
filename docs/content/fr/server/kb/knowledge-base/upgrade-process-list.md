---
eleventyComputed:
  title: Liste des étapes de mise à niveau
  description: Cette liste à puces décrit chaque étape qu'un technicien de support suivra pour aider un client à mettre à niveau l'instance {{ fr.DVLS }}.
---
Veuillez visiter la page [Mise à niveau de {{ fr.DVLS }}](/server/getting-started/installation/upgrade-server/) pour des étapes informatives sur la procédure de mise à niveau.

Les mises à niveau de {{ fr.DVLS }} ne sont pas excessivement compliquées, mais certaines étapes doivent être planifiées avec soin. Veuillez [contacter notre équipe de support](mailto:service@devolutions.net) pour réserver une session où nous vous aiderons.

{% snippet, "badgeNotice" %}
{{ fr.DVLS }} est utilisé par des équipes, cela signifie que d'autres utilisateurs doivent être pris en compte avant de commencer la mise à niveau.

Confirmer que toutes les exigences minimales sont installées et que les dépendances atteignent les versions prises en charge selon la page [Exigences Système](/server/overview/system-requirements/).
{% endsnippet %}

Cette liste à puces décrit chaque étape qu'un technicien de support suivra pour aider un client à mettre à niveau l'instance {{ fr.DVLS }}.

1. S'assurer que le niveau fonctionnel du domaine est au moins à la version Windows Server 2012 R2 si [l'Authentification de Domaine](/server/web-interface/administration/configuration/server-settings/general/authentication/domain/) est configurée dans {{ fr.DVLS }}.
1. Confirmer pour les sauvegardes de la base de données et du dossier de l'application web. S'assurer que l'option de sauvegarde uniquement est activée dans SQL Server Management Studio pour obtenir une sauvegarde autonome qui ne fait pas partie d'un ensemble de sauvegarde.
1. S'assurer que tout le monde est en mode hors ligne dans {{ fr.RDM }} si correctement configuré ou déconnecté de l'interface web {{ fr.DVLS }}.
1. Modifier la Version Maximale dans les Paramètres Système de l'Administration si configuré.
1. Confirmer pour arrêter l'instance avec le bouton Passer en mode hors ligne sur la {{ fr.DVLSCONSOLE }} Si plus d'une instance {{ fr.DVLS }} (Haute Disponibilité ou Équilibrage de Charge), passer toutes les instances en mode hors ligne avant la mise à niveau.
1. Pour les versions antérieures à 2020.1.x, vérifier si un Fournisseur de Sécurité par Phrase secrète est défini sur l'instance {{ fr.DVLS }}. Si c'est le cas, suivre les étapes de [Suppression du Fournisseur de Sécurité](/server/kb/how-to-articles/remove-security-provider/) après la mise à niveau. Cela pourrait être complété dans une autre session de support ou le client peut le faire par lui-même.
1. Confirmer pour les paramètres A2F.
1. Confirmer pour la Sécurité Intégrée activée ou désactivée dans l'onglet Base de données.
    1. Si c'est le cas, confirmer que l'utilisateur connecté sur la machine Windows a suffisamment de permissions pour effectuer des mises à niveau de la base de données. {type="a"}
1. S'assurer qu'aucun antivirus n'est actuellement en cours d'exécution ou ne scanne les dossiers d'installation de l'application web et de la {{ fr.DVLSCONSOLE }}.
1. Ouvrir la {{ fr.DVLSCONSOLE }} et dire à l'utilisateur de la mettre à niveau.
1. Mettre à niveau l'instance {{ fr.DVLS }} avec le bouton Mettre à jour sur la {{ fr.DVLSCONSOLE }}
1. [Installer les Prérequis](/server/getting-started/installation/installing-web-server-prerequisites/) pour {{ fr.DVLS }} si nécessaire.
1. Vérifier si {{ fr.DVLS }} est de retour en ligne dans la {{ fr.DVLSCONSOLE }}.
1. Tester la connexion à la page web directement sur le serveur ou depuis l'ordinateur du client avec le bouton Naviguer vers le Site Web sur la {{ fr.DVLSCONSOLE }}
1. Si nécessaire, installer la dernière version de {{ fr.RDM }} qui appartient à la version de {{ fr.DVLS }}.
1. Si nécessaire, mettre à jour la version du module {{ fr.PS }} qui appartient à la version de {{ fr.DVLS }}.
1. Tester la connectivité de {{ fr.RDM }} à la source de données {{ fr.DVLS }}.
1. Si nécessaire, mettre à jour {{ fr.DGW }}.
1. S'assurer que les clés de chiffrement seront exportées et mises en lieu sûr pour mesure de sécurité. Ces clés de chiffrement sont requises pour la reprise après sinistre.
    1. [Exporter les Clés de Chiffrement](/server/kb/how-to-articles/manage-encryption-keys/#export-the-encryption-keys) {type="a"}
1. S'assurer que les licences de {{ fr.RDM }} et de {{ fr.DVLS }} correspondent.
