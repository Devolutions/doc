---
eleventyComputed:
  title: Configurer une entrée Bitwarden dans {{ fr.RDM }}
  description: Il existe deux types d'entrées Bitwarden dans {{ fr.RDM }} ; ce sujet expliquera comment chacune fonctionne.
  keywords:
  - Bitwarden
---
Dans {{ fr.RDM }}, il y a les types d'entrée [***Gestion des identifiants***](#credential-management) et [***Synchroniseur***](#synchronizer) pour Bitwarden, ce sujet expliquera comment chacune fonctionne.
{% snippet, "badgeCaution" %}
Le mode d'***Authentification par courriel*** est maintenant obsolète pour les entrées ***Bitwarden*** et n'est plus disponible à partir de 2023.2.
{% endsnippet %}

{% snippet, "badgeInfo" %}
L'intégration des identifiants des gestionnaires de mots de passe est uniquement disponible dans la version Équipe de {{ fr.RDM }}.
{% endsnippet %}

{% snippet, "badgeHelp" %}
Pour en savoir plus sur la création et la gestion d'un compte Bitwarden, veuillez consulter la [documentation](https://bitwarden.com/help/) sur leur site officiel.
{% endsnippet %}

## Gestion des identifiants
Voici une description pour chaque champ ou option, dans l'ordre de haut en bas. L'entrée peut être trouvée sous ***Nouvelle entrée*** – ***Gestion des identifiants*** – ***Gestion des mots de passe***.
![Gestion des identifiants](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0066.png)
![Onglet Général](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0067.png)
* ***Nom*** : Nom de l'entrée dans {{ fr.RDM }}
* ***Dossier*** : Dans quel dossier de {{ fr.RDM }} l'entrée sera

### Onglet Général
* ***Hôte***
    * ***Par défaut*** : URL Bitwarden par défaut
    * ***Personnalisé*** : URL personnalisée pour Bitwarden
* ***Utiliser "Mes paramètres de compte"*** : Aller à ***Fichier*** – ***Mes paramètres de compte*** – ***Paramètres*** – ***Gestion des mots de passe*** et cliquer sur ***Bitwarden*** pour configurer cette option d'abord ; remplace les champs ***Nom d'utilisateur*** et ***Mot de passe***
* ***ID client*** : L'ID client de la clé API
* ***Secret client*** : Le secret client de la clé API
* ***Mot de passe maître*** : Le mot de passe maître de Bitwarden pour ce compte
* ***Demander toujours le mot de passe*** : Être toujours invité à saisir le mot de passe maître lors de l'accès à cette entrée
* ***Identifiants***
    * Cliquer sur le bouton ellipsis pour choisir un identifiant spécifique pour cette entrée
    * ***Toujours demander avec la liste*** : Invite l'utilisateur avec une liste de tous les identifiants disponibles au lieu d'un spécifique

## Synchroniseur
Voici une description pour chaque champ ou option, dans l'ordre de haut en bas. L'entrée peut être trouvée sous ***Nouvelle entrée*** – ***Synchroniseur*** :
![Synchroniseur](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0068.png)
![Onglet Général](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0069.png)
* ***Nom*** : Nom de l'entrée dans {{ fr.RDM }}
* ***Dossier*** : Dans quel dossier de {{ fr.RDM }} l'entrée sera
* ***Identifiants*** : Lire plus sur les options [***Identifiants***](/rdm/windows/commands/edit/entries/entry-credentials-options/)
* ***Synchroniser automatiquement*** : L'entrée de {{ fr.RDM }} se synchronisera automatiquement avec Bitwarden

### Onglet Général
* ***Hôte***
    * ***Par défaut*** : URL Bitwarden par défaut
    * ***Personnalisé*** : URL personnalisée pour Bitwarden
* ***ID client*** : L'ID client de Bitwarden
* ***Secret client*** : Le secret client de Bitwarden
* ***Mot de passe maître*** : Le mot de passe maître de Bitwarden
* ***Dossier de destination*** : Cliquer sur le bouton ellipsis pour définir le chemin du dossier dans l'arborescence de {{ fr.RDM }} (qui ne peut être que dans le même {{ fr.VLT }}).
* ***Modèle*** : Modèle Bitwarden créé dans {{ fr.RDM }}
* ***Vérification des doublons*** n'importera pas les entrées avec le même type et hôte
    * ***Racine*** : Vérifier les doublons dans toute la source de données
    * ***Dossier de destination*** : Vérifier les doublons uniquement dans le dossier de destination {{ fr.RDM }} ou sous-dossier

### Filtre
![Onglet Filtre](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0070.png)
* ***Boîte de filtre*** : Elle chargera le {{ fr.VLT }} de Bitwarden pour permettre à l'utilisateur de choisir les Organisations/Collections voulues pour la synchronisation
* ***Sévérité du filtre***
    * ***Normal*** : Les comptes qui sont soit dans les dossiers sélectionnés soit dans les collections seront retournés
    * ***Strict*** : Les comptes qui sont à la fois dans les dossiers sélectionnés et dans les collections seront retournés
* ***Créer des étiquettes pour les Organisations/Collections*** : Si activé, les étiquettes d'organisation et de collection de Bitwarden seront ajoutées à l'entrée de {{ fr.RDM }}

### Avancé
![Onglet Avancé](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0071.png)
* ***Préfixe du nom de session*** : Un préfixe pour l'entrée
* ***Suffixe du nom de session*** : Un suffixe pour l'entrée
* ***Action en cas de non-concordance d'entrée***
    * ***Aucune*** : Ne rien faire
    * ***Supprimer*** : Supprimer cette entrée
    * ***Déplacer vers*** : Déplacer vers le ***Dossier de destination*** sélectionné
    * ***Marquer comme expiré*** : Marquer cette entrée comme expirée
* ***Mode silencieux*** : Cette option désactive les dialogues d'erreur (utile lorsque le synchroniseur fonctionne automatiquement à des intervalles définis)
