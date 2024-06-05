---
eleventyComputed:
  title: Ajouter une entrée de site Web avec le {{ fr.WBEX }}
---
{% snippet, "badgeInfo" %}
Ce sujet explique comment créer une entrée avec vos identifiants de site Web existants. Si vous n'avez pas encore créé de compte pour le site Web, voir [Créer un compte pour un site Web avec le {{ fr.WBEX }}](/workspace/workspace-browser-extension/devolutions-server/using-workspace-browser-extension/create-account-website-workspace-browser-extension/) à la place.
{% endsnippet %}

Les entrées de site Web peuvent être créées avec le {{ fr.WBEX }} dans {{ fr.DVLS }}. Ce type d'entrée est utile pour sauvegarder vos identifiants de connexion afin de ne pas avoir à les mémoriser. Ces entrées sont également utilisées par le {{ fr.WBEX }} pour reconnaître un site Web et [récupérer vos identifiants](/workspace/workspace-browser-extension/devolutions-server/using-workspace-browser-extension/retrieve-credentials-workspace-browser-extension/).

La principale manière d'y parvenir est de se connecter avec succès au site Web. Le {{ fr.WBEX }} proposera automatiquement de sauvegarder vos identifiants dans une nouvelle entrée de site Web dans {{ fr.DVLS }}. Il est également possible de créer manuellement l'entrée de site Web.

## Ajouter une entrée de site Web

### Ajouter automatiquement une entrée de site Web
1. Aller à la page de connexion du site Web. Cette page sera différente pour chaque site Web ; ce sujet utilisera le site Web d'Atlassian comme exemple.
![Page de connexion](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2009.png)
1. Les sites Web demandent généralement des informations telles qu'une adresse e-mail/nom d'utilisateur et un mot de passe. Suivre le processus de connexion du site Web jusqu'à vous connecter à votre compte.
1. Une fenêtre ***Ajouter un site Web*** du {{ fr.WBEX }} apparaîtra dans le coin de votre navigateur Web.
![Ajouter un site Web](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2010.png)
1. Fournir un ***Nom*** pour l'entrée. Vous pouvez conserver le nom par défaut ou le changer, mais nous recommandons qu'il reflète le contenu de l'entrée afin qu'il soit plus facile à trouver lorsque nécessaire.
1. Sélectionner le ***{{ fr.VLT }}*** dans lequel vous souhaitez sauvegarder vos identifiants.
1. Fournir un ***Dossier de destination*** dans lequel sauvegarder votre entrée de site Web. Si vous laissez ce champ vide, l'entrée sera sauvegardée à la racine du {{ fr.VLT }}. Si le dossier que vous spécifiez n'existe pas, il sera créé en même temps que votre entrée.
1. Cliquer sur ***Enregistrer***.

Vos identifiants sont maintenant sécurisés dans une nouvelle entrée de site Web dans {{ fr.DVLS }}. La prochaine fois que vous vous connecterez au même compte, le {{ fr.WBEX }} le détectera et vous pourrez récupérer vos identifiants. Suivez nos instructions étape par étape pour [récupérer vos identifiants](/workspace/workspace-browser-extension/devolutions-server/using-workspace-browser-extension/retrieve-credentials-workspace-browser-extension/).

### Ajouter manuellement une entrée de site Web
1. Aller à la page de connexion du site Web. Cette page sera différente pour chaque site Web ; ce sujet utilisera le site Web d'Atlassian comme exemple.
![Page de connexion](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2009.png)
1. Cliquer sur l'icône du {{ fr.WBEX }} dans la barre d'outils de votre navigateur et, dans l'onglet ***Correspondant***, cliquer sur le bouton ***Ajouter un site Web***.
![Bouton Ajouter un site Web](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2011.png)
1. L'onglet ***Ajouter un site Web*** du {{ fr.WBEX }} s'ouvrira dans votre navigateur.
![Ajouter un site Web](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2049.png)
1. Fournir un ***Nom*** pour l'entrée. Vous pouvez conserver le nom par défaut ou le changer, mais nous recommandons qu'il reflète le contenu de l'entrée afin qu'il soit plus facile à trouver lorsque nécessaire.
1. Le champ ***URL*** est automatiquement rempli avec l'URL de la page de connexion de l'étape 1.
1. La liste déroulante ***Identifiants*** est réglée sur ***Personnalisé*** par défaut. Cela vous permet d'entrer manuellement votre ***Nom d'utilisateur*** et ***Mot de passe*** à l'étape suivante.
1. Fournir le ***Nom d'utilisateur*** et le ***Mot de passe*** que vous utilisez pour vous connecter au site Web. Selon le site Web, votre nom d'utilisateur peut être votre adresse e-mail.
1. Si désiré, entrer une ***Description*** de votre entrée.
1. Sélectionner le ***{{ fr.VLT }}*** dans lequel vous souhaitez sauvegarder vos identifiants.
1. Fournir un ***Dossier de destination*** dans lequel sauvegarder votre entrée de site Web. Si vous laissez ce champ vide, l'entrée sera sauvegardée à la racine du {{ fr.VLT }}. Si le dossier que vous spécifiez n'existe pas, il sera créé en même temps que votre entrée.
1. Cliquer sur ***Enregistrer***.

Vos identifiants sont maintenant sécurisés dans une nouvelle entrée de site Web dans {{ fr.DVLS }}. La prochaine fois que vous vous connecterez au même compte, le {{ fr.WBEX }} le détectera et vous pourrez récupérer vos identifiants. Suivez nos instructions étape par étape pour [récupérer vos identifiants](/workspace/workspace-browser-extension/devolutions-server/using-workspace-browser-extension/retrieve-credentials-workspace-browser-extension/).
