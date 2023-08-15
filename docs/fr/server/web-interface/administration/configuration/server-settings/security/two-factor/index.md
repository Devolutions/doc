---
title: Authentification deux facteurs
---
{% snippet icon.badgeInfo %} 
Cette fonctionnalité n'est disponible que pour {{ fr.DVLS }} version 2022 ou supérieure. 
{% endsnippet %}
 
Configurer l'authentification à deux facteurs dans {{ fr.DVLS }} pour ajouter une couche de sécurité supplémentaire à l'application.  

{{ fr.DVLS }} en charge plusieurs types d'authentification a deux facteurs. Vous pouvez configurer un type par défaut pour l'ensemble de votre organisation ou par utilisateur. Lorsque l'authentification à deux facteurs est configurée, les utilisateurs se connectent avec leur nom d'utilisateur/mot de passe ainsi qu'un produit d'authentification a deux facteurs.  

### Comment configurer un deux facteurs à partir de l'interface web 

{% youtube 'qb7umoKbUdg' %}  

## Paramètres 

1. Pour accéder à la configuration, allez dans ***Administration – Paramètres du serveur de mots de passe – Deux facteurs***. 
1. Choisir la manière dont vous souhaitez appliquer l'authentification à deux facteurs dans l'***Utilisation de 2FA***. 

<table>
	<tr>
		<th>

Option 
		</th>
		<th>
Description 
		</th>
	</tr>
	<tr>
		<td>
Aucun 
		</td>
		<td>
L'option n'est pas appliquée. 
		</td>
	</tr>
	<tr>
		<td>
Optionnel par utilisateur 
		</td>
		<td>
L'option est appliquée sur une base individuelle. L'administrateur choisit qui utilise l'authentification et quels produit ou technologie il utilise.  

Choisir cette option si tous les utilisateurs ne sont pas configurés pour l'authentification à deux facteurs. 
		</td>
	</tr>
	<tr>
		<td>
Obligatoire 
		</td>
		<td>
L'option est appliquée pour tous les utilisateurs. Un type d'authentification à deux facteurs par défaut est défini pour tous les utilisateurs. 
		</td>
	</tr>
</table>

3. Sélectionner qui reçoit les demandes de réinitialisation des utilisateurs. Vous pouvez choisir d'envoyer le courriel à tous les administrateurs de {{ fr.DVLS }} ou à un courriel spécifique. 
1. Si vous avez choisi d'envoyer des demandes de réinitialisation à une adresse courriel au lieu des administrateurs de {{ fr.DVLS }}, saisir l'adresse courriel dans ***Courriel spécifique***. 
1. Sélectionner les types d'authentification a deux facteurs avec lesquels les utilisateurs peuvent s'authentifier. Choisissez-en autant que nécessaire. 
1. Si vous avez choisi l'utilisation comme obligatoire à l'étape 3, choisir le type d'authentification par défaut. 
1. Sélectionner d'autres méthodes de connexion. Ces options seront proposées lorsque les utilisateurs n'auront pas accès à la méthode habituelle.  
![Administration - Paramètres de {{ fr.DVLS }}](https://webdevolutions.azureedge.net/docs/fr/server/clip10390.png)  
1. Lorsque l'utilisation de l'authentification à deux facteurs est définie sur ***Optionnel par utilisateur***, la méthode doit être configurée dans ***Administration - Utilisateurs - Deux facteurs*** pour chaque utilisateur. Vous pouvez également définir un type sur l'utilisateur s'il utilise un produit différent de la méthode par défaut. Voir [Modifier les utilisateurs](/fr/server/web-interface/administration/security-management/users/edit-user-two-factor/) pour plus d'informations.  
![Modifier l'utilisateur - 2 facteurs](https://webdevolutions.azureedge.net/docs/fr/server/ServerOp7014.png)  



