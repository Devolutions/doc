---
eleventyComputed:
  title: VMware
---
Les outils VMware supposent que leurs scripts sont exécutés dans une session interactive et présentent également des avertissements la première fois qu'ils sont exécutés. En l'état actuel, vous devez exécuter des commandes de manière interactive après avoir installé ou mis à niveau leurs outils.

La configuration de PowerCLI a plusieurs portées : ***Session***, ***Utilisateur***, et ***Tous les Utilisateurs*** Veuillez consulter leur documentation pour les détails et sur comment configurer correctement selon vos besoins.

## La connexion au serveur a échoué !
Ce message d'erreur est affiché pour diverses raisons. Pour un diagnostic rapide, lancez le raccourci VMware vSphere PowerCLI de la même taille de bit (64 bits) que votre {{ fr.RDM }} Certaines commandes seront listées dans le tableau ci-dessous pour diagnostiquer les problèmes dans l'ordre.
![!!KB4121](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4121.png)

## Dans la fenêtre PowerShell : un message d'erreur apparaît mais il est impossible de le lire avant que la fenêtre ne se ferme
{{ fr.RDM }} envoie finalement quelques commandes dans un script encodé, vous pouvez ouvrir une fenêtre PowerShell et taper les commandes suivantes séquentiellement. De cette façon, vous aurez le temps de voir les messages d'erreur.

La première commande se connecte au serveur, une invite de mot de passe apparaîtra :

`Connect-VIServer {adresse ip ou nom du serveur};`

La deuxième commande liste les machines virtuelles présentes sur le serveur. Elle affiche le Nom et l'ID.

`Get-View -ViewType VirtualMachine | select -Property Name, {$_.Moref.Value};`

## Dans la fenêtre PowerShell : il y avait un ou plusieurs problèmes avec les certificats du serveur
Vous voyez également un message lié à ***Set-PowerCLIConfiguration*** Veuillez consulter [https://www.vmware.com/support/developer/PowerCLI/PowerCLI51/html/Set-PowerCLIConfiguration.html](https://www.vmware.com/support/developer/PowerCLI/PowerCLI51/html/Set-PowerCLIConfiguration.html) et prendre une décision éclairée quant à la meilleure marche à suivre en tenant compte de vos préoccupations de sécurité. Pour les utilisateurs qui sont à l'aise avec le certificat par défaut sur le serveur VMware, vous pouvez lancer une fenêtre de commande PowerShell et exécuter ce qui suit :

`set-PowerCLIConfiguration -invalidCertificateAction "ignore" -confirm:$false`

## Dans la fenêtre PowerShell : il y a une question sur le support de plusieurs serveurs
Comme décrit dans leur message, ce sera la valeur par défaut dans une prochaine version. Veuillez consulter leur documentation et prendre une décision éclairée, mais la plupart des utilisateurs devraient accepter l'option Multiple.

## Problèmes avec vmware powercli
Le terme 'connect-viserver' n'est pas reconnu comme le nom d'un cmdlet, fonction, fichier de script ou programme exécutable. vérifiez l'orthographe du nom, ou si un chemin a été inclus, vérifiez que le chemin est correct et réessayez.

### Cause
Cette erreur se produit parce que les modules PowerCLI ne sont pas liés à PowerShell ou le module PowerCLI pour la commande Connect-ViServer est manquant.

### Solution
Vérifier si VMware PowerCLI est installé.

Exécuter Get-Module VM* -ListAvailable dans PowerShell montre la liste des modules VMware installés.
![!!KB4122](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4122.png)
Vous devriez voir 4 modules VMware listés dans PowerShell comme montré dans l'image ci-dessus.

Vous pouvez tester pour voir si PowerShell reconnaît la commande Connect-ViServer.
![!!KB4123](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4123.png)
En tapant la commande, nous voyons que PowerShell n'a pas le module approprié installé.

Dans la fenêtre PowerShell, installez les modules PowerCLI en utilisant la commande Install-Module. De nombreuses instructions étape par étape peuvent être trouvées sur Google.

Puis tapez à nouveau la commande Get-Module VM* -ListAvailable, nous pouvons voir que les modules PowerCLI sont maintenant listés.
![!!KB4124](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4124.png)
Un dernier test avec la commande Connect-ViServer, en la tapant dans PowerShell, la connexion est établie et le problème devrait être résolu.
![!!KB4125](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4125.png)

## Dépannage supplémentaire
Si vous essayez sur un nouvel ordinateur et avez un problème avec VimAutomation.Core, vous pouvez l'installer avec la commande :

`Install-Module -Name VMware.VimAutomation.Core -AllowClobber -Scope CurrentUser`

Après l'installation, si vous exécutez la commande :

`Get-Module VM* -ListAvailable`

Vous devriez obtenir la sortie ci-dessous :
![!!KB4126](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4126.png)
Si vous redémarrez {{ fr.RDM }} avec l'utilisateur actuel (pas en tant qu'admin) et ouvrez l'entrée du tableau de bord VMware, après 30 secondes, vous devriez voir tous vos serveurs.

Si cela ne fonctionne pas, créez une entrée PowerShell, celle en bleu, sélectionnez ***Script Intégré*** et tapez le script ci-dessous :

```powershell
Import-Module VMware.PowerCLI;
Connect-ViServer "ADRESSE_IP_DU_SERVEUR";
Get-View -ViewType VirtualMachine | select -Property Name, {$_.Moref.Value};
```

Cliquez ***OK*** deux fois et essayez de démarrer l'entrée PowerShell.

Si vous obtenez une erreur concernant les politiques d'exécution, veuillez vous référer à [https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-5.1](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-5.1)

Mais vous pouvez résoudre le problème avec la commande suivante ;

`Set-ExecutionPolicy Unrestricted -Scope CurrentUser`

Veuillez consulter votre administrateur pour vous assurer que cette commande est autorisée à être utilisée dans votre infrastructure.
