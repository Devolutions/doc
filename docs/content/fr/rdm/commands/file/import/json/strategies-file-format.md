---
eleventyComputed:
  title: Stratégies d'importation JSON et format de fichier
  description: Lors de l'importation de fichiers JSON dans {{ fr.RDM }}, il y a certaines spécifications à suivre concernant le format du contenu.
---
Lors de l'importation de fichiers JSON dans {{ fr.RDM }}, il y a certaines spécifications à suivre concernant le format du contenu.

## Contenu du fichier

{% snippet, "badgeCaution" %}
Certaines validations sur les paramètres des entrées ne sont pas dans la couche métier mais plutôt dans les boîtes de dialogue des propriétés. Cela signifie que l'utilisation du processus d'importation peut entraîner des entrées invalides qui déclenchent des erreurs. Veuillez valider soigneusement les entrées résultantes.
{% endsnippet %}

Nous ne pouvons pas fournir la liste de tous les champs pris en charge pour tous les types d'entrées car {{ fr.RDM }} utilise une architecture ouverte et n'est donc même pas conscient de tous les champs de type d'entrée fournis par notre système d'add-on. Une bonne méthode pour découvrir la structure des champs consiste à créer une entrée du type désiré, à cliquer dessus avec le bouton droit et à sélectionner ***Presse-papiers – Copier***, puis à coller le contenu dans votre éditeur préféré. Vous verrez la structure et les noms des champs.

{% snippet, "badgeInfo" %}
Les valeurs par défaut des champs ne sont pas sérialisées, ce qui signifie qu'elles sont simplement omises de la structure sérialisée.
{% endsnippet %}

{% snippet, "badgeInfo" %}
La prise en charge de tous les champs a un coût. Le processus d'importation est chronophage en raison de tous les accès dynamiques aux champs qui ont lieu. Un import initial massif d'entrées devrait être séparé en lots de tailles gérables. Veuillez effectuer des essais et ajuster le nombre d'entrées pour obtenir une performance acceptable.
{% endsnippet %}

Toutes nos entrées partagent un ensemble de base de champs ; le reste est lié à la technologie spécifique avec laquelle on interface (RDP, SSH, etc.). Certains champs sont regroupés dans des structures, comme l'onglet Informations. Ces champs ne sont accessibles qu'en fournissant le nom de la structure comme objet parent, par exemple, "MetaInformation\OS" ou "MetaInformation\PurchaseDate".

{% snippet, "badgeInfo" %}
Notez que le fichier JSON peut contenir nos variables : elles seront résolues lors de l'enregistrement. Par exemple, vous pourriez utiliser la variable $HOST$ dans des champs comme ***Description***, ***URL***, ***Putty\CustomSessionName***... Elle sera remplacée par la valeur correspondante.
{% endsnippet %}

Ci-dessous se trouve une liste non exhaustive de certains champs pertinents.

| OPTION                      | DESCRIPTION                                                                                     |
|-----------------------------|-------------------------------------------------------------------------------------------------|
| Host                           | Nom d'hôte de l'appareil.                                                                                                                         |
| Name                           | Nom de l'entrée.                                                                           |
| ConnectionType                 | Jeton représentant le type de connexion. Il est préférable d'utiliser la méthode ***Presse-papiers – Copier*** pour obtenir les valeurs acceptables. Si aucun type de connexion n'est spécifié, RDP sera utilisé par défaut. |
| Group                          | Dossier de destination. Notez que si le processus d'importation lui-même a défini un dossier de destination, le dossier listé ici sera créé en dessous de celui du processus.                |
| Description                    | Description de l'entrée.                                                                                                                         |
| Open (Embedded)                | Valeur booléenne (vrai ou faux) indiquant d'ouvrir la session en mode intégré. La valeur par défaut est faux, ce qui signifie que le client natif sera utilisé en fonction de la technologie (MSTSC.EXE, par exemple).                      |
| Username                       | Nom d'utilisateur utilisé pour ouvrir une session sur l'appareil.                                                                                                                        |
| Domain                         | Domaine utilisé pour ouvrir une session sur l'appareil.                                                                                                                        |
| Password                       | Mot de passe utilisé pour ouvrir une session sur l'appareil. Veuillez noter que ce champ est chiffré et stocké dans un autre champ lors de l'importation.         |
| MetaInformation\SerialNumber   | Numéro de série de l'appareil.                                                                                                                        |
| MetaInformation\ServiceTag     | Étiquette de service de l'appareil.                                                                                                                        |
| MetaInformation\PurchaseDate   | Date d'achat au format ISO8601 (c'est-à-dire, aaaa-mm-jj).                                                                                                                   |
