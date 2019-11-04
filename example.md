# Table of Contents

* [Email](#Email)
* [Date](#Date)
* [JWT](#JWT)
* [Mongo](#Mongo)
* [Phone Number](#PhoneNumber)
* [Postal Code](#PostalCode)
* [Bank](#Bank)
* [String](#String)
* [Network](#Network)
* [Blockchain](#Blockchain)

## Email

`isEmailValid` returns a `bool` value.

```javascript
    var cerebreus = require("cerebreus-validator");
    cerebreus.isEmailValid("jithin.zacharia@gmail.com") // =>true
    cerebreus.isEmailValid("Go...Get to the chopper!!") // =>false
```

## Date

`isDate` retuns a `bool` value.

```javascript
    var cerebreus = require("cerebreus-validator");
    cerebreus.isDate("1995-12-17T03:24:00") // =>true
    cerebreus.isDate("December 17, 1995 03:24:00") // =>true
```

## String

`isStringJSON` returns a `bool` value.
```javascript
    var cerebreus = require("cerebreus-validator");
    cerebreus.isStringJSON("{}"); // =>true
    cerebreus.isStringJSON("I am batman"); // =>false
```

## Mongo

`isMongoId` returns a `bool` value.

```javascript
    var cerebreus = require("cerebreus-validator");
    cerebreus.isMongoId("4d3ed089fb60ab534684b7e0"); // => true
    cerebreus.isMongoId("madness is like gravity..."); // => false
```

## JWT

`isJWTValid` returns `bool` value.
```javascript
    var cerebreus = require("cerebreus-validator");
    cerebreus.isJWTValid("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c")); // => true

    cerebreus.isJWTValid("It's not our abilities that show what we truly are... it is our choices.")); // => false
```

## Bank

`CVVValidator` returns `bool` value.

```javascript
    var cerebreus = require("cerebreus-validator");
    cerebreus.isCVVValid("344"); // => true
    cerebreus.isCVVValid("34"); // => false
```

`isCreditCardNumber` returns a `bool` value.

```javascript
    var cerebreus = require("cerebreus-validator");
    cerebreus.isCardValid("5241933380249003"); // => true
    cerebreus.isCardValid("Everything is KungFu!"); // => false
```

`luhnCheck` returns a `bool` value. This API is based on Luhn's Algorithm

```javascript
    var cerebreus = require("cerebreus-validator");
    cerebreus.luhnCheck("5241933380249003"); // => true
    cerebreus.luhnCheck("Everything is KungFu!"); // => false
```

`getCardProvider` returns a `string` value on passing card number.

```javascript
    var cerebreus = require("cerebreus-validator");
    cerebreus.getCardProvider("5241933380249003"); // => MasterCard
    cerebreus.getCardProvider("Everything is KungFu!"); // => false
```

`panCardValidator` returns a `bool` if PAN card is valid. This is only available for India. [What this?](https://www.incometaxindia.gov.in/Pages/tax-services/apply-for-pan.aspx)

```javascript
    var cerebreus = require("cerebreus-validator");
    cerebreus.panCardValidator("ABCDS1234Y"); // => true
    cerebreus.panCardValidator("Say “hello” to my little friend!"); // => false
```

## Postal Code

`isPostalCodeValid` returns `bool` value.

Pass any of the below options

`[ 'AD', 'AT', 'AU', 'BE', 'BG', 'BR', 'CA', 'CH', 'CZ', 'DE', 'DK', 'DZ', 'EE', 'ES', 'FI', 'FR', 'GB', 'GR', 'HR', 'HU', 'ID', 'IE' 'IL', 'IN', 'IS', 'IT', 'JP', 'KE', 'LI', 'LT', 'LU', 'LV', 'MT', 'MX', 'NL', 'NO', 'NZ', 'PL', 'PR', 'PT', 'RO', 'RU', 'SA', 'SE', 'SI', 'TN', 'TW', 'UA', 'US', 'ZA', 'ZM' ]`


```javascript
    var cerebreus = require("cerebreus-validator");
    cerebreus.isPostalCodeValid("690519", "IN"); // => true
    cerebreus.isPostalCodeValid("If you want something, go get it Period.", "US"); // => false
```

## Network

`isValidPort` returns `bool` value.
```javascript
    var cerebreus = require("cerebreus-validator");
    cerebreus.isValidPort("3000"); // => true
    cerebreus.isValidPort("3000000"); // => false
```

## Blockchain

`isEthereumHash` returns `bool` value.

```javascript
    var cerebreus = require("cerebreus-validator");
    cerebreus.isEthereumHash("0x0284286bc53e3170ebf91ef7c912e7af969758399ab263e7a8eda148d64f586b"); // => true
    cerebreus.isEthereumHash("THis is a transcation hash"); // => false
```
