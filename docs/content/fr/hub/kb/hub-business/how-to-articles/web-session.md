---
eleventyComputed:
  title: Lancer une session via l'interface web de {{ fr.DHUBB }}
  description: Les entrées de type session RDP, SSH Shell, Telnet, VNC et PowerShell (remote) peuvent être lancées via l'interface web de {{ fr.DHUBB }} en utilisant {{ fr.DGW }}.
---
Les entrées de type session ***RDP***, ***SSH Shell***, ***Telnet***, ***VNC*** et ***PowerShell (remote)*** peuvent être lancées via l'interface web de [{{ fr.DHUBB }}](/hub/overview/what-is-hub/) en utilisant [{{ fr.DGW }}](/dgw/overview/what-is-dgw/).

## Exigences
Pour utiliser cette fonctionnalité, certaines exigences doivent être satisfaites, à savoir :
* Avoir une version de [{{ fr.DGW }}](/dgw/hub/hub-business-configuration/) 2023.1 ou ultérieure.
* Avoir une licence [{{ fr.RDM }}](/rdm/commands/administration/management/licenses/) ou [{{ fr.DLAUNCHER }}](/hub/launcher/installation/launcher-license-registration/) attribuée à l'utilisateur qui souhaite utiliser la connexion.
* La permission d'exécuter (connecter) une session.

### Configuration de l'entrée de session
Suivre les étapes ci-dessous pour configurer correctement votre entrée dans {{ fr.DHUBB }} :

{% snippet, "badgeInfo" %}
Les étapes ci-dessous supposent que vous avez déjà une entrée de session. Si vous ne l'avez pas encore créée et souhaitez apprendre comment faire, voir [Créer des entrées manuellement](/hub/web-interface/entries/create-entries-manually/).
{% endsnippet %}

1. Aller aux ***Propriétés*** de l'entrée.
1. Cliquer sur ***VPN/tunnel/gateway***.
1. Sélectionner ***{{ fr.DGW }}*** sous ***Type***.
1. Cliquer sur ***Toujours connecter***. 
![VPN/tunnel/gateway](https://cdnweb.devolutions.net/docs/HUBB6006_2023_3.png)
1. Aller à ***Paramètres ({{ fr.DGW }})***.
1. Sélectionner le {{ fr.DGW }} à utiliser pour cette connexion, puis cliquer sur ***Vérifier l'état*** pour s'assurer que le Gateway fonctionne. Sa version doit être 2023.1 ou ultérieure.
![Paramètres ({{ fr.DGW }})](https://cdnweb.devolutions.net/docs/HUBB6008_2023_3.png)
1. Cliquer sur ***Mettre à jour*** pour sauvegarder.

## Lancement de la connexion
Une fois toutes les conditions remplies, vous pouvez appuyer sur le bouton ***Ouvrir dans le client Web (Aperçu)*** pour lancer la connexion depuis le client web.
![Ouvrir dans le client Web (Aperçu)](https://cdnweb.devolutions.net/docs/HUBB6007_2023_3.png)
