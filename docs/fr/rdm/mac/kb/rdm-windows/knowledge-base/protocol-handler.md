---
eleventyComputed:
  title: Gestionnaire de protocole
  description: Un gestionnaire de protocole a été implémenté dans {{ fr.RDM }} pour pouvoir lancer une session directement à partir du contenu HTML.
---
Un ***Gestionnaire de protocole*** a été implémenté dans {{ fr.RDM }} pour pouvoir lancer une session directement à partir du contenu HTML. Cela peut être très utile pour appeler {{ fr.RDM }} depuis une Base de Données de Gestion de Configuration (CMDB) ou même un Système de Gestion de Documents (DMS).

{% snippet, "badgeInfo" %}
Internet Explorer et Mozilla Firefox exécutent l'URL en cliquant dessus ou en appuyant sur <kbd>Entrée</kbd>. Cependant, avec certains autres navigateurs web tels que Google Chrome, exécuter l'URL normalement résulte en une recherche web. Ces navigateurs peuvent nécessiter de faire <kbd>Ctrl</kbd>+cliquer ou <kbd>Ctrl</kbd>+<kbd>Entrée</kbd> pour exécuter l'URL.
{% endsnippet %}

## Scénarios
Il y a deux façons d'utiliser le gestionnaire :
* Générer une URL pour une session : essentiellement chaque type d'entrée qui se connecte à un appareil distant en utilisant un protocole.
* Générer une URL pour un modèle : permet de spécifier le nom d'hôte de l'appareil auquel vous souhaitez vous connecter, mais prend les paramètres du modèle.

## Paramètres
Voici les paramètres utilisés pour construire une URL de gestionnaire de protocole pour des scénarios avancés. ***DataSource*** et ***Session IDs*** sont suffisants pour ouvrir une connexion.

{% snippet, "badgeInfo" %}
Le paramètre ***DataSource*** remplace la source de données à laquelle l'application se connecte au démarrage. Cela s'applique même si l'utilisateur est invité à choisir une source de données à laquelle se connecter.
{% endsnippet %}

| PARAMÈTRE  | DESCRIPTION |
|------------|-------------|
| DataSource | Indiquer la source de données ou l'ID de la base de données. Les trouver dans la section ***IDs*** des ***propriétés avancées*** d'une entrée.<br><br>Un ID de source de données est unique par installation, ce qui rend l'URL utilisable uniquement par le poste de travail où la source de données a été créée. Par défaut, {{ fr.RDM }} génère l'URL avec l'ID de la base de données. |
| Session    | Indiquer l'ID d'une session. Le trouver dans le champ ***Session ID*** dans les ***propriétés avancées*** d'une session. |
| Template   | Indiquer l'ID du modèle d'une entrée. Le paramètre modèle récupère certaines propriétés d'un modèle et les utilise contre le paramètre de session. Le paramètre hôte est requis lors de l'utilisation du paramètre modèle. |
| Host       | Indiquer le nom d'hôte ou l'adresse IP de l'appareil distant. Utilisé avec le paramètre modèle, ou pour remplacer la propriété hôte du paramètre de session. |
| Port       | Indiquer le port à utiliser. Utilisé pour remplacer la propriété de port du paramètre de session ou de modèle. |
| Username   | Indiquer le nom d'utilisateur à utiliser. Utilisé pour remplacer la propriété de nom d'utilisateur du paramètre de session ou de modèle. |
| Password   | Indiquer le mot de passe à utiliser. Utilisé pour remplacer la propriété de mot de passe du paramètre de session ou de modèle. |
| Domain     | Indiquer le domaine à utiliser. Utilisé pour remplacer la propriété de domaine du paramètre de session ou de modèle. |
| Title      | Indiquer le titre de l'onglet lorsqu'une session est lancée en utilisant le mode d'affichage ***Intégré*** (en onglets). Cela peut être très utile lorsque plusieurs sessions sont lancées en même temps. |
| Filter     | Remplir le champ ***Recherche***. |
| Tabpage    | Donner le focus à un onglet dans le tableau de bord après que l'application a terminé la procédure de démarrage. Disponible uniquement avec l'action ***Select***. Les onglets possibles sont :<ul><li>***Vue d'ensemble***</li><li>***Documentation***</li><li>***Macros/Scripts/Outils***</li><li>***Outils de gestion***</li><li>***Informations***</li><li>***Pièces jointes***</li><li>***Journaux***</li><li>***Enregistrements***</li></ul> |

## Actions
* ***Open*** : Ouvrir la connexion spécifiée.
* ***Find*** : Trouver des sessions par hôte.
* ***Edit*** : Modifier la connexion spécifiée.
* ***View*** : Voir le mot de passe de l'entrée spécifiée.
* ***OpenWithMacro*** : Ouvrir la spécifiée avec une macro.
* ***Select*** : Sélectionner une connexion dans le ***{{ fr.NPANE }}*** (permet également de sélectionner un onglet dans le tableau de bord).

## Syntaxe
`rdm://<action><parameter1>=<value>[&<parameter2>=<value>]`

La syntaxe de base du gestionnaire de protocole nécessite le protocole d'application, une action et au moins un paramètre pour fonctionner.

Il y a trois règles à suivre lors de la construction d'une URL pour le gestionnaire de protocole :
* L'action est séparée des paramètres par un point d'interrogation (?).
* Chaque paramètre se voit attribuer une valeur à l'aide d'un signe égal (=).
* Les paires Paramètre/Valeur sont séparées par un esperluette (&).

## Exemples

#### Ouvrir {{ fr.RDM }} avec le champ de recherche/filtre rempli et le focus sur le Tableau de bord
`rdm://open?Filter=RDP&Tabpage=Dashboard`

#### Ouvrir une session RDP

1. Dans la section ***Informations sur l'entrée*** des propriétés d'une entrée, cliquer sur ***Créer une URL web***.
![Créer une URL web](https://cdnweb.devolutions.net/docs/RDMW2029_2024_1.png)
1. Sélectionner ***Gestionnaire de protocole RDM (rdm://)***.
![Gestionnaire de protocole RDM (rdm://)](https://cdnweb.devolutions.net/docs/RDMW2030_2024_1.png)
1. L'URL a maintenant été copiée dans le presse-papiers. Cliquer ***OK*** pour fermer la fenêtre de confirmation.
![Créer une URL web](https://cdnweb.devolutions.net/docs/RDMW2031_2024_1.png)
1. Coller (<kbd>Ctrl</kbd>+<kbd>V</kbd>) cette URL dans n'importe quelle application capable de gérer les protocoles d'application. Cela peut être dans une page web, une barre d'adresse de navigateur web, ou même une application de chat prise en charge. Le gestionnaire de protocole lance {{ fr.RDM }} s'il est fermé, puis effectue l'action demandée avec les paramètres fournis.