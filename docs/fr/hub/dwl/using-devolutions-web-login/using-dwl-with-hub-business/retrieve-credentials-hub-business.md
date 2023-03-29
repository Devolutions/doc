---
eleventyComputed:
  title: Récupérer des identifiants de {{ fr.PHUB }} Business avec {{ fr.DWL }}
---
{% snippet icon.badgeInfo %} 
Vous avez besoin d&apos;entrées de site Web dans {{ fr.PHUB }} Business pour pouvoir récupérer leurs identifiants. Si ce n&apos;est pas le cas, commencez par [Ajouter une entrée de site Web avec {{ fr.DWL }}](/fr/hub/dwl/using-devolutions-web-login/using-dwl-with-hub-business/add-entry-hub-business-dwl/) . 
{% endsnippet %}
 
{{ fr.DWL }} facilite l&apos;accès à vos identifiants en faisant automatiquement correspondre les sites Web aux identifiants enregistrés dans les entrée de sites Web de {{ fr.PHUB }} Business. Il est également possible de filtrer vos entrées via {{ fr.DWL }} pour trouver manuellement vos identifiants.  

Après l&apos; [installation](/fr/hub/dwl/installation/) de {{ fr.DWL }} et son [couplage](/fr/hub/dwl/first-login-devolutions-web-login/hub-business/) avec {{ fr.PHUB }} Business, vous pouvez immédiatement utiliser l&apos;extension pour retrouver vos identifiants. Cependant, vous voudrez peut-être modifier certains des paramètres pour personnaliser votre expérience. Nous vous recommandons de suivre d&apos;abord les étapes de la section [Paramètres](#paramètres) : elles vous guideront dans la configuration de {{ fr.DWL }} en vous suggérant les meilleures pratiques pour récupérer les identifiants. Vous pouvez également sauter la configuration et passer directement à la [Récupération des identifiants](#récupération-des-identifiants) .  

## Paramètres 

1. Cliquer sur l&apos;icône de l&apos;extension {{ fr.DWL }} dans la barre d&apos;outils de votre navigateur, puis cliquer sur l&apos;icône des ***Paramètres*** .  
![Icône des Paramètres](/img/fr/hub/Hub2117.png) 
1. Cliquer sur ***Général*** dans la section ***Configuration*** .  
![Paramètres – Configuration – Général](/img/fr/hub/Hub2118.png) 
1. Dans l&apos;onglet ***Général*** , le paramètre ***Afficher l&apos;icône dans les champs*** est activé par défaut. S&apos;il n&apos;est pas activé, cocher la case à côté de l&apos;option. 
{% snippet icon.badgeNotice %} 
Avec cette option activée, un icône {{ fr.DWL }} sera affiché dans chaque champ d&apos;identifiants des sites Web que vous visitez. Il est ainsi plus facle de sélectionner l&apos;entrée correcte à partir de laquelle récupérer vos identifiants, en particulier lorsque plusieurs entrées sont disponibles. 
{% endsnippet %}
 
![Général – Afficher l'icône dans les champs](/img/fr/hub/Hub2119.png)  

4. Cliquer sur ***Enregistrer*** . 
1. Cliquer sur ***Hub Business*** dans la section des ***Sources de données*** .  
![Paramètres – Sources de données – Hub Business](/img/fr/hub/Hub2120.png) 
1. Dans l&apos;onglet ***Actions*** , activer l&apos;option ***Remplir automatiquement les champs d&apos;identifiants lors du chargement*** en cochant la case à côté. Avec ce paramètre activé, les identifiants seront automatiquement remplis lors du chargement d&apos;une page Web. Cela ne fonctionne que si vous n&apos;avez qu&apos;une seule entrée d&apos;identifiants pour un site Web donné.  
![Actions – Remplir automatiquement les champs d'identifiants lors du chargement](/img/fr/hub/Hub2121.png) 
{% snippet icon.badgeInfo %} 
Si l&apos;option ***Soumettre automatiquement le formulaire après la saisie*** est activée, les identifiants seront automatiquement soumis lorsque les champs sont remplis. Son activation est facultative, car il ne s&apos;agit pas d&apos;une pratique recommandée. 
{% endsnippet %}
 
7. Cliquer sur ***Enregistrer*** .  

Vous pouvez maintenant continuer à la [prochaine section](#récupération-des-identifiants) pour apprendre comment récupérer vos identifiants d&apos;entrée de site Web.  

## Récupération des identifiants 

{% snippet icon.badgeInfo %} 
Cette section est basée sur les étapes de configuration de {{ fr.DWL }} qui se trouvent dans la [section précédente](#paramètres) . Nous vous recommandons fortement de les suivre avant de poursuivre, puisque certaines fonctionnalités pourraient différer entre votre expérience et ce qui est indiqué ci-dessous. 
{% endsnippet %}
 
Vos identifiants peuvent être récupérés de {{ fr.PHUB }} Business automatiquement ou manuellement à partir de {{ fr.DWL }} . Suivez les étapes de la section qui correspond le mieux à vos besoins :  

* [Récupérer les identifiants automatiquement](#récupérer-les-identifiants-automatiquement)  
* [Récupérer les identifiants manuellement](#récupérer-les-identifiants-manuellement)  

### Récupérer les identifiants automatiquement 

1. Aller à la page de connexion du site Web. Cette page sera différente pour chaque site Web; cette section utilisera le site Web d&apos;Atlassian comme exemple. L&apos;un des deux scénarios suivants peut se produire : 
    1. S&apos;il n&apos;y a qu&apos;une seule entrée d&apos;identifiants pour ce site Web, les champs de connexion devraient déjà être remplis avec les identifiants. Si c&apos;est le cas, suivre le processus de connexion du site Web jusqu&apos;à la connexion au compte. L&apos;étape suivante peut alors être sautée.  
    ![Champs d'identifiants remplis automatiquement](/img/fr/hub/Hub2122.png) 
    1. S&apos;il y a plusieurs entrées d&apos;identifiants disponibles ou si vos identifiants ne sont pas remplis dans les champs, cliquer sur l&apos;icône de {{ fr.DWL }} dans le champ d&apos;identifiant et sélectionner l&apos;entrée qui contient les identifiants pour ce site Web. Si plusieurs entrées sont disponibles, il est possible de faire une recherche en utilisant la barre de ***Filtre*** . Suivre le reste du processus de connexion du site Web jusqu&apos;à la connexion au compte.  
    ![Filtrer et sélectionner les entrées](/img/fr/hub/Hub2123.png) 

### Récupérer les identifiants manuellement 

Selon les options que vous avez activées/désactivées, il est possible que vous deviez récupérer vos identifiants manuellement :  

1. Aller à la page de connexion du site Web. Cette page sera différente pour chaque site Web; cette section utilisera le site Web d&apos;Atlassian comme exemple. 
1. Cliquer sur l&apos;extension {{ fr.DWL }} dans la barre d&apos;outils de votre navigateur. Les entrées de site Web qui sont liées à ce site Web apparaitront. 
1. Cliquer sur l&apos;entrée de site Web qui contient les identifiants recherchés pour ce site Web. Si plusieurs entrées sont disponibles, il est possible de faire une recherche en utilisant la barre de ***Filtre*** .  
![Sélection de l'entrée](/img/fr/hub/Hub2125.png) 

{% snippet icon.badgeInfo %} 
Si nécessaire, vous pouvez également utiliser les icônes qui apparaissent lorsque vous passez la souris sur l&apos;entrée pour copier votre nom d&apos;utilisateur, copier votre mot de passe ou obtenir un aperçu de l&apos;entrée. 
{% endsnippet %}
 
4. Les identifiants seront transférés dans les champs d&apos;identifiants du site Web. Suivre le reste du processus de connexion du site Web jusqu&apos;à la connexion au compte.  
![Transfert des identifiants dans les champs correspondants](/img/fr/hub/Hub2124.png) 
