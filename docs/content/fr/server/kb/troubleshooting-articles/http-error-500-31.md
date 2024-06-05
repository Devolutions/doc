---
eleventyComputed:
  title: Erreur HTTP 500.31 - Échec du chargement du runtime ASP.NET Core
  description: Lors de la mise à jour de {{ fr.DVLS }} vers la version 2024.1 ou ultérieure, l'interface Web affiche l'Erreur HTTP 500.31 - Échec du chargement du runtime ASP.NET Core.
---
Lors de la mise à jour de {{ fr.DVLS }} vers la version 2024.1 ou ultérieure, l'interface Web affiche ***Erreur HTTP 500.31 - Échec du chargement du runtime ASP.NET Core***. La raison est que la version 8.0.x d'ASP.Net Core n'est pas installée sur le serveur où {{ fr.DVLS }} est hébergé.
![Erreur HTTP 500.31 - Échec du chargement du runtime ASP.NET Core](https://cdnweb.devolutions.net/docs/INTERFACE2026.png)

### Solution

1. Mettre à jour le {{ fr.DVLSCONSOLE }} vers la version 2024.1.x ou ultérieure.
1. Télécharger le [bundle d'hébergement du module ASP.Net Core 8.0.x](https://dotnet.microsoft.com/en-us/download/dotnet/8.0).
1. L'installer sur le serveur où {{ fr.DVLS }} est hébergé.

{% snippet, "badgeHelp" %}
Veuillez contacter nos techniciens de support à [service@devolutions.net](mailto:service@devolutions.net) si cette solution ne résout pas votre problème.
{% endsnippet %}
