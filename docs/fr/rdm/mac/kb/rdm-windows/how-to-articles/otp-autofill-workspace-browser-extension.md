---
eleventyComputed:
  title: Remplissage automatique d'OTP avec le {{ fr.WBEX }}
  description: Le {{ fr.WBEX }} permet de remplir automatiquement une demande de mot de passe à usage unique (OTP) avec une entrée de session de site Web et une entrée d'information de site Web (Legacy) de {{ fr.RDM }}.
---
Le {{ fr.WBEX }} permet de remplir automatiquement une demande de mot de passe à usage unique (OTP) avec une entrée de session ***Website*** et une entrée d'information ***Website (Legacy)*** de {{ fr.RDM }}.

{% snippet, "badgeNotice" %}
Pour ce sujet, nous utiliserons Google Chrome pour inspecter le champ.
{% endsnippet %}

- Sélectionner le type de configuration ***Source*** pour définir les informations OTP nécessaires à enregistrer dans la section ***Général*** de l'entrée de session ***Website*** ou de l'entrée d'information ***Website (Legacy)*** dans ***Mot de passe à usage unique (OTP)*** ou lier à une entrée de justificatif d'identité ***Mot de passe à usage unique (OTP)*** séparée.
![!!KB4822](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4822.png)
- Ouvrir une page de navigateur vers le site avec l'OTP.
- Faire un clic droit dans le champ OTP et cliquer sur ***Inspecter***.
![!!KB4818](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4818.png)
- Chercher l'ID OTP dans la fenêtre ***Éléments*** et copier l'information. Dans cet exemple, l'ID à copier est passField.
![!!KB4819](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4819.png)
- Dans {{ fr.RDM }}, enregistrer l'information dans :
   - une entrée de session ***Website*** dans ***Login - Html Control ID - One time password ID***.
      ![!!KB4821](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4821.png)
   - une entrée de session d'information ***Website (Legacy)*** dans ***Plus de paramètres - Mot de passe à usage unique***.
      ![!!KB4820](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4820.png)
{% snippet, "badgeInfo" %}
Si vos ***Identifiants*** sont définis sur ***Lié ({{ fr.VLT }})***, vous devez également configurer et définir le lien ***Mot de passe à usage unique (OTP)*** dans la section de l'onglet ***Général***.
{% endsnippet %}

- Cliquer sur ***OK*** pour enregistrer.