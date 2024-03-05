---
eleventyComputed:
  title: Barre de connexion rapide
---
La ***Barre de connexion rapide***, qui se trouve en haut de l'application, est composée de plusieurs parties :

* Icône du menu système.
* Commandes favorites.
* Contrôle de la Connexion rapide.
* Commande de verrouillage.

![Barre de connexion rapide](https://cdnweb.devolutions.net/docs/fr/rdm/windows/clip11177.png)

{% snippet icon.badgeInfo %}
Les boutons de la ***Barre de connexion rapide*** sont signalés localement sur la machine actuelle par l'utilisateur actuel. Ces boutons locaux sont enregistrés dans un fichier nommé ***RemoteDesktopManager.qtb***. Par défaut, ce fichier se trouve dans **%localappdata%\Devolutions\RemoteDesktopManager**.
{% endsnippet %}

### Commandes favorites

Les commandes contenues dans le ruban peuvent être ajoutées dans la barre de connexion rapide. Ce sont les commandes favorites. Pour ajouter une commande à la barre de connexion rapide, cliquer avec le bouton droit sur une icône du ruban et sélectionnez ***Ajouter***.
![Commandes favorites](https://cdnweb.devolutions.net/docs/fr/rdm/windows/clip11178.png)

<table>
	<tr>
		<th>

COMMANDES
		</th>
		<th>
DESCRIPTION
		</th>
	</tr>
	<tr>
		<td>
![!!RibbonAddSmall](https://cdnweb.devolutions.net/docs/common/RibbonAddSmall.png)
		</td>
		<td>
Créer une nouvelle entrée dans votre source de données actuelle.
		</td>
	</tr>
	<tr>
		<td>
![!!RibbonEditSmall](https://cdnweb.devolutions.net/docs/common/edit.png)
		</td>
		<td>
Ouvrir la fenêtre des propriétés de votre entrée sélectionnée
		</td>
	</tr>
	<tr>
		<td>
![!!RibbonRefreshSmall](https://cdnweb.devolutions.net/docs/common/refresh-large.png)
		</td>
		<td>
Actualiser votre source de données.
		</td>
	</tr>
	<tr>
		<td>
![!!RibbonSearchSmall](https://cdnweb.devolutions.net/docs/common/search.png)
		</td>
		<td>
Ouvrir la fenêtre de dialogue du filtre pour vous permettre d'effectuer une recherche rapide
		</td>
	</tr>
</table>

Cliquer avec le bouton droit sur une commande pour afficher le menu contextuel. Pour supprimer un élément de la barre de connexion rapide, cliquer avec le bouton droit sur l'élément et sélectionner ***Supprimer***. Pour ajouter un élément, cliquer avec le bouton droit sur un élément du ruban et sélectionnez ***Ajouter***. Utilisez-le pour personnaliser votre espace de travail selon vos préférences.

### Contrôle de la Connexion rapide

Veuillez vous référer à [***Connexion rapide***](/fr/rdm/windows/commands/view/view/quick-connect/) pour une description détaillée.

### Commande de verrouillage

Cette commande minimisera l'application. Lorsque vous tentez de la restaurer, vous serez invité à saisir le mot de passe. S'applique uniquement aux sources de données protégées par un mot de passe.

