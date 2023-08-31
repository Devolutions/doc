---
title: Gérer des identifiants
description: Selon les politiques de sécurité de votre organisation, il existe plusieurs façons de gérer les identifiants.
---
Selon les politiques de sécurité de votre organisation, il existe plusieurs façons de gérer les identifiants. Nous pouvons gérer un large éventail de scénarios; les plus populaires sont listés ci-dessous. Il est essentiel de comprendre que ce sont les identifiants utilisés pour se connecter à des hôtes distants, et non pas celles que vous utilisez pour lancer {{ fr.RDM }}. 

{% snippet icon.badgeInfo %} 
La plupart de ces sélections n'existent pas dans l'édition Free de {{ fr.RDM }}, car elles dépendent des fonctionnalités offertes par une [Source de données avancée](/fr/rdm/windows/data-sources/data-sources-types/advanced-data-sources/). 
{% endsnippet %}
 
Voici quelques points clés que l'administrateur de la solution doit connaître : 

<table>
	<tr>
		<td>

Visibilité du mot de passe 
		</td>
		<td>
Vous pouvez stocker les mots de passe dans une entrée d'identifiants (entrée de nom d'utilisateur / mot de passe) qui, par défaut, rend le mot de passe utilisable mais non visible par l'utilisateur final. Nous fournissons plusieurs types d'entrées d'identifiants. Vous devriez toujours considérer attentivement le type que vous utilisez en fonction de vos besoins administratifs et de sécurité. 
		</td>
	</tr>
	<tr>
		<td>
Identifiants définis sur les dossiers 
		</td>
		<td>
Nos dossiers peuvent avoir des identifiants définis. Cela est utile car, dans la plupart des cas, les mêmes identifiants sont réutilisés pour une branche entière de l'infrastructure réseau. Pour utiliser les identifiants définis dans un dossier, les sessions enfants doivent être ajustées pour utiliser les identifiants héritées. 
		</td>
	</tr>
	<tr>
		<td>
Emplacement des entrées 
		</td>
		<td>
Lors du stockage d'entrées dans l'arborescence, les utilisateurs disposant de la permission Afficher sur cette entrée (ou ce dossier par héritage) pourront les utiliser. C'est ainsi que vous partageriez vos identifiants avec d'autres membres de votre équipe. Il existe un [{{ fr.UVLT }}](/fr/rdm/windows/data-sources/user-vault/) permettant aux utilisateurs de stocker des informations personnelles qui ne devraient être vues par personne d'autre. Les identifiants stockés de cette manière sont toujours accessibles dans la zone publique du système en les référençant ou par le biais de la fonction Paramètres spécifiques de l'usager décrite ci-dessous. 
		</td>
	</tr>
	<tr>
		<td>
Paramètres spécifiques de l'usager 
		</td>
		<td>
Les [Paramètres spécifiques de l'usager](/fr/rdm/windows/commands/edit/setting-overrides/specific-settings/) sont des remplacements partiels pour les paramètres de vos entrées, notamment les identifiants. Lorsque vous appliquez un tel remplacement, vous pouvez choisir le type d'identifiants directement dans la substitution ou vous pouvez choisir de lier les identifiants stockés ailleurs, tels que le [{{ fr.UVLT }}](/fr/rdm/windows/data-sources/user-vault/). 
		</td>
	</tr>
</table>

Voici les scénarios les plus courants et les façons de les résoudre. Dans la majorité des cas, nous préférons que les sessions utilisent des identifiants hérités, ce qui signifie qu'elles grimpent dans l'arborescence jusqu'à ce qu'elles aient accès à un ensemble d'identifiants, qu'ils soient définis, liés ou outrepassés dans une entrée. 

<table>
	<tr>
		<th>

SCÉNARIO 
		</th>
		<th>
STRATÉGIE 
		</th>
	</tr>
	<tr>
		<td>
Un ensemble d'identifiants est utilisé par l'ensemble du personnel, que ce soit pour l'ensemble du système ou pour une branche de votre arborescence (client, département, etc.). 
		</td>
		<td>
Définir les identifiants sur les [Paramètres du {{ fr.VLT }}](/fr/rdm/windows/commands/administration/settings/vault-settings/default-security-entries/). Tous les enfants utilisent les identifiants héritées. 
		</td>
	</tr>
	<tr>
		<td>
Chaque utilisateur possède ses propres identifiants pour de nombreuses branches différentes (correspondant souvent à des clients/départements, etc.). 
		</td>
		<td>
Utiliser les [Paramètres spécifiques de l'usager](/fr/rdm/windows/commands/edit/setting-overrides/specific-settings/) sur chaque branche. Tous les enfants utilisent les identifiants héritées. 
		</td>
	</tr>
	<tr>
		<td>
Chaque utilisateur possède ses propres identifiants gérés par un administrateur. 
		</td>
		<td>
Cette solution implique un peu plus de travail. L'administrateur doit créer un dossier pour chaque utilisateur, puis accorder des autorisations uniquement à cet utilisateur. L'utilisateur utilisera ensuite les [Paramètres spécifiques de l'usager](/fr/rdm/windows/commands/edit/setting-overrides/specific-settings/) pour spécifier que les identifiants stockés dans ce dossier sont utilisés pour remplacer ce qui est défini dans les entrées. 
		</td>
	</tr>
	<tr>
		<td>
Chaque équipe utilise les mêmes identifiants. 
		</td>
		<td>
Comme ci-dessus, mais tous les membres de l'équipe ont accès au dossier. Ils doivent tous utiliser les [Paramètres spécifiques de l'usager](/fr/rdm/windows/commands/edit/setting-overrides/specific-settings/). 
		</td>
	</tr>
	<tr>
		<td>
Chaque utilisateur utilise son compte de domaine. 
		</td>
		<td>
Configurer les sessions pour utiliser [Mes identifiants personnels](/fr/rdm/windows/commands/file/my-account-settings/my-personal-credentials/). Chaque utilisateur sera invité à les définir une fois par poste de travail qu'il utilise. 
		</td>
	</tr>
</table>
