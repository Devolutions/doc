---
eleventyComputed:
  title: Générateur de port
---
Le ***Générateur de port*** vous permet de générer des ports pour vos connexions.

## Paramètres

![Générateur de port](https://cdnweb.devolutions.net/docs/fr/rdm/windows/clip10393.png)

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
Limites
		</td>
		<td>
Déterminer la plage de ports pour générer les ports entre ces 2 nombres.
		</td>
	</tr>
		<td>
Inclure les ports connus
		</td>
		<td>
Inclure les ports de la plage entre 0 et 1023. Ce sont les ports connus ou les ports système. Ils sont utilisés par les processus système qui fournissent des types de services réseau largement utilisés.
		</td>
	</tr>
		<td>
Inclure les ports enregistrés
		</td>
		<td>
Inclure les ports de la plage 1024 à 49151. Ils sont attribués par l'IANA pour un service spécifique sur demande par une entité requérante. Sur la plupart des systèmes, les ports enregistrés peuvent être utilisés par les utilisateurs non admin.
		</td>
	</tr>
		<td>
Inclure les ports utilisés pas d'autres sessions
		</td>
		<td>
Inclure les ports déjà utilisés par d'autres sessions.
		</td>
	</tr>
</table>
