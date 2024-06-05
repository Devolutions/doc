---
eleventyComputed:
  title: Utilisation des OTP avec les entrées
  description: '{{ fr.RDM }} les entrées peuvent être configurées pour utiliser ***Mot de Passe à Usage Unique (OTP)*** lors du lancement.'
---
{{ fr.RDM }} les entrées peuvent être configurées pour utiliser ***Mot de Passe à Usage Unique (OTP)*** lors du lancement.

Dans la section ***Connexion – Mot de Passe à Usage Unique*** d'une entrée, sélectionner une ***Source*** d'identifiants et un ***Usage*** pour le code OTP. Saisir si nécessaire une ***chaîne de combinaison***.

![Connexion – Mot de Passe à Usage Unique](https://cdnweb.devolutions.net/docs/RDMW6005_2023_2.png)

Pour les informations de configuration de [Source](#source), sélectionner dans la liste ou cliquer sur ce lien pour sauter aux informations de configuration d'[Usage](#usage).

## Source
La ***Source*** d'identifiants est utilisée pour lier les entrées aux informations d'identifiants de compte OTP.

### Identifiants de la session actuelle
Les options ***Identifiants de la session actuelle*** utiliseront les identifiants OTP configurés dans la section ***Commun - Général - Identifiants*** de l'entrée. Les options d'identifiants disponibles avec OTP sont [***Mes identifiants personnels***](/rdm/commands/file/my-account-settings/my-personal-credentials/), ***Mon compte privilégié*** et ***Intégré*** (ce mode est déprécié et non recommandé).

{% snippet, "badgeCaution" %}
Dans un environnement d'équipe, nous recommandons d'utiliser l'option [Lié ({{ fr.VLT }})](#linked-vault) à la place avec une entrée d'identifiants ***Mot de Passe à Usage Unique (OTP)***.
{% endsnippet %}

![Identifiants de la session actuelle](https://cdnweb.devolutions.net/docs/RDMW6006_2023_2.png)

{% snippet, "badgeInfo" %}
Pour que l'option Copier OTP apparaisse dans le menu contextuel (clic droit) d'une entrée, un OTP doit être configuré et défini dans les ***Propriétés*** de l'entrée, dans ***Connexion – Mot de Passe à Usage Unique***.
{% endsnippet %}

### Hérité
L'option ***Hérité*** remontera l'arbre de navigation jusqu'à ce qu'elle ait accès à un ensemble d'identifiants OTP dans un dossier parent dans la section ***Connexion - Mot de Passe à Usage Unique***.

{% snippet, "badgeInfo" %}
***Pour que l'héritage de la Source*** fonctionne, la ***Connexion - Mot de Passe à Usage Unique - Source*** doit être définie sur ***Hérité*** pour chaque dossier parent jusqu'à ce qu'elle atteigne la configuration souhaitée.
{% endsnippet %}

![Hérité](https://cdnweb.devolutions.net/docs/RDMW6008_2023_2.png)

### Lié ({{ fr.VLT }})
Lier votre entrée pour utiliser une entrée d'identifiants ***Mot de Passe à Usage Unique (OTP)*** spécifique existante du même {{ fr.VLT }}. C'est la méthode préférée.

![Lié](https://cdnweb.devolutions.net/docs/RDMW6009_2023_2.png)

### Aucun
Par défaut, la ***Source*** OTP des entrées est définie sur ***Aucun***. Dans cet état, l'entrée n'est liée à aucun identifiant OTP.

### Invite
L'option ***Invite*** ouvre une liste d'identifiants OTP disponibles à chaque lancement de la session.

![Invite](https://cdnweb.devolutions.net/docs/docs_en_kb_KB5007.png)

## Usage
L'***Usage*** du Mot de Passe à Usage Unique est une option pour fixer le code OTP. Voici la liste des actions possibles :

* ***Aucun*** : Aucune action n'est effectuée. C'est le paramètre par défaut.
* ***Ajouter au mot de passe*** : Fixer l'OTP après le mot de passe.
* ***Préfixer au mot de passe*** : Fixer l'OTP avant le mot de passe.
* ***Spécifique à la session*** : Si sélectionné, l'OTP sera, le cas échéant, utilisé d'une manière spécifique à la session lancée (toutes les sessions ne prennent pas en charge l'OTP).

{% snippet, "badgeInfo" %}
Les sessions suivantes sont prises en charge par l'OTP : OpenVPN, SophosVPN, FTP, SFTP, SCP, Tunnel SSH, Telnet, Portforward et Shell SSH. Veuillez noter que le paramètre ***chaîne d'invite OTP*** doit être configuré pour toutes les sessions pour fonctionner, à l'exception d'OpenVPN et SophosVPN.
{% endsnippet %}

* ***Hérité*** : Remontera l'arbre de navigation jusqu'à ce qu'elle ait accès à un paramètre d'***Usage*** dans un dossier parent dans la section ***Connexion - Mot de Passe à Usage Unique***. Pour que l'héritage de l'***Usage*** fonctionne, la ***Connexion - Mot de Passe à Usage Unique - Usage*** doit être définie sur ***Hérité*** pour chaque dossier parent jusqu'à ce qu'elle atteigne la configuration souhaitée.
* ***Ajouter au nom d'utilisateur*** : Fixer l'OTP après le nom d'utilisateur.
* ***Préfixer au nom d'utilisateur*** : Fixer l'OTP avant le nom d'utilisateur.
* ***Ajouter et utiliser la notification push*** : Fixer l'OTP après le nom d'utilisateur et utiliser la notification push.
