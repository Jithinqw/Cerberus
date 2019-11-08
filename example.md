# Table of Contents

* [Email](#Email)
* [Date](#Date)
* [JWT](#JWT)
* [Algorithm](#Algorithm)
* [Phone Number](#PhoneNumber)
* [Postal Code](#PostalCode)
* [Bank](#Bank)
* [String](#String)
* [Network](#Network)
* [Blockchain](#Blockchain)
* [General](#General)
* [Phone](#Phone)
## Email

`isEmailValid` returns a `bool` value.

```javascript
    var cerebreus = require("cerebreus-validator");
    cerebreus.isEmailValid("jithin.zacharia@gmail.com") // =>true
    cerebreus.isEmailValid("Go...Get to the chopper!!") // =>false
```

`normalizeEmail` returns `bool` value.

```javascript
    var cerebreus = require("cerebreus-validator");
    cerebreus.normalizeEmail.normalizeEmail("jithin.zacharia@gmail.com") // =>true
    cerebreus.normalizeEmail.normalizeEmail("Go...Get to the chopper!!", "outlook") // =>false
```

`getUsername` returns `bool` value.
```javascript
    var cerebreus = require("cerebreus-validator");
    cerebreus.normalizeEmail.getUsername("jithin.zacharia@gmail.com") // =>jithin.zacharia
    cerebreus.normalizeEmail.getUsername("Go...Get to the chopper!!") // =>false
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

## Algorithm

`isMongoId` returns a `bool` value.

```javascript
    var cerebreus = require("cerebreus-validator");
    cerebreus.isMongoId("4d3ed089fb60ab534684b7e0"); // => true
    cerebreus.isMongoId("madness is like gravity..."); // => false
```

`isBase64` returns a `bool` value.
```javascript
    var cerebreus = require("cerebreus-validator");
    cerebreus.isBase64("SGVsbCB0aGlzIGlzIGEgc2VjcmV0Cg=="); // => true
    cerebreus.isBase64("madness is like gravity..."); // => false
```

`isBase32` returns a `bool` value.
```javascript
    var cerebreus = require("cerebreus-validator");
    cerebreus.isBase32("AJU3JX7ZIA54EZQ="); // => true
    cerebreus.isBase32("madness is like gravity..."); // => false
```

`isAscii` returns a `bool` value.
```javascript
    var cerebreus = require("cerebreus-validator");
    cerebreus.isAscii("0003"); // => true
    cerebreus.isAscii(""); // => false
```

`isMD5` returns `bool` value.
```javascript
    var cerebreus = require("cerebreus-validator");
    cerebreus.isMD5("6cb083b73723575a48f0f5776ed3401d"); // => true
    cerebreus.isMD5("madness is like gravity..."); // => false
```

`isUUID` returns `bool` value.

`options` `UUID type` alogorithm type`[3,4,5,all]`
```javascript
    var cerebreus = require("cerebreus-validator");
    cerebreus.isUUID("1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed", "4"); // => true
    cerebreus.isUUID("madness is like gravity...","3"); // => false
```

`isOctal` returns `bool` value.
```javascript
    var cerebreus = require("cerebreus-validator");
    cerebreus.isOctal("7"); // => true
    cerebreus.isOctal("madness is like gravity..."); // => false
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
Pass in length of `CVV number` as option.

```javascript
    var cerebreus = require("cerebreus-validator");
    cerebreus.isCVVValid("344", 3); // => true
    cerebreus.isCVVValid("3444", 4); // => true
    cerebreus.isCVVValid("34", 4); // => false
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

`isMagnetURI` returns `bool` value.
```javascript
    var cerebreus = require("cerebreus-validator");
    cerebreus.isMagnetURI("magnet:?xt=urn:btih:c12fe1c06bba254a9dc9f519b335aa7c1367a88a"); // => true
    cerebreus.isMagnetURI("https://www.google.com"); // => false
```

`isIPAddress` returns `bool` value.
```javascript
    var cerebreus = require("cerebreus-validator");
    cerebreus.isIPAddress("165.225.104.65"); // => true
    cerebreus.isIPAddress("23323232"); // => false
```

`isMACAddress` returns `bool` value.
```javascript
    var cerebreus = require("cerebreus-validator");
    cerebreus.isMACAddress("00:0a:95:9d:68:16"); // => true
    cerebreus.isMACAddress("23323232"); // => false
```


## Blockchain

`isEthereumHash` returns `bool` value.

```javascript
    var cerebreus = require("cerebreus-validator");
    cerebreus.isEthereumHash("0x0284286bc53e3170ebf91ef7c912e7af969758399ab263e7a8eda148d64f586b"); // => true
    cerebreus.isEthereumHash("This is a transcation hash"); // => false
```

## General

`isVehiclePlateValid` returns `bool` value.

Currently only supports Indian number plates.
`options` country locale `IND`
```javascript
    var cerebreus = require("cerebreus-validator");
    cerebreus.isVehiclePlateValid("DL 05 A 4494", "IND"); // => true
    cerebreus.isVehiclePlateValid("This is an invalid number plate.", "IND"); // => false
```


`colorValidator` returns `bool` value. Defaults to `hex`.

`options` color schemes `hex, rgb, rgba, hsl, hsla`
```javascript
    var cerebreus = require("cerebreus-validator");
    cerebreus.colorValidator("rgb(255, 0, 0)", "rgb"); // => true
    cerebreus.colorValidator("number", "rgb"); // => false
```


## Phone

`isPhoneNumberValid` returns `bool` value.
This api accepts phoneNumber and one of the below locales.

`['ar-AE', 'ar-BH', 'ar-DZ', 'ar-EG', 'ar-IQ', ar-JO', 'ar-KW', 'ar-SA', 'ar-SY', 'ar-TN', 'be-BY', 'bg-BG', 'bn-BD', 'cs-CZ', 'de-DE', 'de-AT', 'da-DK', 'el-GR', 'en-AU', 'en-CA', 'en-GB', 'en-GG', 'en-GH', 'en-HK', 'en-IE', 'en-IN', 'en-KE', 'en-MT', 'en-MU', 'en-NG', 'en-NZ', 'en-RW', 'en-SG', 'en-UG', 'en-US', 'en-TZ', 'en-ZA', 'en-ZM', 'en-PK', 'es-EC', 'es-ES', 'es-MX', 'es-PA', 'es-PY', 'es-UY', 'et-EE', 'fa-IR', 'fi-FI', 'fj-FJ', 'fr-FR', 'fr-GF', 'fr-GP', 'fr-MQ', 'fr-RE', 'he-IL', 'hu-HU', 'id-ID', 'it-IT', 'ja-JP', 'kk-KZ', 'ko-KR', 'lt-LT', 'ms-MY', 'nb-NO', 'nl-BE', 'nl-NL', 'nn-NO', 'pl-PL', 'pt-PT', 'pt-BR', 'ro-RO', 'ru-RU', 'sl-SI', 'sk-SK', 'sr-RS', 'sv-SE', 'th-TH', 'tr-TR', 'uk-UA', 'vi-VN', 'zh-CN', 'zh-HK', 'zh-TW']`

```javascript
    var cerebreus = require("cerebreus-validator");
    cerebreus.isPhoneNumberValid("918944287569","en-IN"); // => true
    cerebreus.isPhoneNumberValid("THis is a transcation hash", "en-IN"); // => false
```

`isIMEINumber` returns `bool` value.
```javascript
    var cerebreus = require("cerebreus-validator");
    cerebreus.isPhoneNumberValid("490154203237518"); // => true
    cerebreus.isPhoneNumberValid("THis is a transcation hash"); // => false
```
