---
eleventyComputed:
  title: Tableau de bord Active Directory basé sur le Web
  description: Le tableau de bord Active Directory peut être lancé directement depuis l'interface web de {{ fr.DVLS }}.
---
 Le tableau de bord Active Directory peut être lancé directement depuis l'interface web de {{ fr.DVLS }}.

## Exigences

Pour utiliser cette fonctionnalité, certaines exigences doivent être satisfaites, à savoir :
* Windows 10 ou 11.
* Windows Server 2016 et versions ultérieures.
* Avoir une version 2023.1 ou ultérieure de [{{ fr.DGW }}](/dgw/hub/hub-business-configuration/).

 ## Configuration de l'entrée

Suivre les étapes ci-dessous pour configurer correctement votre console Active Directory :

{% snippet, "badgeInfo" %}
Les étapes ci-dessous supposent que vous avez déjà une entrée de tableau de bord Active Directory. Si vous ne l'avez pas encore créée et souhaitez apprendre comment faire, voir [Créer des entrées manuellement](/server/web-interface/vault/entries/create-entries-manually/).
{% endsnippet %}

1. Aller aux ***Propriétés*** de l'entrée.
1. Aller à la section ***VPN/tunnel/gateway***.
1. Sélectionner ***{{ fr.DGW }}*** sous ***Type***.
1. Cliquer sur ***Toujours connecter***.
1. Cliquer sur ***Mettre à jour*** pour sauvegarder.

### Ouvrir dans le client Web

Une fois toutes les conditions remplies, vous pouvez appuyer sur le bouton ***Ouvrir dans le client Web (Aperçu)*** pour lancer la connexion depuis le client web.

### Interface

Voici une liste des paramètres disponibles dans l'interface web de l'entrée du tableau de bord Active Directory.

![Interface de l'entrée du tableau de bord Active Directory](https://cdnweb.devolutions.net/docs/RDMW6024_2024_1.png)

| Paramètres      | Description                                                         |
|-----------------|---------------------------------------------------------------------|
| Nouvel Utilisateur | Créer un ***nouvel utilisateur*** dans Active Directory.            |
| Nouveau Groupe  | Créer un ***nouveau groupe*** dans Active Directory                 |
| Activer         | Réactiver un objet, le rendant actif.                               |
| Désactiver      | Désactiver un objet sans le supprimer.                              |
| Déverrouiller   | Libérer un compte utilisateur qui a été verrouillé.                 |
| Réinitialiser le Mot de Passe | Attribuer un ***nouveau mot de passe*** à un compte utilisateur.    |
| Supprimer       | Supprimer définitivement un objet d'Active Directory.               |
| Propriétés      | Voir ou modifier les attributs et paramètres d'un objet.            |
| BitLocker       | Récupérer le mot de passe de récupération pour une clé ***chiffrée par BitLocker***. |
| Rechercher      | Localiser tout objet dans le domaine, tel que des utilisateurs, des groupes ou des ordinateurs. |