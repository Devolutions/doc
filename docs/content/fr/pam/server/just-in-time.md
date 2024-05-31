---
eleventyComputed:
  title: Élévation juste-à-temps (JAT)
---
{% snippet, "badgeCaution" %}
La fonctionnalité ***Élévation juste-à-temps*** est uniquement disponible pour les comptes de domaine.
{% endsnippet %}

L'élévation juste-à-temps est un concept de sécurité qui concerne l'octroi d'un accès temporaire à des ressources ou services, en s'assurant que les permissions sont accordées uniquement pour le temps spécifique où elles sont requises et pas un moment de plus. La fonctionnalité Juste-à-temps dans {{ fr.DVLS }} accorde une adhésion temporaire à un groupe Active Directory sélectionné à partir d'une liste de groupes spécifiés.

{% youtube 'drRLA7U8YsQ?si=ihVhTcJOKxAh5kKS&amp;start=146' %}

![Paramètres d'élévation juste-à-temps](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8178.png)

### Élévation juste-à-temps (JAT)

| Option                               | Description                                                                                    |
|--------------------------------------|------------------------------------------------------------------------------------------------|
| Groupes disponibles pour l'élévation temporaire | Sélectionnez les groupes Active Directory dans lesquels un compte privilégié sera élevé au statut de membre. |
| Préfixe du nom de groupe temporaire          | Préfixe du nom du groupe Active Directory à créer, qui sera membre du groupe sélectionné et dans lequel le compte privilégié sera membre. |
| Emplacement de création du groupe temporaire    | Emplacement (OU) où le groupe Active Directory temporaire existera dans la structure Active Directory. |

### Exemple
La configuration d'Élévation Juste-à-temps du fournisseur de domaine permettra aux comptes privilégiés de demander une élévation pour devenir membre des groupes Active Directory suivants : {{ fr.RDM }} Admins; {{ fr.RDM }} Service Desk ou {{ fr.RDM }} Admins - Universel. Le nom du groupe temporaire commencera par RDM_JIT et sera créé dans l'OU **Domain Groups\Vaults\Internal**.
![Paramètres d'Élévation Juste-à-temps](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8179.png)

Le processus de réservation du compte privilégié _backupoperator15 demande une élévation de 2 heures pour faire partie du groupe Active Directory {{ fr.RDM }} Admins.
![Paramètres d'Élévation Juste-à-temps](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8180.png)
