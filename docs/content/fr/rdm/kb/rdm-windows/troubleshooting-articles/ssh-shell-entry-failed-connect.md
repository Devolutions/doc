```yaml
eleventyComputed:
  title: Échec de la connexion à l'entrée Shell SSH
```
Échec de la connexion à l'entrée Shell avec authentification interactive.

Une erreur SSH inconnue a été rencontrée.

Aucune méthode d'authentification disponible

Des erreurs apparaissent lors de la connexion avec un Shell SSH dans {{ fr.RDM }} 2019.X.
![!!KB4099](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4099.png)
## Cause
***L'authentification interactive*** dans le terminal est définie sur ***Vrai*** sous l'onglet ***Avancé***.

Sous ***Fichier – Paramètres – Types – Terminal***, l'authentification interactive dans le terminal est également configurable.
### Solution
Changer la valeur en ***Faux*** si l'authentification interactive dans le terminal n'est pas requise.
### Solution Alternative
{% snippet, "badgeInfo" %}
Ajouter des lignes dans le serveur SSH peut rompre le processus d'authentification. Ne jamais effectuer cela sans une sauvegarde.
{% endsnippet %}

Si l'authentification interactive est requise pour confirmer que le serveur SSH inclut les lignes :

KbdInteractiveAuthentication yes
ChallengeResponseAuthentication yes
UseLogin no
UsePam yes
