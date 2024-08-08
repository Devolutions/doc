---
_schema: default
eleventyComputed:
  title: Configurer une entrée de synchroniseur d'Active Directory dans {{ fr.RDM }}
  description: Ce sujet couvre chaque option dans l'entrée de Synchroniseur d'Active Directory.
---
Chaque champ de l'entrée ***Synchroniseur d'Active Directory*** est décrit ci-dessous.

{% snippet, "badgeInfo" %}Pour en savoir plus sur la création et la gestion d'un Active Directory, consulter la documentation sur le site officiel.{% endsnippet %}

## Synchroniseur

L'entrée peut être trouvée sous ***Nouvelle Entrée*** – ***Synchroniseur*** :

![Ajouter une nouvelle entrée : Synchroniseur d'Active Directory](https://cdnweb.devolutions.net/docs/RDMW4098_2024_2.png "Ajouter une nouvelle entrée : Synchroniseur d'Active Directory")

<br>![Entrée Synchroniseur d'Active Directory](https://cdnweb.devolutions.net/docs/RDMW4099_2024_2.png "Entrée Synchroniseur d'Active Directory")

<table><thead><tr><th><p>OPTION</p></th><th><p>DESCRIPTION</p></th></tr></thead><tbody><tr><td><p><strong>Nom</strong></p></td><td><p>Nom de l'entrée tel qu'affiché dans {{ fr.RDM }}.</p></td></tr><tr><td><p><strong>Dossier</strong></p></td><td><p>Dans quel dossier {{ fr.RDM }} l'entrée sera.</p></td></tr><tr><td><p><strong>Identifiants</strong></p></td><td><p>Lire plus sur les options <a href="/rdm/windows/commands/edit/entries/entry-credentials-options/"><em><strong>Identifiants</strong></em></a>.</p></td></tr><tr><td><p><strong>Synchroniser automatiquement</strong></p></td><td><p>Si cette case est cochée, l'entrée {{ fr.RDM }} se synchronisera automatiquement avec Active Directory.</p></td></tr></tbody></table>

### Onglet Général

![Onglet Général](https://cdnweb.devolutions.net/docs/RDMW4100_2024_2.png "Onglet Général")

<table><thead><tr><th><p>OPTION</p></th><th><p>DESCRIPTION </p></th></tr></thead><tbody><tr><td><p><strong>Mode</strong></p></td><td><ul><li><p><em><strong>Personnalisé</strong></em> : Choisir quels <em><strong>Machines de domaine</strong></em> et <em><strong>OU/Conteneurs</strong></em> pour obtenir les informations.</p></li><li><p><em><strong>LDAP</strong></em> : Pour extraire les informations des ordinateurs Active Directory en utilisant une requête LDAP. </p></li><li><p><em><strong>Mon domaine</strong></em> : Utiliser le domaine actuel.</p></li></ul></td></tr><tr><td><p><strong>Ping du domaine avant synchronisation</strong></p></td><td><p>Vérifie si le domaine est actif avant la synchronisation</p></td></tr><tr><td><p><strong>Machine de domaine</strong></p></td><td><p>Définir la machine de domaine en cliquant sur le bouton des points de suspension</p></td></tr><tr><td><p><strong>DN OU/Conteneur</strong></p></td><td><p>Sélectionner les OU ou Conteneurs en cliquant sur le bouton des points de suspension.</p></td></tr><tr><td><p><strong>Tester la connexion</strong></p></td><td><p>Teste la connexion.</p></td></tr><tr><td><p><strong>Aperçu</strong></p></td><td><p>Liste toutes les machines importées</p></td></tr><tr><td><p><strong>Utiliser LDAP sur SSL</strong></p></td><td><p>Si activé, utilise le protocole LDAP sécurisé :</p><ul><li><p><em><strong>Par défaut</strong></em> : Port LDAPS par défaut 636 ; cliquer sur <em><strong>Par défaut</strong></em> pour définir un port différent.</p></li><li><p><em><strong>Générateur de port</strong></em> : Générer un port.</p></li></ul></td></tr><tr><td><p><strong>Dossier de destination</strong></p></td><td><p>Choisir un dossier de destination.</p></td></tr><tr><td><p><strong>Modèle</strong></p></td><td><p>Sélectionner un modèle.</p></td></tr></tbody></table>

### Onglet Connexion

![Onglet Connexion](https://cdnweb.devolutions.net/docs/RDMW4101_2024_2.png "Onglet Connexion")

<table><thead><tr><th><p>OPTION</p></th><th><p>DESCRIPTION</p></th></tr></thead><tbody><tr><td><p><strong>Nom d'utilisateur</strong></p></td><td><p>Nom d'utilisateur pour le domaine.</p></td></tr><tr><td><p><strong>Domaine</strong></p></td><td><p>Domaine pour l'Active Directory.</p></td></tr><tr><td><p><strong>Mot de passe</strong></p></td><td><p>Mot de passe pour le domaine.</p></td></tr><tr><td><p><strong>Fusionner nom d'utilisateur et domaine</strong></p></td><td><p>Fusionne le nom d'utilisateur et le domaine.</p></td></tr></tbody></table>

### Onglet Champs

Choisir quels champs seront toujours synchronisés, et lesquels ne le seront pas. Par exemple, la description pourrait être laissée volontairement non synchronisée et éditée manuellement plus tard.

![Champs](https://cdnweb.devolutions.net/docs/RDMW4102_2024_2.png "Champs")

<table><thead><tr><th><p>OPTION</p></th><th><p>DESCRIPTION</p></th></tr></thead><tbody><tr><td><p><strong>Champ</strong></p></td><td><p>Sélectionner quels champs seront toujours synchronisés, et lesquels ne le seront pas entre :</p><ul><li><p>Nom de session.</p></li><li><p>Nom d'hôte.</p></li><li><p>OU/Conteneurs.</p></li><li><p>Description.</p></li></ul></td></tr><tr><td><p><strong>Nom de session</strong></p></td><td><p>Choisir entre <em><strong>Nom commun</strong></em>, <em><strong>Nom d'hôte DNS (FQDN)</strong></em>, et <em><strong>Hôte et description</strong></em>.</p></td></tr><tr><td><p><strong>Préfixe du nom de session</strong></p></td><td><p>Un préfixe pour l'entrée qui sera créée par le synchroniseur.</p></td></tr><tr><td><p><strong>Suffixe du nom de session</strong></p></td><td><p>Un suffixe pour l'entrée qui sera créée par le synchroniseur.</p></td></tr></tbody></table>

### Onglet Filtres

![Onglet Filtres](https://cdnweb.devolutions.net/docs/RDMW4103_2024_2.png "Onglet Filtres")

<table><thead><tr><th><p>OPTION</p></th><th><p>DESCRIPTION</p></th></tr></thead><tbody><tr><td><p><strong>Type</strong></p></td><td><p>Les filtres de syntaxe LDAP peuvent être utilisés dans de nombreuses situations dans Active Directory :</p><ul><li><p><em><strong>Tous</strong></em> : Filtre par défaut.</p></li><li><p><em><strong>Serveur</strong></em> : Ajoute un filtre pour inclure uniquement Windows Server.</p></li></ul></td></tr><tr><td><p><strong>Autre filtre</strong></p></td><td><p>En savoir plus sur cette option en cliquant sur le bouton <em><strong>Aide</strong></em>.</p></td></tr><tr><td><p><strong>Aperçu</strong></p></td><td><p>Aperçu des filtres appliqués.</p></td></tr></tbody></table>

### Onglet Avancé

![Onglet Avancé](https://cdnweb.devolutions.net/docs/RDMW4104_2024_2.png "Onglet Avancé")

<table><tbody><tr><td><p><strong>Mode silencieux</strong></p></td><td><p>Cette option désactive les dialogues d'erreur (utile lorsque le synchroniseur s'exécute automatiquement à des intervalles définis).</p></td></tr><tr><td><p><strong>Vérifier le dossier en cas de non-concordance</strong></p></td><td><p>Lors de la synchronisation, si activé, vérifie chaque connexion et la compare aux existantes ; <em><strong>Vérifier en cas de non-concordance de dossier</strong></em> vérifiera également le chemin.</p></td></tr><tr><td><p><strong>Créer des dossiers virtuels</strong></p></td><td><p>Permet la création de dossiers virtuels.</p></td></tr><tr><td><p><strong>Portée de recherche</strong></p></td><td><ul><li><p><em><strong>Arborescence</strong></em> : Recherche la racine.</p></li><li><p><em><strong>Niveau-Un</strong></em> : Recherche uniquement au niveau du dossier.</p></li></ul></td></tr><tr><td><p><strong>Vérification des doublons</strong></p></td><td><ul><li><p><em><strong>Racine</strong></em> : Vérifie les doublons dans toute la source de données.</p></li><li><p><em><strong>Dossier de destination</strong></em> : Vérifie les doublons uniquement dans le dossier de destination {{ fr.RDM }} ou sous-dossier.</p></li></ul><p><em><strong>Vérification des doublons</strong></em> n'importera pas les entrées avec le même type et hôte.</p></td></tr><tr><td><p><strong>Action en cas de non-concordance d'entrée</strong></p></td><td><ul><li><p><em><strong>Aucune</strong></em> : Ne rien faire.</p></li><li><p><em><strong>Supprimer</strong></em> : Supprimer cette entrée.</p></li><li><p><em><strong>Déplacer vers</strong></em> : Déplacer vers le <em><strong>dossier de destination</strong></em> sélectionné.</p></li><li><p><em><strong>Rendre expiré</strong></em> : Marquer cette entrée comme expirée (le message d'expiration peut être configuré).</p></li></ul></td></tr></tbody></table>

### Onglet Planification

![Onglet Planification](https://cdnweb.devolutions.net/docs/RDMW4105_2024_2.png "Onglet Planification")

* ***Activé*** : Planification activée/désactivée
  * ***Tous les (Jours)*** : Intervalle entre les exécutions du synchroniseur
  * ***À*** : Heure spécifique pour synchroniser

{% snippet, "badgeInfo" %}Notez que l'[***onglet Planification***](#schedule) est uniquement disponible dans une source de données {{ fr.DVLS }}, et qu'il nécessite que le ***Planificateur*** {{ fr.DVLS }} soit configuré.{% endsnippet %}