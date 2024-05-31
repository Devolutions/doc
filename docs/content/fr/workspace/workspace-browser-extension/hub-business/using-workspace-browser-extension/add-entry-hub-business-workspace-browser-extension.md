---
eleventyComputed:
  title: Ajouter une entrée de site Web dans {{ fr.DHUBB }} avec le {{ fr.WBEX }}
---
{% snippet, "badgeInfo" %}
Ce sujet explique comment créer une entrée avec vos identifiants de site Web existants. Si vous n'avez pas encore créé de compte pour le site Web, suivre les instructions dans [Créer un compte pour un site Web dans {{ fr.DHUBB }} avec le {{ fr.WBEX }}](/workspace/workspace-browser-extension/hub-business/using-workspace-browser-extension/create-account-website-hub-business/) à la place.
{% endsnippet %}

Les entrées de site Web peuvent être créées avec le {{ fr.WBEX }} dans {{ fr.DHUBB }}. Ce type d'entrée est utile pour sauvegarder vos identifiants de connexion afin de ne pas avoir à les mémoriser. Ces entrées sont également utilisées par le {{ fr.WBEX }} pour reconnaître un site Web et [récupérer vos identifiants](/workspace/workspace-browser-extension/hub-business/using-workspace-browser-extension/retrieve-credentials-hub-business/).

La principale manière d'y parvenir est de se connecter avec succès au site Web. Le {{ fr.WBEX }} proposera automatiquement de sauvegarder vos identifiants dans une nouvelle entrée de site Web dans {{ fr.DHUBB }}. Il est également possible de créer manuellement l'entrée de site Web.

Apprendre à ajouter une entrée de site Web en suivant les instructions de ces sections :

* [Ajouter automatiquement une entrée de site Web](#automatically-add-a-website-entry)
* [Ajouter manuellement une entrée de site Web](#manually-add-a-website-entry)

### Ajouter automatiquement une entrée de site Web
1. Aller à la page de connexion du site Web. Cette page sera différente pour chaque site Web ; ce sujet utilisera le site Web d'Atlassian comme exemple.
![Page de connexion](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2055.png)
1. Les sites Web demandent généralement des informations telles qu'une adresse e-mail/nom d'utilisateur et un mot de passe. Suivre le processus de connexion du site Web jusqu'à vous connecter à votre compte.
1. Une fenêtre ***Ajouter un site Web*** du {{ fr.WBEX }} apparaîtra dans le coin de votre navigateur Web.
![Ajouter un site Web](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2054.png)
1. Fournir un ***Nom*** pour l'entrée. Vous pouvez conserver le nom par défaut ou le changer, mais nous recommandons qu'il reflète le contenu de l'entrée afin qu'il soit plus facile à trouver lorsque nécessaire.
1. Sélectionner le ***{{ fr.VLT }}*** et le ***dossier*** dans lequel sauvegarder votre entrée de site Web.
1. Cliquer sur ***Sauvegarder***.

Vos identifiants sont maintenant sécurisés dans une nouvelle entrée de site Web dans {{ fr.DHUBB }}. La prochaine fois que vous vous connecterez au même compte, le {{ fr.WBEX }} le détectera et vous pourrez récupérer vos identifiants. Suivre nos instructions pas à pas pour [récupérer vos identifiants](/workspace/workspace-browser-extension/hub-business/using-workspace-browser-extension/retrieve-credentials-hub-business/).

### Ajouter manuellement une entrée de site Web
1. Aller à la page de connexion du site Web. Cette page sera différente pour chaque site Web ; ce sujet utilisera le site Web d'Atlassian comme exemple.
![!!Hub2055](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2055.png)
1. Cliquer sur l'icône du {{ fr.WBEX }} dans la barre d'outils de votre navigateur et, dans l'onglet ***Correspondant***, cliquer sur le bouton ***Ajouter un site Web***.
![Bouton Ajouter un site Web](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2057.png)
1. L'onglet ***Nouvelle entrée - Site Web*** du {{ fr.WBEX }} s'ouvrira dans votre navigateur.
![Nouvelle entrée - Site Web (Onglet Général)](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2132.png)
1. Fournir un ***Nom*** pour l'entrée. Vous pouvez conserver le nom par défaut ou le changer, mais nous recommandons qu'il reflète le contenu de l'entrée afin qu'il soit plus facile à trouver lorsque nécessaire.
1. Sélectionner le ***{{ fr.VLT }}*** et le ***dossier*** dans lequel sauvegarder vos identifiants.
1. La liste déroulante ***Hôte*** est réglée sur ***Personnalisé*** par défaut. Cela permet au {{ fr.WBEX }} de spécifier automatiquement l'***URL*** dans le champ suivant avec l'URL de la page de connexion de l'étape 1.
1. La liste déroulante ***Identifiants*** est réglée sur ***Personnalisé*** par défaut. Cela vous permet d'entrer manuellement votre ***Nom d'utilisateur***, ***Domaine*** et ***Mot de passe*** à l'étape suivante.
1. Fournir le ***Nom d'utilisateur***, ***Domaine*** et ***Mot de passe*** que vous utilisez pour vous connecter au site Web. Il se peut que vous n'ayez pas de nom de domaine à spécifier ; dans ce cas, laisser le champ vide. Aussi, selon le site Web, votre nom d'utilisateur peut être votre adresse e-mail.
1. Le ***Type de comparaison*** doit être à ***Défaut*** et le ***{{ fr.WBEX }}*** doit être ***Activé***.
1. Cliquer sur ***Ajouter***.

Vos identifiants sont maintenant sécurisés dans une nouvelle entrée de site Web dans {{ fr.DHUBB }}. La prochaine fois que vous vous connecterez au même compte, le {{ fr.WBEX }} le détectera et vous pourrez récupérer vos identifiants. Suivre nos instructions pas à pas pour [récupérer vos identifiants](/workspace/workspace-browser-extension/hub-business/using-workspace-browser-extension/retrieve-credentials-hub-business/).
