```yaml
eleventyComputed:
  title: Ajouter un site Web
```
Le bouton ***Ajouter un site Web*** est uniquement disponible lorsque vous êtes dans l'onglet [***Correspondance***](/workspace/workspace-browser-extension/hub-business/user-interface/side-menu/#matching-tab), qui est l'onglet sélectionné lors de l'ouverture de l'extension, ou lors de la navigation à travers les {{ fr.VLT }}s et les entrées des onglets [***{{ fr.VLT_MAJ }}s***](/workspace/workspace-browser-extension/hub-business/user-interface/side-menu/#vaults-tab) ou [***{{ fr.UVLT_MAJ }}***](/workspace/workspace-browser-extension/hub-business/user-interface/side-menu/#user-vault-tab). Il ouvre un nouvel onglet dans votre navigateur qui vous permet d'ajouter une entrée de site Web dans {{ fr.DHUBB }} via le {{ fr.WBEX }}.

Lorsque {{ fr.DHUBB }} est utilisé comme source de données, la configuration de base de l'entrée se fait dans l'onglet ***Général***, mais d'autres paramètres sont également disponibles dans d'autres onglets. Ci-dessous un exemple des paramètres de l'onglet ***Général*** lors de la création d'une entrée de site Web.
![Nouvelle Entrée – Site Web (Onglet Général)](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2132.png)

Les tableaux ci-dessous listent tous les champs/paramètres disponibles dans la fenêtre ***Nouvelle Entrée – Site Web***. Les différentes sections représentent les onglets du menu de gauche.

### Général

| CHAMP/PARAMÈTRE | DESCRIPTION |
| --- | --- |
| Nom | Entrer un nom pour votre entrée. Ce champ est automatiquement rempli par le {{ fr.WBEX }}, mais peut encore être modifié. |
| {{ fr.VLT_MAJ }} | Choisir le {{ fr.VLT }} dans lequel stocker votre nouvelle entrée de site Web dans {{ fr.DHUBB }}. Vous pouvez sélectionner n'importe quel {{ fr.VLT }} disponible, y compris votre ***{{ fr.UVLT }}***. |
| Dossier | Entrer le nom du dossier dans lequel votre nouvelle entrée sera stockée dans {{ fr.DHUBB }}. |
| Hôte | Sélectionner dans la liste déroulante comment le {{ fr.WBEX }} récupérera l'hôte entre ***Personnalisé***, ***Lié ({{ fr.VLT }})***, ou ***Hérité***. Si vous sélectionnez ***Personnalisé***, le champ ***URL*** (voir ci-dessous) apparaîtra. Si vous sélectionnez ***Lié ({{ fr.VLT }})***, une liste déroulante apparaîtra dans laquelle vous pourrez sélectionner l'hôte. |
| URL | Entrer l'URL de la page de connexion du site Web. Ce champ est automatiquement rempli par le {{ fr.WBEX }}, mais peut encore être modifié. |
| Identifiants | Sélectionner dans la liste déroulante entre ***Personnalisé***, ***Lié ({{ fr.VLT }})***, ***Hérité***, ***Mes identifiants personnels***, ***Trouver par nom ({{ fr.UVLT }})***, ou ***Aucun*** pour spécifier au {{ fr.WBEX }} comment récupérer vos identifiants. Certaines de ces options vous donnent accès à des paramètres supplémentaires. |
| Nom d'utilisateur | Entrer le nom d'utilisateur que vous utilisez pour vous connecter au site Web. <br> <br> Ce champ est uniquement disponible si ***Personnalisé*** est sélectionné dans la liste déroulante ***Identifiants***. |
| Domaine | Entrer un domaine pour le site Web. <br> <br> Ce champ est uniquement disponible si ***Personnalisé*** est sélectionné dans la liste déroulante ***Identifiants***. |
| Mot de passe | Entrer le mot de passe que vous utilisez pour vous connecter au site Web. Le mot de passe sera caché. Sous le champ se trouve un indicateur de force pour votre mot de passe. <br> <br> Ce champ est uniquement disponible si ***Personnalisé*** est sélectionné dans la liste déroulante ***Identifiants***. |
| Révéler/Cacher le mot de passe | Révéler ou cacher le mot de passe qui a été entré. <br> <br> Ce champ est uniquement disponible à côté du champ ***Mot de passe*** si ***Personnalisé*** est sélectionné dans la liste déroulante ***Identifiants***. |
| Générateur de mot de passe | Ouvrir la fenêtre ***Générateur de mot de passe***, qui vous permet de créer un mot de passe fort et sécurisé adapté à vos besoins et aux exigences du site Web. |
| Type de comparaison | Sélectionner comment l'URL entrée est comparée et associée à l'URL du site Web. Choisir entre ***Défaut***, ***Domaine de base***, ***Comparer regex avec domaine URL***, ***Comparer regex avec URL complète***, ***Hôte***, ***Commence par***, ***Exact***, ou ***Jamais***. |
| {{ fr.WBEX }} | Sélectionner dans la liste déroulante entre ***Défaut***, ***Désactivé***, ou ***Activé***. Si désactivé, vos identifiants pour cette entrée ne seront pas suggérés lors de l'accès à ce site Web particulier. Nous recommandons de laisser cette option activée. |

### Connexion

| CHAMP/PARAMÈTRE | DESCRIPTION |
| --- | --- |
| Authentification | Sélectionner entre ***Formulaire*** ou ***Basique*** selon le site Web. La valeur par défaut est ***Formulaire*** et, dans la plupart des cas, elle ne doit pas être modifiée. |
| Remplissage automatique de la connexion | Activer cette option si vous voulez que le {{ fr.WBEX }} remplisse automatiquement vos identifiants lors du chargement de la page de connexion du site Web. Cela s'applique uniquement à cette entrée spécifique. <br> <br> ***Remplissage automatique de la connexion*** est similaire à la fonctionnalité ***Remplir automatiquement les identifiants au chargement*** dans les [***Paramètres***](/workspace/workspace-browser-extension/settings/) du {{ fr.WBEX }}, à la différence que la première s'applique uniquement à l'entrée spécifique et la seconde à toutes vos entrées. Notez que le paramètre du {{ fr.WBEX }} a la priorité sur le paramètre ***Remplissage automatique de la connexion***. |
| Soumission automatique | Activer cette option si vous voulez que le {{ fr.WBEX }} soumette automatiquement vos identifiants après leur saisie. Cela s'applique uniquement à cette entrée spécifique. <br> <br> ***Soumission automatique*** est similaire à la fonctionnalité ***Soumettre automatiquement le formulaire après le remplissage*** dans les [***Paramètres***](/workspace/workspace-browser-extension/settings/) du {{ fr.WBEX }}, à la différence que la première s'applique uniquement à l'entrée spécifique et la seconde à toutes vos entrées. Notez que le paramètre du {{ fr.WBEX }} a la priorité sur le paramètre ***Soumission automatique***. |
| Encodage des identifiants dans l'URL | Activer cette option pour encoder les identifiants dans l'URL du site Web. <br> <br> Cette option est uniquement disponible si ***Basique*** est sélectionné dans la liste déroulante ***Authentification***. |
| Délai de remplissage automatique | Activer cette option pour appliquer un délai avant que le {{ fr.WBEX }} remplisse automatiquement vos identifiants. <br> <br> Cette option est uniquement disponible si ***Formulaire*** est sélectionné dans la liste déroulante ***Authentification***. |

### URLs Équivalents

| CHAMP/PARAMÈTRE | DESCRIPTION |
| --- | --- |
| Ajouter | Ajouter une nouvelle URL équivalente. |
| Site Web | Entrer une URL qui mène à la même page ou est équivalente à celle dans le champ ***URL***. |
| Type de comparaison | Sélectionner comment l'URL entrée est comparée et associée à l'URL du site Web. Choisir entre ***Défaut***, ***Domaine de base***, ***Comparer regex avec domaine URL***, ***Comparer regex avec URL complète***, ***Hôte***, ***Commence par***, ***Exact***, ou ***Jamais***. |

### Contrôles Personnalisés

| CHAMP/PARAMÈTRE | DESCRIPTION |
| --- | --- |
| Ajouter | Ajouter un nouveau ***Contrôle Personnalisé***. |
| ID du formulaire | Entrer l'***ID du formulaire*** du site Web de connexion. |
| ID du contrôle | Entrer l'***ID du contrôle*** du site Web de connexion. |
| Type d'entrée | Sélectionner le ***Type d'entrée*** entre ***texte***, ***email***, ou ***mot de passe***. |
| Valeur | Entrer la ***Valeur*** pour votre ***Contrôle Personnalisé***. |
| Masquer les informations | Activer cette option pour cacher les informations dans le champ ***Valeur***. Cela fait également apparaître le bouton ***Révéler/Cacher le mot de passe*** et l'indicateur de force du mot de passe. |
| Révéler/Cacher le mot de passe | Révéler ou cacher le mot de passe qui a été entré. <br> <br> Ce champ est uniquement disponible à côté du champ ***Valeur*** si l'option ***Masquer les informations*** est activée. |
| Toujours demander la valeur | Activer cette option pour que vous soyez invité à entrer la valeur chaque fois au lieu de remplir le champ ***Valeur*** ci-dessus. |

### ID de Contrôle HTML

| CHAMP/PARAMÈTRE | DESCRIPTION |
| --- | --- |
| ID du formulaire | Entrer l'***ID du formulaire*** du site Web de connexion. |
| ID du nom d'utilisateur | Entrer l'***ID du nom d'utilisateur*** du site Web de connexion. |
| ID du domaine | Entrer l'***ID du domaine*** du site Web de connexion. |
| ID du mot de passe | Entrer l'***ID du mot de passe*** du site Web de connexion. |
| ID du mot de passe à usage unique | Entrer l'***ID du mot de passe à usage unique*** du site Web de connexion. |
| ID du bouton de connexion | Entrer l'***ID du bouton de connexion*** du site Web de connexion. |

### OTP

| CHAMP/PARAMÈTRE | DESCRIPTION |
| --- | --- |
| Source | Sélectionner la ***Source*** OTP dans la liste déroulante entre ***Aucun***, ***Personnalisé***, ***Lié ({{ fr.VLT }})***, ***Session actuelle***, ***Demander***, ou ***Hérité***. Sélectionner ***Personnalisé*** vous donne accès aux autres paramètres de ce tableau. |
| Clé | Entrer votre ***Clé*** OTP. <br> <br> Ce champ est uniquement disponible si ***Personnalisé*** est sélectionné dans la liste déroulante ***Source***. |
| Révéler/Cacher le mot de passe | Révéler ou cacher la clé OTP entrée dans le champ ***Clé***. <br> <br> Ce bouton est uniquement disponible à côté du champ ***Clé*** si ***Personnalisé*** est sélectionné dans la liste déroulante ***Source***. |
| Compte | Entrer vos informations de ***Compte***. <br> <br> Ce champ est uniquement disponible si ***Personnalisé*** est sélectionné dans la liste déroulante ***Source***. |
| QR Code - Application | Entrer votre ***QR Code*** OTP. <br> <br> Ce champ est uniquement disponible si ***Personnalisé*** est sélectionné dans la liste déroulante ***Source***. |
| Durée de validité | Définir la durée de validité de chaque mot de passe (en secondes). Cette valeur doit être réglée à au moins 15 secondes. <br> <br> Ce champ est uniquement disponible si ***Personnalisé*** est sélectionné dans la liste déroulante ***Source***. |
| Taille du code | Sélectionner la taille du code, entre ***6 Chiffres*** ou ***8 Chiffres***. <br> <br> Cette liste déroulante est uniquement disponible si ***Personnalisé*** est sélectionné dans la liste déroulante ***Source***. |
| Algorithme de hachage | Sélectionner l'algorithme de hachage sécurisé (SHA) entre ***SHA-1***, ***SHA-256***, ou ***SHA-512***. <br> <br> Cette liste déroulante est uniquement disponible si ***Personnalisé*** est sélectionné dans la liste déroulante ***Source***. <br> <br> Pour en savoir plus sur l'algorithme de hachage sécurisé, visitez [SHA-256](/workspace/kb/general-knowledge/what-is-sha-256/). |

### Champs Personnalisés

| CHAMP/PARAMÈTRE | DESCRIPTION |
| --- | --- |
| Personnalisé #1-5 | Entrer un nom pour le champ personnalisé. |
| Valeur | Entrer une valeur pour le champ personnalisé. |
| Masquer/Révéler | Masquer ou révéler la valeur du champ personnalisé. Ce bouton est uniquement disponible pour les ***Champs Personnalisés Cachés*** (voir ci-dessous). La valeur d'un champ personnalisé caché est chiffrée et protégée avec la permission ***Voir sensible***. |
| Ajouter | Créer un nouveau champ personnalisé en utilisant ce bouton. Vous pouvez choisir entre ***Texte*** ou ***Caché***. Les deux vous permettent d'entrer une valeur pour votre champ personnalisé. Sélectionner ***Texte*** vous donne plus d'options de texte dans le champ ***Valeur***, tandis que sélectionner ***Caché*** vous donne accès à l'option ***Masquer/Révéler*** (voir paramètre ci-dessus). |

### Description

| CHAMP/PARAMÈTRE | DESCRIPTION |
| --- | --- |
| Description | Entrer une description pour votre nouvelle entrée. |
| Tags | Ajouter des mots-clés (tags) pour vous aider à trouver votre entrée ou pour mieux les catégoriser. Appuyez sur la touche <kbd>Entrée</kbd> après avoir entré chaque tag pour les séparer. |
| Expire après | Activer cette option pour définir une date d'expiration pour votre entrée. Vous pouvez sélectionner la date dans le champ à côté de ce paramètre. |
| Hôte | Entrer le nom de l'hôte. |
| Employé | Entrer le nom de l'employé. |

### Autres

Ce sont les boutons en bas de la fenêtre ***Nouvelle Entrée – Site Web*** qui sont disponibles quel que soit l'onglet.

| CHAMP/PARAMÈTRE | DESCRIPTION |
| --- | --- |
| Ajouter | Sauvegarder les paramètres de votre nouvelle entrée de site Web et créer l'entrée. |
| Annuler | Annuler la création d'une nouvelle entrée de site Web et effacer tous les changements non sauvegardés aux paramètres. |

{% snippet, "badgeInfo" %}
Suivez notre guide étape par étape expliquant comment [ajouter une entrée de site Web](/workspace/workspace-browser-extension/hub-business/using-workspace-browser-extension/add-entry-hub-business-workspace-browser-extension/) dans {{ fr.DHUBB }} avec le {{ fr.WBEX }}.
{% endsnippet %}
