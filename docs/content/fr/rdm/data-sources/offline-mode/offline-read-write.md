---
eleventyComputed:
  title: Lecture et écriture hors ligne
---
Le mode hors ligne ***Lecture/Écriture*** permet à l'utilisateur d'ajouter, de modifier et de supprimer des entrées alors que la source de données est hors ligne. Ces changements sont sauvegardés localement et synchronisés avec la source de données une fois qu'elle est de nouveau en ligne.

{% snippet, "badgeInfo" %}
Certaines fonctionnalités ne sont pas disponibles en mode hors ligne et vous ne pourrez peut-être pas effectuer toutes les actions. Notez que le [{{ fr.UVLT }}](/rdm/windows/data-sources/user-vault/) est toujours disponible en mode hors ligne.
{% endsnippet %}

Une fois hors ligne, les paramètres de sécurité des utilisateurs s'appliquent toujours. Les privilèges Ajouter/Modifier/Supprimer accordés par l'administrateur restent en vigueur. Voir [Gestion des utilisateurs](/rdm/windows/commands/administration/management/user-management/).

Lorsqu'une entrée est modifiée par un utilisateur en ligne alors qu'un autre utilisateur est hors ligne, la version locale de l'entrée stockée dans le cache hors ligne devient différente de la version en ligne. Cela provoque un conflit lorsque l'utilisateur hors ligne se reconnecte.

## Flux de travail des modifications hors ligne

* Se connecter à la source de données.
* Passer hors ligne avec ***Fichier – Passer hors ligne***.
* Modifier une entrée.
* Revenir en ligne avec ***Fichier – Revenir en ligne***.

La fenêtre ***Modifications hors ligne*** est affichée :
![Modifications hors ligne](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10394.png)

Utilisez cette boîte de dialogue pour accepter/rejeter vos modifications hors ligne.

Vous pouvez utiliser l'action ***Comparer*** pour avoir une comparaison côte à côte de vos modifications avec l'entrée en direct actuelle.

Les entrées seront marquées :

* Accepter – lorsque aucun changement extérieur n'a été détecté.
* Conflit – lorsque des changements extérieurs ont été détectés depuis votre dernière connexion.

## Modifications hors ligne multiples

Lorsque plusieurs utilisateurs modifient la même entrée hors ligne simultanément, un conflit se produit lorsque le deuxième utilisateur se reconnecte.

Voici un exemple d'un tel cas pour aider à résoudre correctement les conflits :

Lorsque le premier utilisateur se reconnecte, la fenêtre ***Modifications hors ligne*** est affichée. Les changements sont acceptés par défaut.
![Modifications hors ligne pour le premier utilisateur de retour en ligne](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip3451.png)

Lorsqu'un deuxième utilisateur se reconnecte, un conflit se produit et la fenêtre ***Modifications hors ligne*** est affichée.
![Modifications hors ligne pour le deuxième utilisateur de retour en ligne](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip3452.png)

Lorsque le conflit se produit, l'utilisateur doit décider d'accepter ou de rejeter les changements. Les différentes versions de l'entrée peuvent être comparées pour voir quels changements ont été faits.

### Comparer les versions d'une entrée

Cliquez sur le bouton ***Comparer*** pour comparer les versions d'une entrée en conflit. Analysez la structure XML de l'entrée pour décider d'***Accepter*** ou de ***Rejeter*** les changements.

Le contenu à gauche représente l'entrée récupérée en ligne, et le contenu à droite représente la version locale de l'entrée, modifiée en mode Hors ligne.
![Comparer la modification de session](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip3453.png)
