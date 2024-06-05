---
eleventyComputed:
  title: Authentification unique Delinea Secret Server
  description: Comment utiliser l'Authentification Unique Delinea Secret Server dans {{ fr.RDM }}.
---
L'authentification unique (SSO) Delinea Secret Server est prise en charge dans {{ fr.RDM }}.

{% snippet, "badgeInfo" %}
Consulter notre [guide de configuration d'entrée Secret Server](/rdm/kb/rdm-windows/how-to-articles/secret-server-entry-configuration/) pour apprendre à configurer une entrée pour utiliser les identifiants ***Secret Server***.
{% endsnippet %}

{% snippet, "badgeInfo" %}
Le mode SSO est disponible pour les instances cloud et auto-hébergées (on-prem). Si le SSO est sélectionné mais non pris en charge, {{ fr.RDM }} passe automatiquement à l'authentification OAuth et les utilisateurs doivent entrer manuellement leur nom d'utilisateur et leur mot de passe.
{% endsnippet %}

### Étapes de configuration

1. Ajouter une entrée ***Secret Server*** dans {{ fr.RDM }}
1. Entrer dans la configuration de l'entrée et sélectionner ***SSO*** dans le champ ***Mode d'authentification***.
1. Cliquer sur ***Ajouter*** pour créer l'entrée.
![Sélectionner SSO dans le champ Mode d'authentification](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6154.png)
1. Ouvrir l'entrée.
1. Sélectionner une connexion qui est liée à votre entrée ***Secret Server***. Cela lancera une fenêtre de navigateur.
1. Il vous sera demandé de sélectionner un compte pour vous authentifier. Entrer vos identifiants de connexion ***Secret Server***.

Depuis {{ fr.RDM }}, vous pourrez voir les identifiants ***Secret Server*** auxquels vous avez accès.
