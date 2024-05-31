---
eleventyComputed:
  title: Gestionnaire Local RDP/RemoteApp
---
Les paramètres RDP locaux et les paramètres RemoteApp sont disponibles depuis ***Outils – Plus d'Outils – Gestionnaire Local RDP/RemoteApp***.

Si vous exécutez {{ fr.RDM }} sur une machine Windows Server 2008, la console MMC TS RemoteApp sera lancée.

Si vous utilisez Windows Vista, la console RemoteApp intégrée à {{ fr.RDM }} sera lancée car la fonctionnalité RemoteApp est disponible dans Windows 7 mais pas la console MMC. Par conséquent, au lieu de devoir modifier les entrées de registre requises, vous pouvez utiliser le Gestionnaire RemoteApp de {{ fr.RDM }}.

## Paramètres

![Plus d'Outils - Gestionnaire Local RDP/RemoteApp](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11350.png)

### Paramètres du Bureau à Distance

Autoriser ou interdire les connexions à distance à votre ordinateur.
![Paramètres du Bureau à Distance](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10418.png)

### Bureau à Distance

Permet de modifier le port RDP local.

{% snippet, "badgeInfo" %}
{{ fr.RDM }} doit être exécuté en tant qu'administrateur pour modifier les paramètres du Bureau à Distance.
{% endsnippet %}

![Paramètres de Connexion Bureau à Distance](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10419.png)

### Paramètres RemoteApp

Vous devez ***Activer RemoteApp*** pour pouvoir créer un Nouveau Paramètre RemoteApp.

{% snippet, "badgeInfo" %}
{{ fr.RDM }} doit être exécuté en tant qu'administrateur pour modifier les paramètres RemoteApp.
{% endsnippet %}

![Paramètres RemoteApp](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10420.png)

### Paramètres UDP

Activer ou désactiver UDP (User Datagram Protocol) localement sur votre ordinateur. UDP est un protocole de communication qui offre une quantité limitée de service lorsque des messages sont échangés entre ordinateurs dans un réseau utilisant le Protocole Internet (IP).
![Gestionnaire Local RDP/RemoteApp - UDP est Activé](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11351.png)

## Utilisation

1. Cliquer sur ***Nouveaux Paramètres RemoteApp***.
![Nouveaux Paramètres RemoteApp](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10422.png)
1. Configurer le RemoteApp.
![!!clip10423](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10423.png)
1. Créer une nouvelle session RDP et sélectionner l'onglet ***Programmes***. Activer l'option ***Utiliser RemoteApp*** puis entrer le nom du programme RemoteApp et sauvegarder la session. Lorsque la session est lancée, vous aurez le RemoteApp exécuté localement.
![Session RDP - Onglet Programmes](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10812.png)
