---
eleventyComputed:
  title: Impossible de désinstaller {{ fr.RDM }}
  description: Il semble impossible de désinstaller {{ fr.RDM }} depuis Programmes et Fonctionnalités dans Windows.
---
Il semble impossible de désinstaller {{ fr.RDM }} depuis Programmes et Fonctionnalités dans Windows.

Dans le journal des événements, vous voyez le message d'erreur suivant :
![!!KB4091](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4091.png)
## Solution
Essayer la correction suggérée par Microsoft :

[https://support.microsoft.com/en-us/help/17588/fix-problems-that-block-programs-from-being-installed-or-removed](https://support.microsoft.com/en-us/help/17588/fix-problems-that-block-programs-from-being-installed-or-removed)
{% snippet, "badgeInfo" %}
Vos paramètres et données locales pour {{ fr.RDM }} sont par défaut sous **%LOCALAPPDATA%\Devolutions\RemoteDesktopManager**, notre installateur ne touche pas du tout à cela. Vous devez garder ce dossier dans son état actuel.
{% endsnippet %}

Une fois terminé, contacter [service@devolutions.net](mailto:service@devolutions.net) pour une assistance supplémentaire.
