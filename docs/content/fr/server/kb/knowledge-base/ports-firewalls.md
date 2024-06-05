---
eleventyComputed:
  title: Ports et pare-feu
  description: Consulter votre administrateur système pour déterminer les ajustements nécessaires afin d'assurer une interaction correcte de {{ fr.DVLS }} avec votre infrastructure existante.
---
{{ fr.DVLS }} ne spécifie pas quels ports sont nécessaires pour accéder à ses ressources. Consulter votre administrateur système pour déterminer les ajustements nécessaires afin d'assurer une interaction correcte de {{ fr.DVLS }} avec votre infrastructure existante.

## Port entrant
Le seul port entrant nécessaire pour {{ fr.DVLS }} est celui utilisé pour la communication HTTP ou HTTPS, selon votre préférence. Nous recommandons fortement l'utilisation de https même uniquement au sein de votre propre infrastructure réseau. Bien que le port par défaut soit facilement modifiable, il s'agit généralement du port 443.

## Port sortant
Deux technologies sont en jeu pour le bon fonctionnement de {{ fr.DVLS }} : SQL Server, LDAP/LDAPS.

### SQL Server
Selon le choix d'Instance par défaut ou d'Instance nommée qui a été fait lors de l'installation, l'instance SQL Server écoutera sur différents ports.
En utilisant SQL Server Configuration Manager, vous pouvez voir les détails dans la section Protocoles.
![!!KB4315](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4315.png)

Dans la plupart des cas, TCP/IP sera utilisé pour les connexions à distance. Vous pourrez voir quels ports sont utilisés. Si vous voyez que les Ports dynamiques TCP sont en jeu, ils changeront à chaque redémarrage de l'instance SQL Server et ne conviennent donc pas pour une installation sécurisée.
![!!KB4316](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4316.png)

Pour plus d'informations, veuillez consulter [SQL Server Configuration Manager sur Technet](https://technet.microsoft.com/en-us/library/ms174212(v=sql.130).aspx)

### LDAP/LDAPS
Comme indiqué dans [LDAPS sur Technet](http://social.technet.microsoft.com/wiki/contents/articles/2980.ldap-over-ssl-ldaps-certificate.aspx), les communications LDAP sont par nature non sécurisées dans certaines conditions :

Par défaut, les communications LDAP entre les applications client et serveur ne sont pas chiffrées. Cela signifie qu'il serait possible d'utiliser un dispositif ou un logiciel de surveillance réseau et de voir les communications voyageant entre les ordinateurs client et serveur LDAP. Cela est particulièrement problématique lorsqu'une liaison simple LDAP est utilisée car les identifiants (nom d'utilisateur et mot de passe) sont transmis sur le réseau non chiffrés. Cela pourrait rapidement conduire à la compromission des identifiants.

Suivre les instructions pour votre système d'exploitation pour établir LDAPS. Cela impliquera le déploiement de certificats générés à l'aide de votre Autorité de Certification (CA).

LDAP utilise par défaut le port 389. Même lorsque vous activez LDAPS, il peut utiliser LDAP simple, donc il doit être désactivé, veuillez consulter [Forcer l'utilisation de LDAPS](/server/kb/how-to-articles/enforcing-usage-ldaps/).

LDAPS utilise par défaut le port 636 pour les domaines typiques, mais utilisera le port 3269 lors de la communication avec un Serveur de Catalogue Global (essentiellement lorsque vous avez une Forêt). Votre administrateur de domaine devrait être en mesure de vous fournir des détails sur l'infrastructure de votre domaine, surtout si des ports personnalisés ont été utilisés. Vous pouvez également utiliser **ldp.exe** pour effectuer des tests de connectivité.
