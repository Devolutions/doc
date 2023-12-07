---
eleventyComputed:
  title: '{{ fr.DVLS }}'
  order: 10
  keywords:
  - on-premises
  - self-hosted
  - roles
---
![!!{{ fr.DVLS }} logo](https://webdevolutions.blob.core.windows.net/images/projects/server/logos/server-color-shadow.svg)

{{ fr.DVLS }} est une solution déployable dans votre infrastructure servant à stocker et à partager des informations entre les différentes équipes de votre organisation. Cette solution permet également de gérer des connexions à distance, des identifiants et des informations confidentielles en toute sécurité.  

Notre système de contrôle d'accès basé sur des groupes d'utilisateurs permet d'attribuer des permissions de façon granulaire. Une journalisation avancée des activités de tous les utilisateurs est incluse afin d'offrir une excellente visibilité dans tous les aspects de la solution.  

Grâce à son architecture Web, vous avez la possibilité de la publier soit dans votre intranet, soit sur Internet.  

{% youtube 'w-M3zBe9B0I' %}  

Il existe deux façons d'utiliser {{ fr.DVLS }} : 

<table>
	<tr>
		<td>

![!!clip10056](https://webdevolutions.azureedge.net/docs/fr/server/clip10056.png)  

## {{ fr.VLT_MAJ }} infonuagique  

Accès par le navigateur Web et [{{ fr.DWL }}](/fr/server/dwl/overview/) 
		</td>
		<td>
![!!Application64x64](https://webdevolutions.azureedge.net/docs/common/Application64x64.png)  

## Gestion de sessions  

Application cliente (de bureau ou mobile) 
		</td>
	</tr>
	<tr>
		<td>
Accédez aux ressources stockées dans un {{ fr.VLT }} à partir d'un navigateur Web grâce à une licence d'accès client (LAC). Les identifiants sont gérés dans l'interface Web, alors aucune application cliente n'est requise.  

Avec l'extension de navigateur {{ fr.DWL }}, les identifiants peuvent être automatiquement saisis lors de la connexion à un site Web. 
		</td>
		<td>
Accédez aux ressources stockées dans un {{ fr.VLT }} grâce à l'une de nos applications clientes qui sont reliées aux services Web de {{ fr.DVLS }}. 

L'application cliente, {{ fr.RDM }}, doit être installée localement pour gérer la source de données. Elle est disponible pour Windows, {{ fr.MAC }}, Android et iOS.  
		</td>
	</tr>
	<tr>
		<td>
Les technologies d'accès à distance (RDP, VNC, etc.) ne sont pas prises en charge par le navigateur Web. 
		</td>
		<td>
Contrairement au navigateur Web, {{ fr.RDM }} peut lancer des connexions à distance. 
		</td>
	</tr>
</table>

## Fonctionnalités importantes

<table>
	<tr>
		<td>

![!!clip10054](https://webdevolutions.azureedge.net/docs/fr/server/clip10054.png)  

### Serveur haut de gamme 
		</td>
		<td>
![!!clip10055](https://webdevolutions.azureedge.net/docs/fr/server/clip10055.png)  

### Intégration d'Active Directory (AD) 
		</td>
		<td>
![!!clip10057](https://webdevolutions.azureedge.net/docs/fr/server/clip10057.png)  

### Architecture Web 
		</td>
	</tr>
	<tr>
		<td>
À installer sur votre serveur d'application. Stockez des entrées dans un nombre illimité de {{ fr.VLT }}s et gérer les accès grâce à notre système de contrôle d'accès basé sur les Groupes d'utilisateurs. 
		</td>
		<td>
Les utilisateurs se verront attribuer des permissions en fonction de leur appartenance aux groupes Active Directory. 
		</td>
		<td>
Possibilité de publier {{ fr.DVLS }} soit dans votre intranet, soit sur Internet grâce à son architecture Web. 
		</td>
	</tr>
	<tr>
		<td>
![!!clip10050](https://webdevolutions.azureedge.net/docs/fr/server/clip10050.png)  

### Authentification multifacteur 
		</td>
		<td>
![!!clip10062](https://webdevolutions.azureedge.net/docs/fr/server/clip10062.png)  

### Notifications par courriel 
		</td>
		<td>
![!!clip10060](https://webdevolutions.azureedge.net/docs/fr/server/clip10060.png)  

### Restrictions par adresse IP 
		</td>
	</tr>
	<tr>
		<td>

Grand éventail de technologies d'[authentification multifacteur](/fr/server/web-interface/administration/configuration/server-settings/security/two-factor/). 
		</td>
		<td>
Recevez des notifications par courriel pour toute activité dans les comptes, les {{ fr.VLT }}s, etc. 
		</td>
		<td>
Contrôlez l'accès à {{ fr.DVLS }} en inscrivant sur une liste blanche, ou inactive, des adresses IP ou des plages d'adresses IP, ainsi qu'en fonction de la géolocalisation. 
		</td>
	</tr>
</table>
