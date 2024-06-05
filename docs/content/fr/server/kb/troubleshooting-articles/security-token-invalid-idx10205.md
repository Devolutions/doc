---
eleventyComputed:
  title: SecurityTokenInvalidIssuerException - IDX10205
---
Lors de la tentative de connexion sur {{ fr.DVLS }} depuis {{ fr.RDM }} ou via l'interface Web, vous pouvez obtenir l'erreur suivante dans les journaux de {{ fr.DVLS }}.

```
SecurityTokenInvalidIssuerException - IDX10205: La validation de l'émetteur a échoué. Émetteur : 'System.String'. Ne correspond pas à : validationParameters.ValidIssuer : 'System.String' ou validationParameters.ValidIssuers : 'System.String'.
  at Microsoft.IdentityModel.Tokens.Validators.ValidateIssuer(String issuer, SecurityToken securityToken, TokenValidationParameters validationParameters)
  at System.IdentityModel.Tokens.Jwt.JwtSecurityTokenHandler.ValidateTokenPayload(JwtSecurityToken jwtToken, TokenValidationParameters validationParameters)
  at System.IdentityModel.Tokens.Jwt.JwtSecurityTokenHandler.ValidateToken(String token, TokenValidationParameters validationParameters, SecurityToken& validatedToken)
  at Devolutions.Server.Handler.OAuthHelper.LoginWithOAuth(String bearerToken)
```

## Solution
Le problème peut résulter d'une chaîne URI d'accès invalide avec un '/' supplémentaire à la fin de l'URL. Assurez-vous de la définir correctement selon cet article [URI d'accès](/server/kb/knowledge-base/access-uri/).
