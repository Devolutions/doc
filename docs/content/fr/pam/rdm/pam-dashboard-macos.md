---
eleventyComputed:
  title: Tableau de bord PAM (macOS)
  description: Dans le Tableau de bord PAM, pour chaque compte privilégié, il est possible de se connecter au compte, de copier le mot de passe et de gérer le processus de réservation/restitution.
  order: 20
---
{% snippet, "badgeNotice" %}
Une licence est désormais requise pour activer le module de Gestion des Accès Privilégiés (PAM). Veuillez contacter notre [département des ventes](mailto:sales@devolutions.net) pour plus d'informations sur la licence.
{% endsnippet %}

{% snippet, "badgeInfo" %}
Le ***Tableau de bord PAM*** est uniquement disponible avec [{{ fr.DVLS }}](https://devolutions.net/server).
{% endsnippet %}

La fonctionnalité ***Tableau de bord PAM*** peut être trouvée dans l'onglet ***Affichage***.
![Tableau de bord PAM](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac0006.png)

Dans le ***Tableau de bord PAM***, pour chaque compte privilégié, il est possible de se connecter au compte, de copier le mot de passe et de gérer le processus de réservation/restitution.

Pour accéder aux comptes utilisateurs, un dossier PAM doit d'abord être sélectionné. Si vous avez plusieurs dossiers, il peut être utile d'utiliser la barre de filtre pour trouver celui que vous recherchez. Notez que ce sont les mêmes dossiers que dans votre {{ fr.DVLSCONSOLE }}. Vous pouvez aller à [Gestion des Comptes Privilégiés dans {{ fr.DVLS }}](/pam/server/) pour en savoir plus à ce sujet.
![Tableau de bord PAM](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac0007.png)

Lorsque le dossier est sélectionné, tous les comptes de ce dossier apparaîtront. Il est possible de les trier par ***Nom***, ***Chemin du dossier***, ***Nom d'utilisateur***, ***Type de compte*** ou ***Statut de réservation***.
![Tableau de bord PAM](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac0008.png)

Si plusieurs comptes se trouvent dans le dossier, vous pouvez utiliser la barre de recherche pour afficher uniquement les comptes contenant ce que vous avez tapé. Vous pouvez pousser votre recherche encore plus loin en filtrant les comptes par type d'identifiant.
![Barre de recherche](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac0009.png)

## Demande de Réservation avec heure personnalisée

Il est possible de faire une demande de ***Réservation*** pour un créneau horaire spécifique tout en étant dans un PAM {{ fr.VLT }}. Cette fonctionnalité est très utile pour la maintenance planifiée en dehors des heures de travail normales, lorsque les approbateurs ne sont pas disponibles.

{% snippet, "badgeInfo" %}
Faire une demande de ***Réservation*** à l'avance est uniquement disponible dans les PAM {{ fr.VLT }}s.
{% endsnippet %}

### Étapes
1. Se connecter à une source de données {{ fr.DVLS }}.
1. Dans le ruban {{ fr.RDMMAC }}, cliquer sur ***Affichage*** puis ***Tableau de bord PAM***.
1. Sélectionner un PAM {{ fr.VLT }} dans le menu déroulant.
1. Faire un clic droit sur une entrée et cliquer sur ***Réservation***.
1. Sélectionner à qui vous souhaitez envoyer la demande. Choisir ***Tous les Approbateurs*** accélère le processus en permettant au premier approbateur disponible de confirmer la demande.
1. Activer ***Définir une plage horaire personnalisée***.
1. Définir l'***Heure de début*** et l'***Heure de fin***. Il est recommandé d'ajouter un ***Commentaire*** pour informer l'approbateur de la raison pour laquelle la ***Réservation*** est nécessaire.
1. Cliquer sur ***OK*** pour envoyer la demande et fermer la fenêtre.

![Demande de Réservation](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac6061.png)