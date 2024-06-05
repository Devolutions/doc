---
eleventyComputed:
  title: Gestion des identifiants
  description: Selon les politiques de sécurité de votre organisation, il existe plusieurs manières de gérer les identifiants.
---
Selon les politiques de sécurité de votre organisation, il existe plusieurs manières de gérer les identifiants. Nous pouvons gérer un large éventail de scénarios ; les plus populaires sont listés ci-dessous. Il est crucial de comprendre que ce sont les identifiants utilisés pour se connecter aux hôtes distants, et non ceux que vous utilisez pour lancer {{ fr.RDMMAC }}.

{% snippet, "badgeInfo" %}
La plupart de ces sélections n'existent pas dans l'édition gratuite de {{ fr.RDMMAC }} car elles dépendent des fonctionnalités offertes par une [Source de Données Avancée](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/).
{% endsnippet %}

Ci-dessous quelques points clés dont l'administrateur de la solution doit être conscient :

|  |  |
|------------------------------------------|-------------|
| Visibilité du mot de passe  | Vous pouvez stocker les mots de passe dans une entrée d'identifiants (entrée nom d'utilisateur/mot de passe), qui, par défaut, rend le mot de passe utilisable mais non visible par l'utilisateur final. Nous fournissons plusieurs types d'entrées d'identifiants. Vous devriez toujours considérer soigneusement quel type vous utilisez en fonction de vos besoins administratifs et de sécurité. |
| Identifiants définis sur les dossiers | Nos dossiers peuvent avoir des identifiants définis. Cela est utile car, dans la plupart des cas, les mêmes identifiants sont réutilisés pour toute une branche de l'infrastructure réseau. Pour utiliser les identifiants définis dans un dossier, les sessions enfants doivent être ajustées pour utiliser les identifiants hérités. |
| Emplacement de l'entrée | Lors du stockage des entrées dans la vue en arborescence, les utilisateurs ayant les permissions de vue sur cette entrée (ou dossier par héritage) pourront les utiliser. C'est ainsi que vous partagez les identifiants avec d'autres membres de votre équipe. Un [{{ fr.UVLT }}](/rdm/mac/user-interface/navigation-pane/user-vault/) existe pour que les utilisateurs puissent stocker des informations personnelles qui ne devraient être vues par personne d'autre. Les identifiants stockés de cette manière peuvent toujours être accédés dans la zone publique du système en les référençant ou via la fonctionnalité Paramètres Spécifiques à l'Utilisateur décrite ci-dessous. |
| Paramètres Spécifiques à l'Utilisateur | [Paramètres Spécifiques à l'Utilisateur](/rdm/mac/commands/edit/setting-overrides/user-specific-settings/) sont des surcharges partielles pour vos paramètres d'entrée, y compris les identifiants. Lorsque vous appliquez une telle surcharge, vous pouvez choisir le type d'identifiants directement dans la surcharge ou vous pouvez choisir de lier à des identifiants stockés ailleurs, tels que le [{{ fr.UVLT }}](/rdm/mac/user-interface/navigation-pane/user-vault/). |

Voici les scénarios les plus courants et les moyens de les résoudre. Dans la majorité des cas, nous préférons que les sessions utilisent des identifiants hérités, ce qui signifie qu'elles remontent l'arborescence jusqu'à avoir accès à un ensemble d'identifiants, qu'ils soient définis, liés ou surchargés dans une entrée.

| SCÉNARIO | STRATÉGIE |
|----------|------------------------------------------------------------------------------------------------------------|
| Un ensemble d'identifiants est utilisé par tout le personnel, que ce soit pour tout le système ou pour une branche dans votre vue en arborescence (client, département, etc.). | Définir les identifiants dans les [paramètres {{ fr.VLT_MAJ }}](/rdm/mac/commands/administration/vault-settings/). Tous les enfants utilisent des identifiants hérités. |
| Chaque utilisateur a ses propres identifiants pour de nombreuses branches différentes (souvent correspondant à des clients/départements, etc.). | Utiliser les [Paramètres Spécifiques à l'Utilisateur](/rdm/mac/commands/edit/setting-overrides/user-specific-settings/) sur chaque branche. Tous les enfants utilisent des identifiants hérités. |
| Chaque utilisateur a ses propres identifiants gérés par un administrateur. | Cette solution implique un peu plus de travail. L'administrateur doit créer un dossier pour chaque utilisateur, puis accorder des permissions uniquement à cet utilisateur. L'utilisateur utilisera ensuite les [Paramètres Spécifiques à l'Utilisateur](/rdm/mac/commands/edit/setting-overrides/user-specific-settings/) pour spécifier que les identifiants stockés dans ce dossier sont utilisés pour remplacer ce qui est défini dans les entrées. |
| Chaque équipe utilise les mêmes identifiants. | Comme ci-dessus, mais tous les membres de l'équipe ont accès au dossier. Ils doivent tous utiliser les [Paramètres Spécifiques à l'Utilisateur](/rdm/mac/commands/edit/setting-overrides/user-specific-settings/). |
| Chaque utilisateur utilise son compte de domaine. | Configurer les sessions pour utiliser [Mes Identifiants Personnels](/rdm/mac/commands/file/my-account-settings/). Chaque utilisateur sera invité à les définir une fois par poste de travail qu'ils utilisent. |