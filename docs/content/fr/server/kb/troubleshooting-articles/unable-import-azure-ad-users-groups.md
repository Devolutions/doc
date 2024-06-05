---
eleventyComputed:
  title: Impossible d'importer des utilisateurs ou des groupes Azure AD
---
Il est possible que le cache Azure AD stocké dans {{ fr.DVLS }} ne soit pas correctement chargé. Voici les étapes pour résoudre ce problème.

{% snippet, "badgeCaution" %}
Si vous venez d'activer l'option d'authentification Microsoft, cela peut prendre un certain temps (environ une heure) pour que le cache se charge avant de pouvoir importer des utilisateurs et des groupes d'utilisateurs.
{% endsnippet %}

## Solution

1. Sur la {{ fr.DVLSCONSOLE }}, aller dans l'onglet ***Companions*** et arrêter le ***Scheduler Service***.
![!!KB5012](https://cdnweb.devolutions.net/docs/docs_en_kb_KB5012.png)
1. Sur l'interface web de {{ fr.DVLS }}, aller dans ***Administration - Paramètres du serveur - Journalisation*** et activer l'option ***Log debug information***.
![!!KB5013](https://cdnweb.devolutions.net/docs/docs_en_kb_KB5013.png)
1. Aller dans ***Administration - Réinitialiser le cache du serveur*** et réinitialiser le cache ***Microsoft Authentication***.
![!!KB5016](https://cdnweb.devolutions.net/docs/docs_en_kb_KB5016.png)
1. Dans ***Rapports - Journaux de la source de données***, surveiller les journaux jusqu'à obtenir l'entrée de journal ***Update Azure cache end***.
{% snippet, "badgeInfo" %}
Le processus peut prendre du temps en fonction du nombre de groupes et d'utilisateurs dans Azure AD et de leur relation.
{% endsnippet %}

5. Une fois terminé, essayer d'importer un utilisateur ou un groupe.
6. En cas de succès, adapter le taux de rafraîchissement dans ***Administration - Paramètres du serveur - Authentification - Microsoft Authentication - Cache des utilisateurs et des groupes d'utilisateurs Microsoft Authentication*** pour permettre un temps suffisant pour rafraîchir complètement le cache AAD.
![!!KB5014](https://cdnweb.devolutions.net/docs/docs_en_kb_KB5014.png)
1. De retour dans la {{ fr.DVLSCONSOLE }}, aller dans l'onglet ***Companions*** pour démarrer le ***Scheduler Service***.
![!!KB5015](https://cdnweb.devolutions.net/docs/docs_en_kb_KB5015.png)
1. Sur l'interface web de {{ fr.DVLS }}, aller dans ***Administration - Paramètres du serveur - Journalisation*** et désactiver l'option ***Log debug information***.