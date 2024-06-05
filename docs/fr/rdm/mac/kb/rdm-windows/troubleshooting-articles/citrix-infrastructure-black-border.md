---
eleventyComputed:
  title: Infrastructure Citrix avec bordure noire dans {{ fr.RDM }}
---
Une bordure noire apparaît autour de {{ fr.RDM }} lorsque l'application est utilisée comme une application publiée.
## Solution
Confirmer que la version de ***Citrix VDI*** est supérieure à 7.18

et

Selon de nombreux articles Citrix :

[https://discussions.citrix.com/topic/381893-black-border-ie-11-in-xen-app-711-with-runonceexe/](https://discussions.citrix.com/topic/381893-black-border-ie-11-in-xen-app-711-with-runonceexe/)

[https://discussions.citrix.com/topic/372117-office-2016-how-do-i-remove-the-black-edge-around-the-main-windows/](https://discussions.citrix.com/topic/372117-office-2016-how-do-i-remove-the-black-edge-around-the-main-windows/)

et comme l'explique l'article suivant : [http://techgenix.com/seamless-application-explained/](http://techgenix.com/seamless-application-explained/)

Nous devons ajouter une clé dans le registre.

Sinon, les grandes lignes sont :

Avec l'outil ***Winspector*** (exécuté côté serveur), nous pourrions découvrir quel est l'ID de l'application et lequel vous deviez utiliser. Ressemblera à WindowsForms10.Window.0.app.0.xxxxx

Ensuite, vous devez ajouter une clé de {{ fr.RDM }} dans **HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\CITRIX\wfshell\TWI**

De plus, Valeur de chaîne et DWORD (1000) sont nécessaires.

![!!KB4065](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4065.png)

Cette clé de registre doit être ajoutée côté serveur.

Cette chaîne ci-dessus est la base utilisateur car la chaîne est randomisée par nom d'utilisateur.

Nous ne le recommandons pas, mais la chaîne globale peut également être utilisée avec la clé **HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Citrix\wfshell\TWI\WindowsForms10.Window.0.app**.
