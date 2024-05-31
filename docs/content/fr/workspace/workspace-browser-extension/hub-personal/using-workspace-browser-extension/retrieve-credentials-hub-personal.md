```yaml
---
eleventyComputed:
  title: Récupérer des identifiants depuis {{ fr.DHUBP }} avec le {{ fr.WBEX }}
---
{% snippet, "badgeInfo" %}
Pour pouvoir récupérer vos identifiants, vous avez besoin d'entrées de site Web dans {{ fr.DHUBP }}. Si ce n'est pas le cas, commencez par [ajouter une entrée de site Web avec le {{ fr.WBEX }}](/workspace/workspace-browser-extension/hub-personal/using-workspace-browser-extension/add-entry-hub-personal-workspace-browser-extension/).
{% endsnippet %}

Le {{ fr.WBEX }} facilite l'accès à vos identifiants en associant automatiquement les sites Web aux identifiants enregistrés dans les entrées de site Web de {{ fr.DHUBP }}. Il est également possible de filtrer vos entrées via le {{ fr.WBEX }} pour trouver manuellement vos identifiants.

Après l'[installation](/workspace/workspace-browser-extension/installation/) du {{ fr.WBEX }} et sa [liaison](/workspace/workspace-browser-extension/hub-personal/first-login/) avec {{ fr.DHUBP }}, vous pouvez immédiatement utiliser l'extension pour récupérer vos identifiants. Cependant, vous voudrez peut-être modifier certains paramètres pour personnaliser votre expérience. Nous vous recommandons de suivre d'abord les étapes de la section Paramètres : elles vous guideront dans la configuration du {{ fr.WBEX }} en suggérant les meilleures pratiques pour récupérer des identifiants. Vous pouvez également ignorer la configuration et passer directement à la récupération des identifiants.

## Paramètres

1. Cliquer sur le bouton {{ fr.WBEX }} dans votre navigateur, puis cliquer sur l'icône ***Paramètres***.
![Icône Paramètres](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2093.png)
1. Cliquer sur ***Général*** dans la section ***Configuration***.
![Paramètres – Configuration – Général](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2081.png)
1. Dans l'onglet ***Général***, l'option ***Afficher l'icône dans les champs*** doit être activée par défaut. Si ce n'est pas le cas, cocher la case à côté de l'option pour l'activer.
   {% snippet, "badgeNotice" %}
   Avec cette option activée, une icône {{ fr.WBEX }} est affichée dans chaque champ d'identifiants sur les sites Web que vous visitez. Cela facilite la sélection de l'entrée correcte à partir de laquelle récupérer vos identifiants, surtout lorsque plusieurs sont disponibles.
   {% endsnippet %}

   ![Paramètres – Sources de données – {{ fr.DHUBP }}](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2082.png)

4. Cliquer ***Enregistrer***.
1. Cliquer sur ***{{ fr.DHUBP }}*** dans la section ***Sources de données***.
![Général – Afficher l'icône dans les champs](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2094.png)
1. Dans l'onglet ***Actions***, activer l'option ***Remplir automatiquement les identifiants au chargement*** en cochant la case à côté. Avec ce paramètre activé, les identifiants seront automatiquement remplis lors du chargement d'une page Web. Cela ne fonctionne que si vous avez un seul ensemble d'identifiants pour un site Web donné.
![Actions – Remplir automatiquement les identifiants au chargement](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2092.png)
   {% snippet, "badgeInfo" %}
   Si l'option ***Soumettre automatiquement le formulaire après le remplissage*** est activée, les identifiants sont automatiquement soumis lorsque les champs sont remplis. Son activation est optionnelle car ce n'est pas une meilleure pratique.
   {% endsnippet %}

7. Cliquer ***Enregistrer***.

Vous pouvez maintenant continuer à la section suivante pour apprendre à récupérer vos identifiants d'entrée de site Web.

## Récupération des identifiants

{% snippet, "badgeInfo" %}
Cette section est basée sur les étapes de configuration du {{ fr.WBEX }} de la section précédente. Nous vous recommandons vivement de les suivre avant de continuer, car certaines fonctionnalités peuvent différer entre votre expérience et ce qui est montré ci-dessous.
{% endsnippet %}

Les identifiants peuvent être récupérés depuis {{ fr.DHUBP }} automatiquement ou manuellement via le {{ fr.WBEX }}. Suivez les étapes de la section qui correspond le mieux à vos besoins :

### Récupération automatique des identifiants

1. Aller à la page de connexion du site Web auquel vous souhaitez accéder. Cette page sera différente pour chaque site Web ; cette section utilisera le site Web d'Atlassian comme exemple. Deux scénarios peuvent se produire :
    1. Si vous n'avez qu'un seul ensemble d'identifiants pour ce site Web, les champs de connexion doivent déjà être remplis avec vos identifiants. Si c'est le cas, suivre le processus de connexion du site Web jusqu'à ce que vous vous connectiez avec succès à votre compte. Vous n'avez pas besoin de suivre l'étape suivante.
![Champs d'identifiants remplis automatiquement](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2088.png)
{type="a"}
    1. Si vous avez plusieurs ensembles d'identifiants ou si vos identifiants ne sont pas remplis, cliquer sur l'icône {{ fr.WBEX }} dans le champ d'identifiants et sélectionner l'entrée qui contient vos identifiants pour ce site Web. Si plusieurs entrées sont disponibles, vous pouvez rechercher celle que vous voulez en utilisant la barre ***Filtre***. Suivre le reste du processus de connexion du site Web jusqu'à ce que vous vous connectiez avec succès à votre compte.
    ![Filtre et sélection d'entrée](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2184.png)

### Récupération manuelle des identifiants
Selon les options que vous avez activées/désactivées, vous devrez peut-être récupérer vos identifiants manuellement :

1. Aller à la page de connexion du site Web auquel vous souhaitez accéder. Cette page sera différente pour chaque site Web ; cette section utilisera le site Web d'Atlassian comme exemple.
1. Cliquer sur le {{ fr.WBEX }} dans votre navigateur. Les entrées de site Web liées à ce site Web apparaîtront.
1. Cliquer sur l'entrée de site Web qui contient les identifiants pour ce site Web. Si plusieurs entrées sont disponibles, vous pouvez utiliser la barre ***Filtre*** pour trouver celle dont vous avez besoin.
![Sélection d'entrée](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2096.png)

   {% snippet, "badgeInfo" %}
   Si nécessaire, vous pouvez également utiliser les icônes qui apparaissent lorsque vous survolez l'entrée pour copier votre nom d'utilisateur, copier votre mot de passe, ou obtenir un aperçu de l'entrée.
   {% endsnippet %}

4. Vos identifiants seront transférés aux champs d'identifiants du site Web. Suivre le reste du processus de connexion du site Web jusqu'à ce que vous vous connectiez avec succès à votre compte.
![Transfert des identifiants dans les champs correspondants](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2091.png)
```
