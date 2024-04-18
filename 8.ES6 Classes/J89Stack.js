const _items = new WeakMap();
class Stack{
    constructor(){
        _items.set(this,[]);  
    }

    peek(){
        let items = _items.get(this);
        if (items.length ===0) 
            throw new Error("Stack is Empty");
        return items[items.length-1];
    }

    push(value){
        _items.get(this).push(value);
    }

    pop(){
        let items = _items.get(this);
        if(items.length === 0) 
            throw new Error("Stack is empty")
        return _items.get(this).pop();
    }

    get count(){
        return _items.get(this).length;
    }


}
const stack = new Stack();
(stack.push('a'));
(stack.push('b'));
(stack.push('c'));
console.log(stack.count);
console.log(stack.pop())
console.log(stack.count);
console.log(stack.peek());
