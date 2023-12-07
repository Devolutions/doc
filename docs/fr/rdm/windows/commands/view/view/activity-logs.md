---
eleventyComputed:
  title: Journaux d'activité
---
Les ***Journaux d'activité*** offrent une solution robuste de journalisation. Grâce à cette fonctionnalité, il est possible de surveiller une session ouverte pour tous les utilisateurs qui utilisent des [Sources de données avancées](DataSources_Advanced). Le journal est disponible pour des sessions spécifiques dans le menu contextuel ***Affichage – Journaux d'activité***, dans les propriétés de la session (volet ***Journaux d'activité***) et dans le ***Tableau de bord***.  
![Bouton Journaux d'activité](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/RDMWin2021.png) 

{% snippet icon.badgeInfo %} 
En fonction des permissions dont dispose chaque utilisateur, il se peut qu'il ne puisse accéder qu'aux [***Journaux des connexions locales***](/fr/rdm/windows/commands/view/logs/). 
{% endsnippet %}
 
### Recherche 

Toutes les activités dans la source de données s'affichent automatiquement lors de l'ouverture des ***Journaux d'activité***, sans avoir à appliquer de paramètres. Toutefois, des champs de recherche sont disponibles et peuvent s'avérer utiles lorsqu'il y a beaucoup d'entrées d'activités. Ainsi, les résultats peuvent être affinés en spécifiant la ***Date*** ou une période personnalisée, le ***Nom d'utilisateur***, le ***Message***, le ***Nom de l'ordinateur***, le ***Dossier***, le ***Commentaire d'ouverture***, le ***Commentaire de fermeture*** et le ***Billet #***. Sélectionnez ***Tous les {{ fr.VLT }}s*** pour voir les entrées de tous les autres {{ fr.VLT }}s auxquels vous avez accès. Il est également possible de choisir entre l'***Heure locale*** et l'***Heure UTC*** et de rechercher dans tous les {{ fr.VLT }}s ou seulement dans le {{ fr.VLT }} actuel. Lorsque tous les critères ont été choisis, le bouton ***Recherche*** les appliquera aux résultats.  
![Champs de recherche](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip10252.png) 

### Journaux 

Le journal contient toutes les opérations CRUD (ajout, modification et suppression), les mots de passe affichés, les identifiants utilisés par d'autres sessions, etc. Il est possible de cliquer sur une entrée avec le bouton de droite pour accéder à plus d'options.  
![Journaux](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/RDMWin2022.png) 

Les informations disponibles pour chaque ligne d'activité sont présentées dans le tableau suivant. 

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
Dossier 
		</td>
		<td>
Indique le dossier où se trouve votre entrée. 
		</td>
	</tr>
	<tr>
		<td>
Connexion 
		</td>
		<td>
Indique la connexion utilisée pour ouvrir votre entrée. 
		</td>
	</tr>
	<tr>
		<td>
{{ fr.VLT_MAJ }} 
		</td>
		<td>
Indique le {{ fr.VLT }} dans lequel l'action a été effectuée. 
		</td>
	</tr>
	<tr>
		<td>
Message 
		</td>
		<td>
Indique l'action qui a été effectuée sur votre entrée ou session. 
		</td>
	</tr>
	<tr>
		<td>
Commentaire à l'ouverture 
		</td>
		<td>
Le ***Commentaire à l'ouverture*** est défini dans l'onglet ***Journaux*** de votre session. 
		</td>
	</tr>
	<tr>
		<td>
Commentaire à la fermeture 
		</td>
		<td>
Le ***Commentaire de fermeture*** est défini dans l'onglet ***Journaux*** de votre session. 
		</td>
	</tr>
	<tr>
		<td>
Date de connexion 
		</td>
		<td>
Indique la date et l'heure d'ouverture de votre session ou de modification de votre entrée. 
		</td>
	</tr>
	<tr>
		<td>
Date Fin / Temps 
		</td>
		<td>
Indique la date et l'heure de fermeture de votre session ou de l'entrée. 
		</td>
	</tr>
	<tr>
		<td>
Temps actif 
		</td>
		<td>
Cette information est disponible uniquement pour les sessions en mode intégré. Le temps actif de votre session, c'est-à-dire l'heure à laquelle votre session a été ouverte en mode intégré et la période durant laquelle vous avez été actif dans votre session, sera enregistré. Si votre session est ouverte, mais que vous vous trouvez sur l'onglet ***Tableau de bord***, par exemple, et non sur votre onglet de session, aucune heure active ne sera enregistrée. 
		</td>
	</tr>
	<tr>
		<td>
Durée 
		</td>
		<td>
Cette information est disponible uniquement pour les sessions en mode intégré. Lorsque les sessions sont ouvertes en mode intégré, la durée de la session sera enregistrée. Cela signifie que même si vous vous trouvez sur l'onglet ***Tableau de bord***, par exemple, et que vous ne travaillez pas activement dans votre session, mais que votre onglet de session est ouvert, la durée d'ouverture sera enregistrée. 
		</td>
	</tr>
	<tr>
		<td>
Utilisateur de l'ordinateur 
		</td>
		<td>
Indique le nom de l'utilisateur de l'ordinateur. 
		</td>
	</tr>
	<tr>
		<td>
Utilisateur 
		</td>
		<td>
Indique le nom de l'utilisateur connecté. 
		</td>
	</tr>
	<tr>
		<td>
Connexion utilisateur 
		</td>
		<td>
Indique la connexion utilisateur. 
		</td>
	</tr>
	<tr>
		<td>
Billet # 
		</td>
		<td>
Indique le numéro du billet. 
		</td>
	</tr>
	<tr>
		<td>
Ordinateur 
		</td>
		<td>
Indique le nom de l'ordinateur. 
		</td>
	</tr>
	<tr>
		<td>
Type de connexion 
		</td>
		<td>
Indique le type de connexion utilisé. 
		</td>
	</tr>
	<tr>
		<td>
ID du journal de connexions 
		</td>
		<td>
Indique l'identifiant unique du journal de connexions. 
		</td>
	</tr>
</table>
