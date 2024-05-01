---
eleventyComputed:
  title: Exportation spéciale HTML cryptée
---
Le format d'exportation spéciale HTML cryptée a été conçu pour des exportations d'entrées simples et sécurisées. Il permet une exportation HTML des informations d'entrée tout en utilisant le cryptage symétrique (AES-256) pour crypter les informations sensibles telles que les mots de passe. Le fichier est un fichier HTML autonome, portable qui ne nécessite aucun fichier de script ou d'installation externe. Tant que vous avez un navigateur Web avec JavaScript activé, vous pouvez accéder à vos données cryptées.

{% snippet icon.shieldNotice %}
Avec un document crypté sécurisé, vous pouvez envoyer librement les informations par courriel ou tout autre protocole sans compromettre les données sensibles. Utiliser l'exportation comme moyen de partage ou comme sauvegarde d'informations sensibles.
{% endsnippet %}

## Paramètres

Sélectionner les entrées à exporter ou exporter toutes les entrées. Cliquer avec le bouton droit et sélectionner ***Exporter - Exportation spéciale - Exporter tout (.html)*** ou utiliser ***Fichier - Exporter - Exporter la sélection (.html)***. Vous serez invité à saisir un mot de passe pour la clé de cryptage symétrique. Sélectionner le nom de fichier du nouveau document. Une fois l'exportation terminée, le fichier s'ouvrira dans votre navigateur par défaut.

{% snippet icon.badgeWarning %}
Assurez-vous de ne pas oublier le mot de passe, car vous ne pourrez pas décrypter les données sans lui.
{% endsnippet %}

Lors de l'exportation de plusieurs entrées qui sont toutes contenues dans le même fichier, au moment du décryptage, chaque valeur cryptée doit être décryptée individuellement pour des raisons de sécurité. Une fois que vous avez terminé avec les données sensibles, appuyez sur F5 pour actualiser le fichier ou le fermer. Vos données sont désormais à l'abri des regards indiscrets.

### AES-256
Nous utilisons AES-256 pour crypter/décrypter vos données sensibles. Étant donné que le décryptage est entièrement effectué dans le navigateur, il n'est pas nécessaire d'utiliser des outils externes, des téléchargements ou des installations.
![Valeur cryptée](https://cdnweb.devolutions.net/docs/fr/rdm/mac/clip0291.png)

### Sauvegarde virtuelle sûre et intelligente

De plus, l'exportation HTML à l'aide d'un cryptage symétrique est un excellent moyen de sauvegarder en toute sécurité vos mots de passe et autres informations sensibles. Il vous permet de partager des informations par courriel ou d'envoyer le fichier à votre compte de messagerie personnel en tant que sauvegarde.

