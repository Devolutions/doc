---
eleventyComputed:
  title: Politiques de rotation des mots de passe PAM
  description: "{{ fr.DHUB }} offre des politiques de rotation de mot de passe polyvalentes, facilement accessibles via l'option Modifier {{ fr.VLT }}."
---
{{ fr.DHUB }} offre des politiques de rotation de mot de passe polyvalentes pour les coffres PAM, facilement accessibles en cliquant sur le bouton des points de suspension à côté du nom d'un {{ fr.VLT }}, puis en allant à ***Général*** – ***Politique de rotation de mot de passe PAM***.

Ces politiques peuvent être appliquées à de nombreux {{ fr.VLT }} et entrées, permettant une gestion simple de la rotation des mots de passe.

![Politiques de rotation des mots de passe PAM](https://cdnweb.devolutions.net/docs/HUBB4005_2024_1.png)

OPTION | DESCRIPTION | 
|------|-------------|
| Hérité | La politique de rotation du mot de passe est héritée du système {{ fr.VLT }}. |
| Aucune | Pas de politique de rotation de mot de passe. |
| Uniquement manuelle | Les mots de passe ne sont réinitialisés manuellement. |
| Périodique | Permet la rotation manuelle du mot de passe et force les rotations automatiques à des intervalles définis (en heures ou en jours). | 
| Obligatoire lors du checkin | Force la rotation du mot de passe lors du checkin. |
