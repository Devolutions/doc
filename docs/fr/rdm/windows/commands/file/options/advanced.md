---
title: Options avancées
---
Utilisez ***Fichier – Options – Avancé*** pour contrôler le comportement de l&apos;application en ce qui concerne les paramètres de niveau inférieur.  
![Fichier – Options – Avancé](/img/fr/rdm/windows/clip10595.png) 

## Paramètres 

### Avancé 

<table>
	<tr>
		<th>

OPTION 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Niveau débogage 
		</td>
		<td>
Définir le niveau des informations de débogage que {{ fr.RDM }} capturera. Cela ne doit être modifié que sur demande d&apos;un technicien du soutien technique de Devolutions, car cela pourrait ralentir votre système. 
		</td>
	</tr>
	<tr>
		<td>
Journaux 
		</td>
		<td>
Les journaux peuvent être enregistrés dans un fichier ou dans un fichier de base de données. Choisir entre:  

* ***Les deux :*** Les journaux seront enregistrés dans un fichier texte et dans un fichier de base de données. 
* ***Base de données :*** Les journaux seront enregistrés dans un fichier nommé RemoteDesktopManager.log.db. Le fichier se trouve dans le dossier d&apos;installation de l&apos;application. 
* ***Fichier :*** Les journaux seront enregistrés dans un fichier nommé RemoteDesktopManager.log. Le fichier se trouve dans le dossier d&apos;installation de l&apos;application. 
		</td>
	</tr>
	<tr>
		<td>
Moteur en mode hors ligne 
		</td>
		<td>
Vous pouvez choisir votre moteur en mode hors connexion entre MCDF v2.0 (par défaut), SQLite (obsolète) ou OpenMCDF (obsolète). Ne modifier cette option que sur demande d&apos;un technicien du soutien technique de Devolutions . 
		</td>
	</tr>
	<tr>
		<td>
Forcer « ***localhost*** ***» lorsque avec ports dynamiques VPN*** 
		</td>
		<td>
Forcer l&apos;utilisation de « ***localhost*** ***» lors de l&apos;utilisation du port dynamique VPN.*** 
		</td>
	</tr>
	<tr>
		<td>
Accélération matérielle 
		</td>
		<td>
Sélectionner dans la liste déroulante comment {{ fr.RDM }} va gérer l&apos;accélération matérielle : 

* ***Par défaut (Automatique)*** : Le rendu graphique est entièrement laissé au système d&apos;exploitation. 
* ***Désactivé (GDI+)*** : L&apos;accélération matérielle est désactivée de force. 
* ***DirectX*** : L&apos;accélération matérielle est activée de force : le rendu graphique est effectué par la carte graphique. Les performances sont accélérées dans certains cas, ce qui est souvent nécessaire pour les hautes résolutions.  

Il n&apos;est pas nécessaire de modifier ce paramètre sauf en cas de problèmes de performances de l&apos;interface utilisateur. 
		</td>
	</tr>
	<tr>
		<td>
Compte des derniers commentaires 
		</td>
		<td>
Si une entrée est configurée pour demander un commentaire à l&apos;ouverture / la fermeture, une liste des derniers commentaires sera affichée pour aider l&apos;utilisateur. Définir le nombre de derniers commentaires qui seront enregistrés puis affichés dans cette liste. 
		</td>
	</tr>
	<tr>
		<td>
Confirmer l&apos;ouverture de plusieurs sessions ouvertes si le nombre est supérieur à 
		</td>
		<td>
Sélectionner un nombre cible où les sessions d&apos;ouverture de masse demanderont une confirmation. 
		</td>
	</tr>
</table>

### Autres Options – Connexion 

<table>
	<tr>
		<th>

OPTION 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Activer des verrous en lecture/écriture en mode hors ligne 
		</td>
		<td>
Activer les verrous pour les droits de lecture/écriture en mode hors ligne. 
		</td>
	</tr>
	<tr>
		<td>
Activer la journalisation des événements pour Telnet et SSH (DevolutionsTerminal.log) 
		</td>
		<td>
Activer la journalisation globale des événements pour les entrées Telnet et SSH. Il créera le fichier DevolutionsTerminal.log au même endroit où se trouve le fichier de configuration. 
		</td>
	</tr>
	<tr>
		<td>
Afficher les types de source de données dépréciés 
		</td>
		<td>
Certaines sources de données ne sont plus prises en charge. L&apos;activation de cette option les affichera à nouveau. 
		</td>
	</tr>
	<tr>
		<td>
Autoriser le mode d’identifiants intégrés (ancien) 
		</td>
		<td>
Autoriser le mode d&apos;identifiants intégrés dans les entrées. Ce mode est obsolète et déconseillé. Veuillez consulter les [Options d&apos;identifiants](/fr/rdm/windows/commands/edit/entries/entry-credentials-options/) disponibles. 
		</td>
	</tr>
	<tr>
		<td>
Autoriser les sous-connexions 
		</td>
		<td>
Autoriser la création de sous-entrées. 
		</td>
	</tr>
	<tr>
		<td>
Désactiver DPAPI sur le cache hors ligne 
		</td>
		<td>
Désactiver le chiffrement DPAPI sur le cache hors ligne. Ce cryptage est fourni par Windows et est utilisé pour sécuriser davantage le cache hors ligne. 
		</td>
	</tr>
	<tr>
		<td>
Désactiver l’option « fermer tous les messages de confirmation » 
		</td>
		<td>
Désactiver le message de confirmation de fermeture lors de la fermeture/déconnexion de plusieurs entrées en même temps. 
		</td>
	</tr>
	<tr>
		<td>
Désactiver la gestion de la connexion à la base de données résiliente 
		</td>
		<td>
La gestion des connexions de base de données résilientes est un mécanisme que nous mettons en place pour réessayer certaines connexions à la base de données dans {{ fr.RDM }} afin d&apos;éviter certaines erreurs. Une certaine lenteur peut être ressentie lorsqu&apos;elle est activée. 
		</td>
	</tr>
	<tr>
		<td>
Désactiver la vérification de mots de passe compromis (pwned) 
		</td>
		<td>
Désactiver la fonction de vérification de compromission du mot de passe si elle n&apos;est pas forcée par l&apos;administrateur dans ***Administration – Paramètres du système – Validation du mot de passe*** . 
		</td>
	</tr>
	<tr>
		<td>
Désactiver l’affichage de miniatures pour Google Chrome 
		</td>
		<td>
Désactiver l&apos;affichage des miniatures pour Google Chrome dans ***Affichage – Miniatures*** pour améliorer les performances de l&apos;application. 
		</td>
	</tr>
	<tr>
		<td>
Désactiver le cache de l&apos;éditeur formulaires 
		</td>
		<td>
Désactiver le cache de l&apos;éditeur formulaires et force {{ fr.RDM }} à toujours récupérer les informations. Il n&apos;est pas recommandé de désactiver cette fonctionnalité pour des raisons de performances. 
		</td>
	</tr>
	<tr>
		<td>
Désactiver le chargement multi-thread 
		</td>
		<td>
Ce paramètre permet à {{ fr.RDM }} d&apos;utiliser plusieurs threads pour charger les données. La désactivation de cette option diminuera les performances. 
		</td>
	</tr>
	<tr>
		<td>
Désactiver le fichier hors ligne multi-thread 
		</td>
		<td>
Ce paramètre permet à {{ fr.RDM }} d&apos;utiliser plusieurs threads dans un fichier hors connexion. La désactivation de cette option diminuera les performances. 
		</td>
	</tr>
	<tr>
		<td>
Désactiver le message de confirmation de la déconnexion 
		</td>
		<td>
Lorsque vous appuyez sur le bouton de fermeture de session dans une session RDP intégrée, {{ fr.RDM }} déconnectera la session sans le message de confirmation de fermeture de session. 
		</td>
	</tr>
	<tr>
		<td>
Désactiver les gestionnaires d&apos;événements du système 
		</td>
		<td>
Utiliser uniquement à des fins de diagnostic. Ne pas définir sauf sur recommandation de l&apos;équipe de soutien technique de Devolutions. 
		</td>
	</tr>
	<tr>
		<td>
Forcer la restauration de l&apos;application avec le raccourci du bureau 
		</td>
		<td>
Lorsque vous double-cliquez sur le raccourci sur le bureau, il restaure l&apos;application déjà ouverte. Si l&apos;option n&apos;est pas cochée, une deuxième fenêtre {{ fr.RDM }} s&apos;ouvrira. 
		</td>
	</tr>
	<tr>
		<td>
Forcer l&apos;actualisation avant de modifier l&apos;entrée 
		</td>
		<td>
Effectuer un rafraîchissement de l&apos;entrée avant d&apos;entrer en mode de modification. Ceci est utile dans un environnement multi-utilisateur avec des sources de données partagées. Cela garantit que vous modifiez la version la plus récente de l&apos;entrée. 
		</td>
	</tr>
	<tr>
		<td>
Ouvrir automatiquement l&apos;emplacement du fichier après l’enregistrement 
		</td>
		<td>
Après un enregistrement de session, le dossier de destination où le fichier est enregistré s’ouvrira. 
		</td>
	</tr>
	<tr>
		<td>
Ouvrir sans message les raccourcis de sessions 
		</td>
		<td>
Désactiver le message d&apos;avertissement lorsque vous utilisez un raccourci. 
		</td>
	</tr>
	<tr>
		<td>
Utiliser l&apos;optimisation de chargement de connexion 
		</td>
		<td>
Activer cette option que sur demande de notre équipe de soutien technique de Devolutions. 
		</td>
	</tr>
	<tr>
		<td>
Vérifiez que KeePass est en cours d&apos;exécution 
		</td>
		<td>
Vérifier que KeePass fonctionne sur votre ordinateur avant d&apos;accéder aux données KeePass. 
		</td>
	</tr>
</table>

### Autres options – Général 

<table>
	<tr>
		<th>

OPTION 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Accent sur le contenu à l&apos;activation de l&apos;application 
		</td>
		<td>
Mettre l&apos;accent sur la dernière session intégrée lorsque l&apos;application est activée. 
		</td>
	</tr>
	<tr>
		<td>
Ajouter le dossier dans la hiérarchie pendant l’ajout en lots 
		</td>
		<td>
Lors de l&apos;ajout par lots de dossiers, selon l&apos;option choisie, il les créera tous au même niveau ou en fera un enfant du dossier précédent. 
		</td>
	</tr>
	<tr>
		<td>
Confirmer lors du déplacement par glisser-déposer 
		</td>
		<td>
Lorsque les sessions sont déplacées par glisser-déposer, un message de confirmation apparaît pour confirmer le déplacement. 
		</td>
	</tr>
	<tr>
		<td>
Désactiver la demande de confirmer l&apos;annulation dans les propriétés 
		</td>
		<td>
Activer pour supprimer la demande de confirmation lors de l&apos;annulation de la modification d&apos;une entrée. 
		</td>
	</tr>
	<tr>
		<td>
Désactiver la télémétrie 
		</td>
		<td>
Désactiver l&apos;analyse des données ou des statistiques. La télémétrie est l&apos;équivalent de Google Analytics. Prendre note que les statistiques sont anonymes. 
		</td>
	</tr>
	<tr>
		<td>
Désactiver la trace de la pile 
		</td>
		<td>
Désactiver les détails de la trace de la pile lorsqu&apos;une erreur se produit dans {{ fr.RDM }} . Il s&apos;agit d&apos;une fonction de sécurité. 
		</td>
	</tr>
	<tr>
		<td>
Désactiver le cache des favicônes 
		</td>
		<td>
Désactiver le cache des favicônes et forcer {{ fr.RDM }} à toujours récupérer les favicônes sur le web. Il n&apos;est pas recommandé de désactiver cette fonctionnalité pour des raisons de performances. 
		</td>
	</tr>
	<tr>
		<td>
Désactiver le gravatar de l&apos;utilisateur 
		</td>
		<td>
Désactiver la récupération du Gravatar dans ***Administration – Utilisateurs*** pour améliorer les performances de l&apos;application. 
		</td>
	</tr>
	<tr>
		<td>
Désactiver toutes les images Gravatar 
		</td>
		<td>
Désactiver toutes les images Gravatar pour améliorer les performances de l&apos;application. 
		</td>
	</tr>
	<tr>
		<td>
Désactiver toutes les images Gravatar 
		</td>
		<td>
Désactiver toutes les images Gravatar pour améliorer les performances de l&apos;application. 
		</td>
	</tr>
	<tr>
		<td>
Inclure les ordinateurs du réseau avoisinant dans la fenêtre Choisir un ordinateur 
		</td>
		<td>
Activer pour afficher la liste de tous les ordinateurs du réseau avoisinant. Il n&apos;est pas recommandé d&apos;activer cette fonctionnalité pour des raisons de performances. 
		</td>
	</tr>
	<tr>
		<td>
Inclure les ordinateurs liés à Active Directory dans la fenêtre Choisir un ordinateur 
		</td>
		<td>
Activer pour afficher la liste de tous les ordinateurs liés à Active Directory. 
		</td>
	</tr>
	<tr>
		<td>
Pas de connexion Internet 
		</td>
		<td>
Désactiver l&apos;application pour accéder à Internet. 
		</td>
	</tr>
	<tr>
		<td>
Permettre les sources de données obsolètes 
		</td>
		<td>
Autoriser {{ fr.RDM }} à fonctionner sur une vielle source de données qui n&apos;a pas été mise à niveau. 
		</td>
	</tr>
	<tr>
		<td>
Permettre plusieurs instances 
		</td>
		<td>
Permet à plusieurs instances de {{ fr.RDM }} de s&apos;exécuter simultanément. Ce n&apos;est pas une pratique recommandée. 
		</td>
	</tr>
	<tr>
		<td>
Prompt Onboarding on startup 
		</td>
		<td>
Activer pour lancer la fenêtre d&apos;accueil ( Onboarding ) au démarrage. 
		</td>
	</tr>
	<tr>
		<td>
Utiliser Devolutions Updater 
		</td>
		<td>
Activer cette option que sur demande de notre équipe de soutien technique Devolutions. 
		</td>
	</tr>
	<tr>
		<td>
Utiliser la compression ZipCrypto (non recommandé) 
		</td>
		<td>
Activer cette option pour autoriser la compression ZipCrypto dans {{ fr.RDM }} . Nous vous déconseillons d&apos;activer cette option. Voici un blogue écrit par notre équipe de sécurité sur le sujet: [Why you should never use the native .Zip Crypto in Windows](https://blog.devolutions.net/2020/08/why-you-should-never-use-zipcrypto/) . 
		</td>
	</tr>
	<tr>
		<td>
Utiliser le dossier d&apos;application pour la cache hors ligne 
		</td>
		<td>
Utiliser le dossier d&apos;installation pour enregistrer le fichier de cache hors ligne. 
		</td>
	</tr>
	<tr>
		<td>
Utiliser le dossier de l&apos;application pour la liste d&apos;exécution locale 
		</td>
		<td>
Utiliser le dossier d&apos;installation pour enregistrer la liste de lecture locale qui a été créée. 
		</td>
	</tr>
	<tr>
		<td>
Utiliser Microsoft Office plutôt que les autres éditeurs 
		</td>
		<td>
Lors de l&apos;ajout d&apos;un nouveau document en sélectionnant un fichier pris en charge par une application Microsoft Office (Word, Excel), il créera un document Word/Excel au lieu d&apos;une entrée Rich Text Editor/Spreadsheet Editor. 
		</td>
	</tr>
	<tr>
		<td>
Vérifier le contenu du focus lors de l&apos;activation de RDP 
		</td>
		<td>
Si une session RDP demande le focus, elle placera {{ fr.RDM }} au premier plan. 
		</td>
	</tr>
	<tr>
		<td>
Verrouillage - Sécurité intégrée: valider seulement avec le contexte du domaine 
		</td>
		<td>
Le verrou de sécurité intégré valide par défaut contre la machine locale et au contexte du domaine. Vous avez la possibilité de valider uniquement par rapport au domaine. 
		</td>
	</tr>
</table>

### Autres options – Interface utilisateur 

<table>
	<tr>
		<th>

OPTION 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Activer la boîte de texte des mots clés dans les propriétés 
		</td>
		<td>
Par défaut, le champ des mots clés, dans les propriétés d&apos;une entrée, ne peut être édité que via le sélecteur. Avec cette option, cela lève cette restriction et vous pouvez écrire directement dans la zone de texte des mots clés. 
		</td>
	</tr>
	<tr>
		<td>
Désactiver la personnalisation d&apos;images 
		</td>
		<td>
Désactiver le chargement des images personnalisées dans l&apos;arborescence. Trop d&apos;images personnalisées pourraient augmenter considérablement la taille de la source de données et augmenter le temps de chargement. 
		</td>
	</tr>
	<tr>
		<td>
Désactiver la restauration de l’affichage 
		</td>
		<td>
Désactiver la disposition des onglets configurée manuellement et restaure les paramètres d’affichage lors d&apos;un redémarrage de {{ fr.RDM }} . 
		</td>
	</tr>
	<tr>
		<td>
Désactiver le sélecteur de document (Ctrl + Tab) 
		</td>
		<td>
Lorsque l’option est décochée, elle permet de naviguer entre plusieurs onglets de connexions actifs dans le tableau de bord. 
		</td>
	</tr>
	<tr>
		<td>
Garder la fenêtre Afficher le mot de passe dans le haut 
		</td>
		<td>
Forcer la fenêtre ***Afficher le mot de passe*** à s&apos;afficher au-dessus de toutes les fenêtres de {{ fr.RDM }} . 
		</td>
	</tr>
	<tr>
		<td>
Masquer la barre de chargement de la source de données 
		</td>
		<td>
Masquer la barre de chargement de la source de données lors du chargement. 
		</td>
	</tr>
	<tr>
		<td>
Masquer la dernière liste d&apos;exécution ouverte dans le gestionnaire 
		</td>
		<td>
Masquer la dernière liste d&apos;exécution ouverte au démarrage dans la boîte de dialogue de la liste d&apos;exécution. 
		</td>
	</tr>
	<tr>
		<td>
Toujours afficher le bouton « Aller Hors ligne » 
		</td>
		<td>
Afficher toujours le bouton « Mettre hors ligne » dans la barre d&apos;état lorsque le mode hors ligne est actif. 
		</td>
	</tr>
	<tr>
		<td>
Utiliser l&apos;ancien tri des entrées 
		</td>
		<td>
Utiliser l&apos;ancien tri des entrées de la version précédente de {{ fr.RDM }} . 
		</td>
	</tr>
</table>

### Autres options – Microsoft Edge 

<table>
	<tr>
		<th>
OPTION 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Utiliser Microsoft Edge en mode intégré pour la documentation et markdown 
		</td>
		<td>
L&apos;activation de cette option permettra d&apos;utiliser le navigateur Microsoft Edge au lieu d&apos;Internet Explorer pour la documentation et le markdown. 
		</td>
	</tr>
	<tr>
		<td>
Utiliser Microsoft Edge en mode intégré pour le panneau Aperçu 
		</td>
		<td>
L&apos;activation de cette option permettra d&apos;utiliser le navigateur Microsoft Edge au lieu d&apos;Internet Explorer pour afficher le panneau d&apos;aperçu. 
		</td>
	</tr>
	<tr>
		<td>
Utiliser Microsoft Edge en mode intégré pour les notes de publication 
		</td>
		<td>
L&apos;activation de cette option permettra d&apos;utiliser le navigateur Microsoft Edge au lieu d&apos;Internet Explorer pour les notes de publication. 
		</td>
	</tr>
	<tr>
		<td>
Utiliser Microsoft Edge en mode intégré pour les rapports 
		</td>
		<td>
L&apos;activation de cette option permettra d&apos;utiliser le navigateur Microsoft Edge au lieu d&apos;Internet Explorer pour afficher les rapports. 
		</td>
	</tr>
</table>

### Informations 

<table>
	<tr>
		<th>
OPTION 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Créé le 
		</td>
		<td>
Date de création du dossier de configuration de {{ fr.RDM }} . 
		</td>
	</tr>
	<tr>
		<td>
Source 
		</td>
		<td>
Source des paramètres de configuration de {{ fr.RDM }} . 
		</td>
	</tr>
	<tr>
		<td>
Chemin 
		</td>
		<td>
Raccourci pour accéder directement au dossier de configuration. 
		</td>
	</tr>
</table>


