---
eleventyComputed:
  title: Activer les fichiers journaux {{ fr.DVLS }}
  description: Il se peut que notre équipe de support vous demande d'obtenir les fichiers journaux {{ fr.DVLS }}. Ils se trouvent dans le dossier App_Data de l'application web {{ fr.DVLS }}.
---
Il se peut que notre équipe de support vous demande d'obtenir les fichiers journaux {{ fr.DVLS }}. Ils se trouvent dans le dossier App_Data de l'application web {{ fr.DVLS }}.

Les fichiers nécessaires à cet emplacement sont ceux commençant par "DPS_Main" (**DPS_Main_001.log**, **DPS_Main_002.log**, etc.). S'ils ne sont pas présents, c'est probablement parce que l'***Identité du Pool d'Applications*** ne peut pas écrire dans ce dossier. Résolvez ce problème en donnant à cette identité la permission ***Modifier*** sur le dossier App_Data.

## Activer les fichiers journaux
1. Dans la {{ fr.DVLSCONSOLE }} sélectionner le serveur désiré dans la liste.
1. Dans l'onglet ***Serveur*** cliquer sur ***Explorer***. Cela ouvrira le dossier d'installation.
![Explorer](https://cdnweb.devolutions.net/docs/DVLS0005_2024_2.png)
1. Faire un clic droit sur le dossier ***App_Data*** et sélectionner ***Propriétés***.
![Propriétés](https://cdnweb.devolutions.net/docs/DVLS0006_2024_2.png)
1. Dans l'onglet ***Sécurité*** cliquer sur ***Modifier...***.
![Modifier](https://cdnweb.devolutions.net/docs/DVLS0007_2024_2.png)
1. Sélectionner ***IIS_IUSRS***.
1. ***Autoriser*** la permission ***Modifier*** et cliquer sur ***OK***.
![Permission de modifier](https://cdnweb.devolutions.net/docs/DVLS0008_2024_2.png)
1. Cliquer sur ***OK*** dans la fenêtre ***Propriétés***.
1. Dans la {{ fr.DVLSCONSOLE }} cliquer sur ***Arrêter le serveur***.
![Arrêter le serveur](https://cdnweb.devolutions.net/docs/DVLS0013_2024_2.png)
1. Attendre quelques secondes puis cliquer sur ***Démarrer le serveur***.
![Démarrer le serveur](https://cdnweb.devolutions.net/docs/DVLS0010_2024_2.png)
Redémarrer le serveur créera les fichiers **DPS_Main.log** et **DPS_Main_001.log** après un court délai. Des actions doivent être prises sur le {{ fr.DVLS }} pour que des journaux soient créés (connexion, etc.).
![Fichiers journaux](https://cdnweb.devolutions.net/docs/DVLS0012_2024_2.png)

{% snippet, "badgeInfo" %}
Lorsque vous accordez la permission ***Modifier*** au groupe ***IIS_IUSRS***, tous les utilisateurs des pools d'applications sur ce serveur sont autorisés à accéder à ce répertoire. Si l'installation utilise une identité de pool d'applications spécifique pour {{ fr.DVLS }}, envisagez de donner des permissions exclusivement à cette identité. Alternativement, vous pourriez attribuer les permissions ***Modifier*** au compte SERVICE RÉSEAU, qui est couramment utilisé pour les pools d'applications IIS, bien que ce compte puisse être partagé avec d'autres services également.
{% endsnippet %}
```
