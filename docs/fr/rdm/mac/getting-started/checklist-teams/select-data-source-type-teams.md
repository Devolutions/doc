---
title: Choisir le type de source de données – Équipes
---
Cette section s&apos;adresse aux équipes qui utilisent l&apos;édition Team et ses fonctionnalités. 

{% snippet icon.shieldWarning %} 
Lorsque vous choisissez une source de données qui n&apos;est pas sur site , il est important de penser à la protection des données au repos et en transit. Nous vous recommandons fortement de chiffrer vos données stockées dans des fichiers à l’aide d’une clé maîtresse ou d&apos;utiliser un [Fournisseur de sécurité](/fr/rdm/mac/commands/administration/security-provider/) pour les [Sources de données avancées](/fr/rdm/mac/data-sources/data-sources-types/advanced-data-sources/) . Ainsi, vous serez la seule personne qui peut voir les données. 
{% endsnippet %}
 
Pour faciliter votre réflexion quant au choix d&apos;une source de données, voici un tableau démontrant les différentes sources de données compatibles ainsi qu&apos;une liste de critères déterminants selon le contexte. 

<table>
	<tr>
		<th>
CRITÈRE 
		</th>
		<th>
{{ fr.RDMS }} 
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

![BadgeNoticeSmall.png](/img/common/BadgeNoticeSmall.png) 
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
![BadgeNoticeSmall.png](/img/common/BadgeNoticeSmall.png) 
		</td>
		<td>
![BadgeNoticeSmall.png](/img/common/BadgeNoticeSmall.png) 
		</td>
		<td>

		</td>
	</tr>
	<tr>
		<td>
Attribution des permissions selon l&apos;appartenance à un groupe AD 
		</td>
		<td>
![BadgeNoticeSmall.png](/img/common/BadgeNoticeSmall.png) 
		</td>
		<td>

		</td>
		<td>

		</td>
	</tr>
	<tr>
		<td>
Stockage local des données 
		</td>
		<td>
![BadgeNoticeSmall.png](/img/common/BadgeNoticeSmall.png) 
		</td>
		<td>
![BadgeNoticeSmall.png](/img/common/BadgeNoticeSmall.png) 
		</td>
		<td>

		</td>
	</tr>
	<tr>
		<td>
Journaux d’activités 
		</td>
		<td>
![BadgeNoticeSmall.png](/img/common/BadgeNoticeSmall.png) 
		</td>
		<td>
![BadgeNoticeSmall.png](/img/common/BadgeNoticeSmall.png) 
		</td>
		<td>
![BadgeNoticeSmall.png](/img/common/BadgeNoticeSmall.png) 
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
![BadgeNoticeSmall.png](/img/common/BadgeNoticeSmall.png) 
		</td>
	</tr>
	<tr>
		<td>
Copie locale optionnelle des connexions 
		</td>
		<td>
![BadgeNoticeSmall.png](/img/common/BadgeNoticeSmall.png) 
		</td>
		<td>
![BadgeNoticeSmall.png](/img/common/BadgeNoticeSmall.png) 
		</td>
		<td>
![BadgeNoticeSmall.png](/img/common/BadgeNoticeSmall.png) 
		</td>
	</tr>
</table>

## Notes 

### Note 1 

Les administrateurs peuvent créer des comptes aux utilisateurs sans divulguer les mots de passe. Une configuration verrouillée de la source de données est importée pour chaque utilisateur final. L&apos;administrateur doit donc effectuer beaucoup d&apos;opérations manuelles. 

### Note 2 

La sécurité intégrée est le nom d&apos;une technologie de Microsoft qui permet d&apos;avoir accès à une instance de SQL Server sans envoyer les identifiants, mais plutôt en utilisant le jeton fourni par l&apos;authentification à l&apos;ordinateur Windows. Cette option n&apos;est pas disponible dans {{ fr.RDM }} pour macOs. Cela permet aux utilisateurs de se connecter directement à la base de données à l&apos;aide d&apos;autres outils. Cette technologie ne devrait pas être utilisée si vous ne devez pas donner un accès direct à la base de données.  

Notre source de données SQL Server offre une troisième option d&apos;authentification : le type le type ***Personnalisé (Custom Devolutions)*** . Cette option permet d&apos;utiliser une identité empruntée à un autre utilisateur sans connaître le mot de passe. Veuillez consulter la section concernant la gestion des utilisateurs pour plus d&apos;informations. 

### Note 3 

N&apos;exposez pas votre {{ fr.RDMS }} sur Internet sans une forme de protection contre les attaques par déni de service distribué (DDoS). Utilisez des mots de passe complexes et des noms d&apos;utilisateurs difficiles à deviner à partir d&apos;informations publiques. 

### Note 4 

Si vous choisissez d&apos;exposer votre base de données sur Internet, assurez-vous de chiffrer les communications avec SSL/TLS &#160;et de protéger la base de données contre les attaques par déni de service distribué (DDoS). Les fournisseurs de services infonuagiques comme Azure mettent de l&apos;avant la protection contre ces types d&apos;attaques. La configuration du pare-feu préconisée est de tout bloquer par défaut pour ensuite ajouter des exceptions et des règles. Il faut également ouvrir le nombre minimal de ports requis, ajouter les numéros de ces ports à la liste des exceptions et filtrer toutes les futures requêtes en fonction de leur origine. 

