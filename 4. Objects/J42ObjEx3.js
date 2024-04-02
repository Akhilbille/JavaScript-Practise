const address1 = new Address('ST','LF',47905);
const address2 = new Address('ST','LF',47905);
const address3 = address2;
const address4 = new Address('Sl','LF',47905);

console.log(isSame(address1,address2));
console.log(isSame(address3,address2));
console.log(isEqual(address1,address2));
console.log(isEqual(address3,address4));

function Address(street,city,zipCode){
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

function isEqual(address1,address2){
    return  address1.street === address2.street &&
            address1.city === address2.city &&
            address1.zipCode === address2.zipCode
}

function isSame(address1,address2){
    return address1===address2;
}