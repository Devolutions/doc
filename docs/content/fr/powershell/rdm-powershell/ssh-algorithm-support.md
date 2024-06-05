---
eleventyComputed:
  title: Prise en charge de l'algorithme SSH
  description: Dans les versions 2020.3.13.0 et ultérieures de {{ fr.RDM }}, un message d'erreur peut apparaître lors de l'ouverture d'une connexion Secure Shell (SSH).
  keywords:
  - SSH
  - Algorithme
---
Dans les versions 2020.3.13.0 et ultérieures de {{ fr.RDM }}, un message d'erreur peut apparaître lors de l'ouverture d'une connexion Secure Shell (SSH) : "Une erreur inattendue s'est produite : Code d'erreur SSH_FAIL_NO_MATCH (-3006) Impossible de trouver un algorithme correspondant avec le serveur SSH".

## Solution locale pour une entrée
{% snippet icon.shieldCaution %}
{{ fr.RDM }} propose désormais une sélection d'algorithmes pour le type de session SSH. Veuillez noter que les algorithmes **non sécurisés** ne sont pas activés par défaut. Nous vous recommandons donc de vérifier les algorithmes directement sur votre serveur à des fins de sécurité. Sinon, vous pouvez suivre les étapes ci-dessous pour résoudre ce problème.
{% endsnippet %}

1. Faire un clic droit sur votre entrée et sélectionner ***Propriétés***. Assurez-vous d'être dans ***Commun*** – ***Général*** dans le menu de gauche.
1. Dans l'onglet ***Avancé***, régler l'option ***Prise en charge de l'algorithme*** sur ***Personnalisé***.
![Prise en charge de l'algorithme personnalisée](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4653.png)
1. Cliquer sur le bouton apparu à droite du paramètre ***Prise en charge de l'algorithme***.
1. Dans la nouvelle fenêtre ***SSH***, sélectionner les algorithmes manquants dans la liste.
   {% snippet icon.badgeCaution %}
   Assurez-vous de parcourir les algorithmes dans **tous les onglets** avant de continuer.
   {% endsnippet %}

   ![Sélection des algorithmes manquants](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2074.png)
5. Cliquer sur ***OK*** dans la fenêtre ***SSH***, puis ***OK*** à nouveau dans la fenêtre des propriétés de l'entrée.
   {% snippet icon.badgeInfo %}
   Vous devrez peut-être redémarrer {{ fr.RDM }} pour que la solution prenne effet.
   {% endsnippet %}
1. Tester votre connexion. Si vous ne parvenez toujours pas à vous connecter après avoir activé les algorithmes, retourner à l'onglet ***Avancé*** dans les propriétés de votre entrée et cocher la case ***Ignorer la configuration de la variable d'environnement*** puis cliquer sur ***OK***.
![Ignorer la configuration de la variable d'environnement](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4702.png)

## Solution globale pour toutes les entrées
Il est également possible de réactiver globalement tous les algorithmes dans {{ fr.RDM }} via le menu ***Fichier*** – ***Paramètres*** – ***Types*** – ***Terminal*** – ***Prise en charge de l'algorithme***. Il suffit de sélectionner les algorithmes manquants, puis de cliquer sur ***OK***.
{% snippet icon.badgeCaution %}
Assurez-vous de parcourir les algorithmes dans **tous les onglets**.
{% endsnippet %}

{% snippet icon.badgeInfo %}
Vous devrez peut-être redémarrer {{ fr.RDM }} pour que la solution prenne effet.
{% endsnippet %}

![Fichier – Paramètres – Types – Terminal – Prise en charge de l'algorithme](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4654.png)

## Script de commande PowerShell personnalisé
Si vous rencontrez toujours des problèmes sur une entrée spécifique, vous pouvez exécuter le script PowerShell suivant dans {{ fr.RDM }}.
1. Faire un clic droit sur l'entrée problématique, puis sélectionner ***Modifier – Modifier (Actions spéciales)***.
1. Dans la fenêtre ***Modifier – Sélection d'action spéciale***, sélectionner l'action spéciale générale ***Commande PowerShell personnalisée*** et cliquer sur ***OK***.
![Modifier – Sélection d'action spéciale](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2131.png)
1. Coller le script suivant dans le champ ***Commande*** :
   ```powershell
   $Connection.Terminal.AlgorithmSupportMode = "Custom"
   $Connection.Terminal.SshAlgorithmCipherList = "aes256-gcm@openssh.com=True;aes128-gcm@openssh.com=True;aes128-cbc=True;aes192-cbc=True;aes256-cbc=True;rijndael-cbc@lysator.liu.se=True;3des-cbc=True"
   $Connection.Terminal.SshAlgorithmHostKeyList = "ssh-dss=True"
   $Connection.Terminal.SshAlgorithmKexList = "diffie-hellman-group14-sha1=True;diffie-hellman-group-exchange-sha1=True;diffie-hellman-group1-sha1=True"
   $Connection.Terminal.SshAlgorithmMaclist = "hmac-sha1-96=True;hmac-sha1=True;hmac-md5-96=True;hmac-md5=True"
   $RDM.Save();
   ```
1. Cliquer sur ***OK***.
![Commande PowerShell personnalisée](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4758.png)
1. Une notification devrait confirmer le succès du script. Cliquer sur ***OK*** et retester votre session.
