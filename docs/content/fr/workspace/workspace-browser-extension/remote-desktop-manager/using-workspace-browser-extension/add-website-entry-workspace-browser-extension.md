---
eleventyComputed:
  title: Ajouter une entrée de site Web avec le {{ fr.WBEX }}
---
{% snippet, "badgeInfo" %}
Ce sujet explique comment créer une entrée avec vos identifiants de site Web existants. Si vous n'avez pas encore créé de compte pour le site Web, voir [Créer un compte pour un site Web avec le {{ fr.WBEX }}](/workspace/workspace-browser-extension/remote-desktop-manager/using-workspace-browser-extension/create-account-website/) à la place.
{% endsnippet %}

Il est possible de créer des entrées de site Web avec le {{ fr.WBEX }} dans {{ fr.RDM }}. Ce type d'entrée est utile pour sauvegarder vos identifiants de connexion afin de ne pas avoir à les mémoriser. Ces entrées sont également utilisées par le {{ fr.WBEX }} pour reconnaître un site Web et [récupérer vos identifiants](/workspace/workspace-browser-extension/remote-desktop-manager/using-workspace-browser-extension/retrieve-credentials/).

La principale manière d'y parvenir est de se connecter avec succès au site Web. Le {{ fr.WBEX }} proposera automatiquement de sauvegarder vos identifiants dans une nouvelle entrée de site Web dans {{ fr.RDM }}. Il est également possible de créer manuellement l'entrée de site Web.

Apprendre à ajouter une entrée de site Web en suivant les instructions de ces sections :

* [Ajouter automatiquement une entrée de site Web](#automatically-add-a-website-entry)
* [Ajouter manuellement une entrée de site Web](#manually-add-a-website-entry)

### Ajouter automatiquement une entrée de site Web

1. Aller à la page de connexion du site Web. Cette page sera différente pour chaque site Web ; ce sujet utilisera le site Web d'Atlassian comme exemple.
![Page de connexion](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2093.png)
1. Les sites Web demandent généralement des informations telles qu'une adresse e-mail/nom d'utilisateur et un mot de passe. Suivre le processus de connexion du site Web jusqu'à vous connecter à votre compte.
1. Une fenêtre ***Ajouter un site Web*** du {{ fr.WBEX }} apparaîtra dans le coin de votre navigateur Web.
![Ajouter un site Web](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2092.png)
1. Fournir un ***Nom*** pour l'entrée. Vous pouvez conserver le nom par défaut ou le changer, mais nous recommandons qu'il reflète le contenu de l'entrée afin qu'il soit plus facile à trouver lorsque nécessaire.
1. Fournir un ***Dossier de destination*** dans lequel sauvegarder votre entrée de site Web. Si vous laissez ce champ vide, l'entrée sera sauvegardée à la racine du {{ fr.VLT }}. Si le dossier que vous spécifiez n'existe pas, il sera créé en même temps que votre entrée.
1. Sélectionner si vous souhaitez sauvegarder votre entrée dans votre ***{{ fr.UVLT }}*** ou dans un ***{{ fr.VLT }}***. Notez que pour créer votre entrée dans le {{ fr.VLT }} de votre choix, le {{ fr.VLT }} correspondant doit actuellement être ouvert dans {{ fr.RDM }}.
1. Cliquer sur ***Sauvegarder***.

Vos identifiants sont maintenant sécurisés dans une nouvelle entrée de site Web dans {{ fr.RDM }}. La prochaine fois que vous vous connecterez au même compte, le {{ fr.WBEX }} le détectera et vous pourrez récupérer vos identifiants. Suivez nos instructions étape par étape pour [récupérer vos identifiants](/workspace/workspace-browser-extension/remote-desktop-manager/using-workspace-browser-extension/retrieve-credentials/).

### Ajouter manuellement une entrée de site Web

1. Aller à la page de connexion du site Web. Cette page sera différente pour chaque site Web ; ce sujet utilisera le site Web d'Atlassian comme exemple.
![Page de connexion](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2093.png)
1. Cliquer sur l'icône du {{ fr.WBEX }} dans votre navigateur et, dans l'onglet ***Correspondant***, cliquer sur le bouton ***Ajouter un site Web***.
![Bouton Ajouter un site Web](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2095.png)
1. L'onglet ***Ajouter un site Web*** du {{ fr.WBEX }} s'ouvrira dans votre navigateur.
![Ajouter un site Web](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2096.png)
1. Fournir un ***Nom*** pour l'entrée. Vous pouvez conserver le nom par défaut ou le changer, mais nous recommandons qu'il reflète le contenu de l'entrée afin qu'il soit plus facile à trouver lorsque nécessaire.
1. Le champ ***URL*** est automatiquement rempli avec l'URL de la page de connexion de l'étape 1.
1. Fournir le ***Nom d'utilisateur*** et le ***Mot de passe*** que vous utilisez pour vous connecter au site Web. Selon le site Web, votre nom d'utilisateur peut être votre adresse e-mail.
1. Fournir un ***Dossier de destination*** dans lequel sauvegarder votre entrée de site Web. Si vous laissez ce champ vide, l'entrée sera sauvegardée à la racine du {{ fr.VLT }}. Si le dossier que vous spécifiez n'existe pas, il sera créé en même temps que votre entrée.
1. Sélectionner si vous souhaitez sauvegarder votre entrée dans votre ***{{ fr.UVLT }}*** ou dans un ***{{ fr.VLT }}***. Notez que pour créer votre entrée dans le {{ fr.VLT }} de votre choix, le {{ fr.VLT }} correspondant doit actuellement être ouvert dans {{ fr.RDM }}.
1. Cliquer sur ***Sauvegarder***.

Vos identifiants sont maintenant sécurisés dans une nouvelle entrée de site Web dans {{ fr.RDM }}. La prochaine fois que vous vous connecterez au même compte, le {{ fr.WBEX }} le détectera et vous pourrez récupérer vos identifiants. Suivez nos instructions étape par étape pour [récupérer vos identifiants](/workspace/workspace-browser-extension/remote-desktop-manager/using-workspace-browser-extension/retrieve-credentials/).
