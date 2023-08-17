---
title: Utilisation de l'OTP avec les entrées
---
Les entrées de {{ fr.RDM }} peuvent être configurées pour utiliser un ***Mot de passe à usage unique (OTP)*** lors du lancement.  

Dans la section ***Connexion - Mot de passe à usage unique*** d'une entrée, sélectionner une ***Source*** et une ***Utilisation*** pour le code OTP.  

![!!KB4046.png](https://webdevolutions.azureedge.net/docs/fr/kb/KB4046.png) 

Pour des informations sur la configuration de la <a href="#source">Source</a>, sélectionner dans la liste ou cliquer sur ce lien pour passer aux informations sur la configuration de l'<a href="#utilisation">Utilisation</a>

## Source <a name="source"></a>

L'identifiant de la ***Source*** est utilisé pour lier les entrées aux identifiants du compte OTP. 

### Aucun 

Par défaut, la ***Source*** OTP de l'entrée est réglée sur ***Aucun***. Dans cet état, l'entrée n'est pas liée à des identifiants OTP. 

### Demander 

L'option ***Demander*** ouvre une liste d'identifiants OTP disponibles à chaque lancement de session. 

![!!KB4051.png](https://webdevolutions.azureedge.net/docs/fr/kb/KB4051.png) 

### Hérité 

L'option ***Hérité*** remontera dans l'arborescence de navigation jusqu'à ce qu'elle ait accès à un identifiants OTP dans un dossier parent de la section ***Connexion - Mot de passe à usage unique***. 

{% snippet icon.badgeInfo %} 
Pour que l'héritage de la ***Source*** fonctionne, le paramètre ***Connexion - Mot de passe à usage unique - Source*** doit être défini sur ***Hérité*** pour chaque dossier parent jusqu'à ce qu'elle atteigne la configuration souhaitée. 
{% endsnippet %}
 
![!!KB4049.png](https://webdevolutions.azureedge.net/docs/fr/kb/KB4049.png) 

### Les identifiants de la session en cours 

***Les identifiants de la session en cours*** utiliseront les identifiants OTP définis dans la section de l'entrée ***Commun - Général - Identifiants***. Les options d'identifiants disponibles avec OTP sont [***Mes identifiants personnels***](/fr/rdm/windows/commands/file/my-account-settings/my-personal-credentials/), ***Mon compte privilégié*** et ***Intégré*** (ce mode est obsolète et non recommandé). 

{% snippet icon.badgeCaution %} 
Dans un environnement d'équipe, nous vous recommandons d'utiliser plutôt l'option <a href="#coffre">Lié (Coffre)</a> avec une entrée d'identifiant par ***Mot de passe à usage unique (OTP)***. 
{% endsnippet %}
 
![!!KB4047.png](https://webdevolutions.azureedge.net/docs/fr/kb/KB4047.png) 

### Lié (Coffre) <a name="coffre"></a>

Lier votre entrée pour utiliser une entrée d'identifiant à ***Mot de passe à usage unique (OTP)*** spécifique existant dans le même coffre. Il s'agit de la méthode privilégiée.  

![!!KB4050.png](https://webdevolutions.azureedge.net/docs/fr/kb/KB4050.png) 

### Personnalisé 

Choisir l'option ***Personnalisé*** pour enregistrer les identifiants OTP dans l'entrée elle-même.  

![!!KB4048.png](https://webdevolutions.azureedge.net/docs/fr/kb/KB4048.png) 

## Utilisation <a name="utilisation"></a>

L ***Utilisation*** du mot de passe à usage unique est une option permettant d'apposer le code OTP. Voici la liste des actions possibles :  

* ***Aucun*** : Aucune action n'est effectuée. Il s'agit du paramètre par défaut.  
* ***Ajouter à la fin du mot de passe*** : Appose l'OTP après le mot de passe.  
* ***Ajouter au début du mot de passe*** : Appose l'OTP avant le mot de passe.  
* ***Spécifique à la session*** : Si cette option est sélectionnée, l'OTP sera, si elle s'applique, utilisée d'une  manière spécifique à la session en cours de lancement. Cette option est spécifique à OpenVPN et SophosVPN.  
* ***Hérité*** : Remontera dans l'arborescence de navigation jusqu'à ce qu'il ait accès à un paramètre d'***Utilisation*** dans un dossier parent de la section ***Connexion - Mot de passe à usage unique***. Pour que l'héritage de l'***Utilisation*** fonctionne, la section ***Connexion - Mot de passe à usage unique - Utilisation*** doit être définie sur ***Hérité*** pour chaque dossier parent jusqu'à ce qu'elle atteigne la configuration souhaitée.  
* ***Ajouter à la fin du nom d'utilisateur*** : Appose l'OTP après le nom d'utilisateur.  
* ***Ajouter au début du nom d'utilisateur*** : Appose l'OTP avant le nom d'utilisateur.  

