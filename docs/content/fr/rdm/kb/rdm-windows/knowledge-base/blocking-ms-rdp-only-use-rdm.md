---
eleventyComputed:
  title: Restreindre l'accès MS RDP à {{ fr.RDM }} uniquement
  description: De nombreuses organisations visent à centraliser leurs connexions Bureau à distance, en les restreignant pour qu'elles soient initiées uniquement à partir de {{ fr.RDM }}.
---
De nombreuses organisations visent à centraliser leurs connexions Bureau à distance, en les restreignant pour qu'elles soient initiées uniquement à partir de {{ fr.RDM }}. Voici quelques considérations pour mettre en œuvre cette stratégie au sein de votre organisation.

### Considérations

Bloquer simplement Microsoft RDP (**mstsc.exe**) ne sécurise pas suffisamment l'accès, car cela laisse des vulnérabilités potentielles ouvertes. Les utilisateurs pourraient contourner cela en employant des alternatives comme Microsoft RDC Manager ou des versions non autorisées de {{ fr.RDM }}, potentiellement en utilisant des paramètres en dehors des paramètres approuvés. Une approche plus sécurisée consiste à intégrer les identifiants de session au sein de {{ fr.RDM }} lui-même. Cette méthode garantit que les utilisateurs peuvent établir des connexions à distance sans accéder directement aux identifiants, renforçant ainsi l'utilisation de {{ fr.RDM }}.

Cependant, si vous pensez que simplement désactiver Microsoft RDP répond à vos besoins de sécurité, des conseils sur ce processus sont disponibles dans l'article de Microsoft sur [Comment activer ou désactiver le Bureau à distance via la stratégie de groupe Windows 2008](https://social.technet.microsoft.com/wiki/contents/articles/4980.how-to-enable-or-disable-remote-desktop-via-group-policy-windows-2008.aspx).

Notre solution recommandée implique l'utilisation d'une passerelle sécurisée, protégée par un mot de passe inconnu de l'utilisateur final. Cela peut être mis en œuvre via un tunnel SSH ou notre fonctionnalité Jump propriétaire, combinée avec des ajustements de pare-feu sur les hôtes distants pour bloquer toute connexion provenant d'adresses IP non reconnues par vos passerelles désignées.

![Diagramme de passerelle](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4436.png)

Les tunnels SSH sont particulièrement efficaces ; ils peuvent fonctionner sur une machine virtuelle utilisant n'importe quelle distribution *nix et nécessitent un minimum de RAM et d'espace disque. De plus, l'utilisation de tunnels SSH oblige les utilisateurs à compter sur {{ fr.RDM }} puisque les identifiants du tunnel ne sont pas des identifiants de domaine et doivent être stockés au sein de l'application elle-même.
