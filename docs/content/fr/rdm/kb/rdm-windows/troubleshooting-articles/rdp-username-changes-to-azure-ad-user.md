---
eleventyComputed:
  title: Le nom d'utilisateur RDP d'un client Azure AD change automatiquement sur Windows 11
  description: Dans l'implémentation de Microsoft, si le nom d'utilisateur RDP ne contient pas "\" ou "@" et n'a pas de domaine explicite, il est automatiquement changé en "AzureAD\utilisateur" si le client rejoint Azure AD, quel que soit le système cible.
---
Dans l'implémentation de Microsoft, si le nom d'utilisateur RDP ne contient pas ***“\”*** ou ***“@”*** et n'a pas de domaine explicite, il bascule automatiquement en ***"AzureAD\utilisateur"*** lorsque le client rejoint Azure AD, quel que soit le système cible. Ce problème se produit sur Windows 11.

## Solution
La solution consiste à définir un point "." comme domaine pour l'entrée de connexion RDP. Suivre ces instructions :
1. Dans {{ fr.RDM }}, cliquer avec le bouton droit sur votre entrée RDP et sélectionner ***Propriétés***.
1. Dans les propriétés de l'entrée RDP, écrire un point "." dans le champ ***Domaine***.
![Définir le domaine](https://cdnweb.devolutions.net/docs/RDMW2013_2024_1.png)
1. Sauvegarder vos modifications.

{% snippet, "badgeHelp" %}
Pour plus d'aide, contacter notre support à [service@devolutions.net](mailto:service@devolutions.net).
{% endsnippet %}
