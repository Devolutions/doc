---
eleventyComputed:
  title: Qu'est-ce que le SHA-256 ?
  description: La famille de l'algorithme de hachage sécurisé (SHA) comprend plusieurs fonctions de hachage cryptographiques, le SHA-256 étant une variante largement utilisée.
---
La famille de l'algorithme de hachage sécurisé (SHA) comprend plusieurs fonctions de hachage cryptographiques, le SHA-256 étant une variante largement utilisée. Les hachages cryptographiques agissent comme des signatures numériques pour les données, permettant de comparer de grands ensembles de données par leurs valeurs de hachage plutôt que par leur contenu complet. Cette méthode est similaire à l'utilisation des empreintes digitales pour l'identification—chaque ensemble de données a un hachage unique, et même une modification mineure des données change la valeur du hachage.

Le SHA-256 génère un hachage distinctif, de taille fixe de 256 bits (32 octets), fonctionnant comme un processus à sens unique qui le rend excellent pour les vérifications d'intégrité des données, les défis d'authentification, les mesures anti-altération, les signatures numériques et les applications de blockchain.

Par exemple, lors du téléchargement d'applications comme celles de Devolutions, le SHA-256 aide à vérifier que les données reçues correspondent à l'original, assurant qu'elles n'ont pas été altérées en raison d'erreurs de réseau ou d'attaques de maliciels. Pour vérifier le hachage d'un fichier, cliquez simplement sur l'icône SHA-256 sur la page de téléchargement du site Web de Devolutions.

Pour obtenir des conseils supplémentaires sur comment obtenir le hachage SHA-256 d'un fichier, reportez-vous à la documentation de Microsoft sur la commande [Get-FileHash](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/get-filehash?view=powershell-7.2). Voici comment vous pouvez l'utiliser :

```powershell
Get-FileHash C:\Users\user1\Downloads\Setup.RemoteDesktopManager.exe -Algorithm SHA256 | Format-List.
```

Cette commande fournit une sortie structurée de la valeur du hachage, aidant à vérifier facilement l'intégrité de votre fichier.
