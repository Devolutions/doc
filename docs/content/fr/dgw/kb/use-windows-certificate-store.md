---
eleventyComputed:
  title: Utiliser le magasin de certificats Windows pour {{ fr.DGW }}
  description: Il est possible d'utiliser le magasin de certificats Windows comme source de certificat TLS. Au lieu d'utiliser un fichier, stocker et gérer vos certificats avec Windows.
---
{% snippet, "badgeCaution" %}
Si vos clients échouent à se connecter avec {{ fr.DGW }}, s'assurer que le certificat contient la chaîne entière. Cette chaîne de certificats inclut tous les certificats intermédiaires. Par exemple : Autorité de Certification Racine – Autorité de Certification Sécurisée – Certificat XYZ Acheté.
{% endsnippet %}

Il est possible d'utiliser le magasin de certificats Windows comme source de certificat TLS. Au lieu d'utiliser un fichier, stocker et gérer vos certificats avec Windows. À la date de rédaction, cette fonctionnalité n'est pas exposée dans la console de configuration GUI de {{ fr.DGW }}. Pour configurer, vous devez soit modifier directement le fichier gateway.json soit utiliser le module {{ fr.PS }}.

Avec la nouvelle fonctionnalité, quelques paramètres supplémentaires sont disponibles pour configurer la source du certificat.

{% snippet, "badgeInfo" %}
Si vous avez une configuration `TlsCertificateFile` et/ou `TlsPrivateKeyFile` définie précédemment, il n'est pas nécessaire de la supprimer car `TlsCertificateSource` indique à {{ fr.DGW }} où chercher le certificat.
{% endsnippet %}

* **TlsCertificateSource** (chaîne) : Source pour le certificat TLS, valeurs possibles ci-dessous.
    * **External** (par défaut) : Récupérer un certificat stocké sur le système de fichiers. Voir les options `TlsCertificateFile`, `TlsPrivateKeyFile`, et `TlsPrivateKeyPassword`.
    * **System** : Récupérer le certificat géré par le magasin de certificats système. Voir les options `TlsCertificateSubjectName`, `TlsCertificateStoreName`, et `TlsCertificateStoreLocation`.
* **TlsCertificateSubjectName** (chaîne) : Nom du sujet du certificat pour TLS lors de l'utilisation de la source Système.
* **TlsCertificateStoreName** (chaîne) : Nom du Magasin de Certificats Système à utiliser pour TLS (par défaut est My).
* **TlsCertificateStoreLocation** (chaîne) : Emplacement du Magasin de Certificats Système à utiliser pour TLS, valeurs possibles ci-dessous.
    * **CurrentUser** (par défaut)
    * **CurrentService**
    * **LocalMachine**

## Importer le certificat dans le magasin de certificats Windows
D'abord, importer votre certificat dans le magasin de certificats Windows. Windows prend en charge les formats de certificats suivants :

* Certificat X.509 - *.cer, *.crt
* Échange d'Informations Personnelles - *.pfx, *.p12
* Magasin de certificats sérialisé Microsoft - *.sst
* Certificats PKCS #7 - *.spc, *.p7b

{% snippet, "badgeInfo" %}
Si vous utilisez la méthode `External` via `TlsCertificateSource`, alors {{ fr.DGW }} ne prend en charge que le regroupement de la clé publique et de la clé privée dans un fichier PFX (PKCS#12). Sinon, vous devrez définir le paramètre `TlsPrivateKeyFile` également.
{% endsnippet %}

### Convertir un certificat X.509
{{ fr.DGW }} nécessite une clé privée avec le certificat TLS ; par conséquent, vous pourriez avoir besoin de combiner la clé publique avec sa clé privée. Voici deux méthodes : [{{ fr.RDM }}](#using-remote-desktop-manager) et l'utilitaire Windows intégré [`certutil`](#using-the-windows-certutil-utility).

#### Utiliser {{ fr.RDM }}
L'entrée ***Certificat X.509*** peut être utilisée pour importer ledit certificat et l'exporter dans plusieurs formats différents, y compris PFX.
1. Dans {{ fr.RDM }}, cliquer sur ***Nouvelle Entrée*** – ***Gestion des Identifiants*** – ***Général*** – ***Certificat X.509***.
![Certificat X.509](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0180.png)
1. Sélectionner le certificat et cliquer sur ***Ouvrir***.
![Ouvrir](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0164.png)
1. Cliquer sur ***Suivant***.
![Suivant](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0165.png)
1. Cliquer sur les points de suspension et sélectionner la ***Clé privée***.
![Bouton points de suspension](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0166.png)
1. Cliquer sur ***Ouvrir***.
![Fichier KEY](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0181.png)
   {% snippet, "badgeInfo" %}
   La ***Clé privée*** doit être dans l'extension `.key`.
   {% endsnippet %}
1. Cliquer sur ***Terminer***.
![Terminer](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0168.png)
1. Remplir les informations, puis cliquer sur ***Ajouter***.
![Champs d'informations](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0167.png)
1. Sélectionner l'entrée et cliquer sur ***Enregistrer le Certificat Sous*** (également disponible dans le menu contextuel clic droit).
![Enregistrer le Certificat Sous](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0186.png)
1. Dans le champ ***Format d'Exportation*** choisir ***Échange d'Informations Personnelles (pfx)***.
1. Choisir où le fichier sera sauvegardé en cliquant sur les points de suspension.
1. Entrer un mot de passe fort, puis cliquer sur ***Exporter***.
![Exporter le Certificat X.509](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0182.png)

#### Utiliser l'utilitaire Windows certutil
Utiliser l'utilitaire Windows `certutil` intégré pour combiner un fichier de certificat (`.crt` ou `.cer`) et sa clé privée (`.key`). Les deux fichiers doivent avoir le même nom.
`certutil -MergePFX file.crt file.pfx`
![certutil](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0169.png)

### Importer le certificat
Après avoir acquis le fichier de certificat et le fichier de clé privée du certificat, l'importer dans Windows.
1. Installer le certificat :
    * Si Windows détecte automatiquement le certificat, double-cliquer dessus et choisir ***Installer le Certificat...*** ; ou
    * Ouvrir `certmgr.msc` vers l'emplacement de magasin souhaité (`LocalMachine` ou `CurrentUser`), clic droit sur l'emplacement voulu (ex : ***Personnel/Certificats***) et choisir ***Toutes les Tâches*** – ***Importer***.
    ![Installer le Certificat...](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0183.png)
1. Choisir l'une des options suivantes et cliquer sur ***Suivant*** :
    * ***Sélectionner automatiquement le magasin de certificats en fonction du type de certificat*** ; ou
    * ***Placer tous les certificats dans le magasin suivant*** et cliquer sur ***Parcourir...*** pour choisir un dossier.
    ![Certificat X.509](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0184.png)
1. Compléter l'importation en cliquant sur ***Terminer***.
![Assistant d'Importation de Certificat](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0185.png)

## Configurer le magasin de certificats Windows via gateway.json
L'emplacement par défaut du fichier `gateway.json` est dans le répertoire **%ProgramData%\Devolutions\Gateway**.

S'assurer que le fichier est un `.json` valide en le testant avec :
```powershell
$Config = ("{0}\Devolutions\Gateway\gateway.json" -F $Env:ProgramData)

Essayer {
  Get-Content -Path $Config | ConvertFrom-JSON -ErrorAction 'Stop'
} Attraper {
  $PSItem[0].Exception.Message
}
```
Cela fonctionne avec PowerShell 5.1 et les versions ultérieures (la version recommandée à utiliser est PowerShell 7.x).
![Get-Content](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0173.png)

Une configuration typique est montrée ci-dessous. Vos valeurs peuvent différer, surtout le ***Nom du Sujet***, car cela reflétera le nom de domaine auquel {{ fr.DGW }} répond. Les valeurs importantes à changer sont :
* `TlsCertificateSource` - `System`
* `TlsCertificateSubjectName` - `gateway.ad.it-help.ninja`
* `TlsCertificateStoreName` - `My`
* `TlsCertificateStoreLocation` - `LocalMachine`

Un exemple du fichier de configuration entier :
```json
{
  "Id": "c912b379-8c34-449d-8ff3-3aa20a9cc3e4",
  "Hostname": "gateway.ad.it-help.ninja",
  "TlsCertificateFile": "server.crt",
  "TlsPrivateKeyFile": "server.key",
  "TlsCertificateSource": "System",
  "TlsCertificateSubjectName": "gateway.ad.it-help.ninja",
  "TlsCertificateStoreName": "My",
  "TlsCertificateStoreLocation": "LocalMachine",
  "ProvisionerPublicKeyFile": "provisioner.pem",
  "Listeners": [
    {
      "InternalUrl": "https://*:7171",
      "ExternalUrl": "https://*:7171"
    },
    {
      "InternalUrl": "tcp://*:8181",
      "ExternalUrl": "tcp://*:8181"
    }
  ]
}
```

1. Exécuter le script ci-dessus.
1. Ouvrir `services.msc`.
1. Clic droit sur ***Service {{ fr.DGW }}*** et sélectionner ***Redémarrer***.
![Redémarrer](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0174.png)
1. Vérifier si {{ fr.DGW }} fonctionne correctement en naviguant vers `https://{FQDN}:7171/jet/health` (en remplaçant `{FQDN}` par votre adresse DNS de Gateway) avec un navigateur web.

## Configurer le magasin de certificats Windows via PowerShell
Le {{ fr.DGW }} peut également être configuré via des commandes PowerShell. Le [module PowerShell {{ fr.DGW }}](https://www.powershellgallery.com/packages/DevolutionsGateway/) expose de nombreuses commandes pour le configurer. Par défaut, une installation de {{ fr.DGW }} inclut le module dans le répertoire d'installation.
Importer le module via la commande suivante :
```powershell
# Importer le Module
Import-Module -Name "C:\Program Files\Devolutions\Gateway\PowerShell\Modules\DevolutionsGateway"
# Voir les Modules importés
Get-Module
```
![Import-Module](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0175.png)

Une autre méthode pour rendre le module facilement accessible est de l'installer via la commande suivante :
```powershell
# Installer le module DevolutionsGateway
Install-Module -Name 'DevolutionsGateway'
# Mettre à jour le module si installé via la méthode ci-dessus (ne mettra pas à jour la version groupée installée avec Gateway)
Update-Module -Name 'DevolutionsGateway'
# Importer le Module
Import-Module -Name 'DevolutionsGateway'
# Voir les modules importés pour vérifier que le module DevolutionsGateway est disponible
Get-Module
```
![Install-Module](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0176.png)

Une fois importé, vous pouvez voir la configuration actuelle via la commande suivante :
```powershell
Get-DGatewayConfig
```
![Get-DGatewayConfig](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0177.png)

Pour indiquer à {{ fr.DGW }} d'utiliser le magasin Windows, utiliser la commande suivante :
```powershell
# Mettre à jour la configuration ; cela ne supprimera aucun paramètre existant, seulement configurer ceux définis.
# Remplacer l'exemple '{FQDN}` par le nom de domaine pleinement qualifié de l'adresse de la Gateway
Set-DGatewayConfig -TlsCertificateSource "System" -TlsCertificateSubjectName "{FQDN}" -TlsCertificateStoreLocation "LocalMachine" -TlsCertificateStoreName "My"
# Afficher la configuration mise à jour
Get-DGatewayConfig
```
![Set-DGatewayConfig](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0178.png)

Redémarrer le service pour que la configuration prenne effet.
```powershell
Restart-Service -Name 'DevolutionsGateway'
```
![Restart-Service -Name 'DevolutionsGateway'](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0179.png)

Vérifier si {{ fr.DGW }} fonctionne correctement en naviguant vers `https://{FQDN}:7171/jet/health` avec un navigateur web.
