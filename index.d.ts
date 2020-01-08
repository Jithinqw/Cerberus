declare module 'cerberus-validator' {

    export function isEmailValid(email: string): Boolean;
    export function getCardProvider(cardNumber: string);
    export function isCardValid(creditCardNumber: string):Boolean;
    export function isCVVValid(cvvNumber:string):Boolean;
    export function isJWTValid(token:string):Boolean;
    export function isDate(date:string):Boolean;
    export function luhnCheck(cardNumber:string):Boolean;
    export function pardCardValidator(cardNumber:string):Boolean;
}