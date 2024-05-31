---
eleventyComputed:
  title: Accès aux applications
  description: Autoriser ou refuser l'accès de l'utilisateur à différentes applications et {{ fr.CTOOLS }}.
---
Autoriser ou refuser l'accès de l'utilisateur à différentes applications et {{ fr.CTOOLS }} :  
![Modifier Utilisateur – Applications](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp6098.png)

## Modifier utilisateur
| Option                                                         | Description                                                    |
|----------------------------------------------------------------|----------------------------------------------------------------|
| {{ fr.RDM }}                                                   | Autoriser l'utilisateur à accéder à {{ fr.DVLS }} via {{ fr.RDM }}.       |
| [{{ fr.WBEX }}](/workspace/workspace-browser-extension/) | Autoriser l'utilisateur à remplir automatiquement les noms d'utilisateur et mots de passe sur les sites Web avec le {{ fr.WBEX }}. |
| {{ fr.DLAUNCHER }}                                             | Autoriser l'utilisateur à ouvrir des connexions à distance avec {{ fr.DLAUNCHER }}. |
| Web                                                            | Autoriser l'utilisateur à utiliser l'interface Web de {{ fr.DVLS }}.                 |
| Cli                                                            | Autoriser l'utilisateur à utiliser le Cli.                                     |
| Scripting                                                      | Autoriser l'utilisateur à se connecter via le [module {{ fr.PS }}](https://www.powershellgallery.com/packages/Devolutions.PowerShell/). |
| {{ fr.WS }}                                                    | Autoriser les utilisateurs à utiliser le {{ fr.WMAPP }}.                         |

### Accès basé sur le temps
| Option | Description                                                                                                                 |
|--------|-----------------------------------------------------------------------------------------------------------------------------|
| Jours   | Autoriser l'accès à l'instance selon l'une de ces valeurs :<br><ul><li>***N'importe quel jour***</li><li>***Jours de semaine***</li><li>***Week-ends***</li><li>***Personnalisé***</li></ul> |
| Heure   | Autoriser l'accès à l'instance selon les possibilités données :<br><ul><li>***À tout moment***</li><li>***Personnalisé***</li></ul> |
