---
eleventyComputed:
  title: Export html chiffré
---
Le format d'exportation Html Chiffré a été conçu pour des exportations simples et sécurisées des entrées. Il permet une exportation html des informations d'entrée tout en utilisant le chiffrement symétrique (AES-256) pour chiffrer les informations sensibles telles que les mots de passe. Le fichier est un fichier html ultra portable et autonome qui ne nécessite aucun fichier de script externe ni installation. Tant que vous disposez d'un navigateur web avec JavaScript activé, vous pouvez accéder à vos données chiffrées.

{% snippet, "shieldNotice" %}
Avec un document chiffré sécurisé, vous pouvez librement envoyer les informations par courriel ou tout autre protocole sans compromettre les données sensibles. Utilisez l'exportation comme moyen de partage ou comme sauvegarde pour les informations sensibles.
{% endsnippet %}

## Paramètres

Sélectionner les entrées à exporter ou exporter le {{ fr.VLT }}. Clic droit et sélectionner Exporter – Exporter Spécial – Exporter Sélection (.html) ou utiliser Fichier – Exporter – Exporter {{ fr.VLT }} (.html). Vous serez invité à saisir un mot de passe pour la clé de chiffrement symétrique. Sélectionner le nom de fichier pour le nouveau document. Une fois l'exportation terminée, le fichier s'ouvrira dans votre navigateur par défaut.

{% snippet, "badgeWarning" %}
Assurez-vous de ne pas oublier le mot de passe car vous ne pourrez pas déchiffrer les données sans celui-ci.
{% endsnippet %}

Lors de l'exportation de plusieurs entrées toutes contenues dans le même fichier, au moment du déchiffrement, chaque valeur chiffrée doit être déchiffrée individuellement pour des raisons de sécurité. Une fois que vous avez terminé avec les données sensibles, appuyez simplement sur la touche F5 de votre clavier pour actualiser le fichier ou fermez-le simplement. Vos données sont maintenant à l'abri des regards indiscrets.

### AES-256

Nous utilisons AES-256 pour chiffrer/déchiffrer vos données sensibles. Étant donné que le déchiffrement est entièrement effectué dans le navigateur, il n'est pas nécessaire d'utiliser des outils externes, de télécharger ou d'installer quoi que ce soit.
![Valeur Chiffrée](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10883.png)

### Sauvegarde Virtuelle Sûre & Intelligente

De plus, l'exportation HTML utilisant le chiffrement symétrique est un excellent moyen de sauvegarder de manière sécurisée vos mots de passe et autres informations sensibles. Elle vous permet de partager des informations par courriel ou simplement d'envoyer le fichier à votre compte de courriel personnel comme sauvegarde.