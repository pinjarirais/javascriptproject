const counters = document.querySelectorAll(".counter");
// counters.innerHTML
counters.forEach((counter)=>{
    counter.innerHTML = "0"

    const updatedCounter = ()=>{
        const targetCounter = +counter.getAttribute("data-target");
        const startingCount = Number(counter.innerHTML);
        const incr = targetCounter / 100;

        if(startingCount < targetCounter){
            counter.innerHTML = `${Math.round(startingCount + incr)}`;
            setTimeout(updatedCounter, 10)
        }else{
            counter.innerHTML = targetCounter;
        }

    };
    
    updatedCounter()

});