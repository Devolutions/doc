---
eleventyComputed:
  title: FIPS (chiffrement)
---
System.invalidoperationexception : cette implémentation ne fait pas partie des algorithmes cryptographiques validés FIPS de la plateforme Windows.

Le problème pourrait être lié au mode FIPS activé.

{{ fr.RDM }} utilise le chiffrement AES/Rijndael et les algorithmes de hachage SHA-256, qui sont implémentés par le Microsoft .NET Framework. Si la politique de sécurité locale de votre système impose des implémentations conformes à FIPS, {{ fr.RDM }} ne peut pas fonctionner. En conséquence, vous recevrez ce message d'erreur.

## Solution 1
Pour corriger cette erreur, configurer la Politique de Sécurité Locale de votre système pour autoriser les implémentations d'algorithme non conformes à FIPS.

Voici les étapes :

1. Aller à ***Panneau de Configuration – Outils d'Administration – Politique de Sécurité Locale – Ouvrir les Politiques Locales – Options de Sécurité***.
1. Désactiver l'option ***Cryptographie système : Utiliser des algorithmes conformes à FIPS pour le chiffrement, le hachage et la signature***.

Certains logiciels (par exemple, Cisco VPN Anyconnect) nécessitent l'utilisation de FIPS. Si c'est votre cas, vous devez mettre en œuvre la solution alternative décrite ci-dessous.

## Solution 2
Dans le dossier d'installation de {{ fr.RDM }}, créer un fichier texte nommé **RemoteDesktopManager.exe.config** contenant ce qui suit :

```
<configuration>
    <runtime>
        <enforceFIPSPolicy enabled="false"/>
    </runtime>
</configuration>
```
