---
eleventyComputed:
  title: Barre d'onglets groupés
---
{{ fr.RDM }} vous permet d'exécuter plusieurs sessions à la fois en utilisant son mode d'affichage intégré/à onglets, ce qui est particulièrement utile si vous utilisez plusieurs technologies de contrôle à distance en même temps. Puisque toutes vos sessions s'exécutent dans des onglets au sein du même outil utilisé pour les lancer, il n'est plus nécessaire de fouiller dans votre barre de tâches pour localiser la session qui vous intéresse.

Lorsque vous atteignez un certain nombre de sessions en cours d'exécution, il peut toutefois devenir difficile de les identifier en utilisant uniquement leur nom. Pour améliorer votre expérience utilisateur, la fonction ***Barre d'onglets groupés*** a été créée pour filtrer les pages d'onglets.

Pour activer la ***Barre d'onglets groupés***, naviguez jusqu'à ***Affichage – Disposition*** dans le ruban, puis sélectionnez ***Barre d'onglets groupés***.
![Bouton Barre d'onglets groupés](https://cdnweb.devolutions.net/docs/fr/rdm/windows/RDMWin2041.png)

{% snippet, "badgeInfo" %}
La ***Barre d'onglets groupés*** n'apparaît que si une session faisant partie d'un groupe d'onglets (autre que l'onglet ***Tout***) est active. Pour qu'elle s'affiche en permanence, cochez la case ***Toujours afficher la barre d'onglets groupés*** dans ***Fichier – Options – Interface utilisateur – Avancé***.
{% endsnippet %}

{% snippet, "badgeInfo" %}
La fonction ***Groupes d'onglets*** dans ***Affichage – Affichage*** vous permet de consulter une vue arborescente des différents groupes d'onglets. Pour plus d'informations, consultez [***Affichage***](/fr/rdm/windows/commands/view/view/).
{% endsnippet %}

### Configuration d'un groupe d'onglets

Les paramètres de ***Groupe d'onglets*** se trouvent dans le menu latéral ***Interface utilisateur***, dans les propriétés de votre session. Vous trouverez l'option ***Propriétés...*** en cliquant avec le bouton droit sur une entrée.
![Propriétés – Commun – Interface utilisateur – Page de l'onglet](https://cdnweb.devolutions.net/docs/fr/rdm/windows/RDMWin2042.png)

Le champ ***Groupe d'onglets*** vous permet de choisir entre un groupe d'onglets personnalisé ou hérité. Si vous souhaitez spécifier un nom personnalisé, vous pouvez simplement taper un nom ou en choisir un déjà existant dans le champ ***Nom du groupe d'onglets*** pour créer un groupe d'onglets lors du lancement d'une instance, puis cliquer sur ***OK***.

Lorsque l'onglet ***Tout*** est sélectionné, il n'effectue aucun filtrage. Toutes les sessions en cours sont visibles dans cet onglet.
![Onglet Tout](https://cdnweb.devolutions.net/docs/fr/rdm/windows/RDMWin2043.png)

Lorsqu'un autre onglet de groupe est sélectionné, il masque toutes les sessions qui ne correspondent pas au filtre. Dans l'exemple ci-dessous, seules deux sessions apparaissent dans l'onglet de groupe personnalisé Windjammer.
![Onglet groupe personnalisé](https://cdnweb.devolutions.net/docs/fr/rdm/windows/RDMWin2044.png)

