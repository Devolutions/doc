---
eleventyComputed:
  title: "{{ fr.UVLT_MAJ }} disparaît après une mise à niveau"
  description: Après la mise à niveau vers 2021.1.x et ultérieurement, certains utilisateurs ne pouvaient plus accéder à leur {{ fr.UVLT }}.
---
Avec {{ fr.DVLS }} 2021 est venu une refonte du {{ fr.UVLT }}. Après la mise à niveau vers 2021.1.x et ultérieurement, certains utilisateurs ne pouvaient plus accéder à leur ***{{ fr.UVLT }}***.

Différents comportements peuvent être observés :

* [{{ fr.UVLT }} vide à la fois sur {{ fr.RDM }} et l'interface utilisateur web de {{ fr.DVLS }}](#empty-user-vault-on-both-remote-desktop-manager-and-the-web-devolutions-server-ui)
* [{{ fr.UVLT }} vide dans {{ fr.RDM }}, mais il est affiché sur l'interface utilisateur web de {{ fr.DVLS }}](#empty-user-vault-in-remote-desktop-manager-but-it-is-showing-on-the-web-devolutions-server-ui)

## {{ fr.UVLT }} vide à la fois sur {{ fr.RDM }} et l'interface utilisateur web de {{ fr.DVLS }}
Dans la plupart des cas, cela est causé par le processus de migration provoquant un ***Conflit de Validation*** et n'affectera que certains utilisateurs.

1. Ouvrir l'interface utilisateur web de {{ fr.DVLS }} de l'utilisateur et cliquer sur son ***Avatar*** dans le coin supérieur droit.
1. Dans le menu, vous devriez voir une option ***Exporter {{ fr.UVLT }} Nonmigré*** et une option ***Supprimer {{ fr.UVLT }} Nonmigré***.
![Exporter {{ fr.UVLT }} Nonmigré](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4784.png)
1. Cliquer sur ***Exporter {{ fr.UVLT }} Nonmigré*** pour créer un fichier rdm protégé par mot de passe.
1. Importer le fichier de données dans une source de données Locale vide pour tester et assurer l'intégrité des données.
1. Lorsque votre validation est concluante, cliquer sur ***Supprimer {{ fr.UVLT }} Nonmigré***.
1. Importer le fichier rdm dans la source de données de {{ fr.DVLS }}.

## {{ fr.UVLT }} vide dans {{ fr.RDM }}, mais il est affiché sur l'interface utilisateur web de {{ fr.DVLS }}
Habituellement, ce problème est général à l'organisation et est causé par un ***Fournisseur de Sécurité*** encore présent sur la source de données. Ceci est disponible dans {{ fr.DVLS }} 2021.1.10 et ultérieurement ou la version LTS 2020.3.19.

1. Dans la {{ fr.DVLSCONSOLE }} cliquer sur ***Outils – Supprimer le Fournisseur de Sécurité***.
   {% snippet, "shieldWarning" %}
   La suppression du ***Fournisseur de Sécurité*** laissera votre base de données non chiffrée.
   {% endsnippet %}

1. Une fois terminé, cliquer sur ***Outils – Régénérer*** et stocker le fichier et le mot de passe dans un endroit sûr.
   {% snippet, "badgeCaution" %}
   La régénération des ***Clés de Chiffrement*** re-chiffrera la base de données.
   {% endsnippet %}