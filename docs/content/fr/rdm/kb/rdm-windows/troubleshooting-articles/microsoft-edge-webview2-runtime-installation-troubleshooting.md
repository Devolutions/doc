---
eleventyComputed:
  title: Dépannage de l'installation du Microsoft Edge WebView2 Runtime
  description: Si le Microsoft Edge WebView2 Runtime est déjà installé pour le système, forcer la réinstallation du programme en supprimant une clé de registre.
---
Lors de l'installation du Microsoft Edge WebView2 Runtime pour {{ fr.RDM }}, vous pouvez recevoir le message d'erreur suivant :

**Échec de l'installation. Le Microsoft Edge WebView2 Runtime est déjà installé pour le système.**

### Solution
Forcer la réinstallation du programme en supprimant une clé de registre :
1. Ouvrir l'Éditeur du Registre Windows. Pour ce faire, appuyer sur les touches <kbd>Windows</kbd>+<kbd>R</kbd> pour ouvrir la boîte de dialogue ***Exécuter*** de Windows.
1. Dans la boîte de dialogue, entrer "regedit" dans le champ puis cliquer sur ***OK*** (ou appuyer sur <kbd>Entrée</kbd>).
![Ouvrir l'Éditeur du Registre Windows](https://cdnweb.devolutions.net/docs/INTERFACE2027.png)
1. Copier le chemin suivant : **HKLM\SOFTWARE\WOW6432Node\Microsoft\EdgeUpdate\Clients{F3017226-FE2A-4295-8BDF-00C3A9A7E4C5}**
1. Dans l'Éditeur du Registre, appuyer sur les touches <kbd>Alt</kbd>+<kbd>D</kbd> et coller le chemin précédemment copié. Appuyer sur <kbd>Entrée</kbd>.
1. Faire un clic droit sur la clé ***{F3017226-FE2A-4295-8BDF-00C3A9A7E4C5}*** et sélectionner ***Exporter***.
![Exporter la clé de registre](https://cdnweb.devolutions.net/docs/INTERFACE2028.png)
1. Sauvegarder le fichier de clé de registre dans un emplacement que vous vous rappellerez, par exemple dans **C:\Program Files (x86)\Microsoft\EdgeWebView2**.
1. Faire un clic droit sur la clé dans l'Éditeur du Registre et sélectionner ***Supprimer***.
1. Installer la dernière version du bootstrapper. Consulter [Télécharger Microsoft Edge Chromium](/rdm/kb/rdm-windows/knowledge-base/download-microsoft-edge-chromium/) pour s'assurer que vous téléchargez la version compatible avec {{ fr.RDM }}.
1. Une fois téléchargé et installé, redémarrer {{ fr.RDM }} pour que l'installation prenne effet.

{% snippet, "badgeHelp" %}
Si vous rencontrez toujours des problèmes avec l'installation du Microsoft Edge WebView2 Runtime avec {{ fr.RDM }}, contactez notre équipe de support à [service@devolutions.net](mailto:service@devolutions.net).
{% endsnippet %}
