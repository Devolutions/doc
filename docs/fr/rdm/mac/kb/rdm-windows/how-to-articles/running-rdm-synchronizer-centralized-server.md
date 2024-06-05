---
eleventyComputed:
  title: Exécuter le synchroniseur {{ fr.RDM }} depuis un serveur centralisé
  description: Pour éviter que votre ordinateur soit surchargé par des tâches en arrière-plan, telles que le Synchroniseur, effectuer ces tâches sur des serveurs centralisés.
---
Pour éviter que votre ordinateur soit surchargé par des tâches en arrière-plan, telles que le Synchroniseur, effectuer ces tâches sur des serveurs centralisés.

{% snippet, "badgeInfo" %}
Ces instructions sont pour les sources de données d'équipe
{% endsnippet %}

1. Installer une [version portable](/rdm/windows/installation/client/portable-usb/) de {{ fr.RDM }}.
1. Ajouter votre source de données avancée configurée. Nous recommandons ***l'authentification Windows*** pour le type d'authentification.
1. Supprimer la ***Source de Données Locale*** de la liste des sources de données.
1. Créer une entrée de synchroniseur. Pour tester l'entrée, cliquer sur ***Ouvrir Session***.
1. Aller à ***Avancé*** dans ***Propriétés du Synchroniseur*** et copier la ***Ligne de Commande***. Nous la collerons à l'étape 12.
![!!KB4196](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4196.png)
1. Ouvrir ***Planificateur de Tâches Windows***.
1. Sélectionner ***Créer une Tâche***.
![!!KB4197](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4197.png)
1. Entrer un nom de tâche et sélectionner ***Exécuter que l'utilisateur soit connecté ou non***.
![!!KB4198](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4198.png)
1. Dans l'onglet ***Déclencheurs***, sélectionner ***Nouveau***.
![!!KB4199](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4199.png)
1. Configurer les ***Paramètres*** comme souhaité.
    1. Définir le calendrier pour le déclencheur. Dans notre exemple, nous avons utilisé Hebdomadaire, chaque dimanche, à 1:00:00.
{type="a"}
    1. Cocher ***Arrêter la tâche si elle s'exécute plus longtemps que*** et définir la valeur à 30 minutes.
    1. Cocher ***Activé***, puis cliquer sur ***OK***.
![!!KB4200](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4200.png)
1. Dans l'onglet ***Actions***, cliquer sur ***Nouveau***.
![!!KB4201](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4201.png)
1. Coller la ligne de commande copiée à l'étape 5 dans ***Programme/script*** et cliquer sur ***OK***.
![!!KB4202](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4202.png)
1. Dans la pop-up, cliquer sur ***Oui***.
![!!KB4203](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4203.png)
1. Cliquer sur ***OK***.
![!!KB4204](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4204.png)

La configuration de la tâche est terminée et s'exécutera automatiquement. Vous pouvez surveiller le statut des tâches dans le Visualiseur d'événements Windows.
