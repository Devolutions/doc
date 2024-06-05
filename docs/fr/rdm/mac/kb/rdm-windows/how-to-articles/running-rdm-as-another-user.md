---
eleventyComputed:
  title: Exécuter {{ fr.RDM }} en tant qu'un autre utilisateur
---
Il existe de nombreux types différents d'identifiants et ils sont utilisés par une multitude d'utilisateurs. Sur les systèmes Windows, avoir plusieurs comptes utilisateurs permet de lancer {{ fr.RDM }} sous un ensemble différent d'identifiants pendant que nous sommes déjà connectés en utilisant les identifiants principaux. Cela permet d'utiliser la sécurité intégrée pour se connecter à une [Source de Données Avancée](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/).

{% snippet, "badgeInfo" %}
Ces solutions nécessitent que le service "Secondary Log-on" soit en cours d'exécution.
{% endsnippet %}

{% snippet, "badgeInfo" %}
Si l'autre compte appartient à un domaine différent de celui de votre poste de travail, la solution A doit être utilisée.
{% endsnippet %}

## Solution A - Commande RunAs

Cette solution est idéale si vous faites cela souvent, vous pouvez créer un fichier batch avec la commande et simplement taper votre mot de passe lorsque demandé.

La commande RunAs a de nombreux paramètres pour changer son comportement, nous ne les couvrirons pas tous ici, mais si vous avez un scénario avancé, nous vous suggérons de consulter l'aide de Windows.

1. Ouvrir une invite de commande.
1. Taper runas /netonly /user:{votre nom d'utilisateur ici}. L'utilisation du paramètre NetOnly signale que les identifiants seront utilisés uniquement pour l'accès réseau. Assurez-vous que votre nom d'utilisateur est entré comme le nécessite votre infrastructure. Typiquement c'est {domaine}\{utilisateur}, i.e. windjammer\david
1. Ajouter le chemin complet vers {{ fr.RDM }}, typiquement **%ProgramFiles(x86)%\Devolutions\Remote Desktop Manager\RemoteDesktopManager.exe**, mais vous devez vous assurer que cela est correct pour votre machine.
1. Lorsque vous appuyez sur entrée, vous êtes invité à entrer le mot de passe, puis l'application se lance.
![!!KB4584](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4584.png)

## Solution B - Maj+clic droit sur le raccourci ou l'exécutable pour ## {{ fr.RDM }}

Lorsque vous appuyez sur <kbd>Maj</kbd>+clic droit sur un exécutable, vous remarquerez un élément de menu supplémentaire pour Exécuter en tant qu'utilisateur différent
![!!KB4585](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4585.png)

Un formulaire de connexion vous est présenté dans lequel vous devez spécifier le nom d'utilisateur et le mot de passe.
![!!KB4586](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4586.png)
