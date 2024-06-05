---
eleventyComputed:
  title: Modifier (Actions Spéciales)
  description: L'option Modifier (Actions Spéciales) permet aux utilisateurs et aux administrateurs de modifier les entrées de manière qui ne font pas partie des configurations normales d'une entrée.
---
L'option ***Modifier (Actions Spéciales)*** permet aux utilisateurs et aux administrateurs de modifier les entrées de manière qui ne font pas partie des configurations normales d'une entrée. Cela peut être accédé dans ***Modifier*** – ***Modifier (Actions Spéciales)***, soit dans le menu supérieur, soit en cliquant droit sur une entrée.

![!!Modifier – actions spéciales1](https://cdnweb.devolutions.net/docs/RDMW4041_2024_1.png)

![!!Modifier – actions spéciales2](https://cdnweb.devolutions.net/docs/RDMW4039_2024_1.png)

{% snippet, "badgeInfo" %}
Les actions spéciales disponibles dépendent du type d'entrée sélectionné.
{% endsnippet %}

## Général
| | |
|------------------------------------------------|------------------------------------------------|
| Changer de couleur | Change la couleur de l'icône des entrées, à condition qu'elles fassent partie de l'ensemble d'icônes par défaut de {{ fr.RDM }}. |
| [Commande PowerShell Personnalisée](/powershell/rdm-powershell/powershell-scripting/custom-powershell-commands/) | Permet d'exécuter une commande powershell personnalisée pour effectuer de nombreuses opérations différentes. |
| Détecter les adresses MAC | Détecte l'adresse MAC des entrées de machine sélectionnées et remplit le champ approprié dans la section des actifs. |
| Charger depuis les Informations Système | Remplit la section des actifs de l'entrée. |
| Déplacer la Sélection vers un Nouveau Dossier | Déplace les entrées sélectionnées vers un autre dossier. |
| Déplacer vers une liste de mots de passe existante | Déplace les informations des entrées d'identification sélectionnées vers une liste de mots de passe existante. |

## Web
| | |
|----------|------------|
| Assigner Favicon | Attribue le(s) favicon(s) pertinent(s) aux entrées de site web sélectionnées. |
| [Convertir Site Web (ancien) en Site Web](/rdm/kb/rdm-windows/how-to-articles/convert-website-legacy-to-website/) | Convertit une entrée de site web (ancienne) obsolète en une entrée de Site Web. |
| Découvrir le Remplissage Automatique HTML | Tente de remplir les champs d'information de connexion HTML des entrées sélectionnées. |
| Définir le Remplissage Automatique HTML par Défaut | Remplit les champs ID d'Utilisateur et ID de Mot de Passe des entrées sélectionnées avec leurs valeurs par défaut. |

## Convertir en
| | |
|----------|------------|
| Convertir Session PuTTY en Session PuTTY Intégrée | Convertit la(les) session(s) PuTTY sélectionnée(s) en session(s) PuTTY intégrée(s). |
| Convertir Session SSH/Telnet/PortForward en Session PuTTY/Rebex | Convertit la(les) session(s) SSH/Telnet/PortForward sélectionnée(s) en session(s) PuTTY/Rebex. |
| Convertir Session PuTTY/Rebex en Session SSH/Telnet/Port forward | Convertit la(les) session(s) PuTTY/Rebex sélectionnée(s) en session(s) SSH/Telnet/Port forward. |
| Convertir en Clé API | Convertit l'entrée d'identification sélectionnée en une entrée de Clé API. |
| Convertir en entrée d'identification | Convertit une entrée de type information en une entrée de nom d'utilisateur/mot de passe. |
| Convertir en Connexion (Compte) | Convertit l'entrée d'identification sélectionnée en une entrée de Connexion (Compte). |
| Convertir en Liste de Mots de Passe | Convertit l'entrée d'identification sélectionnée en une liste de mots de passe. |
| Convertir en Site Web | Convertit l'entrée d'identification sélectionnée en une entrée de Site Web. |

## Extracteur
| | |
|----------|------------|
| Extraire Entrée d'Identification | Extrait les identifiants de l'entrée dans une nouvelle entrée et lie l'entrée précédente à cet hôte. Dans le cas d'une liste de mots de passe, extrait les éléments individuels de la liste de mots de passe en plusieurs entrées d'identification. |
| Extraire entrée d'information fusionnée | Extrait les différentes parties d'une entrée d'information en entrées séparées |
| Extraire VPN | Extrait les informations VPN de l'entrée dans une nouvelle entrée et lie l'entrée précédente à ce VPN. |
| Extraire Contact | Extrait les informations de contact de l'entrée dans une nouvelle entrée. |
| Extraire Entrée Hôte | Extrait l'hôte de l'entrée dans une nouvelle entrée et lie l'entrée précédente à cet hôte. |

## Modèle
| | | 
|----------|--------------|
| Changer de Type | Convertit les types des entrées sélectionnées en un type différent. | 
| [Convertir avec Modèle](/rdm/kb/rdm-windows/how-to-articles/convert-with-templates/) | Convertit les entrées sélectionnées selon un modèle choisi. Donne également l'option de choisir quelles informations de l'entrée conserver. |

