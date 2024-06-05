---
eleventyComputed:
  title: Mise à jour Azure SQL avec écran de sélection
---
Depuis {{ fr.RDM }} 2022.1, vous obtenez un écran de sélection d'authentification lors de la connexion à une base de données Azure SQL (ADALSQL).
## Solution
Avec la sortie de {{ fr.RDM }} v2022.1, nous sommes passés de la bibliothèque ***System.Data.SqlClient*** à la nouvelle bibliothèque ***Microsoft.Data.SqlClient***. Avec l'ancienne bibliothèque, nous devions effectuer l'authentification dans notre code, mais avec la nouvelle bibliothèque, Microsoft prend en charge l'authentification, donc nous avons moins de contrôle.

D'autre part, cela permet une configuration plus facile et plus sécurisée car l'***Enregistrement d'Application Azure Active Directory*** n'est plus requis.
{% snippet, "badgeInfo" %}
Veuillez noter que nous n'avons pas d'autre choix que de passer à la nouvelle bibliothèque puisque la fonctionnalité dont nous avions besoin lors de la configuration de l'***Enregistrement d'Application Azure Active Directory*** a été dépréciée par Microsoft.
{% endsnippet %}

Malheureusement, l'inconvénient est la perte de cette fonctionnalité. Jusqu'à ce que nous trouvions une solution ou que Microsoft active d'autres modes, il n'y a rien que nous puissions faire.

Pour plus d'informations sur ce sujet, voir l'Enum [SqlAuthenticationMethod](https://docs.microsoft.com/en-us/dotnet/api/microsoft.data.sqlclient.sqlauthenticationmethod?view=sqlclient-dotnet-standard-4.1) de Microsoft.
