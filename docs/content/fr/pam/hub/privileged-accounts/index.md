---
eleventyComputed:
  title: Comptes privilégiés
  order: 40
  description: "Le module de gestion des accès privilégiés de {{ fr.DHUB }} permet de réinitialiser automatiquement les mots de passe des comptes privilégiés une fois l'accès expiré. Vous pouvez également déclencher manuellement la réinitialisation du mot de passe via le menu."
---
Le module de gestion des accès privilégiés de {{ fr.DHUB }} permet de réinitialiser automatiquement les mots de passe des comptes privilégiés une fois l'accès expiré. Vous pouvez également déclencher manuellement la réinitialisation du mot de passe via le menu.

Les comptes privilégiés sont ajoutés et gérés dans le PAM {{ fr.VLT }}. Les comptes peuvent être organisés dans des dossiers ou directement enregistrés à la racine.

![Compte privilégié dans PAM {{ fr.VLT }}](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2293.png)

{% snippet, "badgeHelp" %}
Vous pouvez utiliser la fonctionnalité ***Check-out*** pour demander un accès temporaire à une entrée de compte privilégié dans un PAM {{ fr.VLT }}. L'approbateur doit ensuite approuver ou refuser la demande. Pour en savoir plus sur ce processus, voir [Demander l'accès à un compte privilégié](/pam/privileged-accounts/request-access-privileged-account/) ou [Approuver l'accès à un compte privilégié](/pam/privileged-accounts/approve-access-privileged-account/).
{% endsnippet %}

## Créer une entrée de compte privilégié

Le seul type d'entrée qui peut être ajouté dans votre PAM {{ fr.VLT }} (à l'exception des dossiers) sont les ***Utilisateurs Azure AD***.

![Compte privilégié dans PAM {{ fr.VLT }}](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2294.png)

Lors de la création de votre compte privilégié, vous devez fournir certaines informations. Voir le tableau ci-dessous.

### Informations générales

| Option  | Description                                                    |
|---------|----------------------------------------------------------------|
| Nom     | Nom de l'entrée du compte privilégié.                          |
| Dossier | Emplacement de l'entrée dans le PAM {{ fr.VLT }}. Laissez-le vide pour créer l'entrée à la racine. |

### Informations de connexion

| Option           | Description                                                                                       |
|------------------|---------------------------------------------------------------------------------------------------|
| Fournisseur      | Nom du fournisseur PAM.                                                                           |
| Nom d'utilisateur| Nom d'utilisateur du compte privilégié. Le nom d'utilisateur doit correspondre au véritable nom d'utilisateur utilisé chez le fournisseur. |
| Mot de passe actuel | Si vous connaissez le mot de passe, saisissez-le ici. Sinon, vous pouvez laisser ce champ vide et réinitialiser le mot de passe de l'entrée après sa création. Modifier votre mot de passe dans la fenêtre ***Modifier l'identifiant*** ne change votre mot de passe que dans la base de données du hub. Le mot de passe ne sera pas mis à jour sur le domaine. Si vous souhaitez changer votre mot de passe partout, cliquez sur ***Réinitialiser le mot de passe*** sur l'entrée de l'identifiant. |

### Paramètres du mot de passe

| Option                  | Description                                                                                                                          |
|-------------------------|--------------------------------------------------------------------------------------------------------------------------------------|
| Mode de modèle de mot de passe  | Sélectionnez le mode de modèle de mot de passe à utiliser entre : <br> <ul><li>***Hérité*** : Hérite du modèle de mot de passe spécifié dans le dossier parent. </li><li>***Personnalisé*** : Sélectionnez un modèle de mot de passe personnalisé précédemment créé.</li><li>***Du fournisseur*** : Utilise le modèle de mot de passe du fournisseur.</li><ul> |

## Vérifier votre configuration

Pour vous assurer que votre configuration et l'installation de {{ fr.DHUBS }} fonctionnent correctement, essayez de réinitialiser votre mot de passe après avoir créé l'entrée. Pour ce faire, sélectionnez l'entrée dans le ***{{ fr.NPANE }}***. Ensuite, cliquez sur le bouton des points de suspension en haut à droite et sélectionnez ***Réinitialiser le mot de passe***.

![Réinitialiser le mot de passe](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2295.png)

Dans les journaux d'entrée, vous pouvez voir les différentes activités de la demande à la réinitialisation du mot de passe.

![Journaux d'entrée](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2300.png)

Pour voir le statut de la réinitialisation du mot de passe, allez au rapport [***Tâches***](/pam/hub/privileged-access-reports/tasks/) dans ***Rapports – Accès privilégié – Tâches***. Si cela a fonctionné, vous verrez que le statut de la tâche est défini sur ***Terminé***.

![Tâche de réinitialisation du mot de passe terminée](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2301.png)
