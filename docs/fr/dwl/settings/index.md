---
  title: Paramètres
order: 20
status: Topic available in German language
---
Les paramètres de {{ fr.DWL }} sont accessibles via le bouton ***Paramètres*** dans la fenêtre de l'extension de navigateur, peu importe quel produit Devolutions est utilisé avec {{ fr.DWL }}.  

![Bouton Paramètres de {{ fr.DWL }}](https://webdevolutions.azureedge.net/docs/fr/dwl/Dwl2001.png)  

Les ***Paramètres*** sont séparés en deux catégories : <a href="#configuration">***Configuration***</a> et <a href="#source">***Sources de données***</a>.  

![Paramètres de {{ fr.DWL }}](https://webdevolutions.azureedge.net/docs/fr/dwl/Dwl4027.png)

### Configuration <a name="configuration"></a>

Les paramètres dans le menu ***Général*** concernent l'interface utilisateur et les interactions.  

* Onglet ***Général***  
	* Afficher l'icône de {{ fr.DWL }} dans les champs d'identifiants.  
	* Afficher la fenêtre de dialogue des identifiants lors de la sauvegarde.  
	* Afficher les options du menu contextuel.  
	* Colorer les champs de saisie remplis avec {{ fr.DWL }}.  
	* Définir le ***Thème*** de couleur de l'application.  

* Onglet ***Avancé***  
	* Désactiver la télémétrie analytique.  
	* Activer les versions bêta de {{ fr.DWL }}.  
	
La ***Liste des sites exclus*** affiche la liste des sites Web ajoutés localement pour lesquels l'utilisateur ne sera jamais invité à enregistrer ses identifiants.  

* Les choix disponibles sont ***Ne jamais ajouter de site, Ne jamais remplir automatiquement, Ne jamais rien faire*** ou ***Ne jamais afficher les icônes dans les champs***.  
* Les options de correspondance sont ***Domaine de base, Hôte, Commence par, RegEx*** et ***Exact***.  

Les ***Paramètres d'importation/d'exportation*** permettent de sauvegarder et de transférer vos configurations prédéfinies de l'application.  

* Importer les paramètres d'autres navigateurs ou utilisateurs.  
* Exporter les ***Paramètres*** de {{ fr.DWL }}, le ***Générateur de mot de passe*** et la ***Liste des sites exclus***.  

### Sources de données <a name="source"></a>

Les paramètres de ***Sources de données*** permettent de personnaliser les interactions de {{ fr.DWL }} avec <a href="#rdm">{{ fr.RDM }}</a>, <a href="#server">{{ fr.DVLS }}</a> et <a href="#hub">{{ fr.DHUBB }} ou {{ fr.DHUBP }}</a>.  

### {{ fr.RDM }} <a name="rdm"></a>

<table>
	<tr>
		<th>
ONGLET GÉNÉRAL 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Activer {{ fr.RDM }} 
		</td>
		<td>
Récupérer les entrées de {{ fr.RDM }} lorsque l'application est ouverte. 
		</td>
	</tr>
	<tr>
		<td>
Utiliser le port par défaut (19443) 
		</td>
		<td>
Communiquer avec le port par défaut 19443 entre les applications. 
		</td>
	</tr>
	<tr>
		<td>
Ajouter une entrée dans le {{ fr.UVLT }} par défaut 
		</td>
		<td>
Enregistrer les nouvelles entrées dans le {{ fr.UVLT }}. 
		</td>
	</tr>
	<tr>
		<td>
Dossier de destination 
		</td>
		<td>
Choisir le dossier dans lequel les identifiants seront sauvegardés dans le {{ fr.VLT }}. 
		</td>
	</tr>
</table>

<table>
	<tr>
		<th>
ONGLET ACTIONS 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Retrouver les identifiants automatiquement lors du chargement de la page 
		</td>
		<td>
{{ fr.DWL }} recherche automatiquement les identifiants dans la source de données lors du chargement d'une page Web. <br>

Si cette option est désactivée, cliquer sur l'icône de l'extension {{ fr.DWL }} pour récupérer manuellement les identifiants. 
		</td>
	</tr>
	<tr>
		<td>
Remplir automatiquement les champs d’identifiants lors du chargement 
		</td>
		<td>
Remplir automatiquement les identifiants lors du chargement d'une page Web. 
		</td>
	</tr>
	<tr>
		<td>
Soumettre automatiquement le formulaire après la saisie 
		</td>
		<td>
Soumettre les identifiants automatiquement lorsque les champs sont remplis. 
		</td>
	</tr>
</table>

<table>
	<tr>
		<th>
ONGLET AVANCÉ 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Clé de l'application 
		</td>
		<td>
Sécuriser le port avec une clé d'application en utilisant le même code dans {{ fr.RDM }} et {{ fr.DWL }}. <br>

Accéder à <b><i>Fichier – Options – Extensions de navigateur</b></i> dans {{ fr.RDM }} pour inscrire la clé d'application. 
		</td>
	</tr>
	<tr>
		<td>
Activer la messagerie native 
		</td>
		<td>
Échanger des messages avec une application native installée sur l'ordinateur de l'utilisateur. 
		</td>
	</tr>
	<tr>
		<td>
Utiliser l’ancienne API 
		</td>
		<td>
Utiliser l'ancien API du navigateur pour être compatible avec les versions plus anciennes de {{ fr.RDM }}. 
		</td>
	</tr>
</table>

### {{ fr.DVLS }} <a name="server"></a>

<table>
	<tr>
		<th>
ONGLET GÉNÉRAL 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Activer {{ fr.DVLS }} 
		</td>
		<td>
Récupérer les entrées de {{ fr.DVLS }}. 
		</td>
	</tr>
	<tr>
		<td>
Dossier de destination 
		</td>
		<td>
Choisir le dossier dans lequel les identifiants seront sauvegardés dans le {{ fr.VLT }}. 
		</td>
	</tr>
	<tr>
		<td>
URL du serveur 
		</td>
		<td>
Entrer l'URL du {{ fr.DVLS }} auquel se connecter. 
		</td>
	</tr>
</table>

<table>
	<tr>
		<th>
ONGLET ACTIONS 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Retrouver les identifiants automatiquement lors du chargement de la page 
		</td>
		<td>
{{ fr.DWL }} recherche automatiquement les identifiants dans la source de données lors du chargement d'une page Web. <br>

Si cette option est désactivée, cliquer sur l'icône de l'extension {{ fr.DWL }} pour récupérer manuellement les identifiants. 
		</td>
	</tr>
	<tr>
		<td>
Remplir automatiquement les champs d’identifiants lors du chargement 
		</td>
		<td>
Remplir automatiquement les identifiants lors du chargement d'une page Web. 
		</td>
	</tr>
	<tr>
		<td>
Soumettre automatiquement le formulaire après la saisie 
		</td>
		<td>
Soumettre les identifiants automatiquement lorsque les champs sont remplis. 
		</td>
	</tr>
</table>

<table>
	<tr>
		<th>
ONGLET AVANCÉ 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Type de comparaison par défaut 
		</td>
		<td>
Définir un type d'option de comparaison par défaut entre <b><i>Domaine de base, Hôte, Commence par, RegEx, Exact</b></i> et <b><i>Jamais</b></i>. 
		</td>
	</tr>
	<tr>
		<td>
Synchroniser tous les {{ fr.VLT }}s disponibles 
		</td>
		<td>
Activer pour synchroniser tous les {{ fr.VLT }}s disponibles depuis {{ fr.DVLS }}. 
		</td>
	</tr>
</table>

### {{ fr.DHUBB }} et {{ fr.DHUBP }} <a name="hub"></a>

<table>
	<tr>
		<th>
ONGLET GÉNÉRAL 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Activer {{ fr.DHUBB }}/Personal 
		</td>
		<td>
Récupérer les entrées de {{ fr.DHUB }}. 
		</td>
	</tr>
	<tr>
		<td>
URL du serveur (disponible avec {{ fr.DHUBB }} seulement) 
		</td>
		<td>
Entrer l'URL du {{ fr.DHUBB }} auquel se connecter. 
		</td>
	</tr>
	<tr>
		<td>
Nom d'utilisateur 
		</td>
		<td>
Entrer un nom d'utilisateur avec lequel se connecter à {{ fr.DHUB }}. 
		</td>
	</tr>
</table>

<table>
	<tr>
		<th>
ONGLET ACTIONS 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Remplir automatiquement les champs d’identifiants lors du chargement 
		</td>
		<td>
Remplir automatiquement les identifiants lors du chargement d'une page Web. 
		</td>
	</tr>
	<tr>
		<td>
Soumettre automatiquement le formulaire après la saisie 
		</td>
		<td>
Soumettre les identifiants automatiquement lorsque les champs sont remplis. 
		</td>
	</tr>
</table>

<table>
	<tr>
		<th>
ONGLET AVANCÉ 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Connexion au {{ fr.DA }}
		</td>
		<td>
Écrire l'URL de connexion de votre {{ fr.DA }}. 
		</td>
	</tr>
	<tr>
		<td>
Afficher le favicône 
		</td>
		<td>
Afficher le favicône de {{ fr.DWL }}. 
		</td>
	</tr>
	<tr>
		<td>
{{ fr.DWL }} 
		</td>
		<td>
Activer ou désactiver {{ fr.DWL }} avec {{ fr.DHUB }}. 
		</td>
	</tr>
	<tr>
		<td>
Type de comparaison par défaut 
		</td>
		<td>
Définir un type d'option de comparaison par défaut entre <b><i>Domaine de base, Hôte, Commence par, RegEx, Exact</b></i> et <b><i>Jamais</b></i> 
		</td>
	</tr>
	<tr>
		<td>
Synchroniser tous les {{ fr.VLT }}s disponibles (disponible avec {{ fr.DHUBB }} seulement) 
		</td>
		<td>
Activer pour synchroniser tous les {{ fr.VLT }}s disponibles depuis {{ fr.DHUBB }}. 
		</td>
	</tr>
</table>
