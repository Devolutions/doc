---
eleventyComputed:
  title: Récupérer des identifiants depuis {{ fr.DHUBB }} avec le {{ fr.WBEX }}
---
{% snippet, "badgeInfo" %}
Avoir des entrées de site Web dans {{ fr.DHUBB }} pour pouvoir récupérer leurs identifiants. Si ce n'est pas le cas, commencer par [ajouter une entrée de site Web avec le {{ fr.WBEX }}](/workspace/workspace-browser-extension/hub-business/using-workspace-browser-extension/add-entry-hub-business-workspace-browser-extension/).
{% endsnippet %}

Le {{ fr.WBEX }} facilite l'accès à vos identifiants en associant automatiquement les sites Web aux identifiants enregistrés dans les entrées de site Web de {{ fr.DHUBB }}. Il est également possible de filtrer vos entrées via le {{ fr.WBEX }} pour trouver manuellement vos identifiants.

Après l'[installation](/workspace/workspace-browser-extension/installation/) du {{ fr.WBEX }} et sa [mise en paire](/workspace/workspace-browser-extension/hub-business/first-login/) avec {{ fr.DHUBB }}, vous pouvez immédiatement utiliser l'extension pour récupérer vos identifiants. Cependant, vous voudrez peut-être modifier certains paramètres pour personnaliser votre expérience. Nous recommandons de suivre les étapes dans la section [Paramètres](#settings) en premier : elles vous guideront dans la configuration du {{ fr.WBEX }} en suggérant les meilleures pratiques pour récupérer des identifiants. Vous pouvez également ignorer la configuration et passer directement à [Récupérer des identifiants](#retrieving-credentials).

## Paramètres

1. Cliquer sur le bouton {{ fr.WBEX }} dans votre navigateur, puis cliquer sur l'icône ***Paramètres***.
![Icône Paramètres](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2080.png)
1. Cliquer sur ***Général*** dans la section ***Configuration***.
![Paramètres – Configuration – Général](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2081.png)
1. Dans l'onglet ***Général***, l'option ***Afficher l'icône dans les champs*** devrait être activée par défaut. Si ce n'est pas le cas, cocher la case à côté de l'option pour l'activer.
   {% snippet, "badgeNotice" %}
   Avec cette option activée, une icône {{ fr.WBEX }} est affichée dans chaque champ d'identifiants sur les sites Web que vous visitez. Cela facilite la sélection de l'entrée correcte à partir de laquelle récupérer vos identifiants, surtout lorsque plusieurs sont disponibles.
   {% endsnippet %}

   ![Général – Afficher l'icône dans les champs](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2082.png)

1. Cliquer ***Enregistrer***.
1. Cliquer sur ***{{ fr.DHUBB }}*** dans la section ***Sources de données***.
![Paramètres – Sources de données – {{ fr.DHUBB }}](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2083.png)
1. Dans l'onglet ***Actions***, activer l'option ***Remplir automatiquement les identifiants au chargement*** en cochant la case à côté. Avec ce paramètre activé, les identifiants seront automatiquement remplis lors du chargement d'une page Web. Cela fonctionne uniquement si vous avez un seul ensemble d'identifiants pour un site Web donné.
![Actions – Remplir automatiquement les identifiants au chargement](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2084.png)
   {% snippet, "badgeInfo" %}
   Si l'option ***Soumettre automatiquement le formulaire après le remplissage*** est activée, les identifiants sont automatiquement soumis lorsque les champs sont remplis. Son activation est optionnelle car ce n'est pas une meilleure pratique.
   {% endsnippet %}

7. Cliquer ***Enregistrer***.

Vous pouvez maintenant continuer à la section suivante pour apprendre à récupérer vos identifiants d'entrée de site Web.

## Récupérer des Identifiants

{% snippet, "badgeInfo" %}
Cette section est basée sur les étapes de configuration du {{ fr.WBEX }} de la [section précédente](#settings). Nous recommandons fortement de les suivre avant de continuer, car certaines fonctionnalités peuvent différer entre votre expérience et ce qui est montré ci-dessous.
{% endsnippet %}

Les identifiants peuvent être récupérés depuis {{ fr.DHUBB }} automatiquement ou manuellement via le {{ fr.WBEX }}. Suivre les étapes de la section qui correspond le mieux à vos besoins :

* [Récupérer automatiquement des identifiants](#automatically-retrieving-credentials)
* [Récupérer manuellement des identifiants](#manually-retrieving-credentials)

### Récupérer Automatiquement des Identifiants

1. Aller à la page de connexion du site Web auquel vous souhaitez accéder. Cette page sera différente pour chaque site Web ; cette section utilisera le site Web d'Atlassian comme exemple. L'un des deux scénarios peut se produire :
    1. Si vous avez un seul ensemble d'identifiants pour ce site Web, les champs de connexion devraient déjà être remplis avec vos identifiants. Si c'est le cas, suivre le processus de connexion du site Web jusqu'à ce que vous vous connectiez avec succès à votre compte. Vous n'avez pas besoin de suivre l'étape suivante.
![Champs d'Identifiants Remplis Automatiquement](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2088.png)
{type="a"}
    1. Si vous avez plusieurs ensembles d'identifiants ou si vos identifiants ne sont pas remplis, cliquer sur l'icône {{ fr.WBEX }} dans le champ d'identifiants et sélectionner l'entrée qui contient vos identifiants pour ce site Web. Si plusieurs entrées sont disponibles, vous pouvez rechercher celle que vous voulez en utilisant la barre ***Filtre***. Suivre le reste du processus de connexion du site Web jusqu'à ce que vous vous connectiez avec succès à votre compte.
![Filtre et Sélection d'Entrée](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2089.png)

### Récupérer Manuellement des Identifiants

Selon les options que vous avez activées/désactivées, vous devrez peut-être récupérer vos identifiants manuellement :

1. Aller à la page de connexion du site Web auquel vous souhaitez accéder. Cette page sera différente pour chaque site Web ; cette section utilisera le site Web d'Atlassian comme exemple.
1. Cliquer sur le {{ fr.WBEX }} dans votre navigateur. Les entrées de site Web liées à ce site Web apparaîtront.
1. Cliquer sur l'entrée de site Web qui contient les identifiants pour ce site Web. Si plusieurs entrées sont disponibles, vous pouvez utiliser la barre ***Filtre*** pour trouver celle dont vous avez besoin.
![Sélection d'Entrée](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2090.png)

   {% snippet, "badgeInfo" %}
   Si nécessaire, vous pouvez également utiliser les icônes qui apparaissent lorsque vous survolez l'entrée pour copier votre nom d'utilisateur, copier votre mot de passe, ou obtenir un aperçu de l'entrée.
   {% endsnippet %}

4. Vos identifiants seront transférés aux champs d'identifiants du site Web. Suivre le reste du processus de connexion du site Web jusqu'à ce que vous vous connectiez avec succès à votre compte.
![Transfert des Identifiants dans les Champs Correspondants](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2091.png)
