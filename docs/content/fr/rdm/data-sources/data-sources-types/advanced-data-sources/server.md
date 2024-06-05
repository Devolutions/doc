---
eleventyComputed:
  title: "{{ fr.DVLS }}"
  description: "{{ fr.DVLS }} permet de contrôler l'accès aux comptes privilégiés et de gérer les sessions via une solution sécurisée. Pour plus d'informations, consulter la page web de {{ fr.DVLS }}."
---
{{ fr.DVLS }} (DVLS) permet de contrôler l'accès aux comptes privilégiés et de gérer les sessions via une solution sécurisée. Pour plus d'informations, consulter la [page web de {{ fr.DVLS }}](https://devolutions.net/server/).

## Points forts

* Serveur hautement sécurisé pour votre entreprise.
* Partager la connexion et les identifiants avec plusieurs utilisateurs.
* Installé localement ; peut être déployé en ligne.
* Prend en charge l'authentification Windows et l'intégration de groupe Active Directory.
* Optimisation de la mise en cache côté client et serveur.

{% snippet, "badgeInfo" %}
{{ fr.DVLS }} prend en charge Microsoft SQL Server et Microsoft Azure SQL comme magasin de données.
{% endsnippet %}

Pour plus d'informations, veuillez consulter ces sujets :

* [Instructions d'installation de {{ fr.DVLS }}](/server/getting-started/installation/)
* [Liste de vérification de sécurité de {{ fr.DVLS }}](/server/getting-started/security-checklist/)

## Configurer la source de données du serveur sur les machines clientes
Entrer le nom de la source de données et l'URL pour l'hôte. Assurez-vous d'utiliser le protocole correct si SSL est requis par le serveur (https).

Exporter la source de données, puis importer le fichier dans les postes clients comme décrit dans [Importer/Exporter une source de données](https://docs.devolutions.net/rdm/data-sources/import-export/).

## Paramètres des sources de données

### Général

![Source de données {{ fr.DVLS }} – Général](https://cdnweb.devolutions.net/docs/RDMW4057_2024_1.png)

| OPTION                       | DESCRIPTION |
|------------------------------|-------------|
| Nom                         | Entrer un nom pour la source de données. |
| Hôte                         | Entrer l'URL de l'instance {{ fr.DVLS }}. <br> Exemple : http://<nom d'hôte ou adresse IP>/<nom de l'instance> |
| Utiliser l'authentification unique (SSO) du domaine | Utiliser l'authentification unique (SSO) du domaine [si précédemment configurée](/server/kb/how-to-articles/configure-windows-authentication/) dans l'instance {{ fr.DVLS }}. |
| Nom d'utilisateur                     | Entrer le nom d'utilisateur pour se connecter à la source de données. |
| Toujours demander le nom d'utilisateur          | Toujours demander le nom d'utilisateur lors de la connexion à la source de données. |
| Tester la connexion              | Tester la connexion avec {{ fr.DVLS }} pour valider les identifiants. |

### {{ fr.UVLT_MAJ }}

![{{ fr.DVLS }} – source de données {{ fr.UVLT_MAJ }}](https://cdnweb.devolutions.net/docs/RDMW4058_2024_1.png)

| OPTION | DESCRIPTION |
|--------|-------------|
| Type   | Sélectionner le type de [{{ fr.UVLT }}](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/user-vault/) à utiliser. Sélectionner entre : <ul><li>***Défaut*** : utiliser le {{ fr.UVLT }} par défaut, qui est stocké dans la base de données.</li><li>***Aucun*** : désactiver le {{ fr.UVLT }} pour tous les utilisateurs.</li><li>***{{ fr.DOD }}*** : utiliser un fichier {{ fr.DOD }} (*.dod) comme {{ fr.UVLT }}.</li></ul> |

### VPN

Ouvrir un VPN pour accéder aux données avant de se connecter à {{ fr.DVLS }}.
![{{ fr.DVLS }} – VPN](https://cdnweb.devolutions.net/docs/RDMW4059_2024_1.png)

### PowerShell

![{{ fr.DVLS }} – PowerShell](https://cdnweb.devolutions.net/docs/RDMW4060_2024_1.png)

| OPTION | DESCRIPTION |
|--------|-------------|
| ID de locataire | Stocke l'ID de locataire de l'application pour que PowerShell puisse le récupérer. | 
| Mot de passe | Stocke le mot de passe de l'application pour que PowerShell puisse le récupérer. | 

### Avancé

![{{ fr.DVLS }} – Avancé](https://cdnweb.devolutions.net/docs/RDMW4061_2024_1.png)

| OPTION                          | DESCRIPTION |
|---------------------------------|-------------|
| Mode de mise en cache                    | Détermine comment les entrées seront rechargées dans la source de données. Pour plus d'informations, veuillez consulter [Mise en cache](/rdm/windows/data-sources/caching/).                        |
| Méthode de ping en ligne              | Indiquer la méthode de ping en ligne préférée. Sélectionner entre : <ul><li>Aucune</li><li>Requête Web</li></ul> |
| Popup d'expiration de licence        | Déterminer comment l'application conseille de l'expiration de la licence. Sélectionner entre : <ul><li>Tous</li><li>Seulement les administrateur(s)</li><li>Désactivé</li></ul>                          |
| Délai d'expiration de la connexion | Définir un délai d'expiration de la connexion pour l'instance {{ fr.DVLS }}.                                                     |
| Auto rafraîchissement                    | Définir l'intervalle pour le rafraîchissement automatique.                                                           |
| Mode d'authentification du certificat client | Déterminer comment les certificats clients doivent être authentifiés.                                     | 
| Demander le mode hors ligne au démarrage | Demander à utiliser la source de données en mode hors ligne lors de la connexion à la source de données.              |
| Passer automatiquement en mode hors ligne sur demande hors ligne | Utiliser la source de données en mode hors ligne lorsque la méthode de ping ne répond pas.                            |
| Désactiver le verrouillage                    | Désactiver l'option de verrouiller directement la source de données. L'application peut toujours être verrouillée mais l'utilisateur n'est pas invité à saisir le mot de passe de la source de données lors du déverrouillage de l'application.                                                                                                  |
| Gérer le cache | Effacer la sortie, analyser ou supprimer le contenu du cache de l'instance {{ fr.DVLS }}.                                   |
