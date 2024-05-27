---
eleventyComputed:
  title: Fournisseur de sécurité
---
Le fournisseur de sécurité est disponible dans ***Administration - Fournisseur de sécurité***. Le fournisseur de sécurité est responsable du cryptage des données dans la base de données.

{% snippet, "badgeInfo" %}
Cette fonctionnalité nécessite une [Source de données avancées](/fr/rdm/mac/data-sources/data-sources-types/advanced-data-sources/).
{% endsnippet %}

{% snippet, "badgeInfo" %}
Quel que soit le fournisseur de sécurité que vous avez sélectionné, les mots de passe stockés dans la source de données sont TOUJOURS cryptés à l'aide du cryptage AES 256 bits.
{% endsnippet %}

{% snippet, "shieldNotice" %}
En utilisant un fournisseur de sécurité, vous vous assurez que personne ne peut lire vos données de configuration d'entrée, même lorsque des personnes ont un accès direct à vos bases de données ou à une sauvegarde. Vous devez toujours l'utiliser lorsque vous utilisez une source de données qui n'est pas locale.
{% endsnippet %}


## Paramètres

{% snippet, "badgeInfo" %}
Changer un fournisseur de sécurité sur une source de données avec un grand nombre d'entrées est une opération longue.
{% endsnippet %}

{% snippet, "badgeInfo" %}
L'application d'un nouveau fournisseur de sécurité traite toute la base de données, nous vous conseillons donc de créer une sauvegarde avant cette opération.
{% endsnippet %}


1. Cliquer sur ***Modifier les paramètres de sécurité*** pour changer le fournisseur de sécurité.
![Modifier les paramètres de sécurité](https://cdnweb.devolutions.net/docs/fr/rdm/mac/clip4110.png)
1. Sélectionner votre nouveau ***Type de sécurité*** dans le menu déroulant.
![Type de sécurité](https://cdnweb.devolutions.net/docs/fr/rdm/mac/clip4111.png)

<table>
	<tr>
		<td>
Option
		</td>
		<td>
Description
		</td>
	</tr>
	<tr>
		<td>
Default
		</td>
		<td>
Il s'agit du fournisseur de sécurité hérité. Les données sont cryptées si la configuration des entrées est définie en conséquence dans les paramètres avancés des entrées.
		</td>
	</tr>
	<tr>
		<td>
Shared passphrase (v2)
		</td>
		<td>
Voir ci-dessous pour plus de détails.
		</td>
	</tr>
	<tr>
		<td>
Certificate
		</td>
		<td>
Voir ci-dessous pour plus de détails.
		</td>
	</tr>
</table>

### Shared Passphrase (v2)

{% snippet, "badgeWarning" %}
Si la phrase secrète est perdue, rien ne peut être fait pour récupérer les données. Copiez-le toujours dans un endroit sûr lors de sa création.
{% endsnippet %}


Toutes les données de configuration des entrées sont cryptées avec un mélange de clés stockées dans {{ fr.RDM }} et la phrase secrète que vous avez entrée. La phrase secrète est requise que lors de la configuration de la source de données.

### Certificate

Si vous avez choisi le ***Certificate*** comme fournisseur de sécurité, il cryptera les données de configuration d'entrée avec un mélange de clés stockées dans {{ fr.RDM }} et la clé privée contenue dans le certificat.
![Fournisseur de certificat de sécurité](https://cdnweb.devolutions.net/docs/fr/rdm/mac/clip4112.png)

<table>
	<tr>
		<td>
Option
		</td>
		<td>
Description
		</td>
	</tr>
	<tr>
		<td>
Empreinte numérique
		</td>
		<td>
Sélectionner un certificat qui existe déjà pour l'utiliser dans le chiffrement.
		</td>
	</tr>
</table>
