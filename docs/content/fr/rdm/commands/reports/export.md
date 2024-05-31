---
eleventyComputed:
  title: Exportation de rapport
  description: L'Exportation de Rapports est une manière d'exécuter et d'exporter des rapports via une ligne de commande.
---
L'Exportation de Rapports est une manière d'exécuter et d'exporter des rapports via une ligne de commande. Vous pouvez utiliser cette fonctionnalité dans un raccourci ou dans un fichier batch et utiliser le planificateur de tâches Windows pour l'exécuter.

Vous pourrez exporter le Rapport de Données, le rapport d'Inventaire ainsi que la plupart des rapports trouvés dans notre liste Générer Rapport à l'exception de l'Utilisation des Mots de Passe.

{% snippet, "badgeInfo" %}
Vous devez avoir les droits pour exécuter des rapports dans {{ fr.RDM }} pour utiliser cette fonctionnalité.
{% endsnippet %}

## Paramètres
Pour les rapports contenant des paramètres, vous devrez commencer par exporter vos paramètres de rapport pour créer le fichier *.rdr que la ligne de commande utilise pour générer les rapports. Voici une liste de rapports contenant des paramètres :

1. Sélectionner votre Rapport dans Administrations – Rapport puis sélectionner l'option ***Exporter les Paramètres*** dans le bouton de texte ***Plus***. Cela créera un fichier *.rdr contenant tous vos paramètres de rapport. C'est également ici que se trouve votre ID de Rapport (cela sera utile plus tard).
![Exporter les Paramètres](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10006.png)
1. Dans votre Invite de Commandes Windows entrer la ligne de commande suivante :
```powershell
C:\*** /DataSource:*** /report:***/reportoutput:"***" /reportsettings:"***.rdr"
```

| PARAMÈTRES       | DESCRIPTION                                                                                              |
|------------------|----------------------------------------------------------------------------------------------------------|
| C:\              | Entrer le chemin utilisé pour démarrer votre application {{ fr.RDM }} (chemin du fichier RemoteDesktopManager.exe) |
| /DataSource      | Spécifier l'ID de la source de données.                                                                  |
| /report          | Spécifier le type de rapport à générer ou l'ID du rapport.                                               |
| /reportoutput    | Spécifier le chemin pour sauvegarder votre rapport et le nom pour le rapport nouvellement généré.        |
| /reportsettings  | Spécifier le chemin de votre fichier de paramètres de rapport (.rdr).                                    |


Pour trouver votre ID de Source de Données et la Ligne de Commande utilisée pour démarrer {{ fr.RDM }}, éditer une de vos sessions de votre source de données et sélectionner la section Avancée.
![Session RDP - Section Avancée](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10008.png)

Voici une liste de types de ***Rapports*** que vous pouvez trouver dans {{ fr.RDM }} et le nom à entrer dans la ligne de commande pour générer le rapport :

| TYPE DE RAPPORT       | NOM DU RAPPORT (TYPE) À INSÉRER DANS LA LIGNE DE COMMANDE |
|-----------------------|-----------------------------------------------------------|
| Rapport de Logs d'Activité | SharedConnectionLog                                       |
| Entrée Dupliquée      | DuplicateEntry                                            |
| Information d'Entrée  | ConnectionInformation                                     |
| Statut d'Entrée       | ConnectionStatus                                          |
| Liste d'Entrées Expirées | ConnectionExpiredEntry                                    |
| Passeports Expirés    | ConnectionExpiredPassport                                 |
| Logiciels Expirés     | ConnectionExpiredSoftware                                 |
| Garanties Expirées    | ConnectionExpiredWarranty                                 |
| Complexité des Mots de Passe | PasswordComplexity                                        |
| Groupes VPN           | VPNGroup                                                  |

Voici un exemple de ligne de commande pour un Rapport d'Information d'Entrée :

```powershell
C:\Program Files (x86)\Devolutions\Remote Desktop Manager\RemoteDesktopManager<zone>.exe /DataSource:8a4f2f70-5e8a-4d6c-9c7b-119080a4c879 /report:EntryInformation /reportoutput:C:\dev\devolutions\Rapport\rapportEntry.csv /reportsettings:C:\dev\devolutions\Rapport\SettingsEntryInformation.rdr
```
