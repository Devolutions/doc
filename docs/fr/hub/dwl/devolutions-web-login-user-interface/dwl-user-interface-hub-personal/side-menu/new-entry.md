---
title: Nouvelle entrée
---
Le bouton ***Nouvelle entrée*** n&apos;est que disponible dans l&apos;onglet [***Correspondant***](/fr/hub/dwl/devolutions-web-login-user-interface/dwl-user-interface-hub-personal/side-menu/#onglet-correspondant) , qui est l&apos;onglet sélectionné à l&apos;ouverture de l&apos;extension, ou lorsque vous parcourez les entrées dans l&apos;onglet [***Toutes les entrées***](/fr/hub/dwl/devolutions-web-login-user-interface/dwl-user-interface-hub-personal/side-menu/#onglet-toutes-les-entrées) . Vous pouvez choisir de crééer une nouvelle entrée de ***Site Web*** , de ***Carte de crédit*** , de ***Contact*** ou de ***Note sécurisée*** .  
![Sélection du type de nouvelle entrée](/img/fr/hub/Hub2091.png) 

Lorsque le type d&apos;entrée est sélectionné, un nouvel onglet est ouvert dans votre navigateur qui vous permet d&apos;ajouter une entrée de ce type dans {{ fr.PHUB }} Personal via {{ fr.DWL }} .  

Lorsque {{ fr.PHUB }} Personal est utilisé comme source de données, la configuration de base de l&apos;entrée est exécutée dans l&apos;onglet ***Général*** , mais des paramètres supplémentaires sont aussi disponibles dans d&apos;autres onglets. Vous trouverez ci-dessous un exemple des paramètres de l&apos;onglet ***Général*** lors de la création d&apos;une entrée de site Web.  
![Nouvelle entrée - Site Web (onglet Général)](/img/fr/hub/Hub2092.png) 

Les tableaux ci-dessous répertorient tous les champs/paramètres disponibles dans la fenêtre ***Nouvelle entrée - Site Web*** . Les différentes sections et sous-sections représentent respectivement les types d&apos;entrées et les onglets du menu de gauche.  

## Entrée de site Web 

### Général 

<table>
	<tr>
		<th>
CHAMP/PARAMÈTRE 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Nom 
		</td>
		<td>
Entrer un nom pour votre entrée. Ce champ est rempli automatiquement par {{ fr.DWL }} , mais il peut tout de même être modifié. 
		</td>
	</tr>
	<tr>
		<td>
Dossier 
		</td>
		<td>
Saisir le nom du dossier dans lequel votre nouvelle entrée sera stockée dans {{ fr.PHUB }} Personal. 
		</td>
	</tr>
	<tr>
		<td>
Sélectionner un dossier 
		</td>
		<td>
Sélectionner dans l&apos;arborescence le dossier dans lequel votre nouvelle entrée sera stockée dans {{ fr.PHUB }} Personal. Vous pouvez aussi créer un nouveau dossier et modifier ou supprimer des dossiers existants. 
		</td>
	</tr>
	<tr>
		<td>
Hôte 
		</td>
		<td>

Dans la liste déroulante, sélectionner la manière dont {{ fr.DWL }} récupérera l&apos;hôte entre ***Personnalisé*** , ***Liés (coffre)*** ou ***Hérité*** . Si vous sélectionnez ***Personnalisé*** , le champ ***URL*** (voir ci-dessous) apparaîtra. Si vous sélectionnez ***Liés (coffre)*** , une liste déroulante apparaîtra dans laquelle vous pourrez sélectionner l&apos;hôte. 
		</td>
	</tr>
	<tr>
		<td>
URL 
		</td>
		<td>
Saisir l&apos;URL de la page de connexion du site Web. Ce champ est rempli automatiquement par {{ fr.DWL }} , mais il peut tout de même être modifié. 
		</td>
	</tr>
	<tr>
		<td>
Identifiants 
		</td>
		<td>
Dans la liste déroulante, sélectionner ***Personnalisé*** , ***Lié (Coffre)*** , ***Hérité*** , ***Mes identifiants personnels*** ou ***Aucun*** pour spécifier à {{ fr.DWL }} la façon de récupérer vos identifiants. Certaines de ces options vous donnent accès à des paramètres supplémentaires. 
		</td>
	</tr>
	<tr>
		<td>
Nom d&apos;utilisateur 
		</td>
		<td>
Saisir le nom d&apos;utilisateur utilisé pour se connecter au site Web.  

Ce champ n&apos;est disponible que si ***Personnalisé*** est sélectionné dans la liste déroulante ***Identifiants*** . 
		</td>
	</tr>
	<tr>
		<td>
Domaine 
		</td>
		<td>
Saisir le domaine du site Web.  

Ce champ n&apos;est disponible que si ***Personnalisé*** est sélectionné dans la liste déroulante ***Identifiants*** . 
		</td>
	</tr>
	<tr>
		<td>
Mot de passe 
		</td>
		<td>
Saisir le mot de passe utilisé pour se connecter au site Web. Le mot de passe sera caché. Sous le champ se trouve un indicateur de force pour votre mot de passe.  

Ce champ n&apos;est disponible que si ***Personnalisé*** est sélectionné dans la liste déroulante ***Identifiants*** . 
		</td>
	</tr>
	<tr>
		<td>
Afficher/Masquer le mot de passe 
		</td>
		<td>
Afficher ou masquer le mot de passe qui a été saisi.  

Ce champ n&apos;est disponible à côté du champ ***Mot de passe*** que si ***Personnalisé*** est sélectionné dans la liste déroulante ***Identifiants*** . 
		</td>
	</tr>
	<tr>
		<td>
Générateur de mots de passe 
		</td>
		<td>
Ouvrir le ***Générateur de mots de passe*** qui permet de créer un mot de passe fort et sécurisé adapté à vos besoins et aux exigences du site Web. 
		</td>
	</tr>
	<tr>
		<td>
Type de correspondance 
		</td>
		<td>
Sélectionner comment l&apos;URL saisie est comparée et mise en correspondance avec l&apos;URL du site Web. Choisir entre ***Par défaut*** , ***Domaine de base*** , ***Comparer le regex avec le domaine de l&apos;URL*** , ***Comparer le regex avec l&apos;URL complète*** , ***Hôte*** , ***Commencer par*** , ***Exact*** ou ***Jamais*** . 
		</td>
	</tr>
	<tr>
		<td>
Devolutions Web Login 
		</td>
		<td>
Dans la liste déroulante, sélectionner entre ***Par défaut*** , ***Désactivé*** ou ***Activé*** . Si cette option est désactivée, vos identifiants pour cette entrée ne seront pas suggérés lors de l&apos;accès à ce site Web particulier. Il est donc recommandé de laisser cette option activée. 
		</td>
	</tr>
</table>

### Connexion 

<table>
	<tr>
		<th>
CHAMP/PARAMÈTRE 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Authentification 
		</td>
		<td>

Sélectionner l&apos;authentification ***Formulaire*** ou ***Basic*** en fonction du site Web. La valeur par défaut est ***Formulaire*** et, dans la plupart des cas, il n&apos;est pas nécessaire de la modifier. 
		</td>
	</tr>
	<tr>
		<td>
Remplissage automatique des identifiants 
		</td>
		<td>
Activer cette option si vous voulez que {{ fr.DWL }} remplisse automatiquement vos identifiants lors du chargement de la page de connexion du site Web. Cela ne s&apos;appliquera qu&apos;à cette entrée spécifique.  

L&apos;option ***Remplissage automatique des identifiants*** est similaire à l&apos;option ***Remplir automatiquement les champs d&apos;identifiants lors du chargement*** dans les [***Paramètres***](/fr/hub/dwl/settings/) de {{ fr.DWL }} , à la différence que la première s&apos;applique uniquement à l&apos;entrée spécifique et que la seconde s&apos;applique à toutes vos entrées. Notez que le paramètre {{ fr.DWL }} prévaut sur le ***Remplissage automatique des identifiants*** . 
		</td>
	</tr>
	<tr>
		<td>
Soumission automatique 
		</td>
		<td>
Activer cette option si vous voulez que {{ fr.DWL }} soumette automatiquement vos identifiants après qu&apos;ils soient remplis dans les champs. Cela ne s&apos;appliquera qu&apos;à cette entrée spécifique.  

L&apos;option ***Soumission automatique*** est similaire à l&apos;option ***Soumettre automatiquement le formulaire après la saisie*** dans les [***Paramètres***](/fr/hub/dwl/settings/) de {{ fr.DWL }} , à la différence que la première s&apos;applique uniquement à l&apos;entrée spécifique et que la seconde s&apos;applique à toutes vos entrées. Notez que le paramètre {{ fr.DWL }} prévaut sur la ***Soumission automatique*** . 
		</td>
	</tr>
	<tr>
		<td>
Encoder les identifiants en URL 
		</td>
		<td>
Activer cette option pour encoder les identifiants dans l&apos;URL du site Web.  

Cette option n&apos;est disponible que si ***Basic*** est sélectionné dans la liste déroulante ***Authentification*** . 
		</td>
	</tr>
	<tr>
		<td>
Délai de remplissage automatique 
		</td>
		<td>
Activer cette option pour appliquer un délai avant que {{ fr.DWL }} ne remplisse automatiquement vos identifiants.  

Cette option n&apos;est disponible que si ***Formulaire*** est sélectionné dans la liste déroulante ***Authentification*** . 
		</td>
	</tr>
</table>

### URLs équivalentes 

<table>
	<tr>
		<th>
CHAMP/PARAMÈTRE 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Ajouter 
		</td>
		<td>
Ajouter une nouvelle URL équivalente. 
		</td>
	</tr>
	<tr>
		<td>
Site Web 
		</td>
		<td>

Saisir une URL qui mène à la même page ou qui est équivalente à celle du champ ***URL*** . 
		</td>
	</tr>
	<tr>
		<td>
Type de comparaison 
		</td>
		<td>
Sélectionner comment l&apos;URL saisie est comparée et mise en correspondance avec l&apos;URL du site Web. Choisir entre ***Par défaut*** , ***Domaine de base*** , ***Comparer le regex avec le domaine de l&apos;URL*** , ***Comparer le regex avec l&apos;URL complète*** , ***Hôte*** , ***Commencer par*** , ***Exact*** ou ***Jamais*** . 
		</td>
	</tr>
</table>

### Contrôles personnalisés 

<table>
	<tr>
		<th>
CHAMP/PARAMÈTRE 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Ajouter 
		</td>
		<td>

Ajouter un nouveau ***Contrôle personnalisé*** . 
		</td>
	</tr>
	<tr>
		<td>
ID de la forme 
		</td>
		<td>
Saisir l&apos; ***ID de la forme*** du site Web de connexion. 
		</td>
	</tr>
	<tr>
		<td>
ID du contrôle 
		</td>
		<td>
Saisir l&apos; ***ID du contrôle*** du site Web de connexion. 
		</td>
	</tr>
	<tr>
		<td>
Type d&apos;entrée 
		</td>
		<td>
Sélectionner le ***Type d&apos;entrée*** entre ***text*** , ***email*** et ***password*** . 
		</td>
	</tr>
	<tr>
		<td>
Valeur 
		</td>
		<td>
Saisir une ***Valeur*** pour votre ***Contrôle personnalisé*** . 
		</td>
	</tr>
	<tr>
		<td>
Masquer les informations 
		</td>
		<td>
Activer cette option pour cacher les informations présentes dans le champ ***Valeur*** . L&apos;activation de cette option fait aussi apparaître le bouton ***Afficher/Masquer le mot de passe*** et un indicateur de force de mot de passe. 
		</td>
	</tr>
	<tr>
		<td>
Afficher/Masquer le mot de passe 
		</td>
		<td>
Afficher ou masquer le mot de passe qui a été saisi.  

Ce champ n&apos;est disponible à côté du champ ***Valeur*** que si l&apos;option ***Masquer les informations*** est activée. 
		</td>
	</tr>
	<tr>
		<td>
Toujours demander les valeurs 
		</td>
		<td>
Activer cette option pour que l&apos;on vous demande de saisir la valeur à chaque fois au lieu de remplir le champ ***Valeur*** plus haut. 
		</td>
	</tr>
</table>

### ID du contrôle HTML 

<table>
	<tr>
		<th>
CHAMP/PARAMÈTRE 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
ID de la forme 
		</td>
		<td>

Saisir l&apos; ***ID de la forme*** du site Web de connexion. 
		</td>
	</tr>
	<tr>
		<td>
ID de l&apos;utilisateur 
		</td>
		<td>
Saisir l&apos; ***ID de l&apos;utilisateur*** du site Web de connexion. 
		</td>
	</tr>
	<tr>
		<td>
ID domaine 
		</td>
		<td>
Saisir l&apos; ***ID du domaine*** du site Web de connexion. 
		</td>
	</tr>
	<tr>
		<td>
ID du mot de passe 
		</td>
		<td>
Saisir l&apos; ***ID du mot de passe*** du site Web de connexion. 
		</td>
	</tr>
	<tr>
		<td>
ID du mot de passe à usage unique (OTP) 
		</td>
		<td>
Saisir l&apos; ***ID du mot de passe à usage unique (OTP)*** du site Web de connexion. 
		</td>
	</tr>
	<tr>
		<td>
ID bouton connexion 
		</td>
		<td>
Saisir l&apos; ***ID du bouton de connexion*** du site Web de connexion. 
		</td>
	</tr>
</table>

### Questions de sécurité 

<table>
	<tr>
		<th>
CHAMP/PARAMÈTRE 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Question 
		</td>
		<td>

Saisir une ***Question*** personnalisée pour sécuriser l&apos;entrée. 
		</td>
	</tr>
	<tr>
		<td>
Réponse 
		</td>
		<td>
Saisir une ***Réponse*** personnalisée pour la question de sécurité. 
		</td>
	</tr>
	<tr>
		<td>
Afficher/Masquer le mot de passe 
		</td>
		<td>
Afficher ou masquer la ***Réponse*** saisie. 
		</td>
	</tr>
</table>

### OTP 

<table>
	<tr>
		<th>
CHAMP/PARAMÈTRE 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Source 
		</td>
		<td>

Dans la liste déroulante, choisir la ***Source*** du mot de passe à usage unique (OTP) entre ***Aucun*** , ***Personnalisé*** , ***Lié (Coffre)*** , ***Session courante*** , ***Demander*** ou ***Hérité*** . Sélectionner ***Personnalisé*** donne accès aux autres paramètres dans ce tableau. 
		</td>
	</tr>
	<tr>
		<td>
Clé 
		</td>
		<td>
Saisir la ***Clé*** du mot de passe à usage unique (OTP).  

Ce champ n&apos;est disponible que si ***Personnalisé*** est sélectionné dans la liste déroulante ***Source*** . 
		</td>
	</tr>
	<tr>
		<td>
Afficher/Masquer le mot de passe 
		</td>
		<td>
Afficher ou masquer la clé du mot de passe à usage unique (OTP) saisi dans le champ ***Clé*** .  

Ce bouton n&apos;est disponible à côté du champ ***Clé*** que si ***Personnalisé*** est sélectionné dans la liste déroulante ***Source*** . 
		</td>
	</tr>
	<tr>
		<td>
Compte 
		</td>
		<td>
Saisir vos informations de ***Compte*** .  

Ce champ n&apos;est disponible que si ***Personnalisé*** est sélectionné dans la liste déroulante ***Source*** . 
		</td>
	</tr>
	<tr>
		<td>
Code QR - Application 
		</td>
		<td>
Saisir le ***Code QR*** de votre mot de passe à usage unique (OTP).  

Ce champ n&apos;est disponible que si ***Personnalisé*** est sélectionné dans la liste déroulante ***Source*** . 
		</td>
	</tr>
	<tr>
		<td>
Délai 
		</td>
		<td>
Définir la durée de validité de chaque mot de passe (en secondes). Cette valeur doit être fixée à au moins 15 secondes.  

Ce champ n&apos;est disponible que si ***Personnalisé*** est sélectionné dans la liste déroulante ***Source*** . 
		</td>
	</tr>
	<tr>
		<td>
Taille du code 
		</td>
		<td>
Sélectionner la taille du code entre ***6 chiffres*** ou ***8 chiffres*** .  

Ce champ n&apos;est disponible que si ***Personnalisé*** est sélectionné dans la liste déroulante ***Source*** . 
		</td>
	</tr>
	<tr>
		<td>
Algorithme de hachage 
		</td>
		<td>
Sélectionner l&apos;algorithme de hachage sécurisé (SHA) entre ***SHA-1*** , ***SHA-256*** ou ***SHA-512*** .  

Ce champ n&apos;est disponible que si ***Personnalisé*** est sélectionné dans la liste déroulante ***Source*** .  

Pour en apprendre davantage sur l&apos;algorithme de hachage sécurisé, visitez [notre rubrique sur le SHA-256](/fr/kb/general-knowledge-base/what-is-sha-256/) . 
		</td>
	</tr>
</table>

### Codes de récupération OTP 

<table>
	<tr>
		<th>
CHAMP/PARAMÈTRE 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Ajouter 
		</td>
		<td>

Ajouter un nouveau ***Code de récupération OTP*** . 
		</td>
	</tr>
	<tr>
		<td>
Code 
		</td>
		<td>
Saisir un ***Code de récupération OTP*** . Un indicateur de force de mot de passe se trouve sous ce champ. 
		</td>
	</tr>
	<tr>
		<td>
Afficher/Masquer le mot de passe 
		</td>
		<td>
Afficher ou masquer le ***Code de récupération OTP*** qui a été saisi dans le champ ***Code*** . 
		</td>
	</tr>
	<tr>
		<td>
Est valide 
		</td>
		<td>
Activer ce paramètre si le ***Code de récupération OTP*** spécifié est valide. 
		</td>
	</tr>
</table>

### Champs personnalisés 

<table>
	<tr>
		<th>
CHAMP/PARAMÈTRE 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Personnalisé #1-5 
		</td>
		<td>
Saisir un nom pour le champ personnalisé. 
		</td>
	</tr>
	<tr>
		<td>
Valeur 
		</td>
		<td>
Saisir une valeur pour le champ personnalisé. 
		</td>
	</tr>
	<tr>
		<td>
Masquer/Afficher 
		</td>
		<td>

Masquer ou afficher la valeur du champ personnalisé. 
Ce bouton n&apos;est disponible que pour les ***Champs personnalisés cachés*** (voir ci-dessous). 
		</td>
	</tr>
	<tr>
		<td>
Ajouter 
		</td>
		<td>
Créer un nouveau champ personnalisé à l&apos;aide de ce bouton. Vous pouvez choisir entre ***Texte*** et ***Caché*** . Les deux vous permettent de saisir une valeur pour votre champ personnalisé. Sélectionner ***Texte*** vous donne plus d&apos;options de texte dans le champ ***Valeur*** , tandis que sélectionner ***Caché*** vous donne accès à l&apos;option ***Masquer/Afficher*** (voir le paramètre ci-dessus). 
		</td>
	</tr>
</table>

### Description 

<table>
	<tr>
		<th>
CHAMP/PARAMÈTRE 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Description 
		</td>
		<td>
Saisir une description pour la nouvelle entrée. 
		</td>
	</tr>
	<tr>
		<td>
Étiquettes 
		</td>
		<td>

Ajouter des mots clés (étiquettes) pour vous aider à trouver vos entrées ou pour mieux les classer. Appuyer sur la touche ***Entrée*** après avoir saisi chaque étiquette pour les séparer. 
		</td>
	</tr>
	<tr>
		<td>
Expire après 
		</td>
		<td>
Activer cette option pour fixer une date d&apos;expiration pour l&apos;entrée. Vous pouvez sélectionner la date dans le champ à côté de ce paramètre. 
		</td>
	</tr>
	<tr>
		<td>
Hôte 
		</td>
		<td>
Saisir le nom de l&apos;hôte. 
		</td>
	</tr>
	<tr>
		<td>
Employé 
		</td>
		<td>
Saisir le nom de l&apos;employé. 
		</td>
	</tr>
</table>

### Autres 

Les boutons suivants se trouvent au bas de la fenêtre ***Nouvelle entrée - Site Web*** et sont présents peu importe l&apos;onglet sélectionné.  

<table>
	<tr>
		<th>
CHAMP/PARAMÈTRE 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Ajouter 
		</td>
		<td>
Enregistrer les paramètres de la nouvelle entrée de site Web et créer l&apos;entrée. 
		</td>
	</tr>
	<tr>
		<td>
Annuler 
		</td>
		<td>
Annuler la création de la nouvelle entrée de site Web et effacer toutes les modifications non sauvegardées des paramètres. 
		</td>
	</tr>
</table>

## Entrée de carte de crédit 

### Général 

<table>
	<tr>
		<th>
CHAMP/PARAMÈTRE 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Nom 
		</td>
		<td>
Saisir un nom pour votre entrée. Ce champ est rempli automatiquement par {{ fr.DWL }} , mais il peut tout de même être modifié. 
		</td>
	</tr>
	<tr>
		<td>
Dossier 
		</td>
		<td>
Saisir le nom du dossier dans lequel votre nouvelle entrée sera stockée dans {{ fr.PHUB }} Personal. 
		</td>
	</tr>
	<tr>
		<td>
Sélectionner un dossier 
		</td>
		<td>
Sélectionner dans l&apos;arborescence le dossier dans lequel votre nouvelle entrée sera stockée dans {{ fr.PHUB }} Personal. Vous pouvez aussi créer un nouveau dossier et modifier ou supprimer des dossiers existants. 
		</td>
	</tr>
	<tr>
		<td>
Titulaire de la carte 
		</td>
		<td>
Saisir le nom du titulaire de la carte. 
		</td>
	</tr>
	<tr>
		<td>
Type de carte 
		</td>
		<td>
Saisir le type de carte. 
		</td>
	</tr>
	<tr>
		<td>
Numéro de la carte 
		</td>
		<td>
Saisir le numéro de la carte. 
		</td>
	</tr>
	<tr>
		<td>
Afficher/Masquer le mot de passe (pour le Numéro de la carte) 
		</td>
		<td>

Afficher ou masque le ***Numéro de carte*** saisi. 
		</td>
	</tr>
	<tr>
		<td>
Date d&apos;expiration 
		</td>
		<td>
Saisir une ***Date d&apos;expiration*** pour la carte. 
		</td>
	</tr>
	<tr>
		<td>
Validation (CVC) 
		</td>
		<td>
Saisir le numéro de ***Validation (CVC)*** de la carte. 
		</td>
	</tr>
	<tr>
		<td>
Afficher/Masquer le mot de passe (pour la Validation (CVC)) 
		</td>
		<td>
Afficher ou masquer le numéro de ***Validation (CVC)*** saisi. 
		</td>
	</tr>
</table>

### Champs personnalisés 

<table>
	<tr>
		<th>
CHAMP/PARAMÈTRE 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Personnalisé #1-5 
		</td>
		<td>
Saisir un nom pour le champ personnalisé. 
		</td>
	</tr>
	<tr>
		<td>
Valeur 
		</td>
		<td>
Saisir une valeur pour le champ personnalisé. 
		</td>
	</tr>
	<tr>
		<td>
Masquer/Afficher 
		</td>
		<td>

Masquer ou afficher la valeur du champ personnalisé.  

Ce bouton n&apos;est disponible que pour les ***Champs personnalisés cachés*** (voir ci-dessous). 
		</td>
	</tr>
	<tr>
		<td>
Ajouter 
		</td>
		<td>
Créer un nouveau champ personnalisé à l&apos;aide de ce bouton. Vous pouvez choisir entre ***Texte*** et ***Caché*** . Les deux vous permettent de saisir une valeur pour votre champ personnalisé. Sélectionner ***Texte*** vous donne plus d&apos;options de texte dans le champ ***Valeur*** , tandis que sélectionner ***Caché*** vous donne accès à l&apos;option ***Masquer/Afficher*** (voir le paramètre ci-dessus). 
		</td>
	</tr>
</table>

### Description 

<table>
	<tr>
		<th>
CHAMP/PARAMÈTRE 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Description 
		</td>
		<td>
Saisir une description pour la nouvelle entrée. 
		</td>
	</tr>
	<tr>
		<td>
Étiquettes 
		</td>
		<td>

Ajouter des mots clés (étiquettes) pour vous aider à trouver vos entrées ou pour mieux les classer. Appuyer sur la touche ***Entrée*** après avoir saisi chaque étiquette pour les séparer. 
		</td>
	</tr>
	<tr>
		<td>
Expire après 
		</td>
		<td>
Activer cette option pour fixer une date d&apos;expiration pour l&apos;entrée. Vous pouvez sélectionner la date dans le champ à côté de ce paramètre. 
		</td>
	</tr>
	<tr>
		<td>
Hôte 
		</td>
		<td>
Saisir le nom de l&apos;hôte. 
		</td>
	</tr>
	<tr>
		<td>
Employé 
		</td>
		<td>
Saisir le nom de l&apos;employé. 
		</td>
	</tr>
</table>

### Autres 

Les boutons suivants se trouvent au bas de la fenêtre ***Nouvelle entrée - Carte de crédit*** et sont présents peu importe l&apos;onglet sélectionné.  

<table>
	<tr>
		<th>
CHAMP/PARAMÈTRE 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Ajouter 
		</td>
		<td>
Enregistrer les paramètres de la nouvelle entrée de site Web et créer l&apos;entrée. 
		</td>
	</tr>
	<tr>
		<td>
Annuler 
		</td>
		<td>
Annuler la création de la nouvelle entrée de site Web et effacer toutes les modifications non sauvegardées des paramètres. 
		</td>
	</tr>
</table>

## Entrée de contact 

### Général 

<table>
	<tr>
		<th>
CHAMP/PARAMÈTRE 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Nom 
		</td>
		<td>
Saisir un nom pour votre entrée. Ce champ est rempli automatiquement par {{ fr.DWL }} , mais il peut tout de même être modifié. 
		</td>
	</tr>
	<tr>
		<td>
Dossier 
		</td>
		<td>
Saisir le nom du dossier dans lequel votre nouvelle entrée sera stockée dans {{ fr.PHUB }} Personal. 
		</td>
	</tr>
	<tr>
		<td>
Sélectionner un dossier 
		</td>
		<td>
Sélectionner dans l&apos;arborescence le dossier dans lequel votre nouvelle entrée sera stockée dans {{ fr.PHUB }} Personal. Vous pouvez aussi créer un nouveau dossier et modifier ou supprimer des dossiers existants. 
		</td>
	</tr>
	<tr>
		<td>
Sexe 
		</td>
		<td>

Dans la liste déroulante, sélectionner le sexe du contact entre ***Masculin*** , ***Féminin*** et ***Non spécifié*** . 
		</td>
	</tr>
	<tr>
		<td>
Prénom 
		</td>
		<td>
Saisir le ***Prénom*** du contact. 
		</td>
	</tr>
	<tr>
		<td>
Deuxième prénom 
		</td>
		<td>
Saisir le ***Deuxième prénom*** du contact. 
		</td>
	</tr>
	<tr>
		<td>
Nom 
		</td>
		<td>
Saisir le ***Nom*** du contact. 
		</td>
	</tr>
	<tr>
		<td>
Courriel 
		</td>
		<td>
Saisir l&apos;adresse ***Courriel*** du contact. 
		</td>
	</tr>
	<tr>
		<td>
Pays 
		</td>
		<td>
Saisir le ***Pays*** du contact. 
		</td>
	</tr>
	<tr>
		<td>
État 
		</td>
		<td>
Saisir l&apos; ***État*** du contact. 
		</td>
	</tr>
	<tr>
		<td>
Ville 
		</td>
		<td>
Saisir la ***Ville*** du contact. 
		</td>
	</tr>
	<tr>
		<td>
Code postal 
		</td>
		<td>
Saisir le ***Code postal*** du contact. 
		</td>
	</tr>
	<tr>
		<td>
Adresse 
		</td>
		<td>
Saisir l&apos; ***Adresse*** du contact. 
		</td>
	</tr>
	<tr>
		<td>
Compagnie 
		</td>
		<td>
Saisir la ***Compagnie*** du contact. 
		</td>
	</tr>
	<tr>
		<td>
Titre du poste 
		</td>
		<td>
Saisir le ***Titre du poste*** du contact. 
		</td>
	</tr>
	<tr>
		<td>
Téléphone 
		</td>
		<td>
Saisir le numéro de ***Téléphone*** du contact. 
		</td>
	</tr>
	<tr>
		<td>
Cellulaire 
		</td>
		<td>
Saisir le numéro de ***Cellulaire*** du contact. 
		</td>
	</tr>
	<tr>
		<td>
Télécopieur 
		</td>
		<td>
Saisir le numéro de ***Télécopieur*** du contact. 
		</td>
	</tr>
	<tr>
		<td>
Tél. travail 
		</td>
		<td>
Saisir le numéro de ***Téléphone de travail*** du contact. 
		</td>
	</tr>
</table>

### Champs personnalisés 

<table>
	<tr>
		<th>
CHAMP/PARAMÈTRE 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Personnalisé #1-5 
		</td>
		<td>
Saisir un nom pour le champ personnalisé. 
		</td>
	</tr>
	<tr>
		<td>
Valeur 
		</td>
		<td>
Saisir une valeur pour le champ personnalisé. 
		</td>
	</tr>
	<tr>
		<td>
Masquer/Afficher 
		</td>
		<td>
Masquer ou afficher la valeur du champ personnalisé.  

Ce bouton n&apos;est disponible que pour les ***Champs personnalisés cachés*** (voir ci-dessous). 
		</td>
	</tr>
	<tr>
		<td>
Ajouter 
		</td>
		<td>
Créer un nouveau champ personnalisé à l&apos;aide de ce bouton. Vous pouvez choisir entre ***Texte*** et ***Caché*** . Les deux vous permettent de saisir une valeur pour votre champ personnalisé. Sélectionner ***Texte*** vous donne plus d&apos;options de texte dans le champ ***Valeur*** , tandis que sélectionner ***Caché*** vous donne accès à l&apos;option ***Masquer/Afficher*** (voir le paramètre ci-dessus). 
		</td>
	</tr>
</table>

### Description 

<table>
	<tr>
		<th>
CHAMP/PARAMÈTRE 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Description 
		</td>
		<td>
Saisir une description pour la nouvelle entrée. 
		</td>
	</tr>
	<tr>
		<td>
Étiquettes 
		</td>
		<td>

Ajouter des mots clés (étiquettes) pour vous aider à trouver vos entrées ou pour mieux les classer. Appuyer sur la touche ***Entrée*** après avoir saisi chaque étiquette pour les séparer. 
		</td>
	</tr>
</table>

### Autres 

Les boutons suivants se trouvent au bas de la fenêtre ***Nouvelle entrée - Contact*** et sont présents peu importe l&apos;onglet sélectionné.  

<table>
	<tr>
		<th>
CHAMP/PARAMÈTRE 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Ajouter 
		</td>
		<td>
Enregistrer les paramètres de la nouvelle entrée de site Web et créer l&apos;entrée. 
		</td>
	</tr>
	<tr>
		<td>
Annuler 
		</td>
		<td>
Annuler la création de la nouvelle entrée de site Web et effacer toutes les modifications non sauvegardées des paramètres. 
		</td>
	</tr>
</table>

## Entrée de note sécurisée 

### Général 

<table>
	<tr>
		<th>
CHAMP/PARAMÈTRE 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Nom 
		</td>
		<td>
Saisir un nom pour votre entrée. Ce champ est rempli automatiquement par {{ fr.DWL }} , mais il peut tout de même être modifié. 
		</td>
	</tr>
	<tr>
		<td>
Dossier 
		</td>
		<td>
Saisir le nom du dossier dans lequel votre nouvelle entrée sera stockée dans {{ fr.PHUB }} Personal. 
		</td>
	</tr>
	<tr>
		<td>
Sélectionner un dossier 
		</td>
		<td>
Sélectionner dans l&apos;arborescence le dossier dans lequel votre nouvelle entrée sera stockée dans {{ fr.PHUB }} Personal. Vous pouvez aussi créer un nouveau dossier et modifier ou supprimer des dossiers existants. 
		</td>
	</tr>
	<tr>
		<td>
Type 
		</td>
		<td>

Dans la liste déroulante, sélectionner si votre note est rédigée au format ***Markdown*** ou en ***Texte brut*** . 
		</td>
	</tr>
	<tr>
		<td>
Note 
		</td>
		<td>
Saisir une note sécurisée. Cette option sera différente selon que vous sélectionnez le format ***Markdown*** ou le format ***Texte brut*** dans la liste ***Type*** . La sélection du format ***Markdown*** vous donne accès à des options supplémentaires de formatage de texte. Vous pourrez également rédiger votre note en utilisant le format markdown, qui est un langage de balisage pour le formatage du texte. 
		</td>
	</tr>
</table>

### Champs personnalisés 

<table>
	<tr>
		<th>
CHAMP/PARAMÈTRE 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Personnalisé #1-5 
		</td>
		<td>
Saisir un nom pour le champ personnalisé. 
		</td>
	</tr>
	<tr>
		<td>
Valeur 
		</td>
		<td>
Saisir une valeur pour le champ personnalisé. 
		</td>
	</tr>
	<tr>
		<td>
Masquer/Afficher 
		</td>
		<td>

Masquer ou afficher la valeur du champ personnalisé. 
Ce bouton n&apos;est disponible que pour les ***Champs personnalisés cachés*** (voir ci-dessous). 
		</td>
	</tr>
	<tr>
		<td>
Ajouter 
		</td>
		<td>
Créer un nouveau champ personnalisé à l&apos;aide de ce bouton. Vous pouvez choisir entre ***Texte*** et ***Caché*** . Les deux vous permettent de saisir une valeur pour votre champ personnalisé. Sélectionner ***Texte*** vous donne plus d&apos;options de texte dans le champ ***Valeur*** , tandis que sélectionner ***Caché*** vous donne accès à l&apos;option ***Masquer/Afficher*** (voir le paramètre ci-dessus). 
		</td>
	</tr>
</table>

### Description 

<table>
	<tr>
		<th>
CHAMP/PARAMÈTRE 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Description 
		</td>
		<td>
Saisir une description pour la nouvelle entrée. 
		</td>
	</tr>
	<tr>
		<td>
Étiquettes 
		</td>
		<td>

Ajouter des mots clés (étiquettes) pour vous aider à trouver vos entrées ou pour mieux les classer. Appuyer sur la touche ***Entrée*** après avoir saisi chaque étiquette pour les séparer. 
		</td>
	</tr>
	<tr>
		<td>
Expire après 
		</td>
		<td>
Activer cette option pour fixer une date d&apos;expiration pour l&apos;entrée. Vous pouvez sélectionner la date dans le champ à côté de ce paramètre. 
		</td>
	</tr>
	<tr>
		<td>
Hôte 
		</td>
		<td>
Saisir le nom de l&apos;hôte. 
		</td>
	</tr>
	<tr>
		<td>
Employé 
		</td>
		<td>
Saisir le nom de l&apos;employé. 
		</td>
	</tr>
</table>

### Autres 

Les boutons suivants se trouvent au bas de la fenêtre ***Nouvelle entrée - Note sécurisée*** et sont présents peu importe l&apos;onglet sélectionné.  

<table>
	<tr>
		<th>
CHAMP/PARAMÈTRE 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Ajouter 
		</td>
		<td>
Enregistrer les paramètres de la nouvelle entrée de site Web et créer l&apos;entrée. 
		</td>
	</tr>
	<tr>
		<td>
Annuler 
		</td>
		<td>
Annuler la création de la nouvelle entrée de site Web et effacer toutes les modifications non sauvegardées des paramètres. 
		</td>
	</tr>
</table>

{% snippet icon.badgeInfo %} 
Vous pouvez suivre notre guide étape par étape expliquant [comment ajouter une entrée](Add_Entry_HUBPersonal_with_DWL) dans {{ fr.PHUB }} Personal avec {{ fr.DWL }} . 
{% endsnippet %}
 

