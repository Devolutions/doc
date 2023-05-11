---
title: Devolutions Localizer
---
Devolutions Localizer est notre outil de traduction personnalisé pour nos applications. Nous vous invitons à contribuer à notre communauté Devolutions en traduisant nos outils pour faire bénéficier d'autres utilisateurs comme vous dans le monde.  

Téléchargez l'outil de traduction [Devolutions Localizer](https://devolutions.net/fr/localizer) pour commencer!  

{% snippet icon.badgeInfo %} 
Un [Compte Devolutions](/fr/cloud/devolutions-account/create-devolutions-account/) gratuit est nécessaire pour se connecter à l'outil Devolutions Localizer. 
{% endsnippet %}
 
### Traduction 

1. Dans ***File – Languages*** , sélectionner la ou les langue(s) à traduire, puis cliquer sur ***Ok*** .  
![File – Languages](/img/fr/rdm/windows/RDMWin2062.png) 
1. Cliquer sur le bouton ***Translate*** .  
![Translate](/img/fr/rdm/windows/RDMWin2063.png) 
1. Choisir le fichier à partir duquel vous souhaitez effectuer la traduction dans la liste déroulante ***File*** .  
![Sélection du fichier](/img/fr/rdm/windows/RDMWin2064.png) 
1. Dans la partie inférieure, vous pourrez filtrer et passer en revue le contenu déjà traduit ou nécessitant une traduction. Des informations sur chaque ligne de ***Ressource*** sont disponibles dans les différentes colonnes. Le champ ***Status*** peut prendre différentes valeurs en fonction de l'avancement de la traduction :  

* ***Changed*** : Le texte dans sa langue originale a été modifié par Devolutions. Un traducteur local doit revoir la traduction localisée et y apporter des modifications si nécessaire. 
* ***New*** : Le texte n'a pas encore été traduit dans la langue cible. 
* ***Translated*** : Le texte a déjà été traduit dans la langue cible. 
* ***Under review*** : Ce statut est destiné à aider les traducteurs à communiquer entre eux lorsqu'ils ne sont pas certains de la traduction et/ou de l'utilisation d'une valeur particulière. Grâce au champ ***Comment*** , les traducteurs peuvent également rédiger des notes de traduction. 
* ***Use original*** : Le texte ne doit pas être traduit, il doit être conservé dans sa langue d'origine. Cela peut s'appliquer, par exemple, aux noms de produits ou aux noms de systèmes tiers.  
![Contenu à traduire ou traduit](/img/fr/rdm/windows/RDMWin2065.png) 

5. Pour commencer, sélectionner un ligne de ***Ressource*** dans la liste inférieure et cliquer sur ***Translate*** . Le texte original apparaîtra dans le champ ***Original*** .  
![Sélection d'une ligne de Ressource](/img/fr/rdm/windows/RDMWin2066.png) 

{% snippet icon.badgeCaution %} 
En traduisant du texte, il est possible de rencontrer l'esperluette (« & ») utilisée d'une manière différente de sa signification habituelle « et ». Il ne s'agit pas d'une erreur : l'esperluette entraîne le soulignement du caractère situé immédiatement à sa droite lors de son affichage. Veuillez en faire la vérification avant de traduire.  

Par exemple, « P&ropriétés » sera affiché comme « P r opriétés » avec un « r » souligné. 
{% endsnippet %}
 

6. Saisir la traduction du texte dans le champ de droite. 
{% snippet icon.badgeInfo %} 
Un bouton ***Bing*** est disponible pour vous aider à traduire votre texte. 
{% endsnippet %}
 
![Traduction](/img/fr/rdm/windows/RDMWin2067.png) 

7. Lorsque vous avez terminé, changer le ***Status*** de cette ressource à ***Translated*** et cliquez sur le bouton ***Save Changes*** . Cela enverra votre traduction à notre serveur et elle sera déployée avec la prochaine version de nos applications.  
![Changer le statut et sauvegarder les changements](/img/fr/rdm/windows/RDMWin2068.png) 

### Aperçu 

Vous pouvez prévisualiser vos modifications dans {{ fr.RDM }} avant la publication ou afficher celles déjà en place mais pas encore publiées.  

1. Fermer {{ fr.RDM }} . 
1. Dans le ***Dashboard*** de Devolutions Localizer, cliquer sur ***Deploy – Generate & Start*** pour afficher vos modifications ou sur ***Deploy – Start (use existing)*** pour afficher les modifications non publiées.  

Suivez les étapes suivantes si vous voulez changer la langue de votre application {{ fr.RDM }} afin de refléter celle que vous traduisiez:  

1. Accéder à ***Fichier – Options – Interface utilisateur*** (en anglais, ***File – Options – User Interface*** ). 
1. Dans la liste déroulante ***Langue*** (en anglais, ***Language*** ), sélectionner la langue et cliquez sur ***OK*** . 
1. Redémarrer l'application pour que cela prenne effet. 

### Raccourcis clavier 

Devolutions Localizer propose également plusieurs raccourcis clavier pour accélérer le processus de traduction:  

* Ctrl + D : Définir le statut ( ***Status*** ) de la ressource actuelle à ***Translated*** . 
* Ctrl + E : Définir le statut ( ***Status*** ) de la ressource actuelle à ***Use original*** . Cela ignore tout texte de traduction et affiche la valeur d'origine telle quelle. 
* Ctrl + Bas : Passer à la ressource suivante. 
* Ctrl + Haut : Revenir à la ressource précédente. 
* Ctrl + B : Demande une traduction Bing pour la ressource actuelle. 
* Ctrl + S : Enregistrer toutes les modifications en attente. 
* Ctrl + F : Activer/désactiver le filtrage. 

