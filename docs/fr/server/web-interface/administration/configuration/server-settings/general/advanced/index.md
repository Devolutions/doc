---
title: Avancée
order: 20
---
La section ***Avancée*** permet à l&apos;administrateur de configurer le paramètre de la ***&#32;*** ***durée de vie du jeton ainsi que d&apos;autres paramètres avancés ou la*** ***Personnalisations des Logos*** .  
![Administration - Paramètres de Devolutions Password Server - Avancée](/img/fr/server/ServerOp8044.png) 

## Paramètres 

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
Actuailser la durée du jeton (minutes) 
		</td>
		<td>
C&apos;est la durée du jeton. À l&apos;expiration du jeton, l&apos;utilisateur doit à nouveau s&apos;authentifier sur l&apos;instance {{ fr.RDMS }} . Sur modification de ce paramètre, l&apos;instance {{ fr.DPS }} doit être redémarrée avec le bouton Arrêter le serveur/Démarrer le serveur depuis la console. 
		</td>
	</tr>
	<tr>
		<td>
Déconnecter automatiquement les utilisateurs inactifs après (minutes) 
		</td>
		<td>
Saisir le délai de déconnexion de l&apos;utilisateur du serveur s&apos;il est inactif. Ce paramètre s&apos;applique qu&apos;aux sessions web ou sessions depuis [{{ fr.DWL }}](/fr/server/dwl/overview/) . Sur modification de ce paramètre, l&apos;instance {{ fr.DPS }} doit être redémarrée avec le bouton Arrêter le serveur/Démarrer le serveur depuis la console. 
		</td>
	</tr>
	<tr>
		<td>
Type de licence 
		</td>
		<td>
Sélectionner le type de licence. La valeur par défaut est la ***Gestion des connexions*** . 
		</td>
	</tr>
	<tr>
		<td>
Lancer une connexion avec 
		</td>
		<td>
Définit l&apos;application qui ouvre les connexions à distance: {{ fr.RDM }} ou {{ fr.LAUNCHER }} . La valeur par défaut fait référence à {{ fr.LAUNCHER }} . 
		</td>
	</tr>
	<tr>
		<td>
Logo du serveur (Grand)/Logo du serveur (Petit) 
		</td>
		<td>
Pour plus d&apos;information voir [Personnalisations des Logos](/fr/server/web-interface/administration/configuration/server-settings/general/advanced/white-labeling-customizations/) . 
		</td>
	</tr>
</table>




