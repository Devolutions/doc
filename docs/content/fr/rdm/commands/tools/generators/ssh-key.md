---
eleventyComputed:
  title: Générateur de clés SSH
  description: Les clés SSH offrent un moyen sécurisé de se connecter à un serveur privé virtuel avec SSH plutôt que d'utiliser un mot de passe seul.
---
Les clés SSH offrent un moyen sécurisé de se connecter à un serveur privé virtuel avec SSH plutôt que d'utiliser un mot de passe seul. Alors qu'un mot de passe peut éventuellement être craqué avec une attaque par force brute, les clés SSH sont presque impossibles à déchiffrer par la force brute seule.

Le ***Générateur de clés SSH*** se trouve sous ***Outils*** dans le ruban de {{ fr.RDM }}.

![Outils – Générateur de clés SSH](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6254.png)  

### Paramètres

![Générateur de clés SSH](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6255.png) 

| PARAMÈTRES       | DESCRIPTION                                   |
|----------------|-----------------------------------------------|
| Algorithme      | Vous pouvez choisir entre : <ul><li>RSA : RSA peut être utilisé pour la signature/vérification et aussi pour le chiffrement/déchiffrement. Lors de l'utilisation de RSA, il est recommandé d'utiliser une taille de clé de 2048 bits.</li><li>DSA : Il est plus rapide pour la signature mais plus lent pour la vérification. Il ne peut être utilisé que pour la signature/vérification, il ne chiffre/déchiffre pas. Lors de l'utilisation de DSA, il est recommandé d'utiliser une taille de clé de 1024 bits.</li></ul>                                    |
| Taille de clé       | Vous pouvez choisir la taille de votre clé SSH entre :<ul><li> 1024 bits : Taille minimale de clé</li> <li>2048 bits : Taille de clé par défaut et recommandée</li><li>4096 bits : Taille maximale de clé</li></ul>                                               |
| Commentaire        | Entrez votre nom d'utilisateur et le nom de l'ordinateur auquel vous transférez votre clé.                                                                                                                  |
| Format de clé (Clé publique)     | Le format de clé fait référence à la structure et au codage utilisés pour stocker les données de la clé. Une variété de formats de clés sont pris en charge, tels que ***Standard, OpenSSH, PKCS#1,*** et ***PKCS#8***. 
| Phrase secrète     | Choisissez une phrase secrète pour la clé privée.                                                                                               |                           
| Confirmer la phrase secrète      | Confirmez la phrase secrète pour la clé privée.                                                                                               |                     
| Format de clé (Clé privée)    | Différents formats de clés privées sont pris en charge, tels que ***OpenSSH, PuTTY, PKCS#1,*** et ***PKCS#8***.                                                                                                         |
| Tours         | Spécifier un nombre plus élevé de tours pour la fonction de dérivation de clé augmente le temps nécessaire pour traiter la phrase secrète lorsque la clé est utilisée.                                                                                                                  |
| Charger la clé privée | Cette fonctionnalité vous permettra d'importer une clé SSH précédemment sauvegardée.                                 |
| Sauvegarder la clé publique  | Sauvegarder la clé publique générera un fichier *.pub. Entrez simplement un nom de fichier lorsque cela vous est demandé.                                                                                                                                         |
| Sauvegarder la clé privée | Vous aurez l'option de sauvegarder votre clé privée dans différents formats, choisissez entre : <ul><li>Clé privée PKCS #8 (*.pri) </li><li> Clé privée PuTTY (*.ppk)</li><li> Clé privée OpenSSH (*.pri)</li></ul>  |

Si vous n'avez pas spécifié de phrase secrète, vous devrez confirmer que vous ne souhaitez pas utiliser de phrase secrète.
{% snippet, "badgeCaution" %} 
Lors de l'utilisation du [Gestionnaire d'agent de clés SSH](/rdm/windows/commands/tools/tools/key-agent-manager/) vous devez sélectionner le format de fichier Clé privée PuTTY (.ppk) ou le format de fichier Clé privée OpenSSH (.pri). Le format de fichier Clé privée PKCS n'est pas un format de fichier pris en charge pour le Gestionnaire d'agent de clés SSH.
{% endsnippet %}
