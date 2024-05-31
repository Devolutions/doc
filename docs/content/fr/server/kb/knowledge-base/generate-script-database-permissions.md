---
eleventyComputed:
  title: Générer un script pour les permissions de base de données
---
Les instructions suivantes fournissent la méthode pour générer un script SQL afin d'octroyer des permissions aux comptes utilisés pour communiquer avec la base de données SQL. Les fichiers scriptsql peuvent être générés pour le compte du Service Planificateur et le compte de l'Application Web. Pour ces comptes, consulter cet article de la base de connaissances sur [l'Enquête des Comptes Pré-Déploiement](/server/kb/knowledge-base/pre-deployment-account-survey/).

Pour accéder à cette boîte de dialogue :

1. Depuis la {{ fr.DVLSCONSOLE }}, éditer l'instance {{ fr.DVLS }}.
2. Aller dans l'onglet ***Base de données***.
3. Cliquer sur le bouton ***Identifiants Avancés***.
4. Cliquer sur la flèche à côté de l'un des boutons ***Appliquer les Permissions Minimales***.
5. Cliquer sur le bouton ***Générer le Script*** pour sauvegarder le fichier sql.
![Modifier – Base de données – Identifiants Avancés – Appliquer les Permissions Minimales – Générer le Script](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2371.png)
