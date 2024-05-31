---
eleventyComputed:
  title: Exécution manuelle RunAs
---
{% snippet, "badgeInfo" %}
Cet article décrit la méthode manuelle d'utilisation de RunAs. Certains types prennent en charge les détails intégrés de RunAs disponibles. Voir [Exécuter en tant qu'un autre utilisateur](/rdm/mac/kb/rdm-windows/how-to-articles/run-as-another-user/).
{% endsnippet %}

## Paramètres

### Scénarios

Il existe deux scénarios principaux lors de l'utilisation de RunAs : le serveur d'authentification est accessible directement depuis votre machine ou vous avez besoin d'une authentification différée.

* ### Serveur d'authentification localement accessible

Ce scénario est pour lorsque vous êtes déjà authentifié sur un domaine/groupe de travail et que vous avez besoin de passer à un autre compte du même domaine/groupe de travail.

* ### Authentification différée

Ce scénario est pour lorsque il est impossible de se connecter à votre machine en utilisant l'autre ensemble d'identifiants. Par exemple, vous avez besoin de vous connecter au domaine d'un client en utilisant votre ordinateur portable qui est sur le domaine de votre entreprise. Cela nécessitera d'utiliser le paramètre /NETONLY de RunAs.

### Exemples

La commande RunAs est invoquée à partir d'une entrée du type ***Ligne de commande***. Créez l'entrée soit en appuyant sur la touche Insérer, soit en utilisant les menus. Sélectionnez le type ***Ligne de commande*** et entrez un nom pour celle-ci.

### Exemple 1 : Exécuter une invite de commande en tant qu'un autre utilisateur du même groupe de travail/domaine

1. Utiliser le bouton ellipsis pour parcourir la commande runas.exe, mais si vous êtes dans une source de données partagée et que la session est utilisée sur différents systèmes d'exploitation, il est préférable de taper "**%systemroot%\system32\runas.exe**" car cela fonctionnera sur tous.
1. Ajouter /user:$DOMAIN$\$USERNAME$, en le gardant à l'extérieur des guillemets. Noter l'utilisation de deux variables qui tireront la valeur appropriée d'autres champs de la même session.
1. Ajouter le nom de l'exécutable que vous souhaitez exécuter. L'encadrer de guillemets si le chemin complet contient des espaces. Dans notre cas, nous pouvons simplement ajouter ***CMD***.
![!!KB4573](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4573.png)
1. Spécifier vos identifiants dans l'onglet ***Hôte et Identifiant***. Noter que lorsque vous n'êtes pas partie d'un domaine, vous devriez entrer le nom de l'ordinateur dans le champ domaine.
![!!KB4574](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4574.png)
1. Dans l'onglet ***Événements***, vous devez définir une macro de frappe.
    * Définir le Délai Initial à la valeur la plus basse qui permettra à l'invite initiale d'apparaître. Sur la plupart des systèmes, 1 seconde est suffisante.
    * Dans le champ ***Macro de frappe***, entrer ce qui suit : $PASSWORD${ENTER}.
![!!KB4575](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4575.png)
6. Dans l'onglet ***Paramètres de sécurité***, vous devez cocher ***Autoriser le mot de passe dans la variable***.
![!!KB4576](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4576.png)
Lorsque vous exécutez votre session, une fenêtre d'invite de commande apparaît demandant le mot de passe pour l'utilisateur. La Macro de Frappe le remplira après le délai d'une seconde. Après cela, la fenêtre de commande qui fonctionne sous les différentes identifiants apparaît. Noter que le titre indique l'autre identité.
![!!KB4577](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4577.png)

### Exemple 2 : Exécuter SQL Server Management Studio en tant qu'utilisateur d'un autre domaine/groupe de travail pour utiliser l'Authentification Windows

Il y a des différences mineures avec l'Exemple 1, mais voici la procédure complète pour faciliter la lecture.

{% snippet, "badgeInfo" %}
Noter que la plupart de nos entrées prennent maintenant en charge NetOnly en tant que fonctionnalité intégrée.
{% endsnippet %}

1. Utiliser le bouton ellipsis pour parcourir la commande runas.exe, mais si vous êtes dans une source de données partagée et que la session sera utilisée sur différents systèmes d'exploitation, il est préférable de taper "**%systemroot%\system32\runas.exe**" car cela fonctionnera sur tous.
1. Ajouter /netonly /user:$DOMAIN$\$USERNAME$, en le gardant à l'extérieur des guillemets. Noter l'utilisation de deux variables qui tireront la valeur appropriée d'autres champs de la même session. Noter également l'utilisation du paramètre NetOnly, cela signale que les identifiants seront utilisés uniquement pour l'accès réseau.
1. Ajouter le nom de l'exécutable de Management Studio et ses paramètres. Tout cela doit être dans les mêmes guillemets doubles
    * SQL Server Management studio se trouve à **C:\Program Files (x86)\Microsoft SQL Server\110\Tools\Binn\ManagementStudio\Ssms.exe** sur la plupart des machines, adapter à votre situation si ce n'est pas le même.
    * Mes paramètres ressemblent à ceci : -S sql.windjammer.loc -E -S est pour le nom du serveur, -E est pour utiliser l'authentification windows, vous pouvez même spécifier la base de données en utilisant -d __DB_NAME__ (i.e. -d rdm).

Le résultat est **C:\Program Files (x86)\Microsoft SQL Server\110\Tools\Binn\ManagementStudio\Ssms.exe -S sql.windjammer.loc -E**.

4. Décocher ***Utiliser l'exécution Shell*** (cela doit être fait pour la plupart des applications Windows)
![!!KB4578](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4578.png)
1. Spécifier vos identifiants dans l'onglet ***Hôte et Identifiant***. Noter que lorsque vous n'êtes pas partie d'un domaine, vous devriez entrer le nom de l'ordinateur dans le champ domaine.
![!!KB4579](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4579.png)
1. Dans l'onglet Événements, vous devez définir une macro de frappe.
    * Définir le Délai Initial à la valeur la plus basse qui permettra à l'invite initiale d'apparaître. Sur la plupart des systèmes, 1 seconde est suffisante.
    * Dans le champ Macro de frappe, entrer ce qui suit : $PASSWORD${ENTER} Pour plus d'informations, veuillez consulter Macro de Frappe Automatique.
![!!KB4580](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4580.png)
7. Dans l'onglet avancé, vous devez cocher Activer le mot de passe dans la variable.
![!!KB4581](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4581.png)
Exécuter la session et attendre que Management studio apparaisse, les utilisateurs attentifs remarqueront qu'il semble que vous fonctionnez sous vos identifiants locaux à cause de cela.
![!!KB4582](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4582.png)
Une simple requête prouvera que cela a fonctionné, effectuer une requête SELECT SUSER_NAME().
![!!KB4583](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4583.png)
