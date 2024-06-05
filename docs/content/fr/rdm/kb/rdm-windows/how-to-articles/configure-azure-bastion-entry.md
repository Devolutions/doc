---
eleventyComputed:
  title: Configurer une entrée Azure Bastion dans {{ fr.RDM }}
  description: "{{ fr.RDM }} permet de se connecter sans problème aux instances Azure Bastion via une entrée VPN/SSH/Gateway soit par connexion soit partagée entre plusieurs."
---
Microsoft Azure Bastion est un service entièrement géré et complet offrant à la fois un accès au protocole Remote Desktop Protocol (RDP) et au protocole Secure Shell (SSH) aux machines virtuelles Azure (VM) sans exposer leur IP publique. Un service facturé à l'heure, Azure Bastion est lié à un réseau virtuel Azure spécifique, permettant l'accès à toutes les VM contenues à l'intérieur.

{% snippet, "badgeInfo" %}
Azure Bastion est compatible avec les dernières versions (2023.1.x et ultérieures) de {{ fr.RDM }}.
{% endsnippet %}

{{ fr.RDM }} permet de se connecter sans problème aux instances Azure Bastion via une entrée VPN/SSH/Gateway soit par connexion soit partagée entre plusieurs. Une fois Azure Bastion provisionné, ajouter les détails nécessaires à {{ fr.RDM }}, s'authentifier à Azure et se connecter à toutes les VMs dans le réseau virtuel Azure donné.

## Provisionner Azure Bastion pour un réseau virtuel Azure
Avant de créer des entrées dans {{ fr.RDM }}, certaines étapes sont nécessaires pour le provisionnement dans votre portail Azure.

1. Ouvrir votre [Portail Microsoft Azure](https://azure.microsoft.com/en-us/) et se connecter à votre compte.
1. Sélectionner ***Réseaux virtuels*** dans la section ***Services Azure***. Si vous ne le voyez pas, cliquer sur ***Plus de services*** pour faire apparaître d'autres services.
![Services Azure – Réseaux virtuels](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2274.png)
1. Cliquer sur un réseau virtuel spécifique pour y ajouter Bastion (ou en créer un).
1. Dans le menu de gauche, aller à la fenêtre ***Bastion*** pour ouvrir les détails, puis cliquer sur le bouton ***Déployer Bastion*** pour commencer le processus.
![Bastion – Déployer Bastion](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2275.png)
   Si aucun sous-réseau existant n'a assez d'espace, alors Bastion affiche uniquement le bouton ***Configurer manuellement*** et demande la création du sous-réseau. Dans l'image ci-dessus, le sous-réseau `172.16.2.0/24` a été fourni, et le bouton ***Déployer Bastion*** devient activé une fois le sous-réseau ajouté.
    * C'est un processus en plusieurs étapes, qui peut prendre 10 minutes ou plus pour se compléter.
        * Crée un sous-réseau nommé `AzureBastionSubnet`.
        * Crée une ressource pour Azure Bastion - `{Réseau Virtuel Existant}-bastion`.
        * Déploie au moins une instance d'application Bastion.
        * Provisionne une IP publique liée à la ressource Azure Bastion.
1. Une fois Azure Bastion provisionné, naviguer à nouveau à la fenêtre ***Bastion***.
1. Sélectionner une VM disponible à laquelle se connecter.
![Sélectionner une VM à laquelle se connecter](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2276.png)
1. Entrer les identifiants locaux appropriés de la VM sous ***Paramètres de connexion***.
![Paramètres de connexion](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2277.png)
1. Cliquer sur ***Connecter***. Une fois connecté, un nouvel onglet de navigateur s'ouvre et montre la connexion.
1. Toujours dans le portail Azure, naviguer à la ressource `{Réseau Virtuel Existant}-bastion`.
1. Dans le menu de gauche, cliquer sur la fenêtre ***Configuration***.
1. Sélectionner le niveau ***Standard*** et activer le ***Support client natif*** (désactivé par défaut).
   {% snippet, "badgeInfo" %}
   Par défaut, Azure Bastion provisionne le niveau ***Basic***, qui ne permet pas le Support Client Natif, sur lequel {{ fr.RDM }} repose.
   {% endsnippet %}

   ![Niveau Standard et Support client natif activé](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2278.png)
1. Sauvegarder la configuration et laisser le temps de compléter la mise à niveau et les changements de fonctionnalités.
   {% snippet, "badgeCaution" %}
   Une fois que vous avez effectué la mise à niveau, vous ne pouvez plus revenir en arrière. Assurez-vous donc de vouloir le faire et soyez conscient de l'augmentation de prix associée.
   {% endsnippet %}

## Connecter {{ fr.RDM }} à Azure Bastion
Avec Azure Bastion maintenant configuré, vous pouvez maintenant configurer {{ fr.RDM }} pour se connecter aux VMs derrière Azure Bastion. Les étapes ci-dessous montrent la création d'une entrée VPN Azure Bastion externe qui est ensuite liée à une entrée de session RDP/SSH. Cela est utile si vous prévoyez d'utiliser l'entrée Azure Bastion avec plusieurs entrées de session.

Cependant, si vous prévoyez de l'utiliser avec une seule entrée de session, vous pouvez configurer la configuration Azure Bastion directement dans les propriétés de cette session, sous la section ***VPN/SSH/Gateway*** dans le menu de gauche. Néanmoins, vous devriez suivre les étapes ci-dessous, car la configuration et les informations à fournir restent les mêmes.

1. Avant de se connecter, localiser les détails de propriété suivants :
   | Propriété              | Valeur exemple                           | Notes |
   |-----------------------|-----------------------------------------|-------|
   | ***Hôte***            | `Devolutions-202309011056-vnet-bastion` | Cette valeur est dérivée de `{Réseau Virtuel Existant}-bastion` et n'est pas la valeur DNS publique ou IP publique trouvée dans les informations de la ressource. |
   | ***ID d'abonnement*** | `6f14d593-b33a-48ca-81es-428eeb0ff8b1`  | Il est supposé être le même que l'hôte Azure Bastion, dans ce cas, il peut être omis. Localiser cette valeur en naviguant à ***Abonnements***. Ensuite, sélectionner votre abonnement spécifique et copier la valeur ***ID d'abonnement***. |
   | ***Groupe de ressources***  | `Devolutions-202309011056`              | Il est supposé être le même que l'hôte Azure Bastion, dans ce cas, il peut être omis. C'est le groupe de ressources dans lequel le réseau virtuel et l'objet Bastion attaché se trouvent. |
   | ***ID de locataire***       | `76377918-3e78-4fd7-b07a-6eb5d4bbf18f`  | Il est seulement nécessaire s'il n'est pas le locataire par défaut pour l'utilisateur Azure. Soit cliquer sur le bouton «...» à côté de l'***ID de locataire*** dans {{ fr.RDM }} pour remplir le champ, soit localiser manuellement cette valeur en naviguant à Azure Active Directory, en choisissant l'onglet ***Propriétés***, et en copiant la valeur ***ID de locataire***. |
1. Avec les détails en main, ouvrir {{ fr.RDM }} et naviguer à l'endroit où vous voulez que votre entrée Azure Bastion soit.
1. Dans le Ruban, aller à l'onglet ***Modifier*** et cliquer sur le symbole "+" pour ajouter une nouvelle entrée.
![Modifier – Nouvelle Entrée](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2279.png)
1. Sous les types d'entrée ***VPN/SSH/Gateway***, sélectionner ***Azure Bastion*** et cliquer sur ***OK***.
![Entrée Azure Bastion](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2280.png)
1. ***Nommer*** votre entrée.
1. Dans le sous-onglet ***Général***, entrer les informations localisées à l'étape 1 pour l'***Hôte***, l'***ID d'abonnement***, le ***Groupe de ressources***, et l'***ID de locataire***.
1. Sélectionner un ***nuage Azure*** dans la liste déroulante correspondante. La valeur ***Par défaut*** correspond au nuage public Azure.
1. Sélectionner un ***mode de connexion*** dans la liste déroulante correspondante. Choisir entre :
    * ***Passerelle RD*** : Récupère un fichier de connexion RDP de la Bastion et l'utilise en arrière-plan pour une performance plus rapide. Supporte uniquement les entrées de session RDP.
    * ***Tunnel TCP*** : Permet des numéros de port uniques mais offre une performance inférieure. Disponible uniquement avec le niveau Standard. Supporte les ports non standards et les entrées SSH. Ce mode reflète la fonctionnalité de la commande ***az cli Bastion tunnel***.

   ![Informations générales Azure Bastion](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2281.png)
1. Ouvrir le sous-onglet ***Authentification*** et sélectionner la valeur appropriée :
    * ***Utiliser "Mes paramètres de compte"*** : Prend vos identifiants de ***Fichier – Mes paramètres de compte***.
    * ***Utiliser ma connexion PowerShell actuelle*** : Prend le contexte de connexion actuel de Azure PowerShell (`Connect-AzAccount`).
    * ***Utiliser ma connexion Azure CLI actuelle*** : Prend le contexte de connexion actuel de Az CLI (`az login`).
    * ***Demander les identifiants*** : Invite avec une connexion interactive pour s'authentifier via une fenêtre de navigateur Web pop-up. Vous pouvez éventuellement fournir le nom d'utilisateur comme indice de connexion. Le jeton d'accès sera mis en cache pour les connexions subséquentes dans la même session utilisateur.
   Dans l'exemple ci-dessous, la connexion est configurée pour inviter avec un écran de connexion Azure et un indice de connexion optionnel est fourni pour sélectionner le bon compte.
   ![Informations d'authentification Azure Bastion](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2282.png)
1. Cliquer sur ***OK*** pour sauvegarder l'entrée.
1. Dans le Ruban, aller à l'onglet ***Modifier*** et cliquer sur le symbole "+" à nouveau pour ajouter une autre entrée.
![Modifier – Nouvelle Entrée](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2279.png)
1. Sous les types d'entrée ***Session***, sélectionner soit ***RDP (Microsoft Remote Desktop)*** soit ***SSH Shell*** et cliquer sur ***OK***. Pour cet exemple, une entrée de session RDP a été utilisée.
![Entrée RDP (Microsoft Remote Desktop) ou SSH Shell](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2283.png)
1. ***Nommer*** votre entrée.
1. Dans l'onglet ***Général***, entrer le nom de la VM qui est dans Azure dans le champ ***Hôte***.
1. Entrer le ***Nom d'utilisateur*** et le ***Mot de passe*** de la VM pour se connecter à la VM elle-même.
   {% snippet, "badgeInfo" %}
   Cette VM n'est pas encore jointe à un domaine, donc le champ domaine est laissé vide.
   {% endsnippet %}

   ![Informations générales RDP](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2284.png)
1. Dans le menu de gauche, naviguer à l'écran ***VPN/SSH/Gateway*** de la connexion RDP.
1. Dans l'onglet ***VPN/SSH/Gateway***, sous ***Général***, sélectionner ***Toujours se connecter*** dans la liste déroulante ***Connecter***.
![Toujours se connecter](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2285.png)
1. Dans la liste déroulante ***Type***, sélectionner ***Azure Bastion***.
![Type Azure Bastion](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2286.png)
1. Cliquer sur le bouton d'ellipse à côté de l'option ***Type***.
![Bouton d'ellipse](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2287.png)
1. Choisir ***Existant*** dans le menu de gauche, puis trouver l'entrée Azure Bastion pré-créée existante.
![Entrée Azure Bastion existante](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2288.png)
1. Cliquer sur ***OK*** deux fois pour fermer les fenêtres d'édition de connexion.
1. Lancer une connexion à la VM nouvellement ajoutée.
1. Pour une authentification interactive, et particulièrement si vos identifiants ne sont pas encore mis en cache, vous rencontrerez une invite de connexion Microsoft pour vous authentifier contre le portail Azure. Entrer vos identifiants Azure pour ouvrir la connexion Azure Bastion et se connecter à la VM demandée.
![Invite de connexion Microsoft](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2289.png)

Votre connexion devrait maintenant être ouverte.

{% snippet, "badgeWarning" %}
Vous pourriez rencontrer ce message d'erreur dans {{ fr.RDM }} : ***L'Azure Bastion ne prend pas en charge les connexions client natives (SKU : Basic Native Client : False)***. Cela signifie que vous n'avez pas effectué la mise à niveau vers le niveau correct.
{% endsnippet %}
