---
eleventyComputed:
  title: Vérification des mots de passe compromis (pwned)
  description: Dans le monde de la sécurité de l'information, un mot de passe pwned est un mot de passe qui a été exposé lors de violations de données (c'est-à-dire qu'ils sont possédés/pwned par des hackers). Utiliser un mot de passe pwned augmente considérablement les chances d'être victime d'une violation de données.
---
{% youtube 'D2PnLXJY100' %}

Dans le monde de la sécurité de l'information, un mot de passe pwned est un mot de passe qui a été exposé lors de violations de données (c'est-à-dire qu'ils sont possédés/pwned par des hackers).

Utiliser un mot de passe pwned augmente considérablement les chances d'être victime d'une violation de données. Pwned Check utilise l'API Pnwed Passwords de Troy Hunt et vérifie automatiquement si un mot de passe que vous utilisez (ou envisagez d'utiliser) a été pwned par des hackers. Si c'est le cas, vous serez notifié et pourrez être proactif et choisir autre chose pour rester à l'abri. Il y a plus d'un demi-milliard de mots de passe dans la base de données Pwned Passwords.

## Configurer la vérification des mots de passe pwned

Dans les bases de données existantes, la vérification Pwned n'est pas activée automatiquement.

1. Aller à ***Administration – Paramètres du système – Validation du mot de passe***.
1. Dans l'option ***Vérification des mots de passe compromis (pwned)***, choisir ***Activé*** dans la liste et cliquer sur ***OK***.
![Activer l'option de vérification des mots de passe compromis (pwned)](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2324.png)

{{ fr.RDM }} analyse un mot de passe lorsque vous enregistrez une entrée. Un message est affiché lorsqu'un mot de passe est trouvé dans la base de données Pwned Passwords. Si vous voyez cette fenêtre, vous devriez changer votre mot de passe immédiatement. N'oubliez pas de le changer dans {{ fr.RDM }} et dans le compte réel.
![Changer votre mot de passe](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2325.png)

### Le back-end

Soyez assuré que {{ fr.RDM }} n'envoie PAS vos mots de passe à Pwned Passwords.

Voici comment cela fonctionne :

1. La vérification des mots de passe Pwned utilise la k-Anonymité.
1. {{ fr.RDM }} envoie uniquement les cinq premiers caractères du hachage SHA-1 du mot de passe à l'API.
1. L'API renvoie une liste de chaque hachage de mot de passe qui correspond aux cinq premiers caractères du hachage. L'API renvoie uniquement la seconde partie du hachage.
1. {{ fr.RDM }} compare les hachages de la liste avec le hachage du mot de passe que vous souhaitez utiliser.
1. S'il y a une correspondance, vous recevez un avertissement.

### Choisir des mots de passe plus forts

{{ fr.RDM }} facilite la création de mots de passe forts. Le [Générateur de mots de passe](/rdm/windows/commands/tools/generators/password/) intégré crée des mots de passe sécurisés, suivant vos spécifications pour la longueur et la complexité du mot de passe. Le générateur de mots de passe est disponible à côté des champs de mot de passe pour chaque entrée.
![Icône du générateur de mots de passe](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2326.png)
![Générateur de mots de passe](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2327.png)

{% snippet, "badgeHelp" %}
{{ fr.RDM }} dispose également d'un [Analyseur de sécurité des entrées](/rdm/windows/commands/tools/tools/entry-security-analyzer/) qui fournit des retours sur tous vos mots de passe. Une évaluation est incluse dans l'entrée. Il utilise Zxcvbn pour évaluer les mots de passe. Vous pouvez également créer un rapport de tous vos mots de passe en utilisant l'***Analyseur de sécurité des entrées*** dans l'onglet ***Outils***.
{% endsnippet %}
