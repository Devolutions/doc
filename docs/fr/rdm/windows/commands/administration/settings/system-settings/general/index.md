---
title: Général
---
Les ***Paramètres du système*** sont disponibles dans ***Administration - Paramètres du système***.  

Les ***Paramètres du système*** vous permettent de contrôler de nombreux aspects globaux de la source de données, tels que le mode hors ligne, les politiques de mot de passe et la gestion des versions. Vous pouvez définir des stratégies générales applicables à l'ensemble de la source de données. 

{% snippet icon.shieldCaution %} 
Ces paramètres s'appliquent à tous les utilisateurs qui ont accès à la source de données. 
{% endsnippet %}
 
![Paramètres du système](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip10720.png) 

<table>
	<tr>
		<th>

{{ fr.VLT }} 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Permettre les Paramètres spécifiques de l'usager 
		</td>
		<td>
Permets l'utilisation des [Paramètres spécifiques de l'usager](/fr/rdm/windows/commands/edit/setting-overrides/specific-settings/). 
		</td>
	</tr>
	<tr>
		<td>
Autoriser nettoyage de base de données 
		</td>
		<td>
Permets de nettoyer les journaux et l'historique supprimé. 
		</td>
	</tr>
	<tr>
		<td>
Autoriser les raccourcis 
		</td>
		<td>
Autoriser la réitération des entrées via la fonction de raccourci. 
		</td>
	</tr>
	<tr>
		<td>
Permettre les états d'entrée (Verrouillée, Active, Réservée) 
		</td>
		<td>
Autoriser le verrouillage des entrées lorsqu'elles sont utilisées ou modifiées. 
		</td>
	</tr>
	<tr>
		<td>
Permettre les dossiers virtuels 
		</td>
		<td>
Permet de stocker des entrées dans des dossiers virtuels. (Non pris en charge avec {{ fr.DVLS }}.) 
		</td>
	</tr>
	<tr>
		<td>
Restitution automatique après 
		</td>
		<td>
Force les entrées à s'enregistrer automatiquement après un délai défini. 
		</td>
	</tr>
	<tr>
		<td>
Autoriser les sous entrées 
		</td>
		<td>
Autoriser les utilisateurs à créer des sous entrées. 
		</td>
	</tr>
	<tr>
		<td>
Permettre les favoris 
		</td>
		<td>
Autoriser les utilisateurs à créer des connexionx favorites. 
		</td>
	</tr>
	<tr>
		<td>
Autoriser le mode d'identifiants intégrés (obsolète) 
		</td>
		<td>
Intégrer une entrée d'***Identifiants*** dans l'entrée elle-même. Ce mode est obsolète et déconseillé. Veuillez consulter les autres [Options d'identifiants](/fr/rdm/windows/commands/edit/entries/entry-credentials-options/) disponibles. 
		</td>
	</tr>
	<tr>
		<td>
Ajouter un mode d'entrée 
		</td>
		<td>
Sélectionner si les utilisateurs sont invités à choisir un modèle lors de la création d'une nouvelle entrée. Choisir entre :  

* ***Par défaut*** 
* ***Liste des modèles (incluant les vides)*** 
* ***Liste des modèles seulement*** 
* ***Aucune sélection de modèle*** 
		</td>
	</tr>
</table>

<table>
	<tr>
		<th>
COMMENTAIRES 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Autoriser la modification des commentaires du journal 
		</td>
		<td>
Activer la modification du commentaire du journal pour tous les utilisateurs. 
		</td>
	</tr>
	<tr>
		<td>
Longueur minimale (caractères) 
		</td>
		<td>
Définir la longueur minimale (en caractères) autorisée pour les commentaires. 
		</td>
	</tr>
</table>

<table>
	<tr>
		<th>
TAILLE DU FICHIER 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Taille maximale du fichier (Mo) 
		</td>
		<td>
Limiter la taille des pièces jointes et des entrées de document pour éviter de surcharger la source de données. 
		</td>
	</tr>
</table>
