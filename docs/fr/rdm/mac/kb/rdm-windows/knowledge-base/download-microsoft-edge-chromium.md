---
eleventyComputed:
  title: Télécharger Microsoft Edge Chromium
  description: Nous recommandons vivement de télécharger et d'installer le Microsoft Edge WebView2 Runtime, car de nombreuses fonctionnalités de {{ fr.RDM }} nécessitent son fonctionnement.
  keywords:
  - Microsoft Edge Chromium
  - WebView2 Runtime
---
Nous recommandons vivement de télécharger et d'installer le Microsoft Edge WebView2 Runtime, car de nombreuses fonctionnalités de {{ fr.RDM }} nécessitent son fonctionnement, telles que :
* Intégration
* Tableaux de bord
* Navigateur Web (ex : Edge intégré)
* Authentification SAML dans CyberArk
* Rapports
* Manuel/Documentation
* Invite de comparaison (ex : documentation)
* Invite d'aide
* Historique des modifications dans l'invite de mise à jour disponible

Télécharger le [Microsoft Edge WebView2 Runtime](https://developer.microsoft.com/en-us/microsoft-edge/webview2/#download-section). Le lien de téléchargement compatible pour {{ fr.RDM }} est celui sous la section ***Evergreen Bootstrapper***.
![Téléchargement Evergreen Bootstrapper](https://cdnweb.devolutions.net/docs/INTERFACE2014.png)

Une fois téléchargé et installé, redémarrer {{ fr.RDM }} pour que l'installation prenne effet.

{% snippet, "badgeHelp" %}
Si un message d'erreur indique que l'installation a échoué en raison d'une installation existante sur le système actuel, vous devez forcer la réinstallation du programme en supprimant une clé de registre. Suivre les étapes dans [Dépannage de l'installation de Microsoft Edge WebView2 Runtime](/rdm/mac/kb/rdm-windows/troubleshooting-articles/microsoft-edge-webview2-runtime-installation-troubleshooting).
{% endsnippet %}
