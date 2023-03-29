---
eleventyComputed:
  title: Ajouter une entrée dans {{ fr.PHUB }} Personal par {{ fr.DWL }}
---
Des entrées de site Web, de carte de crédit, de contact et de note sécurisé peuvent être créées avec {{ fr.DWL }} dans {{ fr.PHUB }} Personal. Pour ajouter une entrée de site Web, vous pouvez continuer à la [prochaine section](#ajouter-une-entrée-de-site-web) . Pour tout autre type d&apos;entrée, consultez plutôt [cette section](#ajouter-un-autre-type-dentrée) .  

## Ajouter une entrée de site Web 

{% snippet icon.badgeInfo %} 
Cette section explique comment créer une entrée à partir de vos identifiants de site Web existants. Si vous n&apos;avez pas encore créé de compte pour le site Web, consultez plutôt notre rubrique sur la façon de [Créer un compte de site Web avec {{ fr.DWL }}](/fr/hub/dwl/using-devolutions-web-login/using-dwl-with-hub-personal/create-account-website-hub-personal/) . 
{% endsnippet %}
 
L&apos;entrée de site Web est utile pour enregistrer vos identifiants de connexion afin que vous n&apos;ayez plus à les mémoriser. Ces entrées sont également utilisées par {{ fr.DWL }} pour reconnaître un site Web et [récupérer vos identifiants](/fr/hub/dwl/using-devolutions-web-login/using-dwl-with-hub-personal/retrieve-credentials-hub-personal/) .  

La principale façon d&apos;y parvenir est de se connecter avec succès au site Web. {{ fr.DWL }} proposera automatiquement d&apos;enregistrer vos identifiants dans une nouvelle entrée de site Web dans {{ fr.PHUB }} Personal. Il est également possible de créer manuellement l&apos;entrée de site Web.  

Suivez les instructions dans les sections ci-dessous pour apprendre à ajouter une entrée de site Web :  

* [Ajouter automatiquement une entrée de site Web](#ajouter-automatiquement-une-entrée-de-site-web) 
* [Ajouter manuellement une entrée de site Web](#ajouter-manuellement-une-entrée-de-site-web) 

### Ajouter automatiquement une entrée de site Web 

1. Aller à la page de connexion du site Web. Cette page sera différente pour chaque site Web; cette rubrique utilisera le site Web d&apos;Atlassian comme exemple.  
![Page de connexion](/img/fr/hub/Hub2109.png) 
1. Les sites Web demandent généralement des informations telles qu&apos;une adresse courriel / un nom d&apos;utilisateur et un mot de passe. Suivre le processus de connexion du site Web jusqu&apos;à la connexion à votre compte. 
1. Une fenêtre ***Ajouter un site Web*** de {{ fr.DWL }} apparaîtra dans le coin du navigateur Web.  
![Ajouter un site Web](/img/fr/hub/Hub2112.png) 
1. Saisir un ***Nom*** pour l&apos;entrée. Le nom par défaut peut être gardé ou modifié, mais il est recommandé qu&apos;il reflète le contenu de l&apos;entrée pour la retrouver plus facilement au besoin. 
1. Les champs ***Nom d&apos;utilisateur*** et ***Mot de passe*** sont automatiquement remplis avec les informations précédemment saisies. Vérifier qu&apos;ils sont exacts. 
1. Sélectionner le ***Dossier*** dans lequel sauvegarder l&apos;entrée de site Web. 
1. Cliquer sur ***Enregistrer*** .  

Vos identifiants sont maintenant stockés sécuritairement dans une nouvelle entrée de site Web dans {{ fr.PHUB }} Personal. La prochaine fois que vous vous connecterez à ce compte, {{ fr.DWL }} le détectera et récupérera vos identifiants. Suivez nos instructions étape par étape pour [récupérer vos identifiants](/fr/hub/dwl/using-devolutions-web-login/using-dwl-with-hub-personal/retrieve-credentials-hub-personal/) .  

### Ajouter manuellement une entrée de site Web 

1. <a name="1"></a>Aller à la page de connexion du site Web. Cette page sera différente pour chaque site Web; cette rubrique utilisera le site Web d&apos;Atlassian comme exemple.  
![Page de connexion](/img/fr/hub/Hub2109.png) 
1. Cliquer sur l&apos;extension {{ fr.DWL }} dans la barre d&apos;outils de votre navigateur, puis, dans l&apos;onglet ***Correspondant*** , cliquer sur le bouton ***Nouvelle entrée*** .  
![Bouton Nouvelle entrée](/img/fr/hub/Hub2113.png) 
1. Cliquer sur ***Site Web*** .  
![Nouvelle entrée de Site Web](/img/fr/hub/Hub2114.png) 
1. L&apos;onglet ***Nouvelle entrée - Site Web*** de {{ fr.DWL }} s&apos;ouvrira dans votre navigateur.  
![Nouvelle entrée - Site Web (onglet Général)](/img/fr/hub/Hub2092.png) 
1. Saisir un ***Nom*** pour l&apos;entrée. Le nom par défaut peut être gardé ou modifié, mais il est recommandé qu&apos;il reflète le contenu de l&apos;entrée pour la retrouver plus facilement au besoin. 
1. Sélectionner un ***Dossier*** dans lequel sauvegarder vos identifiants. 
1. La liste déroulante ***Hôte*** est définie à ***Personnalisé*** par défaut. Cela permet à {{ fr.DWL }} de spécifier automatiquement l&apos; ***URL*** dans le champ suivant avec l&apos;URL de la page de connexion de l&apos; <a href="#1">étape 1</a>. 
1. La liste déroulante ***Identifiants*** est définie à ***Personnalisé*** par défaut. Cela permet d&apos;entrer manuellement le ***Nom d&apos;utilisateur*** , le ***Domaine*** et le ***Mot de passe*** à l&apos;étape suivante. 
1. Saisir le ***Nom d&apos;utilisateur*** , le ***Domaine*** et le ***Mot de passe*** qui sont utilisés pour se connecter à ce site Web. Il est possible qu&apos;il n&apos;y ait pas de nom de domaine à spécifier; dans ce cas, laisser le champ vide. Également, dépendamment du site Web, le nom d&apos;utilisateur pourrait être une adresse courriel. 
1. Le ***Type de correspondance*** devrait être défini à ***Par défaut*** et ***{{ fr.DWL }}*** devrait être ***Activé*** . 
1. Cliquer sur ***Enregistrer*** .  

Vos identifiants sont maintenant stockés sécuritairement dans une nouvelle entrée de site Web dans {{ fr.PHUB }} Personal. La prochaine fois que vous vous connecterez à ce compte, {{ fr.DWL }} le détectera et récupérera vos identifiants. Suivez nos instructions étape par étape pour [récupérer vos identifiants](/fr/hub/dwl/using-devolutions-web-login/using-dwl-with-hub-personal/retrieve-credentials-hub-personal/) .  

## Ajouter un autre type d&apos;entrée 

Vous pouvez manuellement ajouter des entrées de ***Carte de crédit*** , de ***Contact*** et de ***Note sécurisée*** dans {{ fr.PHUB }} Personal pour un accès rapide à partir de l&apos;extension de navigateur {{ fr.DWL }} .  

Le processus est le même pour tous les types d&apos;entrées, mais les informations à remplir seront différentes en raison de la nature de chaque type d&apos;entrée. Suivez les étapes ci-dessous :  

1. Cliquer sur l&apos;extension {{ fr.DWL }} dans la barre d&apos;outils de votre navigateur, puis, dans l&apos;onglet ***Correspondant*** , cliquer sur le bouton ***Nouvelle entrée*** .  
![Bouton Nouvelle entrée](/img/fr/hub/Hub2113.png) 
1. Cliquer sur le type d&apos;entrée à créer entre ***Carte de crédit*** , ***Contact*** et ***Note sécurisée*** . Pour une entrée de ***Site Web*** , suivre les étapes de la [section précédente](#ajouter-une-entrée-de-site-web) .  
![Nouvelle entrée de Carte de crédit, de Contact ou de Note sécurisée](/img/fr/hub/Hub2115.png) 
1. L&apos;onglet ***Nouvelle entrée*** de {{ fr.DWL }} s&apos;ouvrira dans votre navigateur. À titre d&apos;exemple, l&apos;image ci-dessous représente l&apos;onglet pour une entrée de carte de crédit qui diffère légèrement des onglets d&apos;autres types d&apos;entrées.  
![Nouvelle entrée - Carte de crédit (onglet Général)](/img/fr/hub/Hub2116.png) 
1. Remplir les informations relatives à votre entrée. La seule information obligatoire est le ***Nom*** ; toutes les autres informations sont facultatives, vous pouvez donc saisir uniquement les informations qui vous sont utiles. Nous vous recommandons d&apos;indiquer également le ***Dossier*** dans lequel votre entrée sera sauvegardée pour un accès facile.  

{% snippet icon.badgeInfo %} 
Pour une entrée de ***Note sécurisée*** , vous pouvez spécifier un ***Type*** de texte pour votre note. À moins que vous ne sachiez utiliser ***Markdown*** (un langage de balisage pour le formatage du texte), sélectionnez ***Texte brut*** . 
{% endsnippet %}
 
5. Cliquer sur ***Ajouter*** .  

Vos informations sont maintenant stockées en toute sécurité dans une nouvelle entrée dans {{ fr.PHUB }} Personal. 

