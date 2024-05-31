---
eleventyComputed:
  title: Configurer le fournisseur de compte de domaine PAM via {{ fr.DGW }}
---
Cette option permet de prendre en charge les comptes de domaine Active Directory dans {{ fr.DVLS }} PAM pour plusieurs domaines sur différents réseaux, via {{ fr.DGW }}. Elle vous donne la possibilité d'utiliser {{ fr.DVLS }} PAM pour gérer plusieurs domaines Active Directory à la fois et d'isoler {{ fr.DVLS }} du reste d'Active Directory pour forcer l'utilisation de {{ fr.DGW }}. Cette fonctionnalité est particulièrement utile pour les MSP devant accéder à plusieurs sous-réseaux de différents clients.

## Configuration
1. Se connecter à l'interface web de {{ fr.DVLS }}.
1. Aller à ***Administration*** – ***Accès privilégié*** – ***Fournisseurs***.
1. Cliquer sur ***Modifier*** sur un ***Fournisseur de domaine*** déjà configuré.
![Modifier](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0160.png)
   {% snippet, "badgeHelp" %}
   Lire plus sur [Fournisseurs de domaine](/pam/server/providers/domain-provider/).
   {% endsnippet %}

1. Activer ***Utiliser {{ fr.DGW }}*** sous la section ***Domaine***.
![Fournisseur de compte de domaine PAM](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0000.png)
1. Cliquer sur le bouton des points de suspension pour choisir le {{ fr.DGW }} puis cliquer sur ***Sélectionner***.
![Sélectionner](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0161.png)
1. Cliquer sur ***Modifier*** pour choisir le ***Contrôleur de domaine*** (qui est maintenant obligatoire à cause de l'option ***Utiliser {{ fr.DGW }}***).
1. Cliquer sur ***Enregistrer*** dans la fenêtre ***Contrôleur de domaine préféré***.
![Enregistrer](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0162.png)
1. Pour enregistrer ces paramètres et fermer la fenêtre, cliquer sur ***Enregistrer***.
