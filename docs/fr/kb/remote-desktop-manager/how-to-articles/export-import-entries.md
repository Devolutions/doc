---
title: Exporter et importer des entrées
---
Vous pouvez exporter et importer des entrées d'un type de source de données à un autre. Il existe plusieurs façons d'exporter des entrées avec {{ fr.RDM }}. 
{% snippet icon.badgeCaution %} 
Si vous avez des utilisateurs qui remplacent les propriétés des entrées avec les ***Paramètres spécifiques de l'utilisateur***, ceux-ci devront exporter et importer leur ***Liste des paramètres spécifiques de l'utilisateur***. Consultez notre rubrique sur la façon d'[exporter et importer les paramètres spécifiques de l'utilisateur](/kb/remote-desktop-manager/how-to-articles/export-import-user-specific-settings/) (EN).
{% endsnippet %}  

La première méthode est effectuée directement <a href="#Exportation/Importation via {{ fr.RDM }}">dans {{ fr.RDM }}</a>, tandis que la seconde utilise un <a href="#Exportation/Importation à l'aide de PowerShell">script PowerShell</a>.

## Exportation/Importation via {{ fr.RDM }}

1. Dans {{ fr.RDM }}, sélectionner la source de données contenant les éléments à exporter dans le ***{{ fr.NPANE }}***.
{% snippet icon.badgeNotice %} 
Pour exporter l'ensemble du coffre, cliquer sur ***Fichier – Exporter – Exporter le coffre (.rdm)***, puis passer à l'<a href="#etape4">étape 4</a>. 
{% endsnippet %}
 
2. Sélectionner les entrées et/ou les dossiers à exporter. 
1. Faire un clic droit sur votre sélection. Dans le menu contextuel, sélectionner ***Exporter – Exporter la sélection (.rdm)***.  
![Exporter la sélection (.rdm)](https://webdevolutions.azureedge.net/docs/fr/kb/KB2006.png)
1. <a name="etape4"></a>Dans la fenêtre ***Exporter les entrées***, cocher les options qui doivent être activées. Pour une migration typique, cocher les options ***Inclure identifiants***, ***Inclure les pièces jointes et documents*** et ***Chiffrer avec la clé maîtresse***.
{% snippet icon.badgeInfo %} 
Par défaut, les identifiants **ne** sont **pas** inclus. Il est crucial de cocher l'option ***Inclure identifiants*** afin que les données exportées les contiennent.
{% endsnippet %}
 
{% snippet icon.shieldWarning %} 
La saisie d’une clé maîtresse permet de chiffrer tout le contenu du fichier **.rdm** afin de le protéger. Elle est fortement recommandée comme mesure de sauvegarde de vos données, mais la clé est requise pour le déchiffrement. Il faudra la conserver sur un périphérique de stockage indépendant pour des raisons de sécurité.
{% endsnippet %}
 
![Options d'exportation des entrées](https://webdevolutions.azureedge.net/docs/fr/kb/KB2007.png)  

5. Cliquer sur ***OK***. 
1. Enregistrer le fichier **.rdm** sur l'ordinateur. 
1. Dans le ***{{ fr.NPANE }}***, sélectionner la source de données et le coffre dans lesquels importer les entrées. 
1. Faire un clic droit sur la sélection et sélectionner ***Importer – Importer (.rdm)***.  
![Importer (.rdm)](https://webdevolutions.azureedge.net/docs/fr/kb/KB2008.png)
{% snippet icon.badgeNotice %} 
Il est possible d'importer tout le coffre à partir de ***Fichier – Importer – Importer (.rdm)***. 
{% endsnippet %}
 
9. Repérer le fichier **.rdm** enregistré sur votre ordinateur et cliquer sur ***Ouvrir***. 
1. Sélectionner ***Importer à la racine***, ***Importer dans le dossier en cours*** ou ***Importer dans le dossier spécifique***.  
![Emplacement des entrées importées](https://webdevolutions.azureedge.net/docs/fr/kb/KB2009.png)
1. Cliquer sur ***OK***. 
1. Dans la boîte de dialogue suivante sera affichée une liste de toutes les entrées du fichier de données. Sélectionner des entrées précises à importer ou cliquer sur ***Sélectionner tout*** pour importer toutes les entrées.
{% snippet icon.badgeCaution %} 
Si des utilisateurs remplacent les propriétés des entrées par des ***Paramètres spécifiques de l'utilisateur***, décocher la case ***Changer ID***. 
{% endsnippet %}
 
13. Cliquer sur ***OK***. 

## Exportation/Importation à l'aide de PowerShell

Le script PowerShell suivant est destiné à l'exportation de toutes les entrées d'une source de données dans des fichiers **.rdm**. Un fichier par dépôt sera créé.
Avant de pouvoir exporter les entrées de la source de données, certaines préparations sont nécessaires.
1. Installer {{ fr.RDM }} sur la machine où le script PowerShell sera exécuté.
1. Créer une nouvelle configuration de source de données dans {{ fr.RDM }} dans le profil Windows de l'utilisateur.
1. Configurer les permissions appropriées sur le dossier de destination pour le compte utilisateur qui exécutera le script.
1. Mettre à jour le mot de passe dans le script.
1. Adapter le chemin de destination dans le script où les fichiers **.rdm** seront enregistrés.
1. Enregistrer le script PowerShell dans un fichier .ps1 sur l'ordinateur sur lequel il sera exécuté.
1. Créer une tâche planifiée pour exécuter le script sur une base régulière.
```
Import-Module 'C:\Program Files (x86)\Devolutions\Remote Desktop Manager\RemoteDesktopManager.PowerShellModule.psd1'

$ds = Get-RDMDataSource -Name "NameOfYourDataSourceHere"
Set-RDMCurrentDataSource $ds

# Update the password
$passwd = ConvertTo-SecureString -AsPlainText -Force "YourPasswordHere"

$repos = Get-RDMRepository

foreach ($repo in $repos)
{
    Set-RDMCurrentRepository $repo
    Update-RDMUI

    $sessions = Get-RDMSession
    $reponame = $repo.name

    # Adapt the destination path for the .rdm files
    Export-RDMSession -Path "C:\temp\$reponame.rdm" -Sessions $sessions -IncludeCredentials -XML -Password $passwd
}
```
