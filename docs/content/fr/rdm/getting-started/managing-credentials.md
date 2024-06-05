---
eleventyComputed:
  title: Gestion des identifiants
  description: Selon les politiques de sécurité de votre organisation, il existe plusieurs manières de gérer les identifiants.
---
Selon les politiques de sécurité de votre organisation, il existe plusieurs manières de gérer les identifiants. Nous pouvons gérer un large éventail de scénarios ; les plus populaires sont listés ci-dessous. Il est crucial de comprendre que ce sont les identifiants utilisés pour se connecter aux hôtes distants, et non ceux que vous utilisez pour lancer {{ fr.RDM }}.

{% snippet, "badgeInfo" %}
La plupart de ces sélections n'existent pas dans l'édition gratuite de {{ fr.RDM }} car elles dépendent des fonctionnalités offertes par une [Source de Données Avancée](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/).
{% endsnippet %}

Ci-dessous quelques points clés dont l'administrateur de la solution doit être conscient :

| OPTION                    | DESCRIPTION |
|---------------------------|-------------|
| Visibilité du mot de passe       | Vous pouvez stocker les mots de passe dans une entrée d'identifiants (entrée nom d'utilisateur/mot de passe), qui, par défaut, rend le mot de passe utilisable mais non visible par l'utilisateur final. Plusieurs types d'entrées d'identifiants sont fournis. Il est important de choisir le type avec soin en fonction des besoins administratifs et de sécurité. |
| Identifiants définis sur les dossiers | Les dossiers peuvent avoir des identifiants définis, utiles pour réutiliser les mêmes identifiants à travers une branche de l'infrastructure réseau. Pour les utiliser, les sessions enfants doivent être ajustées pour utiliser les identifiants hérités.                                                                                      |
| Emplacement de l'entrée            | Stocker les entrées dans l'arborescence permet aux utilisateurs ayant des permissions de Vue sur cette entrée (ou dossier par héritage) de les utiliser, permettant le partage d'identifiants avec les membres de l'équipe. Un [{{ fr.UVLT }}](/rdm/windows/data-sources/user-vault/) est disponible pour stocker des informations personnelles de manière privée. Ces identifiants peuvent toujours être accessibles publiquement en les référençant ou via les Paramètres Spécifiques à l'Utilisateur.                                                                     |
| Paramètres Spécifiques à l'Utilisateur    | Les [Paramètres Spécifiques à l'Utilisateur](/rdm/windows/commands/edit/setting-overrides/specific-settings/) fournissent des remplacements partiels pour les paramètres d'entrée, y compris les identifiants. Les remplacements permettent de sélectionner directement les identifiants ou de les lier à des identifiants stockés ailleurs, comme dans le [{{ fr.UVLT }}](/rdm/windows/data-sources/user-vault/). |

Voici les scénarios les plus courants et les moyens de les résoudre. Dans la majorité des cas, nous préférons que les sessions utilisent des identifiants hérités, ce qui signifie qu'elles remontent l'arborescence jusqu'à ce qu'elles aient accès à un ensemble d'identifiants, qu'ils soient définis, liés ou remplacés dans une entrée.

| SCÉNARIO                                                      | STRATÉGIE |
|---------------------------------------------------------------|----------|
| Un ensemble d'identifiants est utilisé par tout le personnel, que ce soit pour l'ensemble du système ou pour une branche dans votre arborescence (client, département, etc.). | Définir les identifiants dans les [paramètres {{ fr.VLT_MAJ }}](/rdm/windows/commands/administration/settings/vault-settings/default-security-entries/). Tous les enfants utilisent des identifiants hérités. |
| Chaque utilisateur a ses propres identifiants pour de nombreuses branches différentes (correspondant souvent à des clients/départements, etc.). | Utiliser les [Paramètres Spécifiques à l'Utilisateur](/rdm/windows/commands/edit/setting-overrides/specific-settings/) sur chaque branche. Tous les enfants utilisent des identifiants hérités.                                              |
| Chaque utilisateur a ses propres identifiants gérés par un administrateur. | Cette solution implique un peu plus de travail. L'administrateur doit créer un dossier pour chaque utilisateur, puis accorder des permissions uniquement à cet utilisateur. L'utilisateur utilisera ensuite les [Paramètres Spécifiques à l'Utilisateur](/rdm/windows/commands/edit/setting-overrides/specific-settings/) pour spécifier que les identifiants stockés dans ce dossier sont utilisés pour remplacer ce qui est défini dans les entrées. |
| Chaque équipe utilise les mêmes identifiants.                           | Comme ci-dessus, mais tous les membres de l'équipe ont accès au dossier. Ils doivent tous utiliser les [Paramètres Spécifiques à l'Utilisateur](/rdm/windows/commands/edit/setting-overrides/specific-settings/). |
| Chaque utilisateur utilise son compte de domaine.                           | Configurer les sessions pour utiliser [Mes Identifiants Personnels](/rdm/windows/commands/file/my-account-settings/my-personal-credentials/). Chaque utilisateur sera invité à les définir une fois par poste de travail qu'ils utilisent.                                                 |
