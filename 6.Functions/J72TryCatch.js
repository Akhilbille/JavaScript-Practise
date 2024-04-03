const person = {
    firstName : 'AKhil',
    lastName : 'Bille',
    get fullName(){
        return (`${this.firstName} ${this.lastName}`);
    },
    
    set fullName(value){
        if (typeof value !== 'string')
            throw new Error('Value is not a string');
        let parts = value.split(' ');
        if (parts.length!==2)
            throw new Error("Enter your firstname lastname")
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};
try{
    person.fullName = null;
}
catch(e){
    console.log(e);
}

console.log(person.fullName);
console.log(person.fullName);