---
title: SecurityTokenInvalidIssuerException - IDX10205
---
# {{ en.TOPICTITLE }}
When trying to connect on {{ en.DPS }} from {{ en.RDM }} or through the web Ui, you can get the following error in the {{ en.DPS }} logs.
```
SecurityTokenInvalidIssuerException - IDX10205: Issuer validation failed. Issuer: &apos;System.String&apos;. Did not match: validationParameters.ValidIssuer: &apos;System.String&apos; or validationParameters.ValidIssuers: &apos;System.String&apos;.
&#160; at Microsoft.IdentityModel.Tokens.Validators.ValidateIssuer(String issuer, SecurityToken securityToken, TokenValidationParameters validationParameters)
&#160; at System.IdentityModel.Tokens.Jwt.JwtSecurityTokenHandler.ValidateTokenPayload(JwtSecurityToken jwtToken, TokenValidationParameters validationParameters)
&#160; at System.IdentityModel.Tokens.Jwt.JwtSecurityTokenHandler.ValidateToken(String token, TokenValidationParameters validationParameters, SecurityToken&amp; validatedToken)
&#160; at Devolutions.Server.Handler.OAuthHelper.LoginWithOAuth(String bearerToken)
```
## Solution
The problem may result from an invalid Access URI string with an extra &apos;/&apos; at the end of the URL. Ensure to set it properly according to this article [Access URI](/kb/devolutions-server/knowledge-base/access-uri/)
