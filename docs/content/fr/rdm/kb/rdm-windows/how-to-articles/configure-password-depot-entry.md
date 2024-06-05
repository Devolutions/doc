---
eleventyComputed:
  title: Configurer une entrée de dépôt de mot de passe dans {{ fr.RDM }}
  description:
---
Chaque champ de l'entrée ***Password Depot*** est décrit ci-dessous.
{% snippet, "badgeInfo" %}
Pour en savoir plus sur la création et la gestion d'un compte Password Depot, veuillez consulter la documentation sur leur site officiel.
{% endsnippet %}

{% snippet, "badgeInfo" %}
L'intégration des identifiants provenant des gestionnaires de mots de passe est uniquement disponible dans la version Team de {{ fr.RDM }}.
{% endsnippet %}

L'entrée peut être trouvée sous ***Nouvelle Entrée*** – ***Gestion des Identifiants*** – ***Gestion des Mots de Passe***.
![Gestion des Identifiants](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0086.png)
![Onglet Général](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0087.png)
* ***Nom*** : Nom de l'entrée dans {{ fr.RDM }}.
* ***Dossier*** : Dans quel dossier de {{ fr.RDM }} l'entrée sera.

### Onglet Général
* ***Hôte*** : URL de Password Depot
* ***Utiliser "Mes Paramètres de Compte"*** : Aller à ***Fichier*** – ***Mes Paramètres de Compte*** – ***Paramètres*** – ***Gestion des Mots de Passe*** et cliquer sur ***Password Depot*** pour configurer cette option d'abord ; remplace les champs ***Nom d'utilisateur*** et ***Mot de passe***.
* ***Nom d'utilisateur*** : Nom d'utilisateur de Password Depot.
* ***Mot de passe*** : Mot de passe de Password Depot.
    * ***Demander toujours le mot de passe*** : Si activé, l'entrée demandera toujours le mot de passe lorsqu'elle est accédée.
* ***Base de données*** : Cliquer sur le bouton avec des points de suspension pour choisir la base de données Password Depot.
    * ***Entrée*** : Cliquer sur le bouton avec des points de suspension pour choisir une identifiant spécifique pour cette entrée.
    * ***Toujours demander avec une liste*** : Demande à l'utilisateur une liste de tous les identifiants disponibles au lieu d'un spécifique.
