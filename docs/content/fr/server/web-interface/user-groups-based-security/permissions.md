---
eleventyComputed:
  title: Permissions
  description: Le panneau Permissions peut être trouvé dans chaque propriété d'entrée dans la section Sécurité – Permissions.
---
Le panneau ***Permissions*** peut être trouvé dans chaque propriété d'entrée en cliquant sur ***Sécurité – Permissions – Avancé***.

Permettre aux administrateurs d'octroyer des permissions administratives aux utilisateurs standards sans les rendre administrateurs avec [permissions système](/server/web-interface/administration/configuration/system-permissions/).

Le système de permissions basé sur les groupes d'utilisateurs peut offrir un contrôle très précis de la sécurité. Voici un aperçu de la fenêtre des permissions :

![Permissions](https://cdnweb.devolutions.net/docs/DVLS6053_2024_1.png)

| Option                       | Description                                                                                                       |
|------------------------------|-------------------------------------------------------------------------------------------------------------------|
| Permission                   | Définir le mode de permission. Cela doit être réglé sur ***Custom*** pour modifier les permissions discrètes ci-dessous. Sélectionner entre :<br><ul><li>***Inherited*** (par défaut) : Hériter des permissions des groupes parents.</li><li>***Custom*** : Spécifier une valeur personnalisée pour chaque permission.</li><li>***Allowed*** : Tout le monde se voit accorder toutes les permissions ci-dessous.</li><li>***Disallowed*** : Personne sauf les administrateurs ne se voit accorder les permissions.</li></ul> |
| Permissions discrètes         | Choisir à qui vous souhaitez accorder des permissions. Ces boîtes combinées sont disponibles uniquement si la boîte combinée ***Permission*** ci-dessus est réglée sur ***Custom***. Sélectionner entre :<br><ul><li>***Inherited*** (par défaut) : Hériter des permissions des groupes parents.</li><li>***Custom*** : Spécifier une valeur personnalisée pour chaque permission.</li><li>***Allowed*** : Tout le monde se voit accorder toutes les permissions ci-dessous.</li><li>***Disallowed*** : Personne sauf les administrateurs ne se voit accorder les permissions.</li></ul> |
| Sélecteur d'utilisateurs / groupes d'utilisateurs | Sélectionner les utilisateurs / groupes d'utilisateurs à qui accorder la permission. Disponible uniquement si la permission est réglée sur ***Custom***. |
| Permission actuelle           | Affiche la permission accordée pour l'entrée actuelle.                                                            |

## Général

![Permissions – Général](https://cdnweb.devolutions.net/docs/DVLS6058_2024_1.png)

| Option            | Description                                                                                       |
|-------------------|---------------------------------------------------------------------------------------------------|
| Permission        | Définir le mode de permission. Il doit être réglé sur ***Custom*** pour modifier individuellement les permissions.   |
| Voir              | Permettre aux utilisateurs / groupes d'utilisateurs de voir les entrées.                                                                                            |
| Modifier              | Permettre aux utilisateurs / groupes d'utilisateurs de modifier les entrées.                                                        |
| Supprimer            | Permettre aux utilisateurs / groupes d'utilisateurs de supprimer les entrées.
| Déplacer            | Permettre aux utilisateurs / groupes d'utilisateurs de déplacer les entrées.                                                        |
| Voir le mot de passe     | Permettre aux utilisateurs / groupes d'utilisateurs de voir le mot de passe de l'entrée. 
| Voir les informations sensibles     | Permettre aux utilisateurs / groupes d'utilisateurs de voir les informations sensibles.                                                 |
| Connecter (Exécuter) | Permettre aux utilisateurs / groupes d'utilisateurs d'ouvrir les entrées.                                                        |

## Sécurité

![Permissions – Sécurité](https://cdnweb.devolutions.net/docs/DVLS6054_2024_1.png)

| Option           | Description                                              |
|------------------|----------------------------------------------------------|
| Modifier les permissions | Permettre aux utilisateurs / groupes d'utilisateurs de modifier les permissions.           |
| Historique des entrées    | Permettre aux utilisateurs / groupes d'utilisateurs de voir et utiliser l'historique des entrées. |
| Historique des mots de passe | Permettre aux utilisateurs / groupes d'utilisateurs de voir l'historique des mots de passe.  |

## Plus

![Permissions – Plus](https://cdnweb.devolutions.net/docs/DVLS6057_2024_1.png)

| Option       | Description                                                 |
|--------------|-------------------------------------------------------------|
| Modifier l'actif | Permettre aux utilisateurs / groupes d'utilisateurs de modifier l'actif.                       |
| Outils à distance | Permettre aux utilisateurs / groupes d'utilisateurs d'utiliser les outils à distance.              |
| Gestion des actifs informatiques    | Permettre aux utilisateurs / groupes d'utilisateurs d'utiliser l'outil de gestion des actifs informatiques. |

## Pièces jointes

![Permissions – Pièces jointes](https://cdnweb.devolutions.net/docs/DVLS6055_2024_1.png)


| Option                      | Description                                               |
|-----------------------------|-----------------------------------------------------------|
| Voir les pièces jointes            | Permettre aux utilisateurs / groupes d'utilisateurs de voir les pièces jointes.            |
| Ajouter/modifier/supprimer les pièces jointes | Permettre aux utilisateurs / groupes d'utilisateurs d'ajouter/modifier/supprimer les pièces jointes. |

## Documentation

![Permissions – Documentation](https://cdnweb.devolutions.net/docs/DVLS6056_2024_1.png)

| Option             | Description                                      |
|--------------------|--------------------------------------------------|
| Voir la documentation | Permettre aux utilisateurs / groupes d'utilisateurs de voir la documentation. |
| Supprimer la documentation | Permettre aux utilisateurs / groupes d'utilisateurs de supprimer la documentation. |
| Modifier la documentation | Permettre aux utilisateurs / groupes d'utilisateurs de modifier la documentation. |
