---
eleventyComputed:
  title: Statut
---
Le ***Statut*** vous permet de modifier le statut d'une session.

## Paramètres

![Accueil - Statut](https://cdnweb.devolutions.net/docs/fr/rdm/mac/clip409.png)

<table>
	<tr>
		<td>
Option
		</td>
		<td>
Description
		</td>
	</tr>
		<td>
Modifier
		</td>
		<td>
Cela vous permettra d'écrire un message d'état de session qui s'affichera chaque fois qu'un utilisateur ouvrira une session.
		</td>
	</tr>
		<td>
Par défaut
		</td>
		<td>
Cela rétablira le statut par défaut.
		</td>
	</tr>
		<td>
Verrouillé
		</td>
		<td>
Cela permet à l'utilisateur qui a verrouillé la session de l'utiliser et de bloquer les autres.
		</td>
	</tr>
		<td>
Désactivé
		</td>
		<td>
Une session désactivée ne peut pas être ouverte. Ceci est principalement utilisé lorsque vous ne souhaitez pas le supprimer, mais évitez toute connexion sans surveillance. Il est également utile de désactiver un compte pour l'un de vos anciens clients.
		</td>
	</tr>
		<td>
Avertissement
		</td>
		<td>
Cet état permet d'utiliser la session, mais affiche un message à l'utilisateur avant son ouverture.
		</td>
	</tr>
		<td>
Expiré
		</td>
		<td>
Une session expirée ne peut pas être ouverte. Il peut être défini manuellement ou automatiquement si la date d'expiration de la session est définie dans sa propriété.
		</td>
	</tr>
</table>

{% snippet, "shieldCaution" %}
Si vous utilisez l'option ***Verrouillé***, la session sera verrouillée pour les autres utilisateurs uniquement, mais le détenteur du verrou peut toujours l'utiliser.
{% endsnippet %}


