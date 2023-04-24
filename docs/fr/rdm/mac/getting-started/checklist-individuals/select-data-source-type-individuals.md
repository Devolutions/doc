---
title: Choisir le type de source de données – Utilisation individuelle
---
Cette section s'adresse surtout aux individus, mais aussi aux équipes de trois (3) utilisateurs ou moins qui ne désirent pas implanter de sécurité.  

Pour faciliter votre réflexion quant au choix d'une source de données, voici un tableau démontrant les différentes sources de données compatibles ainsi qu'une liste de critères déterminants selon le contexte.  

{% snippet icon.shieldWarning %} 
Lorsque vous choisissez une source de données qui n'est pas sur site , il est important de penser à la protection des données au repos et en transit. Nous vous recommandons fortement de chiffrer vos données stockées dans des fichiers à l’aide d’une clé maîtresse ou d'utiliser un [Fournisseur de sécurité](/fr/rdm/mac/commands/administration/security-provider/) pour les [Sources de données avancées](/fr/rdm/mac/data-sources/data-sources-types/advanced-data-sources/) . Ainsi, vous serez la seule personne qui peut voir les données. 
{% endsnippet %}
 
<table>
	<tr>
		<td>
SOURCE DE DONNÉES 
		</td>
		<td>
LOCALE 
		</td>
		<td>
AUTO-HÉBERGÉE 
		</td>
		<td>
INFONUAGIQUE 
		</td>
		<td>
PARTAGÉE SUR PLUSIEURS ORDINATEURS 
		</td>
		<td>
MODE HORS-LIGNE 
		</td>
		<td>
MULTIUTILISATEUR 
		</td>
	</tr>
	<tr>
		<td>
{{ fr.HUB }} Personal 
		</td>
		<td>

		</td>
		<td>

		</td>
		<td>
![!!BadgeNoticeSmall.png](/img/common/BadgeNoticeSmall.png) 
		</td>
		<td>
![!!BadgeNoticeSmall.png](/img/common/BadgeNoticeSmall.png) 
		</td>
		<td>
![!!BadgeNoticeSmall.png](/img/common/BadgeNoticeSmall.png) 
		</td>
		<td>

		</td>
	</tr>
	<tr>
		<td>
SQLite 
		</td>
		<td>
![!!BadgeNoticeSmall.png](/img/common/BadgeNoticeSmall.png) 
		</td>
		<td>

		</td>
		<td>

		</td>
		<td>

		</td>
		<td>
![!!BadgeNoticeSmall.png](/img/common/BadgeNoticeSmall.png) 
		</td>
		<td>

		</td>
	</tr>
	<tr>
		<td>
XML 
		</td>
		<td>
![!!BadgeNoticeSmall.png](/img/common/BadgeNoticeSmall.png) 
		</td>
		<td>

		</td>
		<td>

		</td>
		<td>

		</td>
		<td>
![!!BadgeNoticeSmall.png](/img/common/BadgeNoticeSmall.png) 
		</td>
		<td>

		</td>
	</tr>
	<tr>
		<td>
{{ fr.DODV }} 
		</td>
		<td>

		</td>
		<td>

		</td>
		<td>
![!!BadgeNoticeSmall.png](/img/common/BadgeNoticeSmall.png) 
		</td>
		<td>
![!!BadgeNoticeSmall.png](/img/common/BadgeNoticeSmall.png) 
		</td>
		<td>
![!!BadgeNoticeSmall.png](/img/common/BadgeNoticeSmall.png) 
		</td>
		<td>

		</td>
	</tr>
	<tr>
		<td>
Dropbox 
		</td>
		<td>

		</td>
		<td>

		</td>
		<td>
![!!BadgeNoticeSmall.png](/img/common/BadgeNoticeSmall.png) 
		</td>
		<td>
![!!BadgeNoticeSmall.png](/img/common/BadgeNoticeSmall.png) 
		</td>
		<td>

		</td>
		<td>
Note 1 
		</td>
	</tr>
</table>

## Notes 

### Note 1 

Il n'y a pas de protection contre les problèmes de contention de données. La source de données est conçue pour qu'un seul utilisateur accède aux données à partir de plusieurs ordinateurs. Ainsi, il est impossible pour plusieurs utilisateurs de se servir des données simultanément. 

### Note 2 

Un seul utilisateur peut modifier le fichier XML principal. Le fichier XML est automatiquement synchronisé par {{ fr.RDM }} sur le site Web de votre choix. L'accès aux données par une URL garantit que les autres utilisateurs disposent uniquement d'une permission de lecture seule. 

