# jwt-auth
JSON Web Token Authorization (With Refresh and Email activation)



```js
const jwt = require("jsonwebtoken");
const generateAccessToken = (id) => {
  const payload = {
    id,
  };
  return jwt.sign(payload, process.env.secretKey, { expiresIn: "5h" });
};
```
