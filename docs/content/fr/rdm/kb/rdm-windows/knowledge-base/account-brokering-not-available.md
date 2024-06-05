---
eleventyComputed:
  title: Limitations sur l'injection des identifiants pour certains outils
  description: Dans {{ fr.DVLS }}, une permission permet de visualiser le mot de passe, et l'autre autorise l'utilisation du mot de passe via {{ fr.RDM }}.
  keywords:
  - Gestion des Accès Privilégiés
  - PAM
  - Injection des identifiants
---
La gestion des accès privilégiés (PAM) limite souvent la visibilité des mots de passe pour des raisons de sécurité. Dans {{ fr.DVLS }}, et de manière similaire à certains de nos partenaires, nous mettons en œuvre une approche à double permission : l'une permet de visualiser le mot de passe, et l'autre autorise l'utilisation du mot de passe via {{ fr.RDM }} agissant en votre nom. Nous faisons référence à cette fonctionnalité comme l'injection des identifiants, communément connue sous le nom d'"agir par procuration". Essentiellement, {{ fr.RDM }} agit comme un concierge qui, au lieu de vous donner une clé, ouvre directement la porte pour vous.

Cependant, cette fonctionnalité présente un défi avec {{ fr.RDM }}, qui a été initialement conçu pour privilégier la facilité d'utilisation, la flexibilité et l'intégration avec près de 160 technologies différentes. Pour certaines de ces technologies, restreindre l'utilisation des mots de passe s'est avéré extrêmement complexe. La seule solution viable pour atténuer le risque était de désactiver complètement l'accès à certaines technologies. Des exemples incluent les lignes de commande, PowerShell et divers outils de gestion.

Bien qu'il reste possible d'activer ces technologies à l'avenir, actuellement, le risque de violations de sécurité potentielles — surtout en considérant qu'un utilisateur malveillant pourrait substituer un outil sécurisé par un outil auto-créé et non sécurisé — est trop grand pour être efficacement adressé à ce moment.

Dans {{ fr.DVLS }}, accorder la permission de visualiser le mot de passe peut contourner certains problèmes, mais si vos protocoles de sécurité l'interdisent ou si vous utilisez une intégration qui manque cette option, malheureusement, il n'existe pas de solution de contournement disponible actuellement.
