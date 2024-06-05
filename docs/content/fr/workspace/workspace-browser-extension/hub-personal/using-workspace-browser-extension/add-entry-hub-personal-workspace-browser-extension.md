---
eleventyComputed:
  title: Ajouter une entrée dans {{ fr.DHUBP }} avec le {{ fr.WBEX }}
---
Les entrées de site Web, de carte de crédit, de contact et de note sécurisée peuvent être créées avec le {{ fr.WBEX }} dans {{ fr.DHUBP }}. Pour ajouter une entrée de site Web, continuer à la section suivante. Pour tous les autres types d'entrées, aller à [Ajouter un autre type d'entrée](#ajouter-un-autre-type-d'entrée) à la place.

## Ajouter une entrée de site Web
{% snippet, "badgeInfo" %}
Cette section explique comment créer une entrée avec vos identifiants de site Web existants. Si vous n'avez pas encore créé de compte pour le site Web, suivre les instructions dans [Créer un compte pour un site Web dans {{ fr.DHUBP }} avec le {{ fr.WBEX }}](/workspace/workspace-browser-extension/hub-personal/using-workspace-browser-extension/create-account-website-hub-personal/) à la place.
{% endsnippet %}

L'entrée de site Web est utile pour sauvegarder vos identifiants de connexion afin de ne pas avoir à les mémoriser. Ces entrées sont également utilisées par le {{ fr.WBEX }} pour reconnaître un site Web et [récupérer vos identifiants](/workspace/workspace-browser-extension/hub-personal/using-workspace-browser-extension/retrieve-credentials-hub-personal/).

La principale manière d'y parvenir est de se connecter avec succès au site Web. Le {{ fr.WBEX }} proposera automatiquement de sauvegarder vos identifiants dans une nouvelle entrée de site Web dans {{ fr.DHUBP }}. Il est également possible de créer manuellement l'entrée de site Web.

Apprendre à ajouter une entrée de site Web en suivant les instructions de ces sections :

* [Ajouter automatiquement une entrée de site Web](#ajouter-automatiquement-une-entrée-de-site-web)
* [Ajouter manuellement une entrée de site Web](#ajouter-manuellement-une-entrée-de-site-web)

### Ajouter automatiquement une entrée de site Web
1. Aller à la page de connexion du site Web. Cette page sera différente pour chaque site Web ; ce sujet utilisera le site Web d'Atlassian comme exemple.
![!!Hub2055](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2055.png)
1. Les sites Web demandent généralement des informations telles qu'une adresse e-mail/nom d'utilisateur et un mot de passe. Suivre le processus de connexion du site Web jusqu'à vous connecter à votre compte.
1. Une fenêtre ***Ajouter un site Web*** du {{ fr.WBEX }} apparaîtra dans le coin de votre navigateur Web.
![!!Hub2069](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2069.png)
1. Fournir un ***Nom*** pour l'entrée. Vous pouvez conserver le nom par défaut ou le changer, mais nous recommandons qu'il reflète le contenu de l'entrée afin qu'il soit plus facile à trouver lorsque nécessaire.
1. Le ***Nom d'utilisateur*** et le ***Mot de passe*** sont automatiquement remplis avec les informations que vous avez précédemment saisies. Vérifier qu'ils sont corrects.
1. Sélectionner un ***Dossier*** dans lequel sauvegarder votre entrée de site Web.
1. Cliquer sur ***Enregistrer***.

Vos identifiants sont maintenant sécurisés dans une nouvelle entrée de site Web dans {{ fr.DHUBP }}. La prochaine fois que vous vous connecterez au même compte, le {{ fr.WBEX }} le détectera et vous pourrez récupérer vos identifiants. Suivre nos instructions pas à pas pour [récupérer vos identifiants](/workspace/workspace-browser-extension/hub-personal/using-workspace-browser-extension/retrieve-credentials-hub-personal/).

### Ajouter manuellement une entrée de site Web
1. Aller à la page de connexion du site Web. Cette page sera différente pour chaque site Web ; ce sujet utilisera le site Web d'Atlassian comme exemple.
![!!Hub2055](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2055.png)
1. Cliquer sur l'icône du {{ fr.WBEX }} dans la barre d'outils de votre navigateur et, dans l'onglet ***Correspondant***, cliquer sur le bouton ***Nouvelle entrée***.
![Nouvelle entrée](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2070.png)
1. Cliquer sur ***Site Web***.
![Nouvelle entrée de site Web](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2071.png)
1. L'onglet ***Nouvelle entrée – Ajouter un site Web*** du {{ fr.WBEX }} s'ouvrira dans votre navigateur.
![Nouvelle entrée – Site Web (Onglet Général)](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2135.png)
1. Fournir un ***Nom*** pour l'entrée. Vous pouvez conserver le nom par défaut ou le changer, mais nous recommandons qu'il reflète le contenu de l'entrée afin qu'il soit plus facile à trouver lorsque nécessaire.
1. Sélectionner un ***Dossier*** dans lequel sauvegarder vos identifiants.
1. La liste déroulante ***Hôte*** est réglée sur ***Personnalisé*** par défaut. Cela permet au {{ fr.WBEX }} de spécifier automatiquement l'***URL*** dans le champ suivant avec l'URL de la page de connexion de l'étape 1.
1. La liste déroulante ***Identifiants*** est réglée sur ***Personnalisé*** par défaut. Cela vous permet de saisir manuellement votre ***Nom d'utilisateur***, ***Domaine*** et ***Mot de passe*** à l'étape suivante.
1. Fournir le ***Nom d'utilisateur***, ***Domaine*** et ***Mot de passe*** que vous utilisez pour vous connecter au site Web. Vous n'avez peut-être pas de nom de domaine à spécifier ; dans ce cas, laisser le champ vide. Aussi, selon le site Web, votre nom d'utilisateur peut être votre adresse e-mail.
1. Le ***Type de comparaison*** doit être à ***Défaut*** et le ***{{ fr.WBEX }}*** doit être ***Activé***.
1. Cliquer sur ***Ajouter***.

Vos identifiants sont maintenant sécurisés dans une nouvelle entrée de site Web dans {{ fr.DHUBP }}. La prochaine fois que vous vous connecterez au même compte, le {{ fr.WBEX }} le détectera et vous pourrez récupérer vos identifiants. Suivre nos instructions pas à pas pour [récupérer vos identifiants](/workspace/workspace-browser-extension/hub-personal/using-workspace-browser-extension/retrieve-credentials-hub-personal/).

## Ajouter un autre type d'entrée
Vous pouvez ajouter manuellement des entrées ***Carte de Crédit***, ***Contact*** et ***Note Sécurisée*** dans {{ fr.DHUBP }} pour un accès facile via le {{ fr.WBEX }}.

Le processus est le même pour tous les types d'entrées, mais les informations à remplir seront différentes en raison de la nature de chaque type d'entrée. Suivre les étapes ci-dessous :

1. Cliquer sur l'icône du {{ fr.WBEX }} dans la barre d'outils de votre navigateur et, dans l'onglet ***Correspondant***, cliquer sur le bouton ***Nouvelle entrée***.
![Nouvelle entrée](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2070.png)
1. Cliquer sur le type d'entrée que vous souhaitez créer entre ***Carte de Crédit***, ***Contact*** et ***Note Sécurisée***. Pour une entrée ***Site Web***, suivre les étapes dans la [section précédente](#ajouter-une-entrée-de-site-web).
![Nouvelle entrée de Carte de Crédit, Contact ou Note Sécurisée](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2074.png)
1. L'onglet ***Nouvelle entrée*** du {{ fr.WBEX }} s'ouvrira dans votre navigateur. Comme exemple, l'image ci-dessous représente l'onglet pour une entrée de carte de crédit qui diffère légèrement des onglets pour les autres types d'entrées.
![Nouvelle entrée – Carte de Crédit (Onglet Général)](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2075.png)
1. Remplir les informations de votre entrée. Les seules informations obligatoires sont le ***Nom*** ; toutes les autres informations sont optionnelles, vous pouvez donc entrer uniquement les informations qui vous sont utiles. Nous recommandons également de spécifier le ***Dossier*** dans lequel votre entrée sera sauvegardée pour un accès facile.
   {% snippet, "badgeInfo" %}
   Pour une entrée ***Note Sécurisée***, vous pouvez spécifier un ***Type*** de texte pour votre note. À moins que vous ne sachiez utiliser le ***Markdown*** (un langage de balisage pour formater le texte), sélectionner ***Texte brut***.
   {% endsnippet %}
1. Cliquer sur ***Ajouter***.

Vos informations sont maintenant sécurisées dans une nouvelle entrée dans {{ fr.DHUBP }}.
