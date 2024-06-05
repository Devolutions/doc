---
eleventyComputed:
  title: Variables de test
---
{% snippet, "badgeInfo" %}
Les variables sont uniquement prises en charge pour les ***Sources de Données Avancées*** comme SQL Server et {{ fr.DVLS }}
{% endsnippet %}

{% snippet, "badgeCaution" %}
Pour que le mot de passe soit disponible en tant que variable, vous devez aller dans les ***Paramètres de Sécurité*** de l'entrée et cocher ***Autoriser le mot de passe en variable***.
Si l'option est grisée, vous devez activer ***Autoriser les variables de mot de passe pour toutes les entrées*** et ***Autoriser la variable de mot de passe dans les macros*** dans ***Administration – Paramètres Système – Politique de Mot de Passe***.
{% endsnippet %}

{% snippet, "badgeCaution" %}
Si vous utilisez le mode d'identification ***Lié ({{ fr.VLT }})*** dans vos entrées, vous devrez également activer l'option ***Autoriser le mot de passe en variable*** dans l'entrée d'identification liée.
{% endsnippet %}

Le ***Macro de Frappe Automatique*** de {{ fr.RDM }} est vraiment utile pour simuler l'interaction utilisateur. Il est principalement utilisé pour effectuer une connexion automatique sur des pages web, mais vous pouvez exécuter des commandes shell avancées sur différents systèmes d'exploitation.

Parfois, vous avez besoin de confirmer exactement ce qui sera envoyé lors de l'utilisation de nos Variables.

Une astuce simple consiste à créer un fichier batch qui se contente de taper tout ce qui est envoyé sur la ligne de commande.

Copiez simplement ce qui suit dans votre éditeur préféré et enregistrez-le en tant que fichier de commande, j'ai nommé le mien parrot.bat

```
@echo off
echo.
echo.
echo %*
echo.
echo.
pause
```
Maintenant, il suffit de créer une session Ligne de Commande (Application Externe) et de définir la ligne de commande sur le chemin du fichier parrot.bat et d'ajouter les variables juste après.

`"C:\tools\parrot.bat" $DOMAIN$ $IP$ $USERNAME$`  

Maintenant, lorsque vous exécutez l'entrée, vous verrez exactement quelles valeurs sont envoyées.
