---
  title: Mode de la cache
---
Le mode de la cache déterminera comment le client rechargera les entrées lorsque des modifications seront détectées. Sur les grandes sources de données, la mise en cache est indispensable et augmentera considérablement les performances.  

{% snippet icon.badgeInfo %} 
Cette fonctionnalité n'est disponible que lors de l'utilisation d'une [source de données avancée](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/). 
{% endsnippet %}
 
{% snippet icon.badgeNotice %} 
Si vous pensez que le cache est obsolète, appuyez sur <kbd>Ctrl</kbd>+<kbd>F5</kbd> pour actualiser le cache local. Cela forcera la lecture de la base de données pour recréer le cache. 
{% endsnippet %}
 
## Paramètres 

L'option ***Mode de la cache*** est accessible via ***Fichier – Sources de données – Modifier la source de données – Avancé*** dans une source de données avancée.  
![Mode de la cache](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip3581.png) 

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
Désactivé 
		</td>
		<td>
Empêche l'utilisation du cache hors ligne. 
		</td>
	</tr>
	<tr>
		<td>
En mémoire 
		</td>
		<td>
Utilise le cache hors ligne uniquement pour les modifications récentes, mais l'empêche d'écrire sur le disque (uniquement en mémoire). 
		</td>
	</tr>
	<tr>
		<td>
Fichier 
		</td>
		<td>
Utilise le cache hors ligne uniquement pour les modifications récentes. Le cache écrira sur le disque. 
		</td>
	</tr>
</table>

### Stockage 

Vous pouvez trouver le fichier de configuration dans **%LocalAppData%\Devolutions\RemoteDesktopManager\[GUID:DataSourceID]**.  

Il existe trois moteurs pour la cache :  

* SQLite (offline.db) 
* MCDF (offline.mcdf) 
* MCDF v2.0 (offline.mcdf2) 

Si vous utilisez une version de {{ fr.RDM }} antérieure à 11.2, le moteur par défaut sera ***SQLite***, dans ce cas, la base de données est chiffrée à l'aide d'un hachage de clé calculée non portable.  

Si vous utilisez la version 11.2 ou une version plus récente de {{ fr.RDM }}, le moteur de cache par défaut sera les fichiers ***Microsoft Compound Document Format (MCDF)***.  

{% snippet icon.shieldNotice %} 
Vous pouvez améliorer la sécurité du fichier hors ligne en définissant la sécurité renforcée dans ***Fichier – Options – Sécurité – Sécurité hors connexion***. 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
Selon la configuration du ***Mode de la cache*** et du mode hors ligne, le fichier Offline.db peut toujours exister, car le fichier a une mise en cache à double usage et une prise en charge hors ligne. 
{% endsnippet %}
 

