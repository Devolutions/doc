---
eleventyComputed:
  title: Élévation juste-à-temps
  description: L'élévation JIT dans Devolutions PAM a deux variantes, à savoir l'élévation d'un compte normal ou d'un compte à privilèges nuls (ZSP).
---
***Élévation juste-à-temps (JIT)*** dans Devolutions PAM a deux variantes : l'élévation d'un compte normal ou d'un compte à privilèges nuls (ZSP).

* **Compte normal** : Ce compte possède des adhésions, et des groupes/rôles supplémentaires sont ajoutés JIT lors de la réservation. Seul ce qui est ajouté lors de la réservation sera retiré lors de la restitution.
* **Compte ZSP** : Ce compte ne devrait avoir aucune permission ni adhésion au repos. Les adhésions sont ajoutées lors de la réservation et retirées lors de la restitution, similairement aux comptes normaux. L'équipe de sécurité opérationnelle peut surveiller ces comptes pour s'assurer qu'ils restent propres au repos.

### Alias
* CyberArk : À la demande

### Sujets associés
* [Élévation juste-à-temps (JIT) dans {{ fr.DVLS }}](/pam/server/just-in-time/)

### Voir aussi
* [Glossaire des termes courants de la gestion des accès privilégiés (PAM)](https://blog.devolutions.net/2021/01/glossary-of-common-privileged-access-management-pam-terms/)
* [Besoin d'une assurance cybersécurité ? Alors vous avez probablement aussi besoin de PAM](https://blog.devolutions.net/2023/10/need-cybersecurity-insurance-then-you-probably-need-pam-too/)