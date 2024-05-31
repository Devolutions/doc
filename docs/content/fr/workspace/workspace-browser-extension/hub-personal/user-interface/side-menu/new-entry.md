```yaml
eleventyComputed:
  title: Nouvelle entrée
```
Le bouton ***Nouvelle Entrée*** n'est disponible que lorsque vous êtes dans l'onglet [***Correspondance***](/workspace/workspace-browser-extension/hub-personal/user-interface/side-menu/#matching-tab), qui est l'onglet sélectionné lors de l'ouverture de l'extension, ou lorsque vous parcourez les entrées de l'onglet [***Toutes les Entrées***](/workspace/workspace-browser-extension/hub-personal/user-interface/side-menu/#all-entries-tab). Vous pouvez choisir de créer une nouvelle entrée de type ***Site Web***, ***Carte de Crédit***, ***Contact***, ou ***Note Sécurisée***.
![Sélection du Type de Nouvelle Entrée](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2134.png)

Lorsque le type d'entrée est sélectionné, un nouvel onglet s'ouvre dans votre navigateur qui vous permet d'ajouter une entrée de ce type dans {{ fr.DHUBP }} via le {{ fr.WBEX }}.

Lorsque {{ fr.DHUBP }} est utilisé comme source de données, la configuration de base de l'entrée se fait dans l'onglet ***Général***, mais d'autres paramètres sont également disponibles dans d'autres onglets. Ci-dessous un exemple des paramètres de l'onglet ***Général*** lors de la création d'une entrée de site web.
![Nouvelle Entrée – Site Web (Onglet Général)](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2135.png)

Les tableaux ci-dessous listent tous les champs/paramètres disponibles dans les fenêtres ***Nouvelle Entrée***. Les différentes sections et sous-sections représentent les types d'entrées et les onglets du menu de gauche respectivement.

## Entrée de Site Web

### Général

| CHAMP/PARAMÈTRE | DESCRIPTION |
| --- | --- |
| Nom | Saisir un nom pour votre entrée. Ce champ est automatiquement rempli par le {{ fr.WBEX }}, mais peut encore être modifié. |
| Dossier | Saisir le nom du dossier dans lequel votre nouvelle entrée sera stockée dans {{ fr.DHUBP }}. |
| Sélectionner Dossier | Sélectionner dans une vue arborescente le dossier dans lequel votre nouvelle entrée sera stockée dans {{ fr.DHUBP }}. Vous pouvez également créer un nouveau dossier et modifier ou supprimer les existants. |
| Hôte | Sélectionner dans la liste déroulante comment le {{ fr.WBEX }} va récupérer l'hôte entre ***Personnalisé***, ***Lié ({{ fr.VLT }})***, ou ***Hérité***. Si vous sélectionnez ***Personnalisé***, le champ ***URL*** (voir ci-dessous) apparaîtra. Si vous sélectionnez ***Lié ({{ fr.VLT }})***, une liste déroulante apparaîtra dans laquelle vous pourrez sélectionner l'hôte. |
| URL | Saisir l'URL de la page de connexion du site web. Ce champ est automatiquement rempli par le {{ fr.WBEX }}, mais peut encore être modifié. |
| Identifiants | Sélectionner dans la liste déroulante entre ***Personnalisé***, ***Lié ({{ fr.VLT }})***, ***Hérité***, ***Mes identifiants personnels***, ou ***Aucun*** pour spécifier au {{ fr.WBEX }} comment récupérer vos identifiants. Certaines de ces options vous donnent accès à des paramètres supplémentaires. |
| Nom d'utilisateur | Saisir le nom d'utilisateur que vous utilisez pour vous connecter au site web. <br> <br> Ce champ n'est disponible que si ***Personnalisé*** est sélectionné dans la liste déroulante ***Identifiants***. |
| Domaine | Saisir un domaine pour le site web. <br> <br> Ce champ n'est disponible que si ***Personnalisé*** est sélectionné dans la liste déroulante ***Identifiants***. |
| Mot de passe | Saisir le mot de passe que vous utilisez pour vous connecter au site web. Le mot de passe sera caché. Sous le champ se trouve un indicateur de force pour votre mot de passe. <br> <br> Ce champ n'est disponible que si ***Personnalisé*** est sélectionné dans la liste déroulante ***Identifiants***. |
| Révéler/Cacher mot de passe | Révéler ou cacher le mot de passe qui a été saisi. <br> <br> Ce champ n'est disponible qu'à côté du champ ***Mot de passe*** si ***Personnalisé*** est sélectionné dans la liste déroulante ***Identifiants***. |
| Générateur de Mot de Passe | Ouvrir la fenêtre ***Générateur de Mot de Passe***, qui vous permet de créer un mot de passe fort et sécurisé adapté à vos besoins et aux exigences du site web. |
| Type de Comparaison | Sélectionner comment l'URL saisie est comparée et associée à l'URL du site web. Choisir entre ***Défaut, Domaine de base***, ***Comparer regex avec domaine URL***, ***Comparer regex avec URL complète***, ***Hôte***, ***Commence par***, ***Exact***, ***ou Jamais***. |
| {{ fr.WBEX }} | Sélectionner dans la liste déroulante entre ***Défaut***, ***Désactivé***, ou ***Activé***. Si désactivé, vos identifiants pour cette entrée ne seront pas suggérés lors de l'accès à ce site web particulier. Nous recommandons de laisser cette option activée. |

### Connexion

| CHAMP/PARAMÈTRE | DESCRIPTION |
| --- | --- |
| Authentification | Sélectionner entre ***Formulaire*** ou ***Basique*** selon le site web. La valeur par défaut est ***Formulaire*** et ne nécessite généralement pas de modification. |
| Remplissage automatique de connexion | Activer pour remplir automatiquement les identifiants sur la page de connexion du site web pour cette entrée. Remplace l'option [***Paramètres***](/workspace/workspace-browser-extension/settings/) du {{ fr.WBEX }}. |
| Soumission automatique | Activer pour soumettre automatiquement les identifiants remplis pour cette entrée. Remplace l'option [***Paramètres***](/workspace/workspace-browser-extension/settings/) du {{ fr.WBEX }}. |
| Encodage URL des identifiants | Activer pour encoder les identifiants dans l'URL du site web. Disponible uniquement si ***Basique*** est sélectionné dans ***Authentification***. |
| Délai de remplissage automatique | Activer pour appliquer un délai avant que le {{ fr.WBEX }} ne remplisse les identifiants. Disponible uniquement si ***Formulaire*** est sélectionné dans ***Authentification***. |

### URLs Équivalents

| CHAMP/PARAMÈTRE | DESCRIPTION |
| --- | --- |
| Ajouter | Ajouter une nouvelle URL équivalente. |
| Site Web | Saisir une URL qui mène à la même page ou qui est équivalente à celle dans le champ ***URL***. |
| Type de Comparaison | Sélectionner comment l'URL saisie est comparée et associée à l'URL du site web. Choisir entre ***Défaut***, ***Domaine de base***, ***Comparer regex avec domaine URL***, ***Comparer regex avec URL complète***, ***Hôte***, ***Commence par***, ***Exact***, ou ***Jamais***. |

### Contrôles Personnalisés

| CHAMP/PARAMÈTRE         | DESCRIPTION                                                                                               |
|------------------------|-----------------------------------------------------------------------------------------------------------|
| Ajouter                    | Ajouter un nouveau ***Contrôle Personnalisé***.                                                                           |
| ID de Formulaire                | Saisir l'***ID de Formulaire*** du site web de connexion.                                                              |
| ID de Contrôle             | Saisir l'***ID de Contrôle*** du site web de connexion.                                                           |
| Type d'Entrée             | Sélectionner le ***Type d'Entrée*** entre ***texte***, ***email***, ou ***mot de passe***.                            |
| Valeur                  | Saisir la ***Valeur*** pour votre ***Contrôle Personnalisé***.                                                       |
| Masquer les informations       | Activer cette option pour cacher les informations dans le champ ***Valeur***. Cela rend également le bouton ***Révéler/Cacher mot de passe*** et l'indicateur de force du mot de passe disponibles. |
| Révéler/Cacher mot de passe   | Révéler ou cacher le mot de passe qui a été saisi. <br> <br> Ce champ n'est disponible qu'à côté du champ ***Valeur*** si l'option ***Masquer les informations*** est activée. |
| Toujours demander la valeur | Activer cette option pour que vous soyez invité à saisir la valeur chaque fois au lieu de remplir le champ ***Valeur*** ci-dessus. |

### ID de Contrôle HTML

| CHAMP/PARAMÈTRE         | DESCRIPTION                                               |
|------------------------|-----------------------------------------------------------|
| ID de Formulaire                | Saisir l'***ID de Formulaire*** du site web de connexion.              |
| ID d'Utilisateur            | Saisir l'***ID d'Utilisateur*** du site web de connexion.          |
| ID de Domaine              | Saisir l'***ID de Domaine*** du site web de connexion.            |
| ID de Mot de Passe              | Saisir l'***ID de Mot de Passe*** du site web de connexion.          |
| ID de Mot de Passe à Usage Unique   | Saisir l'***ID de Mot de Passe à Usage Unique*** du site web de connexion. |
| ID de Bouton de Connexion        | Saisir l'***ID de Bouton de Connexion*** du site web de connexion.      |

### Questions de Sécurité

| CHAMP/PARAMÈTRE          | DESCRIPTION                                                     |
|-------------------------|-----------------------------------------------------------------|
| Question                | Saisir une ***Question*** personnalisée pour sécuriser votre entrée.             |
| Réponse                  | Saisir la ***Réponse*** personnalisée à votre question de sécurité.        |
| Révéler/Cacher mot de passe    | Révéler ou cacher la ***Réponse*** qui a été saisie.               |

### OTP

| CHAMP/PARAMÈTRE          | DESCRIPTION                                                                                                               |
|-------------------------|---------------------------------------------------------------------------------------------------------------------------|
| Source                  | Sélectionner dans la liste déroulante entre ***Aucun***, ***Personnalisé***, ***Lié ({{ fr.VLT }})***, ***Session actuelle***, ***Demander***, ou ***Hérité***. Sélectionner ***Personnalisé*** vous donne accès aux autres paramètres de ce tableau. |
| Clé                     | Saisir votre ***Clé OTP***. <br> <br> Ce champ n'est disponible que si ***Personnalisé*** est sélectionné dans la liste déroulante ***Source***. |
| Révéler/Cacher mot de passe    | Révéler ou cacher la clé OTP saisie dans le champ ***Clé***. <br> <br> Ce bouton n'est disponible qu'à côté du champ ***Clé*** si ***Personnalisé*** est sélectionné dans la liste déroulante ***Source***. |
| Compte                 | Saisir vos informations de ***Compte***. <br> <br> Ce champ n'est disponible que si ***Personnalisé*** est sélectionné dans la liste déroulante ***Source***. |
| QR Code - Application  | Saisir votre ***QR Code OTP***. <br> <br> Ce champ n'est disponible que si ***Personnalisé*** est sélectionné dans la liste déroulante ***Source***. |
| Intervalle de Temps               | Définir la durée de validité de chaque mot de passe (en secondes). Cette valeur doit être réglée à au moins 15 secondes. <br> <br> Ce champ n'est disponible que si ***Personnalisé*** est sélectionné dans la liste déroulante ***Source***. |
| Taille du Code               | Sélectionner la taille du code, entre ***6 Chiffres*** ou ***8 Chiffres***. <br> <br> Cette liste déroulante n'est disponible que si ***Personnalisé*** est sélectionné dans la liste déroulante ***Source***. |
| Algorithme de Hachage          | Sélectionner l'algorithme de hachage sécurisé (SHA) entre ***SHA-1***, ***SHA-256***, ou ***SHA-512***. <br> <br> Cette liste déroulante n'est disponible que si ***Personnalisé*** est sélectionné dans la liste déroulante ***Source***. <br> <br> Pour en savoir plus sur l'algorithme de hachage sécurisé, visitez [SHA-256](/workspace/kb/general-knowledge/what-is-sha-256/). |

### Codes de Récupération OTP

| CHAMP/PARAMÈTRE          | DESCRIPTION                                                                               |
|-------------------------|-------------------------------------------------------------------------------------------|
| Ajouter                     | Ajouter un nouveau ***Code de Récupération OTP***.                                                       |
| Code                    | Saisir un ***Code de Récupération OTP***. Sous le champ se trouve un indicateur de force pour votre code.  |
| Révéler/Cacher mot de passe    | Révéler ou cacher le ***Code de Récupération OTP*** qui a été saisi dans le champ ***Code***. |
| Est valide                | Activer ce paramètre si le ***Code de Récupération OTP*** spécifié est valide.                   |

### Champs Personnalisés

| CHAMP/PARAMÈTRE | DESCRIPTION                                                                                           |
|---------------|-------------------------------------------------------------------------------------------------------|
| Personnalisé #1-5   | Saisir un nom pour le champ personnalisé.                                                                   |
| Valeur         | Saisir une valeur pour le champ personnalisé.                                                                  |
| Masquer/Révéler   | Masquer ou révéler la valeur du champ personnalisé. <br> <br> Ce bouton n'est disponible que pour ***Champs Personnalisés Cachés*** (voir ci-dessous). La valeur d'un champ personnalisé caché est chiffrée et protégée avec la permission ***Voir sensible***. |
| Ajouter           | Créer un nouveau champ personnalisé en utilisant ce bouton. Vous pouvez sélectionner entre ***Texte*** ou ***Caché***. Les deux vous permettent de saisir une valeur pour votre champ personnalisé. Sélectionner ***Texte*** vous donne plus d'options de texte dans le champ ***Valeur***, tandis que sélectionner ***Caché*** vous donne accès à l'option ***Masquer/Révéler*** (voir paramètre ci-dessus). |

### Description

| CHAMP/PARAMÈTRE  | DESCRIPTION                                                                                         |
|-----------------|-----------------------------------------------------------------------------------------------------|
| Description     | Saisir une description pour votre nouvelle entrée.                                                            |
| Tags            | Ajouter des mots-clés (tags) pour vous aider à trouver votre entrée ou pour mieux les catégoriser. Appuyez sur la touche <kbd>Entrée</kbd> après avoir saisi chaque tag pour les séparer. |
| Expire après   | Activer cette option pour définir une date d'expiration pour votre entrée. Vous pouvez sélectionner la date dans le champ à côté de ce paramètre. |
| Hôte            | Saisir le nom de l'hôte.                                                                        |
| Employé        | Saisir le nom de l'employé.                                                                    |

### Autres

Ce sont les boutons en bas de la fenêtre ***Nouvelle Entrée – Site Web*** qui sont disponibles peu importe l'onglet.

| CHAMP/PARAMÈTRE | DESCRIPTION                                                                                                       |
|---------------|-------------------------------------------------------------------------------------------------------------------|
| Ajouter           | Sauvegarder les paramètres de votre nouvelle entrée de site web et créer l'entrée.                                                |
| Annuler        | Annuler la création d'une nouvelle entrée de site web et effacer tous les changements non sauvegardés aux paramètres.                             |

## Entrée de Carte de Crédit

### Général

| CHAMP/PARAMÈTRE                        | DESCRIPTION                                                                                                      |
|--------------------------------------|------------------------------------------------------------------------------------------------------------------|
| Nom                                 | Saisir un nom pour votre entrée. Ce champ est automatiquement rempli par le {{ fr.WBEX }}, mais peut encore être modifié.   |
| Dossier                               | Saisir le nom du dossier dans lequel votre nouvelle entrée sera stockée dans {{ fr.DHUBP }}.                             |
| Sélectionner Dossier                        | Sélectionner dans une vue arborescente le dossier dans lequel votre nouvelle entrée sera stockée dans {{ fr.DHUBP }}. Vous pouvez également créer un nouveau dossier et modifier ou supprimer les existants. |
| Propriétaire de la Carte                           | Saisir le nom du propriétaire de la carte.                                                                         |
| Type de Carte                            | Saisir le type de carte.                                                                                         |
| Numéro de Carte                          | Saisir le numéro sur la carte.                                                                                   |
| Révéler/Cacher mot de passe (pour Numéro de Carte)| Révéler ou cacher le ***Numéro de Carte*** qui a été saisi.                                                           |
| Date d'Expiration                      | Saisir la ***Date d'Expiration*** de la carte.                                                                     |
| Validation (CVC)                     | Saisir le numéro ***Validation (CVC)*** de la carte.                                                             |
| Révéler/Cacher mot de passe (pour Validation (CVC)) | Révéler ou cacher le numéro ***Validation (CVC)*** qui a été saisi.                                         |

### Champs Personnalisés

| CHAMP/PARAMÈT
