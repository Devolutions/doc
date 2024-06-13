---
eleventyComputed:
  title: Préférences de notifications
  description: Les préférences de notifications dans {{ fr.DVLS }} permettent aux administrateurs et aux utilisateurs disposant de permissions spécifiques de ne recevoir que les mises à jour les plus pertinentes.
---
Les préférences de notifications dans {{ fr.DVLS }} permettent aux administrateurs et aux utilisateurs disposant de [permissions système](/server/web-interface/administration/configuration/system-permissions/modules/) de ne recevoir que les mises à jour les plus pertinentes.

## Préférences de notifications

Choisir le type de notifications à recevoir.

![Préférences de notifications](https://cdnweb.devolutions.net/docs/DVLS6000_2024_1.png)

* ***Erreur*** : Les notifications d'erreur indiquent un problème significatif survenu dans l'environnement Devolutions Server.
* ***Avertissement*** : Les notifications d'avertissement représentent des problèmes qui, bien que non immédiatement critiques, pourraient conduire à des erreurs s'ils ne sont pas traités.
* ***Information*** : Les notifications d'information fournissent des mises à jour sur le fonctionnement normal de Devolutions Server ou confirment la réussite des opérations.

## Activer la sélection personnalisée

Les administrateurs et les utilisateurs disposant de permissions système peuvent choisir les actions pour lesquelles ils souhaitent recevoir des notifications.

![Activer la sélection personnalisée](https://cdnweb.devolutions.net/docs/DVLS6000_2024_2.png)

## Administration

### Sauvegarde
* Succès : Une notification est envoyée en cas de succès de la sauvegarde.
* Échec : Une notification est envoyée en cas d'échec de la sauvegarde.
* Échec de validation : Une notification est envoyée pour les erreurs de validation pendant la sauvegarde.

### Serveur
* Connexion d'urgence : Une notification est envoyée pour l'utilisation d'une connexion d'urgence.
* Erreur inattendue : Une notification est envoyée pour toute erreur inattendue.

### Sécurité

* Tâche de sécurité ignorée : Une notification est envoyée pour une tâche de sécurité ignorée.
* Tâche de sécurité restaurée : Une notification est envoyée pour une tâche de sécurité restaurée.
* Entrée déverrouillée : Une notification est envoyée pour une entrée déverrouillée.

## Service

### Passerelle
* Création : Une notification est envoyée lorsqu'une passerelle est créée.
* Mise à jour : Une notification est envoyée lorsqu'une passerelle est mise à jour.
* Suppression : Une notification est envoyée lorsqu'une passerelle est supprimée.
* En ligne : Une notification est envoyée lorsqu'une passerelle est en ligne.
* Hors ligne : Une notification est envoyée lorsqu'une passerelle est hors ligne.

### PAM
* Échec du battement de cœur : Une notification est envoyée lorsqu'un contrôle de battement de cœur PAM échoue.

### Ferme de passerelles
* Création : Une notification est envoyée lorsqu'une ferme de passerelles est créée.
* Mise à jour : Une notification est envoyée lorsqu'une ferme de passerelles est mise à jour.
* Suppression : Une notification est envoyée lorsqu'une ferme de passerelles est supprimée.

### Planificateur
* Hors ligne : Une notification est envoyée lorsque le planificateur est hors ligne.
* En veille : Une notification est envoyée lorsque le planificateur entre en mode veille.
* À l'activation : Une notification est envoyée lorsque le planificateur est activé.
* Aucun planificateur de veille disponible : Une notification est envoyée lorsqu'aucun planificateur de veille n'est disponible.
* Changement de planificateur actif : Une notification est envoyée lorsque le planificateur actif change.

## Entrées

### {{ fr.VLT_MAJ }}
* Création : Une notification est envoyée lorsqu'un {{ fr.VLT }} est créé.
* Mise à jour : Une notification est envoyée lorsqu'un {{ fr.VLT }} est mis à jour.
* Suppression : Une notification est envoyée lorsqu'un {{ fr.VLT }} est supprimé.
* Téléchargement des données {{ fr.VLT_MAJ }} pour l'auto-remplissage : Une notification est envoyée pour le téléchargement des données {{ fr.VLT }} pour l'auto-remplissage.