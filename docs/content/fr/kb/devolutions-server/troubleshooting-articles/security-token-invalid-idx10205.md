---
eleventyComputed:
  title: SecurityTokenInvalidIssuerException - IDX10205
---
When trying to connect on {{ en.DVLS }} from {{ en.RDM }} or through the web Ui, you can get the following error in the {{ en.DVLS }} logs.

```
SecurityTokenInvalidIssuerException - IDX10205: Issuer validation failed. Issuer: 'System.String'. Did not match: validationParameters.ValidIssuer: 'System.String' or validationParameters.ValidIssuers: 'System.String'.
  at Microsoft.IdentityModel.Tokens.Validators.ValidateIssuer(String issuer, SecurityToken securityToken, TokenValidationParameters validationParameters)
  at System.IdentityModel.Tokens.Jwt.JwtSecurityTokenHandler.ValidateTokenPayload(JwtSecurityToken jwtToken, TokenValidationParameters validationParameters)
  at System.IdentityModel.Tokens.Jwt.JwtSecurityTokenHandler.ValidateToken(String token, TokenValidationParameters validationParameters, SecurityToken& validatedToken)
  at Devolutions.Server.Handler.OAuthHelper.LoginWithOAuth(String bearerToken)
```

## Solution

The problem may result from an invalid Access URI string with an extra '/' at the end of the URL. Ensure to set it properly according to this article [Access URI](/kb/devolutions-server/knowledge-base/access-uri/).
