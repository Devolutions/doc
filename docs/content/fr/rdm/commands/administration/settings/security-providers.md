---
eleventyComputed:
  title: Fournisseur de sécurité
---
{% youtube 'uaM3UoyghFc' %}

Le ***Fournisseur de sécurité*** est disponible dans ***Administration - Fournisseur de sécurité***. Il est responsable du cryptage des données dans la base de données.

{% snippet, "badgeInfo" %}
Cette fonctionnalité nécessite une [Source de données avancées](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/).
{% endsnippet %}

{% snippet, "badgeInfo" %}
Quel que soit le fournisseur de sécurité que vous avez sélectionné, les mots de passe stockés dans la source de données sont TOUJOURS cryptés à l'aide du cryptage AES 256 bits.
{% endsnippet %}

{% snippet, "shieldNotice" %}
En utilisant un fournisseur de sécurité, vous vous assurez que personne ne peut lire vos données de configuration d'entrée, même lorsque des personnes ont un accès direct à vos bases de données ou à une sauvegarde. Vous devez toujours l'utiliser lorsque vous utilisez une source de données qui n'est pas locale.
{% endsnippet %}

{% snippet, "shieldCaution" %}
Avant d'appliquer un nouveau ou de modifier le fournisseur de sécurité existant, assurez-vous que tous les utilisateurs sont déconnectés de la source de données. Si vous modifiez la phrase secrète ou un certificat partagé existant, veuillez noter que les utilisateurs auront de nouveau accès à la source de données lorsqu'ils auront la nouvelle phrase secrète ou le certificat partagé sur leur ordinateur.
{% endsnippet %}

## Paramètres

{% snippet, "badgeInfo" %}
Changer un fournisseur de sécurité sur une source de données avec un grand nombre d'entrées est une opération longue.
{% endsnippet %}

{% snippet, "badgeCaution" %}
L'application d'un nouveau fournisseur de sécurité traite toute la base de données, nous vous conseillons donc de créer une sauvegarde avant cette opération.
{% endsnippet %}

1. Cliquer sur ***Modifier les paramètres de sécurité*** pour changer le fournisseur de sécurité.
![Fourniseur de sécurité](https://cdnweb.devolutions.net/docs/fr/rdm/windows/clip10284.png)
1. Sélectionner votre nouveau ***Type de sécurité*** dans le menu déroulant.
![Type de sécurité](https://cdnweb.devolutions.net/docs/fr/rdm/windows/clip10285.png)

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
Default
		</td>
		<td>
Il s'agit du fournisseur de sécurité hérité. Les données sont cryptées si la configuration des entrées est définie en conséquence dans les paramètres avancés des entrées.
		</td>
	</tr>
	<tr>
		<td>
Shared passphrase
		</td>
		<td>
Configurer une phrase secrète partagée pour le fournisseur de sécurité.
		</td>
	</tr>
	<tr>
		<td>
Certificate
		</td>
		<td>
Configurer un certificat pour le fournisseur de sécurité.
		</td>
	</tr>
</table>

## Shared passphrase (v2)

{% snippet, "shieldWarning" %}
Si la phrase secrète est perdue, rien ne peut être fait pour récupérer les données. Copiez-le toujours dans un endroit sûr lors de sa création.
{% endsnippet %}

![Fournisseur de sécurité - Phrase secrète](https://cdnweb.devolutions.net/docs/fr/rdm/windows/clip3436.png)

Toutes les données de configuration des entrées sont cryptées avec un mélange de clés stockées dans {{ fr.RDM }} et la phrase secrète que vous avez entrée. La phrase secrète est requise que lors de la configuration de la source de données.

Une stratégie peut être activée pour toujours demander la phrase secrète lors de la connexion à la source de données.

## Certificate

Si vous avez choisi le ***Certificate*** comme fournisseur de sécurité, il cryptera les données de configuration d'entrée avec un mélange de clés stockées dans {{ fr.RDM }} et la clé privée contenue dans le certificat.
![Fournisseur de certificat de sécurité](https://cdnweb.devolutions.net/docs/fr/rdm/windows/clip10286.png)

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
Emplacement
		</td>
		<td>
Indiquer l'emplacement du certificat. Choisir entre :

* Utilisateur actuel
* Machine locale
		</td>
	</tr>
	<tr>
		<td>
Boutique
		</td>
		<td>
Indiquer l'emplacement de la boutique du certificat. Choisir entre :

* Carnet d'adresses
* Racine de l'autorisation
* Autorité de certificat
* Refusé
* Mon
* Racine
* Personnes de confiance
* Éditeurs de confiance
		</td>
	</tr>
	<tr>
		<td>
Empreinte numérique
		</td>
		<td>
Sélectionner un certificat RSA qui existe déjà pour l'utiliser dans le chiffrement.
		</td>
	</tr>
</table>

### Créer un certificat

Il est possible de créer un certificat auto-signé en cliquant sur ***Créer le certificat***.
![Certificat d'auto-signature](https://cdnweb.devolutions.net/docs/fr/rdm/windows/clip10288.png)

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
Nom commun
		</td>
		<td>
Nom du certificat.
		</td>
	</tr>
	<tr>
		<td>
Taille de la clé (bits)
		</td>
		<td>
Indique la taille de clé (bits) du certificat.
		</td>
	</tr>
	<tr>
		<td>
Valide à partir de
		</td>
		<td>
Date de début du certificat.
		</td>
	</tr>
	<tr>
		<td>
Valide jusqu'au
		</td>
		<td>
Date d'expiration du certificat.
		</td>
	</tr>
	<tr>
		<td>
Enregistrer dans fichier (pfx)
		</td>
		<td>
Enregistrer le certificat dans un fichier *.pfx et sécurisez ce certificat avec un mot de passe.
		</td>
	</tr>
	<tr>
		<td>
Enregistrer dans le magasin de certificats
		</td>
		<td>
Indiquer l'emplacement et le magasin où enregistrer le certificat.
		</td>
	</tr>
</table>
