---
eleventyComputed:
  title: Documentation Syslog
  description: Les informations suivantes décrivent le type de message et le sous-type des enregistrements envoyés de {{ fr.DVLS }} à un serveur syslog.
---
Les informations suivantes décrivent le type de message et le sous-type des enregistrements envoyés de {{ fr.DVLS }} à un serveur syslog.

## Type de message

- Inconnu = 0
- Info = 1
- Avertissement = 2
- Erreur = 3
- OuvrirConnexion = 4
- AjouterConnexion = 5
- ModifierConnexion = 6
- SupprimerConnexion = 7
- OpenVPN = 8
- FermerVPN = 9
- IdentifiantsEnvoyésAuPlugin = 10
- Commentaire = 11
- ConnexionExportée = 12
- UtilisateurAjouté = 13
- UtilisateurSupprimé = 14
- UtilisateurModifié = 0xF
- GroupeDeSécuritéAjouté = 0x10
- GroupeDeSécuritéSupprimé = 17
- GroupeDeSécuritéModifié = 18
- RôleAjouté = 19
- RôleSupprimé = 20
- RôleModifié = 21
- MacroScriptOutil = 22
- DocumentsExportés = 23
- CléAgentCléUtilisée = 24
- RapportOuvert = 25
- DépôtAjouté = 26
- DépôtSupprimé = 27
- DépôtModifié = 28
- PièceJointeAjoutée = 29
- PièceJointeSupprimée = 30
- PièceJointeModifiée = 0x1F
- DocumentPièceJointeMisÀJour = 0x20
- PièceJointeOuverte = 33
- JournalActivitéEffacé = 34
- EntréeSuppriméeEffacée = 35
- HistoriqueEntréeEffacé = 36
- PermissionSourceDonnéesChangée = 37
- PropriétésServeurConsultées = 38
- PropriétésServeurModifiées = 39
- ServeurMisÀJour = 40
- DocumentMisÀJour = 41
- MotDePasseConsulté = 43
- MotDePasseChangé = 44
- ChaîneConnexionConsultée = 45
- HistoriqueMotDePasseEffacé = 46
- ConnexionConsultée = 47
- RaccourciAjouté = 48
- RaccourciSupprimé = 49
- ModèleMotDePasseAjouté = 50
- ModèleMotDePasseModifié = 51
- ModèleMotDePasseSupprimé = 52
- RéinitialiserMotDePasse = 53
- Réserver = 54
- Restituer = 55
- PermissionChangée = 56
- Validation = 57
- MotDePassePamConsulté = 58
- IdentifiantPamAjouté = 59
- IdentifiantPamModifié = 60
- IdentifiantPamSupprimé = 61
- MacroTypageExécutée = 62
- ScriptTerminalExécuté = 0x3F
- ConnexionCopiée = 0x40
- VersionHistoriqueConnexionRéinitialisée = 65
- AccèsRefusé = 66
- CertificatPamConsulté = 67
- ÉtiquettePamAjoutée = 68
- ÉtiquettePamLue = 69
- ÉtiquettePamModifiée = 70
- ÉtiquettePamSupprimée = 71
- ÉtiquettesAssociéesSupprimées = 72
- ÉtiquettesInutiliséesSupprimées = 73
- ProgrammationRéinitialisationMotDePasseAjoutée = 74
- ProgrammationRéinitialisationMotDePasseLue = 75
- ProgrammationRéinitialisationMotDePasseModifiée = 76
- ProgrammationRéinitialisationMotDePasseSupprimée = 77
- MotDePassePamMisÀJour = 78
- DossierPamAjouté = 79
- DossierPamLu = 80
- DossierPamModifié = 81
- DossierPamSupprimé = 82
- IdentifiantPamLu = 83
- RéserverPamAjouté = 84
- RéserverPamLu = 85
- RéserverPamModifié = 86
- RéserverPamSupprimé = 87
- StatutRéserverPamChangé = 88
- RéserverPamAbandonné = 89
- RéserverPamExpiré = 90
- UtilisateurRéinitialiserMotDePasse = 91
- HistoriqueMotDePassePamConsulté = 92
- LicenceAjoutée = 93
- LicenceSupprimée = 94
- LicenceModifiée = 95
- RéserverPamTerminé = 96
- RéserverPamApprouvé = 97
- RéserverPamRefusé = 98
- RéserverPamActif = 99
- EnregistrementSessionConsulté = 100
- NomUtilisateurConsulté = 101
- DomaineConsulté = 102
- LicenceUtilisateurAttribuée = 103
- LicenceUtilisateurDésattribuée = 104
- SynchronisationIdentifiantPam = 105
- RéinitialisationMotDePassePam = 106
- InjectionIdentifiantsPam = 107
- EnregistrementInterrompu = 108
- ToutesConnexionsExportées = 109
- DossierPamExporté = 110
- MotDePasseMaîtreCoffreModifié = 111
- MotDePasseUniqueConsulté = 112
- RéserverPamAnnulé = 113
- RéserverPamForcéRestitution = 114
- UtilisateurVerrouillé = 115
- DemandeAccèsTemporaireEnvoyée = 116
- DemandeAccèsTemporaireApprouvée = 117
- DemandeAccèsTemporaireAnnulée = 118
- DemandeAccèsTemporaireRefusée = 119
- AjouterModèle = 120
- ModifierModèle = 121
- SupprimerModèle = 122
- PolitiqueRéserverPamAjoutée = 123
- PolitiqueRéserverPamModifiée = 124
- PolitiqueRéserverPamSupprimée = 125
- DonnéesSensiblesConsultées = 126
- ModèleOtpPamAjouté = 0x7F
- ModèleOtpPamModifié = 0x80
- ModèleOtpPamSupprimé = 129
- PropagationMotDePassePam = 130
- RésurrectionEntréeÉchouée = 131
- DocumentationExportée = 132
- ParamètresSpécifiquesUtilisateurModifiés = 133
- ParamètresSpécifiquesUtilisateurSupprimés = 134
- ConnexionCodeUrgence = 135
- CoffrePamAjouté = 136
- CoffrePamModifié = 137
- CoffrePamSupprimé = 138
- CoffrePamExporté = 139
- UtilisateurRéinitialiserAMF = 140

## Sous-type de message

- AnalyseurMotDePasse = 2501
- JournauxAdministration = 2502
- ListeUtilisateursConnectés = 2503
- EntréeExpirationConnexion = 2504
- EntréesSupprimées = 2505
- JournalDernièreUtilisation = 2506
- JournalConnexionPartagée = 2507
- HistoriqueConnexion = 2508
- TentativeConnexion = 2509
- JournauxServeur = 2510
- ConnexionsOuvertes = 2511
- MotDePasseCopiéPressePapiers = 4301
- DemandeÉditionWeb = 4302
- DroitNonAccordé = 6600
- UtilisateurIntrouvableOuMotDePasseIncorrect = 6601
- IdPièceJointeInvalide = 6602
- AccèsParamètresItinéranceAutreUtilisateurInterdit = 6603
- UtilisateursBaseDonnéesNonAutorisés = 6604
- UtilisateursDomaineNonAutorisés = 6605
- UtilisateursPersonnalisésNonAutorisés = 6606
- UtilisateursMachineLocaleNonAutorisés = 6607
- SauvegardeUtilisateurInterdite = 6608
- SuppressionEntréeImpossible = 6609
- SauvegardeRôleImpossible = 6611
- ChangementMotDePasseInterdit = 6612
- SauvegardeRôleInterdite = 6613
- TypeUtilisateurIncorrect = 6614
- GestionPiècesJointesInterdite = 6615
- AjoutDossierInterdit = 6616
- SauvegardeEntréeInterdite = 6617
- SuppressionEntréeInterdite = 6618
- RestitutionInterdite = 6619
- ConsultationInformationDeuxFacteursInterdite = 6620
- ConsultationPièceJointeInterdite = 6621
- CoffrePrivéUtilisateurInterdit = 6622
- SuppressionHistoriqueEntréeInterdite = 6623
- LicenceInterditInteractionEntrée = 6624
- ÊtreAdministrateurObligatoire = 6625
- ConsultationEntréeInterdite = 6626
- EntréeIntrouvable = 6627
- ConsultationHistoriqueEntréeInterdite = 6628
- RéserverEntréeInterdit = 6629
- ConsultationInformationRéserverInterdite = 6630
- ConsultationRéserverUtilisateurInterdite = 6631
- GestionManuelsInterdite = 6632
- ConsultationPagesManuelsInterdite = 6633
- ConsultationJournauxInterdite = 6634
- ConsultationHistoriqueMotDePasseInterdite = 6635
- ParamètresSpécifiquesUtilisateurInterdits = 6636
- IdConnexionInvalide = 6637
- ConsultationEntréesSuppriméesInterdite = 6638
- ConsultationModèlesInterdite = 6639
- CopiePressePapiersInterdite = 6640
- ConsultationMotDePasseInterdite = 6641
- GestionUtilisateursInterdite = 6642
- RéinitialisationMotDePasseInterdite = 6643
- SeulDestinatairePeutSupprimerPièceJointe = 6644
- JetonAccèsInvalide = 6645
- LibérationVerrouAutreUtilisateurInterdite = 6646
- UtilisateurSansAccèsCoffre = 6647
- SeulDestinatairePeutSauvegarderPièceJointeSécurisée = 6648
- SeulDestinatairePeutLireMessageSécurisé = 6649
- DeuxFacteursNonConfiguré = 6650

## Exemples d'enregistrements syslog
#### Suppression d'une entrée RDP
Jul 26 13:51:41 10.3.1.4 Devolutions[Server] PersonalConnection - [5] Entrée supprimée - MessageType: 7, MessageSubType: , UserName: DOMAIN\banderson, MachineName: COMPUTER123, ConnectionName: Server ABC, ConnectionTypeName: RDP (Microsoft Remote Desktop), ConnectionID: da3886a2-e653-4f56-8000-e55e5dc3313a, ConnectionHostName: , ConnectionUserName: , StartDateTime: 7/26/2022 1:51:45 PM, StartDateTimeUTC: , EndDateTime: , EndDateTimeUTC: , GroupName: Training\Operationnels, Comment: , LoggedUserName: banderson<area>@windjammer.co, Prompt: , TickerNumber: , SecurityGroup: , Cost: , UserInfoID: 04b48fd6-3490-4457-874d-d919a0518cf4, SupportClose: False, CloseMode: , OpenMode: , ClientApplication: RDM, ClientVersion: 2022.2.14.0 , IsEmbedded: , RepositoryID: 22a24c36-837b-4baf-8859-9497902a6de0, PamCredentialID:  [ClientIP: 123.123.123.123]
#### Création d'une entrée RDP
Jul 26 13:51:37 10.3.1.4 Devolutions[Server] PersonalConnection - [5] Entrée créée - MessageType: 5, MessageSubType: , UserName: DOMAIN\banderson, MachineName: COMPUTER123, ConnectionName: Server ABC, ConnectionTypeName: RDP (Microsoft Remote Desktop), ConnectionID: da3886a2-e653-4f56-8000-e55e5dc3313a, ConnectionHostName: , ConnectionUserName: , StartDateTime: 7/26/2022 1:51:41 PM, StartDateTimeUTC: , EndDateTime: , EndDateTimeUTC: , GroupName: Training\Operationnels, Comment: , LoggedUserName: banderson<area>@windjammer.co, Prompt: , TickerNumber: , SecurityGroup: , Cost: , UserInfoID: 04b48fd6-3490-4457-874d-d919a0518cf4, SupportClose: False, CloseMode: , OpenMode: , ClientApplication: RDM, ClientVersion: 2022.2.14.0 , IsEmbedded: , RepositoryID: 22a24c36-837b-4baf-8859-9497902a6de0, PamCredentialID:  [ClientIP: 123.123.123.123]
#### Ouverture d'une entrée RDP et d'une connexion VPN
Jul 26 13:47:24 10.3.1.4 Devolutions[Server] PersonalConnection - [5] Session ouverte - MessageType: 4, MessageSubType: , UserName: DOMAIN\banderson, MachineName: COMPUTER123, ConnectionName: Windjammer23, ConnectionTypeName: RDP (Microsoft Remote Desktop), ConnectionID: 2c3c8c8e-70ed-494f-9680-3b24d7fb0b25, ConnectionHostName: , ConnectionUserName: bob, StartDateTime: 7/26/2022 1:47:28 PM, StartDateTimeUTC: , EndDateTime: , EndDateTimeUTC: , GroupName: Common\Linux (Windjammer23), Comment: , LoggedUserName: banderson<area>@windjammer.co, Prompt: , TickerNumber: , SecurityGroup: , Cost: , UserInfoID: 04b48fd6-3490-4457-874d-d919a0518cf4, SupportClose: True, CloseMode: , OpenMode: 0, ClientApplication: RDM, ClientVersion: 2022.2.14.0 , IsEmbedded: True, RepositoryID: df6637ca-d40a-4251-aa33-0620383153e0, PamCredentialID:  [ClientIP: 123.123.123.123]  

Jul 26 13:47:21 10.3.1.4 Devolutions[Server] PersonalConnection - [5] VPN ouvert - MessageType: 8, MessageSubType: , UserName: DOMAIN\banderson, MachineName: COMPUTER123, ConnectionName: Windjammer23, ConnectionTypeName: RDP (Microsoft Remote Desktop), ConnectionID: 2c3c8c8e-70ed-494f-9680-3b24d7fb0b25, ConnectionHostName: , ConnectionUserName: bob, StartDateTime: 7/26/2022 1:47:25 PM, StartDateTimeUTC: , EndDateTime: , EndDateTimeUTC: , GroupName: Common\Linux (Windjammer23), Comment: , LoggedUserName: banderson<area>@windjammer.co, Prompt: , TickerNumber: , SecurityGroup: , Cost: , UserInfoID: 04b48fd6-3490-4457-874d-d919a0518cf4, SupportClose: , CloseMode: , OpenMode: , ClientApplication: RDM, ClientVersion: 2022.2.14.0 , IsEmbedded: , RepositoryID: df6637ca-d40a-4251-aa33-0620383153e0, PamCredentialID:  [ClientIP: 123.123.123.123]

#### Refus de connexion à la ressource
Jul 26 13:46:19 10.3.1.4 Devolutions[Server] PersonalConnection - [5] Accès refusé - Non autorisé à consulter l'entrée - MessageType: 66, MessageSubType: 6626, UserName: banderson<area>@windjammer.co, MachineName: 123.123.123.123, ConnectionName: , ConnectionTypeName: , ConnectionID: , ConnectionHostName: , ConnectionUserName: , StartDateTime: 7/26/2022 1:46:19 PM, StartDateTimeUTC: , EndDateTime: , EndDateTimeUTC: , GroupName: , Comment: , LoggedUserName: banderson<area>@windjammer.co, Prompt: , TickerNumber: , SecurityGroup: , Cost: , UserInfoID: 04b48fd6-3490-4457-874d-d919a0518cf4, SupportClose: , CloseMode: , OpenMode: , ClientApplication: Web, ClientVersion: 2022.2.6.0 , IsEmbedded: , RepositoryID: , PamCredentialID:  [ClientIP: 123.123.123.123]