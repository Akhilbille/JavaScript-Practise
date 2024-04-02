const address = {
    street : 'South street',
    city: 'Lafayette',
    zipCode : 47905
};

function showAddress(address){
    for(let keys in address)
        console.log(`${keys} : ${address[keys]}`)
}

showAddress(address);
