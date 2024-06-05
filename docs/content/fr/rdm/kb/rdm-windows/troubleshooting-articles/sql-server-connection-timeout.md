---
eleventyComputed:
  title: Délai d'expiration de la connexion au serveur SQL
  description: Les délais d'expiration de connexion avec un serveur SQL peuvent prendre plusieurs formes.
---
Les délais d'expiration de connexion avec un serveur SQL peuvent prendre plusieurs formes. Voici quelques-unes des plus courantes :

`System.Data.SqlClient.SqlException : Le délai d'attente a expiré. La période de délai d'attente s'est écoulée avant la fin de l'opération ou le serveur ne répond pas.`

`System.Data.SqlClient.SqlException (0x80131904) : Le délai d'attente a expiré. La période de délai d'attente s'est écoulée avant la fin de l'opération ou le serveur ne répond pas. System.ComponentModel.Win32Exception (0x80004005) : L'opération d'attente a expiré.`

`Microsoft.Data.SqlClient.SqlException (0x80131904) : Une erreur liée au réseau ou spécifique à l'instance s'est produite lors de l'établissement d'une connexion au serveur SQL. Le serveur n'a pas été trouvé ou n'était pas accessible. Vérifiez que le nom de l'instance est correct et que le serveur SQL est configuré pour autoriser les connexions à distance. (fournisseur : fournisseur TCP, erreur : 0 - Il s'agit généralement d'une erreur temporaire lors de la résolution de nom d'hôte et signifie que le serveur local n'a pas reçu de réponse d'un serveur faisant autorité.)`

Voir la liste complète des erreurs dans [Messages de délai d'expiration expiré lors de la connexion au serveur SQL](https://learn.microsoft.com/en-us/troubleshoot/sql/database-engine/connect/timeout-expired-error#verify-timeout-expired-errors).

## Solution 1
Pour aborder ce problème, l'approche initiale que vous devriez envisager est [d'augmenter votre délai d'expiration de connexion](https://docs.devolutions.net/rdm/data-sources/data-sources-types/advanced-data-sources/microsoft-sql-server/#advanced).

1. Dans {{ fr.RDM }}, aller à ***Fichier – Sources de données*** et éditer votre source de données Microsoft SQL Server en cliquant sur l'icône ***Éditer la source de données***.
1. Dans l'onglet ***Avancé***, augmenter le délai du ***Délai d'expiration de connexion***.
1. Sauvegarder vos changements.

## Solution 2
Si ajuster la durée du délai d'expiration de connexion n'a pas résolu le problème, vérifiez vos paramètres de pare-feu. Le serveur SQL fonctionne sur des ports dynamiques, nécessitant que les ports appropriés soient ouverts pour une communication sans heurts entre {{ fr.RDM }} et votre serveur SQL. Pour des conseils sur les ports à activer, veuillez consulter la section "Ports utilisés par le moteur de base de données" dans [Configurer le pare-feu Windows pour autoriser l'accès au serveur SQL](https://learn.microsoft.com/en-us/sql/sql-server/install/configure-the-windows-firewall-to-allow-sql-server-access?view=sql-server-ver16#ports-used-by-the-database-engine).

## Solution 3
Si vous continuez à rencontrer des problèmes de délai d'expiration de connexion, la cause racine pourrait être liée à l'écouteur SQL ou aux groupes de disponibilité. Dans de tels cas, essayer de définir la valeur ***MultiSubnetFailover*** sur ***True***.

1. Dans {{ fr.RDM }}, aller à ***Fichier – Sources de données*** et éditer votre source de données Microsoft SQL Server en cliquant sur l'icône ***Éditer la source de données***.
1. Dans l'onglet ***Avancé***, cliquer sur ***Plus de paramètres***.
1. Rechercher le paramètre MultiSubnetFailover et définir sa valeur sur ***True***.

   {% snippet, "badgeNotice" %}
   Il est recommandé d'utiliser soit ***Failover Partner*** et ***MultiSubnetFailover***, mais pas les deux simultanément. Assurez-vous que la valeur ***Failover Partner*** est effacée.
   {% endsnippet %}

1. Cliquer sur ***OK*** puis sauvegarder vos changements.

{% snippet, "badgeHelp" %}
Voir cet article de Microsoft pour plus d'informations : [Le délai d'attente se produit lorsque vous vous connectez à un écouteur Always On dans un environnement multi-sous-réseau](https://learn.microsoft.com/en-us/troubleshoot/sql/database-engine/availability-groups/listener-connection-times-out).
{% endsnippet %}

## Autres solutions possibles
Si les solutions mentionnées ci-dessus n'ont pas résolu le problème, des correctifs supplémentaires peuvent être trouvés dans les articles Microsoft suivants :
* [Messages de délai d'expiration expiré lors de la connexion au serveur SQL](https://learn.microsoft.com/en-us/troubleshoot/sql/database-engine/connect/timeout-expired-error)
* [Une erreur liée au réseau ou spécifique à l'instance s'est produite lors de l'établissement d'une connexion au serveur SQL](https://learn.microsoft.com/en-us/troubleshoot/sql/database-engine/connect/network-related-or-instance-specific-error-occurred-while-establishing-connection)

N'hésitez pas à [contacter notre équipe de support](mailto:service@devolutions.net) pour une assistance supplémentaire.