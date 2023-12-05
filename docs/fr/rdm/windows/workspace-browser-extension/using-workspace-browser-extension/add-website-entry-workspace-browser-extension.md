---
eleventyComputed:
  title: Ajouter une entrée de site Web avec {{ fr.DWL }}
---
{% snippet icon.badgeInfo %} 
Cette rubrique explique comment créer une entrée à partir de vos identifiants de site Web existants. Si vous n'avez pas encore créé de compte pour le site Web, consultez plutôt [Créer un compte de site Web avec {{ fr.DWL }}](/fr/rdm/windows/dwl/using-devolutions-web-login/create-account-website/). 
{% endsnippet %}
 
Des entrées de site Web peuvent être créées avec {{ fr.DWL }} dans {{ fr.RDM }}. Ce type d'entrée est utile pour enregistrer vos identifiants de connexion afin que vous n'ayez plus à les mémoriser. Ces entrées sont également utilisées par {{ fr.DWL }} pour reconnaître un site Web et [récupérer vos identifiants](/fr/rdm/windows/dwl/using-devolutions-web-login/retrieve-credentials/).  

La principale façon d'y parvenir est de se connecter avec succès au site Web. {{ fr.DWL }} proposera automatiquement d'enregistrer vos identifiants dans une nouvelle entrée de site Web dans {{ fr.RDM }}. Il est également possible de créer manuellement l'entrée de site Web.  

Suivez les instructions dans les sections ci-dessous pour apprendre à ajouter une entrée de site Web :  

* [Ajouter automatiquement une entrée de site Web](#ajouter-automatiquement-une-entrée-de-site-web) 
* [Ajouter manuellement une entrée de site Web](#ajouter-manuellement-une-entrée-de-site-web) 

### Ajouter automatiquement une entrée de site Web 

1. Aller à la page de connexion du site Web. Cette page sera différente pour chaque site Web; cette rubrique utilisera le site Web d'Atlassian comme exemple.  
![Page de connexion](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/RDMWin2100.png) 
1. Les sites Web demandent généralement des informations telles qu'une adresse courriel / un nom d'utilisateur et un mot de passe. Suivre le processus de connexion du site Web jusqu'à la connexion à votre compte. 
1. Une fenêtre ***Ajouter un site Web*** de {{ fr.DWL }} apparaîtra dans le coin du navigateur Web.  
![Ajouter un site Web](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/RDMWin2101.png) 
1. Saisir un ***Nom*** pour l'entrée. Le nom par défaut peut être gardé ou modifié, mais il est recommandé qu'il reflète le contenu de l'entrée pour la retrouver plus facilement au besoin. 
1. Saisir un ***Dossier de destination*** dans lequel sauvegarder l'entrée de site Web. Si ce champ reste vide, l'entrée sera sauvegardée à la racine du {{ fr.VLT }}. Si le dossier spécifié n'existe pas, il sera créé en même temps que l'entrée. 
1. Spécifier si vous souhaitez enregistrer votre entrée dans votre ***{{ fr.UVLT }}*** ou dans un ***{{ fr.VLT }}***. Notez que pour créer votre entrée dans le {{ fr.VLT }} de votre choix, le {{ fr.VLT }} correspondant doit être actuellement ouvert dans {{ fr.RDM }}. 
1. Cliquer sur ***Enregistrer***. 

Vos identifiants sont maintenant stockés sécuritairement dans une nouvelle entrée de site Web dans {{ fr.RDM }}. La prochaine fois que vous vous connecterez à ce compte, {{ fr.DWL }} le détectera et récupérera vos identifiants. Suivez nos instructions étape par étape pour [récupérer vos identifiants](/fr/rdm/windows/dwl/using-devolutions-web-login/retrieve-credentials/). 

### Ajouter manuellement une entrée de site Web 

1. Aller à la page de connexion du site Web. Cette page sera différente pour chaque site Web; cette rubrique utilisera le site Web d'Atlassian comme exemple.  
![Page de connexion](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/RDMWin2100.png) 
1. Cliquer sur l'extension {{ fr.DWL }} dans la barre d'outils de votre navigateur, puis, dans l'onglet ***Correspondant***, cliquer sur le bouton ***Ajouter un site Web***.  
![Bouton Ajouter un site Web](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/RDMWin2102.png) 
1. L'onglet ***Ajouter un site Web*** de {{ fr.DWL }} s'ouvrira dans votre navigateur.  
![Ajouter un site Web](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/RDMWin2090.png) 
1. Saisir un ***Nom*** pour l'entrée. Le nom par défaut peut être gardé ou modifié, mais il est recommandé qu'il reflète le contenu de l'entrée pour la retrouver plus facilement au besoin. 
1. Le champ ***URL*** est automatiquement rempli avec l'URL de la page de connexion de l'étape 1. 
1. Saisir le ***Nom d'utilisateur*** et le ***Mot de passe*** qui sont utilisés pour se connecter à ce site Web. Dépendamment du site Web, le nom d'utilisateur pourrait être une adresse courriel. 
1. Saisir un ***Dossier de destination*** dans lequel sauvegarder l'entrée de site Web. Si ce champ reste vide, l'entrée sera sauvegardée à la racine du {{ fr.VLT }}. Si le dossier spécifié n'existe pas, il sera créé en même temps que l'entrée. 
1. Spécifier si vous souhaitez enregistrer votre entrée dans votre ***{{ fr.UVLT }}*** ou dans un ***{{ fr.VLT }}***. Notez que pour créer votre entrée dans le {{ fr.VLT }} de votre choix, le {{ fr.VLT }} correspondant doit être actuellement ouvert dans {{ fr.RDM }}. 
1. Cliquer sur ***Enregistrer***. 

Vos identifiants sont maintenant stockés sécuritairement dans une nouvelle entrée de site Web dans {{ fr.RDM }}. La prochaine fois que vous vous connecterez à ce compte, {{ fr.DWL }} le détectera et récupérera vos identifiants. Suivez nos instructions étape par étape pour [récupérer vos identifiants](DevolutionsWebLogin_RetrieveCredentials_2).
