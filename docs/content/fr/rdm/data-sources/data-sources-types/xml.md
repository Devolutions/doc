---
eleventyComputed:
  title: XML
  description: "{{ fr.RDM }} enregistre les paramètres directement dans un format de fichier XML."
---
{{ fr.RDM }} enregistre les paramètres directement dans un format de fichier XML.

## Points forts

* Configurer un intervalle de rafraîchissement automatique.
* Le [{{ fr.OBACK }}](/cloud/rdm-online-services/online-backup/) est disponible pour cette source de données.

{% snippet, "badgeCaution" %}
Bien qu'il puisse être partagé entre plusieurs emplacements, il n'y a pas de gestion des conflits pour la configuration. Si vous partagez avec d'autres utilisateurs, vous pouvez rencontrer des conflits de mise à jour ou d'autres problèmes. Ce type de source de données est destiné à un seul utilisateur utilisant plusieurs ordinateurs, et non à plusieurs utilisateurs.
{% endsnippet %}

{% snippet, "shieldNotice" %}
Tous les mots de passe sont chiffrés par défaut. Vous pouvez spécifier un mot de passe personnalisé (clé maîtresse) pour chiffrer entièrement le contenu du fichier. Il est impossible de récupérer les données si la clé maîtresse est perdue. Veuillez vous assurer de vous souvenir ou de sauvegarder la clé maîtresse dans un endroit sûr.
{% endsnippet %}

## Paramètres

### Général

![XML - Onglet Général](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10788.png)

| OPTION                | DESCRIPTION |
|-----------------------|-------------|
| Nom                   | Nom de la source de données.                                                                                                   |
| Nom de fichier        | Spécifier le chemin complet du fichier XML utilisé pour sauvegarder les données. Les chemins relatifs et les variables d'environnement peuvent également être utilisés. |
| Clé maîtresse         | Ajouter une couche supplémentaire de sécurité en chiffrant votre source de données avec une clé maîtresse.                                      |
| Toujours demander la clé maîtresse | Demande toujours la clé maîtresse lors de la connexion à la source de données.                                                      |


### Sauvegarde

![XML - Onglet Sauvegarde](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10789.png)

| OPTION      | DESCRIPTION |
|-------------|-------------|
| Sauvegarde  | Sélectionner entre : <ul><li>Aucune : Aucune sauvegarde de votre source de données ne sera créée.</li><li>Sauvegarde de fichier : Votre sauvegarde sera enregistrée dans un fichier choisi mais ne se fera pas automatiquement toutes les 30 secondes.</li><li>{{ fr.OBACK }} : Une {{ fr.OBACK }} (utilisant [{{ fr.OBACK }}](/cloud/rdm-online-services/online-backup/)) sera automatiquement créée.</li></ul>          |
| Nom de la sauvegarde | Spécifier le nom de la sauvegarde qui vous permettra de sauvegarder automatiquement vos sessions dans un espace de stockage en ligne sécurisé et de les restaurer en cas de problèmes. |

### VPN

Ouvrir un VPN pour accéder à vos données avant de vous connecter à votre XML.
![XML - Onglet VPN](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2256.png)

### Avancé

![XML - Onglet Avancé](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10790.png)

| OPTION                   | DESCRIPTION |
|--------------------------|-------------|
| Rafraîchissement automatique lors du changement de fichier | Indiquer si l'application surveille les changements de fichier pour rafraîchir automatiquement la source de données. |
| Désactiver la révélation du mot de passe  | Désactiver la fonction de révélation du mot de passe lorsqu'un utilisateur accède à cette source de données.                         |
| Autoriser les images personnalisées      | Cela permettra le chargement de toutes les images personnalisées dans l'arborescence.                                |
| Lecture seule                | Définir la source de données en lecture seule. Aucune nouvelle entrée ne peut être créée, et les données existantes ne peuvent pas être modifiées. |