---
eleventyComputed:
  title: Activer l'A2F pour les utilisateurs
  description: Bien qu'il ne soit toujours pas possible de forcer la configuration de l'authentification à deux facteurs (A2F) au niveau de l'utilisateur sans {{ fr.DVLS }}, quelques options ont été ajoutées dans {{ fr.RDM }} qui pourraient répondre à vos besoins.
  status: Sujet disponible en langue allemande
---
Bien qu'il ne soit toujours pas possible de forcer la configuration de l'authentification à deux facteurs (A2F) au niveau de l'utilisateur sans {{ fr.DVLS }}, quelques options ont été ajoutées dans {{ fr.RDM }} qui pourraient répondre à vos besoins.

{% snippet, "badgeCaution" %}
Ces fonctionnalités sont uniquement disponibles lors de l'utilisation de [sources de données avancées](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/).
{% endsnippet %}

{% snippet, "badgeCaution" %}
Vous ne pouvez pas configurer l'A2F pour les utilisateurs. Une fois activée, chaque utilisateur devra la configurer manuellement dans ***Fichier – Paramètres de mon compte***. Pour plus d'informations sur la configuration, consulter [Authentification à deux facteurs](/rdm/windows/data-sources/multi-factor-authentication/).
{% endsnippet %}

## Forcer le mode d'authentification à deux facteurs de l'application

Dans ***Administration – Paramètres du système – Spécifique à l'application – Applications – Sécurité – Forcer le mode d'authentification à deux facteurs de l'application***, sélectionner soit :

* ***Ne pas forcer*** : Ne force pas le mode d'authentification à deux facteurs de l'application.
* ***Vérifier contre toutes les méthodes configurées*** : Invite pour les méthodes A2F configurées uniquement.
* ***Demander la sélection à l'utilisation*** : Demande quelle A2F configurer à l'utilisation.

![Forcer le mode d'authentification à deux facteurs de l'application](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2271.png)

## Forcer la sécurité de l'application avec TOTP (Authenticator)
Dans ***Administration – Paramètres du système – Spécifique à l'application – Applications – Sécurité***, cocher ***Forcer la sécurité de l'application avec TOTP (Authenticator)*** pour l'activer.

![Forcer la sécurité de l'application avec TOTP (Authenticator)](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2270.png)

## Forcer la sécurité de l'application avec Duo (Authenticator)
Dans ***Administration – Paramètres du système – Spécifique à l'application – Applications – Sécurité***, cocher ***Forcer la sécurité de l'application avec Duo (Authenticator)*** pour l'activer.

![Forcer la sécurité de l'application avec Duo (Authenticator)](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2267.png)

## Forcer la configuration multi-facteurs de la source de données
Dans ***Administration – Paramètres du système – Gestion de {{ fr.VLT_MAJ }} – Paramètres de sécurité – Sécurité***, cocher ***Forcer la configuration multi-facteurs de la source de données*** pour l'activer.

![Forcer la configuration multi-facteurs de la source de données](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2273.png)

## Demander l'A2F avant de passer hors ligne
Dans ***Administration – Paramètres du système – Spécifique à l'application – Cache/Hors ligne – Hors ligne***, cocher ***Demander l'A2F avant de passer hors ligne*** pour l'activer.

![Demander l'A2F avant de passer hors ligne](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2269.png)

## Forcer avec les stratégies de groupe (GPO)
Nous avons également des GPO qui pourraient vous aider à atteindre votre objectif. Un exemple est le GPO ***Forcer l'authentification à deux facteurs lors de la connexion à l'application***.

%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceApplicationMFA

{% snippet, "badgeHelp" %}
Pour plus d'informations sur la configuration, consulter [Appliquer des politiques](/rdm/mac/kb/rdm-windows/how-to-articles/group-policies/).
{% endsnippet %}