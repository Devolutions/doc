---
title: Analyseur de sécurité d'entrées
---
{% snippet icon.badgeInfo %} 
Les informations de cette rubrique décrivent le fonctionnement du mode « Legacy » d'analyse de mot de passe. Le mode peut être modifié dans les ***Paramètres Système*** pour ZXCVBN. Le mode « Legacy » n'est pas le mode par défaut. 
{% endsnippet %}
 
L'***Analyseur de sécurité d'entrées*** est disponible dans le menu ***Outils***. Il affichera l'indicateur de force pour tous les mots de passe stockés dans votre source de données.  

Un contrôle de l'analyseur est également affiché sous la plupart des champs d'entrées de mot de passe.  
![!!clip3448.png](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip3448.png) 

L'***Analyseur de sécurité d'entrées*** suit un ensemble de règles pour déterminer la force du mot de passe avec un score de 0 à 100. Il existe deux catégories de règles.  

### Renforcer 

Ce sont les règles qui renforcent les mots de passe :  

* La longueur du mot de passe 
* Le nombre de lettres majuscules (A-Z) 
* Le nombre de lettres minuscules (a-z) 
* Le nombre de chiffes (0-9) 
* Le nombre de symboles (!, @, #, $, etc.) 
* Le nombre de chiffres ou de symboles dans le milieu du mot de passe 
* Trois ou plusieurs des règles ci-dessus sont remplies 

Les conditions minimales exigées pour un mot de passe ***Fort*** sont :  

* Le mot de passe est au moins 5 caractères 
* Le mot de passe contient des majuscules et des caractères minuscules 
* Le mot de passe contient des chiffres 

### Affaiblir 

Ce sont les règles qui rendent les mots de passe plus faibles : 

* Le mot de passe ne contient que des lettres 
* Le mot de passe ne contient que des chiffres 
* Le mot de passe a des caractères répétés 
* Le mot de passe a des lettres majuscules consécutives (deux ou plus) 
* Le mot de passe a des lettres minuscules consécutives (deux ou plus) 
* Le mot de passe a des chiffres consécutifs (deux ou plus) 
* Le mot de passe a des lettres successives (ABCD, DCBA) 
* Le mot de passe à chiffres successifs (1234, 4321) 

## Paramètres 

![!!clip11340.png](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip11340.png) 

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
Afficher toutes les entrées 
		</td>
		<td>
Vous montre toutes les entrées de votre session, y compris ceux sans mot de passe. 
		</td>
	</tr>
	<tr>
		<td>
Afficher l'analyse de VPN 
		</td>
		<td>
Ajouter la colonne VPN. 
		</td>
	</tr>
	<tr>
		<td>
Afficher les mots de passe compromis (pwned) 
		</td>
		<td>
Montre si le mot de passe a été compromis (pwned). Un [mot de passe compromis (pwned)](/kb/remote-desktop-manager/how-to-articles/pwned-password-check/) est un mot de passe qui a été exposé lors de violations de données (c'est-à-dire qu'il appartient à des pirates). 
		</td>
	</tr>
	<tr>
		<td>
Modifier 
		</td>
		<td>
Ouvre l'entrée sélectionnée afin de pouvoir la modifier. 
		</td>
	</tr>
	<tr>
		<td>
Mots de passe interdits 
		</td>
		<td>
Créer une liste de mots de passe interdits. 
		</td>
	</tr>
	<tr>
		<td>
Paramètres d'exportation 
		</td>
		<td>
Exporter les paramètres de l'analyseur de mot de passe. 
		</td>
	</tr>
</table>


