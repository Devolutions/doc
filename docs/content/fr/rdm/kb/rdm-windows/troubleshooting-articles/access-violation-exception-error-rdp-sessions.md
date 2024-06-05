---
eleventyComputed:
  title: Erreur d'exception de violation d'accès dans les sessions RDP
---
Lors de la tentative d'ouverture d'une entrée de session RDP, vous pouvez rencontrer le message d'erreur "Une erreur inattendue s'est produite. Veuillez vérifier les journaux d'application pour plus d'informations."
![Message d'erreur](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2128.png)
Lors de la vérification des journaux d'application, l'erreur suivante est affichée :
System.AccessViolationException : Tentative de lecture ou d'écriture dans une mémoire protégée. Cela indique souvent que d'autres mémoires sont corrompues.
## Solution
Désactiver l'accrochage d'API RDP dans les paramètres de {{ fr.RDM }} :
1. Aller à ***Fichier – Paramètres – Types – Bureau à distance – Accrochage d'API***.
1. Dans la liste déroulante ***Activer l'accrochage d'API***, sélectionner ***Désactivé***.
![!!KB2127](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2127.png)
1. Redémarrer {{ fr.RDM }} pour appliquer les changements.
