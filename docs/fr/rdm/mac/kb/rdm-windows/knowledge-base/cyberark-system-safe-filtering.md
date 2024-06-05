---
eleventyComputed:
  title: Filtrage des coffres-forts du système CyberArk
---
CyberArk ne dispose pas de drapeaux pour indiquer si ses coffres-forts sont destinés à un usage système ou à un usage général. Cela dit, nous pouvons trouver dans diverses sources d'informations CyberArk que certains coffres-forts sont effectivement destinés au fonctionnement interne du {{ fr.VLT }} exclusivement.  
Les coffres-forts suivants seront considérés comme des coffres-forts « système », et en cochant l'option appropriée (généralement étiquetée ***Masquer les coffres-forts système***), ils seront cachés des listes.  
{% snippet, "badgeNotice" %}
Aller à ***Fichier – Paramètres – Types – CyberArk*** pour ajouter ou supprimer des ***Coffres-forts exclus***.
{% endsnippet %}  

Système  
VaultInternal  
Notification Engine  
PVWAConfig  
PVWAPrivateUserPrefs  
PVWAPublicData  
PVWAReports  
PVWATaskDefinitions  
PVWATicketingSystem  
PVWAUserPrefs  
PasswordManager  
PasswordManager_ADInternal  
PasswordManager_info  
PasswordManager_workspace  
PasswordManagerShared  
PasswordManager_Pending  

Veuillez nous envoyer un message à [service@devolutions.net](mailto:service@devolutions.net) si vous pensez que cette liste devrait être modifiée.
