---
eleventyComputed:
  title: "{{ fr.RDMJ }}"
  keywords:
  - Serveur bastion
  - Boîte de saut
  - Serveur de saut
  - Hôte de service
---
{{ fr.RDMJ }} se connecte à un hôte distant, souvent appelé Boîte de Saut, Hôte de Service ou Serveur Bastion, qui à son tour se connecte à d'autres hôtes. {{ fr.RDMJ }} est en fait un RDP dans un RDP.

Cela peut être comparé au RD Gateway de Microsoft et, dans une certaine mesure, au transfert de port SSH.

Le Saut est effectué à travers {{ fr.RDMA }}. L'Agent doit être **actuellement en exécution** dans une session Windows sur l'hôte distant, ou configuré pour démarrer automatiquement lors de la connexion. Nous avons décidé de ne pas rendre cela disponible via un service pour le moment.

La fonctionnalité {{ fr.RDMJ }} ne vous permet pas de contourner la nécessité de licencier correctement votre hôte distant pour permettre plus de deux connexions RDP à la fois. Il n'y a pas d'autre moyen sauf d'installer le rôle d'hôte de session de bureau à distance sur le serveur et d'acheter des CAL RDS (par utilisateur) pour la connexion à distance. Pour plus d'informations, veuillez consulter ce lien Microsoft : [Activer le serveur de licences des services Bureau à distance](https://learn.microsoft.com/en-us/windows-server/remote/remote-desktop-services/rds-activate-license-server).

{{ fr.RDM }} doit être installé sur l'Hôte de Saut pour que l'agent puisse exécuter des commandes. L'application n'a pas besoin de se connecter à une source de données, car {{ fr.RDM }} sert uniquement de coquille pour que l'agent exécute des commandes.

{% youtube 'AfpCDZGphA8' %}

Les deux instances de {{ fr.RDMJ }} ou {{ fr.RDM }} et {{ fr.RDMA }} fonctionnant sur l'***Hôte de Saut*** communiquent à travers un canal RDP. Les commandes sont envoyées de manière sécurisée sur le canal RDP puis exécutées sur l'Hôte de Service. Les commandes incluent l'exécution d'un script ou l'ouverture d'une session à distance de n'importe quel type. Elle peut même lancer un client VPN sur l'Hôte de Service avant d'exécuter la session à distance.
* [Scénarios d'utilisation](#usage-scenarios)
* [Configurer un Hôte de Saut](#configure-a-jump-host)
* [Configurer une session pour utiliser l'Hôte de Saut](#configure-a-session-to-use-the-jump-host)
* [Valider que l'Hôte de Saut fonctionne](#validate-that-the-jump-host-works)
* [Conseils Pro](#pro-tips)

## Scénarios d'utilisation

### Accéder à un réseau sécurisé à travers un seul hôte

Cela vous permet d'avoir une politique de pare-feu stricte qui autorise les connexions uniquement à partir d'une adresse IP spécifique. Cette configuration vous accorde uniquement l'accès aux hôtes accessibles depuis la Boîte de Saut. Imaginez que vous avez l'infrastructure suivante :
![!!clip10825](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10825.png)

Vous devez accéder aux hôtes distants, mais vous souhaitez limiter les risques et exposer uniquement l'Hôte de Saut au trafic internet. Cela vous permet de créer des règles de pare-feu strictes et d'ouvrir un seul port. Par conséquent, cela vous oblige à vous connecter à l'Hôte de Saut avant de sauter vers un hôte distant.
![!!clip10826](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10826.png)

{{ fr.RDMJ }} aide à atteindre cet objectif simplement et efficacement.

### Contourner les limitations de certains clients VPN

Ces limitations rendent impossible l'utilisation de plusieurs clients VPN simultanément sur la même station de travail. Dans ce cas, vous pouvez avoir plusieurs machines virtuelles, chacune exécutant un seul client VPN. Utiliser ces machines virtuelles comme boîtes de saut vous permet de vous connecter à la machine virtuelle, de lancer le client VPN, puis de lancer la session à distance.
![!!clip10820](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10820.png)

## Configurer un Hôte de Saut

1. Créer une entrée ***RDP*** pour l'***Hôte de Saut***.
1. Remplir l'entrée avec un ***Nom***, ***Hôte*** et les ***Identifiants***.
   {% snippet, "badgeCaution" %}
   Pour que les ***Sauts*** fonctionnent, vous devez fournir les identifiants via la session ***Hôte de Saut***. Si les sessions RDP vous demandent les identifiants après le démarrage, le ***Saut*** échouera.
   {% endsnippet %}

   ![Créer une entrée RDP pour l'Hôte de Saut](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6193.png)

1. Dans la section ***Hôte de Saut***, cocher ***Est un Hôte de Saut***.
![Cocher Est un Hôte de Saut](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6195.png)
1. Cliquer sur ***OK***.
1. Lancer la session ***Hôte de Saut***.
1. Installer {{ fr.RDM }} sur l'***Hôte de Saut***.
   {% snippet, "badgeNotice" %}
   L'***Hôte de Saut*** agit comme un relais entre les systèmes locaux et distants, permettant d'utiliser la licence {{ fr.RDM }} qui a été utilisée sur la station de travail locale pour enregistrer l'application sur l'***Hôte de Saut***.

   Installer {{ fr.RDM }} sur l'***Hôte de Saut***, effectuer votre premier saut et {{ fr.RDM }} sera déverrouillé/licencié automatiquement via la communication/échange lors du saut.

   Il n'est pas nécessaire de créer une source de données sur l'***Hôte de Saut***. {{ fr.RDM }} s'ouvrira pour la première fois avec une ***Source de Données Locale SQLite*** par défaut. Cela est suffisant car l'application sur l'***Hôte de Saut*** agit uniquement comme intermédiaire entre les hôtes locaux et distants.
   {% endsnippet %}

1. Confirmer que {{ fr.RDMA }} est démarré et configuré pour ***Démarrage Automatique***.

   {% snippet, "badgeCaution" %}
   Le ***Démarrage Automatique*** doit uniquement être activé pour {{ fr.RDMA }} ou {{ fr.RDM }} mais pas pour les deux. Dans le cas où {{ fr.RDM }} est configuré pour ***Démarrage Automatique***, veuillez vous assurer de supprimer les raccourcis des emplacements suivants :

   * Exécuter : shell:startup
   * Exécuter : shell:common startup
   {% endsnippet %}

    1. Aller à ***Outils - Plus d'Outils***.
{type="a"}
    1. Sélectionner {{ fr.RDMA }}.
    1. Cliquer sur ***OK***.
    1. Cliquer sur ***Oui***.
![!!RdmWin4058](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6196.png)

1. Faire un clic droit sur l'icône de {{ fr.RDMA }} dans la barre des tâches.
    1. Cocher ***Démarrage Automatique***.
{type="a"}
1. Ajuster l'interface utilisateur de l'***Hôte de Saut*** pour maximiser la zone d'affichage des sessions à distance.
    * Mettre l'application en plein écran.
    * Cacher le ***{{ fr.NPANE }}*** dans l'onglet ***Affichage***.
    * Cacher le ***Ruban*** dans l'onglet ***Affichage***.
        * Pour afficher à nouveau le ***Ruban***, cliquer sur l'icône {{ fr.RDM }} en haut à gauche.
   {% snippet, "badgeNotice" %}
   Pour réinitialiser la mise en page, dans l'onglet ***Fenêtre***, cliquer sur ***Réinitialiser la Mise en Page***.
   {% endsnippet %}

L'***Hôte de Saut*** est prêt à l'emploi.

## Configurer une session pour utiliser l'Hôte de Saut

1. Créer une entrée ***RDP***, sur l'instance locale de {{ fr.RDM }}.
1. Configurer l'***Hôte de Saut*** en cliquant sur le bouton ***Paramètres de Saut RDM***.
    * L'***Hôte de Saut*** peut être ***Hérité*** s'il est défini dans le dossier parent.
ou
    * Choisir une ***Session*** spécifique pour pointer directement vers l'entrée de l'***Hôte de Saut***.
![!!RDMWin2235](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2235.png)
1. Cliquer sur ***OK*** deux fois.
1. Lancer la session RDP. Le {{ fr.RDMJ }} s'ouvre automatiquement et cela ressemble à une session dans une session.

## Valider que l'Hôte de Saut fonctionne

1. Démarrer la session ***RDP*** du ***Serveur Hôte de Saut***.
1. Attendre que {{ fr.RDMA }} se connecte.
1. Dans l'onglet ***RDP***, faire un clic droit sur ***Statut de l'Agent***. {{ fr.RDMA }} devrait être connecté.
1. Garder l'onglet ***RDP*** ouvert.
1. Démarrer la session ***Saut***. La session ***Saut*** devrait démarrer sur le ***Serveur Hôte de Saut***.
1. Fermer toutes les sessions.
1. Démarrer la session ***Saut*** directement. Le ***Serveur Hôte de Saut*** et la session ***Saut*** devraient tous deux démarrer.

Tout devrait fonctionner correctement. Si l'une des étapes échoue, c'est là que vous devez enquêter.

## Conseils Pro

* Pour gagner plus d'espace pour le tableau de bord, dans l'onglet ***Affichage***, cacher le ***Ruban*** et le ***{{ fr.NPANE }}*** puisque les menus ne sont pas nécessaires.
* Utiliser la même licence {{ fr.RDM }} sur les instances locales et distantes. L'Hôte de Saut agit comme un relais entre les systèmes locaux et distants, permettant d'utiliser la licence {{ fr.RDM }} qui a été utilisée sur la station de travail locale pour enregistrer l'application sur l'Hôte de Saut.
* Il n'est pas nécessaire de créer une source de données sur l'Hôte de Saut. {{ fr.RDM }} s'ouvrira pour la première fois avec une ***Source de Données Locale SQLite*** par défaut. Cela est suffisant car l'application sur l'Hôte de Saut agit uniquement comme intermédiaire entre les hôtes locaux et distants.
