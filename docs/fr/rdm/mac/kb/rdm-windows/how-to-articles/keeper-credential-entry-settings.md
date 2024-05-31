---
eleventyComputed:
  title: Paramètres d'entrée des identifiants Keeper
---
Keeper est l'un des nombreux gestionnaires de mots de passe externes intégrés dans {{ fr.RDM }}

{% snippet, "badgeInfo" %}
L'intégration des identifiants provenant des gestionnaires de mots de passe est uniquement disponible dans la version Team de {{ fr.RDM }}.
{% endsnippet %}

## Paramètres

***Type de connexion*** détermine la méthode que {{ fr.RDM }} utilisera pour se connecter à Keeper.

* ***Connexion {{ fr.VLT_MAJ }}*** utilise l'adresse ***Email*** et un ***Mot de passe maître*** pour se connecter.
* ***SSO d'entreprise*** utilise l'adresse ***Email*** pour se connecter.
* ***SSO d'entreprise (Domaine)*** utilise le ***Domaine d'entreprise*** pour se connecter.

L'option ***Utiliser “Mes paramètres de compte”***, disponible pour les types de connexion ***Connexion {{ fr.VLT_MAJ }}*** et ***SSO d'entreprise***, permet à l'entrée de faire référence aux identifiants enregistrés sous ***Fichier - Mes paramètres de compte*** plutôt que de les saisir manuellement dans l'entrée Keeper.

La ***Région*** vous permet de choisir d'où votre serveur Keeper est localisé.

L'option ***Toujours demander le mot de passe*** vous invitera à entrer votre mot de passe Keeper chaque fois que l'entrée est utilisée au lieu de le sauvegarder dans l'entrée.

Le champ ***Identifiants*** est utilisé pour spécifier quel identifiant sera récupéré de Keeper.

L'option ***Toujours demander la liste*** permet aux utilisateurs de sélectionner l'identifiant chaque fois que l'entrée est utilisée, plutôt que de le déterminer.

![!!KB4960](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4960.png)

### Procédure

1. Sélectionner votre ***Type de connexion*** désiré (***Connexion {{ fr.VLT_MAJ }}***, ***SSO d'entreprise*** ou ***SSO d'entreprise (Domaine)***).
1. Saisir les informations requises, basées sur le ***Type de connexion*** sélectionné.
1. Utiliser le champ ***Identifiants*** pour spécifier quel identifiant doit être récupéré de Keeper ou utiliser l'option ***Toujours demander la liste*** pour sélectionner quel identifiant récupérer chaque fois que l'entrée Keeper est utilisée.
1. Cliquer sur ***OK***.
