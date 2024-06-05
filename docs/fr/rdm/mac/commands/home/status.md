---
eleventyComputed:
  title: Statut
  description: Le Statut vous permet de changer le statut d'une session.
---
Le Statut vous permet de changer le statut d'une session.

## Paramètres

![Accueil - Statut](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip409.png)

| OPTION   | DESCRIPTION |
|----------|-------------|
| Modifier | Cela vous permettra d'écrire un message de statut de session qui sera affiché chaque fois qu'un utilisateur ouvre une session. |
| Par défaut  | Cela remettra le statut à son réglage par défaut. |
| Verrouillé   | Cela permet à l'utilisateur qui a verrouillé la session de l'utiliser et bloque les autres |
| Désactivé | Une session désactivée ne peut pas être ouverte. Elle est principalement utilisée lorsque vous ne souhaitez pas la supprimer mais éviter toute connexion non surveillée. C'est également utile pour désactiver un compte pour l'un de vos anciens clients. |
| Avertissement  | Ce statut permet à la session d'être utilisée, mais affiche un message à l'utilisateur avant qu'elle ne soit ouverte. |
| Expiré  | Une session expirée ne peut pas être ouverte. Elle peut être définie manuellement ou automatiquement si la date d'expiration de la session est définie dans sa propriété. |

{% snippet, "shieldCaution" %}
Si vous utilisez l'option Verrouillé, la session sera verrouillée pour les autres utilisateurs seulement, mais le détenteur du verrou peut toujours l'utiliser.
{% endsnippet %}


