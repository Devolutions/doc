---
eleventyComputed:
  title: Autoriser l'accès à votre PC depuis l'extérieur du réseau de votre PC
---
{% snippet, "shieldWarning" %}
Veuillez noter, avant de procéder, que nous considérons cette solution comme non sécurisée et qu'elle pourrait enfreindre certains protocoles de sécurité au sein de votre organisation.
{% endsnippet %}

Lorsque vous vous connectez à votre PC en utilisant un client de Bureau à distance, vous créez une connexion de pair à pair. Cela signifie que vous avez besoin d'un accès direct au PC (parfois appelé "l'hôte"). Si vous avez besoin de vous connecter à votre PC depuis l'extérieur du réseau sur lequel votre PC fonctionne, vous devez activer cet accès. Vous avez plusieurs options : utiliser le transfert de port ou configurer un VPN.

## Activer le transfert de port sur votre routeur

Le transfert de port mappe le port sur l'adresse IP de votre routeur (votre IP publique) au port et à l'adresse IP du PC auquel vous souhaitez accéder.

Les étapes spécifiques pour activer le transfert de port dépendent du routeur que vous utilisez, donc vous devrez chercher en ligne les instructions pour votre routeur. Pour une discussion générale des étapes, consultez le guide de wikiHow [Comment transférer un port sur n'importe quel routeur : Guide facile](https://www.wikihow.com/Set-Up-Port-Forwarding-on-a-Router).

Avant de mapper le port, vous aurez besoin des éléments suivants :

* Adresse IP interne du PC : Regardez dans ***Paramètres - Réseau et Internet - Statut - Voir les propriétés de votre réseau*** Trouvez la configuration réseau avec un statut "Opérationnel" puis obtenez l'adresse IPv4.
![!!KB4617](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4617.png)
* Votre adresse IP publique (l'IP du routeur). Il y a plusieurs façons de trouver cela - vous pouvez chercher (sur Bing ou Google) "mon IP" ou voir les propriétés du réseau Wi-Fi (pour Windows 10).
* Numéro de port mappé. Dans la plupart des cas, il s'agit du 3389 - c'est le port par défaut utilisé par les connexions de Bureau à distance.
* Accès administrateur à votre routeur.
{% snippet, "shieldWarning" %}
Vous ouvrez votre PC à Internet - assurez-vous d'avoir défini un mot de passe fort pour votre PC.
{% endsnippet %}

Après avoir mappé le port, vous pourrez vous connecter à votre PC hôte depuis l'extérieur du réseau local en vous connectant à l'adresse IP publique de votre routeur (le deuxième point ci-dessus).

L'adresse IP du routeur peut changer - votre fournisseur de services Internet (ISP) peut vous attribuer une nouvelle IP à tout moment. Pour éviter ce problème, envisagez d'utiliser le DNS dynamique - cela vous permet de vous connecter au PC en utilisant un nom de domaine facile à retenir, au lieu de l'adresse IP. Votre routeur met automatiquement à jour le service DDNS avec votre nouvelle adresse IP, si elle change.

Avec la plupart des routeurs, vous pouvez définir quelle adresse IP source ou quel réseau source peut utiliser le mappage de port. Donc, si vous savez que vous allez vous connecter uniquement depuis le travail, vous pouvez ajouter l'adresse IP de votre réseau de travail - cela vous permet d'éviter d'ouvrir le port à l'ensemble d'Internet public. Si l'hôte que vous utilisez pour vous connecter utilise une adresse IP dynamique, définissez la restriction source pour permettre l'accès depuis toute la plage de cet ISP particulier.

Vous pourriez également envisager de configurer une adresse IP statique sur votre PC afin que l'adresse IP interne ne change pas. Si vous faites cela, alors le transfert de port du routeur pointera toujours vers la bonne adresse IP.

## Utiliser un VPN

Si vous vous connectez à votre réseau local en utilisant un réseau privé virtuel (VPN), vous n'avez pas besoin d'ouvrir votre PC à l'internet public. Au lieu de cela, lorsque vous vous connectez au VPN, votre client RD agit comme s'il faisait partie du même réseau et sera capable d'accéder à votre PC. Il existe un certain nombre de services VPN disponibles - vous pouvez trouver et utiliser celui qui vous convient le mieux.
