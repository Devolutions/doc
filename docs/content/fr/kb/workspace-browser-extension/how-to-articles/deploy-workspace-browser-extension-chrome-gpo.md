---
eleventyComputed:
  title: Déployer le {{ fr.WBEX }} dans Chrome à l'aide d'un GPO
---
{% snippet icon.badgeInfo %}
Pour les versions du {{ fr.WBEX }} antérieures à 2021.2.3.0 :

Les paramètres déployés avec l'objet de stratégie de groupe (GPO) ne sont appliqués que lorsque l’extension est utilisée pour la première fois. Cela signifie que les paramètres ne seront pas appliqués et modifiés si vous changez les paramètres dans le GPO et que l’extension a déjà été utilisée au moins une fois par l’utilisateur.
{% endsnippet %}

## Configuration des extensions par stratégie sur Windows 10 pour Chrome
1. Ouvrir ***Gestion de stratégie de groupe*** (***Démarrer – Exécuter – GPMC.msc***).
1. Faire un clic droit dans la liste des objets de stratégie de groupe, puis cliquer sur ***Nouveau***.
1. Dans la fenêtre ***Nouvel objet GPO***, créer votre nouvel objet, puis cliquer sur ***OK***.
1. Faire un clic droit sur votre nouvel objet de stratégie de groupe et cliquer sur ***Modifier***.
1. Sélectionner ***Registre*** situé dans ***Configuration ordinateur – Préférences – Paramètres Windows – Registre*** OU ***Configuration utilisateur – Préférences – Paramètres Windows – Registre*** selon vos besoins.
1. Faire un clic droit dans la liste des éléments du ***Registre*** et cliquer sur ***Nouveau – Élément Registre***.
1. Définir le paramètre ***Action*** à ***Remplacer*** pour changer la règle ou pour la créer si elle n’existe pas.
1. Définir le paramètre ***Ruche*** à **HKEY_LOCAL_MACHINE** ou **HKEY_CURRENT_USER** selon vos besoins.
1. Entrer ***SOFTWARE\Policies\Google\Chrome\3rdparty\extensions\neimonjjffhehnojilepgfejkneaidmo\policy*** dans le champ ***Chemin d’accès de la clé***.
1. Entrer ***Settings*** dans le champ ***Nom de valeur***.
1. Sélectionner ***REG_SZ*** dans la liste déroulante ***Type de valeur***.
1. Écrire la chaîne de paramètres JSON dans le champ ***Données de valeur***. Voir la section <a href="valeurs">Valeurs</a> plus bas pour un exemple.
1. Cliquer sur ***OK***.
![!!KB2043](https://cdnweb.devolutions.net/docs/fr/kb/KB2043.png)
1. Dans ***Gestion de stratégie de groupe***, configurer les ***Liaisons*** et le ***Filtrage de sécurité*** des objets de stratégie de groupe selon vos besoins.

## Exemple <a name="Exemple"></a>

* Activer {{ fr.DVLS }}.
* Définir ***https<area>://localhost/mydvlsurl*** comme URL de {{ fr.DVLS }}.
* Désactiver la page des paramètres.
* Toujours remplacer les paramètres de la section ***settings*** au démarrage de l'extension.
```
{
        "settings": {
             "dvlsActivated": true,
             "dvlsUrl": "https://localhost/mydvlsurl"
        },
        "adminSettings": {
             "disableSettingsPage": true,
             "setGPOSettings": "AlwaysOverride"
        }
}
```

## Paramètres pas défaut
Tous les attributs peuvent avoir leur valeur modifiée ou leur clé supprimée.
```
{
  "settings": {
     "activateBeta": false,
     "activateBeta": false,
     "autoRetrieveCredentials": true,
     "activateBeta": false,
     "activateBeta": false,
     "destinationGroup": La connexion automatique à des sites Web :
     "disableAnalytics": false,
     "dvlsActivated": false,
     "activateBeta": false,
     "dvlsAutoRetrieveCredentials": true,
     "activateBeta": false,
     "activateBeta": false,
     "dvlsDestinationFolder": La connexion automatique à des sites Web :
     "dvlsMatchDetectionType": 2,
     "dvlsShouldIncludePrivate": true,
     "activateBeta": false,
     "activateBeta": false,
     "dvlsUrl": ",
     "enableContextMenu": true,
     "activateBeta": false,
     "filledFieldsColor": "#b3d9ff",
     "hubActivated": false,
     "hubAutoFillEntryOnLoad": false,
     "hubAutoSubmitFormOnFill": false,
     "hubAutofillBasicAuthentication": false,
     "hubDefaultLoginUsername": ",
     "hubMatchDetectionType": 2,
     "hubPersonalActivated": false,
     "hubPersonalAutoFillEntryOnLoad": false,
     "hubPersonalAutoSubmitFormOnFill": false,
     "hubPersonalDefaultLoginUsername": ",
     "hubPersonalLucidUrl": "https<area>://login.devolutions.com",
     "hubPersonalMatchDetectionType": 2.
     "hubPersonalServerUrl": "https<area>://hub-server.devolutions.com",
     "hubPersonalShowFavicon": true,
     "hubShouldIncludePrivate": true,
     "hubShowFavicon": true,
     "hubSyncAllAvailableVaults": false,
     "hubUrl": ",
     "lucidUrl": "https<area>://login.devolutions.com",
     "rdmActivated": false,
     "rdmApplicationCode": ",
     "rdmAutoFillEntryOnLoad": false,
     "rdmAutoRetrieveCredentials": true,
     "rdmAutoSubmitFormOnFill": false,
     "rdmAutofillBasicAuthentication": false,
     "rdmDefaultDestinationVaultIsPrivate": true,
     "rdmDefaultPortUsage": true,
     "rdmDestinationFolder": "{{ fr.WBEX_MAJ }}",
     "activateBeta": false,
     "rdmPort": 19443.
     "rdmShowFavicon": false,
     "rdmUseLegacyApi": false,
     "shouldColorFilledFields": false,
     "showIconInFields": true,
     "showSaveSiteDialog": true,
     "theme": 0.
     "useLegacyApi": false
  }
}
```
## Paramètres d'administrateur par défaut

Si cette section est ajoutée dans la chaîne JSON, une virgule doit être ajoutée à la fin de la section des paramètres ci-dessus. Voir l'exemple dans la section <a href="#Exemple">Exemple</a> à ce sujet.
```
{
     "adminSettings": {
            "activateBeta": false,
            "setGPOSettings": "OnInstall"
     }
}
```
## Valeurs
<a name="valeurs"></a>

**disableSettingsPage**
Masque le bouton des paramètres et désactive la page des paramètres dans {{ fr.WBEX }} pour l'utilisateur final.
Valeurs possibles :
* ***True***
* ***False*** (par défaut)

**setGPOSettings**
Détermine quand les paramètres GPO sont utilisés.
Valeurs possibles :
* ***OnInstall*** (par défaut) : Définir la valeur des paramètres GPO lorsque l'extension est installée.
* ***AlwaysOverride*** : Toujours remplacer la valeur des paramètres GPO lorsque l'extension est lancée.
* ***AlwaysUseDefaultAndOverride*** : Utiliser les paramètres par défaut pour tous les paramètres qui ne sont pas dans la GPO et remplacer les valeurs du GPO lorsque l'extension est lancée.

## Configuration du {{ fr.WBEX }} pour qu'il soit automatiquement épinglée à la barre d'outils de Chrome
1. Créer une nouvelle règle GPO pour que le {{ fr.WBEX }} soit automatiquement affiché dans la barre d'outils de Chrome.
1. Sélectionner ***Registre*** situé dans ***Configuration ordinateur – Préférences – Paramètres Windows – Registre*** OU ***Configuration utilisateur – Préférences – Paramètres Windows – Registre*** selon vos besoins.
1. Dans les paramètres de registre, définir le paramètre ***Action*** à ***Remplacer*** pour changer la règle ou pour la créer si elle n’existe pas.
1. Définir le paramètre ***Ruche*** à **HKEY_LOCAL_MACHINE** ou **HKEY_CURRENT_USER** selon vos besoins.
1. Entrer ***ExtensionSettings*** dans le champ ***Nom de valeur***.
1. Sélectionner ***REG_SZ*** dans la liste déroulante ***Type de valeur***.
1. Écrire la chaîne de paramètres JSON suivante dans le champ ***Données de valeur*** :
```
{"neimonjjffhehnojilepgfejkneaidmo": {"installation_mode":
"force_installed","update_url":"https<area>://clients2.google.com/service/update2/crx","toolbar_pin":"force_pinned"}}
```
8. Cliquer sur ***OK*** et mettre à jour les règles de GPO sur votre machine locale.
![!!KB2044](https://cdnweb.devolutions.net/docs/fr/kb/KB2044.png)
### Références
[https://www.chromium.org/administrators](https://www.chromium.org/administrators)
[https://www.chromium.org/administrators/complex-policies-on-windows](https://www.chromium.org/administrators/complex-policies-on-windows)
