---
eleventyComputed:
  title: Coffres PAM {{ fr.VLT }}
  order: 30
  description: Les coffres PAM {{ fr.VLT }} sont l'une des fonctionnalités clés du module de gestion des accès privilégiés de {{ fr.DHUB }}. Ce sont des coffres {{ fr.VLT }} sécurisés qui permettent de gérer tous vos différents comptes privilégiés.
---
Les coffres PAM {{ fr.VLT }} sont l'une des fonctionnalités clés du module de gestion des accès privilégiés de {{ fr.DHUB }}. Ce sont des coffres {{ fr.VLT }} sécurisés qui permettent de gérer tous vos différents comptes privilégiés.

## Créer un coffre PAM {{ fr.VLT }}

Créer un coffre PAM {{ fr.VLT }} via l'interface web de {{ fr.DHUB }} n'est pas très différent de créer un coffre {{ fr.VLT }} ordinaire. Dans ***Administration – Coffres {{ fr.VLT_MAJ }}***, cliquer sur ***Ajouter (+)***, puis ***Ajouter un coffre PAM {{ fr.VLT }}*** comme montré dans l'image ci-dessous.

![Ajouter un coffre PAM {{ fr.VLT }}](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2288.png)

Alternativement, vous pouvez également créer un coffre PAM {{ fr.VLT }} via le sélecteur de coffre du ***{{ fr.NPANE }}*** en cliquant sur le bouton des points de suspension et en sélectionnant ***Ajouter un coffre PAM {{ fr.VLT }}***.

![Ajouter un coffre PAM {{ fr.VLT }} via le {{ fr.NPANE }}](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2289.png)

## Configuration du coffre PAM {{ fr.VLT }}

De toute façon, vous êtes maintenant présenté avec la fenêtre de configuration pour votre coffre PAM {{ fr.VLT }}.

![Configuration du coffre PAM {{ fr.VLT }}](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2290.png)

Commencer par entrer un ***Nom*** pour votre coffre PAM {{ fr.VLT }} (obligatoire) et une ***Description*** (facultatif). Ensuite, définir sa visibilité :
* ***Par défaut*** : Se réfère à la visibilité du coffre {{ fr.VLT }} définie dans ***Administration – Configuration & Sécurité – Paramètres Système – Coffres {{ fr.VLT_MAJ }}***.
* ***Privé*** : Un coffre PAM {{ fr.VLT }} privé n'est pas visible pour les utilisateurs qui n'y ont pas accès. Ainsi, les demandes d'accès au coffre {{ fr.VLT }} ne peuvent pas être effectuées. Vous pouvez uniquement y accéder par invitation.
* ***Public*** : Un coffre {{ fr.VLT }} public est visible pour tous les utilisateurs de la source de données, même pour ceux qui n'y ont pas accès. Un utilisateur peut demander l'accès au coffre {{ fr.VLT }} public.

{% snippet, "badgeHelp" %}
Pour plus d'informations sur l'accès au coffre {{ fr.VLT }} et la visibilité, visiter [Accès au coffre {{ fr.VLT_MAJ }} dans {{ fr.DHUBB }}](/hub/web-interface/vault-access/).
{% endsnippet %}

Dans les ***Paramètres de mot de passe***, choisir d'utiliser le modèle de mot de passe du fournisseur ou sélectionner un modèle personnalisé.

{% snippet, "badgeCaution" %}
Si vous utilisez un modèle personnalisé, assurez-vous qu'il suit les politiques de mot de passe du fournisseur.
{% endsnippet %}

Sous ***Permissions***, vous pouvez voir un aperçu de vos rôles et permissions et les modifier.

{% snippet, "badgeNotice" %}
Assurez-vous de donner les bonnes permissions à vos utilisateurs pour qu'ils puissent utiliser les comptes privilégiés que vous ajouterez plus tard au coffre PAM {{ fr.VLT }}.

Nous recommandons le rôle ***Opérateur privilégié***, car il contient les permissions minimales requises pour pouvoir utiliser et accéder aux entrées de comptes privilégiés, à savoir ***Voir le coffre {{ fr.VLT }}***, ***Connecter (Exécuter)***, ***Voir le mot de passe***, et ***Voir sensible***. La différence entre le rôle ***Opérateur privilégié*** et ***Opérateur*** est que ce dernier n'inclut pas la permission ***Voir le mot de passe***, qui est nécessaire pour pouvoir utiliser les comptes privilégiés.

Alternativement, vous pouvez assigner un rôle spécifique au niveau de l'entrée de compte privilégié et juste donner l'accès au coffre {{ fr.VLT }} lui-même.
{% endsnippet %}

Lorsque vous cliquez sur ***Ajouter*** en bas des paramètres, le nouveau coffre PAM {{ fr.VLT }} sera créé. Vous pouvez le trouver dans ***Administration – Coffres {{ fr.VLT_MAJ }}***. Le nombre de coffres PAM {{ fr.VLT }} est également affiché en haut.

![Liste des coffres {{ fr.VLT_MAJ }}](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2291.png)

Vous pouvez accéder à tous vos coffres {{ fr.VLT }} via le sélecteur de coffre dans le ***{{ fr.NPANE }}***.

![Sélecteur de coffres {{ fr.VLT_MAJ }}](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2292.png)

{% snippet, "badgeHelp" %}
L'étape suivante consiste à ajouter des comptes privilégiés à votre nouveau coffre PAM {{ fr.VLT }}. Visiter [Comptes privilégiés](/pam/privileged-accounts/index/) pour plus d'informations.
{% endsnippet %}
