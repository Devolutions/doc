---
eleventyComputed:
  title: Erreur HTTP 500
  description: Il existe de nombreux types d'erreurs HTTP 500 différents, chacun avec ses propres solutions. Ce sujet traite de quelques-uns d'entre eux.
---

Il existe de nombreux types d'erreurs HTTP 500 différents, chacun avec ses propres solutions. Ce sujet contient quelques-uns d'entre eux. Ce sujet traite de quelques-uns d'entre eux :

- [500.19 – Erreur interne du serveur](500.19---internal-server-error)
- [500.30 – Activer l'option ***TrustServerCertificate*** de la source de données](500.30---enable-the-data-source-trustservercertificate-option)
- [500.30 – Runtime Core 6.0 (v6.0.7)](500.30---core-6.0-runtime-6.0.7)
- [500.30 – Échec du démarrage de l'application ASP.NET Core](500.30---asp.net-core-app-failed-to-start)
- [500.37 – Échec du démarrage de l'application ASP.NET Core dans le délai de démarrage](500.37---asp.net-core-app-failed-to-start-within-startup-time-limit)

## 500.19 - Erreur interne du serveur

Lors de la tentative de chargement de la page web {{ fr.DVLS }}, l'erreur suivante ***Erreur HTTP 500.19 - Erreur interne du serveur*** est affichée dans le navigateur :
![Erreur HTTP 500.19 - Erreur interne du serveur](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8102.png)

Cette erreur est due à l'absence du module IIS ASP.NET Core (ANCM) et/ou du module de réécriture IIS :
![Diagnostic des fonctionnalités ISS](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8103.png)

## Solution

1. Depuis la {{ fr.DVLSCONSOLE }}, éditer l'instance.
1. Sélectionner l'onglet ***IIS***.
1. Cliquer sur ***Diagnostic IIS***.
1. Cliquer sur ***Installer les prérequis***.
![Installer les prérequis](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8104.png)

{% snippet, "badgeCaution" %}
Si l'exécution du script PowerShell depuis la {{ fr.DVLSCONSOLE }} est bloquée en raison de restrictions sur le système, le script se trouve dans le dossier ***Scripts*** du dossier d'installation de la {{ fr.DVLSCONSOLE }}.
{% endsnippet %}

## 500.30 – Activer l'option ***TrustServerCertificate*** de la source de données

La plupart du temps, {{ fr.DVLS }} renvoie cette erreur 500.30 lorsqu'un serveur SQL (Azure ou local) est configuré avec un certificat auto-signé non trouvé dans le magasin de certificats.

### Solution

Dans ***Fichier*** – ***Sources de données***, choisir la source de données rencontrant l'erreur 500.30. Puis aller à ***Éditer la source de données*** – ***Avancé*** et régler l'option ***TrustServerCertificate*** sur **true**.

![Régler TrustServerCertificate sur true](https://cdnweb.devolutions.net/docs/RDMW4080_2024_2.png)

## 500.30 – Runtime Core 6.0 (v6.0.6)

Lors de la mise à jour de {{ fr.DVLS }} vers la version 2024.1 ou ultérieure, l'interface utilisateur web affiche ***Erreur HTTP 500.31 - Échec du chargement du runtime ASP.NET Core***. La raison est que la version ASP.Net Core 8.0.x n'est pas installée sur le serveur où {{ fr.DVLS }} est hébergé.
![Erreur HTTP 500.31 - Échec du chargement du runtime ASP.NET Core](https://cdnweb.devolutions.net/docs/INTERFACE2026.png)

### Solution

1. Mettre à jour la {{ fr.DVLSCONSOLE }} à la version 2024.1.x ou ultérieure.
1. Télécharger le [bundle d'hébergement ASP.Net Core Module 8.0.x](https://dotnet.microsoft.com/en-us/download/dotnet/8.0).
1. L'installer sur le serveur où {{ fr.DVLS }} est hébergé.

## 500.30 – Échec du démarrage de l'application ASP.NET Core

Suite au processus de mise à niveau, lors de la tentative d'ouverture de la page web {{ fr.DVLS }}, le navigateur affiche ***Erreur HTTP 500.30 - Échec du démarrage de l'application ASP.NET Core***.
![Erreur HTTP 500.30 - Échec du démarrage de l'application ASP.NET Core](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8109.png)

### Solution

Vérifier que ***Activer les applications 32 bits*** est réglé sur ***Faux*** dans les ***Paramètres avancés*** du pool d'applications {{ fr.DVLS }} dans le Gestionnaire IIS.
![Activer les applications 32 bits réglé sur Faux](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6161.png)

Si ***Activer les applications 32 bits*** est déjà réglé sur faux, s'assurer que le compte de service désigné comme ***Identité du pool d'applications*** dans le ***pool d'applications {{ fr.DVLS }}*** a suffisamment de droits sur le sous-dossier App_Data dans le dossier de l'application web {{ fr.DVLS }}.

S'assurer que le Bundle d'hébergement APS.Net Core installé sur le serveur où {{ fr.DVLS }} est hébergé est la [dernière version](https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-aspnetcore-6.0.25-windows-hosting-bundle-installer).

{% snippet, "badgeHelp" %}
Contacter nos techniciens de support à [service@devolutions.net](mailto:service@devolutions.net) si ces solutions ne résolvent pas votre problème.
{% endsnippet %}