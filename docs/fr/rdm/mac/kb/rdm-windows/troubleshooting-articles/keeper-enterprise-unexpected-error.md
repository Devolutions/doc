---
eleventyComputed:
  title: Erreur inattendue de Keeper Enterprise
---
Avec Keeper Enterprise dans {{ fr.RDM }}, certains utilisateurs peuvent rencontrer ce message d'erreur : Une erreur inattendue s'est produite. Veuillez vérifier le journal d'exécution.

Cela peut également se produire dans l'événement où vous n'avez pas de connexions individuelles à Keeper mais une connexion de domaine SSO Entreprise.
![!!KB4783](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4783.png)
## Solution
Dans la console ***Keeper Admin***, aller à ***Admin - Rôles - Politique d'Application Utilisateur*** et cliquer sur ***Politiques d'Application - Restriction de Plateforme*** et activer ***Commander SDK***.
