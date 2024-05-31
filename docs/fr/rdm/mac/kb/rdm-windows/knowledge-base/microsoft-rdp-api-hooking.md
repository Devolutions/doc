---
eleventyComputed:
  title: Accrochage d'API Microsoft RDP
  description: Activer l'accrochage d'API dans Fichier – Paramètres – Types – Sessions – Bureau à distance (RDP) – Accrochage d'API.
---
Depuis {{ fr.RDM }} 2022.2, l'accrochage d'API Microsoft RDP est disponible et activé par défaut. L'accrochage d'API est requis pour étendre la fonctionnalité du client Microsoft RDP en modes intégré (ActiveX) et externe (mstsc).

Si vous l'avez désactivé, vous pouvez le réactiver en allant dans {{ fr.RDM }} ***Fichier – Paramètres – Types – Sessions – Bureau à distance (RDP) – Accrochage d'API*** et en réglant ***Activer l'accrochage d'API*** sur ***Activé*** ou ***Par défaut***.

Redémarrer {{ fr.RDM }} pour appliquer le changement.

![Fichier – Paramètres – Types – Sessions – Bureau à distance (RDP) – Activer l'Accrochage d'API](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2372.png)

{% snippet, "badgeInfo" %}
Depuis {{ fr.RDM }} 2022.3.23, une politique, EnableRDPHooking, a été ajoutée qui outrepasse le réglage ***Activer l'accrochage d'API***. Si elle n'est pas configurée (pas de clé de registre), la valeur de l'option {{ fr.RDM }} sera utilisée. Une valeur de "0" indique que l'accrochage RDP est désactivé, tandis qu'une valeur différente de "0" indique que l'accrochage RDP est activé. Cela permet à l'administrateur de forcer l'un ou l'autre réglage ou de permettre à la configuration locale d'être effective.

Voir toutes les politiques incluant celle-ci dans [Appliquer des politiques](/rdm/mac/kb/rdm-windows/how-to-articles/group-policies/).
{% endsnippet %}

Le module d'accrochage d'API Microsoft RDP sera chargé lors de la première connexion Microsoft RDP. Dans le cas peu probable où vous remarqueriez une instabilité avec l'accrochage d'API activé, désactivez-le puis contactez l'[équipe de support](mailto:service@devolutions.net) pour signaler le problème.

### Journalisation Microsoft RDP

L'accrochage d'API Microsoft RDP permet de consigner des événements internes et des options qui n'étaient pas possibles auparavant. Si vous rencontrez des problèmes, allez dans ***Fichier – Paramètres – Types – Bureau à distance – Accrochage d'API*** et réglez le ***Niveau de journalisation*** sur ***Débogage***. Redémarrez {{ fr.RDM }} pour obtenir des fichiers journaux sous **%LocalAppData%\MsRdpEx** que vous pouvez ensuite envoyer à l'[équipe de support](mailto:service@devolutions.net) pour aider au diagnostic des problèmes.

### {{ fr.DGW }}

L'accrochage d'API Microsoft RDP devrait être activé pour les connexions {{ fr.DGW }}, car il corrige le nom de serveur utilisé pour la validation par le client RDP. Cela peut corriger le problème de discordance de nom Kerberos, mais cela peut également corriger la validation du certificat TLS. C'est particulièrement important pour les clients utilisant l'option ***Forcer l'utilisation de l'adresse IP pour les connexions RDP***, car cela corrige le problème sous-jacent :

Une fois l'accrochage d'API Microsoft RDP activé, l'option ***Forcer l'utilisation de l'adresse IP pour les connexions RDP*** devrait être désactivée. Dans les cas où le problème de discordance de nom Kerberos s'est produit, Kerberos devrait maintenant fonctionner correctement.

![!!KB4970](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4970.png)

### GPO d'Identifiants Frais RDP

L'accrochage d'API RDP corrige le problème où la politique de groupe RDP ***Toujours demander un mot de passe à la connexion*** empêche l'injection des identifiants depuis {{ fr.RDM }}. Cette politique de groupe est destinée à forcer **mstsc.exe** à demander de nouveaux identifiants à chaque connexion, mais elle a l'effet secondaire involontaire de briser l'injection des identifiants. Un contournement est appliqué via l'accrochage d'API pour le faire fonctionner.
