---
title: Instance de la base de données
index: 20
---
{{ fr.RDMS }} n'a aucune exigence qui dicterait le protocole de communication utilisé, ainsi que la plupart des options qui vous sont offertes par l'instance SQL Server choisie. Tant que le poste de travail client peut se connecter à l'instance SQL, {{ fr.RDMS }} fonctionnera efficacement. Veuillez consulter la documentation Microsoft afin d'autoriser la connectivité à l'instance.  

Avec l'authentification Windows, vous devez définir l'identité du pool d'applications sur un compte du domaine. Nous vous recommandons de créer un compte dédié à cet effet. Reportez-vous a la rubrique [Configure {{ fr.RDMS }} to use integrated security](/kb/devolutions-server/how-to-articles/configure-server-use-integrated-security/) (en anglais) pour les instructions qui doivent être exécutées après la création de l'instance {{ fr.RDMS }} . 

