---
eleventyComputed:
  title: RDP NLA avec Azure AD (problème PKU2U)
  description: Lors de la connexion à des systèmes en utilisant RDP avec Azure AD, les utilisateurs rencontrent souvent l'erreur "Vos identifiants n'ont pas fonctionné". Ce problème provient du protocole PKU2U, qui n'est pas activé par défaut dans Windows.
---
Lors de la connexion à des systèmes en utilisant RDP avec Azure AD, les utilisateurs rencontrent souvent l'erreur "Vos identifiants n'ont pas fonctionné". Ce problème provient du protocole PKU2U, qui n'est pas activé par défaut dans Windows.

## Solution 1 : Désactiver RDP NLA
Désactiver RDP NLA peut résoudre le problème mais n'est pas recommandé en raison de préoccupations de sécurité.

## Solution 2 : Faire fonctionner RDP NLA avec Azure AD (recommandé)
Certaines exigences doivent être remplies pour que RDP NLA fonctionne avec Azure AD. C'est la solution recommandée même si le processus est plus complexe.

### PKU2U sur le client et le serveur RDP
PKU2U doit être activé à la fois sur le client RDP et le serveur. Utiliser l'une des méthodes ci-dessous.

#### Méthode de stratégie de groupe
1. Ouvrir l'Éditeur de stratégie de groupe (gpedit.msc).
1. Naviguer vers ***Configuration de l'ordinateur – Paramètres Windows – Paramètres de sécurité – Stratégies locales – Options de sécurité***.
1. Activer ***Sécurité du réseau : autoriser les demandes d'authentification PKU2U à cet ordinateur pour utiliser des identités en ligne***.
1. Redémarrer le serveur.

#### Méthode PowerShell
1. Dans PowerShell, exécuter la commande suivante :
   ```powershell
   $Pku2uRegPath = 'HKLM:\SYSTEM\CurrentControlSet\Control\Lsa\Pku2u'
   New-Item -Path $Pku2uRegPath -Force | Out-Null
   Set-ItemProperty -Path $Pku2uRegPath -Name 'AllowOnlineID' -Value '1' -Type DWORD
   ```
1. Redémarrer le serveur.

### Connexion Windows
Il faut soit être connecté à Windows avec le même compte Azure AD, soit être joint à l'espace de travail avec le même utilisateur Azure AD. Noter que vous ne pouvez être joint à l'espace de travail qu'avec jusqu'à trois utilisateurs en même temps.

1. Sur votre machine Windows, naviguer vers ***Paramètres – Comptes – E-mail & comptes***.
1. Cliquer sur ***Ajouter un compte professionnel ou scolaire***.
1. Entrer vos identifiants Azure AD, puis cliquer sur ***Se connecter***.
1. Attendre que la jonction à l'espace de travail Azure AD soit complète.

### Format de nom d'utilisateur correct
* Dans MSTSC : Utiliser le format "AzureAD\utilisateur@domaine.com".
* Dans un fichier RDP : Utiliser le format ".\AzureAD\utilisateur@domaine.com" et laisser le domaine vide.
* Dans {{ fr.RDM }} : Activer l'option ***Hôte Azure AD*** dans les propriétés générales de l'entrée RDP.

{% snippet, "badgeHelp" %}
Pour plus d'informations, consulter l'article complet : [RDP NLA avec Azure AD : Le cauchemar PKU2U](https://awakecoding.com/posts/rdp-nla-with-azure-ad-the-pku2u-nightmare/).
{% endsnippet %}