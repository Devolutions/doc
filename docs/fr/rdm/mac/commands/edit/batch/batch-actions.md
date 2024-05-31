---
eleventyComputed:
  title: Actions par lot
---
Utiliser Éditer – Édition par lot – Actions par lot pour changer les paramètres de plusieurs sessions en une seule opération. Cela peut être utilisé pour une commande d'action par lot sur un groupe de sessions.

{% snippet, "badgeInfo" %}
Les Actions par lot sont uniquement appliquées aux entrées actuellement sélectionnées dans votre ***{{ fr.NPANE }}***.
{% endsnippet %}

![Édition par lot - Actions par lot](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10350.png)

## Paramètres

### Général
![Action par lot - Général](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10351.png)

| OPTION               | DESCRIPTION                                                                                          |
|----------------------|------------------------------------------------------------------------------------------------------|
| Script AppleScript personnalisé   | Exécuter une commande Applescript personnalisée sur plusieurs sessions sélectionnées en même temps pour mettre à jour les propriétés. |
| Détecter les adresses Mac | Il analysera toutes vos sessions dans votre base de données actuelle pour détecter s'il y a des adresses mac.  |

### Web
{% snippet, "badgeInfo" %}
Ces options fonctionneront uniquement pour les entrées de session ***Site Web***, PAS pour les entrées de données ***Site Web (Ancien)***.
{% endsnippet %}

![Action par lot – Web](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10102.png)

| OPTION                    | DESCRIPTION |
|---------------------------|-------------|
| Découvrir le remplissage automatique HTML    | Une fois que vous avez sélectionné vos entrées de session ***Site Web*** et exécuté l'action par lot, cela remplira automatiquement les informations de connexion HTML. |
| Définir le remplissage automatique HTML par défaut | Une fois que vous avez sélectionné vos entrées de session ***Site Web*** et exécuté l'action par lot, cela remplira automatiquement les champs ID d'utilisateur et ID de mot de passe avec les valeurs par défaut. |

![Paramètres de contrôle ID HTML de site Web](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10352.png)

### SSH
![Action par lot - Web](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10103.png)

| OPTION                                                        | DESCRIPTION |
|---------------------------------------------------------------|-------------|
| Convertir la session Putty/Rebex en session SSH/Telnet/PortForward | Cela convertira automatiquement vos sessions Putty/Rebex sélectionnées en sessions SSH/Telnet/PortForward. |
| Convertir la session SSH/Telnet/PortForward en session Putty/Rebex | Cela convertira automatiquement vos sessions SSH/Telnet/PortForward sélectionnées en sessions Putty/Rebex. |
