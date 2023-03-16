---
title: Authentification deux facteurs
---
{% snippet icon.badgeInfo %} 
Cette fonctionnalité n&apos;est disponible que pour {{ fr.RDMS }} version 2022 ou supérieure. 
{% endsnippet %}
 
Configurer l&apos;authentification à deux facteurs dans {{ fr.RDMS }} pour ajouter une couche de sécurité supplémentaire à l&apos;application.  

{{ fr.RDMS }} en charge plusieurs types d&apos;authentification a deux facteurs. Vous pouvez configurer un type par défaut pour l&apos;ensemble de votre organisation ou par utilisateur. Lorsque l&apos;authentification à deux facteurs est configurée, les utilisateurs se connectent avec leur nom d&apos;utilisateur/mot de passe ainsi qu&apos;un produit d&apos;authentification a deux facteurs.  

### Comment configurer un deux facteurs à partir de l&apos;interface web 

{% youtube 'qb7umoKbUdg' %}  

## Paramètres 

1. Pour accéder à la configuration, allez dans ***Administration – Paramètres du serveur de mots de passe – Deux facteurs*** . 
1. Choisir la manière dont vous souhaitez appliquer l&apos;authentification à deux facteurs dans l&apos; ***Utilisation de 2FA*** . 

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
L&apos;option n&apos;est pas appliquée. 
		</td>
	</tr>
	<tr>
		<td>
Optionnel par utilisateur 
		</td>
		<td>
L&apos;option est appliquée sur une base individuelle. L&apos;administrateur choisit qui utilise l&apos;authentification et quels produit ou technologie il utilise.  

Choisir cette option si tous les utilisateurs ne sont pas configurés pour l&apos;authentification à deux facteurs. 
		</td>
	</tr>
	<tr>
		<td>
Obligatoire 
		</td>
		<td>
L&apos;option est appliquée pour tous les utilisateurs. Un type d&apos;authentification à deux facteurs par défaut est défini pour tous les utilisateurs. 
		</td>
	</tr>
</table>

3. Sélectionner qui reçoit les demandes de réinitialisation des utilisateurs. Vous pouvez choisir d&apos;envoyer le courriel à tous les administrateurs de {{ fr.RDMS }} ou à un courriel spécifique . 
1. Si vous avez choisi d&apos;envoyer des demandes de réinitialisation à une adresse courriel au lieu des administrateurs de {{ fr.RDMS }} , saisir l&apos;adresse courriel dans ***Courriel spécifique*** . 
1. Sélectionner les types d&apos;authentification a deux facteurs avec lesquels les utilisateurs peuvent s&apos;authentifier. Choisissez-en autant que nécessaire. 
1. Si vous avez choisi l&apos;utilisation comme obligatoire à l&apos; étape 3, choisir le type d&apos;authentification par défaut. 
1. Sélectionner d&apos;autres méthodes de connexion. Ces options seront proposées lorsque les utilisateurs n&apos;auront pas accès à la méthode habituelle.  
![Administration - Paramètres de Devolutions Password Server](/img/fr/server/clip10390.png)  
1. Lorsque l&apos;utilisation de l&apos;authentification à deux facteurs est définie sur ***Optionnel par utilisateur*** , la méthode doit être configurée dans ***Administration - Utilisateurs - Deux facteurs*** pour chaque utilisateur. Vous pouvez également définir un type sur l&apos;utilisateur s&apos;il utilise un produit différent de la méthode par défaut. Voir [Modifier les utilisateurs](/fr/server/web-interface/administration/security-management/users/edit-user-two-factor/) pour plus d&apos;informations.  
![Modifier l'utilisateur - 2 facteurs](/img/fr/server/ServerOp7014.png)  



