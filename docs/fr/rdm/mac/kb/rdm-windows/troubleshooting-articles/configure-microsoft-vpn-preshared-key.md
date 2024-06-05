---
eleventyComputed:
  title: Configurer un VPN Microsoft avec une clé partagée
---
La configuration VPN L2TP dans {{ fr.RDM }} nécessite un fichier Phonebook. Nous ajoutons également un script PowerShell dans la session VPN pour ajouter le VPN dans Windows et injecter la phrase secrète. Les étapes sont simples mais nécessitent des informations précises. Dans la première étape, nous avons besoin d'un fichier Phonebook. Je ne couvre pas cet exemple car trop d'exemples de recherche Google existent.

1. Créer une entrée de phonebook avec le fichier PBK.
1. Configurer une session VPN Microsoft.
Important le nom du VPN doit être l'adresse à laquelle vous vous connecterez. Le script PowerShell ne lit pas les informations dans le fichier PBK lors de la création du VPN local.
![!!KB4243](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4243.png)

#### Configurer l'entrée VPN Microsoft comme
1. Sélectionner le phonebook précédemment créé.
1. Cliquer sur le bouton actualiser et sélectionner dans le menu déroulant le nom de VPN approprié.
1. Entrer les identifiants.

Maintenant, il est temps pour la clé partagée, sous ***Common – Custom Fields***, dans le ***Custom #1***, cliquer sur le nom et le changer pour PreSharedKey (#1). Ensuite, entrer la clé partagée dans le champ à droite. Comme protection visuelle, cliquer uniquement sur le verrou à la fin (#2).
![!!KB4244](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4244.png)
{% snippet, "badgeCaution" %}
La clé partagée n'est pas protégée avec la permission de voir le mot de passe. Pour empêcher l'utilisateur de la voir, vous devez bloquer l'accès en écriture à l'entrée. La valeur d'un champ personnalisé caché est chiffrée et protégée avec la permission ***Voir sensible***.
{% endsnippet %}

La dernière et la plus importante est l'intégration du PowerShell qui créera la configuration VPN dans Windows.

Sous ***Events – Before Connect*** sélectionner ***PowerShell*** et copier le script ci-dessus dans la boîte.
```powershell
# Exécuter depuis une session PowerShell élevée (-verb RunAs)
# Peut nécessiter d'exécuter la ligne commentée ci-dessous et répondre 'A' OU 'Y'
#set-executionpolicy -executionpolicy unrestricted

$wshell = New-Object -ComObject Wscript.Shell;
$ServerAddress = $RDM.Connection.VPN.Name;
$ConnectionName = $RDM.Connection.VPN.Name;
$PresharedKey = $RDM.Connection.MetaInformation.CustomField1Value;

$Exists = Get-VpnConnection -Name $ConnectionName -ErrorAction SilentlyContinue -ErrorVariable ProcessError;
If ($ProcessError) {$wshell.Popup('RDM crée le VPN  ' + $ConnectionName,0,'Création',0x0);
$Exists = $False};

If ($Exists -eq $False){;
$ServerAddress = $ServerAddress;
$PresharedKey = $PresharedKey;

Add-VpnConnection -RememberCredential -Name $ConnectionName -ServerAddress $ServerAddress -TunnelType L2tp -L2tpPsk $PresharedKey -AuthenticationMethod Pap -Force -ErrorAction SilentlyContinue;
$ExistsTest = Get-VpnConnection -Name $ConnectionName -ErrorAction SilentlyContinue -ErrorVariable ProcessError;
If ($ProcessError) { $wshell.Popup('VPN ' + $ConnectionName + ' - Ne peut pas être créé' + $Error,0,'Erreur',0x0)} else {$wshell.Popup('VPN ' + $ConnectionName + ' - Créé avec succès ',0,'Succès',0x0)};
} else {$wshell.Popup('VPN ' + $ConnectionName + ' - Existe déjà',0,'Terminé',0x0)};
```
