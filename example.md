# Table of Contents

* [Email](#Email)
* [Date](#Date)
* [JWT](#JWT)
* [Mongo](#Mongo)
* [Phone Number](#PhoneNumber)
* [Postal Code](#PostalCode)
* [Bank](#Bank)
* [String](#String)

## Email

`isEmailValid` returns a `bool` value. 

```javascript
    var cerebreus = require("cerebreus-validator");
    cerebreus.isEmailValid("jithin.zacharia@gmail.com")
```

## Date

`isDate` retuns a `bool` value.

```javascript
    var cerebreus = require("cerebreus-validator");
    cerebreus.isDate("1995-12-17T03:24:00")
    cerebreus.isDate("December 17, 1995 03:24:00")
```

## String

`isStringJSON` returns a `bool` value.
```javascript
    var cerebreus = require("cerebreus-validator");
    cerebreus.isStringJSON("{}");
```

## Mongo

`isMongoId` returns a `bool` value.

```javascript
    var cerebreus = require("cerebreus-validator");
    cerebreus.isMongoId("4d3ed089fb60ab534684b7e0");
```

## JWT

`isJWTValid` returns `bool` value.
```javascript
    var cerebreus = require("cerebreus-validator");
    cerebreus.isJWTValid("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"));
```

## Bank

`CVVValidator` returns `bool` value.

```javascript
    var cerebreus = require("cerebreus-validator");
    cerebreus.CVVValidator("344");
```

`isCreditCardNumber` returns a `bool` value.

```javascript
    var cerebreus = require("cerebreus-validator");
    cerebreus.isCreditCardNumber("5241933380249003");
```

`isIFSCValid` returns `bool` value. This only works with Indian Banks

```javascript
    var cerebreus = require("cerebreus-validator");
    cerebreus.isIFSCValid("UTIB0003375");
```

## Postal Code

`isPostalCodeValid` returns `bool` value. 

```javascript
    var cerebreus = require("cerebreus-validator");
    cerebreus.isPostalCodeValid("690519", "IN");
```