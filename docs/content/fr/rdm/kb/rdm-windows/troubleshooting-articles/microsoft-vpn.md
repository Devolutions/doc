---
eleventyComputed:
  title: Microsoft VPN
---
Ces types de VPN peuvent utiliser soit les applications RASDIAL soit RASPHONE pour établir la connexion. Veuillez consulter l'article de Microsoft sur leurs différences et leur utilisation.

Vous pouvez vous référer à cet article de Microsoft TechNet pour plus d'informations sur RASDIAL : [https://technet.microsoft.com/en-us/library/bb490979.aspx](https://technet.microsoft.com/en-us/library/bb490979.aspx)

Parfois, il est nécessaire d'accepter un message ou de faire un choix lors de la première utilisation, mais cela se produit généralement une seule fois. Cela rend l'exécution manuelle de la commande obligatoire une fois sur toutes les machines.

Si vous avez choisi de stocker le PBK dans {{ fr.RDM }}, nous l'extrayons dans %TMP%\RDM lors de l'utilisation. Après avoir tenté d'établir une connexion une fois, vous devriez voir votre répertoire téléphonique dans ce dossier.

Par défaut, il utilise RASDIAL, que se passe-t-il si vous exécutez ce qui suit à l'invite de commande ?

`rasdial <connectionname> <username> <password> /phonebook:<phonebookpath>`

ou si l'option Utiliser rasphone (Kit d'administration ConnectionManager) est cochée, il utilisera RASPHONE.

Que se passe-t-il si vous exécutez ce qui suit à l'invite de commande ?

`rasphone -d <connectionname> -f <phonebookpath>`

## Problème 1
Erreur d'accès à distance 623.

![!!KB4079](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4079.png)

### Solution
Assurez-vous que dans le répertoire téléphonique, le nom de définition du vpn ne contient pas de caractère espace.

## Problème 2
Mot de passe avec des guillemets.

### Solution
Le guillemet (") n'est pas un caractère valide et ne devrait pas être utilisé dans le mot de passe d'une entrée Microsoft VPN.
