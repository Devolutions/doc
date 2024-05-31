---
eleventyComputed:
  title: Récupérer les identifiants avec le {{ fr.WBEX }}
---
{% snippet, "badgeInfo" %}
Pour récupérer leurs identifiants, il est nécessaire d'avoir des entrées de site Web dans {{ fr.RDM }}. Si ce n'est pas le cas, commencer par [ajouter une entrée de site Web avec le {{ fr.WBEX }}](/workspace/workspace-browser-extension/remote-desktop-manager/using-workspace-browser-extension/add-website-entry-workspace-browser-extension/).
{% endsnippet %}

Le {{ fr.WBEX }} facilite l'accès à vos identifiants en associant automatiquement les sites Web aux identifiants enregistrés dans les entrées de site Web de {{ fr.RDM }}. Il est également possible de filtrer vos entrées via le {{ fr.WBEX }} pour trouver manuellement vos identifiants.

Après l'[installation](/workspace/workspace-browser-extension/installation/) du {{ fr.WBEX }} et sa [mise en paire](/workspace/workspace-browser-extension/remote-desktop-manager/first-login/first-login-rdm-windows/) avec {{ fr.RDM }}, vous pouvez immédiatement utiliser l'extension pour récupérer vos identifiants. Cependant, vous voudrez peut-être modifier certains paramètres pour personnaliser votre expérience. Nous recommandons de suivre les étapes dans la section [Paramètres](#settings) en premier : elles vous guideront dans la configuration du {{ fr.WBEX }} en suggérant les meilleures pratiques pour récupérer les identifiants. Vous pouvez également ignorer la configuration et passer directement à [Récupérer les identifiants](#retrieving-credentials).

## Paramètres

1. Cliquer sur le bouton {{ fr.WBEX }} dans votre navigateur, puis cliquer sur l'icône ***Paramètres***.
![Icône Paramètres](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2111.png)
1. Cliquer sur ***Général*** dans la section ***Configuration***.
![Paramètres – Configuration – Général](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2112.png)
1. Dans l'onglet ***Général***, le paramètre ***Afficher l'icône dans les champs*** devrait être activé par défaut. Si ce n'est pas le cas, cocher la case à côté de l'option pour l'activer.
   {% snippet, "badgeNotice" %}
   Avec cette option activée, une icône du {{ fr.WBEX }} est affichée dans chaque champ d'identifiants sur les sites Web que vous visitez. Cela facilite la sélection de l'entrée correcte à partir de laquelle récupérer vos identifiants, surtout lorsque plusieurs sont disponibles.
   {% endsnippet %}

   ![Général – Afficher l'icône dans les champs](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2113.png)

1. Cliquer ***Enregistrer***.
1. Cliquer sur ***{{ fr.RDM }}*** dans la section ***Sources de données***.
![Paramètres – Sources de données – {{ fr.RDM }}](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2114.png)
1. Dans l'onglet ***Actions***, activer les options ***Récupérer automatiquement les identifiants au chargement de la page*** et ***Remplir automatiquement les identifiants au chargement*** en cochant les cases à côté d'elles. Voici une description de chaque paramètre :
    * ***Récupérer automatiquement les identifiants au chargement de la page*** (activé par défaut) : Permet au {{ fr.WBEX }} de rechercher automatiquement les identifiants disponibles lors du chargement d'une page Web.
    * ***Remplir automatiquement les identifiants au chargement*** (désactivé par défaut) : Les champs d'identifiants sont automatiquement remplis lors du chargement d'une page Web. Cela fonctionne uniquement si vous avez un seul ensemble d'identifiants pour un site Web donné.
![Actions – Récupérer et remplir automatiquement les identifiants au chargement de la page](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2115.png)
   {% snippet, "badgeInfo" %}
   Si l'option ***Soumettre automatiquement le formulaire après le remplissage*** est activée, les identifiants sont automatiquement soumis lorsque les champs sont remplis. Son activation est optionnelle car ce n'est pas une meilleure pratique.
   {% endsnippet %}

1. Cliquer ***Enregistrer***.

Vous pouvez maintenant continuer à la section suivante pour apprendre à récupérer les identifiants de votre entrée de site Web.

## Récupérer les Identifiants

{% snippet, "badgeInfo" %}
Cette section est basée sur les étapes de configuration du {{ fr.WBEX }} de la section précédente. Nous recommandons vivement de les suivre avant de continuer, car certaines fonctionnalités peuvent différer entre votre expérience et ce qui est montré ci-dessous.
{% endsnippet %}

Les identifiants peuvent être récupérés de {{ fr.RDM }} automatiquement ou manuellement via le {{ fr.WBEX }}. Suivre les étapes de la section qui correspond le mieux à vos besoins :

* [Récupérer automatiquement les identifiants](#automatically-retrieving-credentials)
* [Récupérer manuellement les identifiants](#manually-retrieving-credentials)

### Récupérer Automatiquement les Identifiants

1. Aller à la page de connexion du site Web auquel vous souhaitez accéder. Cette page sera différente pour chaque site Web ; cette section utilisera le site Web d'Atlassian comme exemple. L'un des deux scénarios peut se produire :
    1. Si vous n'avez qu'un seul ensemble d'identifiants pour ce site Web, les champs de connexion devraient déjà être remplis avec vos identifiants. Si c'est le cas, suivre le processus de connexion du site Web jusqu'à ce que vous vous connectiez avec succès à votre compte. Vous n'avez pas besoin de suivre l'étape suivante.
![Champs d'Identifiants Remplis Automatiquement](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2117.png)
{type="a"}
    1. Si vous avez plus d'un ensemble d'identifiants ou si vos identifiants ne sont pas remplis, cliquer sur l'icône {{ fr.WBEX }} dans le champ d'identifiants et sélectionner l'entrée qui contient vos identifiants pour ce site Web. Si plusieurs entrées sont disponibles, vous pouvez rechercher celle que vous voulez en utilisant la barre ***Filtrer***. Suivre le reste du processus de connexion du site Web jusqu'à ce que vous vous connectiez avec succès à votre compte.
![Filtrage et Sélection d'Entrée](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2116.png)

### Récupérer Manuellement les Identifiants

Selon les options que vous avez activées/désactivées, vous devrez peut-être récupérer vos identifiants manuellement :

1. Aller à la page de connexion du site Web auquel vous souhaitez accéder. Cette page sera différente pour chaque site Web ; cette section utilisera le site Web d'Atlassian comme exemple.
1. Cliquer sur le {{ fr.WBEX }} dans votre navigateur. Les entrées de site Web liées à ce site Web apparaîtront.
1. Cliquer sur l'entrée de site Web qui contient les identifiants pour ce site Web. Si plusieurs entrées sont disponibles, vous pouvez utiliser la barre ***Filtrer*** pour trouver celle dont vous avez besoin.
![Sélection d'Entrée](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2118.png)
1. Vos identifiants seront transférés aux champs d'identifiants du site Web. Suivre le reste du processus de connexion du site Web jusqu'à ce que vous vous connectiez avec succès à votre compte.
![Transfert des Identifiants dans les Champs Correspondants](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2145.png)
