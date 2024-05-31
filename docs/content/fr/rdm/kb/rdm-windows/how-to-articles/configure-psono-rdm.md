---
eleventyComputed:
  title: Configurer Psono dans {{ fr.RDM }}
  description: Configurer et permettre aux utilisateurs d'accéder de manière sécurisée à toutes vos entrées et informations d'identification Psono directement depuis {{ fr.RDM }}.
---
Configurer et permettre aux utilisateurs d'accéder de manière sécurisée à toutes vos entrées et informations d'identification Psono directement depuis {{ fr.RDM }}.

{% snippet, "badgeInfo" %}
Psono est intégré dans les versions {{ fr.RDM }} 2022.1 et supérieures.
{% endsnippet %}

{% snippet, "badgeInfo" %}
L'intégration des informations d'identification des gestionnaires de mots de passe est uniquement disponible dans la version Team de {{ fr.RDM }}.
{% endsnippet %}

* [Configurer Psono](#configurer-psono)
* [Configurer Psono dans {{ fr.RDM }}](#configurer-psono-dans-remote-desktop-manager)

### Configurer Psono
1. Ouvrir un navigateur web et se connecter à votre compte Psono.
1. Cliquer sur votre adresse courriel et sélectionner ***Autre***.
![!!KB4891](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4891.png)
1. Cliquer ***Créer une nouvelle clé API***.
![!!KB4892](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4892.png)
1. ***Nommer*** la clé API, nous suggérons {{ fr.RDM }}
1. Choisir si cocher la case ***Restriction secrète ?*** :
* Si vous cochez la case, vous devrez ajouter un secret à chaque dossier Psono. Suivre la documentation de Psono sur [Créer des secrets](https://doc.psono.com/user/basic/creating-secrets.html#creating-secrets) pour plus d'informations.
* Si vous décochez la case, une clé illimitée vous sera fournie, donnant accès à tous les secrets de la base de données.
   {% snippet, "shieldCaution" %}
   Les deux options sont prises en charge dans {{ fr.RDM }} ; tout dépend du niveau d'accès que l'administrateur souhaite fournir. Si vous décochez la case de restriction secrète, c’est plus simple à gérer mais moins sécurisé que si vous ajoutez un secret à chaque dossier Psono.
   {% endsnippet %}
1. Cocher ***Droit de lire*** et ***Droit d'écrire***.
1. Cliquer ***Créer***.
![!!KB4893](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4893.png)
1. Cliquer sur le bouton d'édition à côté de la nouvelle clé API que vous avez créée.
![!!KB4894](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4894.png)
1. Vous trouverez dans la section ***Détails*** les informations requises pour la configuration de {{ fr.RDM }}
![!!KB4895](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4895.png)

### Configurer Psono dans {{ fr.RDM }}
1. Dans {{ fr.RDM }}, cliquer ***Nouvelle entrée***.
1. Utiliser le champ de recherche pour localiser Psono, cliquer ***OK***.
![!!KB4899](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4899.png)
1. Copier/Coller tous les détails de la clé API Psono de votre compte.
1. Cocher ***Toujours demander avec la liste***.
![!!KB4896](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4896.png)
1. Optionnel : Pour permettre l'OTP, cliquer sur l'onglet ***Avancé*** et cocher l'option ***Permettre la récupération d'OTP***.
1. Cliquer ***OK***.

Vous pouvez maintenant créer ou éditer une entrée (par exemple, SSH ou RDP) et sélectionner l'entrée Psono qui vient d'être créée. Cliquer ***Sélectionner dans la liste*** pour choisir l'entrée actuelle.
