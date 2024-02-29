---
eleventyComputed:
  title: Agent {{ fr.RDM }}
---
L'{{ fr.RDMA }} est un outil très puissant qui permet d'exécuter des commandes sur plusieurs machines.
![Outils - Plus d'outils - {{ fr.RDMA }}](https://cdnweb.devolutions.net/docs/fr/rdm/windows/clip11234.png)

## Paramètres

Pour lancer un script via l'{{ fr.RDMA }}, vous devez d'abord ouvrir une connexion RDP sur toutes les machines sur lesquelles vous souhaitez exécuter le script. Une fois ouverte, sélectionner toutes les sessions ouvertes dans le ***{{ fr.NPANE }}***, cliquer dessus avec le bouton droit et sélectionner ***Exécuter le script par Agent***.

{% snippet icon.badgeInfo %}
L'exécution du script via l'Agent a besoin seulement de l'{{ fr.RDMA }} que lorsque le script est exécuté à partir de l'onglet Quick Script. {{ fr.RDM }} doit être entièrement installé sur l'ordinateur distant lorsque le script est exécuté à partir de l'onglet Outils/Scripts/Macros.
{% endsnippet %}

![Exécuter le script par Agent](https://cdnweb.devolutions.net/docs/fr/rdm/windows/clip11244.png)

### Quick Script - Message

![Quick Script - Message](https://cdnweb.devolutions.net/docs/fr/rdm/windows/ExecuteScriptMessage.png)

<table>
	<tr>
		<th>
OPTION
		</th>
		<th>
DESCRIPTION
		</th>
	</tr>
		<td>
Message
		</td>
		<td>
Envoyer un message à toutes les cibles.
		</td>
	</tr>
</table>

### Quick Script - Ligne de Commande (cmd.exe)

![Quick Script - Ligne de Commande](https://cdnweb.devolutions.net/docs/fr/rdm/windows/clip10407.png)

<table>
	<tr>
		<th>
OPTION
		</th>
		<th>
DESCRIPTION
		</th>
	</tr>
		<td>
Exécuter
		</td>
		<td>
Indique la ligne de commande que vous souhaitez exécuter.
		</td>
	</tr>
		<td>
Changer le chemin par défaut
		</td>
		<td>
Changer le chemin par défaut lorsque vous vous connectez à la session.
		</td>
	</tr>
		<td>
Exécuter en tant qu'administrateur
		</td>
		<td>
Élève le processus à exécuter en tant qu'administrateur.
		</td>
	</tr>
		<td>
Garder ouvert
		</td>
		<td>
Garde la fenêtre ouverte après l'exécution de la ligne de commande.
		</td>
	</tr>
</table>

### Quick Script - PowerShell

![Quick Script - PowerShell](https://cdnweb.devolutions.net/docs/fr/rdm/windows/clip10408.png)

<table>
	<tr>
		<th>
OPTION
		</th>
		<th>
DESCRIPTION
		</th>
	</tr>
		<td>
Commande
		</td>
		<td>
Indique la commande PowerShell que vous souhaitez exécuter.
		</td>
	</tr>
		<td>
Nom du fichier
		</td>
		<td>
Sélectionner un fichier PowerShell sur le réseau ou sur l'ordinateur.
		</td>
	</tr>
		<td>
Arguments
		</td>
		<td>
Arguments ajoutés à la commande.
		</td>
	</tr>
		<td>
Exécuter en tant qu'administrateur
		</td>
		<td>
Élève le processus à exécuter en tant qu'administrateur.
		</td>
	</tr>
		<td>
Aucun profil
		</td>
		<td>
Ne charge pas le profil Windows PowerShell.
		</td>
	</tr>
		<td>
Ne pas fermer
		</td>
		<td>
Ne se ferme pas après l'exécution des commandes de démarrage.
		</td>
	</tr>
</table>

### Quick Script - exécuter

![Quick Script - Exécuter](https://cdnweb.devolutions.net/docs/fr/rdm/windows/clip10409.png)

<table>
	<tr>
		<th>
OPTION
		</th>
		<th>
DESCRIPTION
		</th>
	</tr>
		<td>
Exécuter
		</td>
		<td>
Sélectionner le programme ou le fichier que vous souhaitez exécuter.
		</td>
	</tr>
		<td>
Arguments
		</td>
		<td>
Arguments ajoutés à la commande.
		</td>
	</tr>
		<td>
Changer le chemin par défaut
		</td>
		<td>
Changer le chemin par défaut lorsque vous vous connectez à la session.
		</td>
	</tr>
		<td>
Exécuter en tant qu'administrateur
		</td>
		<td>
Élève le processus à exécuter en tant qu'administrateur.
		</td>
	</tr>
</table>

### Quick Script - Scripts/outils

![Quick Script - Scripts/Outils](https://cdnweb.devolutions.net/docs/fr/rdm/windows/clip10410.png)

<table>
	<tr>
		<th>
OPTION
		</th>
		<th>
DESCRIPTION
		</th>
	</tr>
		<td>
Scripts/Outils
		</td>
		<td>
Sélectionner un script ou un outil de session que vous avez déjà créé dans {{ fr.RDM }}.
		</td>
	</tr>
</table>

### Liste des Macros/Scripts/Outils

![Scripts/Outils](https://cdnweb.devolutions.net/docs/fr/rdm/windows/clip10411.png)

Rechercher un script ou un outil que vous souhaitez exécuter via l'{{ fr.RDMA }}.

### Paramètres

![Avancée](https://cdnweb.devolutions.net/docs/fr/rdm/windows/clip10412.png)

<table>
	<tr>
		<th>
OPTION
		</th>
		<th>
DESCRIPTION
		</th>
	</tr>
		<td>
Ouvrir toutes les connexions
		</td>
		<td>
Lorsque plusieurs sessions sont sélectionnées pour exécuter le script via l'Agent, cela ouvrira toutes les connexions sélectionnées.
		</td>
	</tr>
		<td>
Délai
		</td>
		<td>
Entrer le délai entre l'ouverture de chaque session sélectionnée.
		</td>
	</tr>
</table>

### État de l'Agent

Ouvrir une session RDP, cliquer avec le bouton droit sur cette session unique et sélectionner ***État de l'Agent***. L'État de l'agent vous montrera que {{ fr.RDM }} est installé sur l'ordinateur distant ou non, que l'{{ fr.RDMA }} est actif ou non et combien de sessions {{ fr.RDMJ }} sont ouvertes.
![État de l'Agent](https://cdnweb.devolutions.net/docs/fr/rdm/windows/clip10413.png)
