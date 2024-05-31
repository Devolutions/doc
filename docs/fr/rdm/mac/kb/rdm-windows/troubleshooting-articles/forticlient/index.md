---
eleventyComputed:
  title: Forticlient
  description: Fortinet a supprimé la fonctionnalité d'injection des identifiants dans FortiClient 5.4 et versions ultérieures. Cependant, ils ont conservé la fonctionnalité avec FortiSSL.
---
Fortinet a supprimé la fonctionnalité d'injection des identifiants dans FortiClient 5.4 et versions ultérieures. Cependant, ils ont conservé la fonctionnalité avec FortiSSL.

Terminologie de l'entreprise :  

* Fortinet : Nom de l'entreprise
* Fortigate : Routeur Fortinet
* Forticlient et FortiSSL : VPNs de Fortinet

### Solution
L'interface en ligne de commande pour FortiSSL n'est plus incluse avec le téléchargement de FortiClient. Il est nécessaire de [télécharger les outils](https://www.fortinet.com/support/product-downloads) relatifs à la version actuelle de FortiClient.

Le fichier **FortiSSLVPNClient.exe** doit être sauvegardé dans le dossier d'installation de FortiClient.

{% snippet, "badgeInfo" %}
Il est nécessaire d'avoir un plan de support avec Fortinet pour télécharger les outils. Si vous n'avez pas de plan de support, essayer de contacter directement Fortinet et demander à ce qu'ils vous envoient le fichier.
{% endsnippet %}
