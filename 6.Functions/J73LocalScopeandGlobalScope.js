var globalName = 'Akhil'; //Global name which will be attached to window object which is not advisable

let localScope = 'Bille';//This is also a global name which can be accessed with in the code but not advisable

function displayName(){
    if(true){
        var color = 'blue'; //function level scope which can be accessed with in the function block
        let fname = 'akhil'; //Block level which can be accessed with in the block only but not outside this block.
    }
    console.log(color); //accessible since it is a function scope
    console.log(fname);//results Referenceerror
}

displayName();