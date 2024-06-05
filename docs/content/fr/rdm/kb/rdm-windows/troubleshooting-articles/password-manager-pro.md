---
eleventyComputed:
  title: Gestionnaire de mots de passe Pro
---
## SYSTEM.NET.WEBEXCEPTION: LE SERVEUR A COMMIS UNE VIOLATION DE PROTOCOLE. SECTION=RESPONSESTATUSLINE
Lors de la configuration de votre entrée de credentials pour Gestionnaire de mots de passe Pro, assurez-vous que l'URL de votre serveur contient https:// et non http://. Vous avez absolument besoin d'un https:// au début de l'adresse pour communiquer correctement avec le serveur.
![!!KB4113](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4113.png)

## LORSQUE VOUS TENTEZ DE VOUS CONNECTER SUR UN ORDINATEUR À DISTANCE OU D'OBTENIR LA LISTE DES CREDENTIALS, UNE FENÊTRE APPARAÎT AVEC UN CHAMP DE TOKEN VIDE ET LES CHAMPS NOM D'UTILISATEUR ET STATION DE TRAVAIL GRISÉS.
![!!KB4114](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4114.png)
Le nom d'hôte configuré dans votre utilisateur API dans Gestionnaire de mots de passe Pro n'est pas le même que celui que vous avez configuré dans {{ fr.RDM }} dans ***Fichier – Paramètres de mon compte – Gestionnaire de mots de passe Pro*** Veuillez consulter [Configurer Gestionnaire de mots de passe Pro dans {{ fr.RDM }}](/rdm/kb/rdm-windows/how-to-articles/rdm-mac-configure-password-manager-pro/) pour plus d'informations sur la configuration.

## SYSTEM.NET.WEBEXCEPTION: LA REQUÊTE A ÉTÉ ABORTÉE : IMPOSSIBLE DE CRÉER UN CANAL SÉCURISÉ SSL/TLS.
Gestionnaire de mots de passe Pro peut être configuré pour utiliser SSLv3, TLSv1.0, TLSv1.1 et TLSv1.2. Si vous avez configuré votre serveur Gestionnaire de mots de passe Pro pour utiliser uniquement TLSv1.2, vous rencontrerez ce message d'erreur. Vous devez configurer votre Gestionnaire de mots de passe Pro pour accepter TLSv1.0, TLSv1.1 et TLSv1.2.

## LA CLÉ API REÇUE N'EST ASSOCIÉE À AUCUN UTILISATEUR. AUTHENTIFICATION ÉCHOUÉE.
Modifiez votre utilisateur API dans Gestionnaire de mots de passe Pro et générez un nouveau ***Jeton d'Authentification***, sauvegardez votre utilisateur API et enregistrez ce nouveau jeton dans {{ fr.RDM }} dans ***Fichier – Paramètres de mon compte – Gestionnaire de mots de passe Pro***.

## L'UTILISATEUR N'EST PAS AUTORISÉ À ACCÉDER DEPUIS CET HÔTE.
Lors de la création d'un utilisateur API dans Gestionnaire de mots de passe Pro, un ***Hôte*** (Nom de l'ordinateur) est nécessaire pour créer l'utilisateur. Dans Gestionnaire de mots de passe Pro, il peut être enregistré en utilisant le ***Nom de Domaine Complet (FQDN)*** de l'ordinateur. Dans {{ fr.RDM }}, en revanche, vous devez le définir exactement de la même manière que la variable d'environnement %COMPUTERNAME%.

Une autre raison de cette erreur que nous avons constatée est que le nom DNS du serveur était spécifié, mais cela fonctionnerait parfaitement bien si vous utilisiez l'adresse IP à la place. Veuillez le tester avec la procédure décrite ci-dessous.

## PROCÉDURE DE TEST AVEC POWERSHELL.
Voici un script que vous pouvez utiliser pour tester votre accès depuis un poste client. Enregistrez le code suivant dans un fichier appelé PMPTest.ps1. La technologie utilisée dans le script est la même que celle utilisée depuis {{ fr.RDM }}, c'est donc le test le plus concluant. Si vous contactez le support de Gestionnaire de mots de passe Pro, ils peuvent fournir un dispositif de test basé sur Java. Il n'est utile que pour prouver que le serveur répond essentiellement à vos requêtes.

```powershell
[CmdletBinding()]
Param(
[Parameter(Mandatory=$True,Position=1)]
[string]$PMPServer,

[Parameter(Mandatory=$True,Position=2)]
[string]$AuthToken
)

add-type @"
using System.Net;
using System.Security.Cryptography.X509Certificates;
public class TrustAllCertsPolicy: ICertificatePolicy {
public bool CheckValidationResult(
ServicePoint srvPoint, X509Certificate certificate,
WebRequest request, int certificateProblem) {
return true;
}
}
"@

[System.Net.ServicePointManager]::CertificatePolicy = New-Object TrustAllCertsPolicy
cls
$connect = "https://" + $PMPServer + ":7272/restapi/json/v1/resources?AUTHTOKEN=$AuthToken"
$result = Invoke-WebRequest -Uri $connect
$form = $result.Content
$content = ConvertFrom-Json $form

$status = $content.operation.result.status

if ($status -eq "Success") {
$content.operation.Details
}
if ($status -eq "Failed") {
$status
$content.operation.result.Message
}
Pause
```

{% snippet, "badgeInfo" %}
Le port est codé en dur dans le script à 7272, qui est la valeur par défaut pour Gestionnaire de mots de passe Pro. Adaptez-le à votre environnement
{% endsnippet %}

Depuis Powershell, tapez ce qui suit :

`.\PMPTest.ps1 {VOTRE_SERVEUR_PMP} {VOTRE_JETON_PMP}`

Testez avec le nom DNS du serveur et l'adresse IP et observez les résultats.

## REMOTE DESKTOP MANAGER RENVOIE L'ADRESSE IP DU SERVEUR AU LIEU DU FQDN.
Dans certaines organisations, les adresses IP sont bloquées et le nom d'hôte du serveur Gestionnaire de mots de passe Pro doit être renvoyé. Dans ce cas, le [Fichier de Configuration](/rdm/windows/installation/client/configuration-file-location/) de l'application devra être modifié.

1. Fermer {{ fr.RDM }}.
1. Trouver le [Fichier de Configuration]{{ fr.RDM }}(/rdm/windows/installation/client/configuration-file-location/).
1. Éditer le fichier de configuration et ajouter la ligne <ResolvePMProURLIntoIPAddress>false</ResolvePMProURLIntoIPAddress>.
1. Sauvegarder la modification et redémarrer l'application.