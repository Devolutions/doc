---
eleventyComputed:
  title: Terminal Services / Services Bureau à distance
  keywords:
  - Citrix
  - RDS
  - Remote Desktop Services
  - RemoteApp
  - Terminal Service
  - TS
  - VDI
---
{{ fr.RDM }} a un excellent support pour s'exécuter dans un environnement de Terminal Server. Un fichier de configuration principal peut être créé pour distribuer les paramètres pour tous les nouveaux utilisateurs du système ou même pour mettre à jour la configuration de l'utilisateur existant. 

{% snippet icon.badgeInfo %} 
Veuillez vous assurer que vous avez suivi la recommandation de Microsoft sur la façon de configurer un environnement RDS. Cela affectera gravement les performances si des installations Windows par défaut sont effectuées.  

[https://learn.microsoft.com/fr-fr/windows-server/administration/performance-tuning/role/remote-desktop/session-hosts](https://learn.microsoft.com/fr-fr/windows-server/administration/performance-tuning/role/remote-desktop/session-hosts) 
{% endsnippet %}
 
{% snippet icon.badgeNotice %} 
Chaque utilisateur doit disposer d'un dossier de données d'application unique (profils itinérants ou technologies similaires). {{ fr.RDM }} enregistre certaines préférences d'utilisateur dans le fichier de configuration local. Le dossier peut être effacé chaque fois que l'utilisateur se déconnecte de la session Windows, mais il doit être accessible pendant la durée de l'exécution de {{ fr.RDM }}. 
{% endsnippet %}
 
## Procédure 

1. Installer en suivant la procédure [Pour tous les utilisateurs](/fr/rdm/windows/installation/client/all-users/). Cela garantit que la base de données Microsoft Installer contient toutes les informations nécessaires pour tous les profils utilisateur de l'hôte. 
1. Après avoir installé {{ fr.RDM }}, configurez vos préférences. Nous vous recommandons de parcourir toutes les options de configuration pour trouver l'ensemble d'options que vous souhaitez distribuer. Les sources de données méritent un intérêt particulier, car elles sont bien meilleures lorsqu'elles sont configurées par un administrateur. Vous pouvez même en profiter pour verrouiller les sources de données afin de vous protéger contre toute modification par les utilisateurs. Veuillez consulter [Verrouillage de la source de données](/fr/rdm/windows/data-sources/lock/) pour plus d'informations. 
{% snippet icon.shieldWarning %} 

Lorsque vous utilisez des [Sources de données avancées](/fr/rdm/windows/data-sources/data-sources-types/advanced-data-sources/), pour des méthodes de journalisation efficaces, une sécurité de session appropriée et des fonctionnalités basées sur l'utilisateur, il est CRITIQUE que chaque utilisateur dispose de son propre compte pour s'authentifier auprès de la source de données.  

La redistribution d'un enregistrement de source de données doit suivre l'un des modèles ci-dessous :  

* La source de données est configurée pour toujours demander le nom d'utilisateur et le mot de passe; 
* Vous utilisez la sécurité intégrée contre SQL Server; 
* Vous utilisez des variables d'environnement pour le nom d'utilisateur et vous exigez le mot de passe. (Nous recommandons : USERDOMAIN%\%USERNAME% or %USERDNSDOMAIN%\%USERNAME%) 
{% endsnippet %}
 
{% snippet icon.shieldCaution %} 
Ne cochez pas les options pour inclure les ***identifiants du {{ fr.DA }}*** ainsi que toute source de données contenant des identifiants tout en activant également l'option ***Inclure les identifiants de la source de données***. 
{% endsnippet %}
 

3. Lors de l'utilisation de {{ fr.RDM }} sous un environnement Remote Desktop Services, nous devons améliorer les paramètres des entrées de type RDP afin d'utiliser le moins de ressources possibles ou d'améliorer les performances de démarrage de l'application. 
    1. Pour améliorer le démarrage de {{ fr.RDM }}, veuillez consulter la solution #3 de l'article [Startup Performance](/kb/remote-desktop-manager/troubleshooting-articles/startup-performance/). 
    1. Afin de limiter la consommation de la mémoire par les entrées de type RDP, veuillez consulter l'article [Memory Tuning of RDP Sessions](/kb/remote-desktop-manager/knowledge-base/memory-tuning-rdp-sessions/). 
1. Lorsque {{ fr.RDM }} est configuré à votre gout, utiliser ***Fichier – Options – Exporter les options***. Cela vous permettra de choisir exactement les sources de données à inclure, ainsi que les différentes catégories de paramètres. Veuillez vous référer aux [Options d'exportation](/fr/rdm/windows/commands/file/options/export/) pour plus de détails. Enregistrez le fichier sous le nom **default.cfg**. 
1. Déplacer le fichier **default.cfg** dans le dossier d'installation de {{ fr.RDM }}, si vous avez utilisé les paramètres d'installation par défaut, il se trouve sous le répertoire **%appdata%\Devolutions\RemoteDesktopManager**. 

## Processus 

### Nouveaux utilisateurs 

Chaque fois qu'un nouvel utilisateur crée un profil sur le système, {{ fr.RDM }} détecte la présence du fichier **default.cfg** et l'utilise comme modèle pour créer le fichier de configuration de l'utilisateur. 

### Utilisateurs existants 

{% snippet icon.badgeInfo %} 
Une politique de groupe existe pour forcer les nouvelles configurations à être acceptées automatiquement. Consultez la page [Apply Policies (EN)](/kb/remote-desktop-manager/how-to-articles/group-policies/) pour connaître le fonctionnement et le paramètre Force the loading of the default.cfg file. 
{% endsnippet %}
 
{% snippet icon.badgeCaution %} 
Si l'utilisateur choisit d'ignorer le nouveau fichier de configuration lorsqu'il est présenté avec la boîte de dialogue ci-dessous, il ne lui sera pas proposé avec le choix jusqu'à la date/heure du fichier **default.cfg** ait changé. 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
Si la principale  préoccupation est le déploiement d'une nouvelle clé de licence et que vous utilisez des [Sources de données avancées](/fr/rdm/windows/data-sources/data-sources-types/advanced-data-sources/), vous devriez plutôt utiliser Licences dans Administration. 
{% endsnippet %}
 
Chaque fois que {{ fr.RDM }} est démarré et qu'il détecte un nouveau fichier **default.cfg**, la boîte de dialogue suivante apparaît :  
![Nouveau default.cfg détecté](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip10368.png) 

En sélectionnant ***Use New Configuration (Lose Mine)***, la configuration de l'utilisateur est remplacée. Si vous souhaitez uniquement mettre à jour la clé de licence de {{ fr.RDM }} après un renouvellement, choisir ***Retrieve New Registration Only***. 
