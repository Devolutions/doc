---
eleventyComputed:
  title: Scénarios d'intégration CyberArk PSM
  description: Il existe différentes approches en utilisant les composants CyberArk PSM de {{ fr.RDM }}. Voici les principales approches et techniques associées.
---
Il existe différentes approches en utilisant les composants CyberArk PSM de {{ fr.RDM }}. Bien que ce guide couvre de nombreuses méthodes et techniques, il ne peut couvrir toutes les possibilités. Voici les principales approches et techniques associées :

* Importer initialement
    * À partir de CSV (fournir un modèle CSV)
* Synchronisation (en utilisant l'entrée de synchronisation de {{ fr.RDM }})
    * À partir du synchronisateur Active Directory
    * À partir du synchronisateur de valeurs séparées par des virgules (CSV)
* Utilisation dynamique
    * Connexion rapide
    * Hôte

## Importation initiale des connexions Cyberark à partir de CSV

#### Créer l'entrée du serveur Cyberark PSM (ou plusieurs)
![CyberArk PSM Server](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4680.png)
Sélectionner le ***Mode de connexion*** que vous choisissez sur le serveur.

* Personnalisé (compte AD avec permissions pour se connecter en RDP au serveur PSM et un compte associé dans Cyberark).
* AAM (Sans mot de passe, voir cet [article](https://blog.devolutions.net/2020/10/going-passwordless-with-remote-desktop-manager-and-cyberark)).

Dans cet exemple, Personnalisé est en vigueur ; Nom d'utilisateur/domaine/mot de passe a été rempli manuellement.

Ensuite, choisir un modèle RDP créé au préalable, ce modèle définit les paramètres de la connexion initiale sur le serveur PSM.

![Modèle RDP créé au préalable](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4681.png)

Une fois le serveur Cyberark PSM ajouté, obtenir l'ID de la nouvelle entrée (***Propriété – Information d'entrée***).

Dans notre exemple, l'ID est 33628378-d4a6-431f-8438-16b75921aef9.

![ID de la nouvelle entrée](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4682.png)

#### Créer le modèle de connexion Cyberark PSM
1. Aller à ***Fichier – Modèles – Modèles***.
![Fichier – Modèles – Modèles](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4683.png)
1. Ajouter un nouveau modèle.
![Ajouter un nouveau modèle](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4684.png)
1. Sélectionner ***Connexion CyberArk PSM*** (Astuce : vous pouvez filtrer dans le champ ***Recherche***).
![Connexion CyberArk PSM](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4685.png)
1. Donner un nom significatif au modèle, certains des champs restants peuvent être remplis, mais le CSV devrait être suffisamment complet s'il est bien rempli.
![Nom du modèle](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4686.png)

#### Créer un fichier CSV pour l'importation
Les champs sont mappés comme ceci :

| Colonnes                              | Description                                  |
|--------------------------------------|----------------------------------------------|
| Nom                                  | Nom de l'entrée                              |
| Type de connexion                    | “Connexion CyberArk PSM”                     |
| CyberArkPSM\Component                | Pour RDP : PSM-RDP (plusieurs options disponibles) |
| CyberArkPSM\CyberArkJumpConnectionID | ID de l'entrée du serveur Cyberark PSM       |
| CyberArkPSM\Compte privilégié        | Compte privilégié à utiliser                 |
| Hôte                                 | Nom d'hôte/IP du point de terminaison        |

#### Importer
Une fois l'entrée du serveur PSM créée et le fichier CSV rempli.

1. Aller à ***Fichier – Importer – Assistant d'importation de session CSV***.
![Fichier – Importer – Assistant d'importation de session CSV](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4687.png)
1. Parcourir et sélectionner le fichier CSV créé au préalable, et cliquer sur ***Suivant***.
![Assistant d'importation CSV](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4688.png)
1. Sélectionner ***Modèle sélectionné***.
2. Sélectionner le modèle que nous avons créé et cliquer sur ***Terminer***.
![Importation PSM](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4689.png)
Note : Vous devez cocher la case ***Générer un mappage direct***.
![Case à cocher Générer un mappage direct](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6063.png)

![Connexions importées](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4690.png)

## Synchronisation (en utilisant l'entrée de synchronisation de {{ fr.RDM }})
{% snippet, "badgeInfo" %}
Ces deux techniques sont utilisées pour se connecter à un dépôt tiers. La première se connectera à un contrôleur de domaine et listera les serveurs et ordinateurs selon les filtres et paramètres.
{% endsnippet %}

L'approche générale et le principe d'utilisation des synchronisateurs sont de maintenir une liste de serveurs à jour à partir d'un dépôt d'informations externe, tel qu'un contrôleur de domaine, un hôte VM ou même un simple fichier CSV exporté périodiquement d'un autre système.

Ces entrées sont créées suivant un modèle, créé et configuré au préalable.

Il est également acquis que l'intégration Cyberark PSM est déjà configurée et fonctionnelle (composants de connexion et serveur PSM, modèles {{ fr.RDM }}, etc.)

### À partir du synchronisateur Active Directory
Cette approche créera des entrées à partir d'une requête LDAP sur un contrôleur de domaine.

Un inconvénient de cette configuration est que seul le champ Hôte sera rempli par le synchronisateur, le Compte privilégié et le composant doivent soit rester vides, soit tous utiliser le même paramètre (venant du modèle).

#### Créer le modèle de connexion PSM
Veuillez vous référer à [Créer le modèle de connexion Cyberark PSM](#create-the-cyberark-psm-connection-template) dans la section précédente.

Le modèle contiendra le compte privilégié, le serveur PSM et le composant de connexion à utiliser.

#### Créer un synchronisateur Active Directory
![Synchronisateur - Active Directory](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4691.png)

1. Entrer les données relatives au domaine dans l'onglet ***Général***.
1. Puis dans l'onglet ***Paramètres***, sélectionner votre dossier de destination pour les nouvelles entrées à créer.
1. Sélectionner le modèle de connexion PSM.
![Modèle de connexion PSM](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4692.png)
1. Remplir le reste des options et sauvegarder.

Il suffit ensuite de lancer le synchronisateur chaque fois que vous avez besoin de rafraîchir la liste des serveurs.

### À partir du synchronisateur de valeurs séparées par des virgules (CSV)
Cette approche est un mélange entre l'importation CSV et le synchronisateur.

Dans la plupart des cas, le fichier CSV sera généré à partir d'un système externe, puis édité/traité pour ajouter et compléter les informations.

Veuillez vous référer à [Créer le modèle de connexion Cyberark PSM](#create-the-cyberark-psm-connection-template) de la section précédente pour un exemple de modèle CSV.

Cela le rend plus complexe, mais plus flexible.

#### Créer le modèle de connexion PSM
Veuillez vous référer à [Créer le modèle de connexion Cyberark PSM](#create-the-cyberark-psm-connection-template) dans la section précédente.

#### Créer un synchronisateur CSV
![Synchronisateur – Valeurs séparées par des virgules (CSV)](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4693.png)

Entrer le chemin du fichier, le modèle à utiliser (créé au préalable) et le dossier de destination.

Vous pouvez ensuite lancer le synchronisateur chaque fois qu'une nouvelle version du fichier CSV est produite pour maintenir votre liste à jour.

## Utilisation dynamique

### Connexion rapide
Via la barre d'outils ***Connexion rapide***, vous pouvez ouvrir une session ad-hoc en spécifiant l'hôte et le type de session. En savoir plus sur la fonction [Connexion rapide](/rdm/mac/kb/rdm-windows/knowledge-base/quick-connect/).

Un modèle de connexion Cyberark PSM est requis au préalable.
1. Aller à ***Fichier – Modèles – Modèles***, et ajouter un nouveau modèle.
1. Dans ***Hôte***, entrer $QUICK_CONNECT$
1. Définir un compte privilégié à utiliser.
1. Sélectionner le ***Serveur PSM*** que cette connexion PSM utilisera et un ***Composant de connexion***.
![Fichier – Modèles – Modèles](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4694.png)

{% snippet, "badgeInfo" %}
Cette approche vous permettrait de créer plusieurs modèles pour les connexions PSM reflétant plusieurs ***Comptes privilégiés*** et ***Composants de connexion***.
{% endsnippet %}

### Utilisation
Une fois un modèle créé, il apparaîtra dans la liste des modèles de la ***Connexion rapide***.
![Connexion rapide](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4695.png)

Vous pouvez alors taper l'***Hôte*** du point de terminaison cible, et lancer la session.

## Hôte
Consultez ce [lien](/rdm/mac/kb/rdm-windows/how-to-articles/multiple-types-connections/host-with-templates/) pour mettre en œuvre l'utilisation d'un hôte pour l'intégration PSM.

Les étapes sont très similaires à la ***Connexion rapide***, la création du modèle est exactement la même, sauf que le champ ***Hôte*** restera vide.

Ce qui est réellement intéressant à ce sujet, c'est qu'une variable peut être utilisée pour remplir le ***Compte privilégié***.

Dans cet exemple, la variable du Champ personnalisé #1 est utilisée. Voici la configuration du modèle :

![Variable du compte privilégié](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4696.png)

Et l'entrée ***Hôte*** :

![Entrée Hôte](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4697.png)
![Champs personnalisés](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4698.png)