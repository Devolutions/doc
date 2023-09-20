---
eleventyComputed:
  title: Modèles de mot de passe
---
Les ***Modèles de mot de passe*** définissent les exigences pour le format du mot de passe : utilisation des caractères, mode, lisibilité.  

Les ***Modèles de mot de passe*** sont disponibles dans le générateur de mot de passe et peuvent être facultatifs ou obligatoires. 

## Paramètres 

### Créer un modèle de mot de passe 

1. Aller dans ***Fichier - Modèles*** et cliquer sur ***Modèles de mot de passe***.  
![Fichier - Modèles - Moèles de mot de passe](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/RdmWin7016.png) 

La fenêtre ***Modèles de mot de passe*** fournit un aperçu des modèles actuels, ainsi que des commandes d'ajout, de modification et de suppression. 

2. Pour ajouter un nouveau modèle, cliquer sur ***Ajouter***. 
1. Saisir un nom de modèle, choisir un mode et les paramètres spécifiques.  
![!!RdmWin7018](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/RdmWin7018.png) 

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
Par défaut 
		</td>
		<td>
Paramètres généraux concernant la longueur et les quantités minimales pour les caractères et les symboles. 
		</td>
	</tr>
		<td>
Paramètres avancés 
		</td>
		<td>
Paramètres de caractères granulaires (par exemple, caractères et symboles spéciaux, inclusions, exclusions). 
		</td>
	</tr>
		<td>
Mot de passe lisible 
		</td>
		<td>
Paramètres pour les syllabes, les nombres et les symboles. 
		</td>
	</tr>
		<td>
Utiliser un modèle 
		</td>
		<td>
Définir un modèle pour les mots de passe à l'aide de [Clé](/fr/rdm/windows/commands/tools/generators/password/). 
		</td>
	</tr>
		<td>
Mot de passe prononçable 
		</td>
		<td>
Paramètres de longueur, de casse, de chiffres et de caractères. 
		</td>
	</tr>
</table>

Le modèle de mot de passe est désormais disponible dans le générateur de mots de passe. 

### Utiliser un modèle de mot de passe avec le générateur de mot de passe 

1. Dans l'onglet ***Outils***, cliquer sur ***Générateur de mots de passe***. Ou ouvrir le ***Générateur de mot de passe*** à partir d'une entrée. 
1. Pour choisir un modèle de mot de passe, sélectionner le titre dans la liste. La valeur par défaut n'est équivalente à aucun modèle, jusqu'à ce qu'il soit configuré par un administrateur. Lorsque vous sélectionnez un modèle, les options ne sont pas disponibles car elles ont été enregistrées dans le modèle. 
1. Cliquer sur ***Générer*** pour répertorier les mots de passe possibles.  
![Générateur de mots de passe](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/RdmWin7019.png) 

### Définir un modèle de mot de passe par défaut 

Le modèle par défaut dans le ***Générateur de mot de passe*** est défini sur ***Par défaut*** jusqu'à ce qu'un administrateur configure le modèle.  

1. Dans ***Administration***, cliquer sur ***Paramètres du système***. 
1. Dans ***Gestion des mots de passe***, cliquer sur ***Modèles de mot de passe***. 
1. Le modèle choisi sera désormais le ***Par défaut*** dans le générateur de mot de passe. 

Si vous souhaitez forcer un modèle, cochez ***Forcer le modèle par défaut***. Aucun autre choix ne sera disponible dans le générateur de mot de passe.  
![Paramètres du système - Gestion des mots de passe - Modèles de mot de passe](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/RdmWin7020.png) 

