---
eleventyComputed:
  title: Déployer le {{ fr.WBEX }} dans Google Chrome ou Edge en utilisant les GPOs
  description: Les paramètres déployés avec l'objet de stratégie de groupe (GPO) sont uniquement appliqués lors de la première utilisation de l'extension.
---
{% snippet, "badgeInfo" %}
Note importante pour les versions de {{ fr.WBEX }} **antérieures à 2021.2.3.0**.

Les paramètres déployés avec l'objet de stratégie de groupe (GPO) sont uniquement appliqués lors de la première utilisation de l'extension. Cela signifie que les paramètres ne seront pas appliqués et modifiés si vous modifiez les paramètres dans le GPO et que l'extension a déjà été utilisée par un utilisateur au moins une fois.
{% endsnippet %}

## Configurer les extensions par politique sur Windows 10/11 pour Chrome ou Edge

1. Ouvrir ***Gestion de la stratégie de groupe*** (***Démarrer – Exécuter – GPMC.msc***).
1. Faire un clic droit sur la liste des GPO et sélectionner ***Nouveau***.
1. Dans la fenêtre ***Nouveau GPO***, créer votre nouvel objet puis cliquer sur ***OK***.
1. Faire un clic droit sur votre nouveau GPO et sélectionner ***Modifier***.
1. Sélectionner ***Registre*** situé dans ***Configuration ordinateur – Préférences – Paramètres Windows – Registre ou Configuration utilisateur – Préférences – Paramètres Windows – Registre*** selon vos besoins.
1. Faire un clic droit dans la liste des éléments du ***Registre*** et sélectionner ***Nouveau – Élément de registre***.
1. Définir le paramètre ***Action*** sur Remplacer pour modifier la règle existante ou pour la créer si elle n'existe pas.
1. Définir le paramètre ***Ruche*** sur **HKEY_LOCAL_MACHINE** ou **HKEY_CURRENT_USER** selon vos besoins.
1. Entrer **SOFTWARE\Policies\Google\Chrome\3rdparty\extensions\neimonjjffhehnojilepgfejkneaidmo\policy** dans le champ de texte ***Chemin de la clé***.
   {% snippet, "badgeInfo" %}
   Entrer **\SOFTWARE\Policies\Microsoft\Edge\3rdparty\extensions\ddloeodolhdfbohkokiflfbacbfpjahp\policy** dans le champ de texte ***Chemin de la clé*** si vous utilisez Microsoft Edge.
   {% endsnippet %}

10. Entrer ***Paramètres*** dans le champ de texte ***Nom de la valeur***.
1. Sélectionner REG_SZ dans la liste déroulante ***Type de valeur***.
1. Écrire la chaîne de paramètres JSON dans le champ de texte ***Données de la valeur***. Voir la section [Valeurs](#values) ci-dessous pour un exemple.
1. Cliquer sur ***OK***.
![!!KB8106](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8106.png)
1. Dans ***Gestion de la stratégie de groupe***, configurer les ***Liens*** du GPO et le ***Filtrage de sécurité*** selon vos besoins.

### Exemple
* Activer {{ fr.DVLS }}
* Définir **https<area>://localhost/mydvlsurl** comme URL de {{ fr.DVLS }}.
* Désactiver la page des paramètres.
* Toujours remplacer les paramètres dans la section ***paramètres*** lorsque l'extension démarre.

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

### Paramètres par défaut
Tous les attributs peuvent avoir leur valeur modifiée ou leur clé supprimée.

```
{
  "settings": {
    "activateBeta": false,
    "autoFillEntryOnLoad": false,
    "autoRetrieveCredentials": true,
    "autoSubmitFormOnFill": false,
    "autofillBasicAuthentication": false,
    "destinationGroup": "{{ fr.WBEX }}",
    "disableAnalytics": false,
    "dvlsActivated": false,
    "dvlsAutoFillEntryOnLoad": false,
    "dvlsAutoRetrieveCredentials": true,
    "dvlsAutoSubmitFormOnFill": false,
    "dvlsAutofillBasicAuthentication": false,
    "dvlsDestinationFolder": "{{ fr.WBEX }}",
    "dvlsMatchDetectionType": 2,
    "dvlsShouldIncludePrivate": true,
    "dvlsShowFavicon": false,
    "dvlsSyncAllAvailableVaults": false,
    "dvlsUrl": "",
    "enableContextMenu": true,
    "enableNativeMessaging": false,
    "filledFieldsColor": "#b3d9ff",
    "hubActivated": false,
    "hubAutoFillEntryOnLoad": false,
    "hubAutoSubmitFormOnFill": false,
    "hubAutofillBasicAuthentication": false,
    "hubDefaultLoginUsername": "",
    "hubMatchDetectionType": 2,
    "hubPersonalActivated": false,
    "hubPersonalAutoFillEntryOnLoad": false,
    "hubPersonalAutoSubmitFormOnFill": false,
    "hubPersonalDefaultLoginUsername": "",
    "hubPersonalLucidUrl": "https://login.devolutions.com",
    "hubPersonalMatchDetectionType": 2,
    "hubPersonalServerUrl": "https://hub-server.devolutions.com",
    "hubPersonalShowFavicon": true,
    "hubShouldIncludePrivate": true,
    "hubShowFavicon": true,
    "hubSyncAllAvailableVaults": false,
    "hubUrl": "",
    "lucidUrl": "https://login.devolutions.com",
    "rdmActivated": false,
    "rdmApplicationCode": "",
    "rdmAutoFillEntryOnLoad": false,
    "rdmAutoRetrieveCredentials": true,
    "rdmAutoSubmitFormOnFill": false,
    "rdmAutofillBasicAuthentication": false,
    "rdmDefaultDestinationVaultIsPrivate": true,
    "rdmDefaultPortUsage": true,
    "rdmDestinationFolder": "{{ fr.WBEX }}",
    "rdmEnableNativeMessaging": false,
    "rdmPort": 19443,
    "rdmShowFavicon": false,
    "rdmUseLegacyApi": false,
    "shouldColorFilledFields": false,
    "showIconInFields": true,
    "showSaveSiteDialog": true,
    "theme": 0,
    "useLegacyApi": false
  }
}
```

### Paramètres administrateur par défaut
Tous les attributs peuvent avoir leur valeur modifiée ou leur clé supprimée. Si cette section est ajoutée dans la chaîne JSON, une virgule doit être ajoutée à la fin de la section des paramètres ci-dessus. Voir l'exemple dans la section [Exemple](#Exemple) à ce sujet.

```
{
  "adminSettings": {
    "disableSettingsPage": false,
    "setGPOSettings": "OnInstall"
  }
}
```

### Valeurs
disableSettingsPage

Masquer le bouton des paramètres et désactiver la page des paramètres dans le {{ fr.WBEX }} pour l'utilisateur final.
Valeurs possibles :

* ***True***
* ***False*** (Par défaut)

setGPOSettings

Définir quand les paramètres GPO sont utilisés.
Valeurs possibles :

* OnInstall (par défaut) : Définir la valeur des paramètres GPO lorsque l'extension est installée.
* AlwaysOverride : Toujours remplacer la valeur des paramètres GPO lorsque l'extension démarre.
* AlwaysUseDefaultAndOverride : Utiliser les paramètres par défaut pour tous les paramètres non inclus dans le GPO et remplacer les valeurs du GPO lorsque l'extension démarre.

## Configurer le {{ fr.WBEX }} pour être automatiquement épinglé sur la barre d'outils de Google Chrome
1. Créer une nouvelle règle GPO pour avoir le {{ fr.WBEX }} automatiquement épinglé sur la barre d'outils de Chrome.
1. Sélectionner Registre situé dans ***Configuration ordinateur – Préférences – Paramètres Windows – Registre ou Configuration utilisateur – Préférences – Paramètres Windows – Registre*** selon vos besoins.
1. Dans les propriétés du registre, définir le paramètre Action sur ***Remplacer*** pour modifier la règle existante ou pour la créer si elle n'existe pas.
1. Définir le paramètre Ruche sur **HKEY_LOCAL_MACHINE** ou **HKEY_CURRENT_USER** selon vos besoins.
1. Entrer ExtensionSettings dans le champ de texte ***Nom de la valeur***.
1. Sélectionner REG_SZ dans la liste déroulante ***Type de valeur***.
1. Entrer la chaîne de paramètres JSON suivante dans le champ de texte Données de la valeur :
   ```
   {
     "neimonjjffhehnojilepgfejkneaidmo": {
       "installation_mode": "force_installed",
       "update_url": "https<area>://clients2.google.com/service/update2/crx",
       "toolbar_pin": "force_pinned"
     }
   }
   ```
1. Cliquer sur ***OK*** et mettre à jour les règles GPO sur votre machine locale.
![!!KB8105](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8105.png)

## Références
* [https://www.chromium.org/administrators](https://www.chromium.org/administrators)
* [https://www.chromium.org/administrators/complex-policies-on-windows](https://www.chromium.org/administrators/complex-policies-on-windows)
