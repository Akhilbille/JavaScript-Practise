const person = {
    firstName : 'AKhil',
    lastName : 'Bille',
    get fullName(){
        return (`${this.firstName} ${this.lastName}`);
    },
    
    set fullName(value){
        let parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

console.log(person.fullName);
person.fullName = "Akhil GOwd";
console.log(person.fullName);