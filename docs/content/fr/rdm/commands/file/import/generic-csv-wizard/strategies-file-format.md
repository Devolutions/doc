---
eleventyComputed:
  title: Stratégies d'importation de fichiers CSV et format de fichier
  status: Sujet disponible en langue allemande
  description: Lors de l'importation de fichiers CSV dans {{ fr.RDM }}, il y a des décisions à prendre concernant les stratégies à utiliser et le format du contenu.
---
Lors de l'importation de fichiers CSV dans {{ fr.RDM }}, il y a des décisions à prendre concernant les stratégies à utiliser et le format du contenu.

## Modèles

La décision la plus importante concerne l'application d'un modèle dans le cadre du processus.

Les deux méthodes d'importation à partir de CSV vous permettent de choisir un modèle pour les nouvelles entrées créées. Si vous choisissez d'appliquer un modèle dans le cadre du processus, il sera appliqué à toutes les entrées créées à partir de ce lot. Parfois, il peut être judicieux de diviser les entrées en différents fichiers CSV en les regroupant par types d'entrées que vous souhaitez créer. Cela garantit qu'elles sont importées correctement dans {{ fr.RDM }} et réduit le nombre d'actions requises après l'action d'importation.

Si vous souhaitez une configuration plus spécifique, vous pouvez définir le modèle à utiliser dans la colonne ***Template*** du fichier CSV. Cependant, puisque vous pouvez définir le type d'entrée pour chaque entrée individuellement dans le fichier CSV (***ConnectionType***), cela peut ne pas être nécessaire.

### Instruction de format d'en-tête
Dans ***Fichier – Importer***, nous vous recommandons d'utiliser d'abord l'option ***Assistant d'importation de CSV générique***. Vous pouvez modifier, si nécessaire, l'***Instruction de format d'en-tête***.
![Assistant d'importation CSV](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2226.png)
* Session : Le contenu du fichier CSV est importé en tant qu'entrées de type ***Session*** dans {{ fr.RDM }}. À moins qu'un ConnectionType ne soit mentionné dans votre CSV ou qu'un modèle soit utilisé, vos entrées seront importées en tant qu'entrées RDP par défaut.
* Identifiant : Le contenu du fichier CSV est importé en tant qu'entrées de type ***Identifiant*** dans {{ fr.RDM }}, telles que ***Nom d'utilisateur/Mot de passe***, ***Liste de mots de passe*** et ***1Password***.
* Information : Le contenu du fichier CSV est importé en tant qu'entrées de type ***Information*** dans {{ fr.RDM }}, telles que ***Carte de crédit***, ***Compte bancaire*** et ***Codes d'alarme***.
* Modèle : Le contenu du fichier CSV est importé en tant que ***Modèles*** dans {{ fr.RDM }}.

## Contenu du fichier

{% snippet, "badgeCaution" %}
Certaines vérifications des paramètres d'entrée ne sont pas effectuées lors de l'importation, mais plutôt lorsque les dialogues des propriétés de la session(s) sont invoqués après l'importation. Par conséquent, utiliser le processus d'importation peut entraîner des entrées invalides qui peuvent déclencher des erreurs. Veuillez valider soigneusement les entrées concernées.
{% endsnippet %}

Dans le fichier CSV, les champs ***Host*** et ***Name*** sont obligatoires. Si aucun modèle n'est spécifié, le type RDP sera utilisé comme type de secours. Les champs doivent être séparés par des virgules.

Nous ne pouvons pas fournir la liste de tous les champs pris en charge pour tous les types d'entrées car {{ fr.RDM }} utilise une architecture ouverte et n'est donc pas conscient de tous les champs de type d'entrée fournis par notre système d'add-on. Une bonne méthode pour découvrir la structure des champs consiste à créer une entrée du type souhaité, à cliquer dessus avec le bouton droit et à sélectionner ***Presse-papiers – Copier***, puis à coller le contenu dans votre éditeur préféré. Vous verrez la structure et les noms des champs.

{% snippet, "badgeInfo" %}
* Les valeurs par défaut des champs ne sont pas sérialisées, ce qui signifie qu'elles sont simplement omises de la structure sérialisée.
* La prise en charge de tous les champs a un coût. Le processus d'importation est chronophage en raison de tous les accès dynamiques aux champs qui ont lieu. Un import initial massif d'entrées doit être séparé en lots de tailles gérables. Veuillez effectuer des essais et ajuster le nombre d'entrées pour obtenir une performance acceptable.
{% endsnippet %}

Toutes nos entrées partagent un ensemble de base de champs ; le reste est lié à la technologie spécifique avec laquelle elles interagissent (RDP, SSH, etc.). Certains champs sont regroupés en structures, comme l'onglet Information. Ces champs sont accessibles uniquement en fournissant le nom de la structure comme préfixe, par exemple, "MetaInformation\OS" ou "MetaInformation\PurchaseDate".

{% snippet, "badgeInfo" %}
Le fichier CSV peut contenir nos variables : elles seront résolues lors de l'enregistrement. Par exemple, vous pourriez utiliser la variable $HOST$ dans des champs comme ***Description***, ***URL***, ***Putty\CustomSessionName***, etc. Elle sera remplacée par la valeur correspondante.
{% endsnippet %}

Ci-dessous, une liste non exhaustive de certains champs pertinents.

| CHAMP                         | DESCRIPTION                                           |
|-------------------------------|-------------------------------------------------------|
| Host                          | Nom d'hôte de l'appareil. Ce champ est **obligatoire**. |
| Name                          | Nom de l'entrée. Ce champ est **obligatoire**.        |
| ConnectionType                | Jeton représentant le type de connexion. Il est préférable d'utiliser la méthode ***Presse-papiers – Copier*** pour obtenir les valeurs acceptables. Si aucun type de connexion n'est spécifié, RDP sera utilisé par défaut. |
| Group                         | Dossier de destination. Notez que si le processus d'importation lui-même a défini un dossier de destination, le dossier listé ici sera créé en dessous de celui du processus. |
| Description                   | Description de l'entrée.                              |
| Open (Embedded)               | Valeur booléenne (vrai ou faux) indiquant d'ouvrir la session en mode intégré. La valeur par défaut est faux, ce qui signifie que le client natif sera utilisé en fonction de la technologie (MSTSC.EXE, par exemple). |
| Username                      | Nom d'utilisateur utilisé pour ouvrir une session sur l'appareil.        |
| Domain                        | Domaine utilisé pour ouvrir une session sur l'appareil.          |
| Password                      | Mot de passe utilisé pour ouvrir une session sur l'appareil. Veuillez noter que ce champ est chiffré et stocké dans un autre champ lors de l'importation. |
| MetaInformation\SerialNumber  | Numéro de série de l'appareil.                          |
| MetaInformation\ServiceTag    | Étiquette de service de l'appareil.                            |
| MetaInformation\PurchaseDate  | Date d'achat au format ISO8601 (c.-à-d., aaaa-mm-jj). |

## Exemple

Voici un exemple de modèle de fichier CSV pour importer des hôtes SSH en tant qu'entrées SSH Shell dans {{ fr.RDM }} :

| ConnectionType | Name      | Group          | Host            | Port | CredentialUserName | CredentialDomain | CredentialPassword |
| -------------- | --------- | -------------- | --------------- | ---- | ------------------ | ---------------- | ------------------ |
| SSH Shell      | SSH Shell | VotreNomDeDossier | 123.123.123.123 | 123  | VotreNomUtilisateur | VotreDomaine     | VotreMotDePasse    |