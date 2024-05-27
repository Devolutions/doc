---
eleventyComputed:
  title: Ajouter une entrée dans {{ fr.DHUBP }} par le {{ fr.WBEX }}
---
Des entrées de site Web, de carte de crédit, de contact et de note sécurisé peuvent être créées avec le {{ fr.WBEX }} dans {{ fr.DHUBP }}. Pour ajouter une entrée de site Web, vous pouvez continuer à la prochaine section. Pour tout autre type d'entrée, consultez plutôt [Ajouter un autre type d'entrée](#ajouter-un-autre-type-dentrée).

## Ajouter une entrée de site Web

{% snippet, "badgeInfo" %}
Cette section explique comment créer une entrée à partir de vos identifiants de site Web existants. Si vous n'avez pas encore créé de compte pour le site Web, consultez plutôt [Créer un compte de site Web avec le {{ fr.WBEX }}](/fr/hub/workspace-browser-extension/using-workspace-browser-extension/using-workspace-browser-extension-with-hub-personal/create-account-website-hub-personal/).
{% endsnippet %}

L'entrée de site Web est utile pour enregistrer vos identifiants de connexion afin que vous n'ayez plus à les mémoriser. Ces entrées sont également utilisées par le {{ fr.WBEX }} pour reconnaître un site Web et [récupérer vos identifiants](/fr/hub/workspace-browser-extension/using-workspace-browser-extension/using-workspace-browser-extension-with-hub-personal/retrieve-credentials-hub-personal/).

La principale façon d'y parvenir est de se connecter avec succès au site Web. Le {{ fr.WBEX }} proposera automatiquement d'enregistrer vos identifiants dans une nouvelle entrée de site Web dans {{ fr.DHUBP }}. Il est également possible de créer manuellement l'entrée de site Web.

Suivez les instructions dans les sections ci-dessous pour apprendre à ajouter une entrée de site Web :

* [Ajouter automatiquement une entrée de site Web](#ajouter-automatiquement-une-entrée-de-site-web)
* [Ajouter manuellement une entrée de site Web](#ajouter-manuellement-une-entrée-de-site-web)

### Ajouter automatiquement une entrée de site Web

1. Aller à la page de connexion du site Web. Cette page sera différente pour chaque site Web; cette rubrique utilisera le site Web d'Atlassian comme exemple.
![Page de connexion](https://cdnweb.devolutions.net/docs/fr/hub/Hub2109.png)
1. Les sites Web demandent généralement des informations telles qu'une adresse courriel / un nom d'utilisateur et un mot de passe. Suivre le processus de connexion du site Web jusqu'à la connexion à votre compte.
1. Une fenêtre ***Ajouter un site Web*** du {{ fr.WBEX }} apparaîtra dans le coin du navigateur Web.
![Ajouter un site Web](https://cdnweb.devolutions.net/docs/fr/hub/Hub2112.png)
1. Saisir un ***Nom*** pour l'entrée. Le nom par défaut peut être gardé ou modifié, mais il est recommandé qu'il reflète le contenu de l'entrée pour la retrouver plus facilement au besoin.
1. Les champs ***Nom d'utilisateur*** et ***Mot de passe*** sont automatiquement remplis avec les informations précédemment saisies. Vérifier qu'ils sont exacts.
1. Sélectionner le ***Dossier*** dans lequel sauvegarder l'entrée de site Web.
1. Cliquer sur ***Enregistrer***.

Vos identifiants sont maintenant stockés sécuritairement dans une nouvelle entrée de site Web dans le {{ fr.DHUBP }}. La prochaine fois que vous vous connecterez à ce compte, le {{ fr.WBEX }} le détectera et récupérera vos identifiants. Suivez nos instructions étape par étape pour [récupérer vos identifiants](/fr/hub/workspace-browser-extension/using-workspace-browser-extension/using-workspace-browser-extension-with-hub-personal/retrieve-credentials-hub-personal/).

### Ajouter manuellement une entrée de site Web

1. <a name="1"></a>Aller à la page de connexion du site Web. Cette page sera différente pour chaque site Web; cette rubrique utilisera le site Web d'Atlassian comme exemple.
![Page de connexion](https://cdnweb.devolutions.net/docs/fr/hub/Hub2109.png)
1. Cliquer sur le {{ fr.WBEX }} dans la barre d'outils de votre navigateur, puis, dans l'onglet ***Correspondant***, cliquer sur le bouton ***Nouvelle entrée***.
![Bouton Nouvelle entrée](https://cdnweb.devolutions.net/docs/fr/hub/Hub2113.png)
1. Cliquer sur ***Site Web***.
![Nouvelle entrée de Site Web](https://cdnweb.devolutions.net/docs/fr/hub/Hub2114.png)
1. L'onglet ***Nouvelle entrée - Site Web*** du {{ fr.WBEX }} s'ouvrira dans votre navigateur.
![Nouvelle entrée - Site Web (onglet Général)](https://cdnweb.devolutions.net/docs/fr/hub/Hub2092.png)
1. Saisir un ***Nom*** pour l'entrée. Le nom par défaut peut être gardé ou modifié, mais il est recommandé qu'il reflète le contenu de l'entrée pour la retrouver plus facilement au besoin.
1. Sélectionner un ***Dossier*** dans lequel sauvegarder vos identifiants.
1. La liste déroulante ***Hôte*** est définie à ***Personnalisé*** par défaut. Cela permet au {{ fr.WBEX }} de spécifier automatiquement l'***URL*** dans le champ suivant avec l'URL de la page de connexion de l'<a href="#1">étape 1</a>.
1. La liste déroulante ***Identifiants*** est définie à ***Personnalisé*** par défaut. Cela permet d'entrer manuellement le ***Nom d'utilisateur***, le ***Domaine*** et le ***Mot de passe*** à l'étape suivante.
1. Saisir le ***Nom d'utilisateur***, le ***Domaine*** et le ***Mot de passe*** qui sont utilisés pour se connecter à ce site Web. Il est possible qu'il n'y ait pas de nom de domaine à spécifier; dans ce cas, laisser le champ vide. Également, dépendamment du site Web, le nom d'utilisateur pourrait être une adresse courriel.
1. Le ***Type de correspondance*** devrait être défini à ***Par défaut*** et ***{{ fr.WBEX_MAJ }}*** devrait être ***Activé***.
1. Cliquer sur ***Enregistrer***.

Vos identifiants sont maintenant stockés sécuritairement dans une nouvelle entrée de site Web dans {{ fr.DHUBP }}. La prochaine fois que vous vous connecterez à ce compte, le {{ fr.WBEX }} le détectera et récupérera vos identifiants. Suivez nos instructions étape par étape pour [récupérer vos identifiants](/fr/hub/workspace-browser-extension/using-workspace-browser-extension/using-workspace-browser-extension-with-hub-personal/retrieve-credentials-hub-personal/).

## Ajouter un autre type d'entrée

Vous pouvez manuellement ajouter des entrées de ***Carte de crédit***, de ***Contact*** et de ***Note sécurisée*** dans {{ fr.DHUBP }} pour un accès rapide à partir du {{ fr.WBEX }}.

Le processus est le même pour tous les types d'entrées, mais les informations à remplir seront différentes en raison de la nature de chaque type d'entrée. Suivez les étapes ci-dessous :

1. Cliquer sur le {{ fr.WBEX }} dans la barre d'outils de votre navigateur, puis, dans l'onglet ***Correspondant***, cliquer sur le bouton ***Nouvelle entrée***.
![Bouton Nouvelle entrée](https://cdnweb.devolutions.net/docs/fr/hub/Hub2113.png)
1. Cliquer sur le type d'entrée à créer entre ***Carte de crédit***, ***Contact*** et ***Note sécurisée***. Pour une entrée de ***Site Web***, suivre les étapes de la [section précédente](#ajouter-une-entrée-de-site-web).
![Nouvelle entrée de Carte de crédit, de Contact ou de Note sécurisée](https://cdnweb.devolutions.net/docs/fr/hub/Hub2115.png)
1. L'onglet ***Nouvelle entrée*** du {{ fr.WBEX }} s'ouvrira dans votre navigateur. À titre d'exemple, l'image ci-dessous représente l'onglet pour une entrée de carte de crédit qui diffère légèrement des onglets d'autres types d'entrées.
![Nouvelle entrée - Carte de crédit (onglet Général)](https://cdnweb.devolutions.net/docs/fr/hub/Hub2116.png)
1. Remplir les informations relatives à votre entrée. La seule information obligatoire est le ***Nom***; toutes les autres informations sont facultatives, vous pouvez donc saisir uniquement les informations qui vous sont utiles. Nous vous recommandons d'indiquer également le ***Dossier*** dans lequel votre entrée sera sauvegardée pour un accès facile.

{% snippet, "badgeInfo" %}
Pour une entrée de ***Note sécurisée***, vous pouvez spécifier un ***Type*** de texte pour votre note. À moins que vous ne sachiez utiliser ***Markdown*** (un langage de balisage pour le formatage du texte), sélectionnez ***Texte brut***.
{% endsnippet %}

5. Cliquer sur ***Ajouter***.

Vos informations sont maintenant stockées en toute sécurité dans une nouvelle entrée dans {{ fr.DHUBP }}.
