---
eleventyComputed:
  title: Récupérer les identifiants avec le {{ fr.WBEX }}
---
{% snippet, "badgeInfo" %}
Pour pouvoir récupérer vos identifiants, vous avez besoin d'entrées de site Web dans {{ fr.DVLS }}. Si ce n'est pas le cas, commencer par [ajouter une entrée de site Web avec le {{ fr.WBEX }}](/workspace/workspace-browser-extension/devolutions-server/using-workspace-browser-extension/add-website-entry-workspace-browser-extension/).
{% endsnippet %}

Le {{ fr.WBEX }} facilite l'accès à vos identifiants en associant automatiquement les sites Web aux identifiants enregistrés dans les entrées de site Web de {{ fr.DVLS }}. Il est également possible de filtrer vos entrées via le {{ fr.WBEX }} pour trouver manuellement vos identifiants.

Après l'[installation](/workspace/workspace-browser-extension/installation/) du {{ fr.WBEX }} et sa [mise en pair](/workspace/workspace-browser-extension/devolutions-server/first-login/) avec {{ fr.DVLS }}, vous pouvez immédiatement utiliser l'extension pour récupérer vos identifiants. Cependant, vous voudrez peut-être modifier certains paramètres pour personnaliser votre expérience. Nous vous recommandons de suivre les étapes dans la section [Paramètres](#settings) en premier : elles vous guideront dans la configuration du {{ fr.WBEX }} en suggérant les meilleures pratiques pour récupérer les identifiants. Vous pouvez également ignorer la configuration et passer directement à [Récupérer les identifiants](#retrieving-credentials).

## Paramètres
1. Cliquer sur l'icône du {{ fr.WBEX }} dans votre barre d'outils de votre navigateur, puis cliquer sur l'icône ***Paramètres***.
![Icône Paramètres](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2015.png)
1. Cliquer sur ***Général*** dans la section ***Configuration***.
![Paramètres – Configuration – Général](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2016.png)
1. Dans l'onglet ***Général***, le paramètre ***Afficher l'icône dans les champs*** devrait être activé par défaut. Si ce n'est pas le cas, cocher la case à côté de l'option pour l'activer.
   {% snippet, "badgeNotice" %}
   Avec cette option activée, une icône du {{ fr.WBEX }} est affichée dans chaque champ d'identifiants sur les sites Web que vous visitez. Cela facilite la sélection de l'entrée correcte à partir de laquelle récupérer vos identifiants, surtout lorsque plusieurs sont disponibles.
   {% endsnippet %}

   ![Général – Afficher l'icône dans les champs](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2017.png)

4. Cliquer ***Enregistrer***.
5. Cliquer sur ***{{ fr.DVLS }}*** dans la section ***Sources de données***.
![Paramètres – Sources de données – {{ fr.DVLS }}](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2018.png)
1. Dans l'onglet ***Actions***, activer les options ***Récupérer automatiquement les identifiants au chargement de la page*** et ***Remplir automatiquement les identifiants au chargement*** en cochant les cases à côté d'elles. Voici une description de chaque paramètre :
    * ***Récupérer automatiquement les identifiants au chargement de la page*** (activé par défaut) : Permet au {{ fr.WBEX }} de rechercher automatiquement les identifiants disponibles lors du chargement d'une page Web.
    * ***Remplir automatiquement les identifiants au chargement*** (désactivé par défaut) : Les champs d'identifiants sont automatiquement remplis lors du chargement d'une page Web. Cela fonctionne uniquement si vous avez un seul ensemble d'identifiants pour un site Web donné.
![Actions – Récupérer et remplir automatiquement les identifiants au chargement](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2019.png)
   {% snippet, "badgeInfo" %}
   Si le paramètre ***Soumettre automatiquement le formulaire après le remplissage*** est activé, les identifiants sont automatiquement soumis lorsque les champs sont remplis. Son activation est optionnelle car ce n'est pas une meilleure pratique.
   {% endsnippet %}
7. Cliquer ***Enregistrer***.

Vous pouvez maintenant continuer à la section suivante pour apprendre comment récupérer vos identifiants d'entrée de site Web.

## Récupérer les Identifiants
{% snippet, "badgeInfo" %}
Cette section est basée sur les étapes de configuration du {{ fr.WBEX }} de la [section précédente](#settings). Nous vous recommandons vivement de les suivre avant de continuer, car certaines fonctionnalités peuvent différer entre votre expérience et ce qui est montré ci-dessous.
{% endsnippet %}

Les identifiants peuvent être récupérés de {{ fr.DVLS }} automatiquement ou manuellement via le {{ fr.WBEX }}. Suivre les étapes de la section qui correspond le mieux à vos besoins :

* [Récupérer automatiquement les identifiants](#automatically-retrieving-credentials)
* [Récupérer manuellement les identifiants](#manually-retrieving-credentials)

### Récupérer Automatiquement les Identifiants
1. Aller à la page de connexion du site Web. Cette page sera différente pour chaque site Web ; cette section utilisera le site Web d'Atlassian comme exemple. L'un des deux scénarios peut se produire :
    * Si vous avez un seul ensemble d'identifiants pour ce site Web, les champs de connexion devraient déjà être remplis avec vos identifiants. Si c'est le cas, suivre le processus de connexion du site Web jusqu'à ce que vous vous connectiez avec succès à votre compte. Vous n'avez pas besoin de suivre l'étape suivante.
  ![Champs d'Identifiants Remplis Automatiquement](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2024.png)
    * Si vous avez plus d'un ensemble d'identifiants ou si vos identifiants ne sont pas remplis, cliquer sur l'icône du {{ fr.WBEX }} dans le champ d'identifiants et sélectionner l'entrée qui contient vos identifiants pour ce site Web. Si plusieurs entrées sont disponibles, vous pouvez rechercher celle que vous voulez en utilisant la barre ***Filtrer***. Suivre le reste du processus de connexion du site Web jusqu'à ce que vous vous connectiez avec succès à votre compte.
  ![Filtre et Sélection d'Entrée](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2021.png)

### Récupérer Manuellement les Identifiants
Selon les options que vous avez activées/désactivées, vous devrez peut-être récupérer vos identifiants manuellement :

1. Aller à la page de connexion du site Web auquel vous souhaitez accéder. Cette page sera différente pour chaque site Web ; cette section utilisera le site Web d'Atlassian comme exemple.
1. Cliquer sur le {{ fr.WBEX }} dans votre navigateur. Les entrées de site Web liées à ce site apparaîtront.
1. Cliquer sur l'entrée de site Web qui contient les identifiants pour ce site. Si plusieurs entrées sont disponibles, vous pouvez utiliser la barre ***Filtrer*** pour trouver celle dont vous avez besoin.
   {% snippet, "badgeInfo" %}
   Si nécessaire, vous pouvez également utiliser les icônes qui apparaissent lorsque vous survolez l'entrée pour copier votre nom d'utilisateur, copier votre mot de passe, ou obtenir un aperçu de l'entrée.
   {% endsnippet %}

   ![Sélection d'Entrée](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2022.png)
4. Vos identifiants seront transférés aux champs d'identifiants du site Web. Suivre le reste du processus de connexion du site Web jusqu'à ce que vous vous connectiez avec succès à votre compte.
![Transfert des Identifiants dans les Champs Correspondants](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2023.png)
