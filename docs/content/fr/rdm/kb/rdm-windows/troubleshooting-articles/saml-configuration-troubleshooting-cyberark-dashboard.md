---
eleventyComputed:
  title: Dépannage SAML pour le tableau de bord CyberArk
  description: Lors de la connexion à votre entrée ***CyberArk Dashboard*** configurée avec l'authentification SAML, vous pouvez rencontrer un problème où votre sélecteur de coffre est vide. Nous recommandons de mettre à jour {{ fr.RDM }} à la version 2023.2.18 au moins, car des améliorations ont été implémentées dans cette version pour le mode d'authentification SAML.
---
{% snippet, "badgeCaution" %}
L'authentification SAML pour CyberArk Privilege Cloud nécessite {{ fr.RDM }} 2023.2.18.0 ou ultérieur.
{% endsnippet %}

Lors de la connexion à votre entrée ***CyberArk Dashboard*** configurée avec l'authentification SAML, vous pouvez rencontrer un problème où votre sélecteur de coffre est vide. Nous recommandons de mettre à jour {{ fr.RDM }} à la version 2023.2.18 au moins, car des améliorations ont été implémentées dans cette version pour le mode d'authentification SAML. Suivre les étapes ci-dessous :
1. [Télécharger et installer](https://devolutions.net/remote-desktop-manager) {{ fr.RDM }} ou le mettre à jour à la version 2023.2.18 ou ultérieure.

{% snippet, "badgeNotice" %}
Si vous utilisez une source de données partagée, nous recommandons d'utiliser une [version portable de {{ fr.RDM }}](/rdm/windows/installation/client/portable-usb/) sur une source de données locale pour tester.
{% endsnippet %}

2. Dans {{ fr.RDM }}, créer votre entrée ***CyberArk Dashboard***. Assurez-vous de la créer à partir de la version 2023.2.18 ou ultérieure et **non** de la version précédente.
1. Entrer les informations nécessaires. Voir [Configuration et utilisation du tableau de bord CyberArk](/rdm/kb/rdm-windows/how-to-articles/cyberark-dashboard-configuration/) pour plus d'informations.

![Configuration SAML du tableau de bord CyberArk](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2167.png)

4. Une fois votre entrée créée, aller à ***Fichier – Paramètres – Avancé***.
1. Cliquer sur le lien en bas qui mène à vos fichiers de configuration {{ fr.RDM }}.

![Lien vers les fichiers de configuration](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2168.png)

6. Ouvrir le dossier appelé "WebView2.Cache", puis supprimer le dossier "CyberArk_SAML" qui se trouve à l'intérieur.

![Supprimer le dossier "CyberArk_SAML"](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2169.png)

7. Essayer de se connecter à nouveau à votre entrée. Vous devrez peut-être actualiser ou redémarrer {{ fr.RDM }} pour que cette solution fonctionne.
