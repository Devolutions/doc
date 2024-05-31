---
eleventyComputed:
  title: Dépannage de la connectivité SQL Server
  description: SQL Server s'installe avec une connectivité réseau limitée. Par conséquent, lorsqu'il est initialement installé, le moteur de base de données ne peut pas être accédé depuis un autre appareil.
---
SQL Server s'installe avec une connectivité réseau limitée. Par conséquent, lorsqu'il est initialement installé, le moteur de base de données ne peut pas être accédé depuis un autre appareil.

Sauter à ces aides de dépannage des problèmes de connectivité.
{% snippet, "badgeInfo" %}
Avant tout, essayer d'accéder à la base de données via SQL Server Management Studio.
{% endsnippet %}

* [Autoriser l'accès à distance](#autoriser-laccès-à-distance)
* [Activer les protocoles](#activer-les-protocoles)
* [Ouvrir un port de communication dans le pare-feu](#ouvrir-un-port-de-communication-dans-le-pare-feu)
* [Impossible de se connecter à SQL Server](#impossible-de-se-connecter-à-sql-server)
* [Tester la connexion avec un fichier de lien de données universel (.udl)](#tester-la-connexion-avec-un-fichier-de-lien-de-données-universel-udl)
* [Échec de la connexion pour l'utilisateur – raison : la validation de l'accès au serveur basée sur les jetons a échoué](#échec-de-la-connexion-pour-lutilisateur-raison-la-validation-de-laccès-au-serveur-basée-sur-les-jetons-a-échoué)
* [Échec de la connexion. la connexion provient d'un domaine non approuvé et ne peut pas être utilisée avec l'authentification Windows](#échec-de-la-connexion-la-connexion-provient-dun-domaine-non-approuvé-et-ne-peut-pas-être-utilisée-avec-lauthentification-windows)
* [Une erreur liée au réseau ou spécifique à l'instance s'est produite...](#une-erreur-liée-au-réseau-ou-spécifique-à-linstance-sest-produite)

## Autoriser l'accès à distance
Sur les anciennes versions de SQL Server, les connexions à distance doivent être autorisées manuellement. Suivre [cette documentation Microsoft](https://msdn.microsoft.com/en-CA/library/ms191464.aspx) pour activer la connectivité.

## Activer les protocoles
Pour se connecter au moteur de base de données depuis un autre appareil, un protocole, tel que TCP/IP, doit être activé.
1. Ouvrir le ***Gestionnaire de configuration SQL Server***.
![Gestionnaire de configuration SQL Server](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4060.png)
1. Développer la ***Configuration réseau SQL Server***.
1. Sélectionner une instance.
![Sélectionner une instance](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4245.png)
1. Cliquer avec le bouton droit sur le protocole souhaité, puis sélectionner ***Activer***.
![Activer le protocole](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4230.png)

## Ouvrir un port de communication dans le pare-feu
Pour se connecter à un serveur SQL depuis un autre appareil, un port de communication doit être ouvert dans le pare-feu.
{% snippet, "badgeNotice" %}
Le port par défaut pour TCP/IP est 1433.
{% endsnippet %}

1. Ouvrir le ***Pare-feu Windows avec sécurité avancée***.
![Pare-feu Windows avec sécurité avancée](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4277.png)
1. Sélectionner ***Règles entrantes*** dans le volet gauche.
1. Cliquer avec le bouton droit sur ***Règles entrantes*** et sélectionner ***Nouvelle règle***.
![Nouvelle règle entrante](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4278.png)
1. Dans la page ***Type de règle***, sélectionner ***Port***, puis cliquer sur ***Suivant***.
![Type de règle Port](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4279.png)
1. Dans la page ***Protocole et ports***, sélectionner ***TCP***.
1. Sélectionner ***Ports locaux spécifiques***, puis taper le numéro de port de l'instance du moteur de base de données, puis cliquer sur ***Suivant***.
   {% snippet, "badgeNotice" %}
   L'instance par défaut de SQL Server écoute sur le port 1433.

   Si un anti-virus est en cours d'exécution sur votre serveur, vous devez également vous assurer que le port est autorisé.
   {% endsnippet %}

   ![TCP et ports locaux spécifiés](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4280.png)

1. Dans la page ***Action***, sélectionner ***Autoriser la connexion***, puis cliquer sur ***Suivant***.
![Autoriser la connexion](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4281.png)
1. Dans la page ***Profil***, sélectionner les profils qui décrivent l'environnement de connexion de l'ordinateur, puis cliquer sur ***Suivant***.
![Profils](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4282.png)
1. Dans la page ***Nom***, entrer un ***Nom*** et une ***Description*** pour la règle, puis cliquer sur ***Terminer***.
![Nom et description](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4283.png)

## Impossible de se connecter à SQL Server
* S'assurer que chaque instance de SQL Server est démarrée et en cours d'exécution.
* Aller dans ***Aide – Voir le journal d'application*** pour voir si des messages d'erreur pertinents sont présents. Il y a de bonnes chances que vous voyiez [Une erreur liée au réseau ou spécifique à l'instance s'est produite...](#une-erreur-liée-au-réseau-ou-spécifique-à-linstance-sest-produite)
* Créer un fichier de lien de données universel (.udl) pour tester votre connexion SQL (voir [Fichier de lien de données universel (.udl)](#tester-la-connexion-avec-un-fichier-de-lien-de-données-universel-udl)).
* Un anti-virus ou un pare-feu pourrait bloquer l'application.
* Vérifier les paramètres de connectivité réseau.

## Tester la connexion avec un fichier de lien de données universel (.udl)
Cela testera que l'instance permet à votre poste de travail de se connecter. Les pare-feu et les logiciels anti-virus peuvent encore empêcher {{ fr.RDM }} d'accéder au réseau même si le test de lien de données universel est concluant.

1. Ouvrir l'***Explorateur de fichiers Windows***.
1. Naviguer vers le dossier dans lequel le fichier ***.udl*** sera créé et stocké.
1. Sélectionner l'onglet ***Accueil*** et, à l'aide du menu ***Nouvel élément***, créer un ***Document texte***.
![Créer un document texte](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4246.png)
1. Renommer ce fichier et changer son extension de fichier en ***.udl***.
   {% snippet, "badgeInfo" %}
   Ne pas inclure d'espaces dans le nom du fichier. Un avertissement indiquant que le changement des extensions de fichier peut rendre les fichiers inutilisables peut être affiché, l'ignorer.

   Les extensions de nom de fichier peuvent être cachées par l'***Explorateur de fichiers Windows***. Pour afficher les extensions de nom de fichier, aller dans l'onglet ***Affichage*** de l'***Explorateur de fichiers*** et activer l'option ***Extensions de nom de fichier***.
   {% endsnippet %}

   ![Renommer le document texte](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4247.png)

1. Double-cliquer sur le fichier ***.udl*** pour ouvrir la boîte de dialogue ***Propriétés de lien de données***.
1. Dans l'onglet ***Fournisseur***, sélectionner le fournisseur ***Microsoft OLE DB Provider for ODBC Drivers***.
![Microsoft OLE DB Provider for ODBC Drivers](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4248.png)
1. Dans l'onglet ***Connexion***, sélectionner ***Utiliser la chaîne de connexion*** et entrer une chaîne de connexion personnalisée.
   {% snippet, "badgeNotice" %}
   Exemple de chaîne de connexion valide :
   `Driver={SQL Server};Server=myServerAddress;Database=myDataBase;Uid=myUsername;Pwd=myPassword;`

   Valider que le nom du serveur est correctement saisi (connu sous le nom de nom de l'instance).
   {% endsnippet %}

   ![Chaîne de connexion personnalisée](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4249.png)

1. Utiliser l'onglet ***Avancé*** pour voir et définir d'autres propriétés d'initialisation pour vos données.
![Onglet Avancé](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4259.png)
1. Utiliser l'onglet ***Tout*** pour revoir et éditer toutes les propriétés d'initialisation OLE DB disponibles pour votre fournisseur OLE DB.
![Onglet Tout](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4275.png)
1. Dans l'onglet ***Connexion***, utiliser le bouton ***Tester la connexion*** pour tester la connectivité SQL Server.
![Onglet Connexion](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4276.png)
1. Cliquer sur ***OK*** pour sauvegarder la chaîne de connexion dans le fichier de lien de données universel (***.udl***).

## Échec de la connexion pour l'utilisateur – raison : la validation de l'accès au serveur basée sur les jetons a échoué
Trouver la véritable raison de cela est tout un processus. Une recherche sur le web révèle tant de solutions à tenter, et il est facile de se perdre dans toutes ces étapes. L'important à garder à l'esprit est que le message d'erreur est trompeur et que la cause est souvent une chose simple.

La première étape est de s'assurer que le problème n'est pas unique à {{ fr.RDM }}. Tester avec un fichier de lien de données universel (.udl) comme montré ci-dessus prouvera que la configuration du poste de travail n'est pas le problème.

Lors de l'octroi de droits à la base de données en utilisant l'appartenance à un groupe AD et qu'un de vos utilisateurs a ce message d'erreur, vous devez vérifier les privilèges pour TOUS les groupes AD auxquels il appartient. Tout ce qui a un DENY explicite doit être évalué soigneusement. La requête ci-dessous aidera à identifier ces occurrences.

```
select princ.*, perm.* from sys.server_principals princ, sys.server_permissions perm
where perm.grantee_principal_id = princ.principal_id
AND state_desc = 'DENY'
```

## Échec de la connexion. La connexion provient d'un domaine non approuvé et ne peut pas être utilisée avec l'authentification Windows.
![Échec de la connexion. La connexion provient d'un domaine non approuvé et ne peut pas être utilisée avec l'authentification Windows.](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2009.png)

Le message d'erreur suivant apparaît lorsque vous ne pouvez pas accéder à la source de données {{ fr.RDM }} avec l'authentification intégrée lors de la connexion à un VPN Dialup.

1. Localiser votre fichier de connexion VPN .pbk. Vous pouvez le trouver dans **%APPDATA%\Microsoft\Network\Connections\Pbk** ou, si vous l'avez configuré pour permettre à tous les utilisateurs d'utiliser la connexion, dans **C:\ProgramData\Microsoft\Network\Connections\Pbk**.
1. Éditer le fichier **.pbk** avec un éditeur de texte et trouver la ligne **UseRasCredentials=1**.
1. Désactiver ce paramètre en changeant le 1 en 0 comme ceci : **UseRasCredentials=0**.

## Une erreur liée au réseau ou spécifique à l'instance s'est produite...
Ce message d'erreur signifie que le serveur n'a pas pu être atteint, les causes possibles sont nombreuses.

Ces étapes sont exclusivement pour le dépannage côté client. Pour des conseils complets sur ce problème, veuillez consulter [cet article Technet](http://social.technet.microsoft.com/wiki/contents/articles/2102.how-to-troubleshoot-connecting-to-the-sql-server-database-engine.aspx).

Si le message d'erreur indique que les Pipes nommés sont utilisés et que vous accédez à un serveur distant, assurez-vous que le protocole TCP IP est utilisé simplement en ajoutant **tcp:** devant le nom de l'instance (par exemple, **tcp:vmtxg.database.windows.net**).

| Cause                                             | Diagnostic                                           |
|---------------------------------------------------|------------------------------------------------------|
| Nom du serveur mal saisi (connu sous le nom de nom de l'instance) | [Fichier de lien de données universel (.udl)](#tester-la-connexion-avec-un-fichier-de-lien-de-données-universel-udl) |
| Le serveur SQL est-il en cours d'exécution ?                 | [Fichier de lien de données universel (.udl)](#tester-la-connexion-avec-un-fichier-de-lien-de-données-universel-udl) |
| Seul le nom du serveur est spécifié alors qu'il n'y a pas d'instance par défaut sur ce serveur | [Fichier de lien de données universel (.udl)](#tester-la-connexion-avec-un-fichier-de-lien-de-données-universel-udl) |
| SQL Server écoute sur un port non standard    | [Fichier de lien de données universel (.udl)](#tester-la-connexion-avec-un-fichier-de-lien-de-données-universel-udl) |
| Un anti-virus bloque {{ fr.RDM }}                  | Vérifier dans les journaux de l'Anti-Virus pour voir les menaces bloquées. |
| Le pare-feu empêche {{ fr.RDM }} de se connecter    | Ajuster votre pare-feu pour autoriser **RemoteDesktopManager.exe** et **RemoteDesktopManager64.exe** à communiquer avec des services externes. |
| Problèmes de protocole réseau                           | Valider que le client et le serveur utilisent le même protocole réseau IPv4 ou IPv6. |