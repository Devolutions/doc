---
eleventyComputed:
  title: Problèmes de connexion Cisco AnyConnect
---
Cisco AnyConnect rencontre des problèmes de connexion.
### L'entrée cisco anyconnect est manquante dans la nouvelle fenêtre d'entrée
Vérifier que l'Add-on est activé en allant sous ***Outils – Gestionnaire d'Add-on – VPN***, sélectionner ***Cisco AnyConnect VPN Client*** et cliquer sur ***Activer l'Add-on***.

![!!KB4832](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4832.png)

### Le vpn ne démarre pas
1. Vérifier que le chemin d'installation de votre Cisco AnyConnect VPN Client est valide en allant sous ***Fichier – Paramètres – Chemins – Configurer le Chemin d'Installation – Applications – VPN***, sélectionner ***Cisco AnyConnect VPN Client*** et utiliser le bouton ellipsis pour choisir le bon chemin d'installation.
{% snippet, "badgeInfo" %}
Cette étape s'applique uniquement si vous n'utilisez pas le chemin d'installation par défaut **C:\Program Files (x86)\Cisco\Cisco Anyconnect VPN Client**.
{% endsnippet %}

![!!KB4833](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4833.png)

2. Exécuter {{ fr.RDM }} avec des permissions élevées (exécuter en tant qu'administrateur).

### Le mot de passe n'est pas envoyé lors de la tentative d'établissement d'une connexion
1. Vérifier que la dernière version de CiscoAnyConnect est installée.
1. Aller dans les propriétés de votre entrée Cisco AnyConnect VPN Client, sous ***Connexion – Général***, et changer la valeur de ***Attendre avant identification*** pour correspondre au temps nécessaire pour charger complètement votre VPN sur votre machine.
![!!KB4834](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4834.png)
1. Essayer d'activer et de désactiver l'UAC dans Windows.
1. Tester la ligne de commande Cisco (CLI) en dehors de {{ fr.RDM }} pour voir si le même problème se produit.
