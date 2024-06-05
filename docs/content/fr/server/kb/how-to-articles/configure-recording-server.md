---
eleventyComputed:
  title: Configurer le serveur d'enregistrement
---
Les étapes suivantes décriront les options pour installer le ***Serveur d'enregistrement*** pour {{ fr.DVLS }}. Il est possible de l'installer sur une machine autonome. Il est recommandé d'installer le ***Serveur d'enregistrement*** en utilisant la méthode [{{ fr.DGW }}](#devolutions-gateway-installation) puisque le format [{{ fr.DVLS }}](#devolutions-server-console-installation) est maintenant obsolète.

## Installation {{ fr.DGW }}
{% snippet, "badgeHelp" %}
Installer d'abord une [passerelle](/dgw/server/server-configuration/) avant de commencer ce processus.
{% endsnippet %}

1. Dans l'interface web pour {{ fr.DVLS }}, s'assurer d'être connecté à la bonne source de données.
1. Aller à ***Administration*** – ***Paramètres Système*** – ***Serveur d'enregistrement***.
1. Cliquer sur ***Activer l'enregistrement {{ fr.DGW }}***.
![Activer l'enregistrement {{ fr.DGW }}](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0130.png)
   {% snippet, "badgeHelp" %}
   Il est possible de [migrer les fichiers d'enregistrement de session hérités](/powershell/gateway-powershell/recording-server-migration-tool/).
   {% endsnippet %}

1. Désactiver l'option ***Activer le serveur d'enregistrement hérité***.
1. Cliquer sur ***Enregistrer***.
![Enregistrer](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0131.png)
1. Dans {{ fr.RDM }}, aller dans la section ***Propriétés*** – ***Sécurité*** – ***Enregistrement de session*** – ***Enregistrement de session*** des types d'entrées pris en charge ;
    * Apple Remote Desktop
    * Azure Blob Storage
    * Chrome
    * FTP
    * Google Drive
    * RDP
    * S3
    * SCP
    * SFTP
    * SSH Shell
    * Telnet
    * VNC
    * WebDav
1. Régler le ***Mode*** sur ***Requis***.
1. Régler l'***Enregistrement*** sur ***À distance***.
![Enregistrement de session](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0132.png)
1. Cliquer sur ***OK*** pour enregistrer les modifications et fermer la fenêtre.

## Installation {{ fr.DVLSCONSOLE }}
{% snippet, "badgeCaution" %}
Comme il est maintenant obsolète, ce format de ***Serveur d'enregistrement*** est uniquement recommandé pour la version 2023.1 et antérieures.
{% endsnippet %}

{% snippet, "badgeInfo" %}
La {{ fr.DVLSCONSOLE }} est nécessaire pour installer le ***Serveur d'enregistrement***.
{% endsnippet %}

1. Dans la {{ fr.DVLSCONSOLE }}, sélectionner l'onglet ***Companions*** et cliquer sur le bouton ***Installer*** de la section ***Serveur d'enregistrement***.
![Onglet Companions](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8014.png)

1. Accepter les termes du ***Contrat de Licence Utilisateur Final*** et cliquer sur ***Suivant***.
![Contrat de Licence Utilisateur Final](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8015.png)

1. Sélectionner la ***Source*** du paquet selon la version de {{ fr.DVLS }} installée et cliquer sur ***Suivant***.
![Source](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8016.png)

1. Régler les paramètres pour la machine où le ***Serveur d'enregistrement*** sera installé et cliquer sur ***Suivant***.
![Propriétés](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8017.png)
   {% snippet, "badgeCaution" %}
   Ne pas installer le ***Serveur d'enregistrement*** dans [...]\inetpub\ ou dans le même dossier que l'instance web de {{ fr.DVLS }} et/ou {{ fr.DVLSCONSOLE }}, car cela le rendrait impossible à fonctionner correctement.
   {% endsnippet %}

   | Propriétés du Serveur d'enregistrement | Description |
   | --------------------------- | ----------- |
   | Nom du serveur                 | Nom de l'hôte où le ***Serveur d'enregistrement*** sera exécuté, cliquer sur le bouton ***Obtenir le nom d'hôte*** pour remplir automatiquement ce champ |
   | Port                        | Numéro de port TCP pour communiquer avec le ***Serveur d'enregistrement*** |
   | Dossier d'installation         | Dossier d'installation de l'application ***Serveur d'enregistrement*** |
   | Dossier de sortie               | Dossier de destination des sessions enregistrées |

   | Certificat              | Description |
   | ------------------------ | ----------- |
   | Utiliser un certificat existant | Chemin vers un fichier de certificat existant |
   | Mot de passe du cert.           | Mot de passe du certificat |

   | Avancé                | Description |
   | ----------------------- | ----------- |
   | Traitement parallèle max | Nombre maximum de fichiers à convertir en même temps en un format lisible |

5. Régler le ***Compte de Service*** qui exécutera le Service d'enregistrement et cliquer sur ***Suivant***.
![Compte de Service](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8018.png)

6. Régler l'***URL du Serveur*** et le compte ***Informations d'identification d'administration*** qui créera la ***Clé d'application*** pour permettre au ***Serveur d'enregistrement*** de communiquer avec l'instance {{ fr.DVLS }}, puis cliquer sur ***Suivant***.
![{{ fr.DVLS }} Informations d'identification](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8019.png)
   | {{ fr.DVLS }} Informations d'identification | Description |
   | ------------------------------ | ----------- |
   | URL du Serveur                     | URL de l'instance {{ fr.DVLS }} |

   | Informations d'identification d'administration | Description |
   | -------------------------- | ----------- |
   | Nom d'utilisateur                   | Nom d'utilisateur d'un compte administrateur dans {{ fr.DVLS }} |
   | Mot de passe                   | Mot de passe du compte administrateur |

   | Informations d'identification d'application                                       | Description |
   | ------------------------------------------------------------- | ----------- |
   | Utiliser des informations d'identification d'application existantes                          | Activer l'utilisation d'***Informations d'identification d'application*** existantes dans {{ fr.DVLS }} |
   | Clé d'application                                               | Clé des ***Informations d'identification d'application*** |
   | Secret d'application                                            | Clé secrète des ***Informations d'identification d'application*** |
   | {{ fr.DVLS }} utilise un chemin différent pour accéder aux enregistrements | Activer cette option pour pouvoir télécharger les fichiers d'enregistrement en utilisant un chemin d'accès différent |
   | Dossier de sortie public                                          | Définir le dossier public à partir duquel les utilisateurs peuvent télécharger les fichiers d'enregistrement, cela peut être un chemin UNC |

7. Cliquer sur le bouton ***Installer*** pour commencer l'installation du ***Serveur d'enregistrement***.
![Résumé](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8020.png)

1. Une fois terminé, un message de dialogue ***Opération réussie*** sera affiché.
![OK et Fermer](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8021.png)

1. Cliquer sur ***OK*** et ***Fermer*** la fenêtre.

{% snippet, "badgeInfo" %}
Pour mettre à niveau le ***Serveur d'enregistrement***, il est nécessaire de le désinstaller et de le réinstaller depuis l'onglet ***Companions*** de la {{ fr.DVLSCONSOLE }}
{% endsnippet %}
