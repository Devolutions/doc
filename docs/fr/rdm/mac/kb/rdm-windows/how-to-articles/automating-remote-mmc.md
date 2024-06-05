---
eleventyComputed:
  title: Automatisation de la console de gestion Microsoft à distance (MMC)
  description: Vous pouvez configurer une console d'extension MMC pour qu'elle s'exécute sur l'un de vos serveurs. L'extension doit prendre en charge l'accès à distance.
---
Vous pouvez configurer une console d'extension MMC pour qu'elle s'exécute sur l'un de vos serveurs. L'extension doit prendre en charge l'accès à distance.

## Paramètres

1. Créer l'outil de session via ***Édition – Nouvelle entrée***.
1. Dans Macro/Script/Outil, sélectionner le type d'entrée ***Ligne de commande***.
1. Nommer la session DHCP.
1. Sous l'onglet ***Général***, dans le champ ***Exécuter***, taper *dhcpmgmt.msc /ComputerName $HOST$* ($HOST$ est la variable qui sera remplacée par le nom du serveur ou l'adresse IP).
![Exécuter](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4529.png)
1. Sous l'onglet ***Avancé***, activer ***Exécuter en tant qu'Administrateur***.
   {% snippet, "shieldInfo" %}
   Si vous utilisez une édition Windows 64 bits, activer également ***Exécuter en mode 64 bits***.
   {% endsnippet %}
1. Cliquer sur ***Ajouter*** pour sauvegarder votre entrée.
1. Vérifier que vos sessions utilisent les identifiants appropriés pour exécuter l'outil. Dans la section ***Outils de gestion – Outils*** de chaque session, assurez-vous d'avoir sélectionné les identifiants appropriés à fournir.
   ![Outils de gestion – Outils – Identifiants](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4530.png)

   | Option                      | Description                                       |
   | --------------------------- | ------------------------------------------------- |
   | Utiliser les identifiants par défaut | Utiliser les identifiants de la session Windows.     |
   | Utiliser les identifiants de la session | Utiliser les mêmes identifiants que la session.          |
   | Demander les identifiants      | Demande les identifiants lors de l'utilisation.               |
   | Personnalisé                      | Entrer un nom d'utilisateur, un domaine et un mot de passe personnalisés.    |
   | Lié ({{ fr.VLT }})        | Spécifier un ensemble d'identifiants d'un {{ fr.VLT }} spécifique. |
   | Mes identifiants personnels     | Utiliser [***Mes Identifiants Personnels***](/rdm/windows/commands/file/my-account-settings/my-personal-credentials/) définis dans ***Fichier – Paramètres de mon compte***. |
   | Mon compte privilégié       | Utiliser ***Mon Compte Privilégié*** défini dans ***Fichier – Paramètres de mon compte***. |

Pour exécuter l'extension, sélectionner votre session et exécuter l'outil depuis le tableau de bord.
![Exécuter depuis le tableau de bord](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4531.png)
