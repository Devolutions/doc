---
eleventyComputed:
  title: Ajouter un site Web
---
Le bouton ***Ajouter un site Web*** n'est que disponible dans l'onglet ***Correspondant***, qui est l'onglet sélectionné à l'ouverture de l'extension, ou lorsque vous parcourez les {{ fr.VLT }}s de l'onglet ***Toutes les entrées***. Un nouvel onglet est ouvert dans votre navigateur qui vous permet d'ajouter une entrée de site Web dans {{ fr.DVLS }} à partir du {{ fr.WBEX }}.

Lorsque {{ fr.DVLS }} est utilisé comme source de données, la configuration de l'entrée se fait dans l'onglet ***Général***.
![Ajouter un site Web](https://cdnweb.devolutions.net/docs/fr/server/ServerOp2021.png)

Consultez le tableau ci-dessous pour en savoir plus sur chaque champ/paramètre de cette vue.

<table>
	<tr>
		<th>

CHAMP/PARAMÈTRE
		</th>
		<th>
DESCRIPTION
		</th>
	</tr>
	<tr>
		<td>
Nom
		</td>
		<td>
Saisir un nom pour votre entrée. Ce champ est rempli automatiquement par le {{ fr.WBEX }}, mais il peut tout de même être modifié.
		</td>
	</tr>
	<tr>
		<td>
URL
		</td>
		<td>
Saisir l'URL de la page de connexion du site Web. Ce champ est rempli automatiquement par le {{ fr.WBEX }}, mais il peut tout de même être modifié.
		</td>
	</tr>
	<tr>
		<td>
Ajouter une URL équivalente
		</td>
		<td>
Cliquer sur le bouton ***Ajouter une URL équivalente*** à côté du champ ***URL*** pour afficher un champ ***URLs équivalentes*** (voir ci-dessous). Vous pouvez ajouter plus d'un champ ***URLs équivalentes*** en cliquant à nouveau sur le bouton.
		</td>
	</tr>
	<tr>
		<td>
URLs équivalentes
		</td>
		<td>
Saisir une URL qui mène à la même page ou est équivalente à celle dans le champ ***URL***.

Ce champ n'est disponible qu'après avoir cliqué sur le bouton ***Ajouter une URL équivalente*** à côté du champ ***URL***.
		</td>
	</tr>
	<tr>
		<td>
Supprimer
		</td>
		<td>
Supprimer le champ ***URLs équivalentes*** à côté de ce bouton.

Ce bouton n'apparaît à côté du champ ***URLs équivalentes*** qu'après avoir cliqué sur le bouton ***Ajouter une URL équivalente*** à côté du champ ***URL***.
		</td>
	</tr>
	<tr>
		<td>
Identifiants
		</td>
		<td>
Dans la liste déroulante, sélectionner ***Personnalisé***, ***Lié ({{ fr.VLT }})***, ***Hérité***, ***Lié ({{ fr.UVLT }})***, ***Rechercher par nom ({{ fr.UVLT }})*** ou ***Aucun*** pour spécifier au {{ fr.WBEX }} la façon de récupérer vos identifiants. Certaines de ces options vous donnent accès à des paramètres supplémentaires.
		</td>
	</tr>
	<tr>
		<td>
Choisir les identifiants
		</td>
		<td>
Sélectionner l'entrée d'identifiants qui sera utilisée pour récupérer les identifiants de votre nouvelle entrée de site Web. Le {{ fr.WBEX }} n'affichera que les entrées de type ***Entrée d'identifiants*** pour être liées à votre entrée. L'emplacement de l'entrée d'identifiants doit d'abord être sélectionnée dans la liste déroulante ***{{ fr.VLT }}***.

Il est aussi possible de sélectionner ***Demander à la connexion*** pour que vos identifiants soient demandés chaque fois que vous vous connectez.

Ce champ n'est disponible que si ***Lié ({{ fr.VLT }})*** ou ***Lié ({{ fr.UVLT }})*** est sélectionné dans la liste déroulante ***Identifiants***.
		</td>
	</tr>
	<tr>
		<td>
Recherche d'identifiants dans le {{ fr.UVLT }}
		</td>
		<td>
Saisir le nom de l'identifiant dans votre ***{{ fr.UVLT }}*** et le {{ fr.WBEX }} y recherchera le nom spécifié. Si le champ est laissé vide, au lancement, une liste d'identifiants s'ouvrira avec toutes les entrées d'identifiants disponibles dans votre ***{{ fr.UVLT }}***.

Ce champ n'est disponible que si ***Rechercher par nom ({{ fr.UVLT }})*** est sélectionnée dans la liste déroulante ***Identifiants***.

		</td>
	</tr>
	<tr>
		<td>
Nom d'utilisateur
		</td>
		<td>
Saisir le nom d'utilisateur utiliser pour se connecter au site Web.

Ce champ n'est disponible que si ***Personnalisé*** est sélectionné dans la liste déroulante ***Identifiants***.
		</td>
	</tr>
	<tr>
		<td>
Mot de passe
		</td>
		<td>
Saisir le mot de passe utilisé pour se connecter au site Web. Le mot de passe sera caché. Sous le champ se trouve un indicateur de force pour votre mot de passe.

Ce champ n'est disponible que si ***Personnalisé*** est sélectionné dans la liste déroulante ***Identifiants***.
		</td>
	</tr>
	<tr>
		<td>
Afficher/Masquer le mot de passe
		</td>
		<td>
Révéler ou cacher le mot de passe qui a été saisi. Ce champ n'est disponible à côté du champ ***Mot de passe*** que si ***Personnalisé*** est sélectionné dans la liste déroulante ***Identifiants***.
		</td>
	</tr>
	<tr>
		<td>
Générateur de mots de passe
		</td>
		<td>
Ouvrir le ***Générateur de mots de passe*** qui permet de créer un mot de passe fort et sécurisé adapté à vos besoins et aux exigences du site Web.
		</td>
	</tr>
	<tr>
		<td>
Description
		</td>
		<td>
Saisir une description pour la nouvelle entrée.
		</td>
	</tr>
	<tr>
		<td>
{{ fr.VLT_MAJ }}
		</td>
		<td>
Choisir de stocker votre nouvelle entrée de site Web dans votre ***{{ fr.UVLT }}*** ou dans le ***{{ fr.VLT }}*** actuellement sélectionné dans {{ fr.DVLS }}.
		</td>
	</tr>
	<tr>
		<td>
Dossier de destination
		</td>
		<td>
Saisir le nom du dossier dans lequel votre nouvelle entrée sera stockée dans {{ fr.DVLS }}.
		</td>
	</tr>
	<tr>
		<td>
Enregistrer
		</td>
		<td>
Enregistrer les paramètres de la nouvelle entrée de site Web et créer l'entrée.
		</td>
	</tr>
	<tr>
		<td>
Annuler
		</td>
		<td>
Annuler la création d'une nouvelle entrée de site Web et effacer toute les modifications non sauvegardées des paramètres.
		</td>
	</tr>
</table>

{% snippet icon.badgeInfo %}
Consultez notre guide étape par étape pour [ajouter une entrée de site Web avec le {{ fr.WBEX }}](/fr/server/workspace-browser-extension/using-workspace-browser-extension/add-website-entry-workspace-browser-extension/).
{% endsnippet %}


