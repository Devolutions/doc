---
title: Authentification de Site Web
status: Topic available in German language
---
La fonctionnalité de saisie automatique ne s’active pas systématiquement pour tous les sites Web. En effet, il faut garder à l’esprit que certains sites Web ne permettent pas la saisie automatique des identifiants.  

Quelques étapes sont nécessaires afin d’envoyer correctement les noms d’utilisateurs ainsi que les mots de passe. Ce processus peut être automatisé ou nécessiter des étapes supplémentaires en fonction du site Web.  

### Méthode 1 

### Se connecter automatiquement à un site Web 

1. Saisir les identifiants dans l'onglet ***Général*** de l'entrée ***Site Web*** .  
![!!KB2045.png](https://webdevolutions.azureedge.net/docs/fr/kb/KB2045.png)  

{% snippet icon.badgeInfo %} 
L'extension {{ fr.DWL }} est activée par défaut. Il est possible de la désactiver à partir du même onglet en sélectionnant ***Désactivée*** dans le menu déroulant ***{{ fr.DWL }}*** . 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
Le [***Type de correspondance***](/fr/kb/devolutions-web-login/how-to-articles/how-to-use-urls-comparing-types/) sert à déterminer si {{ fr.DWL }} doit considérer l'entrée valide pour la saisie automatique. 
{% endsnippet %}
 
2. Sélectionner ***Formulaire*** dans le menu déroulant ***Authentification*** de l'onglet ***Connexion*** . 
1. Vérifier que les options ***Remplissage automatique des identifiants*** et ***Soumission automatique*** sont activées dans l'onglet ***Connexion – Paramètres*** .  
![!!KB2046.png](https://webdevolutions.azureedge.net/docs/fr/kb/KB2046.png) 
<table>
	<tr>
		<th>
OPTION 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Nom d'utilisateur 
		</td>
		<td>
Entrer le nom d’utilisateur pour se connecter au site Web. 
		</td>
	</tr>
	<tr>
		<td>
Domaine 
		</td>
		<td>
Entrer le domaine pour se connecter au site Web. 
		</td>
	</tr>
	<tr>
		<td>
Mot de passe 
		</td>
		<td>
Entrer le mot de passe pour se connecter au site Web. 
		</td>
	</tr>
	<tr>
		<td>
Remplissage automatique des identifiants 
		</td>
		<td>
Remplir automatiquement les champs d’identification à l’ouverture de la page Web. 
		</td>
	</tr>
	<tr>
		<td>
Délai de remplissage automatique 
		</td>
		<td>
Définir un délai entre l’ouverture de la page Web et la tentative de remplissage automatique. 
		</td>
	</tr>
	<tr>
		<td>
Soumission automatique 
		</td>
		<td>
Définir un délai entre l’ouverture de la page Web et la tentative de remplissage automatique. 
		</td>
	</tr>
</table>

4. Dans l'onglet ***Connexion – ID du contrôle HTML*** , cliquer sur le bouton ***Découvrir*** pour définir les champs appropriés.  

![!!KB2047.png](https://webdevolutions.azureedge.net/docs/fr/kb/KB2047.png)  

La fonction ***Découvrir*** recherche dans la page Web les champs qui correspondent à ceux de l’entrée. Cela permet à l’application de trouver les champs appropriés à remplir lors de la connexion au site Web.  

Un fois toutes les étapes nécessaires complétées, au lancement de la session, les identifiants seront automatiquement saisis et connectés au site.  

### Méthode 2 

Cette deuxième méthode consiste à identifier manuellement les ID correspondant aux champs de connexion sur la page Web de connexion.  

Pour cet exemple, Google Chrome sera utilisé pour inspecter les champs de connexion.  

Vous devrez faire un clic droit dans les champs de nom d’utilisateur et de mot de passe du site Web et cliquer sur ***Inspecter*** .  

![!!KB2048.png](https://webdevolutions.azureedge.net/docs/fr/kb/KB2048.png)  

Vous verrez les ID correspondants à utiliser dans l'onglet ***ID du contrôle HTML*** de la session ***Site Web*** dans {{ fr.RDM }} .  

Vous trouverez ci-dessous un exemple d’inspection pour le champ Username . Vous pouvez y voir que l'ID du nom d'utilisateur est « username ».  

![!!KB2049.png](https://webdevolutions.azureedge.net/docs/fr/kb/KB2049.png) 

