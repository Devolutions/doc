---
eleventyComputed:
  title: Erreur HTTP 500.30 - Échec du démarrage de l'application ASP.NET Core
  description: Suite au processus de mise à niveau, lors de la tentative d'ouverture de la page web {{ fr.DVLS }}, le navigateur affiche Erreur HTTP 500.30 - Échec du démarrage de l'application ASP.NET Core.
---
Suite au processus de mise à niveau, lors de la tentative d'ouverture de la page web {{ fr.DVLS }}, le navigateur affiche ***Erreur HTTP 500.30 - Échec du démarrage de l'application ASP.NET Core***.
![Erreur HTTP 500.30 - Échec du démarrage de l'application ASP.NET Core](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8109.png)

### Solution

Vérifier que ***Activer les applications 32 bits*** est défini sur ***Faux*** dans les paramètres avancés du pool d'applications {{ fr.DVLS }} dans le gestionnaire IIS.
![Activer les applications 32 bits défini sur Faux](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6161.png)
Si ***Activer les applications 32 bits*** est déjà défini sur faux, s'assurer que le compte de service désigné comme ***Identité du pool d'applications*** dans le ***pool d'applications {{ fr.DVLS }}*** dispose de droits suffisants sur le sous-dossier App_Data dans le ***dossier de l'application web {{ fr.DVLS }}***.

S'assurer que le Bundle d'hébergement Core APS.Net installé sur le serveur où {{ fr.DVLS }} est hébergé est la [dernière version](https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-aspnetcore-6.0.25-windows-hosting-bundle-installer).

{% snippet, "badgeHelp" %}
Veuillez contacter nos techniciens de support à [service@devolutions.net](mailto:service@devolutions.net) si cette solution ne résout pas votre problème.
{% endsnippet %}
