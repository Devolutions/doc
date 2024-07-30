---
eleventyComputed:
  title: Élévation juste-à-temps
  description: L'élévation JIT dans Devolutions PAM a deux variantes, à savoir l'élévation d'un compte normal ou d'un compte à privilèges nuls (ZSP).
---
***Élévation juste-à-temps (JIT)*** dans Devolutions PAM a deux variantes : l'élévation d'un compte standard ou d'un compte à privilèges nuls (ZSP).

* **Compte standard** : Ce compte possède des adhésions existantes. JIT ajoute des groupes ou des rôles supplémentaires lors de la réservation qui sont ensuite retirés lors de la restitution.
* **Compte ZSP** : Ce compte n'a aucune permission ou adhésion au repos. Des adhésions sont ajoutées lors de la réservation et retirées lors de la restitution, de manière similaire aux comptes standards. L'équipe de sécurité opérationnelle peut surveiller ces comptes pour s'assurer qu'ils restent vides d'adhésions au repos.

### Alias
* CyberArk : À la demande

### Sujets associés
* [Élévation juste-à-temps (JIT) dans {{ fr.DVLS }}](/pam/server/just-in-time/)

### Voir aussi
* [Glossaire des termes courants de la gestion des accès privilégiés (PAM)](https://blog.devolutions.net/2021/01/glossary-of-common-privileged-access-management-pam-terms/)
* [Besoin d'une assurance cybersécurité ? Alors vous avez probablement aussi besoin de PAM](https://blog.devolutions.net/2023/10/need-cybersecurity-insurance-then-you-probably-need-pam-too/)
