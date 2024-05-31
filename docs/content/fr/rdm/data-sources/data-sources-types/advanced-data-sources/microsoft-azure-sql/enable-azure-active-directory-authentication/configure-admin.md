---
eleventyComputed:
  title: Configurer l'administrateur Azure Active Directory
---
Pour activer l'authentification Azure Active Directory de SQL Server, il faut d'abord configurer l'administrateur Azure Active Directory du serveur.
{% snippet, "badgeInfo" %}
Il peut s'écouler quelques minutes avant que ce changement ne se propage. Vous pourriez rencontrer un délai avant de pouvoir vous connecter avec ce compte Active Directory.
{% endsnippet %}

{% snippet, "badgeNotice" %}
Vous pouvez utiliser un compte Microsoft Azure existant si vous en avez déjà créé un. Il n'est pas nécessaire d'en créer un autre pour effectuer les étapes suivantes.
{% endsnippet %}

![Azure AD Portal](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11581.png)

1. Comme indiqué dans l'onglet ***Overview***, l'***Active Directory admin*** est défini sur ***Not configured***.
![!!RDMWin2212](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2212.png)
1. Cliquer sur ***Active Directory admin*** sous ***Settings*** dans le menu de gauche.
![!!RDMWin2213](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2213.png)
1. Cliquer sur ***Set admin*** pour rechercher l'administrateur.
![!!RDMWin2214](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2214.png)
1. Taper le nom de l'administrateur dans le champ ***Search***. Cliquer sur l'administrateur dans la liste fournie puis sur ***Select***.
![!!RDMWin2215](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2215.png)
1. Pour terminer le processus, cliquer sur ***Save***.
![!!RDMWin2216](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2216.png)
1. Copier l'email de l'***Active Directory admin*** : il est essentiel pour les prochaines étapes.
