---
  title: Fichier connexes
---
{{ fr.RDM }} génère des fichiers auxiliaires sur votre poste de travail. Le tableau ci-dessous répertorie un exemple de fichiers auxiliaires et leur emplacement.  

Comme décrit dans [Emplacement du fichier de configuration](/fr/rdm/mac/installation/client/configuration-file-location/), le chemin par défaut pour la plupart de ces fichiers est personnalisable. Pour cette raison, nous utilisons le jeton ***[CONFIG]*** dans cette documentation pour indiquer quand un fichier est stocké dans un dossier de configuration qui peut être déplacé, ou le jeton ***[PROFILE]*** pour indiquer qu'ils sont stockés dans le profil local. Par défaut, ceux-ci pointent vers le même dossier. La seule méthode pour les séparer consiste à utiliser une configuration personnalisée.  

Étant donné que vous pouvez également déployer sur un périphérique portable, parfois connu sous le nom de modèle de déploiement XCOPY, nous utiliserons le jeton ***[INSTALLDIR]*** pour indiquer que le fichier se trouve au même emplacement que {{ fr.RDM }}.  

La colonne Remplacer la source indique si un mécanisme disponible peut déplacer les fichiers de cette catégorie ailleurs.  

## Résumé 

<table>
	<tr>
		<th>
DOSSIER(S) 
		</th>
		<th>
LOCATION 
		</th>
		<th>
REMPLACER LA SOURCE 
		</th>
	</tr>
	<tr>
		<td>
Fichier(s) de configuration (*.cfg, *.ext) 
		</td>
		<td>
[CONFIG] 
		</td>
		<td>
Aucun 
		</td>
	</tr>
	<tr>
		<td>
Fichier(s) de données (*.xml, *.db) 
		</td>
		<td>
[CONFIG] ou chemin personnalisé. 
		</td>
		<td>
Aucun 
		</td>
	</tr>
	<tr>
		<td>
Paramètres par défaut 
		</td>
		<td>
[CONFIG] 
		</td>
		<td>
Paramètres de source de données (Paramètres du système) 
		</td>
	</tr>
	<tr>
		<td>
Chiffrement (*.enc, *.enb) 
		</td>
		<td>
[CONFIG] 
		</td>
		<td>
Aucun 
		</td>
	</tr>
	<tr>
		<td>
Fichiers de mise en page (*.lyt) 
		</td>
		<td>
[CONFIG] 
		</td>
		<td>
Aucun 
		</td>
	</tr>
	<tr>
		<td>
Fichiers journaux (*.log, *.debug) 
		</td>
		<td>
[CONFIG] 
		</td>
		<td>
Aucun 
		</td>
	</tr>
	<tr>
		<td>
Liste d'exécution locale 
		</td>
		<td>
[PROFILE]\[Datasource]\Playlists 
		</td>
		<td>
U tiliser le répertoire d'application pour la liste d'exécution locale utilisera à la place [INSTALLDIR] 
		</td>
	</tr>
	<tr>
		<td>
Modèles locaux 
		</td>
		<td>
Ils sont sérialisés directement dans le fichier de configuration de l'application 
		</td>
		<td>
Aucun 
		</td>
	</tr>
	<tr>
		<td>
Hors-ligne /Cache des données (offline.db) 
		</td>
		<td>
[PROFILE]\[Datasource] 
		</td>
		<td>
Utiliser le répertoire d'application pour la cache des données en ligne utilisera à la place [INSTALLDIR] 
		</td>
	</tr>
	<tr>
		<td>
Sensible (*.stv, *.stb) 
		</td>
		<td>
[CONFIG] 
		</td>
		<td>
Aucun 
		</td>
	</tr>
	<tr>
		<td>
Thèmes 
		</td>
		<td>
[CONFIG] 
		</td>
		<td>
Aucun 
		</td>
	</tr>
</table>
