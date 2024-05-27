---
eleventyComputed:
  title: Actions
---
L'onglet ***Actions*** est disponible seulement lorsqu'une session est ouverte. Les actions disponibles diffèrent selon l'action.

Pour notre exemple, nous exécutons une session RDP. Le ruban affichera l'onglet suivant lorsque la session s'exécute avec le mode d'affichage Intégré (tabulé).
![Ruban - Actions](https://cdnweb.devolutions.net/docs/fr/rdm/windows/clip11288.png)

### Connexion

<table>
	<tr>
		<th>
OPTION
		</th>
		<th>
DESCRIPTION
		</th>
	</tr>
		<td>
Reconnecter
		</td>
		<td>
Fermer rapidement la session, puis la rouvrir automatiquement. À utiliser pour mettre à jour la résolution de vos connexions RDP intégrées lorsque vous redimensionnez la fenêtre.
		</td>
	</tr>
		<td>
Fermer
		</td>
		<td>
Fermer la session active.
		</td>
	</tr>
		<td>
Se déconnecter
		</td>
		<td>
Fermer la session RDP.
		</td>
	</tr>
		<td>
Reconnecter tout
		</td>
		<td>
Fermer rapidement les sessions, puis les rouvrir automatiquement.
		</td>
	</tr>
</table>

### Actions

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
Exécuter
		</td>
		<td>
Exécuter la macro ou le script sélectionné dans la fenêtre précédente ou dans l'onglet actuel. Ceci n'est disponible que lorsqu'il y a quelque chose à exécuter.
		</td>
	</tr>
	<tr>
		<td>
Macros/Scripts
		</td>
		<td>
Affiche une fenêtre dans laquelle vous pouvez sélectionner une macro ou un script, ainsi que les options d'exécution.
		</td>
	</tr>
	<tr>
		<td>
Presse-papiers tapé
		</td>
		<td>
Envoie le contenu du presse-papiers à la session ouverte.
		</td>
	</tr>
</table>

### Affichage

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
Désancrer
		</td>
		<td>
Désancrer votre session intégrée et déplacez-la n'importe où en dehors de {{ fr.RDM }} ou même sur un autre moniteur.
		</td>
	</tr>
	<tr>
		<td>
Intégré
		</td>
		<td>
Re-intégrer votre session lorsque votre session est désancré. Cette option apparaîtra que si votre session est déjà en mode intégré.
		</td>
	</tr>
	<tr>
		<td>
Plein écran
		</td>
		<td>
Afficher votre session en plein écran en dehors de {{ fr.RDM }}.
		</td>
	</tr>
	<tr>
		<td>
Écran de la zone de travail
		</td>
		<td>
Ce mode vous permet d'ouvrir la connexion en plein écran, mais aussi d'avoir accès à votre barre des tâches locale.
		</td>
	</tr>
</table>

### Paramètres

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
Conserver onglet à la déconnexion
		</td>
		<td>
Votre onglet de session restera après une déconnexion de session.
		</td>
	</tr>
	<tr>
		<td>
Dimensionnement intelligent
		</td>
		<td>
Activer ou désactiver le dimensionnement intelligent d'une RDP. Ce paramètre déterminera si l'ordinateur client peut ou non mettre à l'échelle le contenu de l'ordinateur distant pour l'adapter à la taille de la fenêtre de l'ordinateur client.
		</td>
	</tr>
	<tr>
		<td>
Reconnexion intelligente
		</td>
		<td>
Reconnecter automatiquement votre session avec la bande la plus appropriée.
		</td>
	</tr>
	<tr>
		<td>
Touche Windows sur l'ordinateur distant
		</td>
		<td>
Lorsque vous activez la touche Windows, il enverra la fonction à votre hôte au lieu de l'exécuter sur votre ordinateur.
		</td>
	</tr>
</table>

### Commandes

Cet onglet contient plusieurs types de commandes et combinaisons de touches pour affecter la session en cours dans une variété d'instances. En tant que telles, ces commandes dépendent de l'entrée actuellement sélectionnée (et ouverte).

{% snippet, "badgeInfo" %}
Les modules complémentaires de session peuvent ajouter une commande personnalisée dans cette section, ils ne seront pas documentés dans ces rubriques, mais plutôt dans la documentation du module complémentaire.
{% endsnippet %}

### Capture d'écran

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
Envoyer vers le presse-papier
		</td>
		<td>
Effectuer une capture typique dans le presse-papiers.
		</td>
	</tr>
	<tr>
		<td>
Sauvegarder au dossier
		</td>
		<td>
Demande un nom de fichier et enregistre la capture dans ce fichier.
		</td>
	</tr>
	<tr>
		<td>
Sauvegarder au dossier et ouvrir
		</td>
		<td>
Demande un nom de fichier et enregistre la capture dans ce fichier, puis ouvre automatiquement le fichier à l'aide de votre éditeur par défaut.
		</td>
	</tr>
</table>

### Vidéo

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
Commencer l'enregistrement
		</td>
		<td>
Enregistre votre écran en format MP4. Nous vous recommandons d'utiliser un lecteur VLC pour visualiser la vidéo enregistrée.
		</td>
	</tr>
</table>

Alternativement, ces actions sont également disponibles en cliquant avec le bouton droit sur l'onglet d'une session intégrée.
![Menu Actions d'une session intégré](https://cdnweb.devolutions.net/docs/fr/rdm/windows/clip10184.png)
