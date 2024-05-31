---
eleventyComputed:
  title: Configuration d'entrée de serveur secret
  description: Suivre ce pas à pas pour configurer vos entrées pour utiliser les identifiants Secret Server dans {{ fr.RDM }}.
---
{% snippet, "badgeInfo" %}
Cette fonctionnalité est uniquement disponible dans l'édition Team de {{ fr.RDM }}.
{% endsnippet %}

L'intégration ***Secret Server*** est assez simple dans {{ fr.RDM }}. Suivre ce pas à pas pour configurer vos entrées pour utiliser les identifiants ***Secret Server***.

1. Dans {{ fr.RDM }}, créer une nouvelle entrée ***Secret Server***.
1. Dans l'onglet ***Général***, saisir l'***URL*** utilisée pour se connecter à l'instance ***Secret Server***, qui est soit **https<area>://serveur** soit **https<area>://serveur/SecretServer**.
![URL du Secret Server](https://cdnweb.devolutions.net/docs/docs_en_kb_KB5021.png)

Configuration des informations d'identifiants :  

3. Si vous êtes le seul à utiliser cette entrée, saisir vos informations d'identifiants directement sous l'onglet ***Général***. Dans une équipe partagée, sélectionner ***Utiliser "Mes paramètres de compte"*** sous l'onglet ***Général***. Après la configuration de l'entrée, chaque utilisateur devra aller dans ***Fichier*** – ***Mes paramètres de compte*** – ***Secret Server*** pour saisir leurs informations.
![Mon compte Secret Server](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4027.png)
   {% snippet, "badgeCaution" %}
   L'authentification à deux facteurs (A2F) est prise en charge avec l'entrée ***Secret Server***.  
   Il y a une limitation avec l'API Rest : vous ne pouvez pas avoir d'A2F avec l'authentification Windows.
   {% endsnippet %}
1. Pour ce faire, saisir vos informations en bas de l'entrée ***Secret Server***.
1. Pour le ***mode Deux facteurs***, sélectionner ***Demander seulement lorsque la session expire***. De cette façon, vous obtiendrez l'invite A2F lorsque vous ouvrez {{ fr.RDM }}, et cela devrait durer toute la journée. Vous n'aurez pas à le saisir chaque fois que vous souhaitez utiliser un identifiant, à moins que cela ne soit ce que vous préférez. Dans ce cas, sélectionner ***Demander à chaque connexion***.
![Mode Deux facteurs](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4062.png)
1. Dans l'onglet ***Sélection des identifiants***, sélectionner ***Demander la liste***.
![Sélection des identifiants](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4028.png)
1. Dans la session où vous souhaitez utiliser les identifiants ***Secret Server*** (RDP, etc.), sélectionner les identifiants que vous avez créés avec ***Lié ({{ fr.VLT }})***, puis cliquer sur ***Sélectionner dans la liste*** pour spécifier le compte que vous souhaitez utiliser. De cette façon, vous avez une entrée ***Secret Server*** pour toutes les connexions.
![Identifiants – Sélectionner dans la liste](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4059.png)

Si vous préférez, vous pourriez également sélectionner directement les identifiants que vous souhaitez sous l'onglet ***Sélection des identifiants*** dans l'entrée ***Secret Server***.