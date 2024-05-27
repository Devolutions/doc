---
eleventyComputed:
  title: Récupérer des identifiants de {{ fr.DHUBB }} avec le {{ fr.WBEX }}
---
{% snippet, "badgeInfo" %}
Vous avez besoin d'entrées de site Web dans {{ fr.DHUBB }} pour pouvoir récupérer leurs identifiants. Si ce n'est pas le cas, commencez par [Ajouter une entrée de site Web avec le {{ fr.WBEX }}](/fr/hub/workspace-browser-extension/using-workspace-browser-extension/using-workspace-browser-extension-with-hub-business/add-entry-hub-business-workspace-browser-extension/).
{% endsnippet %}

Le {{ fr.WBEX }} facilite l'accès à vos identifiants en faisant automatiquement correspondre les sites Web aux identifiants enregistrés dans les entrée de sites Web de {{ fr.DHUBB }}. Il est également possible de filtrer vos entrées avec le {{ fr.WBEX }} pour trouver manuellement vos identifiants.

Après l'[installation](/fr/hub/workspace-browser-extension/installation/) du {{ fr.WBEX }} et son [couplage](/fr/hub/workspace-browser-extension/first-login-workspace-browser-extension/hub-business/) avec {{ fr.DHUBB }}, vous pouvez immédiatement utiliser l'extension pour retrouver vos identifiants. Cependant, vous voudrez peut-être modifier certains des paramètres pour personnaliser votre expérience. Nous vous recommandons de suivre d'abord les étapes de la section [Paramètres](#paramètres) : elles vous guideront dans la configuration du {{ fr.WBEX }} en vous suggérant les meilleures pratiques pour récupérer les identifiants. Vous pouvez également sauter la configuration et passer directement à la [Récupération des identifiants](#récupération-des-identifiants).

## Paramètres

1. Cliquer sur l'icône du {{ fr.WBEX }} dans la barre d'outils de votre navigateur, puis cliquer sur l'icône des ***Paramètres***.
![Icône des Paramètres](https://cdnweb.devolutions.net/docs/fr/hub/Hub2117.png)
1. Cliquer sur ***Général*** dans la section ***Configuration***.
![Paramètres – Configuration – Général](https://cdnweb.devolutions.net/docs/fr/hub/Hub2118.png)
1. Dans l'onglet ***Général***, le paramètre ***Afficher l'icône dans les champs*** est activé par défaut. S'il n'est pas activé, cocher la case à côté de l'option.
{% snippet, "badgeNotice" %}
Avec cette option activée, une icône du {{ fr.WBEX }} sera affichée dans chaque champ d'identifiants des sites Web que vous visitez. Il est ainsi plus facle de sélectionner l'entrée correcte à partir de laquelle récupérer vos identifiants, en particulier lorsque plusieurs entrées sont disponibles.
{% endsnippet %}

![Général – Afficher l'icône dans les champs](https://cdnweb.devolutions.net/docs/fr/hub/Hub2119.png)

4. Cliquer sur ***Enregistrer***.
1. Cliquer sur ***{{ fr.DHUBB }}*** dans la section des ***Sources de données***.
![Paramètres – Sources de données – {{ fr.DHUBB }}](https://cdnweb.devolutions.net/docs/fr/hub/Hub2120.png)
1. Dans l'onglet ***Actions***, activer l'option ***Remplir automatiquement les champs d'identifiants lors du chargement*** en cochant la case à côté. Avec ce paramètre activé, les identifiants seront automatiquement remplis lors du chargement d'une page Web. Cela ne fonctionne que si vous n'avez qu'une seule entrée d'identifiants pour un site Web donné.
![Actions – Remplir automatiquement les champs d'identifiants lors du chargement](https://cdnweb.devolutions.net/docs/fr/hub/Hub2121.png)
{% snippet, "badgeInfo" %}
Si l'option ***Soumettre automatiquement le formulaire après la saisie*** est activée, les identifiants seront automatiquement soumis lorsque les champs sont remplis. Son activation est facultative, car il ne s'agit pas d'une pratique recommandée.
{% endsnippet %}

7. Cliquer sur ***Enregistrer***.

Vous pouvez maintenant continuer à la prochaine section pour apprendre comment récupérer vos identifiants d'entrée de site Web.

## Récupération des identifiants

{% snippet, "badgeInfo" %}
Cette section est basée sur les étapes de configuration du {{ fr.WBEX }} qui se trouvent dans la [section précédente](#paramètres). Nous vous recommandons fortement de les suivre avant de poursuivre, puisque certaines fonctionnalités pourraient différer entre votre expérience et ce qui est indiqué ci-dessous.
{% endsnippet %}

Vos identifiants peuvent être récupérés de {{ fr.DHUBB }} automatiquement ou manuellement à partir du {{ fr.WBEX }}. Suivez les étapes de la section qui correspond le mieux à vos besoins :

* [Récupérer les identifiants automatiquement](#récupérer-les-identifiants-automatiquement)
* [Récupérer les identifiants manuellement](#récupérer-les-identifiants-manuellement)

### Récupérer les identifiants automatiquement

1. Aller à la page de connexion du site Web. Cette page sera différente pour chaque site Web; cette section utilisera le site Web d'Atlassian comme exemple. L'un des deux scénarios suivants peut se produire :
    1. S'il n'y a qu'une seule entrée d'identifiants pour ce site Web, les champs de connexion devraient déjà être remplis avec les identifiants. Si c'est le cas, suivre le processus de connexion du site Web jusqu'à la connexion au compte. L'étape suivante peut alors être sautée.
    ![Champs d'identifiants remplis automatiquement](https://cdnweb.devolutions.net/docs/fr/hub/Hub2122.png)
    1. S'il y a plusieurs entrées d'identifiants disponibles ou si vos identifiants ne sont pas remplis dans les champs, cliquer sur l'icône du {{ fr.WBEX }} dans le champ d'identifiant et sélectionner l'entrée qui contient les identifiants pour ce site Web. Si plusieurs entrées sont disponibles, il est possible de faire une recherche en utilisant la barre de ***Filtre***. Suivre le reste du processus de connexion du site Web jusqu'à la connexion au compte.
    ![Filtrer et sélectionner les entrées](https://cdnweb.devolutions.net/docs/fr/hub/Hub2123.png)

### Récupérer les identifiants manuellement

Selon les options que vous avez activées/désactivées, il est possible que vous deviez récupérer vos identifiants manuellement :

1. Aller à la page de connexion du site Web. Cette page sera différente pour chaque site Web; cette section utilisera le site Web d'Atlassian comme exemple.
1. Cliquer sur le {{ fr.WBEX }} dans la barre d'outils de votre navigateur. Les entrées de site Web qui sont liées à ce site Web apparaitront.
1. Cliquer sur l'entrée de site Web qui contient les identifiants recherchés pour ce site Web. Si plusieurs entrées sont disponibles, il est possible de faire une recherche en utilisant la barre de ***Filtre***.
![Sélection de l'entrée](https://cdnweb.devolutions.net/docs/fr/hub/Hub2125.png)

{% snippet, "badgeInfo" %}
Si nécessaire, vous pouvez également utiliser les icônes qui apparaissent lorsque vous passez la souris sur l'entrée pour copier votre nom d'utilisateur, copier votre mot de passe ou obtenir un aperçu de l'entrée.
{% endsnippet %}

4. Les identifiants seront transférés dans les champs d'identifiants du site Web. Suivre le reste du processus de connexion du site Web jusqu'à la connexion au compte.
![Transfert des identifiants dans les champs correspondants](https://cdnweb.devolutions.net/docs/fr/hub/Hub2124.png)
