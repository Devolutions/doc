---
eleventyComputed:
  title: Journaux
---
La fonctionnalité ***Journaux*** est similaire à [***Journaux d'Activité***](/rdm/windows/commands/view/view/activity-logs/), mais elle fournit uniquement des informations sur l'entrée sélectionnée. Les journaux sont disponibles depuis le menu contextuel ***Fenêtre – Panneaux – Journaux***.
![Bouton Journaux](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6206.png)

## Fonctions

Les entrées de journal peuvent être filtrées par ***Date*** ou en utilisant une période personnalisée, en spécifiant s'il s'agit de l'***Heure Locale*** ou de l'***Heure UTC***.

Il est également possible d'activer les options ***Afficher uniquement la session en direct (actualisation automatique)*** et ***Afficher les journaux des paramètres spécifiques à l'utilisateur*** en cochant la case appropriée.
![Options des Journaux](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2029.png)

### Commentaire de Journal

![Insérer un Commentaire de Journal](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2031.png)

Cliquer sur le bouton ***Insérer un Commentaire de Journal*** ouvre une fenêtre qui vous permet d'ajouter un commentaire au journal en spécifiant un numéro de ticket, une date de début (et une date de fin, si désiré), et des notes.
![Fenêtre Ajouter un Commentaire de Journal](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2033.png)

### Générer un Rapport

![Générer un Rapport](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2032.png)

Cliquer sur le bouton ***Générer un rapport*** ouvre une fenêtre qui vous permet de générer un rapport des journaux en spécifiant la période, le type d'heure (***Heure Locale*** ou ***Heure UTC***), et, optionnellement, un ***Commentaire à l'ouverture***, un ***Commentaire à la fermeture***, et un ***Message***. Une fois terminé, cliquer sur le bouton ***OK*** génère un rapport qui peut être sauvegardé, exporté (au format CSV, HTML, Xlsx, ou XML), ou imprimé.
![Rapport de Journal](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2034.png)

## Journaux

Le journal contient toutes les opérations CRUD (ajouter, éditer, et supprimer), les mots de passe affichés, les identifiants utilisés, etc. Il est possible de cliquer avec le bouton droit sur une entrée pour accéder à plus d'options.
![Journaux](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2030.png)

Les informations sur les entrées sont les mêmes que dans [***Journaux d'Activité***](/rdm/commands/reports/activity-logs/), à l'exception que ***Dossier***, ***Connexion***, ***{{ fr.VLT_MAJ }}***, et ***ID de Journal de Connexion*** ne sont pas disponibles dans ***Journaux*** puisque les informations sont spécifiques à une entrée seulement. Pour une description des informations disponibles, voir ***Journaux d'Activité***.
