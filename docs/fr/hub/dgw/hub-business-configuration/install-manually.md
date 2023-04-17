---
eleventyComputed:
  title: Installation manuelle
  description: Les instructions suivantes expliquent comment installer manuellement {{ fr.DGW }} via {{ fr.HUBB }}.
---
Les instructions suivantes expliquent comment installer manuellement {{ fr.DGW }} via {{ fr.HUBB }}.

## Étapes de l'installation manuelle

{% snippet icon.badgeCaution %} 
Cette méthode ne fonctionne que pour Windows. 
{% endsnippet %}
 
1. Se connecter avec un compte administrateur {{ fr.HUBB }}. 
1. Accéder à l'onglet ***Administration*** sur la gauche.  

1. Cliquer sur {{ fr.DGW }}, qui se trouve sous la section ***Gestion***.  

1. Cliquer sur le bouton ***Ajouter*** ( ***+*** ) en haut à droite. 

1. Sélectionner ***Installation manuelle*** dans la liste déroulante.  

1. Télécharger ***l'installateur*** du {{ fr.DGW }} et l'exécuter.  

1.<a name="7"></a> Cliquer sur ***Générer la clé publique de Gateway et la télécharger***. Cette clé est unique pour le compte {{ fr.HUBB }} et ne peut être générée qu'une seule fois. Si elle a déjà été générée, la clé peut être téléchargée à nouveau, si nécessaire.  

{% snippet icon.badgeInfo %} 
Le programme d'installation doit être exécuté sur le serveur hébergeant le {{ fr.DGW }}. 
{% endsnippet %}
 
8. Cliquer sur ***Suivant***.  

1. Une fois que le chemin d'installation souhaité est sélectionné, cliquer sur ***Suivant***.  

1. Sélectionner ***Configurer maintenant***, puis cliquer sur ***Suivant***.  

1. Saisir l'URI d'accès pour le {{ fr.DGW }}. Le port par défaut est 443, mais il peut être modifié. Cliquer sur ***Suivant***.  

1. Les ports HTTP(S) et TCP par défaut sont respectivement 7171 et 8181, mais ils peuvent être modifiés. En outre, si un proxy inverse n'est pas utilisé, l'***écouteur HTTP*** doit avoir le même port que l'***URI*** d'accès.  

1. Après avoir cliqué sur le bouton des points de suspension du haut, sélectionner un fichier PFX ou un fichier Certificat, puis saisir le mot de passe correspondant. (Si l'écouteur n'est pas en ***HTTPS*** ou si un reverse proxy est utilisé, sauter cette étape)  

1. Cliquer sur les points de suspension et sélectionner la ***Clé publique*** qui a été générée à l'<a href="#7">étape 7</a>.  

1. Sélectionner l'option ***Automatiquement*** pour le démarrage du service et cliquer sur ***Suivant***.  

1. Cet écran affiche un résumé des chemins/paramètres actuels. Il est possible de revenir en arrière et de les modifier en cliquant sur le bouton ***Précédent***. Si les paramètres sont exacts, cliquer sur ***Suivant***.  

1. Cliquer sur ***Installer***.  

1. Cliquer sur ***Terminer*** lorsque l'installation est terminée. 
1. Retourner à la page ***Administration - Devolutions Gateway*** dans {{ fr.HUBB }}. 
1. Saisir les informations correctes.  

1. En cochant la case ***Par défaut***, ce {{ fr.DGW }} sera celui sélectionné si aucun n'est spécifié ou si ***Par défaut*** est choisi lors de la connexion.  

1. Tester si le {{ fr.DGW }} est accessible en cliquant sur ***Test Connection***.  

1. Cliquer sur le bouton ***Ajouter*** pour relier votre installation {{ fr.DGW }} à votre {{ fr.HUBB }}.  

1. Un rectangle affichera les informations pour chaque {{ fr.DGW }} Hub.  

{% snippet icon.badgeInfo %} 
Visiter [Configuration dans {{ fr.RDM }} ](/fr/hub/dgw/rdm-configuration/) pour en savoir plus sur la liaison entre {{ fr.RDM }} et {{ fr.DGW }}. 
{% endsnippet %}
