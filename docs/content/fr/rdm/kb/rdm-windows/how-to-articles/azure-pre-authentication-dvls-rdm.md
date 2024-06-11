---
eleventyComputed:
  title: Authentification préalable Azure à une source de données {{ fr.DVLS }} dans {{ fr.RDM }}
  description: L'authentification préalable Azure nécessite une configuration unique. Pour utiliser cette fonctionnalité avec {{ fr.RDM }}, les administrateurs doivent activer l'authentification sur le {{ fr.DVLS }} souhaité, configurer plusieurs paramètres dans le centre d'administration Microsoft Entra, et configurer un proxy d'application Azure.
---
L'authentification préalable Azure nécessite une configuration unique. Pour utiliser cette fonctionnalité avec {{ fr.RDM }}, les administrateurs doivent activer l'authentification sur le {{ fr.DVLS }} souhaité, configurer plusieurs paramètres dans le centre d'administration Microsoft Entra, et configurer un proxy d'application Azure.

Dans cet article :

- [Installer et configurer un connecteur privé](#installer-et-configurer-un-connecteur-privé)
- [Configurer un proxy d'application Azure](#configurer-un-proxy-dapplication-azure)
- [Configurer {{ fr.RDM }}](#configurer-remote-desktop-manager)
- [S'assurer que TLS 1.2 est activé](#sassurer-que-tls-1.2-est-activé)


## Installer et configurer un connecteur privé

1. Dans l'interface du navigateur du centre d'administration Microsoft Entra, naviguer vers ***Global Secure Access*** – ***Connect*** – ***Connectors***, puis activer Global Secure Access dans votre locataire.
![Activation de Global Secure Access](https://cdnweb.devolutions.net/docs/INTERFACE4002.png)
1. Aller à ***Private Network connectors*** – ***Traffic forwarding*** et basculer l'option ***Private access profile***.
![Profil d'accès privé](https://cdnweb.devolutions.net/docs/INTERFACE4003.png)
1. Ensuite, se rendre à ***Private Network connectors*** une fois de plus, et cliquer sur ***Download connecter service***.
![Télécharger le service connecteur](https://cdnweb.devolutions.net/docs/INTERFACE4004.png)
1. Une fois le service connecteur téléchargé, exécuter le programme d'installation, se connecter avec l'invite Azure, et attendre la fin de l'installation (le service peut être affiché comme indisponible pendant ce temps).

{% snippet, "badgeCaution" %}
Lors de l'exécution sur un serveur Windows, assurez-vous de désactiver la configuration IE améliorée ou de faire de Microsoft Edge le navigateur par défaut (sans configuration améliorée). Sinon, l'invite de connexion Azure échouera très probablement sans autoriser toutes les URL requises.

De plus, le service connecteur Windows doit avoir TLS 1.2 activé avant l'installation. Ajouter ce qui suit à un fichier bloc-notes avec l'extension .reg et double-cliquer importera les valeurs nécessaires dans le registre. Ensuite, un redémarrage du serveur est nécessaire avant d'exécuter l'installation du connecteur.
{% endsnippet %}



## Configurer un proxy d'application Azure

Voici les prérequis pour les prochaines étapes de configuration de l'authentification préalable Azure à la source de données {{ fr.DVLS }} dans {{ fr.RDM }} :

- {{ fr.DVLS }} est v.2024.2.4.x ou supérieur.
- {{ fr.RDM }} est v.2024.2.4.x ou supérieur.
- Une licence P1 pour la fonctionnalité Réseau privé.
- L'URL de {{ fr.DVLS }} ne doit pas être la racine, c'est-à-dire <ins>https://myserver.com/dvls</ins> et non <ins>https://myserver.com</ins>
{% snippet icon.badgeInfo %}
Tout changement peut prendre 3-5 minutes pour prendre effet. Soyez conscient de cela lors du test des changements.
{% endsnippet %}

1. Dans le portail Azure, naviguer vers ***Microsoft Entra ID*** – ***App registrations***, et cliquer sur ***New registration***.
![Créer une nouvelle inscription](https://cdnweb.devolutions.net/docs/INTERFACE4006.png)
1. Entrer le nom de l'inscription de l'application et laisser toutes les autres valeurs par défaut.
![Nouveau nom d'inscription d'application](https://cdnweb.devolutions.net/docs/INTERFACE4007.png)
1. Ensuite, se rendre à ***Microsoft Entra ID*** – ***Enterprise applications***. Cliquer sur l'inscription d'application nouvellement créée, aller à ***Application Proxy***, et remplir les champs requis suivants :
- **URL interne** : C'est la racine du serveur IIS hébergeant le DVLS.
- **URL externe** : Par défaut, le nom de l'inscription de l'application.
- **Pré-authentification** : Définir sur Microsoft Entra ID.
- **Groupe de connecteurs** : Le groupe de connecteurs à cibler.
![Informations sur le proxy d'application – Basique](https://cdnweb.devolutions.net/docs/INTERFACE4008.png)
4. Ensuite, naviguer vers l'onglet ***Avancé***. S'assurer que toutes les options sont décochées ou définies par défaut, sauf ***Valider le certificat SSL du backend*** qui peut être laissé activé si nécessaire.
![Informations sur le proxy d'application – Avancé](https://cdnweb.devolutions.net/docs/INTERFACE4009.png)
5. Revenir à ***Microsoft Entra ID*** – ***App registrations***, et cliquer sur l'application à configurer. Si l'application n'est pas listée, il peut être nécessaire de cliquer sur ***Toutes les applications*** pour y accéder car la vue est définie sur **Applications possédées** par défaut.
6. Dans l'écran ***Authentification***, cliquer sur le bouton ***Ajouter une plateforme***. Trois nouvelles plateformes doivent être créées : ***Web***, ***Application à page unique***, et ***Applications mobiles et de bureau***. Commencer par créer une plateforme ***Web***.
![Création de plateformes](https://cdnweb.devolutions.net/docs/INTERFACE4010.png)
7. Entrer l'***URL de redirection***, qui doit être la même que l'URL externe racine. Sur cette page, cocher les options pour ***Jetons d'accès*** et ***Jetons ID*** dans la section des flux implicites et hybrides. Cliquer sur ***Configurer*** pour continuer.
![Configuration de la plateforme Web](https://cdnweb.devolutions.net/docs/INTERFACE4015.png)
8. Avec la première plateforme ajoutée, cliquer une fois de plus sur le bouton ***Ajouter une plateforme*** et choisir ***Application à page unique***. Entrer l'***URI de redirection***, qui doit être la même que l'***URL externe***, avec ce qui suit ajouté à la fin : `/dvls/api/external-provider-response` (remplacer /dvls/ par l'URL de l'instance {{ fr.DVLS }} souhaitée). Enfin, cliquer sur ***Configurer*** pour continuer.
![Configuration de la plateforme d'application à page unique](https://cdnweb.devolutions.net/docs/INTERFACE4016.png)
9. Avec la deuxième plateforme ajoutée, cliquer une fois de plus sur le bouton ***Ajouter une plateforme*** et choisir ***Applications mobiles et de bureau***. Entrer <ins>http://localhost</ins> exactement dans le champ ***URI de redirection personnalisés***. Laisser toutes les autres valeurs décochées (s'il y en a) et cliquer sur le bouton ***Configurer***.
![Configuration de la plateforme Bureau + appareils](https://cdnweb.devolutions.net/docs/INTERFACE4013.png)
10. Avec les trois plateformes créées, faire défiler jusqu'en bas de la page ***Authentification*** et basculer ***Autoriser les flux de clients publics*** avant de cliquer sur ***Enregistrer***.
![Autoriser les flux de clients publics](https://cdnweb.devolutions.net/docs/INTERFACE4017.png)
11. Maintenant, aller à ***Permissions d'API*** et cliquer sur le bouton ***Ajouter une permission***.
![Ajouter une permission d'API](https://cdnweb.devolutions.net/docs/INTERFACE4018.png)
12. Choisir ***Permissions déléguées***, et activer la permission User.Read sous ***Utilisateur***. Cliquer sur ***Ajouter des permissions***.
![Ajouter la permission User.Read](https://cdnweb.devolutions.net/docs/INTERFACE4019.png)
13. Cliquer sur le bouton ***Accorder le consentement d'administrateur pour le locataire*** et confirmer en cliquant sur ***Oui***.
![Accorder le consentement d'administrateur pour le locataire](https://cdnweb.devolutions.net/docs/INTERFACE4020.png)
14. Ensuite, naviguer vers ***Exposer une API*** et cliquer sur ***Ajouter*** à côté de ***URI d'ID d'application***. Ensuite, entrer la même URI que l'***URL externe*** de votre ***Proxy d'application***.
![Ajouter une URI d'ID d'application – étape 1](https://cdnweb.devolutions.net/docs/INTERFACE4022.png)
![Ajouter une URI d'ID d'application – étape 2](https://cdnweb.devolutions.net/docs/INTERFACE4023.png)
15. Cliquer sur ***Ajouter une étendue*** et entrer les informations suivantes :
- **Nom de l'étendue** : user_impersonation
- **Qui peut consentir** : Administrateurs et utilisateurs
- **Nom d'affichage du consentement d'administrateur** : Accéder à DVLS
- **Description du consentement d'administrateur** : Permettre à l'application d'accéder à DVLS au nom de l'utilisateur connecté.
- **Nom d'affichage du consentement de l'utilisateur** : Accéder à DVLS
- **Description du consentement de l'utilisateur** : Permettre à l'application d'accéder à DVLS au nom de l'utilisateur connecté.
![Ajouter une étendue – étape 1](https://cdnweb.devolutions.net/docs/INTERFACE4024.png)
![Ajouter une étendue – étape 2](https://cdnweb.devolutions.net/docs/INTERFACE4025.png)
16. Ensuite, aller à ***Rôles d'application*** et cliquer sur le bouton ***Créer un rôle d'application***. Deux rôles doivent être créés : **Utilisateur** et **msiam_access**.
![Créer un rôle d'application](https://cdnweb.devolutions.net/docs/INTERFACE4026.png)
17. Sur l'écran ***Créer un rôle d'application***, remplir les champs ci-dessous, et cocher le cas sous ***Voulez-vous activer ce rôle d'application ?***.
- **Nom d'affichage** : Utilisateur
- **Types de membres autorisés** : Utilisateurs/Groupes
- **Valeur** : Utilisateur
- **Description** : Utilisateur
![Remplir les informations utilisateur](https://cdnweb.devolutions.net/docs/INTERFACE4027.png)

18. Avec le premier rôle créé, cliquer à nouveau sur ***Créer un rôle d'application***, remplir les champs ci-dessous, et cocher le cas sous ***Voulez-vous activer ce rôle d'application ?*** comme précédemment.
- **Nom d'affichage** : msiam_access
- **Types de membres autorisés** : Utilisateurs/Groupes
- **Valeur** : msiam_access
- **Description** : msiam_access
![Remplir les informations msiam](https://cdnweb.devolutions.net/docs/INTERFACE4032.png)
19. Aller à ***Manifeste*** et modifier la valeur de « accessTokenAcceptedVersion » à 2. Cliquer sur le bouton ***Enregistrer***.
![Définir accessTokenAcceptedVersion à 2](https://cdnweb.devolutions.net/docs/INTERFACE4028.png)
20. Revenir à ***Microsoft Entra ID*** – ***Applications d'entreprise***. Cliquer sur l'inscription d'application nouvellement créée et naviguer vers ***Utilisateurs et groupes***. Cliquer sur ***Ajouter utilisateur/groupe***.
![Ajouter utilisateur/groupe](https://cdnweb.devolutions.net/docs/INTERFACE4029.png)
21. Sélectionner l'utilisateur ou le groupe et le rôle devrait se remplir automatiquement en Utilisateur. Cliquer sur le bouton ***Attribuer*** pour terminer l'attribution des permissions.
![Attribuer les permissions souhaitées](https://cdnweb.devolutions.net/docs/INTERFACE4030.png)
## Configurer Remote Desktop Manager
Avec Azure configuré, et après avoir attendu au moins 5 minutes depuis le dernier changement de configuration, ouvrir {{ fr.RDM }}.
1. Aller à ***Fichier*** – ***Sources de données***.
![{{ fr.RDM }} sources de données](https://cdnweb.devolutions.net/docs/INTERFACE4031.png)
2. Localiser la source de données Devolutions Server à modifier et cliquer sur le bouton ***Modifier***. Entrer les informations suivantes :
- **Hôte** : La même valeur que l'URI externe avec le suffixe du serveur DLVS.
- **Nom d'utilisateur** : Le même que le nom d'utilisateur DVLS, pas nécessairement le même que l'utilisateur Azure (sauf si l'option « Utiliser l'utilisateur de pré-authentification pour la connexion DVLS » est cochée).
Ensuite, cocher ***Utiliser le proxy de pré-authentification*** et, éventuellement, ***Utiliser le proxy de pré-authentification pour la connexion DVLS*** (si ***Authentification Microsoft*** est déjà cochée).
3. La configuration est alors terminée, et la connexion Microsoft Azure devrait s'ouvrir dans une fenêtre intégrée ou un navigateur système (peut se produire deux fois si une fenêtre intégrée apparaît et une fois de plus dans un navigateur système avant l'authentification DVLS). Une fois cela fait, une invite pour l'authentification DVLS devrait apparaître.
## Notes supplémentaires
HTTP2 peut devoir être désactivé sur Windows Server 2019 ou ultérieur dans le composant `WinHTTP` pour que la Délégation contrainte Kerberos fonctionne correctement. Exécuter la commande PowerShell suivante et redémarrer le serveur pour que le changement prenne effet :

```
Set-ItemProperty 'HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Internet Settings\WinHttp\' -Name EnableDefaultHTTP2 -Value 0
```

## S'assurer que TLS 1.2 est activé
De plus, le service connecteur Windows doit avoir TLS 1.2 activé avant l'installation. Ajouter ce qui suit à un fichier bloc-notes avec l'extension .reg et double-cliquer importera les valeurs nécessaires dans le registre. Un redémarrage du serveur est ensuite nécessaire avant d'exécuter l'installation du connecteur.

```
Éditeur du Registre Windows Version 5.00
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
Un secret est configuré automatiquement lors de la création de l'***Application Proxy App***. Le supprimer brisera la pré-authentification et peut nécessiter la recréation de l'ensemble du proxy d'application.
{% endsnippet %}
