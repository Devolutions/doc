---
eleventyComputed:
  title: Exporter et importer des entrées
  status: Sujet disponible en langue allemande
---
{% youtube 'jipoCzhIEs8' %}

Il est possible d'exporter et d'importer des entrées d'un type de source de données à un autre. Il existe de nombreuses façons d'exporter des entrées avec {{ fr.RDM }}.

{% snippet, "badgeCaution" %}
Si vous avez des utilisateurs qui remplacent les propriétés des entrées avec ***Paramètres Spécifiques Utilisateur***, ils devront exporter et importer leur ***Liste de Paramètres Spécifiques Utilisateur***. Voir [Exporter et Importer les Paramètres Spécifiques Utilisateur](/rdm/kb/rdm-windows/how-to-articles/export-import-user-specific-settings/).
{% endsnippet %}

La première méthode se fait directement dans [{{ fr.RDM }}](#exportimport-through-remote-desktop-manager), tandis que la seconde utilise un [script PowerShell](#exportimport-using-powershell).

## Exporter/Importer via {{ fr.RDM }}
1. Dans {{ fr.RDM }}, sélectionner votre source de données dans le ***{{ fr.NPANE }}***.
   {% snippet, "badgeNotice" %}
   Pour exporter l'ensemble du {{ fr.VLT }}, aller à ***Fichier*** – ***Exporter*** – ***Exporter {{ fr.VLT }} (.rdm)*** et passer à l'étape 4.
   {% endsnippet %}

1. Sélectionner les entrées et/ou dossiers que vous souhaitez exporter. Utiliser le raccourci <kbd>Ctrl</kbd>+clic pour sélectionner plusieurs éléments à la fois.
1. Cliquer avec le bouton droit sur la sélection. Dans le menu contextuel, sélectionner ***Exporter*** – ***Exporter la sélection (.rdm)***.
![Exporter la sélection (.rdm)](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4998.png)
1. Dans la fenêtre ***Exporter les entrées***, cocher les options que vous souhaitez activer. Pour une migration typique, cocher les options ***Inclure les identifiants, Inclure les pièces jointes et documents***, et ***Chiffrer avec la clé principale***.
   {% snippet, "badgeInfo" %}
   Par défaut, les identifiants ne sont **pas** inclus. Il est crucial de cocher l'option ***Inclure les identifiants*** pour que les données exportées les incluent.
   {% endsnippet %}
   {% snippet, "shieldWarning" %}
   Spécifier une clé principale chiffrera l'ensemble du contenu du fichier **.rdm** pour le protéger. C'est fortement recommandé comme mesure de sauvegarde, mais la clé est absolument nécessaire pour le déchiffrement. La stocker sur un dispositif de stockage séparé pour plus de sécurité.
   {% endsnippet %}

   ![Options d'exportation d'entrée](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4839.png)
1. Cliquer sur ***OK***.
1. Sauvegarder le fichier **.rdm** sur votre ordinateur.
1. Dans le ***{{ fr.NPANE }}***, sélectionner la source de données et le {{ fr.VLT }} dans lequel importer les entrées.
1. Cliquer avec le bouton droit sur le dossier et sélectionner ***Importer*** – ***Importer (.rdm)***.
![Importer (.rdm)](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4999.png)
   {% snippet, "badgeNotice" %}
   Vous pouvez importer l'ensemble du {{ fr.VLT }} dans ***Fichier*** – ***Importer*** – ***Importer (.rdm)***.
   {% endsnippet %}

1. Localiser le fichier **.rdm** sauvegardé sur votre ordinateur et cliquer sur ***Ouvrir***.
1. Sélectionner si vous souhaitez ***Importer dans la racine***, ***Importer dans le dossier actuel***, ou ***Importer dans un dossier spécifique***.
![Emplacement des entrées importées](https://cdnweb.devolutions.net/docs/docs_en_kb_KB5000.png)
1. Cliquer sur ***OK***.
1. Dans la boîte de dialogue suivante, vous serez présenté avec une liste de toutes les entrées qui sont dans le fichier de données. Vous pouvez sélectionner des entrées spécifiques que vous souhaitez importer ou ***Sélectionner tout*** pour importer toutes vos entrées.
   {% snippet, "badgeCaution" %}
   Si vous avez des utilisateurs qui remplacent les propriétés des entrées avec ***Paramètres Spécifiques Utilisateur***, décocher ***Changer l'ID***.
   {% endsnippet %}

1. Cliquer sur ***OK***.

## Exporter/Importer en utilisant PowerShell
Le script PowerShell suivant est destiné à exporter toutes les entrées d'une source de données dans des fichiers **.rdm**. Un fichier par dépôt sera créé. Avant de pouvoir exporter les entrées de la source de données, certaines préparations sont nécessaires.

1. Installer {{ fr.RDM }} sur la machine où le script PowerShell sera exécuté.
1. Créer une nouvelle configuration de source de données dans {{ fr.RDM }} dans le profil Windows de l'utilisateur.
1. Configurer les permissions appropriées sur le dossier de destination pour le compte utilisateur qui exécutera le script.
1. Mettre à jour le mot de passe dans le script.
1. Adapter le chemin de destination dans le script où les fichiers **.rdm** seront sauvegardés.
1. Sauvegarder le script PowerShell dans un fichier **.ps1** sur l'ordinateur sur lequel il sera exécuté.
1. Créer une tâche planifiée pour exécuter le script régulièrement.

   ```powershell
   Import-Module 'C:\Program Files (x86)\Devolutions\Remote Desktop Manager\RemoteDesktopManager.PowerShellModule.psd1'

   $ds = Get-RDMDataSource -Name "NameOfYourDataSourceHere"
   Set-RDMCurrentDataSource $ds

   # Mettre à jour le mot de passe
   $passwd = ConvertTo-SecureString -AsPlainText -Force "YourPasswordHere"

   $repos = Get-RDMRepository

   foreach ($repo in $repos)
   {
       Set-RDMCurrentRepository $repo
       Update-RDMUI

       $sessions = Get-RDMSession
       $reponame = $repo.name

       # Adapter le chemin de destination pour les fichiers .rdm
       Export-RDMSession -Path "C:\temp\$reponame.rdm" -Sessions $sessions -IncludeCredentials -XML -Password $passwd
   }
   ```
