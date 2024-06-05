---
eleventyComputed:
  title: Sécurité
  description: Utiliser Fichier – Paramètres – Sécurité pour configurer les paramètres de sécurité liés à la sécurité de l'application locale, l'authentification à deux facteurs, le verrouillage, la sécurité hors ligne, la sécurité des certificats, et plus encore.
---
Utiliser ***Fichier – Paramètres – Sécurité*** pour configurer les paramètres de sécurité liés à la sécurité de l'application locale, l'authentification à deux facteurs, le verrouillage, la sécurité hors ligne, la sécurité des certificats, et plus encore.
![Fichier – Paramètres – Sécurité](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2152.png)

## Paramètres
### Sécurité de l'Application (Locale)
| OPTION                                       | DESCRIPTION |
|----------------------------------------------|-------------|
| Sécurité de l'Application (Locale)                 | Sécuriser votre {{ fr.RDM }} local avec un mot de passe d'application personnalisé, en utilisant les informations d'identification de l'ordinateur comme mot de passe d'application. Ce paramètre utilise les informations d'identification de tout utilisateur déjà connecté à l'ordinateur (comptes locaux ou comptes de domaine). L'option ***Forcer le nom d'utilisateur et le domaine actuellement connectés*** ne permet pas de mettre à jour la boîte de nom d'utilisateur et elle est fixée au compte d'utilisateur de domaine actuellement connecté sur cet ordinateur. Cette fonctionnalité oblige l'utilisateur à ressaisir le mot de passe pour ouvrir {{ fr.RDM }}. Windows Hello peut être activé mais doit d'abord être configuré sur votre ordinateur local. Vous serez invité à saisir ce mot de passe lorsque vous ouvrez votre application. Vous pouvez également choisir de ne pas définir de mot de passe d'application. |
| Nouveau mot de passe / Confirmer le mot de passe              | Si ***Utiliser un mot de passe d'application*** a été sélectionné dans la liste déroulante ***Sécurité de l'Application***, entrer un mot de passe d'application dans le champ ***Nouveau mot de passe***, puis le saisir à nouveau dans le champ ***Confirmer le mot de passe***. |
| Chiffrer les fichiers locaux en utilisant le mot de passe d'application | Si ***Utiliser un mot de passe d'application*** a été sélectionné dans la liste déroulante ***Sécurité de l'Application***, cocher cette option pour utiliser le mot de passe d'application précédemment créé pour chiffrer vos fichiers {{ fr.RDM }} locaux. |
| Options avancées                             | Cette option est disponible uniquement si ***Chiffrer les fichiers locaux en utilisant le mot de passe d'application*** a été activé. Cliquer dessus ouvre une nouvelle fenêtre. Dans cette fenêtre, définir le ***Nombre d'itérations de dérivation de clé***, qui est le nombre de dérivations utilisées pour la fonction de dérivation de clé pendant le chiffrement. Un nombre plus élevé est plus sûr, mais peut affecter les performances. La valeur par défaut est 1000. |
| Forcer le nom d'utilisateur et le domaine actuellement connectés| Si activé, force l'utilisation du nom d'utilisateur et du domaine utilisés pour se connecter à la session Windows actuelle. |


### Authentification à Deux Facteurs
| OPTION                         | DESCRIPTION                                                                                     |
|--------------------------------|-------------------------------------------------------------------------------------------------|
| Mode d'authentification            | Sélectionner ***Par défaut – Demander la sélection à l'utilisation*** pour être interrogé sur le MFA à configurer lors de l'utilisation, ou sélectionner ***Vérifier contre toutes les méthodes configurées*** pour être invité avec les méthodes configurées uniquement. Notez que le MFA est défini localement. Pour appliquer ce paramètre, activer ***Forcer l'authentification à deux facteurs à la connexion de l'application*** et ***Désactiver le menu Fichier – Paramètres*** [politiques](/rdm/kb/rdm-windows/how-to-articles/group-policies/) pour empêcher un utilisateur de désactiver ces paramètres. Le MFA peut également être activé au niveau de la source de données dans ***Administration – Paramètres Système – Spécifique à l'Application – Applications*** au lieu d'utiliser les politiques pour bloquer les ***Options***. |
| Exiger l'authentification Yubikey | Cocher cette option pour s'authentifier dans votre application {{ fr.RDM }} en utilisant l'authentification Yubikey. Insérer votre Yubikey dans le champ ci-dessous cette option.                                                                                                                            |
| Exiger une validation TOTP ({{ fr.WS }} ou Google Authenticator) | Cocher cette option pour valider votre authentification à votre application {{ fr.RDM }} avec un mot de passe à usage unique basé sur le temps (TOTP) envoyé par {{ fr.WS }} ou Google Authenticator. Le configurer en utilisant le bouton ***Configurer*** ci-dessous cette option.    |
| Remplacer le nom de compte | Entrer un nouveau nom pour votre compte TOTP qui remplacera l'actuel.                               |
| Exiger l'authentification Duo                         | Cocher cette option pour s'authentifier dans votre application {{ fr.RDM }} en utilisant l'authentification Duo. Le configurer en utilisant le bouton ***Configurer*** ci-dessous cette option.             |
| Action automatique Duo | Sélectionner l'action que Duo doit utiliser pour valider l'authentification.         |

### Verrouillage
| OPTION                      | DESCRIPTION                                                                                     |
|-----------------------------|-------------------------------------------------------------------------------------------------|
| À la minimisation                 | Cocher cette option pour verrouiller {{ fr.RDM }} après l'avoir minimisé. Déverrouiller l'application en utilisant la ou les méthodes de sécurité configurées.|
| À l'inactivité                     | Cocher cette option pour verrouiller {{ fr.RDM }} après qu'il ait été inactif pendant un certain temps (définir cette période sous cette option). Déverrouiller l'application en utilisant la ou les méthodes de sécurité configurées. |
| Au verrouillage de Windows             | Cocher cette option pour verrouiller {{ fr.RDM }} après que votre ordinateur passe en mode veille / hibernation. Déverrouiller l'application en utilisant la ou les méthodes de sécurité configurées. |
| En veille                  | Cocher cette option pour verrouiller {{ fr.RDM }} après avoir verrouillé votre session Windows. Déverrouiller l'application en utilisant la ou les méthodes de sécurité configurées. |

### Sécurité Hors Ligne
| OPTION                          | DESCRIPTION |
|---------------------------------|-------------|
| Sécurité Hors Ligne                | Dans la liste déroulante, sélectionner entre **Sécurité par défaut** et **Sécurité renforcée**. La sécurité renforcée vous permet de configurer un mot de passe hors ligne. Le cache hors ligne sera alors chiffré. Le mot de passe est requis lors du passage en mode Hors ligne uniquement si l'option **Demander l'accès hors ligne** est activée. |
| Nouveau mot de passe / Confirmer le mot de passe | Ceci est disponible uniquement avec la sécurité hors ligne renforcée. Entrer un mot de passe hors ligne dans le champ **Nouveau mot de passe**, puis le saisir à nouveau dans le champ **Confirmer le mot de passe**. |
| Demander l'accès hors ligne       | Ceci est disponible uniquement avec la sécurité hors ligne renforcée. Si activé, {{ fr.RDM }} demandera si vous souhaitez accéder à l'application hors ligne au démarrage. |

### Sécurité des Certificats

| OPTION                      | DESCRIPTION                                                                                     |
|-----------------------------|-------------------------------------------------------------------------------------------------|
| Ignorer les erreurs de certificat de l'application | Cocher cette option pour désactiver la validation du certificat de l'application. Ceci n'est pas recommandé, car cela compromettrait la confidentialité et l'intégrité des communications entre le client et le serveur et pourrait exposer l'application à des menaces potentielles.        |
| Appliquer la vérification de révocation du certificat | Cocher cette option pour activer la validation que le certificat n'a pas été révoqué. Ceci est nécessaire si l'une des URL pour la validation du certificat est indisponible pour une raison quelconque.                                                                          |

### Autres

| OPTION                                   | DESCRIPTION                                                            |
|------------------------------------------|------------------------------------------------------------------------|
| Activer le bureau sécurisé                    | Si activé, le bureau sécurisé ouvre les boîtes de dialogue de mot de passe sur un autre bureau pour ajouter un niveau supplémentaire de sécurité et empêcher les enregistreurs de frappe de consigner ce que vous écrivez. |
| Désactiver tous les événements sur les sessions           | Cocher cette option pour désactiver tous les événements configurés sur les entrées de session. |
| Activer la cryptographie DPAPI sur les fichiers locaux | Chiffre les fichiers de configuration {{ fr.RDM }} sur le poste de travail en utilisant les capacités de chiffrement natives de Windows (DPAPI - Data Protection API). Cela fournit une sécurité supplémentaire pour les informations sensibles contenues dans ces fichiers (telles que les informations de connexion à la source de données). DPAPI est un outil de chiffrement supplémentaire robuste géré par le système d'exploitation qui garantit que les fichiers de configuration contenant des informations sensibles et les fichiers de cache hors ligne ne peuvent être déchiffrés que sur votre propre machine. Activer DPAPI et la Sécurité Hors Ligne chiffrera les fichiers deux fois puisque DPAPI est une étape de chiffrement séparée. En plus des fichiers hors ligne, cette option chiffre les fichiers de configuration {{ fr.RDM }} suivants :<ul><li>RemoteDesktopManager.enb</li><li>RemoteDesktopManager.enc</li><li>RemoteDesktopManager.stb</li><li>RemoteDesktopManager.stv</li></ul><br>La fonctionnalité est désactivée par défaut, car dans certaines conditions rares (indépendantes du contrôle de {{ fr.RDM }}), les données déchiffrées par DPAPI peuvent être irrécupérables, empêchant {{ fr.RDM }} de démarrer. |
| Activer l'analyse anti-malware             | Cocher cette option pour permettre à {{ fr.RDM }} de rechercher des maliciels. Cette fonctionnalité peut ne pas être compatible avec votre fournisseur anti-malware. Elle prend en charge Microsoft Defender, Avast, AVG et ESET. |
