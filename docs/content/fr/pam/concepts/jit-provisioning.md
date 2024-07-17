---
eleventyComputed:
  title: Provisionnement juste-à-temps
  description: Le provisionnement JIT dans Devolutions PAM offre le risque d'exposition le plus faible car les comptes à privilèges élevés (CPE) n'existent pas tant qu'ils ne sont pas nécessaires.
---
***Le provisionnement juste-à-temps (JIT)*** dans Devolutions PAM offre le risque d'exposition le plus faible car les comptes à privilèges élevés (CPE) n'existent pas tant qu'ils ne sont pas nécessaires. Ils sont créés à la volée et se voient attribuer les adhésions appropriées lors de la réservation. Les comptes sont supprimés lors de la restitution.

Les comptes peuvent être nommés de manière quelconque, comme une variation du nom d'utilisateur de l'utilisateur effectuant la réservation, l'identifiant de réservation, etc. Cette approche déplace le fardeau de la surveillance de nombreux comptes existants vers la surveillance de quelques-uns permanents, mais elle augmente l'activité de création de compte.

### Sujets associés
* []()

### Voir aussi
* [Élévation juste-à-temps (JIT) dans {{ fr.DVLS }}](/pam/server/just-in-time/)
* [Glossaire des termes courants de la gestion des accès privilégiés (PAM)](https://blog.devolutions.net/2021/01/glossary-of-common-privileged-access-management-pam-terms/)
* [Besoin d'une assurance cybersécurité ? Alors vous avez probablement aussi besoin de PAM](https://blog.devolutions.net/2023/10/need-cybersecurity-insurance-then-you-probably-need-pam-too/)