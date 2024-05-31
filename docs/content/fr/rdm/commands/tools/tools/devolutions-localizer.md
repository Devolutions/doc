---
eleventyComputed:
  title: "{{ fr.DLOCALIZER }}"
  description: Nous vous invitons à contribuer à la communauté Devolutions en traduisant nos outils au profit d'autres utilisateurs comme vous à travers le monde.
---
{{ fr.DLOCALIZER }} est notre outil de traduction personnalisé pour nos applications. Nous vous invitons à contribuer à la communauté Devolutions en traduisant nos outils au profit d'autres utilisateurs comme vous à travers le monde.

Télécharger l'[{{ fr.DLOCALIZER }}](https://devolutions.net/localizer) outil de traduction pour commencer !

### Exigences
* un compte [{{ fr.DA }}](/cloud/devolutions-account/create-devolutions-account/) gratuit pour se connecter à l'outil {{ fr.DLOCALIZER }}
* .NET 8.0 ou ultérieur

## Processus de traduction

1. Dans ***Fichier – Langues***, sélectionner les langues à traduire. Cliquer sur ***Ok***.
![Fichier – Langues](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2228.png)
1. Cliquer sur le bouton ***Traduire***.
![Traduire](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2131.png)
1. Choisir le fichier dans lequel traduire dans la liste déroulante ***Fichier***.
![Sélection de Fichier](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2132.png)
1. Dans la partie inférieure, vous pouvez filtrer et revoir le contenu déjà traduit ou nécessitant une traduction. Les informations concernant chaque ligne de ressource sont disponibles dans les différentes colonnes.

   | Colonne{width=150}         | Description                                                                               |
   | -------------- | ----------------------------------------------------------------------------------------- |
   | Statut         | Peut être défini à différentes valeurs selon la progression de la traduction :<br><br><ul><li>***Modifié*** : Le texte dans sa langue originale a été modifié par Devolutions. Un traducteur local doit revoir la traduction localisée et apporter des modifications si nécessaire.</li><li>***Nouveau*** : Le texte n'a pas encore été traduit dans la langue cible.</li><li>***Traduit*** : Le texte a déjà été traduit dans la langue cible. Toute traduction marquée comme ***Traduit*** est automatiquement définie sur ***Modifié*** lorsque nous changeons le texte anglais afin que vous puissiez réévaluer la traduction.</li><li>***En révision*** : Ce statut est destiné à aider les traducteurs à communiquer entre eux lorsqu'ils ne sont pas sûrs de la traduction et/ou de l'utilisation d'une valeur particulière. À travers le champ ***Commentaire***, les traducteurs peuvent également écrire des notes de traduction.</li><li>***Utiliser l'original*** : Le texte ne doit pas être traduit, il doit être conservé dans sa langue originale. Par exemple, cela peut s'appliquer aux noms de produits ou aux noms de systèmes tiers. Toute traduction marquée comme ***Utiliser l'original*** est automatiquement définie sur ***Modifié*** lorsque nous changeons le texte anglais afin que vous puissiez réévaluer la traduction.</li></ul>|
   | Nom           | Nom de la ressource.                                                                     |
   | Original       | Texte anglais original de Devolutions.                                                   |
   | Traduit     | Traduction du texte anglais original dans la langue cible.                          |
   | Commentaire        | Tout commentaire lié au processus de traduction.                                           |
   | Modifié par    | Nom d'utilisateur de l'utilisateur qui a modifié en dernier la traduction du texte original.              |
   | Modifié (UTC) | Heure à laquelle la dernière modification du texte traduit a été effectuée.                      |
   | Original (UTC) | Heure à laquelle la dernière modification du texte anglais original a été effectuée par Devolutions. |

   ![Contenu à Traduire ou Traduit](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2229.png)
1. Pour commencer, sélectionner une ligne de ***Ressource*** dans la liste du bas et cliquer sur ***Traduire***. Le texte original apparaîtra dans la boîte ***Original***.
![Sélection de Ligne de Ressource](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2133.png)

   {% snippet, "badgeCaution" %}
   Lors de la traduction de texte, vous pouvez rencontrer le caractère esperluette ("&") utilisé d'une manière autre que son sens habituel de "et". Ce n'est pas une erreur : l'esperluette fait que le caractère immédiatement à sa droite soit souligné lorsqu'il est affiché. Veuillez vérifier deux fois avant de traduire.

   Par exemple, "P&ropriétés" sera affiché comme "P r opriétés" avec un "r" souligné.
   {% endsnippet %}

1. Taper le texte traduit dans la boîte de droite.
   {% snippet, "badgeInfo" %}
   Un bouton ***Bing*** est disponible pour vous aider à traduire votre texte. L'API Bing limite le nombre d'appels par heure. Si cela échoue, réessayer dans une heure ou deux.
   {% endsnippet %}

   ![Traduction](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11554.png)

1. Lorsque c'est fait, changer le ***Statut*** en ***Traduit*** pour cette ressource et cliquer sur le bouton ***Enregistrer les modifications***. Cela enverra votre traduction à notre serveur et elle sera déployée avec la prochaine version de nos applications.
![Changer de Statut et Enregistrer les Modifications](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2134.png)

### Aperçu

Vous pouvez prévisualiser vos changements dans {{ fr.RDM }} avant la sortie ou voir ceux déjà en place mais pas encore publiés.

1. Fermer votre {{ fr.RDM }}.
1. Dans le ***Tableau de bord*** de {{ fr.DLOCALIZER }}, cliquer sur ***Déployer – Générer & Démarrer*** pour voir vos changements, ou ***Déployer – Démarrer (utiliser l'existant)*** pour voir les changements non publiés.

Suivre les étapes suivantes si vous souhaitez changer la langue de votre application {{ fr.RDM }} pour refléter celle que vous traduisiez :

1. Aller à ***Fichier – Paramètres – Interface utilisateur***.
1. Dans la liste déroulante ***Langue***, sélectionner la langue et cliquer sur ***OK***.
1. Redémarrer l'application pour que cela prenne effet.

### Raccourcis clavier

{{ fr.DLOCALIZER }} propose également plusieurs raccourcis clavier pour accélérer le processus de traduction :
* <kbd>Ctrl</kbd>+<kbd>D</kbd> : Définir le ***Statut*** de la ressource courante sur ***Traduit***.
* <kbd>Ctrl</kbd>+<kbd>E</kbd> : Définir le ***Statut*** de la ressource courante sur ***Utiliser l'original***. Cela ignore tout texte de traduction et affiche la valeur originale telle quelle.
* <kbd>Ctrl</kbd>+<kbd>Bas</kbd> : Passer à la ressource suivante.
* <kbd>Ctrl</kbd>+<kbd>Haut</kbd> : Revenir à la ressource précédente.
* <kbd>Ctrl</kbd>+<kbd>B</kbd> : Demander une traduction Bing pour la ressource courante.
* <kbd>Ctrl</kbd>+<kbd>S</kbd> : Enregistrer toutes les modifications en attente.
* <kbd>Ctrl</kbd>+<kbd>F</kbd> : Activer/désactiver le filtrage.

## Mise à jour de {{ fr.DLOCALIZER }}
La fonction de mise à jour automatique de {{ fr.DLOCALIZER }} vérifiera chaque mois s'il y a une nouvelle mise à jour et l'installera. Pour mettre à jour manuellement, aller à ***Aide - Vérifier les mises à jour***.

Si votre version de {{ fr.DLOCALIZER }} est antérieure à 2024.1, vous devrez [télécharger manuellement la dernière version](https://devolutions.net/localizer) pour que la fonction de mise à jour automatique soit disponible.
