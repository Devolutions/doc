---
eleventyComputed:
  title: Récupérer des identifiants avec {{ fr.DWL }}
---
{% snippet icon.badgeInfo %} 
Vous avez besoin d&apos;entrées de site Web dans {{ fr.DPS }} pour pouvoir récupérer leurs identifiants. Si ce n&apos;est pas le cas, commencez par [Ajouter une entrée de site Web avec {{ fr.DWL }}](/fr/server/dwl/using-devolutions-web-login/add-website-entry-dwl/) . 
{% endsnippet %}
 
{{ fr.DWL }} facilite l&apos;accès à vos identifiants en faisant automatiquement correspondre les sites Web aux identifiants enregistrés dans les entrée de sites Web de {{ fr.DPS }} . Il est également possible de filtrer vos entrées via {{ fr.DWL }} pour trouver manuellement vos identifiants.  

Après l&apos; [installation](https://helpserver.devolutions.net/fr/devolutionsweblogin_installation.html) de {{ fr.DWL }} et son [couplage](/fr/server/dwl/first-login-dwl/) avec {{ fr.DPS }} , vous pouvez immédiatement utiliser l&apos;extension pour retrouver vos identifiants. Cependant, vous voudrez peut-être modifier certains des paramètres pour personnaliser votre expérience. Nous vous recommandons de suivre d&apos;abord les étapes de la section Paramètres : elles vous guideront dans la configuration de {{ fr.DWL }} en vous suggérant les meilleures pratiques pour récupérer les identifiants. Vous pouvez également sauter la configuration et passer directement à la Récupération des identifiants .  

## Paramètres 

1. Cliquer sur l&apos;icône de l&apos;extension {{ fr.DWL }} dans la barre d&apos;outils de votre navigateur, puis cliquer sur l&apos;icône des ***Paramètres*** .  
![Icône des Paramètres](/img/fr/server/ServerOp2034.png)  
1. Cliquer sur ***Général*** dans la section ***Configuration*** .  
![Paramètres – Configuration – Général](/img/fr/server/ServerOp2035.png)  
1. Dans l&apos;onglet ***Général*** , le paramètre ***Afficher l&apos;icône dans les champs*** est activé par défaut. S&apos;il n&apos;est pas activé, cocher la case à côté de l&apos;option. 
{% snippet icon.badgeNotice %} 
Avec cette option activée, un icône {{ fr.DWL }} sera affiché dans chaque champ d&apos;identifiants des sites Web que vous visitez. Il est ainsi plus facle de sélectionner l&apos;entrée correcte à partir de laquelle récupérer vos identifiants, en particulier lorsque plusieurs entrées sont disponibles. 
{% endsnippet %}
  
![Général – Afficher l'icône dans les champs](/img/fr/server/ServerOp2036.png)  

4. Cliquer sur ***Enregistrer*** . 
1. Cliquer sur ***{{ fr.DPS }}*** dans la section des ***Sources de données*** .  
![Paramètres – Sources de données – Devolutions Server](/img/fr/server/ServerOp2037.png)  
1. Dans l&apos;onglet ***Actions*** , activer les options ***Retrouver les identifiants automatiquement lors du chargement de la page*** et ***Remplir automatiquement les champs d&apos;identifiants lors du chargement*** en cochant leurs cases respectives. Ci-dessous se trouve un description de chaque option :  

* ***Retrouver les identifiants automatiquement lors du chargement de la page*** (activé par défaut) : Permet à {{ fr.DWL }} de rechercher automatiquement les identifiants disponibles lors du chargement d&apos;une page Web. 
* ***Remplir automatiquement les champs d&apos;identifiants lors du chargement*** (désactivé par défaut) : Les champs d&apos;identifiants sont automatiquement remplis lors du chargement d&apos;une page Web. Cela ne fonctionne que s&apos;il n&apos;y a qu&apos;une seule entrée d&apos;identifiants pour un site Web donné.  
![Actions – Retrouver et remplir automatiquement les identifiants lors du chargement](/img/fr/server/ServerOp2038.png)  

{% snippet icon.badgeInfo %} 
Si l&apos;option ***Soumettre automatiquement le formulaire après la saisie*** est activée, les identifiants seront automatiquement soumis lorsque les champs sont remplis. Son activation est facultative, car il ne s&apos;agit pas d&apos;une pratique recommandée. 
{% endsnippet %}
 
7. Cliquer sur ***Enregistrer*** .   

Vous pouvez maintenant continuer à la prochaine section pour apprendre comment récupérer vos identifiants d&apos;entrée de site Web.  

## Récupération des identifiants 

{% snippet icon.badgeInfo %} 
Cette section est basée sur les étapes de configuration de {{ fr.DWL }} qui se trouvent dans la section précédente . Nous vous recommandons fortement de les suivre avant de poursuivre, puisque certaines fonctionnalités pourraient différer entre votre expérience et ce qui est indiqué ci-dessous. 
{% endsnippet %}
 
Vos identifiants peuvent être récupérés de {{ fr.DPS }} automatiquement ou manuellement à partir de {{ fr.DWL }} . Suivez les étapes de la section qui correspond le mieux à vos besoins : 

### Récupérer les identifiants automatiquement 

1. Aller à la page de connexion du site Web. Cette page sera différente pour chaque site Web; cette section utilisera le site Web d&apos;Atlassian comme exemple. L&apos;un des deux scénarios suivants peut se produire : 
    1. S&apos;il n&apos;y a qu&apos;une seule entrée d&apos;identifiants pour ce site Web, les champs de connexion devraient déjà être remplis avec les identifiants. Si c&apos;est le cas, suivre le processus de connexion du site Web jusqu&apos;à la connexion au compte. L&apos;étape suivante peut alors être sautée. 
    ![Champs d'identifiants remplis automatiquement](/img/fr/server/ServerOp2040.png)  
    1. S&apos;il y a plusieurs entrées d&apos;identifiants disponibles ou si vos identifiants ne sont pas remplis dans les champs, cliquer sur l&apos;icône de {{ fr.DWL }} dans le champ d&apos;identifiant et sélectionner l&apos;entrée qui contient les identifiants pour ce site Web. Si plusieurs entrées sont disponibles, il est possible de faire une recherche en utilisant la barre de ***Filtre*** . Suivre le reste du processus de connexion du site Web jusqu&apos;à la connexion au compte. 
    ![Filtrer et sélectionner les entrées](/img/fr/server/ServerOp2039.png)  

### Récupérer les identifiants manuellement 

Selon les options que vous avez activées/désactivées, il est possible que vous deviez récupérer vos identifiants manuellement :  

1. Aller à la page de connexion du site Web. Cette page sera différente pour chaque site Web; cette section utilisera le site Web d&apos;Atlassian comme exemple. 
1. Cliquer sur l&apos;extension {{ fr.DWL }} dans la barre d&apos;outils de votre navigateur. Les entrées de site Web qui sont liées à ce site Web apparaitront. 
1. Cliquer sur l&apos;entrée de site Web qui contient les identifiants recherchés pour ce site Web. Si plusieurs entrées sont disponibles, il est possible de faire une recherche en utilisant la barre de ***Filtre*** .  
![Sélection de l'entrée](/img/fr/server/ServerOp2041.png)  

{% snippet icon.badgeInfo %} 
Si nécessaire, vous pouvez également utiliser les icônes qui apparaissent lorsque vous passez la souris sur l&apos;entrée pour copier votre nom d&apos;utilisateur, copier votre mot de passe ou obtenir un aperçu de l&apos;entrée. 
{% endsnippet %}
 
4. Les identifiants seront transférés dans les champs d&apos;identifiants du site Web. Suivre le reste du processus de connexion du site Web jusqu&apos;à la connexion au compte.  
![Transfert des identifiants dans les champs correspondants](/img/fr/server/ServerOp2042.png)  