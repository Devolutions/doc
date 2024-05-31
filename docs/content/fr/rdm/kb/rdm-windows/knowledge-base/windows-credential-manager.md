---
eleventyComputed:
  title: Gestionnaire d'informations d'identification Windows
---
Le ***Gestionnaire d'informations d'identification Windows*** permet de stocker des identifiants, tels que des noms d'utilisateur et des mots de passe, que vous pouvez utiliser pour vous connecter à des sites Web ou à d'autres ordinateurs sur un réseau. En stockant vos identifiants, Windows peut vous connecter automatiquement à des sites Web ou à d'autres ordinateurs. Les identifiants sont sauvegardés dans des dossiers spéciaux sur votre ordinateur appelés {{ fr.VLT }}s. Windows et d'autres programmes (tels que les navigateurs Web) peuvent donner de manière sécurisée les identifiants dans ces {{ fr.VLT }}s à d'autres ordinateurs et sites Web.
![!!KB4437](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4437.png)
Vous pouvez en apprendre davantage sur le [Gestionnaire d'informations d'identification Windows](https://msdn.microsoft.com/en-us/library/windows/desktop/aa374792(v=vs.85).aspx) de Microsoft.
{% snippet, "badgeCaution" %}
Dans le cas où vous stockez le mot de passe localement dans le ***Gestionnaire d'informations d'identification Windows*** Et que vous utilisez différentes sessions RDP pointant vers le même hôte. Le ***Gestionnaire d'informations d'identification Windows*** remplacera les identifiants RDP sauvegardés dans l'entrée de {{ fr.RDM }}.

Si c'est votre cas, ouvrir le ***Gestionnaire d'informations d'identification Windows*** et cliquer sur ***Informations d'identification Windows*** Localiser l'identifiant, cliquer sur la flèche à côté et ***Supprimer*** l'identifiant.

Pour éviter que cela se reproduise, vous devriez également décocher l'option ***Stocker le mot de passe localement*** dans la section de l'onglet ***Général*** de l'entrée RDP.
{% endsnippet %}
