---
eleventyComputed:
  title: Ajouter une entrée RDP (session)
  description: RDP (Microsoft Remote Desktop) et d'autres outils qui ouvrent des connexions à distance sont enregistrés comme entrées de session dans {{ fr.RDM }}.
---
{% youtube 'FtSlp_TVAxE?si=cSznMwIYyRIIwnkR&amp;start=156' %}

***RDP (Microsoft Remote Desktop)*** et d'autres outils qui ouvrent des connexions à distance sont enregistrés comme entrées ***Session*** dans {{ fr.RDM }}. Les entrées stockent des informations sur l'hôte, les identifiants, les ressources locales et le VPN, permettant ainsi aux utilisateurs d'ouvrir une session en un clic. Vous pouvez également définir des permissions, configurer les paramètres de sécurité et personnaliser les journaux.

## Créer une session RDP

Voici les bases pour commencer :

1. Dans l'onglet ***Modifier***, cliquer ***Nouvelle entrée***.
1. Choisir ***RDP (Microsoft Remote Desktop)***.
1. Saisir un nom pour la session.
1. Choisir un mode d'affichage, les plus courants sont :
    * ***Intégré*** (en onglets) ouvre un nouvel onglet dans {{ fr.RDM }}.
    * ***Externe*** s'ouvre dans l'application externe.
1. Choisir les identifiants à utiliser.
    * Pour utiliser des identifiants que vous avez enregistrés comme une entrée séparée, choisir ***Référentiel d'identifiants*** et sélectionner l'entrée dans la liste.
    * Sélectionner ***Par défaut*** si vous souhaitez saisir les identifiants directement dans l'entrée.
1. Saisir l'adresse de l'***Hôte***.

## Ouvrir une session RDP

Cliquer ***Ouvrir session*** sur l'onglet ***Accueil*** ou dans le ***Tableau de bord***.

Vous pouvez ouvrir plus d'une session à la fois. Avec les sessions intégrées, vous pouvez basculer entre les onglets ou surveiller les connexions simultanément : utiliser la vue miniature ou [réorganiser les sessions ouvertes avec l'écran partagé](/rdm/windows/user-interface/content-area/embedded-sessions/).
