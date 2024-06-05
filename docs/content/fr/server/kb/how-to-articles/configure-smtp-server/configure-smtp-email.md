---
eleventyComputed:
  title: Configurer un email SMTP
---
Configurer un email SMTP de base dans {{ fr.DVLS }} en suivant les étapes ci-dessous.

## Étapes

1. Dans {{ fr.DVLS }}, aller à ***Administration – Paramètres du serveur – Email***.
1. Dans la liste déroulante ***Type d'authentification***, sélectionner ***Basique***.
![Type d'authentification basique](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2203.png)
1. Dans le champ ***Email de l'administrateur***, saisir l'adresse email du destinataire qui recevra les erreurs.
1. Saisir/sélectionner toutes les informations nécessaires dans la section ***Configuration SMTP***. Voir le tableau dans la section suivante pour des informations sur chaque champ/paramètre.
1. Une fois les informations fournies, tester vos paramètres email avec le bouton ***Tester l'email***.
1. Si le test est réussi, ***Sauvegarder*** votre configuration en utilisant l'icône en haut à droite.

## Paramètres de configuration SMTP

| Champ/Paramètre       | Description                                                |
|----------------------|------------------------------------------------------------|
| Hôte                 | Entrer le nom ou l'adresse IP du serveur SMTP.           |
| Port                 | Sélectionner le port du serveur SMTP.                                |
| Nom d'utilisateur             | Entrer le nom d'utilisateur utilisé pour se connecter à votre serveur SMTP.    |
| Mot de passe             | Entrer le mot de passe utilisé pour se connecter à votre serveur SMTP.    |
| Sécurité de la connexion  | Définir une sécurité spécifique pour la connexion au serveur de messagerie. Choisir entre les suivants :<ul><li>Pas de chiffrement</li><li>Automatique basé sur le numéro de port (par défaut)</li><li>Utiliser SSL ou TLS immédiatement (SMTPS)</li><li>Utiliser TLS immédiatement après la connexion initiale</li><li>Utiliser TLS si le serveur le supporte après la connexion initiale</li></ul> |
| Envoyer l'email en tant que        | Entrer l'adresse email de l'expéditeur.                          |
