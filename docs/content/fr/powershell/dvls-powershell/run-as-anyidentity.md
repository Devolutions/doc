---
eleventyComputed:
  title: Exécuter en tant que {{ fr.ANYID }} scripts PowerShell avec contexte d'exécution
  description: Ce sujet couvrira comment exécuter divers scripts PowerShell appelant les fournisseurs {{ fr.ANYID }} dans {{ fr.DVLS }} dans un certain contexte.
---
L'option ***Exécuter en tant que*** vous permet d'exécuter des scripts de fournisseur {{ fr.ANYID }} dans différents contextes et lance le planificateur pour ce faire. Cela peut être fait sur une machine locale ou à distance, ce qui est utile pour découvrir ce que le script essaie d'accomplir, qu'il s'agisse de réaliser certaines actions ou d'accéder à certains fichiers.
{% snippet icon.badgeHelp %}
{{ fr.DVLS }} inclut déjà des modèles de scripts personnalisés pour Azure Key Vault et les comptes Windows [scripts personnalisés](/server/kb/how-to-articles/create-anyidentity-pam-provider/#import-an-anyidentity-template).
{% endsnippet %}

## Exécuter en tant que script PowerShell dans divers contextes
1. Dans {{ fr.DVLS }}, aller à ***Administration*** – ***Accès privilégié*** – ***Fournisseurs***.
1. Cliquer sur ***Ajouter***.
![Bouton Ajouter](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0149.png)
1. Cliquer sur l'onglet ***{{ fr.ANYID }}***.
![Onglet {{ fr.ANYID }}](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0150.png)
1. Sélectionner un fournisseur PAM et cliquer sur ***Continuer***.
1. Cliquer sur l'onglet ***Exécuter en tant que***.
![Onglet Exécuter en tant que](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0151.png)
1. Dans le menu déroulant ***Identifiant***, sélectionner soit ;
    * Par défaut : Exécute le script avec la configuration actuelle du planificateur.
    * Personnalisé : Exécute le script avec un ***Nom d'utilisateur***, ***Mot de passe*** et ***Nom d'hôte*** spécifiés.
   {% snippet icon.shieldInfo %}
   Il est conseillé de choisir ou de créer un utilisateur avec moins de permissions pour tester un script.
   {% endsnippet %}

1. Cliquer sur ***Sauvegarder*** pour fermer cette fenêtre et enregistrer les modifications.

### Vérifier les hôtes de confiance
Si ***Exécuter en tant que*** ne pointe pas vers un hôte de confiance, la configuration ne fonctionnera pas.

Voici la ligne de commande pour récupérer les hôtes de confiance : `Get-Item "WSMan:localhost\Client\TrustedHosts"`

Voici la ligne de commande pour mettre à jour les hôtes de confiance de la machine locale avec une certaine valeur : `Set-Item 'WSMan:localhost\Client\TrustedHosts' -Value '*' -Force`
{% snippet icon.shieldCaution %}
Assurez-vous de remplacer le `*` dans la commande ci-dessus. Si laissé tel quel, le `*` agit comme un joker, ce qui ferait devenir de confiance tous les hôtes distants.
{% endsnippet %}

{% snippet icon.badgeHelp %}
Lire le sujet sur les [hôtes de confiance](/server/kb/how-to-articles/winrm-trustedhostslist/) pour plus d'informations.
{% endsnippet %}