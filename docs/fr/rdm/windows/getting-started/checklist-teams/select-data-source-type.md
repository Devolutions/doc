---
  title: Choisir le type de source de données – Équipes
---
Cette section s'adresse aux équipes qui utilisent l'édition Team et ses fonctionnalités. 

{% snippet icon.shieldWarning %} 
Lorsque vous choisissez une source de données qui n'est pas déployée sur site, il est important de penser à la protection des données au repos et en transit. Nous vous recommandons fortement de chiffrer vos données stockées dans des fichiers à l’aide d’une clé maîtresse ou d'utiliser un [Fournisseur de sécurité](/fr/rdm/windows/commands/administration/settings/security-providers/) pour les [Sources de données avancées](/fr/rdm/windows/data-sources/data-sources-types/advanced-data-sources/). Ainsi, vous serez la seule personne qui peut voir les données. 
{% endsnippet %}
 
Pour faciliter votre réflexion quant au choix d'une source de données, voici un tableau démontrant les différentes sources de données compatibles ainsi qu'une liste de critères déterminants selon le contexte. 

<table>
	<tr>
		<th>

CRITÈRE 
		</th>
		<th>
{{ fr.DVLS }} 
		</th>
		<th>
SQL 
SERVER 
		</th>
		<th>
SQL 
AZURE 
		</th>
	</tr>
	<tr>
		<td>
Base de données inaccessible aux utilisateurs finaux 
		</td>
		<td>
![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) 
		</td>
		<td>
Notes 1 et 2 
		</td>
		<td>
Note 1 
		</td>
	</tr>
	<tr>
		<td>
Comptes AD utilisés à des fins d’authentification 
		</td>
		<td>
![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) 
		</td>
		<td>
![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) 
		</td>
		<td>

		</td>
	</tr>
	<tr>
		<td>
Attribution des permissions selon l'appartenance à un groupe AD 
		</td>
		<td>
![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) 
		</td>
		<td>

		</td>
		<td>

		</td>
	</tr>
	<tr>
		<td>
Stockage des données sur site 
		</td>
		<td>
![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) 
		</td>
		<td>
![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) 
		</td>
		<td>

		</td>
	</tr>
	<tr>
		<td>
Journaux d’activités 
		</td>
		<td>
![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) 
		</td>
		<td>
![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) 
		</td>
		<td>
![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) 
		</td>
	</tr>
	<tr>
		<td>
Données accessibles à tous 
		</td>
		<td>
Note 3 
		</td>
		<td>
Note 4 
		</td>
		<td>
![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) 
		</td>
	</tr>
	<tr>
		<td>
Copie locale optionnelle des connexions 
		</td>
		<td>
![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) 
		</td>
		<td>
![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) 
		</td>
		<td>
![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) 
		</td>
	</tr>
</table>

## Notes 

### Note 1 

Les administrateurs peuvent créer des comptes aux utilisateurs finaux sans divulguer les mots de passe. Une configuration verrouillée de la source de données est importée pour chaque utilisateur final. L'administrateur doit donc effectuer beaucoup d'opérations manuelles. 

### Note 2 

La sécurité intégrée est le nom d'une technologie de Microsoft qui permet d'avoir accès à une instance de SQL Server sans envoyer les identifiants, mais plutôt en utilisant le jeton fourni par l'authentification à l'ordinateur Windows. Cela permet aux utilisateurs de se connecter directement à la base de données à l'aide d'autres outils. Cette technologie ne devrait pas être utilisée si vous ne devez pas donner un accès direct à la base de données.  

Notre source de données SQL Server offre une troisième option d'authentification : le type ***Personnalisé (Custom Devolutions)***. Cette option permet d'utiliser une identité empruntée à un autre utilisateur sans connaître le mot de passe. Veuillez consulter la section concernant la [gestion des utilisateurs](Administration_UserManagement) pour plus d’informations. 

### Note 3 

N'exposez pas votre instance de {{ fr.DVLS }} sur Internet sans une forme de protection contre les attaques par déni de service distribué (DDoS). Utilisez des mots de passe complexes et des noms d'utilisateurs difficiles à deviner à partir d'informations publiques. 

### Note 4 

Si vous choisissez d'exposer votre base de données sur Internet, assurez-vous de chiffrer les communications avec SSL/TLS et de protéger la base de données contre les attaques par déni de service distribué (DDoS). Les fournisseurs de services infonuagiques comme Azure mettent de l'avant la protection contre ces types d'attaques. La configuration du pare-feu préconisée est de tout bloquer par défaut pour ensuite ajouter des exceptions et des règles. Il faut également ouvrir le nombre minimal de ports requis, ajouter les numéros de ces ports à la liste des exceptions et filtrer toutes les futures requêtes en fonction de leur origine. 

