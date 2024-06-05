---
eleventyComputed:
  title: Approuver un accès temporaire à une entrée dans {{ fr.RDM }}
  order: 20
  description: La fonctionnalité d'accès temporaire permet aux utilisateurs de demander une élévation temporaire de leurs permissions pour une entrée spécifique. L'approbateur doit ensuite approuver ou refuser la demande.
---
{% youtube 'En3pmonz1f8' %}

La fonctionnalité ***Accès Temporaire*** permet aux utilisateurs de demander une élévation temporaire de leurs permissions pour une entrée spécifique. L'approbateur doit ensuite approuver ou refuser la demande.

Si une demande d'***Accès temporaire*** a été faite dans {{ fr.RDM }} à partir d'une base de données {{ fr.DHUB }}, le processus d'autorisation doit être effectué dans {{ fr.DHUB }}. Voir [Approuver un accès temporaire à une entrée dans {{ fr.DHUBB }}](/hub/web-interface/temporary-access/approve-temporary-access/).

{% snippet, "badgeInfo" %}
Lors de l'utilisation de {{ fr.DVLS }}, Microsoft SQL Server ou des sources de données Microsoft Azure SQL, vous devez d'abord [Activer l'accès temporaire](/rdm/kb/rdm-windows/how-to-articles/enable-temporary-access/) dans {{ fr.RDM }}.
{% endsnippet %}

## Voir les demandes d'accès temporaire

Pour voir toutes vos demandes passées et actuelles, vous devez utiliser la boîte ***demandes d'accès en attente*** pour ouvrir la fenêtre ***Demandes d'Accès Temporaire***.
![Tableau de bord – demandes d'accès en attente](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6010.png)

Dans la fenêtre ***Demandes d'Accès Temporaire***, vous pouvez voir toutes vos demandes d'accès temporaire et les trier par ***Statut***, ***Nom d'utilisateur***, ***Utilisateur de la source de données***, ***Entrée***, ***Action***, ***Demandé le***, ***Durée demandée***, ***Heure de début demandée***, ***Heure de fin demandée***, ***Durée autorisée***, ***Heure de début autorisée***, ***Heure de fin autorisée***, ***Nom d'utilisateur de l'autorisateur*** et ***Utilisateur de la source de données de l'autorisateur***.
![Afficher les Demandes d'Accès Temporaire](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6013.png)

Il est également possible d'afficher uniquement certaines demandes avec le menu déroulant ***Statut*** ou avec la barre de filtre en haut.

En utilisant ***Voir les messages***, vous pouvez voir le ***Message de la demande*** et le ***Message d'autorisation*** d'une demande spécifique.
![Messages de la demande](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2076.png)

Enfin, cliquer sur ***Approuver*** ou ***Refuser*** ouvre la fenêtre ***Réponse d'Accès Temporaire***, qui est décrite dans la section suivante.

## Approuver/Refuser les demandes d'accès temporaire

{% snippet, "badgeInfo" %}
La durée de l'***Accès Temporaire*** commence lorsque la demande est approuvée.
{% endsnippet %}

Pour répondre à une demande, vous devez ouvrir la fenêtre ***Réponse d'Accès Temporaire***. Il y a deux façons d'y accéder.

La première option est d'utiliser la boîte ***Demandes d'Accès en Attente*** (voir image ci-dessous) dans l'onglet ***Vue d'ensemble*** de votre ***Tableau de bord***. Cliquer sur la marque verte (approuver la demande) ou sur le "X" rouge (refuser la demande) à côté d'une demande ouvrira la fenêtre ***Réponse d'Accès Temporaire***.
![Demandes d'Accès en Attente](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6015.png)

La deuxième option nécessite de passer par l'autre boîte ***Demandes d'Accès en Attente*** décrite dans la [section précédente](#voir-les-demandes-daccès-temporaire). Quelle que soit la manière choisie pour accéder à la fenêtre de réponse, le résultat sera le même.
![Réponse d'Accès Temporaire](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6014.png)

Cette vue est divisée en deux sections :

* La section ***Informations sur la demande*** contient des informations sur la demande de l'utilisateur. Comme cela a été fait du côté de l'utilisateur, les champs de cette section ne peuvent pas être modifiés. Les ***dépendances de l'entrée***, telles que les informations d'identification et les VPN liés, sont listées dans le menu de gauche.

* La section ***Paramètres de réponse*** vous permet de modifier la durée d'accès temporaire spécifiée par l'utilisateur. Il est également possible d'écrire un message à l'utilisateur expliquant votre décision, mais cela reste facultatif.

Cliquer sur ***Approuver*** ou ***Refuser*** approuvera ou refusera la demande, selon ce que vous avez sélectionné plus tôt. Une fenêtre de confirmation apparaîtra que vous pouvez faire disparaître en cliquant sur ***OK***.

## Révoquer l'accès temporaire

Après l'approbation, pour une raison quelconque, vous pouvez révoquer l'accès temporaire de l'utilisateur en cliquant sur ***Demandes d'Accès Approuvées*** dans le tableau de bord. Assurez-vous de vouloir faire cela d'abord, car pour regagner l'accès à l'entrée, ils devront faire une autre demande. Sinon, leur accès prendra fin dans le délai prévu.

![Demandes d'Accès Approuvées](https://cdnweb.devolutions.net/docs/RDMW6022_2024_1.png)

Cliquer sur ***Révoquer***.

![Révoquer](https://cdnweb.devolutions.net/docs/RDMW6021_2024_1.png)

{% snippet, "badgeInfo" %}
Pour en savoir plus sur l'expérience de l'utilisateur final dans {{ fr.RDM }}, visitez [Demander un accès temporaire à une entrée dans {{ fr.RDM }}](/rdm/windows/user-interface/content-area/temporary-access/request-temporary-access/).
{% endsnippet %}
