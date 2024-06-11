---
eleventyComputed:
  title: Authentification préalable Azure à une source de données {{ fr.DVLS }} dans {{ fr.RDM }}
  description: L'authentification préalable Azure nécessite une configuration unique. Pour utiliser cette fonctionnalité avec {{ fr.RDM }}, les administrateurs doivent activer l'authentification sur le {{ fr.DVLS }} souhaité, configurer plusieurs paramètres dans le centre d'administration Microsoft Entra et configurer un proxy d'application Azure.
---
L'authentification préalable Azure nécessite une configuration unique. Pour utiliser cette fonctionnalité avec {{ fr.RDM }}, les administrateurs doivent activer l'authentification sur le {{ fr.DVLS }} souhaité, configurer plusieurs paramètres dans le centre d'administration Microsoft Entra et configurer un proxy d'application Azure.

Dans cet article :

- [Installer et configurer un connecteur privé](#installer-et-configurer-un-connecteur-privé)
- [Configurer un proxy d'application Azure](#configurer-un-proxy-dapplication-azure)
- [Configurer {{ fr.RDM }}](#configurer-remote-desktop-manager)
- [S'assurer que TLS 1.2 est activé](#sassurer-que-tls-12-est-activé)


## Installer et configurer un connecteur privé

1. Dans l'interface du navigateur du centre d'administration Microsoft Entra, naviguer vers ***Global Secure Access*** – ***Connect*** – ***Connectors***, puis activer Global Secure Access dans votre locataire.
![Activation de Global Secure Access](https://cdnweb.devolutions.net/docs/INTERFACE4002.png)
1. Aller à ***Private Network connectors*** – ***Traffic forwarding*** et basculer l'option ***Private access profile***.
![Profil d'accès privé](https://cdnweb.devolutions.net/docs/INTERFACE4003.png)
1. Ensuite, se rendre à ***Private Network connectors*** une fois de plus, et cliquer sur ***Download connecter service***.
![Télécharger le service de connecteur](https://cdnweb.devolutions.net/docs/INTERFACE4004.png)
1. Une fois le service de connecteur téléchargé, exécuter le programme d'installation, se connecter avec l'invite Azure, et attendre la fin de l'installation (le service peut être affiché comme indisponible pendant ce temps).

{% snippet, "badgeCaution" %}
Lors de l'exécution sur un serveur Windows, assurez-vous de désactiver la configuration IE améliorée ou de faire de Microsoft Edge le navigateur par défaut (sans configuration améliorée). Sinon, l'invite de connexion Azure échouera très probablement sans autoriser toutes les URL requises.

De plus, le service de connecteur Windows doit avoir TLS 1.2 activé avant l'installation. Ajouter ce qui suit à un fichier notepad avec l'extension .reg et double-cliquer importera les valeurs nécessaires dans le registre. Ensuite, un redémarrage du serveur est nécessaire avant d'exécuter l'installation du connecteur.
{% endsnippet %}



## Configurer un proxy d'application Azure

Voici les prérequis pour les prochaines étapes de configuration de l'authentification préalable Azure à la source de données {{ fr.DVLS }} dans {{ fr.RDM }} :

- {{ fr.DVLS }} est v.2024.2.4.x ou supérieur.
- {{ fr.RDM }} est v.2024.2.4.x ou supérieur.
- Une licence P1 pour la fonctionnalité de réseau privé.
- L'URL de {{ fr.DVLS }} ne doit pas être la racine, c'est-à-dire <ins>https://myserver.com/dvls</ins> et non <ins>https://myserver.com</ins>
{% snippet icon.badgeInfo %}
Tout changement peut prendre 3-5 minutes pour prendre effet. Soyez conscient de cela lors du test des changements.
{% endsnippet %}

1. Dans le portail Azure, naviguer vers ***Microsoft Entra ID*** – ***App registrations***, et cliquer sur ***New registration***.
![Créer une nouvelle inscription](https://cdnweb.devolutions.net/docs/INTERFACE4006.png)
1. Entrer le nom de l'inscription de l'application et laisser toutes les autres valeurs par défaut.
![Nom de la nouvelle inscription d'application](https://cdnweb.devolutions.net/docs/INTERFACE4007.png)
1. Ensuite, se diriger vers ***Microsoft Entra ID*** – ***Enterprise applications***. Cliquer sur l'inscription d'application nouvellement créée, aller à ***Application Proxy***, et remplir les champs requis suivants :
- **Internal URL** : C'est la racine du serveur IIS hébergeant le DVLS.
- **External URL** : Par défaut, le nom de l'inscription de l'application.
- **Pre Authentication** : Définir sur Microsoft Entra ID.
- **Connector Group** : Le groupe de connecteurs à cibler.
![Informations sur le proxy d'application – Basique](https://cdnweb.devolutions.net/docs/INTERFACE4008.png)
4. Ensuite, naviguer vers l'onglet ***Advanced***. Assurez-vous que toutes les options sont décochées ou définies par défaut, sauf ***Validate Backend SSL certificate*** qui peut être laissé activé si nécessaire.
![Informations sur le proxy d'application – Avancé](https://cdnweb.devolutions.net/docs/INTERFACE4009.png)
5. Revenir à ***Microsoft Entra ID*** – ***App registrations***, et cliquer sur l'application à configurer. Si l'application n'est pas listée, il peut être nécessaire de cliquer sur ***All applications*** pour y accéder car la vue est définie sur **Owned applications** par défaut.
6. Dans l'écran ***Authentication***, cliquer sur le bouton ***Add a platform***. Trois nouvelles plateformes doivent être créées : ***Web***, ***Single-page application***, et ***Mobile and desktop applications***. Commencer par créer une plateforme ***Web***.
![Création de plateformes](https://cdnweb.devolutions.net/docs/INTERFACE4010.png)
7. Entrer l'***Redirect URL***, qui doit être identique à l'URL ***External*** racine. Sur cette page, cocher les options pour ***Access Tokens*** et ***ID tokens*** dans la section Implicit grant and hybrid flows. Cliquer sur ***Configure*** pour continuer.
![Configuration de la plateforme Web](https://cdnweb.devolutions.net/docs/INTERFACE4015.png)
8. Avec la première plateforme ajoutée, cliquer à nouveau sur le bouton ***Add a platform*** et choisir ***Single-page application***. Entrer l'***Redirect URI***, qui doit être identique à l'***External URL***, avec ce qui suit ajouté à la fin : `/dvls/api/external-provider-response` (remplacer /dvls/ par l'URL de l'instance {{ fr.DVLS }} souhaitée). Enfin, cliquer sur ***Configure*** pour continuer.
![Configuration de la plateforme application à page unique](https://cdnweb.devolutions.net/docs/INTERFACE4016.png)
9. Avec la deuxième plateforme ajoutée, cliquer à nouveau sur le bouton ***Add a platform*** et choisir ***Mobile and desktop applications***. Entrer <ins>http://localhost</ins> exactement dans le champ ***Custom redirect URIs***. Laisser toutes les autres valeurs décochées (s'il y en a) et cliquer sur le bouton ***Configure***.
![Configuration de la plateforme Bureau + appareils](https://cdnweb.devolutions.net/docs/INTERFACE4013.png)
10. Avec les trois plateformes créées, faire défiler jusqu'en bas de la page ***Authentication*** et basculer ***Allow public client flows*** avant de cliquer sur ***Save***.
![Autoriser les flux de clients publics](https://cdnweb.devolutions.net/docs/INTERFACE4017.png)
11. Aller maintenant à ***API permissions*** et cliquer sur le bouton ***Add a permission***.
![Ajouter une permission API](https://cdnweb.devolutions.net/docs/INTERFACE4018.png)
12. Choisir ***Delegated permissions***, et basculer la permission User.Read sous ***User***. Cliquer sur ***Add permissions***.
![Ajouter la permission User.Read](https://cdnweb.devolutions.net/docs/INTERFACE4019.png)
13. Cliquer sur le bouton ***Grant admin consent for tenant*** et confirmer en cliquant sur ***Yes***.
![Accorder le consentement d'administration pour le locataire](https://cdnweb.devolutions.net/docs/INTERFACE4020.png)
14. Ensuite, naviguer vers ***Expose an API*** et cliquer sur ***Add*** à côté de ***Application ID URI***. Puis entrer le même URI que l'***External URL*** de votre ***Application Proxy***.
![Ajouter un URI d'ID d'application – étape 1](https://cdnweb.devolutions.net/docs/INTERFACE4022.png)
![Ajouter un URI d'ID d'application – étape 2](https://cdnweb.devolutions.net/docs/INTERFACE4023.png)
15. Cliquer sur ***Add a scope*** et entrer les informations suivantes :
- **Nom du scope** : user_impersonation
- **Qui peut consentir** : Admins et utilisateurs
- **Nom d'affichage du consentement d'administration** : Accéder à DVLS
- **Description du consentement d'administration** : Permettre à l'application d'accéder à DVLS au nom de l'utilisateur connecté.
- **Nom d'affichage du consentement de l'utilisateur** : Accéder à DVLS
- **Description du consentement de l'utilisateur** : Permettre à l'application d'accéder à DVLS au nom de l'utilisateur connecté.
![Ajouter un scope – étape 1](https://cdnweb.devolutions.net/docs/INTERFACE4024.png)
![Ajouter un scope – étape 2](https://cdnweb.devolutions.net/docs/INTERFACE4025.png)
16. Ensuite, aller à ***App roles*** et cliquer sur le bouton ***Create app role***. Deux rôles doivent être créés : **User** et **msiam_access**.
![Créer un rôle d'application](https://cdnweb.devolutions.net/docs/INTERFACE4026.png)
17. Sur l'écran ***Create app role***, remplir les champs ci-dessous, et cocher le cas sous ***Do you want to enable this app role?***.
- **Nom d'affichage** : User
- **Types de membres autorisés** : Utilisateurs/Groupes
- **Valeur** : User
- **Description** : User
![Remplir les informations utilisateur](https://cdnweb.devolutions.net/docs/INTERFACE4027.png)

18. Avec le premier rôle créé, cliquer à nouveau sur ***Create app role***, remplir les champs ci-dessous, et cocher le cas sous ***Do you want to enable this app role?*** comme précédemment.
- **Nom d'affichage** : msiam_access
- **Types de membres autorisés** : Utilisateurs/Groupes
- **Valeur** : msiam_access
- **Description** : msiam_access
![Remplir les informations msiam](https://cdnweb.devolutions.net/docs/INTERFACE4032.png)
19. Aller à ***Manifest*** et modifier la valeur de « accessTokenAcceptedVersion » à 2. Cliquer sur le bouton ***Save***.
![Définir accessTokenAcceptedVersion à 2](https://cdnweb.devolutions.net/docs/INTERFACE4028.png)
20. Revenir à ***Microsoft Entra ID*** – ***Enterprise applications***. Cliquer sur l'inscription d'application nouvellement créée et naviguer vers ***Users and groups***. Cliquer sur ***Add user/group***.
![Ajouter utilisateur/groupe](https://cdnweb.devolutions.net/docs/INTERFACE4029.png)
21. Sélectionner l'utilisateur ou le groupe et le rôle devrait se remplir automatiquement en User. Cliquer sur le bouton ***Assign*** pour terminer l'attribution des permissions.
![Attribuer les permissions souhaitées](https://cdnweb.devolutions.net/docs/INTERFACE4030.png)
## Configurer Remote Desktop Manager
Avec Azure configuré, et après avoir attendu au moins 5 minutes depuis le dernier changement de configuration, ouvrir {{ fr.RDM }}.
1. Aller à ***File*** – ***Data sources***.
![{{ fr.RDM }} sources de données](https://cdnweb.devolutions.net/docs/INTERFACE4031.png)
2. Localiser la source de données Devolutions Server à modifier et cliquer sur le bouton ***Edit***. Entrer les informations suivantes :
- **Hôte** : La même valeur que l'URI externe avec le suffixe du serveur DLVS.
- **Nom d'utilisateur** : Le même que le nom d'utilisateur DVLS, pas nécessairement le même que l'utilisateur Azure (sauf si l'option « Use pre-authentication user for DVLS connection » est utilisée).
Puis cocher ***Use pre-authentication proxy*** et, optionnellement, ***Use pre-authentication proxy for DVLS connection*** (si ***Microsoft Authentication*** est déjà coché).
3. La configuration est alors terminée, et la connexion Microsoft Azure devrait s'ouvrir dans une fenêtre intégrée ou un navigateur système (peut se produire deux fois si une fenêtre intégrée apparaît et une fois de plus dans un navigateur système avant l'authentification DVLS). Une fois cela fait, une invite pour l'authentification DVLS devrait apparaître.
## Notes supplémentaires
HTTP2 peut devoir être désactivé sur Windows Server 2019 ou ultérieur dans le composant `WinHTTP` pour que la délégation contrainte Kerberos fonctionne correctement. Exécuter la commande PowerShell suivante et redémarrer le serveur pour que le changement prenne effet :

```
Set-ItemProperty 'HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Internet Settings\WinHttp\' -Name EnableDefaultHTTP2 -Value 0
```

## S'assurer que TLS 1.2 est activé
De plus, le service de connecteur Windows doit avoir TLS 1.2 activé avant l'installation. Ajouter ce qui suit à un fichier notepad avec l'extension .reg et double-cliquer importera les valeurs nécessaires dans le registre. Un redémarrage du serveur est ensuite nécessaire avant d'exécuter l'installation du connecteur.

```
Windows Registry Editor Version 5.00
[HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL\Protocols\TLS 1.2]
[HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL\Protocols\TLS 1.2\Client]
"DisabledByDefault"=dword:00000000
"Enabled"=dword:00000001
[HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL\Protocols\TLS 1.2\Server]
"DisabledByDefault"=dword:00000000
"Enabled"=dword:00000001
[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\.NETFramework\v4.0.30319]
"SchUseStrongCrypto"=dword:00000001
```
{% snippet, "badgeCaution" %}
Un secret est configuré automatiquement lors de la création de l'***Application Proxy App***. Le supprimer brisera l'authentification préalable et peut nécessiter la recréation de l'ensemble du proxy d'application.
{% endsnippet %}
```
