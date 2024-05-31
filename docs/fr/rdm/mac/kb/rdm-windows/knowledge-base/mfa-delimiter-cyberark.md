---
eleventyComputed:
  title: Délimiteur A2F CyberArk dans {{ fr.RDM }}
  description: L'option de délimiteur A2F existe dans {{ fr.RDM }} pour refléter celle qui existe déjà avec CyberArk.
  keywords:
  - CyberArk
  - délimiteur A2F
---
L'option ***délimiteur A2F*** existe dans {{ fr.RDM }} pour refléter celle qui existe déjà avec CyberArk. Le caractère entré dans le champ du délimiteur sera utilisé pour séparer les valeurs du code SecurID et du mot de passe qui sont ensuite envoyés à l'API.
{% snippet, "badgeInfo" %}

Le champ ***délimiteur A2F*** est uniquement disponible pour l'entrée [***Tableau de bord CyberArk***](#cyberark-dashboard) et l'entrée [***CyberArk PVWA (Identifiants)***](#cyberark-pvwa-credentials).

En savoir plus sur [la configuration des entrées CyberArk](/rdm/mac/kb/rdm-windows/how-to-articles/cyberark-dashboard-configuration/).
{% endsnippet %}

Voici un exemple de son fonctionnement :

| ENVOYÉ                                                       | REÇU PAR L'API      |
|--------------------------------------------------------------|---------------------|
| Code SecurID : 123<br>Mot de passe : abc                     | Reçu : 123abc       |
| Code SecurID : 123<br>Mot de passe : abc<br>***Délimiteur A2F*** : , | Reçu : 123,abc   |

## Tableau de bord CyberArk
L'entrée peut être trouvée sous ***Nouvelle Entrée – Session – Gestion des Accès Privilégiés***. L'option se trouve dans l'onglet ***Commun – Général – Général***.
{% snippet, "badgeInfo" %}
L'option ***Ajouter le code SecurID RSA au mot de passe*** doit être activée pour avoir accès au ***délimiteur A2F***.
{% endsnippet %}

![Tableau de bord CyberArk](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0076.png)

## CyberArk PVWA (Identifiants)
L'entrée peut être trouvée sous ***Nouvelle Entrée – Gestion des Identifiants – Gestion des Accès Privilégiés***. L'option se trouve dans l'onglet ***Commun – Général – Avancé***.
![CyberArk PVWA](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0077.png)
