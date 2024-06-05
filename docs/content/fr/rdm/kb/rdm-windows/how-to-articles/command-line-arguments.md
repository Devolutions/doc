---
eleventyComputed:
  title: Arguments de ligne de commande
---
{% youtube 'Ojr0DnmbviI' %}

{{ fr.RDM }} peut être lancé en utilisant une ligne de commande.

{% snippet, "badgeInfo" %}
Certaines fonctionnalités sont uniquement disponibles dans l'édition Team. {{ fr.RDM }} propose également un gestionnaire de protocole Web.
{% endsnippet %}

## Récupérer un ID et créer un exécutable
Il est possible d'obtenir les ID d'une ***base de données***, ***source de données***, ***entrée***, et ***{{ fr.VLT }}*** ainsi qu'une ***ligne de commande***. Suivre les étapes ci-dessous pour voir ces informations dans un seul emplacement :

1. Faire un clic droit sur l'entrée dont vous souhaitez obtenir les informations, puis aller dans ***Propriétés***.
![!!KB2055](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2055.png)
1. Cliquer sur ***Informations sur l'entrée*** dans la section ***Commun*** du menu. Vous trouverez les informations ID et la ***ligne de commande*** dans la section ***IDs***.
![!!KB2056](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2056.png)
1. Une ligne de commande peut être créée en utilisant les informations affichées dans cette fenêtre. Sinon, vous pouvez simplement copier la ***ligne de commande*** fournie par {{ fr.RDM }} en utilisant le bouton ***Copier***.
![!!KB2057](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2057.png)
1. Il ne reste plus qu'à coller votre ligne de commande dans l'invite de commande Windows et appuyer sur Entrée pour créer un exécutable selon vos paramètres.
![!!KB2058](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2058.png)

## Récupérer un ID de source de données
L'ID d'une source de données peut être récupéré avec d'autres identifiants en suivant les étapes de la section précédente. Voici une autre manière d'obtenir uniquement les ID de source de données :

1. Aller dans ***Fichier – Sources de données*** Alternativement, vous pouvez cliquer sur les points de suspension à côté du nom de votre source de données dans votre ***{{ fr.NPANE }}***.
1. Sélectionner la source de données de votre choix dans la section inférieure, puis cliquer sur l'icône ***Modifier la source de données***.
![!!KB2059](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2059.png)
L'ID de la source de données choisie sera en bas de la fenêtre. Vous pouvez le copier en cliquant dessus.
![!!KB2060](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2060.png)

## Utilisation : RemoteDesktopManager.exe paramètres
| Paramètres                          | Description                                                                        |
|-------------------------------------|------------------------------------------------------------------------------------|
| {filename [*.rdm,*.rdp]}            | Ouvrir en mode intégré ou externe la connexion à partir du nom de fichier.                   |
| /Silent                             | Exécuter l'application minimisée dans une icône de la barre système. Cette option ne peut pas être combinée avec d'autres paramètres. |
| /Database:{database id}             | Spécifier l'ID de la base de données.                                                          |
| /Datasource:{datasource id}         | Spécifier l'ID de la source de données.                                                        |
| /Session:{session ID};{session ID}...<br>/UserName:{username}<br>/Domain:{domain}<br>/Password:{password} | Spécifier un ou plusieurs ID de session. |
| /ChangePassword:{new password}      | Changer le mot de passe de la session. Disponible uniquement pour les sessions de Bureau à distance et les mots de passe intégrés. L'ID de la source de données et l'ID de la session sont requis. |
| /RegisterUser:"{registration user}" | Changer le nom d'enregistrement de {{ fr.RDM }}. La valeur doit être entre guillemets.     |
| /RegisterSerial:"{serial number}"   | Changer le numéro de série de {{ fr.RDM }}. La valeur doit être entre guillemets.         |
| /Template:{template ID}<br>/Host:{host name}<br>/UserName:{username}<br>/Domain:{domain}<br>/Password:{password} | Ouvrir l'ID du modèle avec le nom d'hôte spécifié et un nom d'utilisateur/mot de passe optionnel. L'ID du modèle est l'ID de session du modèle. |
| /Profiler                           | Démarrer le profileur au début de l'application. Utile pour profiler le processus de démarrage. |
| /Title:"{title}"                    | Spécifier un titre d'onglet lors de l'utilisation d'une session intégrée.                                |
| /Filter:{filter}                    | Exécuter l'application avec le filtre rempli avec un paramètre.                   |
| /TabPage: Dashboard                 | Le tableau de bord est sélectionné au démarrage de l'application.                           |

## Utilisation :
Exemple #1 - Ouvrir un modèle et se connecter à un hôte
`RemoteDesktopManager.exe /DataSource:178c2fda-dab4-4f41-98df-6e3205c0a011 /Template:a666b21b-1479-4eee-b482-0a3d561d2411 /Host:Windjammer-PC1`

Exemple #2 - Ouvrir une session
`RemoteDesktopManager.exe /DataSource:178c2fda-dab4-4f41-98df-6e3205c0a011 /Session:474bcbcf-d507-435b-8c0a-a9e868781910`

Exemple #3 - Enregistrer l'application
`RemoteDesktopManager.exe /RegisterUser:"Prénom, Nom" /RegisterSerial:"xxxxx-xxxxx-xxxxx-xxxxx-xxxxx"`

Exemple #4 - Démarrer {{ fr.RDM }} avec le profileur
`RemoteDesktopManager.exe /Profiler`

Exemple #5 - Définir une phrase secrète sur la base de données
`RemoteDesktopManager64.exe /Database:B26638B2-7957-466C-192B-6621DA12179A /SecurityProviderPassphrase:Password`