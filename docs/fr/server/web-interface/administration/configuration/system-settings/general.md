---
title: Général
keywords:
- Coffre privé
---
La section ***Général*** des ***Paramètres du système*** permet aux administrateurs d&apos;appliquer des politiques générales pour l&apos;ensemble de la source de données.  
![Administration – Paramètres du système](/img/fr/server/clip10372.png) 

### Général 

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
Permettre les paramètres spécifiques de l&apos;usager 
		</td>
		<td>
Autoriser les utilisateurs à enregistrer les paramètres spécifiques à l&apos;usager. 
		</td>
	</tr>
	<tr>
		<td>
Permettre les états d&apos;entrée (Verrouillée, Active, Réservée) 
		</td>
		<td>
Autoriser le verrouillage des entrées lorsqu&apos;elles sont utilisées ou modifiées. 
		</td>
	</tr>
	<tr>
		<td>
Restitution automatique après 
		</td>
		<td>
Restitution automatique d&apos;une session réservée après le temps définit. 
		</td>
	</tr>
	<tr>
		<td>
Ajouter un mode d&apos;entrée 
		</td>
		<td>
Sélectionner si les utilisateurs sont invités à choisir un modèle lors de la création d&apos;une nouvelle entrée. Choisir entre:  

* ***Par défaut*** 
* ***Liste des modèles (incluant les vides)*** 
* ***Liste des modèles seulement*** 
* ***Aucune sélection de modèle*** 
		</td>
	</tr>
</table>

### Commentaires 

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
Autoriser la modification des commentaires du journal 
		</td>
		<td>
Activer la modification des commentaires de journal pour tous les utilisateurs. 
		</td>
	</tr>
	<tr>
		<td>
Longueur minimale (caractères) 
		</td>
		<td>
Longueur minimale en caractères pour les commentaires. 
		</td>
	</tr>
</table>

### Taille du fichier 

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
Taille maximale du fichier (Mo) 
		</td>
		<td>
Limiter la taille des pièces jointes et des entrées de document pour éviter de surcharger la source de données. 
		</td>
	</tr>
</table>

### Favoris 

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
Permettre les favoris 
		</td>
		<td>
Permettre de marquer les entrées comme favorites. 
		</td>
	</tr>
</table>

### {{ fr.PVLT }} 

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
Autoriser un {{ fr.PVLT }} 
		</td>
		<td>
Autoriser les usagers à utiliser [Mon {{ fr.PVLT }}](/fr/server/web-interface/user-vault/) . 
		</td>
	</tr>
	<tr>
		<td>
Journaliser les activités du {{ fr.PVLT }} 
		</td>
		<td>
Inclure les journaux du {{ fr.PVLT }} pour tous les usagers de la source de données. 
		</td>
	</tr>
	<tr>
		<td>
Permettre les identifiants &quot;Liés (coffre)&quot; dans le {{ fr.PVLT }} 
		</td>
		<td>
Autoriser le référentiel d&apos;identifiants pour les sessions dans le {{ fr.PVLT }} . 
		</td>
	</tr>
</table>

### Sécurité 

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
État du verrouillage du coffre 
		</td>
		<td>
Créer un coffre avec un accès restreint par défaut. 
		</td>
	</tr>
	<tr>
		<td>
Sécurité de la source de données 
		</td>
		<td>
Utiliser l&apos;ancienne sécurité. Cette option existe à des fins de rétro-compatibilité et nous suggérons de ne pas activer cette option. Nous recommendons fortement d&apos;utiliser le [système de sécurité basé sur les groupes d&apos;utilisateurs](/fr/server/web-interface/administration/configuration/system-permissions/) . 
		</td>
	</tr>
	<tr>
		<td>
Configuration d&apos;événements 
		</td>
		<td>
* Par défaut (Activé) 
* Activé 
* Activé avec des avertissements 
* Facultatif par coffre 
* Désactivé 
		</td>
	</tr>
	<tr>
		<td>
Période d&apos;utilisation (Entrées) 
		</td>
		<td>
* ***Zone de temps*** : Sélectionner le fuseau horaire dans lequel vous vous trouvez actuellement.  
* ***Jours*** : Sélectionner les jours pour lesquels la session est disponible. Choisir entre:  
	***N&apos;importe quel jour*** : La session peut être utilisée n&apos;importe quel jour de la semaine ou de fin de semaine.  
	***Jours de semaine*** : La session peut être utilisée seulement les jours de la semaine.  
	***Jours de fin de semaine*** : La session peut être utilisée seulement la fin de semaine.  
	***Personnalisé*** : Sélectionner manuellement chaque jour pour lequel la session est disponible.  
* ***Heure du jour*** : Sélectionner les heures auxquelles la session est limitée. Choisir entre:  
	***N&apos;importe quand*** : La session peut être utilisée à toute heure.  
	***Personnalisé*** : Sélectionner manuellement la période pendant laquelle la session est disponible.  
		</td>
	</tr>
</table>


