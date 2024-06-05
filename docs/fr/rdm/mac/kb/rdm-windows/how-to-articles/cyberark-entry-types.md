---
eleventyComputed:
  title: Types d'entrées CyberArk
  description: Liste des types d'entrées CyberArk dans {{ fr.RDM }}
---
Toutes les connexions aux systèmes cibles utilisent finalement une variante de l'exécutable psm `/u {user} /a {target} /c {connection_type}`. Une fois authentifié à PSM via l'authentification sans mot de passe AAM ou les identifiants PVWA, une connexion au système cible est lancée sur PSM via l'exécutable `psm`. Cette connexion ouverte est ensuite retransmise au client {{ fr.RDM }}, à l'interface web HTML5 PVWA, ou à un client RDP via le fichier RDP généré.

La distinction générale entre les types CyberArk dans {{ fr.RDM }} est la manière dont un utilisateur s'authentifie à PSM et si le tableau de bord PVWA intégré est utilisé dans {{ fr.RDM }} pour ouvrir une connexion plutôt que de lancer directement la connexion.

## Identifiants
Ces identifiants sont souvent liés directement à une connexion pour faciliter des connexions transparentes à un système cible via CyberArk PSM.

***CyberArk AAM*** : Lie le certificat privé local d'un utilisateur (clé) dans le magasin de certificats utilisateur et le service API REST CCP de CyberArk. L'empreinte du certificat, liée à une Application (définie dans PVWA) qui identifie un client {{ fr.RDM }} (éventuellement restreint à des adresses IP spécifiques), récupère les identifiants demandés depuis le Coffre-Fort Numérique, éventuellement géré par le CPM.

***CyberArk PVWA*** : Similaire à AAM, mais prend en charge des méthodes d'authentification non-AAM telles que CyberArk (authentification interne), LDAP, Windows (authentification intégrée Kerberos), Radius et SAML (SSO).

## Connexions
***Tableau de bord CyberArk*** : Fournit aux utilisateurs de {{ fr.RDM }} une interface alternative à PVWA. Affiche une liste de Coffres-Forts Numériques et de Comptes auxquels l'utilisateur actuellement connecté peut accéder. Se connecter aux systèmes cibles via les méthodes suivantes :

* Connexion PSM Traditionnelle
* Contournement de PSM via l'option ***Permettre la connexion à l'hôte*** sous ***Avancé*** – ***Général***. Non recommandé.

![Contournement de PSM via l'option Permettre la connexion à l'hôte](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6114.png)

PSM Alternate Shell (également connu en interne comme la méthode de connexion Ad-Hoc, différente de la connexion Ad-Hoc dans PVWA). Nécessite un serveur CyberArk PSM préalablement configuré.

![Option PSM Alternate Shell](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6116.png)

* ***Connexion CyberArk PSM*** - Destinée à se connecter à un hôte spécifique en utilisant un compte privilégié et une connexion de serveur PSM, en exploitant la méthode de connexion PSM Alternate Shell.

* ***Serveur CyberArk PSM*** - Utilisé avec la Connexion PSM (et l'option PSM Alternate Shell de la connexion au Tableau de bord CyberArk) pour définir un serveur PSM pour se connecter à un hôte donné.

## Modes d'Authentification et Identifiants d'Authentification
L'identifiant CyberArk PVWA, la connexion au Tableau de bord CyberArk et la Connexion CyberArk PSM offrent plusieurs méthodes d'authentification. Ces méthodes d'authentification sont pour ***s'authentifier à PVWA*** (c'est-à-dire, si vous naviguiez vers l'interface web et choisissiez la méthode d'authentification), pas le point de terminaison cible. Ci-dessous est comment les modes d'authentification se rapportent aux identifiants d'authentification.

## Tableau de bord CyberArk (Connexion)
{% snippet, "badgeInfo" %}
L'option ***Paramètres de Mon Compte PVWA*** est le paramètre situé dans ***Fichier*** – ***Paramètres de Mon Compte*** – ***CyberArk PVWA***. ***AAM ({{ fr.UVLT }} recherche)*** est pour trouver une entrée AAM stockée dans une Source de Données Avancée {{ fr.UVLT }}.
{% endsnippet %}

* ***CyberArk*** : Personnalisé, Paramètres de Mon Compte PVWA, AAM (Lié), AAM ({{ fr.UVLT }} recherche)
* ***LDAP*** : Personnalisé, Paramètres de Mon Compte PVWA, AAM (Lié), AAM ({{ fr.UVLT }} recherche)
* ***Radius*** : Personnalisé, Paramètres de Mon Compte PVWA, AAM (Lié), AAM ({{ fr.UVLT }} recherche)
* ***Windows*** : Personnalisé, Paramètres de Mon Compte PVWA, AAM (Lié), AAM ({{ fr.UVLT }} recherche)
* ***SAML*** : Aucun

## CyberArk PVWA (Identifiant)
{% snippet, "badgeInfo" %}
L'option AAM offre une liste déroulante pour choisir un identifiant existant.
{% endsnippet %}

* ***CyberArk*** : Personnalisé, AAM
* ***LDAP*** : Personnalisé, AAM
* ***Radius*** : Personnalisé, AAM
* ***Windows*** : Personnalisé, AAM
* ***SAML*** : Aucun

## Serveur CyberArk PSM (Connexion)
{% snippet, "badgeInfo" %}
L'option AAM offre une liste déroulante pour choisir un identifiant existant.
{% endsnippet %}

* ***AAM*** : Identifiant Lié
* ***Personnalisé*** : Nom d'utilisateur et Mot de passe
