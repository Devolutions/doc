---
eleventyComputed:
  title: XML
  description: "{{ fr.RDMMAC }} enregistre les paramètres directement dans un fichier au format XML."
---
{{ fr.RDMMAC }} enregistre les paramètres directement dans un fichier au format XML.

## Points forts

* C'est une source de données gratuite.
* Configurer un intervalle de rafraîchissement automatique.
* Le [Service {{ fr.OBACK }}](/rdm/mac/commands/file/backup/) est disponible pour cette source de données.

{% snippet, "badgeCaution" %}
Bien qu'il soit possible de partager entre plusieurs emplacements, il n'y a pas de gestion des conflits pour la configuration. Si vous partagez avec d'autres utilisateurs, vous pouvez rencontrer des conflits de mise à jour et avoir des problèmes. Ce type de source de données est destiné à un seul utilisateur utilisant plusieurs ordinateurs, et non à plusieurs utilisateurs.
{% endsnippet %}

{% snippet, "shieldNotice" %}
Tous les mots de passe sont chiffrés par défaut. Spécifier un mot de passe personnalisé (clé maîtresse) pour chiffrer entièrement le contenu du fichier. Il est impossible de récupérer les données si la clé maîtresse est perdue. Assurez-vous de vous souvenir ou de sauvegarder la clé maîtresse dans un endroit sûr.
{% endsnippet %}

## Paramètres

### Connexion

![Onglet Connexion XML](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10163.png)

| OPTION   | DESCRIPTION |
|----------|-------------|
| Nom      | Nom de la source de données. |
| Nom de fichier | Spécifier le chemin complet du fichier XML utilisé pour sauvegarder les données. Les chemins relatifs et les variables d'environnement peuvent également être utilisés. |

### Sauvegarde

![Onglet Sauvegarde XML](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10164.png)

| OPTION      | DESCRIPTION |
|-------------|-------------|
| Sauvegarde  | Choisir entre :<br><br>* Aucun : Aucune sauvegarde de votre source de données ne sera créée.<br>* {{ fr.OBACK }} : Une sauvegarde {{ fr.OBACK }} (utilisant le Service {{ fr.OBACK }}) sera automatiquement créée.<br>* Sauvegarder dans un fichier : Votre sauvegarde sera enregistrée dans un fichier choisi mais ne fera pas automatiquement de sauvegarde toutes les 30 secondes. |
| Nom de la sauvegarde | Spécifier le nom de la sauvegarde qui vous permettra de sauvegarder automatiquement vos sessions dans un espace de stockage en ligne sécurisé et de les restaurer en cas de problèmes. |

### Avancé

![Onglet Avancé XML](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10502.png)

| OPTION                   | DESCRIPTION |
|--------------------------|-------------|
| Rafraîchissement automatique lors du changement de fichier | Indiquer si l'application surveille les changements de fichier pour rafraîchir automatiquement la source de données. |
| Lecture seule            | Mettre la source de données en lecture seule. Aucune nouvelle entrée ne peut être créée et les données existantes ne peuvent pas être modifiées. |
| Désactiver la révélation du mot de passe | Désactiver la fonction de révélation du mot de passe lorsqu'un utilisateur accède à cette source de données. |
| Demander toujours la clé maîtresse | Toujours demander la clé maîtresse avant d'ouvrir la source de données. Celle-ci est utilisée pour chiffrer le contenu XML et ne pourrait pas être récupérée si perdue. |
| Clé maîtresse            | Entrer la clé maîtresse qui sera utilisée avant d'ouvrir la source de données. |
| Autoriser les images personnalisées | Cela permettra de charger toutes les images personnalisées dans l'arborescence. |