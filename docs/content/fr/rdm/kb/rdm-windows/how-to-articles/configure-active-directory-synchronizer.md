---
eleventyComputed:
  title: Configurer une entrée de synchroniseur d'Active Directory dans {{ fr.RDM }}
  description: Ce sujet couvre chaque option dans l'entrée de Synchroniseur d'Active Directory.
  keywords:
  - Active Directory
  - Synchroniseur
---
Chaque champ de l'entrée ***Synchroniseur d'Active Directory*** est décrit ci-dessous.
{% snippet, "badgeInfo" %}
Pour en savoir plus sur la création et la gestion d'un Active Directory, veuillez consulter la documentation sur le site officiel.
{% endsnippet %}
{% snippet, "badgeInfo" %}
Veuillez noter que l'onglet [***Planification***](#schedule) est uniquement disponible dans une source de données {{ fr.DVLS }}. Nécessite également que le ***Planificateur*** {{ fr.DVLS }} soit configuré.
{% endsnippet %}

L'entrée peut être trouvée sous ***Nouvelle Entrée*** – ***Synchroniseur*** :
![Synchroniseur d'Active Directory](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0078.png)
![Onglet Général](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0079.png)
* ***Nom*** : Nom de l'entrée dans {{ fr.RDM }}
* ***Dossier*** : Dans quel dossier {{ fr.RDM }} l'entrée sera
* ***Identifiants*** : En savoir plus sur les options [***Identifiants***](/rdm/windows/commands/edit/entries/entry-credentials-options/)
* ***Synchroniser automatiquement*** : L'entrée {{ fr.RDM }} se synchronisera automatiquement avec Active Directory

### Onglet Général
* ***Mode***
    * ***Personnalisé*** : Choisir quels ***Machines de domaine*** et ***OU/Conteneurs*** pour obtenir les informations
    * ***LDAP*** : Pour extraire les informations des ordinateurs Active Directory en utilisant la requête LDAP
        * ***Chemin*** : En savoir plus sur cette option en cliquant sur le bouton ***Aide***
    * ***Mon domaine*** : Utiliser le domaine actuel
    * ***Ping domaine avant synchronisation*** : Vérifie si le domaine est actif avant la synchronisation
* ***Machine de domaine*** : Définir la machine de domaine en cliquant sur le bouton avec des points de suspension
* ***DN OU/Conteneur*** : Sélectionner les OU ou Conteneurs en cliquant sur le bouton avec des points de suspension
* ***Tester la connexion*** : Tester la connexion
* ***Aperçu*** : Liste des machines importées
* ***Utiliser LDAP sur SSL*** Si activé, utilise le protocole LDAP sécurisé
    * ***Défaut*** : Port LDAPS par défaut 636 ; cliquer sur ***Défaut*** pour définir un port différent
    * ***Générateur de port*** : Générer un port

### Paramètres
![Onglet Paramètres](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0080.png)
* ***Dossier de destination*** : Cliquer sur le bouton avec des points de suspension pour définir le chemin du dossier dans l'arborescence {{ fr.RDM }} (qui ne peut être que dans le même {{ fr.VLT }}).
* ***Modèle*** : [Modèle d'entrée](/rdm/windows/commands/file/templates/creating-templates/) créé dans {{ fr.RDM }}
* ***Créer des dossiers à partir des OU/conteneurs***
    * ***Niveau*** : De 0 à 100, 0 étant le conteneur supérieur dans Active Directory
    * ***Modèle de dossier*** : Modèle de dossier créé dans {{ fr.RDM }} qui s'appliquera aux nouveaux dossiers
* ***Nom de session*** : Le nom pour la session
    * ***Nom commun*** : Le nom qui représente un objet, utilisé pour effectuer des recherches (si vide, utilise OU)
    * ***Nom d'hôte DNS (FQDN)*** : Le système de noms de domaine
    * ***Hôte et description*** : Nom d'hôte et description
* ***Préfixe du nom de session*** : Un préfixe pour la session
* ***Suffixe du nom de session*** : Un suffixe pour la session
* ***Hôte*** : Comment les propriétés de l'hôte seront écrites dans le champ
    * ***Identique au nom de session*** : Nom d'hôte et nom d'entrée seront identiques
    * ***Nom commun*** : Le nom qui représente un objet, utilisé pour effectuer des recherches (si vide, utilise OU)
    * ***Nom d'hôte DNS (FQDN)*** : Le système de noms de domaine
    * ***Identique à l'hôte du modèle*** : Même nom que le modèle appliqué
    * ***Hôte et description*** : Nom d'hôte et description
* ***Importer la description*** : Importer la description de la machine depuis l'Active Directory

### Connexion
![Onglet Connexion](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0081.png)
* ***Nom d'utilisateur*** : Nom d'utilisateur pour le domaine
* ***Domaine*** : Domaine pour l'Active Directory
* ***Mot de passe*** : Mot de passe pour le domaine
* ***Fusionner nom d'utilisateur et domaine*** : Fusionne nom d'utilisateur et domaine

### Filtres
![Onglet Filtres](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0082.png)
* ***Type*** : Les filtres de syntaxe LDAP peuvent être utilisés dans de nombreuses situations dans Active Directory
    * ***Tous*** : Filtre par défaut
    * ***Serveur*** : Ajoute un filtre pour inclure uniquement Windows Server
* ***Autre filtre*** : En savoir plus sur cette option en cliquant sur le bouton ***Aide***
* ***Aperçu*** : Aperçu des filtres appliqués

### Recherche
![Onglet Recherche](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0083.png)
* ***Portée de recherche***
    * ***Sous-arbre*** : Recherche la racine
    * ***Un niveau*** : Recherche uniquement au niveau du dossier
* ***Vérification des doublons*** n'importera pas les entrées avec le même type et hôte
    * ***Racine*** : Vérifie les doublons dans toute la source de données
    * ***Dossier de destination*** : Vérifie les doublons uniquement dans le dossier de destination {{ fr.RDM }} ou sous-dossier

### Avancé
![Onglet Avancé](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0084.png)
* ***Mode silencieux*** : Cette option désactive les dialogues d'erreur (utile lorsque le synchroniseur s'exécute automatiquement à des intervalles définis)
* ***Vérifier le dossier en cas de non-concordance*** : Pendant la synchronisation, si activé, vérifie chaque connexion et la compare aux existantes ; ***Vérifier en cas de non-concordance de dossier*** vérifiera également le chemin
* ***Action en cas de non-concordance d'entrée***
    * ***Aucune*** : Ne rien faire
    * ***Mettre à jour les champs non critiques en cas de non-concordance*** : Met à jour la description ***Active Directory*** dans {{ fr.RDM }}, l'option ***Importer la description*** doit être activée dans l'onglet ***Paramètres*** (non disponible avec l'option ***Aucune***)
    * ***Supprimer*** : Supprimer cette entrée
    * ***Déplacer vers*** : Déplacer vers le ***Dossier de destination*** sélectionné
    * ***Marquer comme expiré*** : Marquer cette entrée comme expirée (le message d'expiration peut être configuré)

### Planification
![Onglet Planification](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0085.png)
* ***Activé*** : Planification activée/désactivée
    * ***Tous les (Jours)*** : Intervalle entre les exécutions du synchroniseur
    * ***À*** : Heure spécifique pour synchroniser
