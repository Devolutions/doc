---
  title: Permissions
keywords:
- Rôle
---
Le panneau ***Permissions*** se trouve dans toutes les propriétés d'entrée de la section ***Sécurité – Permissions***.  

Il est également possible d'autoriser les administrateurs à accorder des permissions administratives aux utilisateurs standard sans en faire des administrateurs avec les [Permissions du système](/fr/server/web-interface/administration/configuration/system-permissions/).  

Le système d'autorisations basé sur les groupes d'utilisateurs peut donner un contrôle très précis de la sécurité. Voici un aperçu de la fenêtre des permissions :  

![Sécurité - Permissions](https://webdevolutions.azureedge.net/docs/fr/server/clip8046.png)  

<table>
	<tr>
		<th>
Option 
		</th>
		<th>
Description 
		</th>
	</tr>
	<tr>
		<td>
Permission 
		</td>
		<td>

Définis le mode de permission. Dois être défini sur ***Personnalisé*** afin de modifier les permissions ci-dessous. Choisir entre :  

* ***Par défaut*** : Héritera des permissions des groupes parents. 
* ***Personnalisé*** : Vous permet de spécifier une valeur personnalisée pour chacune des permissions. 
* Tout le monde : Tout le monde aura toutes les permissions ci-dessous. 
* ***Jamais*** : Personne d'autre que les administrateurs ne recevra les permissions. 
		</td>
	</tr>
	<tr>
		<td>
Général 
		</td>
		<td>
Vous permet de choisir à qui vous souhaitez accorder des permissions. Ces zones de liste déroulante sont disponibles uniquement si la permission ci-dessus est définie sur ***Personnalisé***. Choisir entre :  

* ***Hérité (Autorisé)*** : Héritera des permissions des groupes/dossiers parents. 
* ***Personnalisé*** : Vous permet de spécifier une valeur personnalisée pour la permission. 
* ***Tout le monde*** : Tout le monde aura la permission. 
* ***Jamais*** : Personne d'autre que les administrateurs n'auront la permission. 
		</td>
	</tr>
	<tr>
		<td>
Sélecteur Utilisateurs/Groupes d'utilisateurs 
		</td>
		<td>
Vous permet de sélectionner les utilisateurs/groupes d'utilisateurs pour lesquels la permission est accordée. Disponible uniquement si la permission est définie sur ***Personnalisé***. 
		</td>
	</tr>
</table>

### Général 

![Permissions - Général](https://webdevolutions.azureedge.net/docs/fr/server/clip8047.png)  

<table>
	<tr>
		<th>

Option 
		</th>
		<th>
Description 
		</th>
	</tr>
	<tr>
		<td>
Permission 
		</td>
		<td>
Définis le mode de permission. Il doit être défini sur ***Personnalisé*** pour pouvoir modifier les permissions individuellement. 
		</td>
	</tr>
	<tr>
		<td>
Affichage 
		</td>
		<td>
Autoriser les utilisateurs/groupes d'utilisateurs à afficher les entrées. 
		</td>
	</tr>
	<tr>
		<td>
Ajouter 
		</td>
		<td>
Autoriser les utilisateurs/groupes d'utilisateurs à ajouter les entrées. 
		</td>
	</tr>
	<tr>
		<td>
Édition 
		</td>
		<td>
Autoriser les utilisateurs/groupes d'utilisateurs à modifier les entrées. 
		</td>
	</tr>
	<tr>
		<td>
Supprimer 
		</td>
		<td>
Autoriser les utilisateurs/groupes d'utilisateurs à supprimer les entrées. 
		</td>
	</tr>
	<tr>
		<td>
Afficher le mot de passe 
		</td>
		<td>
Autoriser les utilisateurs/groupes d'utilisateurs à afficher le mot de passe les entrées. 
		</td>
	</tr>
	<tr>
		<td>
Exécuter 
		</td>
		<td>
Autoriser les utilisateurs/groupes d'utilisateurs à ouvrir les entrées. 
		</td>
	</tr>
</table>

### Sécurité 

![Permissions - Sécurité](https://webdevolutions.azureedge.net/docs/fr/server/clip8048.png)  

<table>
	<tr>
		<th>
Option 
		</th>
		<th>
Description 
		</th>
	</tr>
	<tr>
		<td>
Modifier les permissions 
		</td>
		<td>
Autoriser les utilisateurs/groupes d'utilisateurs à modifier les permissions. 
		</td>
	</tr>
	<tr>
		<td>
Historique des entrées 
		</td>
		<td>
Autoriser les utilisateurs/groupes d'utilisateurs à afficher et à utiliser l'historique des entrées. 
		</td>
	</tr>
	<tr>
		<td>
Historique des mots de passe 
		</td>
		<td>
Autoriser les utilisateurs/groupes d'utilisateurs à afficher l'historique des mots de passe. 
		</td>
	</tr>
</table>

### Plus

![Permissions - Plus](https://webdevolutions.azureedge.net/docs/fr/server/clip8049.png)  

<table>
	<tr>
		<th>
Option 
		</th>
		<th>
Description 
		</th>
	</tr>
	<tr>
		<td>
Outils à distance 
		</td>
		<td>
Autoriser les utilisateurs/groupes d'utilisateurs à utiliser les outils à distance. 
		</td>
	</tr>
	<tr>
		<td>
Inventaire 
		</td>
		<td>
Autoriser les utilisateurs/groupes d'utilisateurs à utiliser l'outil de rapport d'inventaire 
		</td>
	</tr>
</table>

### Pièces jointes 

![Permissions - Pièces jointes](https://webdevolutions.azureedge.net/docs/fr/server/clip8050.png)  

<table>
	<tr>
		<th>
Option 
		</th>
		<th>
Description 
		</th>
	</tr>
	<tr>
		<td>
Afficher les pièces jointes 
		</td>
		<td>
Autoriser les utilisateurs/groupes d'utilisateurs à afficher les pièces jointes. 
		</td>
	</tr>
	<tr>
		<td>
Ajouter/modifier/supprimer les pièces jointes 
		</td>
		<td>
Autoriser les utilisateurs/groupes d'utilisateurs à ajouter/modifier/supprimer des pièces jointes. 
		</td>
	</tr>
</table>

### Documentation 

![Permissions - Documentation](https://webdevolutions.azureedge.net/docs/fr/server/clip8051.png)  

<table>
	<tr>
		<th>
Option 
		</th>
		<th>
Description 
		</th>
	</tr>
	<tr>
		<td>
Afficher la documentation 
		</td>
		<td>
Autoriser les utilisateurs/groupes d'utilisateurs à afficher la documentation. 
		</td>
	</tr>
	<tr>
		<td>
Modifier la documentation 
		</td>
		<td>
Autoriser les utilisateurs/groupes d'utilisateurs à modifier la documentation. 
		</td>
	</tr>
</table>
