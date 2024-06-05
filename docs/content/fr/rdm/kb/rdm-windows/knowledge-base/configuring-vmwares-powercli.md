---
eleventyComputed:
  title: Configurer VMware's PowerCLI pour utilisation par {{ fr.RDM }}
  description: Le VMware PowerCLI est utilisé par {{ fr.RDM }} pour interagir avec vSphere/vCenter dans trois cas distincts.
---
Le [VMware PowerCLI](http://www.vmware.com/support/developer/PowerCLI/index.html) est utilisé par {{ fr.RDM }} pour interagir avec vSphere/vCenter dans trois cas distincts :
* Obtenir la liste des machines virtuelles d'un vSphere/vCenter
* Effectuer des opérations sur ces machines virtuelles (démarrer, arrêter, etc.)
* Lancer une console à distance VMware

{% snippet, "badgeCaution" %}
Certaines opérations ne sont pas autorisées sur l'édition gratuite de VMware Esxi. Toutes les opérations agissant sur l'état de la machine virtuelle nécessitent la licence de l'API vSphere.
{% endsnippet %}  

En tant que service à notre communauté, nous fournissons la procédure pour obtenir le PowerCLI opérationnel. Veuillez vous rappeler que ce n'est pas un produit de Devolutions et que nous n'avons aucun contrôle sur les changements majeurs qui peuvent survenir entre les versions du PowerCLI. Vous devriez toujours vous référer à la documentation du fabricant.

## Procédure
{% snippet, "badgeCaution" %}
Cette procédure est valide pour la version 6.5 du PowerCLI de VMware.

La compatibilité des versions (32 bits ou 64 bits) de {{ fr.RDM }} et du PowerCLI doit être prise en compte pour cette procédure. Puisque ces étapes sont effectuées une seule fois, nous vous recommandons de suivre la procédure pour LES DEUX éditions, 32 bits et 64 bits, du PowerCLI.
{% endsnippet %}  

1. S'assurer que la politique d'exécution des scripts de PowerShell est configurée. Veuillez vous référer à la Politique d'Exécution des Scripts.
1. Lancer VMware vSphere PowerCLI en utilisant le raccourci sur votre système, ceci est la version 64 bits (en utilisant ***Exécuter en tant qu'administrateur***).
1. Lancer VMware vSphere PowerCLI (32 bits), ajuster les deux fenêtres côte à côte (en utilisant ***Exécuter en tant qu'administrateur***).
1. Dans les deux fenêtres, définir le paramètre de certificat SSL de votre choix. Évidemment, déployer un certificat valide sur le serveur vSphere et faire confiance à l'Autorité de Certification est la voie la plus sécurisée. Dans des environnements sécurisés ou dans un contexte à faible risque, nous choisissons simplement d'ignorer.
`set-PowerCLIConfiguration -invalidCertificateAction "ignore" -confirm:$false`
1. Se connecter à un serveur vSphere/vCenter. Si le PowerCLI affiche des invites, répondre en conséquence.
`Connect-VIServer {votre serveur}`
1. Exécuter la commande suivante pour voir s'il y a des messages d'erreur :
`Get-View -ViewType VirtualMachine | select -Property Name, {$_.Moref.Value};`

Si aucun message d'erreur n'apparaît, vous pouvez fermer les deux PowerCLIs et vous êtes maintenant prêt à le tester en utilisant {{ fr.RDM }}.