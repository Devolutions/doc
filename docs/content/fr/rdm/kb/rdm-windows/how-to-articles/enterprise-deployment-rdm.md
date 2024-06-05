---
eleventyComputed:
  title: Déploiement d'entreprise de {{ fr.RDM }}
  keywords:
  - silencieux
  - sans assistance
---
Le ***{{ fr.CIS }}***, proposé via nos services {{ fr.DPORTAL }}, réplique la configuration d'une instance {{ fr.RDM }}. Cette configuration est utilisée pour créer un fichier d'installateur (*.rdi), qui sera utilisé pour créer le paquet d'installation destiné à la distribution.

{% snippet, "badgeInfo" %}
Vous pouvez stocker et créer jusqu'à 6 ***{{ fr.CI }}*** fichier de configuration de paquet dans votre {{ fr.DA }}.
{% endsnippet %}

Une fois que vous avez créé le paquet d'installation avec notre [{{ fr.CIS }}](/rdm/windows/installation/client/custom-installer-service/), déployez-les et copiez le **default.cfg** dans le dossier d'installation, qui par défaut se trouve sous %ProgramFiles(x86)%\Devolutions\RemoteDesktopManager.
