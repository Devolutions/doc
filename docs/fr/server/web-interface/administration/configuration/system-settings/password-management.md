---
title: Gestion des mots de passe
---
La ***Politique de mot de passe*** permet de définir les exigences minimales pour les mots de passe qui seront enregistrés dans les entrées.  
![Administration – Paramètres du système – Gestion des mots de passe](/img/fr/server/clip10376.png) 

<table>
	<tr>
		<th>

Mot de passe 
		</th>
		<th>
Description 
		</th>
	</tr>
	<tr>
		<td>
Historique des mots de passe 
		</td>
		<td>
Indiquer le nombre de mots de passe maximum enregistré à conserver dans l&apos;historique 
		</td>
	</tr>
	<tr>
		<td>
Calculateur de force de mot de passe 
		</td>
		<td>
Sélectionner l&apos;outil à utiliser pour analyser la force du mot de passe. 
		</td>
	</tr>
</table>

<table>
	<tr>
		<th>

Avancée 
		</th>
		<th>
Description 
		</th>
	</tr>
	<tr>
		<td>
Désactiver la sauvegarde du mot de passe (partagé) 
		</td>
		<td>
Empêcher les utilisateurs d&apos;enregistrer les mots de passe dans les entrées. 
		</td>
	</tr>
	<tr>
		<td>
Désactiver l&apos;enregistrement de mot de passe (paramètres spécifiques de l&apos;utilisateur) 
		</td>
		<td>
Empêcher les utilisateurs d&apos;enregistrer les mots de passe dans les paramètres spécifiques à l&apos;utilisateur. 
		</td>
	</tr>
	<tr>
		<td>
Permettre de voir les identifiants (si activé dans l&apos;entrée) 
		</td>
		<td>
Afficher les identifiants si la case &quot;Autoriser les identifiants&quot; est cochée dans l&apos;entrée. 
		</td>
	</tr>
	<tr>
		<td>
Désactiver l&apos;enregistrement de mot de passe (outils) 
		</td>
		<td>
Empêcher les utilisateurs d&apos;enregistrer les mots de passe dans l&apos;onglet ***Outils*** d&apos;une session. 
		</td>
	</tr>
	<tr>
		<td>
Autoriser des variables de mots de passe pour toutes les entrées 
		</td>
		<td>
Autoriser l&apos;utilisation de la variable ***$PASSWORD$*** pour cette source de données. 
		</td>
	</tr>
	<tr>
		<td>
Autoriser des variables de mots de passe dans les macros 
		</td>
		<td>
Autoriser la variable ***$MACRO_PASSWORD$*** pour cette source de données. 
		</td>
	</tr>
</table>

<table>
	<tr>
		<th>

Modèle de mot de passe 
		</th>
		<th>
Description 
		</th>
	</tr>
	<tr>
		<td>
Modèle p. déf. 
		</td>
		<td>
Modèle de mots de passe par défault utilisé par le système. Des modèles peuvent être créés dans [Modèles de mot de passe](/fr/server/web-interface/administration/templates/password-templates/) . 
		</td>
	</tr>
	<tr>
		<td>
Forcer le modèle par défaut 
		</td>
		<td>
Force l&apos;utilisation du modèle par défaut lorsque l&apos;option est activée. 
		</td>
	</tr>
</table>

<table>
	<tr>
		<th>

Validation du mot de passe 
		</th>
		<th>
Description 
		</th>
	</tr>
	<tr>
		<td>
Vérifier si mot de passe interdit 
		</td>
		<td>
Une vérification du mot de passe parmi la liste des [Mot de passe interdit](/fr/server/web-interface/administration/configuration/system-settings/forbidden-password/) est effectuée si activé. 
		</td>
	</tr>
	<tr>
		<td>
Vérifier le modèle de mot de passe 
		</td>
		<td>
* ***Aucun*** : Aucun modèle de mot de passe ne sera utilisé lors de la création du mot de passe.  
* ***Obligatoire*** : Lors de la création du mot de passe, l&apos;utilisateur recevra un avertissement indiquant que le mot de passe ne répond pas aux règles du modèle de mot de passe. L&apos;utilisateur ne peut pas enregistrer le mot de passe.  
* ***Avertissement*** : Lors de la création du mot de passe, l&apos;utilisateur recevra un avertissement indiquant que le mot de passe ne répond pas aux règles du modèle de mot de passe. L&apos;utilisateur peut enregistrer le mot de passe.  
		</td>
	</tr>
	<tr>
		<td>
Vérification de compromission (pwned) 
		</td>
		<td>
Vérifier si les mots de passe utilisés ont déjà été exposés à des violations de données. 
		</td>
	</tr>
</table>


