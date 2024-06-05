---
eleventyComputed:
  title: "{{ fr.RDMMAC }} {{ fr.CI }}"
---
Malheureusement, il n'y a pas de {{ fr.CI }} dans la version {{ fr.RDMMAC }} comme nous en avons pour l'[application Windows {{ fr.RDM }}](/rdm/windows/installation/client/custom-installer-service/).

La solution serait de copier le fichier **.cfg** et de le distribuer manuellement dans le bon dossier.

{% snippet, "badgeCaution" %}
Cette configuration de source de données inclut le nom d'utilisateur et le mot de passe du bureau que vous copiez.
{% endsnippet %}

## L'emplacement du fichier **.cfg** dans macOS

1. Ouvrir ***Finder***.
1. Cliquer ***Go*** dans le menu.
1. Sélectionner ***Go to folder***.
1. Coller ce chemin : **~/Library/Application Support**.
1. Ouvrir le dossier : **com.devolutions.remotedesktopmanager**.
1. Localiser le fichier **RemoteDesktopManager.cfg** ou **RemoteDesktopManagerFree.cfg**.
