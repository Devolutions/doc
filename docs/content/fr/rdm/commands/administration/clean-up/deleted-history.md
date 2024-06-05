---
eleventyComputed:
  title: Nettoyer l'historique supprimé
  status: Sujet disponible en langue allemande
---
L'option ***Nettoyer l'historique supprimé*** supprime définitivement l'historique de la fenêtre ***Entrées Supprimées***, rendant impossible la restauration des entrées supprimées à moins que vous n'ayez effectué une sauvegarde. L'historique des entrées peut toujours être trouvé sous ***Rapports – Journaux d'Activité***.

{% snippet, "badgeInfo" %}
Cette fonctionnalité nécessite une [Source de Données Avancée](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/).
{% endsnippet %}

{% snippet, "badgeInfo" %}
Vous devez être administrateur de la source de données pour effectuer cette action.
{% endsnippet %}

## Paramètres
- Aller à l'onglet ***Administration*** dans le ruban.
- Cliquer sur ***Nettoyer*** puis ***Nettoyer l'historique supprimé***.
- Sélectionner avant quelle date l'historique des ***Entrées Supprimées*** sera supprimé.
- Sélectionner de quel {{ fr.VLT }} l'historique des ***Entrées Supprimées*** sera supprimé.
- Cliquer sur ***OK***.
![Nettoyer l'historique supprimé](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin0003.png)
   {% snippet, "badgeWarning" %}
   Il n'y aura pas de sauvegarde de l'***Historique Supprimé***. Nous recommandons fortement de faire une [Sauvegarde](/rdm/windows/commands/file/backup/) avant de procéder.
   {% endsnippet %}

- Cliquer sur ***Procéder quand même***.
![Fenêtre de confirmation](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin0004.png)

- Cliquer sur ***OK*** pour fermer la fenêtre de dialogue.
