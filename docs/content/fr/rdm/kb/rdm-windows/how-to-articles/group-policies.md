---
eleventyComputed:
  title: Appliquer des politiques
  description: Les modèles administratifs facilitent la gestion des paramètres de politique basés sur le registre, qui peuvent être appliqués sur la configuration de l'ordinateur et/ou de l'utilisateur. La stratégie de groupe (GPO) est un outil qui permet à votre organisation d'appliquer des paramètres globaux sur tous les ordinateurs, et en même temps, de renforcer la sécurité de {{ fr.RDM }}.
  keywords:
  - silencieux
  - sans assistance
  - gpo
  - modèle administratif
  - politique
---
Les modèles administratifs facilitent la gestion des paramètres de politique basés sur le registre, qui peuvent être appliqués sur la configuration de l'ordinateur et/ou de l'utilisateur. La stratégie de groupe (GPO) est un outil qui permet à votre organisation d'appliquer des paramètres globaux sur tous les ordinateurs, et en même temps, de renforcer la sécurité de {{ fr.RDM }}.

{% snippet, "badgeInfo" %}
Les modèles administratifs sont des paramètres de registre qui sont appliqués par les domaines. Ils contiennent des clés de registre qui peuvent également être définies sur des ordinateurs qui ne sont pas joints à des domaines. Dans ce cas, cependant, des listes de contrôle d'accès (ACL) appropriées doivent être mises en place pour empêcher les utilisateurs de modifier les paramètres du registre. Référez-vous aux tableaux ci-dessous pour trouver la clé de registre pour chaque paramètre de politique.
{% endsnippet %}

Pour en savoir plus sur la façon de déployer les modèles administratifs {{ fr.RDM }} sur votre domaine, veuillez vous référer à la documentation de Microsoft.

## Lister les GPOs {{ fr.RDM }} dans l'Éditeur de stratégie de groupe locale
{% snippet, "badgeInfo" %}
Pour l'instant, le support supplémentaire est exclusivement pour les politiques qui nécessitent une entrée numérique supérieure à 0-1 (ex : ForceLockOnIdle).
{% endsnippet %}

{{ fr.RDM }} inclut un fichier de modèle administratif (.admx), qui décrit les politiques proposées. Vous le trouverez dans le sous-dossier des politiques. Avant de pouvoir gérer les GPOs dans {{ fr.RDM }}, vous devez d'abord les lister dans l'Éditeur de stratégie de groupe locale. Voici les étapes :

1. Aller dans votre sous-dossier des politiques. Par défaut, le chemin est **C:\Program Files (x86)\Devolutions\Remote Desktop Manager\Policies**.
1. Copier le fichier Devolutions.admx.
1. Aller à **C:\Windows\PolicyDefinitions**.
1. Coller le fichier Devolutions.admx à la racine de **C:\Windows\PolicyDefinitions**.
1. Aller à **C:\Program Files\Devolutions\Remote Desktop Manager\Policies\en-US**.
1. Copier le fichier Devolutions.adml.
1. Coller le fichier Devolutions.adml dans **C:\Windows\PolicyDefinitions\en-US**.
1. Ouvrir votre Éditeur de stratégie de groupe et aller à ***Configuration de l'ordinateur*** – ***Modèles administratifs*** – ***Devolutions*** – ***{{ fr.RDM }}*** – ***Sessions***.
1. Dans le dossier ***Sessions***, localiser la politique spécifique que vous souhaitez modifier.
1. Cliquer avec le bouton droit sur la politique spécifique, la modifier en conséquence et sauvegarder.

Si {{ fr.RDM }} est ouvert lorsque vous effectuez ce changement, vous devrez le redémarrer pour que la nouvelle politique prenne effet.

## Politiques

### Général

#### Désactiver les menus d'exportation {{ fr.VLT }} dans les menus d'exportation
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableExportVaultMenus`

---

#### Désactiver les fonctionnalités nécessitant une connexion Internet
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\NoInternetConnection`

---

#### Désactiver l'intégration
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableOnboarding`

---

#### Désactiver la vérification automatique de mise à jour de l'application
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableAutoUpdate`

---

#### Désactiver les menus de mise à jour de l'application
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableUpdate`

---

#### Désactiver le lancement des entrées au démarrage
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableLaunchAtStartup`

---

#### Désactiver le message d'expiration de licence dans l'Aperçu
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableLicenseExpirationMessage`

---

#### Désactiver la collecte de données de télémétrie
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableAnalytics`

---

#### Désactiver les Contacts système, Macros et VPNs dans le {{ fr.UVLT }}
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableGlobalVaultInUserVault`

---

#### Activer l'accrochage de l'API de la console PowerShell à distance
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\EnablePowerShellRemoteConsoleHooking`

---

#### Forcer la fermeture de l'application lorsqu'elle est inactive
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceCloseOnIdle`

---

#### Forcer les paramètres de proxy sur Système
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceSystemProxy`

---

#### Forcer l'actualisation avant d'éditer une entrée
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceRefreshBeforeEditEntry`

---

#### Forcer le chargement du fichier de configuration actuel
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceCurrentConfigurationLoading`

---

#### Forcer le chargement du fichier default.cfg
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceDefaultConfigurationLoading`

---

#### Forcer la mise à jour de toutes les mises à jour majeures
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceUpdatingMajorUpdate`

---

#### Forcer la mise à jour de toutes les mises à jour
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceUpdatingAllUpdate`

---

#### Forcer la mise à jour de toutes les mises à jour et bêta
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceUpdatingAllUpdateAndBeta`

---

#### Forcer la mise à jour une fois par mois
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceUpdatingOnceAMonth`

---

### Sécurité

#### Appliquer un modèle de mot de passe forcé dans l'outil Générateur de mots de passe
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ApplyForcedPasswordTemplateInPasswordGeneratorTool`

---

#### Vérifier la révocation du certificat serveur
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\CheckForServerCertificateRevocation`

---

#### Désactiver l'exécution de scripts via le terminal
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableExecuteScriptsViaTerminal`

---

#### Désactiver l'exportation du {{ fr.UVLT }}
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableUserVaultExport`

---

#### Désactiver le partage de lecteur local des entrées RDP
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableLocalDriveSharing`

---

#### Désactiver Masquer le mot de passe dans Afficher le mot de passe
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableMaskPasswordInViewPassword`

---

#### Désactiver Mes paramètres de compte
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableMyAccountSettings`

---

#### Désactiver Ma clé privée personnelle
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableMyPersonalPrivateKey`

---

#### Désactiver Mon compte privilégié
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableMyPrivilegedAccount`

---

#### Désactiver la lecture/écriture en mode hors ligne
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableReadWriteOffline`

---

#### Désactiver le mode de mise en cache
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableCaching`

---

#### Désactiver le mode hors ligne
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableOffline`

---

#### Désactiver la substitution des paramètres spécifiques de disque dur pour les entrées RDP
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableRDPHardDrivesSpecificSettings`

---

#### Désactiver le Générateur de mots de passe
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisablePasswordGenerator`

---

#### Désactiver l'option Révéler le mot de passe dans Mes paramètres de compte pour tous les utilisateurs, y compris les administrateurs
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableRevealPasswordInMyAccountSettings`

---

#### Activer la cryptographie DPAPI sur les fichiers locaux
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\EnableDPAPICryptographyOnLocalFiles`

---

#### Forcer un mode d'authentification à deux facteurs pour l'application (vérifier contre toutes les méthodes configurées ou inviter à la sélection lors de l'utilisation)
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\Application2faMode`

---

#### Forcer le verrouillage de l'application en veille
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceLockOnStandby`

---

#### Forcer le verrouillage de l'application lorsqu'elle est inactive
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceLockOnIdle`

---

#### Forcer le verrouillage de l'application lors de la minimisation
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceLockOnMinimize`

---

#### Forcer le verrouillage de l'application lorsque Windows se verrouille
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceLockOnWindowsLock`

---

#### Forcer le mot de passe de l'application
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceLocalApplicationPassword`

---

#### Forcer la suppression du cache à la fermeture (Chrome)
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceClearCacheOnCloseChrome`

---

#### Forcer la suppression du cache à la fermeture (MSEdge)
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceClearCacheOnCloseMSEdge`

---

#### Forcer l'authentification multifacteur à la connexion de l'application
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceApplicationMFA`

---

#### Forcer l'utilisation du bureau sécurisé
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceSecureDesktop`

---

#### Forcer la sauvegarde locale de Mes paramètres de compte
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceLocalMyAccountSettings`

---

#### Forcer l'utilisateur à toujours être invité à saisir ses identifiants lors du lancement de l'application
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceLogin`

---

#### Forcer l'utilisateur à toujours être invité à saisir sa phrase secrète lors de la connexion à une source de données protégée par un fournisseur de sécurité à phrase secrète partagée
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\AlwaysPromptForPassphrase`

---

#### Forcer l'authentification Windows Hello à la connexion de l'application
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceWindowsHello`

---

#### Ignorer les erreurs de certification de l'application
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\IgnoreApplicationCertificateErrors`

---

#### Mode d'authentification à deux facteurs LastPass 1 = Ne pas faire confiance à cet appareil 2 = Faire confiance à cet appareil 3 = Faire confiance à cet appareil à la fermeture
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\LastPass2FAMode`

---

#### Supprimer la possibilité de voir entièrement les mots de passe
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceHidePasswordForAdministrators`

---

#### Utiliser les identifiants Windows comme mot de passe de l'application et forcer le nom d'utilisateur et le domaine actuellement connectés (à moins qu'un mot de passe d'application ne soit déjà défini)
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceWindowsCredentialsAndCurrentlyLoggedOnUsernameAndDomain`

---

### Sessions

#### Permettre à l'utilisateur de se connecter même après l'expiration de l'entrée
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\EnableConnectionAfterExpiration`

---

#### Confirmer l'ouverture de plusieurs sessions si le nombre d'ouvertures est supérieur à
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ConfirmSessionsOpenOnCountGreaterThan`

---

#### Désactiver tous les événements de session
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceDisableAllSessionEvents`

---

#### Désactiver l'importation dans le {{ fr.UVLT }}
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableImportInPrivateVault`

---

#### Désactiver Révéler le mot de passe
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableRevealPassword`

---

#### Désactiver la création d'Add-on et le Gestionnaire d'Add-on. Obsolète, utiliser DisableAddOnEntries et DisableAddOnManager à la place
`Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableAddOn`

---

#### Désactiver la création d'entrées d'Add-on
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableAddOnEntries`

---

#### Désactiver le Gestionnaire d'Add-on
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableAddOnManager`

---

#### Désactiver l'édition d'image personnalisée dans la configuration de la session
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableCustomImage`

---

#### Désactiver l'option de jiggler de souris
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableMouseJiggler`

---

#### Désactiver la fonctionnalité d'enregistrement de session
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableSessionRecording`

---

#### Désactiver le scan réseau
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableNetworkScan`

---

#### Désactiver le remplissage automatique des identifiants de session de site Web et de site Web (hérité) (Obsolète) après une minute
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableWebsiteCredentialAutofillAfterDelay`

---

#### Activer l'accrochage de l'API RDP
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\EnableRDPHooking`

---

#### Forcer l'actualisation avant de copier le mot de passe/nom d'utilisateur/domaine
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceRefreshBeforeCopyFromEntry`

---

#### Forcer l'actualisation avant d'exécuter une entrée
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceRefreshBeforeExecuteEntry`

---

#### Forcer l'actualisation avant de voir le mot de passe
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceRefreshBeforeViewPassword`

---

#### Forcer la migration des paramètres spécifiques à l'utilisateur
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceUserSpecificSettingsMigration`

---

#### Masquer le port personnalisé dans les sessions RDP
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\HidePortInRDP`

---

#### Autoriser uniquement la création de justificatifs d'identité lorsqu'ils sont dans le {{ fr.UVLT }}
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\OnlyAllowCredentialsInPrivateVault`

---

#### Sélectionner la version par défaut de PowerShell
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DefaultPowershellVersion`

---

### Interface utilisateur

#### Auto-focus de l'élément du tableau de bord lors de la sélection de l'onglet
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DashboardAutoFocusItemOnTabSelect`

---

#### Auto-focus de l'onglet du tableau de bord lors de la sélection de l'élément
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DashboardAutoFocusTabOnItemSelect`

---

#### Désactiver tous les outils d'application locaux comme le Visualiseur d'événements ou IIS
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableApplicationTools`

---


