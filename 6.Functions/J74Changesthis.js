const video = {
    title : 'a',
    tags : ['a','b','c'],
    showtags(){
        //Approach1: Sending 'this' as parameter
        // this.tags.forEach(function(tag){
        //     console.log(this.title, tag);
        // },this)//Sending this as a second parameter to the callback function

        //Approach2: Assigning 'this' to local variable
        // let self = this;
        // this.tags.forEach(function(tag){
        //     console.log(self.title, tag);
        // })
        
        
        //Approach3: using 'bind'
        
        // this.tags.forEach(function(tag){
        //     console.log(this.title, tag);
        // }.bind(this))

        // Approach4: Best Approach by using Arrow function because it automatically inherits this to call back functions
        this.tags.forEach(tag => console.log(this.title,tag));

    }
}

video.showtags();

