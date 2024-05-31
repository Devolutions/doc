---
eleventyComputed:
  title: Paramètres d'exportation
  description: Utiliser Fichier – Paramètres – Exporter les paramètres pour contrôler l'exportation des paramètres des configurations d'application sélectionnées.
---
Utiliser ***Fichier*** – ***Paramètres*** – ***Exporter les paramètres*** pour contrôler les paramètres à exporter à partir des configurations d'application sélectionnées. Utiliser cela pour transférer facilement les paramètres vers une autre machine.

![Emplacement des paramètres d'exportation](https://cdnweb.devolutions.net/docs/RDMW4064_2024_1.png)

{% snippet, "shieldWarning" %}
Partager le fichier exporté avec un collègue donnerait effectivement à cette personne toutes les informations d'identification contenues dans les définitions des sources de données.

Devolutions ne recommande pas de partager des informations d'identification à une source de données d'équipe.
{% endsnippet %}

![Dialogue d'exportation du fichier de configuration](https://cdnweb.devolutions.net/docs/RDMW4063_2024_1.png)

## Paramètres

### Général

{% snippet, "shieldWarning" %}
Les modèles locaux peuvent contenir des informations d'identification. Ne pas partager le fichier exporté.
{% endsnippet %}

| PARAMÈTRE                     | DESCRIPTION                                                 |
|----------------------------|-------------------------------------------------------------|
| Paramètres du proxy             | Inclut les paramètres du proxy Internet.                                |
| Chemins d'installation enregistrés   | Préserve les chemins d'installation configurés pour l'application externe. |
| Modèles enregistrés            | Inclut les modèles locaux dans l'exportation.                 |
| Inclure les informations d'identification du compte Devolutions | Inclut les informations d'identification du compte Devolutions dans l'exportation.  | 
| Inclure les informations d'identification de la source de données | Inclut les informations d'identification pour toutes les sources de données sélectionnées.                  |
| Effacer les informations de verrouillage de l'application | Efface les informations de ***Fichier*** – ***Paramètres*** – ***Sécurité*** – ***Verrou*** – ***Verrouiller l'application*** (local). | 
| Forcer toujours à récupérer une nouvelle inscription | Permet à l'administrateur de forcer les utilisateurs à utiliser ce nouveau fichier de configuration. | 

### Sources de données

{% snippet, "shieldWarning" %}
Les configurations de source de données sélectionnées sont exportées avec le nom d'utilisateur/mot de passe actuellement configuré. Lors de la création d'un fichier pour configurer rapidement de nouveaux employés, s'assurer de ne pas donner par erreur des informations d'identification. L'utilisation du [{{ fr.CIS }}](/rdm/windows/installation/client/custom-installer-service/) est recommandée dans ce cas.
{% endsnippet %}

Toutes les sources de données configurées seront affichées dans cette section. Sélectionner celle(s) à inclure dans l'exportation. Veuillez noter que le contenu de la source de données n'est pas exporté.

Une fois les paramètres correctement personnalisés, cliquer sur ***Exporter***. Une invite apparaît alors demandant d'enregistrer les paramètres dans un fichier **RemoteDesktopManager.cfg**.
