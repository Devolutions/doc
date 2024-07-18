---
eleventyComputed:
  title: Configurer une entrée Bitwarden dans {{ fr.RDM }}
  description: Il existe deux types d'entrées Bitwarden dans {{ fr.RDM }} ; ce sujet expliquera comment chacune fonctionne.
---
Dans {{ fr.RDM }} il y a les types d'entrée [***Gestion des Identifiants***](#credential-management) et [***Synchroniseur***](#synchronizer) pour Bitwarden, ce sujet expliquera comment chacune fonctionne. Pour en savoir plus sur la création et la gestion d'un compte Bitwarden, veuillez consulter la [documentation](https://bitwarden.com/help/) sur leur site officiel.
{% snippet, "badgeCaution" %}
Le mode d'***Authentification par courriel*** est maintenant obsolète pour les entrées ***Bitwarden*** et n'est plus disponible à partir de 2023.2.
{% endsnippet %}

{% snippet, "badgeInfo" %}
L'intégration des identifiants des gestionnaires de mots de passe est uniquement disponible dans la version Équipe de {{ fr.RDM }}.
{% endsnippet %}

## Gestion des Identifiants
Voici une description pour chaque champ ou option, dans l'ordre de haut en bas. L'entrée peut être trouvée sous ***Nouvelle Entrée*** – ***Gestion des Identifiants*** – ***Gestion des Mots de Passe***.
![Gestion des Identifiants](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0066.png)
![Onglet Général](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0067.png)
* ***Nom*** : Nom de l'entrée dans {{ fr.RDM }}
* ***Dossier*** : Dans quel dossier de {{ fr.RDM }} l'entrée sera

### Onglet Général
* ***Hôte***
    * ***Par défaut*** : URL Bitwarden par défaut
    * ***Personnalisé*** : URL personnalisée pour Bitwarden
* ***Utiliser "Mes Paramètres de Compte"*** : Aller à ***Fichier*** – ***Mes Paramètres de Compte*** – ***Paramètres*** – ***Gestion des Mots de Passe*** et cliquer sur ***Bitwarden*** pour configurer cette option d'abord ; remplace les champs ***Nom d'utilisateur*** et ***Mot de passe***
* ***ID Client*** : L'ID Client de la clé API
* ***Secret Client*** : Le Secret Client de la clé API
* ***Mot de passe maître*** : Le mot de passe maître de Bitwarden pour ce compte
* ***Toujours demander le mot de passe*** : Toujours être invité à saisir le mot de passe maître lors de l'accès à cette entrée
* ***Identifiants***
    * Cliquer sur le bouton ellipsis pour choisir un identifiant spécifique pour cette entrée
    * ***Toujours inviter avec la liste*** : Invite l'utilisateur avec une liste de tous les identifiants disponibles au lieu d'un spécifique

## Synchroniseur
Voici une description pour chaque champ ou option, dans l'ordre de haut en bas. L'entrée peut être trouvée sous ***Nouvelle Entrée*** – ***Synchroniseur*** :
![Synchroniseur](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0068.png)
![Entrée synchroniseur Bitwarden](https://cdnweb.devolutions.net/docs/RDMW6038_2024_2.png)
* ***Nom*** : Nom de l'entrée dans {{ fr.RDM }}
* ***Dossier*** : Dans quel dossier de {{ fr.RDM }} l'entrée sera
* ***Identifiants*** : En savoir plus sur les options [***Identifiants***](/rdm/windows/commands/edit/entries/entry-credentials-options/)
* ***Synchroniser automatiquement*** : L'entrée de {{ fr.RDM }} se synchronisera automatiquement avec Bitwarden

### Onglet Général
![Onglet Général](https://cdnweb.devolutions.net/docs/RDMW6039_2024_2.png)
* ***Hôte***
    * ***Par défaut*** : URL Bitwarden par défaut
    * ***Personnalisé*** : URL personnalisée pour Bitwarden
* ***ID Client*** : L'ID Client de Bitwarden
* ***Secret Client*** : Le Secret Client de Bitwarden
* ***Mot de passe maître*** : Le mot de passe maître de Bitwarden
* ***Dossier de destination*** : Cliquer sur le bouton ellipsis pour définir le chemin du dossier dans l'arborescence de {{ fr.RDM }} (qui ne peut être que dans le même {{ fr.VLT }}).
* ***Modèle*** : Modèle Bitwarden créé dans {{ fr.RDM }}

### Champs
![Onglet Filtre](https://cdnweb.devolutions.net/docs/RDMW6043_2024_2.png)

Choisir quels ***champs*** seront toujours synchronisés, et lesquels ne le seront pas. Par exemple, vous pourriez choisir de ne pas synchroniser la description, car vous souhaitez la modifier vous-même.

* ***Champ*** : Sélectionner quels champs seront toujours synchronisés, et lesquels ne le seront pas
* ***Préfixe du nom de session*** : Un préfixe pour l'entrée qui sera créée par le synchroniseur
* ***Suffixe du nom de session*** : Un suffixe pour l'entrée qui sera créée par le synchroniseur

### Filtre
![Onglet Filtre](https://cdnweb.devolutions.net/docs/RDMW6040_2024_2.png)
* ***Boîte de filtre*** : Elle chargera le {{ fr.VLT }} de Bitwarden pour permettre à l'utilisateur de choisir les Organisations/Collections voulues pour la synchronisation
* ***Sévérité du filtre***
    * ***Normal*** : Les comptes qui sont soit dans les dossiers sélectionnés soit dans les collections seront retournés
    * ***Strict*** : Les comptes qui sont à la fois dans les dossiers sélectionnés et dans les collections seront retournés
* ***Créer des étiquettes pour les Organisations/Collections*** : Si activé, les étiquettes d'organisation et de collection de Bitwarden seront ajoutées à l'entrée de {{ fr.RDM }}

### Avancé
![Onglet Avancé](https://cdnweb.devolutions.net/docs/RDMW6042_2024_2.png)
* ***Mode silencieux*** : Cette option désactive les dialogues d'erreur (utile lorsque le synchroniseur fonctionne automatiquement à des intervalles définis)
* ***Créer des dossiers virtuels*** : Permet la création de dossiers virtuels.
* ***Vérification des doublons*** n'importera pas les entrées avec le même type et hôte
    * ***Racine*** : Vérifier les doublons dans toute la source de données
    * ***Dossier de destination*** : Vérifier les doublons uniquement dans le dossier de destination de {{ fr.RDM }} ou sous-dossier
* ***Action en cas de non-concordance d'entrée***
    * ***Aucune*** : Ne rien faire
    * ***Supprimer*** : Supprimer cette entrée
    * ***Déplacer vers*** : Déplacer vers le ***Dossier de destination*** sélectionné
    * ***Marquer comme expiré*** : Marquer cette entrée comme expirée
* ***Nom de mon {{ fr.VLT }}*** : Choisir le nom du {{ fr.VLT }}.