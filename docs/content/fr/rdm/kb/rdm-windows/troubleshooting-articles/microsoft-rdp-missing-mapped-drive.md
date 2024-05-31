---
eleventyComputed:
  title: Microsoft RDP manque de lecteurs mappés
---
Les lecteurs réseau mappés ne sont pas disponibles dans les sessions RDP même si vous avez sélectionné Tous les lecteurs ; ou ne sont pas affichés dans la boîte de dialogue lors de la tentative d'ajout de Lecteurs Spécifiques en utilisant le bouton Plus.

Ce problème se produit lorsque vous démarrez {{ fr.RDM }} avec des privilèges élevés (Exécuter en tant qu'administrateur). Les lecteurs mappés ne sont pas disponibles depuis une invite élevée lorsque l'UAC est configuré pour Demander les informations d'identification dans Windows.

Ce problème n'est pas causé par {{ fr.RDM }}, vous devrez appliquer un correctif sur tous les postes de travail depuis lesquels vous devez lancer {{ fr.RDM }} avec des privilèges élevés.

![!!KB4052](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4052.png)

## Solution
### Méthode 1

1. Cliquer sur ***Démarrer Windows***, taper ***Exécuter*** et ouvrir l'application.
1. Taper ***gpedit.msc*** pour ouvrir l'***Éditeur de stratégie de groupe locale*** et ***autoriser*** l'application à apporter des modifications.
1. Localiser le chemin de la ***Stratégie de groupe*** suivant :

    Stratégie de l'ordinateur local\Paramètres Windows\Paramètres de sécurité\Stratégies locales\Options de sécurité

1. Configurer la politique suivante pour ***Demander le consentement*** :

    Contrôle de compte d'utilisateur : Comportement de l'invite d'élévation pour les administrateurs en mode d'approbation d'administration

### Méthode 2
Mapper à nouveau les lecteurs requis dans la session élevée. Une bonne solution serait de créer un fichier de commandes/batch qui commence par mapper à nouveau les lecteurs, puis lance {{ fr.RDM }}
