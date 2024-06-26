---
eleventyComputed:
  title: Configuration d'Okta
---
Les étapes suivantes décriront comment configurer Okta en tant qu'authentificateur pour {{ fr.DVLS }}

## Prérequis

* Souscrire à Okta.
* Configurer une application Web utilisant OIDC sur Okta.
* Configurer un jeton Api dans Okta.

## Termes

Dans ce sujet, nous supposerons que votre instance de {{ fr.DVLS }} est configurée en HTTPS, que l'application web est {{ fr.DVLS }} et qu'elle est donc servie sous l'URL https<area>://www.contoso.com/dvls.

## Configuration d'une application dans Okta

![!!KB4069](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4069.png)

1. Se connecter à votre compte d'administration Okta.
1. Aller à ***Applications*** dans le sous-menu ***Applications*** et cliquer sur le bouton ***Créer une intégration d'application***.
![!!KB4105](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4105.png)
1. Dans la section ***Méthode de connexion***, sélectionner ***OIDC - OpenID Connect***.
1. Dans la section ***Type d'application***, sélectionner ***Application à page unique***.
1. Cliquer sur ***Suivant*** pour continuer.
![!!KB4106](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4106.png)
1. Dans la page ***Nouvelle intégration d'application à page unique*** présentant la configuration de la nouvelle application :

    a. Tout d'abord, nommer l'application dans le champ ***Nom de l'intégration d'application*** pour la retrouver dans votre liste d'applications dans Okta.

    b. Laisser l'option ***Type d'autorisation*** à ***Code d'autorisation***.

    c. Ajouter l'URI dans la section ***URI de redirection de connexion***. Dans notre exemple, nous avons ajouté https<area>://www.contoso.com/dvls/api/external-provider-response

    d. Vous pouvez laisser les sections ***URI de redirection de déconnexion*** et ***Origines de confiance*** vides. Le {{ fr.DVLS }} ne déconnecte pas votre utilisateur du périmètre de l'application et le formulaire de connexion Okta n'est pas hébergé sur {{ fr.DVLS }} donc ils ne sont pas nécessaires.

    e. Dans la section ***Attributions***, nous recommandons de sélectionner ***Permettre à tout le monde dans votre organisation d'accéder*** puis de cocher ***Activer l'accès immédiat avec le mode de courtage de fédération***. Cela vous évitera d'avoir à attribuer chaque utilisateur à l'application manuellement.

    f. Cliquer sur ***Enregistrer***.
![!!KB4128](https://cdnweb.devolutions.net/docs/INTERFACE2054.png)

## Configuration d'une clé API dans Okta

1. Dans le menu latéral gauche, aller à ***Sécurité - Api***.
1. Dans l'onglet ***Jetons***, cliquer sur le bouton ***Créer un jeton***.
![!!KB4216](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4216.png)
1. Nommer le jeton pour le retrouver dans votre liste puis cliquer sur ***Créer un jeton***.
![!!KB4195](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4195.png)
1. Une fois créé, copier la ***Valeur du jeton*** dans un endroit sûr.

{% snippet, "badgeCaution" %}
Si vous ne copiez pas la ***Valeur du jeton***, vous ne pourrez pas la retrouver par la suite. Vous devrez en créer un nouveau.
{% endsnippet %}

{% snippet, "badgeInfo" %}
Le jeton hérite des droits de l'utilisateur qui le crée. C'est important car votre utilisateur doit pouvoir lister les groupes et les utilisateurs. Okta recommande la création d'un ***Utilisateur de service*** pour la création de jetons Api. Vous pouvez en savoir plus sur le sujet sur le site d'Okta depuis [Créer un jeton API](https://developer.okta.com/docs/guides/create-an-api-token/main/).
{% endsnippet %}

![!!KB4143](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4143.png)

## Configuration de l'authentification et de la synchronisation des utilisateurs et des groupes dans Okta

Une fois l'application et le jeton Api créés, vous pouvez configurer l'interface web de {{ fr.DVLS }}.

1. Se connecter à l'instance {{ fr.DVLS }} avec un compte administrateur.
1. Aller à ***Administration - Paramètres du serveur - Authentification***.
1. Cocher ***Authentification avec utilisateur Okta***.
1. Dans la section ***Configuration***, cliquer sur ***Authentification Okta***.
![!!KB4229](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4229.png)
1. Optionnel : Vous pouvez saisir une information dans le champ ***Nom affiché***. Cela remplacera le mot ***Okta*** dans la page de connexion.
1. Dans la section ***Configuration de l'authentification***, entrer votre ***Domaine*** Okta.
{% snippet, "badgeInfo" %}
Pour trouver votre ***Domaine***, aller à votre compte Okta. Dans le coin supérieur droit de l'écran, cliquer sur votre menu utilisateur. Votre domaine devrait être visible.
{% endsnippet %}

![!!KB4141](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4141.png)
1. Dans la même section de {{ fr.DVLS }}, remplir le champ ***ID client*** avec l'***ID client*** de votre application.
![!!KB4129](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4129.png)
1. Dans la section ***Synchroniser les utilisateurs et les groupes***, remplir le ***Jeton Api*** sauvegardé plus tôt.
1. Enfin, si vous le souhaitez, vous pouvez activer la ***Création automatique d'utilisateur***. Cela évitera à l'administrateur d'avoir à importer les ***Utilisateurs*** manuellement dans {{ fr.DVLS }} avant qu'ils puissent se connecter avec Okta. Vous pouvez également sélectionner un ***Groupe d'utilisateurs***. Dans ce cas, seuls les ***Utilisateurs*** de ce groupe pourront bénéficier de la création automatique.
1. Cliquer sur le bouton ***Enregistrer***.
![!!KB4142](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4142.png)
Vous pourrez maintenant observer que le bouton permettant de vous connecter à Okta est maintenant présent dans la page de connexion.