---
eleventyComputed:
  title: "{{ fr.RDMJ }}"
  keywords:
  - Bastion server
  - Jump box
  - Jump server
  - Service host
---
{{ fr.RDMJ }} se connecte à un hôte distant, souvent nommé Jump Box, Service Host, ou Bastion Server, qui, à son tour, se connecte à d'autres hôtes. {{ fr.RDMJ }} est en fait une RDP dans une RDP.

Cela peut être comparé au Remote Desktop Gateway de Microsoft et, dans une certaine mesure, à de la redirection de port SSH.

{% snippet icon.badgeNotice %}
Le ***Jump*** est fait à partir de l'{{ fr.RDMA }}. L'Agent DOIT ÊTRE DÉMARRÉ dans une session Windows, sur l'hôte distant, ou configuré de façon à démarrer automatiquement lors de l'ouverture de la session. Nous n'offrons pas cette fonctionnalité en tant que service à ce stade-ci.
{% endsnippet %}

{% snippet icon.badgeInfo %}
La fonctionnalité {{ fr.RDMJ }} ne vous permet pas de contourner la nécessité d'attribuer une licence appropriée à votre hôte distant pour autoriser plus de deux connexions RDP à la fois. Il n'y a pas d'autre moyen que d'installer un hôte distant de bureau à distance sur le serveur et d'acheter des LAC RDS (par utilisateur) pour la connexion à distance. Pour plus d'informations, veuillez consulter ce lien Microsoft : [Activer le serveur de licences des Services Bureau à distance](https://learn.microsoft.com/fr-fr/windows-server/remote/remote-desktop-services/rds-activate-license-server).
{% endsnippet %}

{% snippet icon.badgeHelp %}
{{ fr.RDM }} doit être installé sur l'***Hôte Jump*** afin que l’Agent puisse exécuter des commandes. L’application n’a pas à se connecter à une source de données, car {{ fr.RDM }} ne fait que servir d'enveloppe pour que l’Agent puisse exécuter des commandes.
{% endsnippet %}

Les instances de {{ fr.RDMJ }} ou {{ fr.RDM }} et l'{{ fr.RDMA }} exécutés sur l'Hôte Jump communiquent via une RDP. Les commandes sont acheminées sécuritairement par le canal RDP et sont exécutées sur le Service Host. Les commandes incluent l'exécution d'un script ou l'ouverture d'une session à distance de n'importe quel type. Il peut même lancer un client VPN sur le Service Host avant d'exécuter la session à distance.

* [Scénarios d'utilisation](#scénarios-dutilisation)
* [Configurer l'Hôte Jump](#configurer-lhôte-jump)
* [Configurer une session pour l'utiliser avec un Hôte Jump](#configurer-une-session-pour-utiliser-avec-un-hôte-jump)
* [Valider que l'Hôte Jump fonctionne](#valider-que-lhôte-jump-fonctionne)
* [Conseils de pro](#conseils-de-pro)

### Scénarios d’utilisation

Il existe deux mises en situation :

1. Accéder à un réseau sécurisé à partir d'un seul hôte.

Ceci permet d'avoir une politique de pare-feu stricte autorisant les connexions à partir d'une seule adresse IP. Cette configuration vous permettra d'accéder uniquement aux hôtes distants accessibles par la Jump Box. Prétendons que vous avez l'infrastructure suivante :
![!!clip10825](https://cdnweb.devolutions.net/docs/fr/rdm/windows/clip10825.png)

Vous devez accéder à des hôtes distants, mais vous souhaitez limiter les risques et exposer uniquement l'Hôte Jump au trafic Internet. En utilisant {{ fr.RDMJ }}, seul l'Hôte Jump est exposé. Cela vous permet de configurer des règles de pare-feu strictes et de n'ouvrir qu'un seul port. Par contre, vous devez obligatoirement vous connecter au Hôte Jump en premier avant d'avoir accès aux hôtes distants.
![!!clip10826](https://cdnweb.devolutions.net/docs/fr/rdm/windows/clip10826.png)

{{ fr.RDMJ }} aide à atteindre cet objectif simplement et efficacement.

2. Contournement des limites certains clients VPN

Ces limitations rendent impossible l'utilisation simultanée de plusieurs clients VPN sur le même poste de travail. Dans ce cas, vous pouvez avoir plusieurs machines virtuelles, chacune exécutant un seul client VPN. L'utilisation de ces machines virtuelles comme Jump Box vous permet de vous connecter à la machine virtuelle, de lancer le client VPN, puis de lancer la session à distance.
![!!clip10820](https://cdnweb.devolutions.net/docs/fr/rdm/windows/clip10820.png)

### Configurer l'Hôte Jump

1. Créer une entrée ***RDP*** pour l'***Hôte Jump***.
1. Remplir l'entrée avec un ***Nom***, un ***Hôte*** et les ***Identifiants***.
{% snippet icon.badgeCaution %}
Pour que les ***Jumps*** fonctionnent, vous devez fournir les identifiants via la session de l'***Hôte Jump***. Si les sessions RDP vous demandent les identifiants après le démarrage, le ***Jump*** échouera.
{% endsnippet %}

![!!RdmWin4113](https://cdnweb.devolutions.net/docs/fr/rdm/windows/RdmWin4113.png)

3. Dans la section ***Hôte Jump***, cocher ***Est hôte Jump***.
![!!RdmWin4114](https://cdnweb.devolutions.net/docs/fr/rdm/windows/RdmWin4114.png)
1. Cliquer ***OK***.
1. Lancer la session d'***Hôte Jump***.
1. Installer {{ fr.RDM }} sur le ***Hôte Jump***.

{% snippet icon.badgeNotice %}
L'***Hôte Jump*** agit comme un relais entre les systèmes locaux et distants, permettant ainsi d'utiliser la licence {{ fr.RDM }} qui a été utilisée sur le poste de travail local pour enregistrer l'application sur l'***Hôte Jump***.

Installer {{ fr.RDM }} sur l'***Hôte Jump***, effectuer votre premier jump et {{ fr.RDM }} sera automatiquement déverrouillé/enregistrer via la communication/connexion.
{% endsnippet %}

{% snippet icon.badgeNotice %}
Il n'est pas nécessaire de créer une source de données sur le ***Hôte Jump***. {{ fr.RDM }} s'ouvrira pour la première fois avec une ***Source de données locale SQLite*** par défaut. Cela est suffisant, car l'application sur le ***Hôte Jump*** agit uniquement comme intermédiaire entre les hôtes locaux et distants.
{% endsnippet %}


7. Confirmer que l'{{ fr.RDMA }} est démarré et réglé sur ***Démarrage automatique***.
{% snippet icon.badgeCaution %}
Le ***Démarrage automatique*** doit être seulement activé pour {{ fr.RDMA }} ou {{ fr.RDM }}, pas pour les deux. Dans le cas où {{ fr.RDM }} est réglé sur ***Démarrage automatique***, assurez-vous de supprimer les raccourcis des emplacements suivants :

* Exécuter une commande : shell:startup
* Exécuter une commande : shell:common startup
{% endsnippet %}

    a. Aller dans ***Outils – Plus d'outils***.
    b. Sélectionner ***{{ fr.RDMA }}***.
    c. Cliquer ***OK***.
    d. Cliquer ***Oui***.
    ![!!RdmWin4115](https://cdnweb.devolutions.net/docs/fr/rdm/windows/RdmWin4115.png)

8. Cliquer avec le bouton droit sur l'icône de l'{{ fr.RDMA }} dans la barre des tâches.
    a. Cocher ***Démarrage automatique***.
1. Ajuster l'interface utilisateur de l'***Hôte Jump*** pour maximiser la zone d'affichage des sessions à distance.
    * Mettre l'application en plein écran.
    * Masquer le ***{{ fr.NPANE }}*** dans l'onglet ***Affichage***.
    * Masquer le ***Ruban*** dans l'onglet ***Affichage***.
        * Pour afficher à nouveau le ***Ruban***, cliquer sur l'icône {{ fr.RDM }} dans le coin supérieur gauche.

{% snippet icon.badgeNotice %}
Pour réinitialiser la mise en page, dans l'onglet ***Fenêtre***, cliquer sur ***Réinitialisation de la mise en page***.
{% endsnippet %}

L'***Hôte Jump*** est prêt à être utilisé.

### Configurer une session pour utiliser avec un Hôte Jump

1. Créer une entrée ***RDP*** sur l'instance locale de {{ fr.RDM }}.
1. Définir l'***Hôte Jump*** en cliquant sur le bouton ***Paramètres {{ fr.RDMJ }}***.
    * L'***Hôte Jump*** peut être ***Hérité*** s'il est défini dans le dossier parent.

    ou
    * Choissir une ***Session*** spécifique pour pointer directement vers l'entrée d'***Hôte Jump***.
    ![!!RdmWin4116](https://cdnweb.devolutions.net/docs/fr/rdm/windows/RdmWin4116.png)
3. Cliquer par deux fois sur ***OK***.
1. Lancer la session RDP. Le {{ fr.RDMJ }} s'ouvre automatiquement et ressemble à une session dans une session.

### Valider que l'Hôte Jump fonctionne

1. Démarrer la session ***RDP*** de l'***Hôte Jump***.
1. Attendre que {{ fr.RDMA }} se connecte.
1. Dans l'onglet ***RDP***, faire un clic droit sur ***État de l'agent***.
    a. {{ fr.RDMA }} devrait être connecté.
1. Garder l'onglet ***RDP*** ouvert.
1. Démarrer la session ***Jump***.
    a. La session ***Jump*** devrait démarrer sur le serveur d'***Hôte Jump***.
1. Fermer toutes les sessions.
1. Démarrer directement la session ***Jump***.
    a. Le serveur d'***Hôte Jump*** et la session ***Jump*** devraient démarrer.

Tout devrait fonctionner correctement. Si l'une des étapes échoue, c'est là que vous devriez investiguer.

### Conseils de pro

* Pour gagner plus d'espace dans le tableau de bord, dans l'onglet ***Affichage***, masquer le ***Ruban*** et le ***{{ fr.NPANE }}*** puisque les menus ne sont pas nécessaires.
* Utiliser la même licence {{ fr.RDM }} sur les instances locales et distantes. L'Hôte Jump agit comme un relais entre les systèmes locaux et distants, permettant d'utiliser la licence {{ fr.RDM }} qui a été utilisée sur le poste de travail local pour enregistrer l'application sur l'Hôte Jump.
* Il n'est pas nécessaire de créer une source de données sur le ***Hôte Jump***. {{ fr.RDM }} s'ouvrira pour la première fois avec une ***Source de données locale SQLite*** par défaut. Cela est suffisant, car l'application sur le ***Hôte Jump*** agit uniquement comme intermédiaire entre les hôtes locaux et distants.
