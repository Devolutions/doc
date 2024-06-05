---
eleventyComputed:
  title: Barre de Groupe d'Onglets
  description: Pour activer la Barre de Groupe d'Onglets, naviguer dans Affichage – Onglets dans le ruban, puis Barre de Groupe d'Onglets.
---
{{ fr.RDM }} permet d'exécuter plusieurs sessions à la fois en utilisant son mode d'affichage intégré/à onglets, ce qui est particulièrement utile si vous utilisez plusieurs technologies de contrôle à distance en même temps. Étant donné que toutes vos sessions fonctionnent dans des onglets au sein du même outil utilisé pour les lancer, cela élimine le besoin de fouiller dans votre barre des tâches pour localiser la session qui vous intéresse.

Mais lorsque vous atteignez un certain nombre de sessions en cours, il peut devenir difficile de les identifier en utilisant uniquement leur nom. Pour améliorer l'expérience utilisateur, la fonctionnalité ***Barre de Groupe d'Onglets*** a été créée pour filtrer les pages d'onglets.

Pour activer la ***Barre de Groupe d'Onglets***, naviguer dans ***Affichage – Onglets*** dans le ruban, puis sélectionner ***Barre de Groupe d'Onglets***.
![Bouton Barre de Groupe d'Onglets](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6211.png)

{% snippet, "badgeInfo" %}
La ***Barre de Groupe d'Onglets*** n'apparaîtra que si une session faisant partie d'un ***Groupe d'onglets*** (autre que l'onglet ***Tous***) est active. Pour la faire afficher en tout temps, cocher la case ***Toujours afficher la Barre de Groupe d'Onglets*** dans ***Fichier – Paramètres – Interface Utilisateur – Avancé***.
{% endsnippet %}

{% snippet, "badgeInfo" %}
La fonctionnalité ***Groupes d'Onglets*** dans la section ***Affichage*** vous permet de voir une vue arborescente des différents groupes d'onglets. Pour plus d'informations, visiter [***Affichage***](/rdm/windows/commands/view/view/).
{% endsnippet %}

## Configurer un Groupe d'onglets

Les paramètres du ***Groupe d'onglets*** se trouvent dans le menu latéral ***Interface Utilisateur*** des propriétés de votre session. L'option ***Propriétés*** peut être trouvée en cliquant droit sur une entrée.
![Propriétés – Commun – Interface Utilisateur – Page d'Onglet](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2041.png)

Le champ ***Groupe d'onglets*** vous permet de choisir entre un groupe d'onglets personnalisé ou hérité. Si vous souhaitez spécifier un nom personnalisé, vous pouvez simplement taper un nom ou choisir un nom déjà existant dans le champ ***Nom du groupe d'onglets*** pour créer un groupe d'onglets lors du lancement d'une instance, puis cliquer sur ***OK***.

Lorsque l'onglet de groupe ***Tous*** est sélectionné, il n'effectue aucun filtrage. Toutes les sessions en cours sont visibles dans cet onglet.
![Onglet Tous les Groupes](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2043.png)

Lorsqu'un onglet de groupe différent est sélectionné, il cache toutes les sessions qui ne correspondent pas au filtre. Dans l'exemple ci-dessous, seules deux sessions apparaissent dans l'onglet de groupe personnalisé Windjammer.
![Onglet de Groupe Personnalisé](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2044.png)
