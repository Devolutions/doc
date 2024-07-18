---
eleventyComputed:
  title: Configurer une entrée de synchroniseur d'Active Directory dans {{ fr.RDM }}
  description: Ce sujet couvre chaque option dans l'entrée de Synchroniseur d'Active Directory.
---
Chaque champ de l'entrée ***Synchroniseur d'Active Directory*** est décrit ci-dessous.
{% snippet, "badgeInfo" %}
Pour en savoir plus sur la création et la gestion d'un Active Directory, consulter la documentation sur le site officiel.
{% endsnippet %}
{% snippet, "badgeInfo" %}
Veuillez noter que l'onglet [***Planification***](#schedule) est uniquement disponible dans une source de données {{ fr.DVLS }}. Nécessite également que le ***Planificateur*** {{ fr.DVLS }} soit configuré.
{% endsnippet %}

## Synchroniseur
L'entrée peut être trouvée sous ***Nouvelle Entrée*** – ***Synchroniseur*** :
![Synchroniseur d'Active Directory](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0078.png)
![Entrée de Synchroniseur d'Active Directory](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0079.png)
* ***Nom*** : Nom de l'entrée dans {{ fr.RDM }}
* ***Dossier*** : Dans quel dossier {{ fr.RDM }} l'entrée sera
* ***Identifiants*** : En savoir plus sur les options [***Identifiants***](/rdm/windows/commands/edit/entries/entry-credentials-options/)
* ***Synchroniser automatiquement*** : L'entrée {{ fr.RDM }} se synchronisera automatiquement avec Active Directory

### Onglet Général
![Onglet Général](https://cdnweb.devolutions.net/docs/RDMW6044_2024_2.png)
* ***Mode***
    * ***Personnalisé*** : Choisir quels ***Machines de domaine*** et ***OU/Conteneurs*** obtenir les informations
    * ***LDAP*** : Pour extraire les informations des ordinateurs Active Directory en utilisant la requête LDAP
        * ***Chemin*** : En savoir plus sur cette option en cliquant sur le bouton ***Aide***
    * ***Mon domaine*** : Utiliser le domaine actuel
    * ***Ping domaine avant synchronisation*** : Vérifie si le domaine est actif avant la synchronisation
* ***Machine de domaine*** : Définir la machine de domaine en cliquant sur le bouton avec points de suspension
* ***DN OU/Conteneur*** : Sélectionner les OU ou Conteneurs en cliquant sur le bouton avec points de suspension
* ***Tester la connexion*** : Tester la connexion
* ***Aperçu*** : Liste des machines importées
* ***Utiliser LDAP sur SSL*** Si activé, utilise le protocole LDAP sécurisé
    * ***Défaut*** : Port LDAPS par défaut 636 ; cliquer sur ***Défaut*** pour définir un port différent
    * ***Générateur de port*** : Générer un port
* ***Dossier de destination*** : Choisir un dossier de destination.
* ***Modèle*** : Sélectionner un modèle.
### Connexion
![Onglet Connexion](https://cdnweb.devolutions.net/docs/RDMW6045_2024_2.png)
* ***Nom d'utilisateur*** : Nom d'utilisateur pour le domaine
* ***Domaine*** : Domaine pour l'Active Directory
* ***Mot de passe*** : Mot de passe pour le domaine
* ***Fusionner nom d'utilisateur et domaine*** : Fusionne nom d'utilisateur et domaine

### Champs
![Champs](https://cdnweb.devolutions.net/docs/RDMW6046_2024_2.png)
Choisir quels champs seront toujours synchronisés, et lesquels ne le seront pas. Par exemple, vous pourriez choisir de ne pas synchroniser la description, car vous souhaitez la modifier vous-même.

* ***Champ*** : Sélectionner quels champs seront toujours synchronisés, et lesquels ne le seront pas
* ***Nom de session*** : Choisir entre ***Nom commun***, ***Nom d'hôte DNS (FQDN)***, et ***Hôte et description***.
* ***Préfixe du nom de session*** : Un préfixe pour l'entrée qui sera créée par le synchroniseur
* ***Suffixe du nom de session*** : Un suffixe pour l'entrée qui sera créée par le synchroniseur

### Filtres
![Onglet Filtres](https://cdnweb.devolutions.net/docs/RDMW6047_2024_2.png)
* ***Type*** : Les filtres de syntaxe LDAP peuvent être utilisés dans de nombreuses situations dans Active Directory
    * ***Tous*** : Filtre par défaut
    * ***Serveur*** : Ajoute un filtre pour inclure uniquement Windows Server
* ***Autre filtre*** : En savoir plus sur cette option en cliquant sur le bouton ***Aide***
* ***Aperçu*** : Aperçu des filtres appliqués

### Avancé
![Onglet Avancé](https://cdnweb.devolutions.net/docs/RDMW6048_2024_2.png)
* ***Mode silencieux*** : Cette option désactive les dialogues d'erreur (utile lorsque le synchroniseur fonctionne automatiquement à des intervalles définis)
* ***Vérifier le dossier en cas de non-concordance*** : Pendant la synchronisation, si activé, vérifie chaque connexion et la compare aux existantes ; ***Vérifier en cas de non-concordance de dossier*** vérifiera également le chemin
* ***Créer des dossiers virtuels*** : Permet la création de dossiers virtuels.
* ***Portée de recherche***
    * ***Sous-arbre*** : Recherche la racine
    * ***Un niveau*** : Recherche uniquement au niveau du dossier
* ***Vérification des doublons*** n'importera pas les entrées avec le même type et hôte
    * ***Racine*** : Vérifie les doublons dans toute la source de données
    * ***Dossier de destination*** : Vérifie les doublons uniquement dans le dossier de destination {{ fr.RDM }} ou sous-dossier
* ***Action en cas de non-concordance d'entrée***
    * ***Aucune*** : Ne rien faire
    * ***Supprimer*** : Supprimer cette entrée
    * ***Déplacer vers*** : Déplacer vers le ***dossier de destination*** sélectionné
    * ***Marquer comme expiré*** : Marquer cette entrée comme expirée (un message d'expiration peut être configuré)