---
eleventyComputed:
  title: Installation pour tous les utilisateurs
---
{{ fr.RDM }} nécessite une installation avec des privilèges élevés, ainsi que la disponibilité de l'application pour tous les utilisateurs de l'ordinateur où vous installez. Cela dit, les retours ont montré que cela se termine avec succès dans un large spectre des environnements de notre communauté. Suivre cette procédure pour réduire les problèmes de déploiement à l'avenir.

## Procédure
{% snippet, "badgeWarning" %}
Cette procédure enregistre toutes les associations de types de fichiers, cela signifie que les fichiers rdp seront désormais ouverts avec {{ fr.RDM }}. Si vous souhaitez éviter cela, installer manuellement en utilisant le mode Personnalisé, et choisir chaque option sauf celle de l'association rdp.
{% endsnippet %}

1. Copier l'installateur dans un dossier disponible pour tous les utilisateurs du poste de travail (par exemple, **C:\Deploy**).
1. Ouvrir une invite de commande Élevée (cliquer droit sur le raccourci et sélectionner ***Exécuter en tant qu'administrateur***).
1. Exécuter la commande suivante, adaptée pour la version que vous installez  

```powershell
msiexec /i Setup.{APPNAME}.{VERSION}.msi /Quiet /Passive INSTALLMODE=Complete
```
Nous recommandons également de désactiver la vérification de mise à jour automatique car toutes les installations ou mises à niveau futures devraient être effectuées par un administrateur ET avec des privilèges élevés.  

Si vous souhaitez procéder à des mises à niveau depuis {{ fr.RDM }}, il doit avoir été démarré en utilisant ***Exécuter en tant qu'administrateur***.

## Notes
La technologie d'installation de Microsoft copie le paquet d'installation sous un nouveau nom aléatoire ainsi que son enregistrement dans une base de données. Notre expérience montre que cette copie a tendance à disparaître et que la base de données devient corrompue. Nous avons souvent à diriger notre communauté vers [https://support.microsoft.com/en-us/mats/program_install_and_uninstall](https://support.microsoft.com/en-us/topic/fix-problems-that-block-programs-from-being-installed-or-removed-cca7d1b6-65a9-3d98-426b-e9f927e1eb4d)

Les paramètres Quiet et Passive sont juste pour s'assurer que vous n'avez pas à faire un choix pendant l'installation. Nous avons trouvé que cela réduit le risque d'erreurs.
