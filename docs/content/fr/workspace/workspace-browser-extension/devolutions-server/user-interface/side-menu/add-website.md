```yaml
eleventyComputed:
  title: Ajouter un site Web
```
Le bouton ***Ajouter un site Web*** est uniquement disponible lorsqu'on se trouve dans l'onglet [Correspondance](/workspace/workspace-browser-extension/devolutions-server/user-interface/side-menu/#matching-tab), qui est l'onglet sélectionné lors de l'ouverture de l'extension, ou lors de la navigation à travers les {{ fr.VLTS }} de l'onglet [Toutes les entrées](/workspace/workspace-browser-extension/devolutions-server/user-interface/side-menu/#all-entries-tab). Il ouvre un nouvel onglet dans votre navigateur qui vous permet d'ajouter une entrée de site Web dans {{ fr.DVLS }} via le {{ fr.WBEX }}.

Lorsque {{ fr.DVLS }} est utilisé comme source de données, la configuration de l'entrée se fait dans l'onglet Général.
![Ajouter un site Web](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2049.png)

Consultez le tableau ci-dessous pour en savoir plus sur chaque champ/paramètre de cette vue.

| CHAMP/PARAMÈTRE                      | DESCRIPTION                                                                           |
|--------------------------------------|---------------------------------------------------------------------------------------|
| Nom                                  | Entrer un nom pour votre entrée. Ce champ est automatiquement rempli par le {{ fr.WBEX }}, mais peut encore être modifié. |
| URL                                  | Entrer l'URL de la page de connexion du site Web. Ce champ est automatiquement rempli par le {{ fr.WBEX }}, mais peut encore être modifié. |
| Ajouter une URL équivalente          | Cliquer sur le bouton ***Ajouter une URL équivalente*** à côté du champ URL pour afficher un champ ***URLs équivalentes*** (voir ci-dessous). Vous pouvez ajouter plus d'un champ ***URLs équivalentes*** en cliquant à nouveau sur le bouton. |
| URLs équivalentes                     | Entrer une URL qui mène à la même page ou qui est équivalente à celle dans le champ ***URL***.<br>Ce champ est uniquement disponible après avoir cliqué sur le bouton ***Ajouter une URL équivalente*** à côté du champ ***URL***. |
| Supprimer                            | Supprimer le champ ***URLs équivalentes*** à côté de ce bouton.<br><br>Ce bouton est uniquement affiché à côté du champ ***URLs équivalentes*** après avoir cliqué sur le bouton ***Ajouter une URL équivalente*** à côté du champ ***URL***. |
| Identifiants                         | Dans la liste déroulante, sélectionner ***Personnalisé***, ***Lié ({{ fr.VLT }})***, ***Hérité***, ***Lié ({{ fr.UVLT }})***, ***Trouver par nom ({{ fr.UVLT }})***, ou ***Aucun*** pour spécifier au {{ fr.WBEX }} comment récupérer vos identifiants. Certaines de ces options donnent accès à des paramètres supplémentaires. |
| Sélection des identifiants           | Sélectionner l'entrée d'identifiants qui sera utilisée pour récupérer les identifiants pour votre nouvelle entrée de site Web. Le {{ fr.WBEX }} ne montrera que les entrées de type ***Entrée d'identifiants*** à lier à votre entrée. L'emplacement de l'entrée d'identifiants doit d'abord être sélectionné dans la liste déroulante {{ fr.VLT }}. Il est également possible de sélectionner ***Demander à la connexion*** pour être interrogé à chaque fois que vous vous connectez. |
| Recherche d'identifiants {{ fr.UVLT_MAJ }} | Entrer le nom de l'identifiant dans votre {{ fr.UVLT }} et le {{ fr.WBEX }} le recherchera pour le nom spécifié. Si le champ est laissé vide, lors du lancement, une liste d'identifiants s'ouvrira avec toutes les entrées d'identifiants disponibles de votre {{ fr.UVLT }}. |
| Nom d'utilisateur                     | Entrer le nom d'utilisateur utilisé pour se connecter au site Web.<br><br>Ce champ est uniquement disponible si ***Personnalisé*** est sélectionné dans la liste déroulante ***Identifiants***. |
| Mot de passe                          | Entrer le mot de passe utilisé pour se connecter au site Web. Le mot de passe sera caché. Sous le champ se trouve un indicateur de force pour votre mot de passe.<br>Ce champ est uniquement disponible si ***Personnalisé*** est sélectionné dans la liste déroulante ***Identifiants***. |
| Révéler/Cacher le mot de passe       | Révéler ou cacher le mot de passe qui a été entré. Ce champ est uniquement disponible à côté du champ ***Mot de passe*** si ***Personnalisé*** est sélectionné dans la liste déroulante ***Identifiants***. |
| Générateur de mot de passe           | Ouvrir la fenêtre ***Générateur de mot de passe***, qui vous permet de créer un mot de passe fort et sécurisé adapté à vos besoins et aux exigences du site Web. |
| Description                          | Entrer une description pour votre nouvelle entrée.                                               |
| {{ fr.VLT_MAJ }}                  | Choisir de stocker votre nouvelle entrée de site Web dans votre {{ fr.UVLT }} ou dans le {{ fr.VLT }} actuellement sélectionné dans {{ fr.DVLS }}. |
| Dossier de destination               | Entrer le nom du dossier dans lequel votre nouvelle entrée sera stockée dans {{ fr.DVLS }}. |
| Enregistrer                          | Enregistrer les paramètres de votre nouvelle entrée de site Web et créer l'entrée.                     |
| Annuler                              | Annuler la création d'une nouvelle entrée de site Web et effacer tous les changements non sauvegardés aux paramètres. |

{% snippet, "badgeInfo" %}
Suivre notre guide étape par étape sur comment [ajouter une entrée de site Web avec le {{ fr.WBEX }}](/workspace/workspace-browser-extension/devolutions-server/using-workspace-browser-extension/add-website-entry-workspace-browser-extension/).
{% endsnippet %}
