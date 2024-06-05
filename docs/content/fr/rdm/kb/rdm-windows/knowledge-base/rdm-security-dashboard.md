---
eleventyComputed:
  title: "{{ fr.RDM }} Tableau de bord de sécurité"
  description: Le tableau de bord de sécurité est un outil offrant des conseils pour améliorer la sécurité de la plateforme {{ fr.RDM }}.
---
Le tableau de bord de sécurité est un outil offrant des conseils pour améliorer la sécurité de la plateforme {{ fr.RDM }} et également des astuces pour réduire la charge de travail des administrateurs. Certains conseils sont des meilleures pratiques communes en matière de sécurité de l'information, d'autres sont un consensus entre nos propres équipes.

Les scores sont certes sujets à discussion et nous ne prétendons pas que chaque sujet a la même valeur relative pour tous les membres de notre communauté. Atteindre 100 % n'est sûrement pas un objectif en soi, nous visons simplement à sensibiliser et à fournir des idées pour votre propre renforcement de la sécurité.
![{{ fr.RDM }} tableau de bord de sécurité](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4707.png)

## Éléments d'action pour l'amélioration

### Configurer un modèle de mot de passe par défaut
Les modèles de mot de passe définissent les exigences pour les mots de passe générés avec les générateurs de mot de passe.

#### Atténuation
Dans ***Fichier – Modèles***, sélectionner ***Modèles de mot de passe*** pour créer un modèle. Ensuite, le modèle par défaut peut être sélectionné dans ***Administration – Paramètres système – Modèles de mot de passe***.

---

### Utiliser un fournisseur de sécurité
Par défaut, les mots de passe ne sont pas protégés au repos. Lorsqu'un fournisseur de sécurité est configuré, les données sensibles contenues dans une source de données sont chiffrées.

#### Atténuation
Les fournisseurs de sécurité sont configurés dans ***Administration – Fournisseurs de sécurité***.

---

### Utiliser une clé maîtresse avec la source de données
Utiliser une clé maîtresse chiffre le contenu sensible des fichiers de source de données basés sur XML.

#### Atténuation
La clé maîtresse peut être définie sous ***Fichier – Changer la clé maîtresse***.

---

### Configurer une version minimale du client
Il est recommandé de définir une version minimale de {{ fr.RDM }} pour garantir que les clients sont à jour et disposent des dernières fonctionnalités de sécurité.

---

### Chiffrer les fichiers de configuration à l'aide d'un mot de passe d'application
Le mot de passe d'application devrait être utilisé pour chiffrer les informations sensibles dans les fichiers de configuration de {{ fr.RDM }}.

#### Atténuation
Dans ***Fichier – Paramètres – Sécurité – Sécurité de l'application (local)***, choisir ***Utiliser un mot de passe d'application*** et cocher ***Chiffrer les fichiers locaux en utilisant le mot de passe d'application***.

---

### Utiliser HTTPS pour se connecter à la source de données
HTTPS est utilisé pour protéger la communication entre le client et le serveur hébergeant la source de données. Le trafic sur HTTP est non chiffré et peut être intercepté et altéré par un tiers malveillant.

#### Atténuation
Configurer un certificat TLS sur le serveur et définir l'URL de la source de données pour commencer par **https://**. Voir [Configurer SSL](/server/kb/how-to-articles/configure-ssl/).

---

### Désactiver la sécurité héritée
La sécurité héritée a été dépréciée et sera complètement supprimée à partir de la version 2023.3 de {{ fr.RDM }}.

#### Atténuation
Dans ***Administration – Paramètres système – Gestion de {{ fr.VLT_MAJ }} – Paramètres de sécurité – Sécurité***, désactiver ***Utiliser la sécurité héritée***. Voir [Désactiver la sécurité héritée dans {{ fr.RDM }}](/rdm/kb/rdm-windows/how-to-articles/migrate-legacy-security-permissions/).

---

### Imposer l'authentification multifacteur (AMF)
L'authentification multifacteur (AMF) nécessite un moyen supplémentaire d'authentification lors de la connexion à une source de données. Ce contrôle prévient l'abus de mots de passe compromis, divulgués ou faibles. Le logiciel peut être configuré pour imposer les exigences AMF à tous les utilisateurs.

#### Atténuation
Dans ***Administration – Paramètres système – Paramètres de sécurité***, activer ***Forcer la configuration 2-facteurs de la source de données***.

---

### Désactiver le mode hors ligne
Par défaut, le mode hors ligne est activé et permet à {{ fr.RDM }} de mettre automatiquement en cache les identifiants stockés dans les entrées sur le système client. Cette fonctionnalité devrait être désactivée dans les environnements à haute sécurité pour éviter une exposition inutile de données sensibles.

---

### Activer l'expiration du mot de passe pour les utilisateurs personnalisés
Certaines normes de sécurité exigent que les mots de passe soient changés à intervalles réguliers. PCI DSS 4.0 exige que les mots de passe soient changés tous les 90 jours lorsque le mot de passe est le seul facteur d'authentification.

#### Atténuation
L'expiration du mot de passe peut être configurée dans ***Administration – Paramètres système – Paramètres de sécurité – Expiration du mot de passe utilisateur personnalisé (jours)***.

---

### Désactiver ou générer un avertissement pour les événements risqués
Certains événements d'entrée peuvent effectuer des actions puissantes telles que l'exécution d'un programme ou d'un script externe. Ces événements représentent un risque s'ils sont modifiés par un acteur malveillant. Ces types d'événements peuvent être désactivés s'ils ne sont pas nécessaires, ou {{ fr.RDM }} peut être configuré pour afficher un avertissement lorsqu'un tel événement est sur le point d'être exécuté.

#### Atténuation
Dans ***Administration – Paramètres système – Paramètres de sécurité***, régler ***Événements risqués*** sur ***Désactivé*** ou ***Activé avec avertissements***.

---

### Ne pas utiliser les SMS pour l'authentification multifacteur
Les SMS ne sont pas recommandés pour l'A2F. Un mécanisme plus robuste basé sur une application d'authentification ou une clé de sécurité physique devrait être utilisé à la place.

---

### Les connexions SQL devraient utiliser TLS
TLS protège les communications entre {{ fr.RDM }} et l'instance SQL Server.

#### Atténuation
Configurer SQL Server pour prendre en charge les connexions TLS et ajouter **encrypt=true** à la connexion SQL Server.

---

### Désactiver la variable de mot de passe de la source de données
Lorsque cette option est activée, la variable `DATA_SOURCE_PASSWORD` se résout au mot de passe de la source de données. Cette option devrait être désactivée si elle n'est pas nécessaire.

#### Atténuation
Dans ***Administration – Paramètres système – Politique de mot de passe***, décocher ***Autoriser la variable de mot de passe de la source de données***.

---

### L'analyseur de force de mot de passe devrait utiliser zxcvbn
Zxcvbn est recommandé par rapport à l'analyseur de force de mot de passe hérité car il est plus fiable.

#### Atténuation
Dans ***Administration – Paramètres système – Politique de mot de passe***, régler ***Calculateur de force de mot de passe*** sur ***Zxcvbn***.

---

### La validation du certificat TLS devrait être activée
Valider les certificats garantit que la connexion est établie avec la partie prévue et protège contre les attaques d'interception de données.

#### Atténuation
Dans ***Fichier – Paramètres – Sécurité – Sécurité du certificat***, décocher ***Ignorer les erreurs de certificat d'application***.

---

### Le chiffrement transparent des données (TDE) devrait être utilisé avec SQL Server
Le chiffrement transparent des données chiffre les données de la base de données au repos, ce qui atténue les risques en cas de vol de disques physiques ou de bandes de sauvegarde.

---

### L'activité de {{ fr.UVLT_MAJ }} devrait être enregistrée
Les journaux d'activité sur le {{ fr.UVLT }} peuvent fournir des informations supplémentaires lors de la réponse à un incident.

#### Atténuation
Dans ***Administration – Paramètres système – {{ fr.UVLT_MAJ }}***, cocher ***Enregistrer les activités de {{ fr.UVLT }}***.

---

### Les {{ fr.VLT_MAJ }}s devraient être créés avec des permissions restreintes par défaut
Il est préférable de fournir des droits aux utilisateurs selon les besoins. Lorsque cette option est activée, les {{ fr.VLT }}s seront créés avec un ensemble de permissions plus limité.

#### Atténuation
Dans ***Administration – Paramètres système – Sécurité***, cocher ***Créer les {{ fr.VLT }}s avec un accès restreint par défaut***.

---

### Activer les avertissements pour les connexions RDP non fiables
Lorsqu'un certificat inconnu est présenté, le client RDP devrait être configuré pour présenter un avertissement (***Avertissez-moi***) ou interrompre la connexion (***Ne pas se connecter***).

#### Atténuation
Dans ***Fichier – Paramètres – Types – Bureau à distance***, régler ***Niveau d'authentification*** sur ***Avertissez-moi*** ou ***Ne pas se connecter***.

---

### Le chiffrement Zip devrait utiliser le mode AES
L'algorithme ZipCrypto est considéré comme non sécurisé et AES devrait être utilisé à la place. Il est susceptible d'attaques par texte en clair connu qui peuvent permettre de récupérer le contenu de l'archive sans connaître le mot de passe (voir [Pourquoi vous ne devriez jamais utiliser le chiffrement natif Zip dans Windows](https://blog.devolutions.net/2020/08/why-you-should-never-use-zipcrypto/) pour plus de détails sur cette attaque).

#### Atténuation
Dans ***Fichier – Paramètres – Avancé***, décocher ***Utiliser la compression ZipCrypto (non recommandé)***.

---