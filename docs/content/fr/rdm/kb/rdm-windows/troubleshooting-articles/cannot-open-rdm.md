---
eleventyComputed:
  title: Impossible d'ouvrir {{ fr.RDM }}
---
{{ fr.RDM }} ne s'ouvre pas après l'écran de démarrage.
## Solution
Cela est dû à un problème avec le fichier de configuration de {{ fr.RDM }}. Le fichier se trouve dans **%localappdata%\Devolutions\RemoteDesktopManager** et s'appelle **RemoteDesktopManager.cfg**.

Vous devrez déplacer ce fichier et rouvrir {{ fr.RDM }}, cela créera un tout nouveau fichier de configuration.
{% snippet, "badgeInfo" %}
Vous devrez réenregistrer toutes vos sources de données et pointer vers le fichier ou la base de données que vous utilisiez.
{% endsnippet %}