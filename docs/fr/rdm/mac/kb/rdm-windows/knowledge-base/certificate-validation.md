---
eleventyComputed:
  title: Validation du certificat
  description: Lorsque {{ fr.RDM }} se connecte à une URL utilisant le protocole HTTPS, il valide le certificat en utilisant les meilleures pratiques de l'industrie.
---
Lorsque {{ fr.RDM }} se connecte à une URL utilisant le protocole HTTPS, il valide le certificat en utilisant les meilleures pratiques de l'industrie. Le premier obstacle est de valider que votre appareil fait confiance à l'autorité qui a émis le certificat, appelée Autorité de Certification Racine (CA). Chaque certificat est typiquement une hiérarchie d'intermédiaires CA sous une racine, chacun généralement sous la juridiction d'une entité légale différente. Le résultat final est que chaque niveau ajoute ses propres étapes de validation.

Pour certaines organisations avec une pratique mature d'InfoSeq, d'autres départements ont l'autorité finale sur toutes les communications réseau, nous avons créé des options pour désactiver certaines validations, mais cela devrait être fait en dernier recours. Veuillez consulter la section ci-dessous sur les [options liées à la sécurité des certificats](#certificate-security-related-options) :
{% snippet, "badgeCaution" %}
Souvent, les utilisateurs se concentreront sur {{ fr.RDM }} comme la source la plus probable de l'erreur, mais puisque nous utilisons les fonctionnalités de base du réseau pour effectuer la validation, un bug est peu probable. Finalement, si l'exécution de la validation du certificat à l'aide des outils proposés avec votre système d'exploitation indique une erreur, {{ fr.RDM }} l'indiquera également. Pour identifier rapidement si c'est le cas, exporter le certificat en :
1. Choisir ***Voir le Certificat*** dans la boîte de dialogue d'erreur de validation du certificat.
1. L'exporter comme décrit dans [Dialogue Système](#system-dialog).
1. Effectuer une [Validation Manuelle du Certificat](#manual-certificate-validation). Si la validation est réussie, contactez-nous pour ouvrir un ticket. Si elle n'est pas réussie, voir avec votre département IT pour résoudre le blocage, ou désactiver la validation du certificat.
{% endsnippet %}

## Dépannage DANS {{ fr.RDM }}
{{ fr.RDM }} indique une erreur de validation du certificat en affichant la boîte de dialogue suivante :
![Dialogue d'erreur de certificat](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0126.png)

{% snippet, "shieldCaution" %}
Avant d'ignorer l'erreur ou d'ajouter le certificat à la liste des exceptions, toujours effectuer une validation superficielle du certificat en utilisant l'action ***Voir le Certificat***, vérifier les champs ***Émis Pour*** et ***Émis Par*** pour déterminer s'ils semblent corrects pour votre organisation.
{% endsnippet %}

La boîte de dialogue offre cinq commandes :

| Commande                     | Description                                                                                                 |
|-----------------------------|-------------------------------------------------------------------------------------------------------------|
| ***Continuer***              | Cette option acceptera le certificat pour cette session uniquement.                                              |
| ***Continuer et Se Souvenir*** | Cette option acceptera le certificat et se souviendra de votre choix. Pour "oublier" un certificat qui avait été précédemment ajouté, vous devez effacer la liste d'exemption de certificat en utilisant les [options liées à la ***sécurité du certificat***](#certificatesecurityrelatedoptions). |
| ***Abandonner***                 | Cette option abandonnera la communication qui est tentée, cela résultera en une erreur de non atteignabilité.   |
| ***Diagnostiquer***              | Cette option affichera la [***Fenêtre de Diagnostic du Certificat***](#certificatediagnosticwindow).           |
| ***Voir le Certificat***      | Cette option affichera le certificat en utilisant le [***Dialogue Système***](#systemdialog). Vous pouvez utiliser cela pour exporter le certificat pour une validation manuelle. |

## Fenêtre de diagnostic du certificat {{ fr.RDM }}
![Diagnostic du Certificat](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0127.png)

## Dialogue système
Pour en savoir plus sur pourquoi la validation du certificat a échoué, vous pouvez utiliser certains outils, mais le certificat doit d'abord être exporté.

Pour exporter le certificat, suivez ces étapes :
1. Aller à l'onglet ***Détails*** de l'invite de certificat Windows.
1. Cliquer sur ***Copier vers le fichier...*** et procéder à l'exportation du certificat en tant que fichier *.cer.
![Dialogue système d'information sur le certificat](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4452.png)

## Validation manuelle du certificat
Voici quelques outils qui peuvent être utilisés pour vérifier le certificat nouvellement exporté :
### Utilisation de PowerShell (nécessite PowerShell v4)
Dans une console PowerShell, adapter le chemin pour le fichier de certificat, puis exécuter :
`$cert=New-Object System.Security.Cryptography.X509Certificates.X509Certificate2("%USERPROFILE%\Desktop\cert.cer"`
`Test-Certificate -Cert $cert`

### Utilisation de CMD
Adapter le chemin pour le fichier de certificat, puis exécuter la commande suivante :
`certutil -verify "%USERPROFILE%\Desktop\cert.cer"`

La sortie résultante des outils mentionnés ci-dessus peut être utilisée pour obtenir plus d'informations sur le problème.

## Options liées à la sécurité du certificat
Naviguer vers ***Fichier*** – ***Paramètres*** – ***Sécurité*** – ***Sécurité du certificat*** pour gérer les options liées aux certificats.
![Options de sécurité du certificat](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0129.png)
{% snippet, "badgeInfo" %}
L'option ***Réinitialiser les Certificats Connus*** n'apparaît que si vous avez sélectionné ***Continuer et Se Souvenir*** pour un ou plusieurs certificats.
{% endsnippet %}

| Option                                        | Description                  |
|-----------------------------------------------|------------------------------|
| ***Ignorer les erreurs de certificat de l'application***   | Activer cette option pour désactiver la validation du certificat de l'application. Cela n'est pas recommandé, car cela compromettrait la confidentialité et l'intégrité des communications entre le client et le serveur et pourrait exposer l'application à des menaces potentielles. |
| ***Vérifier la révocation du certificat serveur*** | Cette option vérifie que le certificat n'a pas été révoqué. Cela est nécessaire si l'une des URL pour la [***Validation du Certificat***](#certificatecheck) est indisponible pour une raison quelconque. |
| ***Réinitialiser les Certificats Connus***                | Utiliser cette option pour effacer les certificats en cache. Tous les certificats devront être validés à nouveau. |

## Vérifier l'Autorité de Certification (CA)
1. Ouvrir le certificat, puis vérifier par quelle Autorité de Certification le certificat a été ***Émis par***, dans l'onglet ***Général***.
![Certificat Émis par](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4448.png)
1. Vérifier que l'Autorité de Certification est correctement installée dans le magasin de certificats.
![Certificats](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4449.png)

## Vérification de la révocation du certificat
Assurer que le serveur de Liste de Révocation des Certificats (CRL) est accessible car il est nécessaire pour valider un certificat.
![CRL](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4454.png)
