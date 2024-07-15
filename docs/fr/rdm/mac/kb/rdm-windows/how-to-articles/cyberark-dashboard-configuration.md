---
eleventyComputed:
  title: Configuration et utilisation du tableau de bord CyberArk
  description: L'objectif de l'entrée ***Tableau de bord CyberArk*** est de fournir aux utilisateurs de {{ fr.RDM }} une interface qui élimine le besoin d'utiliser l'accès Web au coffre-fort de mots de passe (PVWA) pour voir la liste des coffres-forts et des identifiants auxquels l'utilisateur connecté a accès.
---
L'objectif de l'entrée ***Tableau de bord CyberArk*** est de fournir aux utilisateurs de {{ fr.RDM }} une interface qui élimine le besoin d'utiliser l'accès Web au coffre-fort de mots de passe (PVWA) pour voir la liste des coffres-forts et des identifiants auxquels l'utilisateur connecté a accès. Combiné avec des scénarios sans mot de passe et/ou notre contrôle d'accès basé sur les rôles (RBAC) riche, cela signifie qu'un utilisateur n'a PAS besoin de connaître les identifiants CyberArk pour se voir présenter une liste de comptes auxquels il a accès. De plus, puisque le tableau de bord est conçu pour s'authentifier une fois sur votre serveur et, surtout, maintenir une session active aussi longtemps qu'il est actif, il a l'avantage significatif de ne nécessiter l'A2F qu'une seule fois lors du lancement du tableau de bord.

Un autre principe de conception du tableau de bord est que son principal modèle d'utilisation est de passer par le Gestionnaire de Session Privégiée CyberArk (PSM) pour atteindre les actifs. Cela signifie que {{ fr.RDM }} n'a PAS besoin de lire le mot de passe pour le compte à utiliser. Des modèles moins sécurisés sont disponibles pour prendre en charge des scénarios plus anciens que certains de nos clients utilisent encore.

{% snippet, "badgeHelp" %}
Pour en savoir plus sur l'option de délimiteur A2F de CyberArk, [cliquez ici](/rdm/mac/kb/rdm-windows/knowledge-base/mfa-delimiter-cyberark/).
{% endsnippet %}

## Configuration
1. Créer une nouvelle entrée ***Tableau de bord CyberArk*** ou aller dans les ***Propriétés*** de votre entrée existante.
1. Dans la section ***Général***, spécifier un ***Nom*** et un ***Dossier*** pour votre entrée si cela n'est pas déjà fait.
![Propriétés du Tableau de bord CyberArk – Général – Nom et Dossier](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2166.png)

### Onglet Général
3. Saisir l'***URL des services Web*** pour se connecter à votre instance CyberArk. Il s'agit de l'adresse du serveur et devrait ressembler à "https://&lt;nom du serveur&gt;.&lt;notre domaine&gt;.loc/".
![Onglet Général](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2068.png)
   {% snippet, "badgeInfo" %}
   Voici à quoi ressemblera votre ***URL des services Web***, selon votre abonnement CyberArk :
   * ***Auto-hébergé*** : URL courte
   * ***PrivilegeCloud*** : URL courte si l'URL ne se termine pas par "cyberark.cloud"
   * ***PrivilegeCloud*** : /privilegecloud si l'URL se termine par "cyberark.cloud"
   {% endsnippet %}

4. Saisir un ***Répertoire virtuel***. Ce champ est soit /privilegecloud soit vide.
5. Sélectionner une ***Version*** dans la liste déroulante. Cela fait référence à la version de CyberArk PVWA vue sur la page d'authentification de CyberArk.
   {% snippet, "badgeInfo" %}
   Veuillez noter que nous ne supportons que l'API CyberArk V12 (ou plus haut) pour le moment et que la version 12.1 de CyberArk (ou plus haute) est requise.
   {% endsnippet %}

6. Sélectionner le ***Mode d'authentification*** utilisé pour se connecter à l'instance CyberArk (***CyberArk***, ***Windows***, ***LDAP***, ***RADIUS***, ou ***SAML***).
   {% snippet, "badgeNotice" %}
   L'authentification SAML est prise en charge avec CyberArk depuis la version 2022.3.25 de {{ fr.RDM }}, mais des améliorations importantes et des corrections de bugs ont été implémentées dans des versions ultérieures. Nous recommandons de mettre à jour au moins à la version 2023.1 de {{ fr.RDM }} si votre version actuelle est plus ancienne. L'une des améliorations de la version 2023.1 est que vous n'avez plus à fournir l'***URL de connexion IdP*** lors de la configuration de votre authentification SAML. Si vous rencontrez des problèmes avec votre authentification SAML, consultez [Configuration et dépannage SAML](/rdm/mac/kb/rdm-windows/troubleshooting-articles/saml-configuration-troubleshooting-cyberark-dashboard/).

   L'authentification SAML pour CyberArk Privilege Cloud nécessite {{ fr.RDM }} 2023.2.17 ou plus récent.

   Votre administrateur CyberArk {{ fr.VLT }} devrait vous fournir le modèle d'authentification utilisé, mais si, dans le PVWA, vous cliquez sur un lien qui correspond à votre nom de domaine d'entreprise, cela indique que le modèle LDAP est utilisé. L'icône ressemble à ce qui suit :
   ![Icône CyberArk LDAP](https://cdnweb.devolutions.net/docs/docs_en_kb_iconldapcyberark.png)
   {% endsnippet %}

7. Dans la liste déroulante ***Identifiants d'authentification***, sélectionner ***Personnalisé*** pour saisir vos identifiants ci-dessous ou les sélectionner en utilisant un mécanisme de {{ fr.RDM }}. Cette liste n'est pas disponible avec le ***Mode d'authentification SAML***.
   {% snippet, "badgeNotice" %}
   Comme pour toutes les entrées ***Tableau de bord*** dans {{ fr.RDM }}, si vous créez une entrée qui sera visible par plusieurs utilisateurs, nous recommandons de choisir ***Mes paramètres de compte PVWA***, puis de visiter ***Fichier – Mes paramètres de compte – CyberArk PVWA*** pour saisir vos identifiants CyberArk personnels.
   {% endsnippet %}

8. Suivre cette étape si vous avez sélectionné ***Personnalisé*** dans la liste ***Identifiants d'authentification***. Sinon, passer à la section [Onglet Avancé](#onglet-avancé).
    1. Saisir votre ***Nom d'utilisateur*** et ***Mot de passe*** dans les champs correspondants. Utiliser le ***Générateur de mot de passe*** pour vous aider à créer un mot de passe sécurisé.
{type="a"}
    1. Cocher la case ***Toujours demander le mot de passe*** pour être invité à saisir votre mot de passe à chaque connexion.
    1. Si vous avez un code RSA SecurID, cocher la case ***Ajouter le code RSA SecurID au mot de passe***, puis sélectionner ci-dessous la ***Source RSA SecurID***.

### Onglet Avancé

#### Général
9. L'option ***Rafraîchissement automatique*** est activée par défaut. Elle maintient la connexion à votre environnement CyberArk et élimine le besoin de saisir les identifiants A2F à chaque connexion. Il est recommandé de la laisser activée.
![Onglet Avancé – Général](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4930.png)
1. Cocher ***Ouvrir les sessions à l'extérieur*** si vous ne souhaitez pas que vos sessions s'ouvrent en mode intégré dans {{ fr.RDM }}. Cela est surtout utile pour les applications qui ne supportent d'être ouvertes qu'à l'extérieur, comme PSM-Putty (PSM-SSH) et de nombreux autres composants de connexion PSM. Il est nécessaire de se connecter à des applications distantes en utilisant des connexions PVWA.
   {% snippet, "badgeInfo" %}
   Pour la plupart des composants de connexion nécessitant l'ouverture d'une application sur PSM, l'option ***Ouvrir à l'extérieur*** doit être activée. Cela est dû à une limitation de l'ActiveX RDP que nous utilisons, qui ne prend pas en charge le mode RDP RemoteApp. Toutefois, cette limitation peut être contournée en définissant un paramètre de composant de connexion dans CyberArk. Ce paramètre s'appelle DisableRemoteApp et doit être réglé sur ***Oui***. Pour plus d'informations, voir [la page de documentation de CyberArk](https://docs.cyberark.com/PrivCloud-SS/Latest/en/Content/Privilege%20Cloud/PrivCloud-psm-UX.htm) sur le sujet.
   {% endsnippet %}
1. Cocher ***Autoriser la connexion à l'hôte*** si vous souhaitez autoriser une connexion directe à la machine distante, ce qui signifie que l'utilisateur connecté doit avoir le droit de voir le mot de passe ; c'est donc moins sécurisé et n'est pas recommandé par l'équipe CyberArk.
1. Cocher ***Demander une raison*** si vous êtes tenu de fournir une raison pour établir une connexion.
1. Cocher ***Demander un numéro de ticket*** si vous êtes tenu de fournir un numéro de ticket pour établir une connexion en fonction de votre configuration CyberArk. Le champ ***Système de billetterie*** associé à cette option est une valeur de chaîne qui a du sens dans votre environnement. Il est informatif et nous l'envoyons avec le numéro.
1. Le ***Sauvegarde par défaut*** charge vos coffres-forts. Vous pouvez également cocher la case ***Charger les favoris par défaut*** pour charger vos coffres-forts favoris.
1. Définir le format de ***Nom d'utilisateur par défaut*** pour pouvoir se connecter à la machine distante. Il peut également être modifié dans le tableau de bord pour des connexions ad hoc, mais ce sera le format par défaut pour cette instance de tableau de bord.
1. Sélectionner la ***Méthode de recherche de domaine*** dans la liste déroulante.
1. La liste déroulante ***Champ de domaine*** n'est pertinente que lorsque le ***Format de nom d'utilisateur*** est réglé sur la valeur ***Champ***. Selon la configuration de votre {{ fr.VLT }}, divers champs CyberArk peuvent être utilisés pour contenir les informations de domaine. Choisir la valeur qui correspond à vos paramètres {{ fr.VLT }}.

#### PVWA
18. L'option ***Autoriser les connexions directes (PVWA)*** est activée par défaut et est la méthode recommandée. Elle permet la même action que le bouton ***Connecter*** offre dans le PVWA.
![Onglet Avancé – PVWA](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2263.png)
1. Dans la boîte ***Composants de connexion***, saisir les composants que vous souhaitez utiliser pour vos connexions. Nous initialisons le champ avec les composants par défaut d'une installation CyberArk vierge, mais cette liste DOIT correspondre aux composants configurés dans votre {{ fr.VLT }}.
1. Depuis la version 2023.2.24 de {{ fr.RDM }}, il existe une nouvelle fonctionnalité appelée ***Remplacer les paramètres RDP***. Par défaut, les paramètres RDP sont récupérés de CyberArk PVWA lors de la génération de la session PSM. Cette nouvelle option vous permet d'ignorer les paramètres fournis par CyberArk et d'appliquer ceux spécifiés dans l'entrée ***Tableau de bord CyberArk*** à la place. Cette substitution est pour toutes les sessions PSM établies à partir de ce tableau de bord pour avoir des paramètres d'affichage différents. On pourrait envisager de créer différentes instances de l'entrée de tableau de bord pour refléter les préférences de différents utilisateurs.
![Remplacer les paramètres RDP](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2264.png)
   {% snippet, "badgeInfo" %}
   Les versions de {{ fr.RDM }} et {{ fr.DVLS }} doivent être au moins 2023.2.28 et 2023.2.8 pour que ***Remplacer les paramètres RDP*** fonctionne.
   {% endsnippet %}

#### PSM
21. L'option ***Autoriser la connexion via PSM (shell alternatif)*** est désactivée par défaut. L'activer si vous souhaitez autoriser les connexions via PSM, mais en utilisant la méthode héritée de fourniture d'un shell alternatif.
![Onglet Avancé – PSM](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4932.png)

Voici les restrictions liées au PSM :
```powershell
PSM Alternate Shell PSM /u <compte à utiliser> /a <point d'accès> /c <composant> restrictions
```
* Un utilisateur doit se connecter au serveur PSM via RDP et être autorisé à le faire.
* PSM doit pouvoir lier le compte LDAP à un profil CyberArk PVWA (pourrait fonctionner avec un SAML Azure AD lorsque LDAP est cloné sur Azure AD)
* Le ***compte à utiliser*** doit être trouvé sans aucune ambiguïté dans le {{ fr.VLT }} CyberArk.

{% snippet, "badgeCaution" %}
Ceci est fourni pour votre commodité et n'est pas recommandé par l'équipe CyberArk. Il présente certaines limitations par rapport à l'action ***Connecter*** de PVWA qui utilise un jeton à durée de vie limitée.

Vous devez avoir une entrée de serveur PSM configurée dans le même {{ fr.VLT }}. La sélectionner dans la liste déroulante ***Serveur PSM***.
{% endsnippet %}

## Utilisation du Tableau de Bord
{% snippet, "badgeInfo" %}
Veuillez noter que pour des raisons de clarté, cette section ne fournira des informations que sur le modèle d'utilisation principal de connexion via le PSM.
{% endsnippet %}

### Interface utilisateur
![Interface utilisateur du Tableau de bord CyberArk](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2072.png)

1. Le menu ***Actions*** vous permet de :
    * Se connecter ou se déconnecter du tableau de bord.
    * Se connecter à un hôte en utilisant les identifiants sélectionnés.
    * Actualiser le contenu du coffre-fort.
    * Ajouter un coffre-fort à vos favoris.
1. Le menu supérieur vous permet de :
    * Sélectionner un coffre-fort pour se connecter.
    * Sélectionner le ***Format de nom d'utilisateur***.
    * Autoriser ou interdire à la session de ***S'ouvrir à l'extérieur*** (non intégrée dans {{ fr.RDM }}).
    * Actualiser le contenu du coffre-fort.
    * Activer ou désactiver le ***Rafraîchissement automatique***. Si désactivé, les connexions PSM peuvent nécessiter une A2F à chaque connexion.
1. La zone de contenu vous permet de voir et d'interagir avec les comptes dans un coffre-fort ou un groupe. Vous pouvez voir le ***Compte***, son ***Adresse***, sa ***Plateforme***, et le ***Coffre-fort*** dans lequel il se trouve.

### Sélection d'un coffre-fort
Avec le sélecteur de coffre-fort, vous pouvez parcourir vos coffres-forts et sélectionner celui que vous souhaitez utiliser.

![Sélecteur de Coffre-fort](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2069.png)

1. La section supérieure de la liste déroulante contient un sous-ensemble des coffres-forts auxquels on a accès. Vous pouvez également voir et gérer la liste des coffres-forts exclus dans ***Fichier – Paramètres – Types – CyberArk***.
1. ***Favoris*** affichera les comptes qui ont été marqués comme favoris, mais depuis {{ fr.RDM }}. Ce n'est pas une fonctionnalité de CyberArk.
1. ***Afficher tout*** listera tous les comptes auxquels l'utilisateur a accès. Pour certains utilisateurs, ce sera une liste importante et ne sera pas une opération rapide. Elle est fournie pour les utilisateurs qui ont accès à une liste finie de comptes.
1. ***Parcourir...*** affichera la boîte de dialogue de sélection de coffre-fort, où il y a pagination et filtrage pour aider l'utilisateur à localiser le coffre-fort pertinent. Encore une fois, ils sont listés par défaut dans l'ordre reçu de CyberArk.

Ci-dessous un aperçu de la page ***Sélectionner un Coffre-fort CyberArk*** qui apparaît après avoir sélectionné ***Parcourir...*** dans le sélecteur de coffre-fort.
![Sélectionner un Coffre-fort CyberArk](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4934.png)

Dans cette vue, si vous sélectionnez un coffre-fort et cliquez sur ***OK***, vous pourrez alors voir les comptes de ce coffre-fort.

![Vue des Comptes](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2073.png)

### Connexion à un hôte
Après avoir sélectionné le compte que vous souhaitez utiliser, vous pouvez soit utiliser le bouton ***Connecter*** dans le menu ***Actions***, soit cliquer avec le bouton droit et sélection
