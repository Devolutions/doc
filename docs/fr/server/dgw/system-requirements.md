---
title: Configuration du système
---
{{ fr.DGW }} requiert la configuration suivante : 

## Configuration 

### Spécifications matérielles 

<table>
	<tr>
		<th>

Utilisation légère  
(1-10 sessions simultanées) 
		</th>
		<th>
Utilisation modérée  
(15-75 sessions simultanées) 
		</th>
		<th>
Utilisation massive**  
(75+ sessions simultanées) 
		</th>
	</tr>
	<tr>
		<td>
Processeur à 8 cœurs  
8 Go de RAM 
Adaptateur réseau (1 Go) 
		</td>
		<td>
Processeur à 16 cœurs  
16 Go de RAM 
Adaptateur réseau (1 Go) 
		</td>
		<td>
** Nous recommandons de déployer plusieurs instances de {{ fr.DGW }} dans une [Topologie de type équilibrage de charge](/fr/server/overview/topologies/) . 
		</td>
	</tr>
</table>

{% snippet icon.badgeInfo %} 
Une instance de {{ fr.DGW }} peut gérer jusqu&apos;à 75 sessions simultanées en conservant de bonnes performances. 
{% endsnippet %}
 
### Exigences logicielles 

* Windows 10 
* Windows Server 2012, 2012 R2, 2016, 2019 ou 2022 
* Microsoft .NET Framework 4.8 

### Conditions requises 

* {{ fr.DPS }} éditions Team, Enterprise ou Platinum. 
* Une licence est requise pour chaque {{ fr.DGW }} déployé. Contactez notre [équipe des ventes](mailto:sales@devolutions.net) pour plus d&apos;information. 
	* Si {{ fr.DGW }} est installé sur la même machine que l&apos;instance {{ fr.DPS }} , il supporte jusqu&apos;à 5 connexions simultanées sans besoin de licence. 
* Pour les fournisseurs de services gérés, une instance {{ fr.DGW }} peut être déployée par site client. Tout ce dont vous avez besoin est de garder les serveurs hébergeant {{ fr.DGW }} accessibles pour {{ fr.DPS }} et {{ fr.RDM }} . {{ fr.DGW }} n&apos;a besoin d&apos;accepter que les connexions entrantes. Aucune connexion sortante vers {{ fr.DPS }} ou {{ fr.RDM }} n&apos;est nécessaire. 

