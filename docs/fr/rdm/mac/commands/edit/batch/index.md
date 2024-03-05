---
eleventyComputed:
  title: Modifier le lot
---
Utiliser l'option ***Modifier - Modifier le lot*** dans le menu contextuel ou le ruban pour modifier les paramètres de plusieurs sessions en une seule opération. Il peut être utilisé par exemple pour supprimer ou mettre à jour tous les identifiants d'un groupe de sessions.
![Modifier - Modifier le lot](https://cdnweb.devolutions.net/docs/fr/rdm/mac/clip4068.png)

Vous pouvez également modifier :

* Nom d'hôte
* Identifiants
* Mots de passe
* Paramètres généraux
* Paramètres du type de session
* Paramètres spécifiques de l'utilisateur
* Paramètres spécifiques locaux

## Recherche avancée

Vous pouvez sélectionner plusieurs entrées dans le ***{{ fr.NPANE }}***. Pour une méthode avec un peu plus de puissance, utiliser notre boîte de dialogue [Recheche avancée](/fr/rdm/mac/commands/view/advanced-search/), accessible depuis ***Affichage - Recherche avancée***. La recherche avancée vous permet de sélectionner plusieurs critères à la fois.
![Recherche avancée](https://cdnweb.devolutions.net/docs/fr/rdm/mac/clip5068.png)

Après avoir modifié vos critères pour obtenir les résultats souhaités, appuyer sur ***Sélectionner dans le {{ fr.NPANE }}***, puis sur ***Modifier - Modier par lot***.

## Paramètres

### Modifier le nom d'hôte enregistré

![Changer vos noms d'hôtes](https://cdnweb.devolutions.net/docs/fr/rdm/mac/clip0094.png)

Vous pouvez modifier plusieurs noms d'hôte en même temps.

### Modifier les identifiants sauvegardés

Vous pouvez modifier les identifiants configurés pour plusieurs sessions dans un lot.
![Modifier vos identifiants](https://cdnweb.devolutions.net/docs/fr/rdm/mac/clip5069.png)

<table>
	<tr>
		<td>
Option
		</td>
		<td>
Description
		</td>
	</tr>
	<tr>
		<td>
Utiliser des identifiants spécifiques
		</td>
		<td>
Utiliser un nom d'utilisateur, un mot de passe et un domaine spécifiques.
		</td>
	</tr>
	<tr>
		<td>
Utiliser le dépôt d'identifiants
		</td>
		<td>
Utiliser une entrée d'identifiants qui peut être liés avec des identifiants externes comme KeePass. Ceci est très utile pour partager ou réutiliser les identifiants existants entre les entrées.
		</td>
	</tr>
	<tr>
		<td>
Utilisation héritée
		</td>
		<td>
Utiliser les identifiants de son entrée ou groupe parent.
		</td>
	</tr>
	<tr>
		<td>
Utiliser mes identifiants personnels
		</td>
		<td>
Cela vous permet d'utiliser un seul ensemble d'identifiants pour remplacer ou émuler celles de votre session Windows.
		</td>
	</tr>
	<tr>
		<td>
Utiliser la recherche dans le {{ fr.UVLT }}
		</td>
		<td>
Utiliser les identifiants stockés dans votre {{ fr.UVLT }}.
		</td>
	</tr>
	<tr>
		<td>
Aucun
		</td>
		<td>
N'utiliser pas d'identifiants.
		</td>
	</tr>
</table>

### Réinitialiser tous les identifiants sauvegardés

Effacer tous les identifiants existants pour les sessions sélectionnées.

### Réinitialiser tous les mots de passe sauvegardés

Effacer tous les mots de passe existants pour les sessions sélectionnées.

### Modifier les entrées (paramètres généraux)

![Modifier les entrées (paramètres généraux)](https://cdnweb.devolutions.net/docs/fr/rdm/mac/clip4070.png)

***Modifier les entrées (paramètres généraux)*** vous permet de modifier simultanément les paramètres des sessions courantes. La session peut être de n'importe quel type, car un ensemble commun d'options est partagé entre les sessions. Les paramètres généraux communs suivants peuvent être modifiés :

* Dossier
* Affichage
* Image
* Description
* Tags
* VPN
* Événements
* Journaux
* Avancée

### Modifier les entrées (paramètres du type de session)

{% snippet icon.badgeInfo %}
***Modifier les entrées (paramètres du type de session)*** est disponible que pour des types de sessions spécifiques comme RDP.
{% endsnippet %}

![Modifier les entrées (paramètres du type de session)](https://cdnweb.devolutions.net/docs/fr/rdm/mac/clip4069.png)

### Modifier les entrées (paramètres spécifiques de l'utilisateur)

Les ***Paramètres spécifiques à l'utilisateur*** peuvent être modifiés dans un lot s'ils sont pris en charge par le type de session.
![Modifier les entrées (paramètres spécifiques de l'utilisateur)](https://cdnweb.devolutions.net/docs/fr/rdm/mac/clip4073.png)

### Modifier les entrées (groupe de sécurité)

Utiliser l'option ***Modifier les entrées (groupe de sécurité)*** pour appliquer un nouveau groupe de sécurité sur plusieurs sessions.
![Modifier les entrées (groupe de sécurité)](https://cdnweb.devolutions.net/docs/fr/rdm/mac/clip0100.png)
