---
eleventyComputed:
  title: Approuver un accès temporaire à une entrée dans {{ fr.RDM }}
  order: 20
  description: La fonction d'accès temporaire permet aux utilisateurs de demander une élévation temporaire de leurs permissions pour une entrée spécifique. L'approbateur doit alors approuver ou refuser la demande.
---
{% snippet icon.badgeInfo %}
Si une demande d'accès temporaire a été faite dans {{ fr.RDM }} à partir d'une base de données {{ fr.DHUB }}, le processus d'autorisation doit être effectué dans {{ fr.DHUB }}. Consultez [Approuver un accès temporaire à une entrée dans {{ fr.DHUBB }}](/fr/hub/web-interface/hub-overview/temporary-access/approve-temporary-access/).
{% endsnippet %}

La fonction d'***Accès temporaire*** permet aux utilisateurs de demander une élévation temporaire de leurs permissions pour une entrée spécifique. L'approbateur doit alors approuver ou refuser la demande.

{% snippet icon.badgeInfo %}
Lorsque vous utilisez une source de données {{ fr.DVLS }}, Microsoft SQL Server ou Microsoft Azure SQL, vous devez d'abord [Activer l'accès temporaire](/fr/kb/remote-desktop-manager/how-to-articles/enable-temporary-access/) dans {{ fr.RDM }}.
{% endsnippet %}

Pour apprendre comment afficher les demandes en attente, consultez [Afficher les demandes d'accès temporaire](#afficher-les-demandes-daccès-temporaire).

Pour apprendre comment répondre à une demande, consultez [Approuver/refuser les demandes d'accès temporaire](#approuverrefuser-les-demandes-daccès-temporaire).

## Afficher les demandes d'accès temporaire

Pour afficher toutes vos demandes passées et actuelles, vous devez utiliser la boîte ***demandes d'accès en attente*** dans le ***Tableau de bord*** pour ouvrir la fenêtre ***Demandes d'accès temporaire***.
![Tableau de bord – demandes d'accès en attente](https://webdevolutions.blob.core.windows.net/docs/fr/rdm/windows/RDMWin6000.png)

Dans la fenêtre ***Demandes d'accès temporaire***, vous pouvez voir toutes les demandes d'accès temporaire et les trier par ***Statut***, ***Nom d'utilisateur***, ***Source de données de l'utilisateur***, ***Entrée***, ***Action***, ***Demandé le***, ***Durée demandée***, ***Heure de début demandée***, ***Heure de fin demandée***, ***Durée de l'autorisation***, ***Heure de début autorisée***, ***Heure de fin autorisée***, ***Nom d'utilisateur de l'autorisateur*** ou ***Compte utilisateur connecté de l'autorisateur***.
![Afficher les Demandes d'accès temporaire](https://cdnweb.devolutions.net/docs/fr/rdm/windows/RDMWin6001.png)

Il est également possible d'afficher uniquement certaines demandes en utilisant le menu déroulant ***Statut*** ou avec la barre de filtre au haut de la fenêtre.

***Afficher les messages*** vous permet de visualiser le ***Message de la demande*** et le ***Message d'autorisation*** d'une demande spécifique.
![Messages des demandes](https://cdnweb.devolutions.net/docs/fr/rdm/windows/RDMWin2127.png)

Enfin, en cliquant sur ***Approuver*** ou ***Refuser***, vous ouvrez la fenêtre ***Réponse à la demande d'accès temporaire*** qui est décrite dans la section suivante.

## Approuver/refuser les demandes d'accès temporaire

{% snippet icon.badgeInfo %}
La durée de l'***Accès temporaire*** commence lorsque la demande est approuvée.
{% endsnippet %}

Pour répondre à une demande, vous devez ouvrir la fenêtre ***Réponse à la demande d'accès temporaire***. Il y a deux façons d'y accéder.

La première option consiste à utiliser la boîte ***Demandes d'accès en attente*** (voir image ci-dessous) dans l'onglet ***Aperçu*** de votre ***Tableau de bord***. En cliquant sur le crochet vert (approuver la demande) ou le « X » rouge (refuser la demande) à côté d'une demande, vous ouvrirez la fenêtre ***Réponse à la demande d'accès temporaire***.
![Demandes d'accès en attente](https://cdnweb.devolutions.net/docs/fr/rdm/windows/RDMWin6002.png)

La deuxième option vous demande de passer par la boîte ***Demandes d'accès en attente*** décrite dans la [section précédente](#afficher-les-demandes-daccès-temporaire). Quelle que soit la façon dont vous choisissez d'accéder à la fenêtre de réponse, le résultat sera le même.
![Réponse à la demande d'accès temporaire](https://cdnweb.devolutions.net/docs/fr/rdm/windows/RDMWin6003.png)

Cette vue est divisée en deux sections :

* La section ***Demander des infos*** contient les informations à propos de la demande de l'utilisateur. Puisque cela a été fait du côté de l'utilisateur, les champs de cette section ne peuvent pas être modifiés. Vous pouvez consulter les ***Dépendances de l'entrée***, comme que les identifiants et les VPN liés, dans le menu à gauche.
* La section ***Paramètres de la réponse*** vous permet de modifier la durée de l'accès temporaire spécifiée par l'utilisateur. Il est également possible de rédiger un court message à l'intention de l'utilisateur pour leur expliquer votre décision, mais cela reste facultatif.

Cliquer sur ***Approuver*** ou ***Refuser*** permet d'approuver ou de refuser la demande, en fonction de ce que vous avez sélectionné précédemment. Une fenêtre de confirmation s'affiche, que vous pouvez faire disparaître en cliquant sur ***OK***.

{% snippet icon.badgeInfo %}
Pour en apprendre davantage sur l'expérience de l'utilisateur final dans {{ fr.RDM }}, consultez [Demander un accès temporaire à une entrée dans {{ fr.RDM }}](/fr/rdm/windows/user-interface/content-area/temporary-access/request-temporary-access/).
{% endsnippet %}
