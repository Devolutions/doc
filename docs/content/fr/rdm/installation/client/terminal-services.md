---
eleventyComputed:
  title: Services Terminal / Services Bureau à Distance
  description: "{{ fr.RDM }} a un excellent support pour fonctionner sous un environnement de Services Bureau à Distance. Un fichier de configuration maître peut être créé pour distribuer les paramètres à tous les nouveaux utilisateurs du système ou même pour mettre à jour la configuration des utilisateurs existants."
---
{{ fr.RDM }} a un excellent support pour fonctionner sous un environnement de Services Bureau à Distance. Un fichier de configuration maître peut être créé pour distribuer les paramètres à tous les nouveaux utilisateurs du système ou même pour mettre à jour la configuration des utilisateurs existants.

{% snippet, "badgeNotice" %}
Veuillez vous assurer que vous avez suivi [les recommandations de Microsoft](https://learn.microsoft.com/en-us/windows-server/administration/performance-tuning/role/remote-desktop/session-hosts) sur la manière de configurer un environnement RDS. Cela aura un impact sévère sur la performance si des installations Windows par défaut sont effectuées.

Chaque utilisateur doit avoir un dossier de données d'application unique (profils itinérants ou technologies similaires). {{ fr.RDM }} sauvegarde certaines préférences utilisateur dans le fichier de configuration local. Le dossier peut être effacé chaque fois que l'utilisateur se déconnecte de la session Windows, mais il doit être accessible pendant la durée d'exécution de {{ fr.RDM }}.
{% endsnippet %}

## Procédure

1. Installer en suivant la procédure [pour tous les utilisateurs](/rdm/windows/installation/client/all-users/). Cela garantit que la base de données d'installation de Microsoft contient toutes les informations nécessaires pour tous les profils d'utilisateurs de l'hôte.
1. Après avoir installé {{ fr.RDM }}, configurer vos préférences. Nous recommandons de passer en revue toutes les options de configuration pour trouver l'ensemble des options que vous souhaitez distribuer. Les sources de données méritent un intérêt particulier puisqu'il est beaucoup mieux qu'elles soient configurées par un administrateur. Vous pouvez même saisir l'opportunité de verrouiller les sources de données pour protéger contre toute modification par les utilisateurs. Veuillez vous référer à [Verrouiller la source de données](/rdm/windows/data-sources/lock/) pour plus d'informations.
   {% snippet, "shieldWarning" %}
   Lors de l'utilisation de [sources de données avancées](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/), pour des méthodes de journalisation efficaces, une sécurité de session appropriée et des fonctionnalités basées sur l'utilisateur, il est crucial que chaque utilisateur ait son propre compte pour s'authentifier contre la source de données.

   La redistribution d'un enregistrement de source de données devrait suivre l'un des modèles ci-dessous :

   * La source de données est configurée pour toujours demander le nom d'utilisateur et le mot de passe.
   * Vous utilisez la sécurité intégrée contre SQL Server.
   * Vous utilisez des variables d'environnement pour le nom d'utilisateur et exigez le mot de passe (nous recommandons %USERDOMAIN%\%USERNAME% ou %USERDNSDOMAIN%\%USERNAME%).

   Ne pas activer les options pour inclure les identifiants {{ fr.DA }} ainsi que toute source de données qui contient des identifiants sauvegardés tout en activant ***Inclure les identifiants de la source de données***.
   {% endsnippet %}
1. Lors de l'exécution de {{ fr.RDM }} sous un environnement de Services Bureau à Distance, nous pouvons avoir à ajuster les paramètres des entrées RDP pour utiliser le moins de ressources possible et améliorer la performance de démarrage de l'application.
    1. Pour améliorer la performance de démarrage de {{ fr.RDM }}, veuillez voir la Solution #3 de l'article [Performance de démarrage](/rdm/kb/rdm-windows/troubleshooting-articles/startup-performance/). {type="a"}
    1. Pour limiter la consommation de mémoire des entrées RDP, veuillez voir [Ajustement de la mémoire des sessions RDP](/rdm/kb/rdm-windows/knowledge-base/rdp-session-entry/memory-tuning-rdp-sessions/). {type="a"}
1. Lorsque {{ fr.RDM }} est configuré selon vos préférences, utiliser ***Fichier – Paramètres – Options d'exportation***. Cela vous permettra de choisir exactement les sources de données à inclure, ainsi que les différentes catégories de paramètres. Veuillez vous référer à [Options d'exportation](/rdm/windows/commands/file/options/export/) pour plus de détails. Sauvegarder le fichier sous le nom **default.cfg**.
1. Déplacer le fichier **default.cfg** dans le dossier d'installation de {{ fr.RDM }}.

## Flux de travail

### Nouveaux utilisateurs

Chaque fois qu'un nouvel utilisateur crée un profil sur le système, {{ fr.RDM }} détecte la présence du fichier **default.cfg** et l'utilise comme modèle pour créer le fichier de configuration de l'utilisateur.

### Utilisateurs existants

Une stratégie de groupe existe pour forcer l'acceptation automatique des nouvelles configurations. Veuillez voir [Appliquer les politiques](/rdm/kb/rdm-windows/how-to-articles/group-policies/) pour savoir comment déployer le paramètre Forcer le chargement du fichier **default.cfg**.

Si l'utilisateur choisit d'ignorer le nouveau fichier de configuration lorsqu'il est présenté avec le dialogue ci-dessous, il ne lui sera pas présenté le choix jusqu'à ce que la date/heure du fichier **default.cfg** ait changé.

Si la principale préoccupation est de déployer une nouvelle clé de licence et que vous utilisez une [source de données avancée](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/), vous devriez plutôt utiliser la fonctionnalité pour la stocker dans ***Administration – Licences***.

Chaque fois que {{ fr.RDM }} est démarré et détecte un nouveau fichier **default.cfg**, le dialogue suivant apparaîtra :
![Nouveau default.cfg détecté](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10368.png)

En sélectionnant ***Utiliser la Nouvelle Configuration (Perdre la Mienne)***, la configuration de l'utilisateur est simplement écrasée. Si vous souhaitez uniquement mettre à jour la clé de licence {{ fr.RDM }} après un renouvellement, choisissez ***Récupérer Uniquement la Nouvelle Inscription***.
