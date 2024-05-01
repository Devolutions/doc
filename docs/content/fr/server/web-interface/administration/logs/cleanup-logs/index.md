---
eleventyComputed:
  title: Effacer les journaux
---
La fonctionnalité ***Effacer les journaux*** permet d'archiver les journaux présents dans la base de données qui sont plus anciens qu'une période définie dans les paramètres sélectionnés. Aussi, ces archives peuvent aussi être supprimées s'ils sont plus anciens que la période limite sélectionnée dans les paramètres.
![Administration - Effacer les journaux](https://cdnweb.devolutions.net/docs/fr/server/ServerOp8151.png)

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
Activer l'effacement automatique
		</td>
		<td>
Active l'archivage et l'effacement automatique des journaux présents dans la base de données.
		</td>
	</tr>
	<tr>
		<td>
Effectuer à chaque jour à
		</td>
		<td>
Heure d'exécution quotidienne de l'archivage et de l'effacement des journaux.
		</td>
	</tr>
	<tr>
		<td>
Utiliser l'archivage
		</td>
		<td>
Lorsqu'activé, permet d'archiver les journaux dans la base de données avant de les supprimer définitivement selon les options sélectionnées.
		</td>
	</tr>
	<tr>
		<td>
Archiver les journaux plus anciens que
		</td>
		<td>
Sélectionner la période à laquelle les journaux seront conservés dans les tables courantes de la base de données.Toutes les entrées de journaux ayant une date de création plus vieille que le paramètre sélectionné seront archivées.

Choix possibles :

* ***Un mois***
* ***Trois mois***
* ***Six mois***
* ***Un an***
* ***Deux ans***
		</td>
	</tr>
	<tr>
		<td>
Supprimer les journaux archivés plus anciens que
		</td>
		<td>
Sélectionner la période à laquelle les journaux archivés seront conservés dans les tables d'archives dans la base de données. Toutes les entrées archivées des journaux plus vieilles que le paramètre sélectionné seront supprimées définitivement des tables d'archives de la base de données.

Choix possibles :

* ***Trois mois***
* ***Six mois***
* ***Un an***
* ***Deux ans***
		</td>
	</tr>
	<tr>
		<td>
Sauter l'archivage et supprimer de façon permanente
		</td>
		<td>
Activer cette option pour supprimer les journaux définitivement sans les archiver dans la base de données.
		</td>
	</tr>
	<tr>
		<td>
Supprimer les journaux plus anciens que
		</td>
		<td>
Sélectionner la période à laquelle les journaux seront supprimés définitivement des tables d'archives de la base de données.

Choix possibles :

* ***Trois mois***
* ***Six mois***
* ***Un an***
* ***Deux ans***
		</td>
	</tr>
	<tr>
		<td>
Avancée
		</td>
		<td>
[Configuration avancée](/fr/server/web-interface/administration/logs/cleanup-logs/advanced-cleanup-logs-configuration/) pour sélectionner les conditions d'archivages et de suppressions de chacun des journaux individuellement.
		</td>
	</tr>
</table>
