---
eleventyComputed:
  title: Liste des erreurs
  description: Voici toutes les erreurs possibles dans {{ fr.DHUBB }} avec le numéro correspondant.
---
Voici toutes les erreurs possibles dans {{ fr.DHUBB }} avec le numéro correspondant.

{% snippet, "badgeInfo" %}
Les erreurs d'accès refusé dans {{ fr.DHUBB }} sont listées [ici](/hub/kb/hub-business/troubleshooting-articles/access-denied-errors/).
{% endsnippet %}

## Interdit - 403
| Code | Erreur                                       | Description/Solution                                                                 |
|------|---------------------------------------------|--------------------------------------------------------------------------------------|
| 0    | UserNotFound                                | Utilisateur non trouvé dans {{ fr.DHUBB }}. Si l'utilisateur n'est pas trouvé ou a été supprimé, aller à ***Administration – Utilisateurs*** et [créer l'utilisateur](/hub/web-interface/administration/management/users/create-invite-users/). |
| 1    | UserDisabled                                | Utilisateur désactivé. Aller à ***Administration – Utilisateurs*** et sélectionner l'utilisateur. Cliquer ***Modifier*** et cliquer ***Est activé*** pour activer l'utilisateur. |
| 2    | TwoFactorRequired                           | Tentative de connexion à {{ fr.DHUBB }} sans A2F.                                    |
| 3    | SetupRequired                               | Un nouveau {{ fr.DHUBB }} doit être [créé](/hub/getting-started/create-hub/hub-business/). Cela ne peut être fait que par le propriétaire. Un utilisateur normal sera bloqué. |
| 4    | SetupNotRequired                            | Tentative de configuration d'un {{ fr.DHUBB }} alors qu'il est déjà configuré.       |
| 5    | EmergencyResetDenied                        | Un utilisateur normal se voit refuser la [réinitialisation d'urgence](/hub/kb/general-knowledge/emergency-kit/). La réinitialisation d'urgence du {{ fr.DHUB }} ne peut être effectuée que par son propriétaire. |
| 6    | HubDisabled                                 | {{ fr.DHUBB }} est désactivé.                                                        |
| 7    | IPForbidden                                 | L'IP de l'hôte est interdite/bloquée par le filtrage IP, le blocage du trafic Tor, ou l'IP restreinte de l'utilisateur de l'application. Les administrateurs peuvent activer ou désactiver le trafic Tor en cliquant sur ***Paramètres système*** –  ***Bloquer le trafic Tor***. |
| 8    | AccessDenied                                | Accès refusé. C'est la raison la plus couramment utilisée par défaut pour bloquer ou refuser une action lorsque aucune raison spécifique n'est donnée/demandée. |
| 9    | InvalidLicense                              | La [licence](/hub/web-interface/administration/management/licenses/register-hub-business-license/) de {{ fr.DHUBB }} est invalide ou a [expiré](/hub/web-interface/administration/management/licenses/register-hub-business-license/#my-current-license-is-expired). |
| 10   | OfflineAccessDisallowed                     | Requête uniquement à {{ fr.DHUBB }} avec le paramètre hors ligne activé lors de la demande de partage de {{ fr.VLT }}. |
| 11   | UserApprovalRequired                        | Se produit lorsqu'un [utilisateur n'est pas trouvé dans {{ fr.DHUBB }}](/hub/web-interface/administration/management/users/create-invite-users/) et que [SSO](/hub/web-interface/administration/configuration-security/authentication/#single-sign-on-sso) est activé. |
| 12   | InvalidLicenseManage                        | La [licence de {{ fr.DHUBB }}](/hub/web-interface/administration/management/licenses/register-hub-business-license/) est invalide ou a expiré, mais la licence peut être gérée. |
| 13   | OrganizationSynchronizedMember              | Le groupe synchronisé ne peut pas être modifié en utilisant SSO.                     |
| 14   | FreeGatewayProductLicenseSessionAllRunning  | Toutes les sessions de passerelle sous licence gratuite sont en cours. Jusqu'à ***cinq sessions de passerelle sous licence gratuite*** peuvent fonctionner simultanément. |
| 15   | CompanionToolDisabled                       | [Les outils compagnons sont bloqués](/hub/web-interface/administration/management/users/companion-tools-access/) par {{ fr.DHUBB }}. Le paramètre est séparé pour [{{ fr.WBEX }}](/workspace/kb/) et [{{ fr.WMAPP }}](/hub/workspace/installation-setup/workspace-mobile-app/setup-mobile-hub-business/). Les administrateurs peuvent activer ces paramètres en modifiant l'utilisateur dans ***Administration – Utilisateurs***. |
| 16   | OfflineAccessDisallowedForPamVault          | Requête uniquement autorisée à {{ fr.DHUBB }} avec le paramètre hors ligne activé lors de la demande d'un coffre PAM {{ fr.VLT}}. |
| 17   | PamEntryNotCheckedOut                       | L'entrée PAM n'est pas [réservée](/hub/web-interface/entries/checkout-system/#check-out-an-entry). |
| 18   | HubPersonalMigrationDone                    | {{ fr.DHUBP }} a migré vers l'architecture {{ fr.DHUBB }}.                           |
| 19   | HubPersonalNotMigrated                      | {{ fr.DHUBP }} vérifie que la migration vers l'architecture {{ fr.DHUBB }} est complète. |
| 20   | HubPersonalOnly                             | Une requête de {{ fr.DHUBB }} tente d'usurper {{ fr.DHUBP }}.                         |
| 21   | UserVaultDisabled                           | Un utilisateur tente de modifier son coffre utilisateur {{ fr.VLT }}, mais {{ fr.DHUB }} a désactivé le coffre utilisateur {{ fr.VLT }}. |
| 22   | MaximumBlobSizeExceeded                     | Le blob/pièce jointe/fichier est trop volumineux pour le {{ fr.DHUB }}.              |
| 23   | MaximumBlobContainerTotalSizeExceeded       | Le stockage de blob a atteint la limite du conteneur de blob.                         |
| 24   | CannotCreateTemporaryAccessOnRoot           | L'[accès temporaire](/hub/web-interface/temporary-access/request-temporary-access/) à une entrée racine ne peut pas être ***demandé***. |
| 25   | UserExpired                                 | L'utilisateur a [expiré](/hub/web-interface/administration/management/users/#re-invite-a-user). |
| 26   | SupportTicketsOnlyAllowedForAdministrators  | Cette fonctionnalité est bloquée pour les utilisateurs réguliers si le {{ fr.DHUB }} a restreint la possibilité de soumettre des [tickets de support](/hub/web-interface/administration/configuration-security/system-settings/) aux administrateurs uniquement. |
| 27   | InvalidPAMCheckoutApprover                  | L'utilisateur actuel n'est pas autorisé à [approuver/rejeter les demandes de réservation PAM](/pam/hub/privileged-accounts/approve-access-privileged-account/). |

## Non autorisé - 401
| Code | Erreur             | Description/Solution                                                           |
|------|-------------------|--------------------------------------------------------------------------------|
| 0    | Other             | Le défaut est lorsque aucune raison spécifique n'est donnée dans le contexte SSO. |
| 1    | OrgIdMismatch     | Dans le contexte SSO, si l'ID de l'organisation de la demande de connexion de l'utilisateur ne correspond pas à l'ID de l'organisation du {{ fr.DHUB }}. |
| 2    | InvalidProviderId | Dans le contexte SSO, lorsque l'ID du fournisseur de la demande de connexion de l'utilisateur est vide ou nul. |
| 3    | InvalidScopes     | Une demande à {{ fr.DHUB }} est faite sans spécifier de scopes.                 |

## Verrouillé - 423
| Code | Erreur         | Description                                                                                                |
|------|---------------|------------------------------------------------------------------------------------------------------------|
| 0    | Opened        | Un utilisateur tente d'ouvrir une entrée qui est actuellement ouverte par un autre utilisateur.           |
| 1    | LockedForEdit | Un utilisateur tente de modifier une entrée qui est en cours de modification par un autre utilisateur.     |
| 2    | Checkout      | Un utilisateur tente d'ouvrir, de modifier, et même de réserver un élément qui est actuellement réservé par un autre utilisateur. |
| 3    | Forbidden     | Un utilisateur tente de réserver un élément ou de changer le statut de l'élément.                          |

## Erreur personnalisée 5XY | Invitation d'utilisateur - 544
| Code | Erreur               | Description/Solution                                               |
|------|---------------------|--------------------------------------------------------------------|
| 2    | AlreadyExist        | L'utilisateur à inviter existe déjà.                               |
| 3    | UserNotProvisioning | Le processus d'invitation de l'utilisateur a échoué.               |
| 4    | EmailNotSend        | L'email a échoué à être envoyé après que l'utilisateur a été invité. |
| 5    | LimitReached        | Bloquer le processus d'invitation de l'utilisateur lorsque la limite d'utilisateurs de {{ fr.DHUB }} est atteinte. Cette limite varie selon la licence. |
| 6    | Forbidden           | Tentative d'inviter un utilisateur sans avoir les permissions appropriées. |

## Erreur d'expiration de l'ID secret | Statut 401
![Erreur d'expiration de l'ID secret](https://cdnweb.devolutions.net/docs/HUBB6006_2024_1.png)

| Statut | Erreur                                                                              | Description/Solution |
|--------|------------------------------------------------------------------------------------|----------------------|
| 401    | Réponse : Pile : Devolutions.Hub.Clients.HubClient.<PreLoginAsync>d__31.MoveNext() | L'ID client ou le secret fourni par votre organisation est invalide, veuillez contacter un administrateur de votre organisation. |