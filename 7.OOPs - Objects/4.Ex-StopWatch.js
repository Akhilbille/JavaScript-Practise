function StopWatch(){
    let startTime, endTime,running,duration =0;
    this.start = function(){
        if(running)
            throw new Error("Stop watch already started");
        running = true;
        let now  = new Date();
        startTime = now.getTime();
        console.log(startTime)
        
    }
    this.stop = function(){
        if(!running)
            throw new Error("Stopwatch not started yet");
        running = false;
        let now = new Date();
        endTime= now.getTime();
        console.log(endTime)
        duration += (endTime-startTime)/1000;
    }

    this.reset = function(){
        startTime = 0;
        endTime = 0;
        duration = 0;
        
    }
 
    Object.defineProperty(this,'duration',{
        get:function(){
            return (duration);
        }

    })
}