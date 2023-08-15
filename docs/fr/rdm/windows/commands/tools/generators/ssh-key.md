---
title: Générateur de clé SSH
---
Les clés SSH offrent un moyen sécurisé de se connecter à un serveur privé virtuel avec SSH plutôt que d'utiliser seulement un mot de passe. Alors qu'un mot de passe peut éventuellement être piraté avec une attaque par force brute, les clés SSH sont presque impossibles à déchiffrer uniquement par la force brute.  

## Paramètres 

![Générateur de clé SSH](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip10864.png) 

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
Type de clé 
		</td>
		<td>
Vous pouvez choisir entre :  

RSA : Peut être utilisé pour la signature/vérification et également pour le chiffrement/déchiffrement. Lors de l'utilisation de RSA, il est recommandé d'utiliser une taille de clé de 2048 bits.  

DSA : Il ne peut être utilisé que pour la signature/vérification, il ne crypte ni ne décrypte. Lorsque vous utilisez DSA, il est recommandé d'utiliser une taille de clé de 1024 bits. 
		</td>
	</tr>
		<td>
Longueur de la clé 
		</td>
		<td>
Vous pouvez choisir la taille de votre clé SSH entre 1024 bits (taille de clé minimale) à 8192 bits (taille de clé maximale). 
		</td>
	</tr>
		<td>
Commentaire 
		</td>
		<td>
Saisir votre nom d'utilisateur et le nom de l'ordinateur vers lequel vous transférez votre clé. 
		</td>
	</tr>
		<td>
Charger la clé privée 
		</td>
		<td>
Cette fonctionnalité vous permettra d'importer une clé SSH précédemment enregistrée. 
		</td>
	</tr>
		<td>
Enregistrer la clé publique 
		</td>
		<td>
L'enregistrement de la clé publique générera un fichier .pub. Entrer un nom de fichier lorsque vous y êtes invité. 
		</td>
	</tr>
		<td>
Enregistrer la clé privée 
		</td>
		<td>
Vous aurez la possibilité de sauvegarder votre clé privée sous différents formats, choisissez entre :  

* Clé privé PKCS (*.pri) 
* Clé privé Putty (*.ppk) 
* Clé privé OpenSSH (*.pri) 
		</td>
	</tr>
</table>

Si vous n'avez pas spécifié de phrase secrète, vous devrez confirmer que vous ne souhaitez pas utiliser de phrase secrète. 
{% snippet icon.badgeCaution %} 
Si vous utilisez le [Gestionnaire de l'agent des clés](/fr/rdm/windows/commands/tools/tools/key-agent-manager/), vous devez choisir le format de fichier Putty (.ppk) ou le format de fichier OpenSSH (.pri). La clé privée PKCS n'est pas un format de fichier pris en charge pour le gestionnaire de l'agent des clés. 
{% endsnippet %}
 

