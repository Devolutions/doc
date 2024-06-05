---
eleventyComputed:
  title: La plateforme Devolutions
---
Notre plateforme offre plusieurs produits pour aider à gérer tous les aspects d'une infrastructure informatique.

| APPLICATIONS | DESCRIPTION | INSTALLATION |
|--------------|-------------|--------------|
| {{ fr.RDM }} (RDM) | Application utilisée pour gérer et centraliser les technologies d'accès à distance, les mots de passe privilégiés, les documents et les informations partagées. | Windows, macOS, Linux, iOS, Android |
| [{{ fr.RDMA }}](/rdm/windows/overview/the-devolutions-platform/rdm-agent/) | Le {{ fr.RDMA }} peut exécuter des commandes sur des hôtes distants, mais ce qui est vraiment utile, c'est qu'il peut envoyer des commandes à plusieurs hôtes en même temps. Puisque {{ fr.RDM }} utilise un canal RDP sécurisé pour communiquer avec le {{ fr.RDMA }}, il ne peut opérer que contre des hôtes basés sur Windows. | Windows |
| [{{ fr.RDMJ }}](/rdm/windows/overview/the-devolutions-platform/rdm-jump/) | {{ fr.RDMJ }} se connecte à un hôte distant, souvent appelé une Jump Box, un Service Host ou un Bastion Server, qui à son tour se connecte à d'autres hôtes. {{ fr.RDMJ }} est en fait un RDP dans un RDP. | Windows |
| [{{ fr.DVLS }} (DVLS)](/server/overview/what-is-server/) | {{ fr.DVLS }} est une solution complète de gestion des comptes et des mots de passe partagés avec des composants d'accès privilégié en option. Elle se déploie rapidement, s'implémente facilement et offre les fonctionnalités principales d'une solution PAM complète. {{ fr.DVLS }} est conçue pour répondre aux exigences de sécurité toujours croissantes des PME, tout en restant très abordable. | Windows |
| [{{ fr.DHUBB }}](/hub/overview/what-is-hub/) | {{ fr.DHUBB }} est un gestionnaire de mots de passe sécurisé et basé sur le cloud pour les équipes. Il permet à votre organisation de gérer facilement et en toute sécurité les mots de passe des utilisateurs professionnels, ainsi que d'autres informations sensibles, via une interface web conviviale qui peut être rapidement, facilement et en toute sécurité accessible via n'importe quel navigateur. | Windows, macOS |
| [{{ fr.WBEX }}](/workspace/workspace-browser-extension/) | Le {{ fr.WBEX }} est une extension de navigateur gratuite utilisée conjointement avec {{ fr.RDM }}, {{ fr.DVLS }}, et {{ fr.DHUB }}, qui permet aux utilisateurs d'injecter des mots de passe de manière sécurisée dans des sites web en utilisant les identifiants stockés dans leurs {{ fr.VLT }}s. | Windows, macOS |