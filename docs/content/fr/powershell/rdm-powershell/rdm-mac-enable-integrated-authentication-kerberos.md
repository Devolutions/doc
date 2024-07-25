---
eleventyComputed:
  title: "{{ fr.RDMMAC }} – Activer l'authentification intégrée avec Kerberos"
---
Pour utiliser l'Authentification Intégrée (Authentification Windows) sur macOS, vous aurez besoin de configurer un ***ticket Kerberos*** liant votre utilisateur actuel à un compte de domaine Windows. Un résumé des étapes clés est inclus ci-dessous.

{% snippet, "badgeWarning" %}
Cette fonctionnalité expérimentale a fonctionné lors de nos tests internes et constitue une solution de contournement pour la fonctionnalité de sécurité intégrée qui ne fonctionne pas sur macOS avec SQL Server.

Cela dit, l'implémentation initiale de Kerberos visait à aider notre communauté à utiliser cette méthode d'authentification. Cependant, plusieurs changements ont été apportés du côté de Kerberos depuis l'implémentation, il est donc possible que cette méthode soit maintenant obsolète.
{% endsnippet %}

## Pré-requis : obtenir la configuration du Contrôleur de Domaine Kerberos (KDC)
Nous proposons deux méthodes, la découverte manuelle ou un script PowerShell

Exécuter sur : PC Windows qui est joint à votre domaine Active Directory. Notez que tout domaine de production aura plus d'un contrôleur de domaine. Chacune des méthodes suivantes pourrait répondre avec un serveur différent en fonction d'une multitude de facteurs. Soyez prêt à exécuter cette découverte à nouveau si le serveur désigné devient indisponible.

### Découverte Manuelle
{% snippet, "badgeInfo" %}
**nltest.exe** est une utilité de console que vous pouvez exécuter en utilisant l'interpréteur de commande de base ou PowerShell.
{% endsnippet %}

Exécuter nltest dans l'interpréteur de commande de votre choix.

```powershell
nltest /dsgetdc:%USERDNSDOMAIN%

DC: \\dc-33.domain.company.com
Address: \\2111:4444:2111:33:1111:ecff:ffff:3333

La commande a été exécutée avec succès
```
Copiez le nom du DC qui est la valeur de configuration KDC requise, dans ce cas dc-33<area>.domain.company.com

### Script PowerShell
Exécuter le suivant dans une fenêtre PowerShell (rappelez-vous que le PC doit être joint au domaine cible)

```powershell
$dcinfo = Get-ADDomainController -Discover
Write-Output "Nom de domaine $($dcinfo.Domain)"
Write-Output "Contrôleur de domaine $($dcinfo.HostName)"
Write-Output "`nContenu suggéré pour krb5.conf`n-----------------------------------------"
Write-Output "[libdefaults]"
Write-Output "default_realm = $($dcinfo.Domain.ToUpper())"
Write-Output "
Write-Output "[realms]`n$($dcinfo.Domain.ToUpper()) = {"
Write-Output "kds = $($dcinfo.HostName)"
Write-Output "}"
```

## Configuration de Kerberos sur Mac

### Étape 1 : Configurer le KDC dans krb5.conf
Éditer le /etc/krb5.conf dans un éditeur de votre choix, notez que vous devez élever vos privilèges (sudo ou autre). Si vous avez obtenu le résultat du script PowerShell, copiez simplement les lignes appropriées. Suivez les étapes nécessaires si vous avez utilisé la découverte manuelle.

{% snippet, "badgeCaution" %}
Le domaine doit être en MAJUSCULES
{% endsnippet %}

Configurer les paramètres suivants :

```powershell
[libdefaults]
 default_realm = DOMAIN.COMPANY.COM

[realms]
DOMAIN.COMPANY.COM = {
 kdc = dc-33.domain.company.com
}
```

Ensuite, sauvegardez le fichier krb5.conf et quittez.

### Étape 2 : Tester la récupération du Ticket Granting Ticket
Utiliser la commande kinit username<area>@DOMAIN.COMPANY.COM pour obtenir un TGT de KDC. Vous serez invité à saisir votre mot de passe de domaine.

`kinit username<area>@DOMAIN.COMPANY.COM`

Utiliser klist pour voir les tickets disponibles. Si le kinit a réussi, vous devriez voir un ticket.

```
klist

krbtgt/DOMAIN.COMPANY.COM@ DOMAIN.COMPANY.COM.
```

### Étape 3 : Se connecter dans {{ fr.RDM }}
1. Créer une nouvelle source de données SQL Server.
1. Remplir les informations de la source de données (Nom et Hôte).
1. Sélectionner le mode “ ***Sécurité Intégrée (Active Directory)*** – ***Expérimental*** ”.
1. Sélectionner la base de données.
1. Sauvegarder la source de données.
![!!KB4792](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4792.png)

Si vous avez suivi toutes les étapes ci-dessus, vous devriez être capable de vous connecter avec succès à la source de données.
