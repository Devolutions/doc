---
eleventyComputed:
  title: Gestionnaire de sauvegardes
---
La section ***Gestionnaire de sauvegardes*** permet aux administrateurs de configurer les paramètres de sauvegarde de la base de données et du dossier de l'application Web.  
![Administration - Gestionnaire de sauvegardes](https://webdevolutions.azureedge.net/docs/fr/server/clip10403.png) 

## Paramètres 

<table>
	<tr>
		<th>
Bouton 
		</th>
		<th>
Description 
		</th>
	</tr>
	<tr>
		<td>
Enregistrer 
		</td>
		<td>
Enregistrer les dernières modifications des options de planification de sauvegarde. 
		</td>
	</tr>
	<tr>
		<td>
Sauvegarder maintenant 
		</td>
		<td>
Créer immédiatement une sauvegarde de la base de données SQL et/ou du dossier de l'application Web. 
		</td>
	</tr>
</table>

### Configuration de la base de données 

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
Activer le backup de la base de données 
		</td>
		<td>
Activer la sauvegarde de la base de données SQL. 
		</td>
	</tr>
	<tr>
		<td>
Chemin du fichier de backup 
		</td>
		<td>

Le chemin d'accès au dossier dans lequel la sauvegarde de la base de données SQL sera enregistrée. Nous vous recommandons d'utiliser un dossier réseau partagé avec des autorisations appropriées définies dessus pour pouvoir enregistrer le fichier de sauvegarde.  

Remarque : Comme la commande de sauvegarde s'exécute sur le serveur SQL et la machine où {{ fr.DVLS }} est installé, ce chemin doit être accessible à partir de ce serveur SQL et depuis le serveur où {{ fr.DVLS }} est installé. Nous suggérons de configurer le chemin de backup de la base de données avec un chemin UNC. 
		</td>
	</tr>
	<tr>
		<td>
Mot de passe de la sauvegarde de la base de données 
		</td>
		<td>
Mot de passe servant à protéger la sauvegarde de la base de données. 
		</td>
	</tr>
</table>

### Configuration Web 

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
Activer le backup Web 
		</td>
		<td>
Activer la sauvegarde de l'application Web. 
		</td>
	</tr>
	<tr>
		<td>
Chemin du fichier de backup 
		</td>
		<td>
Le chemin d'accès au dossier dans lequel la sauvegarde de l'application Web sera enregistrée. Nous vous recommandons d'utiliser un dossier réseau partagé avec des autorisations appropriées définies dessus pour pouvoir enregistrer le fichier de sauvegarde. 
		</td>
	</tr>
</table>

### Algorithme de chiffrement de la sauvegarde 

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
Algorithme de chiffrement 
		</td>
		<td>
Algorithme de chiffrement utilisé pour encrypté la sauvegarde de la base de données lorsque celle-ci est protégée avec un mot de passe. 
		</td>
	</tr>
</table>

### Notification 

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
Avertir l'administrateur si la sauvegarde a échoué 
		</td>
		<td>
Un courriel sera envoyé à l'administrateur pour l'informer que la sauvegarde a échoué. 
		</td>
	</tr>
	<tr>
		<td>
Avertir l'administrateur de la réussite de la sauvegarde 
		</td>
		<td>
Un courriel sera envoyé à l'administrateur pour l'informer que la sauvegarde s'est complétée avec succès. 
		</td>
	</tr>
</table>

### Planificateur 

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
Heure de démarrage de la sauvegarde 
		</td>
		<td>
Date et heure auxquelles la sauvegarde sera automatiquement lancée. 
		</td>
	</tr>
	<tr>
		<td>
Répéter chaque 
		</td>
		<td>
L'intervalle de temps pendant lequel la sauvegarde sera répétée. 
		</td>
	</tr>
</table>

### Avancée 

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
Expiration SQL du backup de la base de données (minutes) 
		</td>
		<td>
Nombre de minutes avant un délai d'expiration dans l'instance SQL. 
		</td>
	</tr>
	<tr>
		<td>
Nombre de backup conservé 
		</td>
		<td>
Nombre de sauvegarde qui sera conservée dans le dossier de sauvegarde. 
		</td>
	</tr>
	<tr>
		<td>
Copier seulement le backup de la base de données 
		</td>
		<td>

Une sauvegarde de serveur SQL qui est indépendante de la séquence des sauvegardes classiques. Pour plus d'informations, consultez [https://docs.microsoft.com/en-us/sql/relational-databases/backup-restore/copy-only-backups-sql-server](https://docs.microsoft.com/en-us/sql/relational-databases/backup-restore/copy-only-backups-sql-server). 
		</td>
	</tr>
</table>