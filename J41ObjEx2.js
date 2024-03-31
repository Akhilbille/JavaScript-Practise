function address(street,city,zipCode){
    return{
        street,
        city,
        zipCode,
        showAddress(address){
            console.log(address.street);
            console.log(address.city);
            console.log(address.zipCode);

        }
    }
}

const address1 = address('st','lf',47905);
address1.showAddress(address1);

// Constructor Functions

function Address(street,city,zipCode){
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;

    this.showAddress = function(){
        console.log(this.street);
        console.log(this.city);
        console.log(this.zipCode);
    }

}

const address2 = new Address('ct','IN',147);
address2.showAddress();