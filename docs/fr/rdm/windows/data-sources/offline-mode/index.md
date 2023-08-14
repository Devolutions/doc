---
title: Mettre hors-ligne
---
{% youtube 'W7jK8g4WbNQ' %}  

Le ***Mode hors-ligne*** se connecte à une copie locale de la source de données lorsque la source de données n'est pas disponible. Cela peut être utilisé lorsqu'un utilisateur travaille à partir d'un réseau déconnecté ou lorsqu'il existe des problèmes de connectivité avec la source de données.  

Le mode hors-ligne en lecture/écriture ajoute aux utilisateurs la possibilité de manipuler les entrées lorsqu'ils sont déconnectés de la source de données. Ceci est utile pour le personnel hors site ou lorsque vous travaillez dans des environnements disposant d'une disponibilité réseau sporadique.  

{% snippet icon.badgeInfo %} 
Cette fonctionnalité n'est pas disponible pour toutes les sources de données, veuillez consulter la rubrique d'aide de la source de données pour savoir si elle prend en charge le mode hors-ligne. 
{% endsnippet %}
 
{% snippet icon.badgeNotice %} 
Le cache hors ligne est d'abord chiffré à l'aide de notre propre clé privée mélangée à certaines informations provenant de l'ordinateur local. Cela rend impossible la lecture d'une copie sur une autre machine. Par défaut, il est également chiffré avec le chiffrement Windows NTFS, auquel cas aucune clé n'est enregistrée nulle part. 
{% endsnippet %}
 

Pour plus de sécurité, les fichiers hors connexion sont définis pour expirer après un certain délai. L'expiration par défaut est fixée à 7 jours, mais peut être modifiée via les [Paramètres du système](/fr/rdm/windows/commands/administration/settings/system-settings/application/offline/).  

{{ fr.RDM }} demandera le mode hors-ligne lorsque l'application ne parvient pas à atteindre la source de données.  

Vous pouvez activer manuellement le mode hors-ligne dans le menu ***Fichier – Mettre hors ligne***. Lorsque la connexion est de nouveau en ligne, utiliser le menu ***Fichier – Aller en ligne*** ou l'icône ***Actualiser*** pour vous reconnecter à la source de données.  

Certaines options ne seront pas disponibles en mode hors ligne:  

* Pièces jointes et journaux. 
* [Gestion des usagers](/fr/rdm/windows/commands/administration/management/user-management/) (Ajouter/Modifier/Supprimer des utilisateurs). 

## Disponibilité 

La disponibilité du mode hors ligne repose sur plusieurs paramètres:  

* Le mode de la cache hors ligne de la source de données doit être activé dans ***Fichier – Source de données – Avancé – Mode de la cache – Intelligente*** (cette étape doit être effectuée avant d'exporter votre source de données vers d'autres). 
* Le compte de l'utilisateur doit être activé dans ***Administration – Utilisateurs – Modifier – Paramètres – Mode hors connexion***. 
* Les stratégies de groupe d'utilisateurs (seulement pour la data source {{ fr.DVLS }}) dans ***Administration – Groupe d'utilisateurs – Modifier – Paramètres – Mode hors connexion***. 
* Les paramètres de la source de données dans ***Administration – Paramètres du système – Hors connexion – Mode Hors connexion*** et ***Expiration***. 
* Pour chaque coffre dans ***Administration – Paramètres du coffre – Paramètres de sécurité – Autoriser le mode hors ligne***. 

Le paramètre le plus bas (en termes de sécurité) prévaut sur les autres, ce qui peut vous empêcher d'utiliser le mode hors ligne. Si le bouton ***Mettre hors-ligne*** n'est pas disponible, veuillez consulter votre administrateur.  

Dans ***Fichier – Informations sur la source de données***, le ***Mode hors ligne*** affiche la taille du fichier hors ligne ainsi que le mode effectif (désactivé, en lecture seule ou accessible en écriture).  
![Fichier – Informations de la source de données – Mode hors ligne](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip11278.png) 

### Mode de la cache 

Le mode de mise en cache doit être défini sur ***En mémoire*** ou ***Fichier*** pour activer le mode hors ligne.  

{% snippet icon.badgeCaution %} 
Cette étape ne peut pas être modifiée à distance une fois que vous avez exporté vos paramètres de source de données. Vous devriez prendre un moment et réfléchir aux besoins de votre source de données et sélectionner ce qui est approprié avant de passer à l'exportation. 
{% endsnippet %}
 
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

{% snippet icon.badgeInfo %} 
Certaines fonctions de {{ fr.RDM }} ne sont pas disponibles lorsque vous êtes hors ligne. Même avec le mode d'accès lecture/écriture, il se peut que vous ne puissiez pas effectuer toutes les actions, telles que l'ajout de pièces jointes ou la gestion des utilisateurs, car ces fonctionnalités ne sont pas mises en cache localement. En revanche, le [{{ fr.UVLT }}](/fr/rdm/windows/data-sources/user-vault/) est toujours disponible en mode hors ligne. 
{% endsnippet %}
 
### Accorder/refuser le mode Hors-ligne 

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
Empêche l'utilisation d'un cache hors ligne. 
		</td>
	</tr>
	<tr>
		<td>
Lecture seule 
		</td>
		<td>
Autorise l'affichage et l'utilisation des entrées uniquement. Le contenu de la source de données ne peut pas être modifié. 
		</td>
	</tr>
	<tr>
		<td>
[Lecture/Écriture](/fr/rdm/windows/data-sources/offline-mode/offline-read-write/) 
		</td>
		<td>
Permets d'afficher, d'utiliser et de modifier des entrées. Les conflits causés par des modifications hors ligne sont gérés lors de la remise en ligne. 
		</td>
	</tr>
</table>

Au-delà des stratégies de groupe, le mode hors-ligne est contrôlé à ces niveaux:  

* Permissions des utilisateurs 
* Paramètres du système 
* Paramètres du coffre 

Un utilisateur doit être autorisé en lecture/écriture aux trois niveaux pour accorder ces privilèges.  

<table>
	<tr>
		<th>

PERMISSIONS DES UTILISATEURS 
		</th>
		<th>
PARAMÈTRES DU SYSTÈME 
		</th>
		<th>
PARAMÈTRES DU {{ fr.VLT }} 
		</th>
		<th>
ACCÈS 
		</th>
	</tr>
	<tr>
		<td>
Désactivé ou lecture seule ou lecture/écriture 
		</td>
		<td>
Désactivé ou lecture seule ou lecture/écriture 
		</td>
		<td>
Autoriser le hors-ligne est désactivé 
		</td>
		<td>
Désactivé 
		</td>
	</tr>
	<tr>
		<td>
Désactivé ou lecture seule ou lecture/écriture 
		</td>
		<td>
Désactivé ou lecture seule ou lecture/écriture 
		</td>
		<td>
Autoriser le hors-ligne activé 
		</td>
		<td>
Désactivé 
		</td>
	</tr>
	<tr>
		<td>
Désactivé ou lecture seule ou lecture/écriture 
		</td>
		<td>
Désactivé 
		</td>
		<td>
Autoriser le hors-ligne activé 
		</td>
		<td>
Désactivé 
		</td>
	</tr>
	<tr>
		<td>
Désactivé 
		</td>
		<td>
Désactivé ou lecture seule ou lecture/écriture 
		</td>
		<td>
Autoriser le hors-ligne activé 
		</td>
		<td>
Désactivé 
		</td>
	</tr>
	<tr>
		<td>
Lecture seule ou lecture/écriture 
		</td>
		<td>
Lecture seule ou lecture/écriture 
		</td>
		<td>
Autoriser le hors-ligne est désactivé 
		</td>
		<td>
Désactivé 
		</td>
	</tr>
	<tr>
		<td>
Lecture seule ou lecture/écriture 
		</td>
		<td>
Lecture seule ou lecture/écriture 
		</td>
		<td>
Autoriser le hors-ligne activé 
		</td>
		<td>
Lecture seule 
		</td>
	</tr>
	<tr>
		<td>
Lecture seule ou lecture/écriture 
		</td>
		<td>
Lecture seule 
		</td>
		<td>
Autoriser le hors-ligne activé 
		</td>
		<td>
Lecture seule 
		</td>
	</tr>
	<tr>
		<td>
Lecture seule 
		</td>
		<td>
Lecture seule ou lecture/écriture 
		</td>
		<td>
Autoriser le hors-ligne activé 
		</td>
		<td>
Lecture seule 
		</td>
	</tr>
	<tr>
		<td>
Lecture/Écriture 
		</td>
		<td>
Lecture/Écriture 
		</td>
		<td>
Autoriser le hors-ligne activé 
		</td>
		<td>
Lecture/Écriture 
		</td>
	</tr>
</table>

{% snippet icon.badgeNotice %} 
Pour connaître le mode hors ligne en vigueur lorsque vous êtes connecté, voir [Informations sur ma source de données](/fr/rdm/windows/commands/file/my-data-source-information/). 
{% endsnippet %}
 


