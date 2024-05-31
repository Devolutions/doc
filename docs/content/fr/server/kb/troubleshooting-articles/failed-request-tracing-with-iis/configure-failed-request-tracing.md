---
eleventyComputed:
  title: Configurer le traçage des requêtes échouées
  description: Il existe deux méthodes pour configurer le traçage des requêtes échouées, en utilisant soit la commande appcmd.exe, soit l'application IISManager.
---
Il existe deux méthodes pour configurer le traçage des requêtes échouées :
* [Utiliser la commande appcmd.exe](/server/kb/troubleshooting-articles/failed-request-tracing-with-iis/configure-failed-request-tracing/#using-the-appcmdexe-command)
* [Via l'application IISManager](/server/kb/troubleshooting-articles/failed-request-tracing-with-iis/configure-failed-request-tracing/#via-the-iismanager-app)

## Utiliser la [commande appcmd.exe](https://docs.microsoft.com/en-us/iis/get-started/getting-started-with-iis/getting-started-with-appcmdexe)
| |
|------------------------|
| appcmd.exe set config -section:system.applicationHost/sites "/[name='Default Web Site'].traceFailedRequestsLogging.enabled:True" /commit:apphost |
| appcmd.exe set config -section:system.applicationHost/sites "/[name='Default Web Site'].traceFailedRequestsLogging.maxLogFiles:10" /commit:apphost |
| appcmd.exe set config -section:system.applicationHost/sites "/[name='Default Web Site'].traceFailedRequestsLogging.directory:%SystemDrive%\inetpub\logs\FailedReqLogFiles" /commit:apphost |
| appcmd.exe set config "Default Web Site" -section:system.webServer/tracing/traceFailedRequests /+"[path='*']" |
| appcmd.exe set config "Default Web Site" -section:system.webServer/tracing/traceFailedRequests /+"[path='*'].traceAreas.[provider='WWW Server',areas='Rewrite',verbosity='Verbose']" |
| appcmd.exe set config "Default Web Site" -section:system.webServer/tracing/traceFailedRequests /[path='*'].failureDefinitions.statusCodes:"400-599" |

{% snippet, "badgeInfo" %}
Notez que les étapes ci-dessus s'appliquent uniquement à IIS 7.0 ou version ultérieure, et que les commandes fonctionnent mieux lorsque cmd.exe est exécuté en tant qu'administrateur.
{% endsnippet %}

## Via l'application IISManager

1. Dans IIS Manager, développer le nœud racine, développer ***Sites***, puis sélectionner ***Default Web Site***.
![Nœud racine – Sites – Default Web Site](https://cdnweb.devolutions.net/docs/DVLS4006_2024_1.png)
1. Dans le volet ***Actions*** à droite, sélectionner ***Failed Request Tracing***.
![Actions – Failed Request Tracing](https://cdnweb.devolutions.net/docs/DVLS4007_2024_1.png)
1. Cocher la case ***Enable*** (obligatoire). Les options ***Directory*** cible et ***Maximum number of trace files*** peuvent être personnalisées (facultatif). Cliquer sur ***OK*** une fois terminé.
![Modifier les paramètres de traçage des requêtes échouées du site Web](https://cdnweb.devolutions.net/docs/DVLS4008_2024_1.png)
1. Développer ***Default Web Site***, puis sélectionner le site Web à tracer.
![Sélectionner le site Web](https://cdnweb.devolutions.net/docs/DVLS4009_2024_1.png)
1. Double-cliquer sur l'icône ***Failed Request Tracing Rules*** du site Web sélectionné.
![Règles de traçage des requêtes échouées](https://cdnweb.devolutions.net/docs/DVLS4010_2024_1.png)
1. Dans le volet ***Actions*** à droite, cliquer sur ***Add*** pour ajouter une nouvelle règle.
![Actions – Ajouter](https://cdnweb.devolutions.net/docs/DVLS4011_2024_1.png)
1. Sélectionner ***All content (*)***, puis cliquer sur ***Next***.
![Tracer tout le contenu](https://cdnweb.devolutions.net/docs/DVLS4012_2024_1.png)
1. Cocher la case ***Status Code(s)***, puis entrer le type du code de statut à tracer. Dans ce cas, le ***Status code(s)*** est réglé pour surveiller tout ce qui va de 400 à 599. Cliquer sur ***Next*** une fois terminé.
![Code(s) de statut](https://cdnweb.devolutions.net/docs/DVLS4013_2024_1.png)
1. Sélectionner les fournisseurs du traçage. Pour chaque fournisseur, régler la ***Verbosity*** sur ***Verbose*** et sélectionner toutes les ***Areas***. Dans ce cas, le fournisseur ***WWW Server*** a été sélectionné.
![Fournisseurs](https://cdnweb.devolutions.net/docs/DVLS4014_2024_1.png)
1. Cliquer sur ***Finish***.
La règle de traçage est maintenant définie.
![Règle de traçage définie](https://cdnweb.devolutions.net/docs/DVLS4015_2024_1.png)