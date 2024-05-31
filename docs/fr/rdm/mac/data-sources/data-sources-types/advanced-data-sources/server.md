---
eleventyComputed:
  title: "{{ fr.DVLS }}"
  description: "{{ fr.DVLS }} est un dépôt auto-hébergé pour stocker et partager vos connexions à distance et vos identifiants."
---
{{ fr.DVLS }} est un dépôt auto-hébergé pour stocker et partager vos connexions à distance et vos identifiants. Vous pouvez trouver plus d'informations sur la [page web de {{ fr.DVLS }}](https://devolutions.net/server).

## Points forts

* Serveur de sécurité haut de gamme pour votre entreprise.
* Partager vos sessions avec plusieurs utilisateurs.
* Peut être déployé en ligne.
* Prend en charge l'authentification Windows et l'intégration de groupe Active Directory.
* Optimisation de la mise en cache côté client et serveur.
* Nécessite le client {{ fr.RDMMAC }} Édition Team installé pour la gestion.

{% snippet, "badgeInfo" %}
{{ fr.DVLS }} ne prend en charge que SQL Server comme magasin de données à ce moment.
{% endsnippet %}

Pour plus d'informations, veuillez consulter :

* [Instructions d'installation de {{ fr.DVLS }}](/server/getting-started/installation/)
* [Liste de vérification de sécurité de {{ fr.DVLS }}](/server/getting-started/security-checklist/)

## Configurer la source de données du serveur sur tous vos postes clients.

Entrer un nom pour la source de données et l'URL du serveur. Assurez-vous d'utiliser le protocole correct si SSL est requis par le serveur (https).

Alternativement, vous pouvez exporter les informations de la source de données puis importer le fichier dans vos postes clients comme décrit dans [Importer/Exporter Source de Données](/rdm/mac/data-sources/import-export/).

## Paramètres

### Connexion

![Onglet Connexion de {{ fr.DVLS }}](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip6023.png)

| OPTION              | DESCRIPTION |
|---------------------|-------------|
| Nom                 | Nom de la source de données. |
| Serveur             | Nom de l'instance {{ fr.DVLS }}. |
| Nom d'utilisateur   | Nom d'utilisateur pour se connecter à la source de données. |
| Mot de passe        | Mot de passe pour se connecter à la source de données. |
| Tester la connexion | Tester la connexion avec {{ fr.DVLS }} pour valider si les informations fournies sont correctes. |
| Toujours demander le nom d'utilisateur | Toujours demander le nom d'utilisateur lors de la connexion à la source de données. |
| Toujours demander le mot de passe | Toujours demander le mot de passe lors de la connexion à la source de données. |

### Paramètres

![Onglet Paramètres de {{ fr.DVLS }}](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip6024.png)

### Avancé

![Onglet Avancé de {{ fr.DVLS }}](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip6025.png)

| OPTION                          | DESCRIPTION |
|---------------------------------|-------------|
| Mode hors ligne                 | Déterminer si vous souhaitez utiliser cette source de données en mode hors ligne. En mode hors ligne, la source de données peut être disponible en mode Lecture Seule ou en mode Lecture/Écriture. |
| Demander le mode hors ligne au démarrage | Chaque fois que vous vous connecterez à votre source de données, il vous sera demandé d'utiliser la source de données en mode hors ligne. |
| Mode de mise en cache           | Déterminer comment les entrées seront rechargées dans la source de données. Voir [Mode de Mise en Cache](/rdm/mac/data-sources/caching/) pour plus d'informations. |
| Méthode de ping en ligne        | Indiquer le ping en ligne préféré. Sélectionner entre :<ul><li>Aucun</li><li>Requête Web</li></ul> |
| Passer automatiquement hors ligne | Si la méthode de ping en ligne ne fonctionne pas, elle passera automatiquement en mode hors ligne. |
| Mode d'accès aux outils à distance | Sélectionner votre mode d'accès aux outils à distance entre :<ul><li>Local</li></ul><ul><li> Via source de données</li></ul> |
| Gérer le Cache                  | Gérer votre cache sur votre ordinateur pour analyser, compacter, réparer ou le supprimer. Cela peut être très utile en cas de problèmes hors ligne. Pour plus d'informations, veuillez suivre ce [lien](Gérer-Cache). |

### {{ fr.UVLT_MAJ }}

![{{ fr.DVLS }} – {{ fr.UVLT_MAJ }}](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip6026.png)

| OPTION           | DESCRIPTION |
|------------------|-------------|
| Type de connexion | Sélectionner le type de {{ fr.UVLT }} à utiliser. Sélectionner entre :<ul><li>Défaut : utiliser le {{ fr.UVLT }} par défaut qui est stocké dans la base de données.</li><li> Aucun : désactiver le {{ fr.UVLT }} pour tous les utilisateurs.</li></li>  {{ fr.DOD }} : utiliser un fichier {{ fr.DOD }} (*.dod) comme un {{ fr.UVLT }}.</li></ul> |

