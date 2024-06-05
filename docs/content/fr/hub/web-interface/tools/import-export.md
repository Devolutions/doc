---
eleventyComputed:
  title: Import/Export
  description: Importer des entrées directement dans votre Hub ou exporter des données au format JSON ou en utilisant un script PowerShell.
---
Importer des entrées directement dans votre Hub ou exporter des données au format JSON ou en utilisant un script PowerShell ({{ fr.DHUBB }} uniquement). Pour plus de flexibilité, essayer notre [{{ fr.DHUBI }}](/hub/web-interface/tools/hub-importer/).

## Importer
Importer des fichiers d'entrées JSON et CSV dans {{ fr.DHUB }}.

1. Dans ***Aide & Outils***, cliquer sur ***Importer***.
![Aide & Outils – Importer](https://cdnweb.devolutions.net/docs/HUBB2018_2024_1.png)
1. Sélectionner le format du fichier importé (JSON ou CSV) parmi les options suivantes : 
    * RDM (.json)
    * Bitwarden (.json)
    * Bitwarden (.csv)
    * Google Chrome (.csv)
    * KeePass (.csv)
    * LastPass (.csv)
    * 1Password (.csv)

   ![Format d'importation](https://cdnweb.devolutions.net/docs/HUBB2019_2024_1.png)
1. Téléverser le fichier (un à la fois) dans votre Hub en le glissant directement ou en sélectionnant un fichier via le navigateur de fichiers de votre appareil.
1. Sélectionner un ***Coffre de destination {{ fr.VLT }}*** ({{ fr.DHUBB }} uniquement) et un ***Dossier de destination***, ou créer un nouveau dossier. C'est là que les entrées sont importées.
![Coffre de destination {{ fr.VLT }} et dossier](https://cdnweb.devolutions.net/docs/HUBB2020_2024_1.png)
1. Cliquer sur ***Importer***.
1. Un résumé de toutes les entrées à importer apparaîtra. Cliquer sur ***Terminer l'importation***.
![Terminer l'importation](https://cdnweb.devolutions.net/docs/HUBB2021_2024_1.png)  
Le processus d'importation prend du temps en fonction de la taille de votre fichier. Une fois le fichier importé, vous serez dirigé vers l'emplacement des entrées.

## Exporter
Exporter des données de deux manières :
* [en JSON ou CSV en utilisant un script PowerShell](#type-dexportation-par-script-powershell) (uniquement pour {{ fr.DHUBB }}).
* [au format JSON](#type-dexportation-json).

### Type d'exportation par script PowerShell
Cette méthode est uniquement disponible avec {{ fr.DHUBB }} et nécessite PowerShell 7 ou ultérieur.

1. Dans ***Aide & Outils***, cliquer sur ***Exporter***.
![Aide & Outils – Exporter](https://cdnweb.devolutions.net/docs/HUBB2022_2024_1.png)
1. Sélectionner le type d'exportation ***Script PowerShell***.
![Type d'exportation Script PowerShell](https://cdnweb.devolutions.net/docs/HUBB2025_2024_1.png)
1. [Créer une identité d'application](/hub/web-interface/administration/management/application-users/) et lui assigner le rôle ***Manager*** pour le {{ fr.VLT }} souhaité. Une fois fait, vous avez le choix de [remplir automatiquement](#remplir-automatiquement-les-informations) ou [manuellement](#remplir-manuellement-les-informations) vos informations dans le script PowerShell.

#### Remplir automatiquement les informations
1. Sélectionner l'option ***Automatique***.
![Option Automatique](https://cdnweb.devolutions.net/docs/HUBB2023_2024_1.png)
1. Entrer le ***Secret d'application*** et la ***Clé d'application*** de votre identité d'application dans les champs correspondants.
1. Entrer le ***Chemin du dossier de destination***. C'est là que vos données seront exportées.
1. Choisir d'exporter en JSON ou CSV.
1. Cliquer sur ***Télécharger***.
1. Exécuter le script téléchargé en utilisant PowerShell 7.

Vos données ont été exportées dans le dossier de destination.

#### Remplir manuellement les informations
1. Sélectionner l'option ***Manuel***.
![Option Manuel](https://cdnweb.devolutions.net/docs/HUBB2024_2024_1.png)
1. Choisir d'exporter en JSON ou CSV.
1. Copier et coller le script dans un fichier PowerShell (.ps1).
1. Dans votre script copié, changer les variables avec les informations appropriées. Voir le tableau ci-dessous.
   | Variable                | Description                                                                                                     |
   |-------------------------|-----------------------------------------------------------------------------------------------------------------|
   | `$url`                  | Entrer l'URL de votre {{ fr.DHUBB }}. Cette variable est automatiquement remplie, mais il est encore possible de la changer. |
   | `$appSecret`            | Entrer le ***Secret d'application*** de l'utilisateur d'application.                                           |
   | `$appKey`               | Entrer la ***Clé d'application*** de l'utilisateur d'application.                                               |
   | `$pathToExportedFolder` | Entrer le ***Chemin du dossier de destination***. C'est là que vos données seront exportées.                    |

   ![Variables dans PowerShell](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2082.png)
1. Exécuter le script en utilisant PowerShell 7.

Vos données ont été exportées dans le dossier de destination.

### Type d'exportation JSON
1. Dans ***Aide & Outils***, cliquer sur ***Exporter***.
![Aide & Outils – Exporter](https://cdnweb.devolutions.net/docs/HUBB2022_2024_1.png)
1. Sélectionner le type d'exportation ***JSON***.
![Type d'exportation JSON](https://cdnweb.devolutions.net/docs/HUBB2026_2024_1.png)
1. Sélectionner un {{ fr.VLT }} à exporter ({{ fr.DHUBB }} uniquement) et personnaliser les deux options liées.
    * ***Obscurcir les valeurs sensibles*** : Cette option est activée par défaut. Vos informations sensibles seront plus difficiles à déchiffrer. Pour des raisons de sécurité, il est recommandé de la laisser cochée.
    * ***Inclure les pièces jointes et les documents*** : Si activée, cette option permet également d'exporter les pièces jointes et les documents dans vos dossiers et entrées.
1. Sélectionner les dossiers et les entrées à exporter.  
![Sélectionner le(s) dossier(s) à exporter](https://cdnweb.devolutions.net/docs/HUBB2027_2024_1.png)
1. Cliquer sur ***Télécharger*** pour exporter votre sélection au format JSON. Le fichier JSON peut être importé dans {{ fr.RDM }}, {{ fr.DHUBB }}, ou {{ fr.DHUBP }}.
