//SetTimeOut


let timeout; //ID for timeout function

function set_timeout(){
    console.log('Setting timeout');

    timeout = setTimeout(function(){
        //codes to be executed after time out
        console.log('Today is a good day');
    }, 5000)
}



//clear timeout
function clear_timeout(){
    console.log('Clearing timeout');
    clearTimeout(timeout);
}

//Set Intervals
let clear_intervals;
function set_interval(){
   clear_intervals = setInterval( function(){
        console.log('Please do not forget to send me your proposal')
    }, 5000);

// after you set interval and you want to cancel i after 15 seconds
    setTimeout(function() {
        clearInterval(clear_intervals);
    }, 15000);
}

//clear interval
    function clear_interval(){
        console.log('Clearing intervals')
        clearInterval(clear_intervals);
    }

    
    function move_it(){
        console.log("Moving")

        let green_box = document.getElementById('inner');
        let black_box = document.getElementById('outer');
        let black_width = black_box.getBoundingClientRect().width;
        let green_width = green_box.getBoundingClientRect().width;

        let pos =0;
        let move = setInterval(function(){
           if(pos > (black_width - green_width)){
               clearInterval(move);
           }
           else{
               green_box.style.left = pos + 'px';
               green_box.style.top = pos + 'px';
               pos++;
           }
        }, 30)// in ms
    }


