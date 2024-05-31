---
eleventyComputed:
  title: Modification par lot
---
Utiliser l'option Modifier – Modification par lot ou l'option Modification par lot dans le menu contextuel pour changer les paramètres de plusieurs sessions en une seule opération. Cela peut être utilisé, par exemple, pour supprimer ou mettre à jour toutes les informations d'identification d'un groupe de sessions.
![Modification par lot](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10346.png)

Vous pourriez également changer :
* Nom d'Hôte
* Informations d'Identification
* Mots de Passe
* Paramètres Généraux
* Paramètres de Type de Session
* Paramètres Spécifiques à l'Utilisateur
* Groupe d'Utilisateurs

## Recherche Avancée
Sélectionner plusieurs entrées en utilisant Command et clic de souris. Pour une méthode avec un peu plus de puissance, utiliser notre dialogue de [Recherche Avancée](/rdm/mac/commands/view/advanced-search/), accessible depuis ***Affichage – Recherche Avancée***. La Recherche Avancée vous permet de sélectionner plusieurs critères à la fois.
![Recherche Avancée](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10605.png)

Après avoir ajusté vos critères pour obtenir les résultats souhaités, appuyer sur Sélectionner dans ***{{ fr.NPANE }}*** puis ***Action - Modification par lot***.

## Paramètres
### Changer le Nom d'Hôte Enregistré
![Changer le Nom d'Hôte Enregistré](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10031.png)

Vous pouvez changer plusieurs noms d'hôte en même temps.

### Changer les Informations d'Identification Enregistrées
Vous pouvez changer les informations d'identification configurées pour plusieurs sessions en une seule opération.
![Changer les informations d'identification enregistrées](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10606.png)

| OPTION                      | DESCRIPTION                                                                                          |
|-----------------------------|------------------------------------------------------------------------------------------------------|
| Utiliser des informations d'identification spécifiées | Utiliser un nom d'utilisateur, mot de passe et domaine spécifiques.                                                        |
| Utiliser le dépôt d'informations d'identification   | Utiliser une entrée d'informations d'identification liée qui peut être des informations d'identification externes comme KeePass. Utile pour partager ou réutiliser des informations d'identification parmi les entrées. |
| Utiliser hérité               | Utiliser les informations d'identification de son entrée parente ou groupe.                                                    |
| Utiliser mes informations d'identification personnelles | Permet d'utiliser un ensemble d'informations d'identification pour remplacer ou émuler celles de votre session Windows.   |
| Utiliser la recherche {{ fr.UVLT }}    | Utiliser les informations d'identification stockées dans votre [{{ fr.UVLT }}](/rdm/mac/user-interface/navigation-pane/user-vault/). |
| Aucune                        | Ne pas utiliser d'informations d'identification.                                                                          |

### Réinitialiser Toutes les Informations d'Identification Enregistrées
Effacer toutes les informations d'identification existantes pour les sessions sélectionnées.

### Réinitialiser Tous les Mots de Passe Enregistrés
Effacer tous les mots de passe existants pour les sessions sélectionnées.

### Modifier les Sessions (Paramètres Généraux)
![Modification par lot – Paramètres Généraux](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10348.png)

Modifier les Sessions (Paramètres Généraux) permet de changer simultanément les paramètres communs des sessions. La session peut être de n'importe quel type, car un ensemble commun d'options est partagé entre les sessions. Les paramètres généraux communs suivants peuvent être changés :
* Groupe/Dossier
* Affichage
* Autoriser l'affichage des informations d'identification (tout le monde)
* Image
* Description
* Mots-clés/Tags
* VPN
* Événements
* Journaux
* Onglet Paramètres Avancés

### Modifier les Sessions (Paramètres de Type de Session)
{% snippet, "badgeInfo" %}
Modifier les Sessions Paramètres de Type de Session est uniquement disponible pour des types de session spécifiques comme RDP.
{% ENDSNIPPET %}

![Modification par lot – Type de Session](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10347.png)

### Modifier les Sessions (Paramètres Spécifiques à l'Utilisateur)
Les Paramètres Spécifiques à l'Utilisateur peuvent être modifiés en lot s'ils sont pris en charge par le type de session.
![Modification par lot - Paramètres Spécifiques à l'Utilisateur](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10349.png)
