---
eleventyComputed:
  title: Remplissage automatique d'OTP avec le {{ fr.WBEX }}
  description: Le {{ fr.WBEX }} permet de remplir automatiquement une demande de mot de passe à usage unique (OTP) avec une entrée de session ***Site Web*** et une entrée d'information ***Site Web (Legacy)*** depuis {{ fr.RDM }}.
---
Le {{ fr.WBEX }} permet de remplir automatiquement une demande de mot de passe à usage unique (OTP) avec une entrée de session ***Site Web*** et une entrée d'information ***Site Web (Legacy)*** depuis {{ fr.RDM }}.

{% snippet, "badgeNotice" %}
Pour ce sujet, nous utiliserons Google Chrome pour inspecter le champ.
{% endsnippet %}

1. Sélectionner le type de configuration ***Source*** pour définir les informations OTP nécessaires à enregistrer dans la section ***Général*** de l'entrée de session ***Site Web*** ou de l'entrée d'information ***Site Web (Legacy)*** dans ***Mot de passe à usage unique (OTP)*** ou lier à une entrée de crédit ***Mot de passe à usage unique (OTP)*** séparée.
![!!KB4822](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4822.png)
1. Ouvrir une page de navigateur vers le site avec l'OTP.
1. Faire un clic droit dans le champ OTP et cliquer sur ***Inspecter***.
![!!KB4818](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4818.png)
1. Chercher l'ID OTP dans la fenêtre ***Éléments*** et copier l'information. Dans cet exemple, l'ID à copier est passField.
![!!KB4819](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4819.png)
1. Dans {{ fr.RDM }}, enregistrer l'information dans :
   - une entrée de session ***Site Web*** dans ***Identifiant de contrôle HTML de connexion - Identifiant de mot de passe à usage unique***.
      ![!!KB4821](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4821.png)
   - une entrée de session d'information ***Site Web (Legacy)*** dans ***Plus de paramètres - Mot de passe à usage unique***.
      ![!!KB4820](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4820.png)
{% snippet, "badgeInfo" %}
Si vos ***Identifiants*** sont définis sur ***Lié ({{ fr.VLT }})***, vous devez également configurer et définir le lien ***Mot de passe à usage unique (OTP)*** dans la section de l'onglet ***Général***.
{% endsnippet %}

6. Cliquer sur ***OK*** pour enregistrer.