---
eleventyComputed:
  title: Impossible de récupérer les informations de chiffrement
  description: Les messages d'erreur ci-dessous apparaissent lorsque les fichiers de configuration de {{ fr.RDM }} ne peuvent pas être chargés avec succès. Cela est causé par la suppression ou le remplacement de `RemoteDesktopManager.cfg` sans également modifier les fichiers de chiffrement qui y sont liés.
---
Le message d'erreur ci-dessous apparaît lorsque les fichiers de configuration de {{ fr.RDM }} ne peuvent pas être chargés avec succès. Cela est causé par la suppression ou le remplacement du fichier de configuration principal de {{ fr.RDM }} (`RemoteDesktopManager.cfg`) sans également supprimer ou remplacer les fichiers de chiffrement qui y sont liés.

![Tentative de récupération à partir de la sauvegarde](https://cdnweb.devolutions.net/docs/RDMW4072_2024_2.png)

Cliquer sur ***Ok*** invite {{ fr.RDM }} à dupliquer le fichier de codage de sauvegarde (`RemoteDesktopManager.enb`). Si la sauvegarde ne peut pas être chargée ou n'existe pas, l'une des deux fenêtres suivantes apparaît pour détailler davantage l'erreur :

![Échec du chargement des informations de chiffrement](https://cdnweb.devolutions.net/docs/RDMW4071_2024_2.png)

![Échec du chargement des options sensibles](https://cdnweb.devolutions.net/docs/RDMW4070_2024_2.png)

{% snippet, "badgeWarning" %}
Notez que choisir ***Oui*** ici recrée le fichier de codage et ses clés de chiffrement. Cela empêche effectivement le déchiffrement des options sensibles précédemment configurées comme la configuration des sources de données, les rendant inutilisables.
{% endsnippet %}

## Solution
Lors de la suppression de `RemoteDesktopManager.cfg`, assurez-vous de supprimer également les fichiers suivants (situés dans C:\Users\username\AppData\Local\Devolutions\RemoteDesktopManager) :

```
RemoteDesktopManager.stv
RemoteDesktopManager.stb
RemoteDesktopManager.enc
RemoteDesktopManager.enb
RemoteDesktopManager.bak
```
Lors du remplacement de `RemoteDesktopManager.cfg`, remplacez également les fichiers de chiffrement. L'option[ Exporter les paramètres](https://docs.devolutions.net/rdm/commands/file/options/export/) de {{ fr.RDM }} garantit que tous les fichiers liés au chiffrement sont inclus dans le fichier CFG exporté, éliminant le besoin de les déplacer manuellement. Cette option se trouve dans ***Fichier*** – ***Paramètres*** – ***Exporter les paramètres***.

![Option d'exportation des paramètres de {{ fr.RDM }}](https://cdnweb.devolutions.net/docs/RDMW4073_2024_2.png)
