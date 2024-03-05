---
eleventyComputed:
  title: Ajouter une entrée de site Web avec le {{ fr.WBEX }}
---
{% snippet icon.badgeInfo %}
Cette rubrique explique comment créer une entrée à partir de vos identifiants de site Web existants. Si vous n'avez pas encore créé de compte pour le site Web, consultez plutôt [Créer un compte de site Web avec le {{ fr.WBEX }}](/fr/rdm/mac/workspace-browser-extension/using-workspace-browser-extension/create-account-website/).
{% endsnippet %}

Des entrées de site Web peuvent être créées avec le {{ fr.WBEX }} dans {{ fr.RDMMAC }}. Ce type d'entrée est utile pour enregistrer vos identifiants de connexion afin que vous n'ayez plus à les mémoriser. Ces entrées sont également utilisées par le {{ fr.WBEX }} pour reconnaître un site Web et [récupérer vos identifiants](/fr/rdm/mac/workspace-browser-extension/using-workspace-browser-extension/retrieve-credentials/).

La principale façon d'y parvenir est de se connecter avec succès au site Web. Le {{ fr.WBEX }} proposera automatiquement d'enregistrer vos identifiants dans une nouvelle entrée de site Web dans {{ fr.RDMMAC }}. Il est également possible de créer manuellement l'entrée de site Web.

Suivez les instructions dans les sections ci-dessous pour apprendre à ajouter une entrée de site Web :

* [Ajouter automatiquement une entrée de site Web](#ajouter-automatiquement-une-entrée-de-site-web)
* [Ajouter manuellement une entrée de site Web](#ajouter-manuellement-une-entrée-de-site-web)

### Ajouter automatiquement une entrée de site Web

1. Aller à la page de connexion du site Web. Cette page sera différente pour chaque site Web; cette rubrique utilisera le site Web d'Atlassian comme exemple.
![Page de connexion](https://cdnweb.devolutions.net/docs/fr/rdm/mac/RDMMac2032.png)
1. Les sites Web demandent généralement des informations telles qu'une adresse courriel / un nom d'utilisateur et un mot de passe. Suivre le processus de connexion du site Web jusqu'à la connexion à votre compte.
1. Une fenêtre ***Ajouter un site Web*** du {{ fr.WBEX }} apparaîtra dans le coin du navigateur Web.
![Ajouter un site Web](https://cdnweb.devolutions.net/docs/fr/rdm/mac/RDMMac2030.png)
1. Saisir un ***Nom*** pour l'entrée. Le nom par défaut peut être gardé ou modifié, mais il est recommandé qu'il reflète le contenu de l'entrée pour la retrouver plus facilement au besoin.
1. Saisir un ***Dossier de destination*** dans lequel sauvegarder l'entrée de site Web. Si ce champ reste vide, l'entrée sera sauvegardée à la racine du {{ fr.VLT }}. Si le dossier spécifié n'existe pas, il sera créé en même temps que l'entrée.
1. Spécifier si vous souhaitez enregistrer votre entrée dans votre ***{{ fr.UVLT }}*** ou dans un ***{{ fr.VLT }}***. Notez que pour créer votre entrée dans le {{ fr.VLT }} de votre choix, le {{ fr.VLT }} correspondant doit être actuellement ouvert dans {{ fr.RDMMAC }}.
1. Cliquer sur ***Enregistrer***.

Vos identifiants sont maintenant stockés sécuritairement dans une nouvelle entrée de site Web dans {{ fr.RDMMAC }}. La prochaine fois que vous vous connecterez à ce compte, le {{ fr.WBEX }} le détectera et récupérera vos identifiants. Suivez nos instructions étape par étape pour [récupérer vos identifiants](/fr/rdm/mac/workspace-browser-extension/using-workspace-browser-extension/retrieve-credentials/).

### Ajouter manuellement une entrée de site Web

1. <a name="1"></a>Aller à la page de connexion du site Web. Cette page sera différente pour chaque site Web; cette rubrique utilisera le site Web d'Atlassian comme exemple.
![Page de connexion](https://cdnweb.devolutions.net/docs/fr/rdm/mac/RDMMac2032.png)
1. Cliquer sur le {{ fr.WBEX }} dans la barre d'outils de votre navigateur, puis, dans l'onglet ***Correspondant***, cliquer sur le bouton ***Ajouter un site Web***.
![Bouton Ajouter un site Web](https://cdnweb.devolutions.net/docs/fr/rdm/mac/RDMMac2034.png)
1. L'onglet ***Ajouter un site Web*** du {{ fr.WBEX }} s'ouvrira dans votre navigateur.
![Ajouter un site Web](https://cdnweb.devolutions.net/docs/fr/rdm/mac/RDMMac2033.png)
1. Saisir un ***Nom*** pour l'entrée. Le nom par défaut peut être gardé ou modifié, mais il est recommandé qu'il reflète le contenu de l'entrée pour la retrouver plus facilement au besoin.
1. Le champ ***URL*** est automatiquement rempli avec l'URL de la page de connexion de l'<a href="#1">étape 1</a>.
1. Saisir le ***Nom d'utilisateur*** et le ***Mot de passe*** qui sont utilisés pour se connecter à ce site Web. Dépendamment du site Web, le nom d'utilisateur pourrait être une adresse courriel.
1. Saisir un ***Dossier de destination*** dans lequel sauvegarder l'entrée de site Web. Si ce champ reste vide, l'entrée sera sauvegardée à la racine du {{ fr.VLT }}. Si le dossier spécifié n'existe pas, il sera créé en même temps que l'entrée.
1. Spécifier si vous souhaitez enregistrer votre entrée dans votre ***{{ fr.UVLT }}*** ou dans un ***{{ fr.VLT }}***. Notez que pour créer votre entrée dans le {{ fr.VLT }} de votre choix, le {{ fr.VLT }} correspondant doit être actuellement ouvert dans {{ fr.RDMMAC }}.
1. Cliquer sur ***Enregistrer***.

Vos identifiants sont maintenant stockés sécuritairement dans une nouvelle entrée de site Web dans {{ fr.RDMMAC }}. La prochaine fois que vous vous connecterez à ce compte, le {{ fr.WBEX }} le détectera et récupérera vos identifiants. Suivez nos instructions étape par étape pour [récupérer vos identifiants](/fr/rdm/mac/workspace-browser-extension/using-workspace-browser-extension/retrieve-credentials/).
