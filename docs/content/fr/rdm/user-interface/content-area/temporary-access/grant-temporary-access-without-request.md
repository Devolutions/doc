---
eleventyComputed:
  title: Octroyer un accès temporaire à une entrée dans {{ fr.RDM }}
  order: 30
  description: Les approbateurs peuvent octroyer un accès temporaire sans demande à un utilisateur, même si l'utilisateur a déjà accès.
---
{% snippet, "badgeNotice" %}
Pour apprendre à approuver ou refuser une demande, visiter [Approuver un accès temporaire à une entrée dans {{ fr.RDM }}](/rdm/windows/user-interface/content-area/temporary-access/approve-temporary-access/).
{% endsnippet %}

La fonctionnalité ***Accès Temporaire*** permet aux utilisateurs de demander une élévation temporaire de leurs permissions pour une entrée spécifique. Les approbateurs peuvent octroyer un ***Accès Temporaire*** sans demande de la part d'un utilisateur et même si l'utilisateur a déjà accès.

## Octroyer un accès temporaire

1. Dans le ***{{ fr.NPANE }}*** de {{ fr.RDM }}, sélectionner l'entrée à laquelle octroyer l'accès.
1. Cliquer sur ***Octroyer un Accès Temporaire*** dans le ruban.
![Octroyer un Accès Temporaire](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6018.png)
1. Choisir ***Utilisateur*** et ***Durée*** dans la fenêtre ***Octroyer un Accès Temporaire***.
![Fenêtre Octroyer un Accès Temporaire](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6021.png)

   Les ***Dépendances de l'entrée***, telles que les informations d'identification et les VPN liés, sont listées dans le menu de gauche.

1. Cliquer sur ***Définir une plage horaire personnalisée*** si besoin d'octroyer l'accès pour une période spécifique et écrire un court ***Message*** à l'utilisateur expliquant pourquoi vous octroyez l'accès.
1. Cliquer sur ***Octroyer l'Accès*** pour fermer la fenêtre.
![L'accès temporaire a été octroyé](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6022.png)
L'***Accès Temporaire*** a été octroyé.

## Octroyer un accès temporaire à une entrée d'informations d'identification avec mode de visualisation du mot de passe

Un approbateur peut configurer une entrée d'informations d'identification avec un accès temporaire, donnant aux utilisateurs la possibilité de voir et de copier les mots de passe.

1. Dans le ***{{ fr.NPANE }}*** de {{ fr.RDM }}, sélectionner l'entrée d'informations d'identification à laquelle octroyer l'accès.
1. Aller à ***Propriétés*** – ***Sécurité*** – ***Permissions*** – ***Général*** et régler ***Voir le mot de passe*** sur ***Jamais***.
![Voir le mot de passe](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6025.png)
1. Dans la même fenêtre, aller à ***Sécurité*** – ***Paramètres de Sécurité*** – ***Accès Temporaire*** – ***Mode*** et sélectionner ***Autorisé***.
![Mode d'accès temporaire](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6024.png)
1. Cliquer sur ***OK*** pour fermer la fenêtre.
1. Aller à ***Octroyer un Accès Temporaire*** dans le ruban.
![Octroyer un Accès Temporaire](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6018.png)
1. Choisir ***Utilisateur*** et ***Durée*** dans la fenêtre ***Octroyer un Accès Temporaire***.
![Fenêtre Octroyer un Accès Temporaire](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6021.png)
Les ***Dépendances de l'entrée***, telles que les informations d'identification et les VPN liés, sont listées dans le menu de gauche.
1. Cliquer sur ***Définir une plage horaire personnalisée*** si besoin d'octroyer l'accès pour une période spécifique et écrire un court ***Message*** à l'utilisateur expliquant pourquoi vous octroyez l'accès.
1. Cliquer sur ***Octroyer l'Accès*** pour fermer la fenêtre.
![L'accès temporaire a été octroyé](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6022.png)
L'***Accès Temporaire*** a été octroyé.
