---
eleventyComputed:
  title: Identités des applications
  description: La section Identités des applications permet la création d'une identité d'application pour communiquer avec {{ fr.DVLS }} via le module {{ fr.PS }}.
---
La section ***Identités des applications*** permet la création d'une identité d'application pour communiquer avec {{ fr.DVLS }} via le [module {{ fr.PS }}](https://www.powershellgallery.com/packages/Devolutions.PowerShell/).

{% snippet, "badgeHelp" %}
Pour plus d'informations sur la connexion de {{ fr.DVLS }} avec une identité d'application, voir [Méthodes de connectivité PowerShell vers {{ fr.DVLS }}](/powershell/dvls-powershell/powershell-connectivity/).
{% endsnippet %}

## Créer ou éditer une Identité d'application
Pour créer ou éditer des identités d'application, se rendre dans ***Administration*** – ***Identités des applications***. Cliquer sur le signe + pour créer une nouvelle identité d'application ou sur le bouton en forme de stylo pour éditer une identité existante.

![Administration – Identités des applications](https://cdnweb.devolutions.net/docs/DVLS6023_2024_1.png)

{% snippet, "badgeCaution" %}
Lors de la création d'une identité d'application, veiller à noter le ***Secret de l'Application***, car il ne sera pas affiché par la suite.
{% endsnippet %}


## Général
![Ajout d'une nouvelle identité d'application](https://cdnweb.devolutions.net/docs/DVLS6022_2024_1.png)
| Général               | Description                                                                                               |
|-----------------------|-----------------------------------------------------------------------------------------------------------|
| Nom                   | Nom d'affichage de l'identité d'application.                                                                      |
| Identité d'application  | Identité d'application à utiliser dans l'application pour communiquer avec l'instance {{ fr.DVLS }}.                  |
| Secret de l'Application    | Clé secrète à utiliser en combinaison avec l'Identité d'application. Disponible uniquement lors de la création de l'Identité d'application. |
| Activé                | Activer l'Identité d'application.                                                                             |
| Peut enregistrer les sessions   | Permettre à l'Identité d'application d'enregistrer les sessions.                                                   |
| Activer la restriction IP | Soumettre l'application aux politiques d'accès conditionnel, le cas échéant, concernant les restrictions d'adresse IP.       |

## Rôles

La section ***Rôles*** contient une liste des [groupes d'utilisateurs](https://docs.devolutions.net/server/web-interface/administration/security-management/vaults/user-groups/) auxquels l'identité d'application peut être donnée accès.

![Section Rôles](https://cdnweb.devolutions.net/docs/DVLS4028_2024_2.png)

## {{ fr.VLT_MAJ }}s

Dans la section ***{{ fr.VLT_MAJ }}s***, les identités d'application peuvent se voir accorder l'accès à des {{ fr.VLT }}s spécifiques. Cela peut également être fait via [***Modifier les paramètres {{ fr.VLT }}***](https://docs.devolutions.net/server/web-interface/administration/security-management/vaults/applications/) dans les {{ fr.VLT }}s eux-mêmes.

![Section {{ fr.VLT_MAJ }}](https://cdnweb.devolutions.net/docs/DVLS4027_2024_2.png)


{% snippet, "badgeInfo" %}
Notez que [activer le module {{ fr.PS }}]((https://www.powershellgallery.com/packages/Devolutions.PowerShell/)) et accorder à l'identité d'application l'accès aux {{ fr.VLT }}s souhaités dans la section ***{{ fr.VLT_MAJ }}s*** est obligatoire pour lancer des scripts automatisés affectant les ***{{ fr.VLT }}s***, par exemple, le script pour [exporter toutes les entrées de {{ fr.RDM }}](https://github.com/Devolutions/RDMSamples-ps/blob/main/module/export/ExportAllEntriesAllVaults.ps1).
{% endsnippet %}