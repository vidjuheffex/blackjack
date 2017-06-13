/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to 
   write your logic.
*/

function handValue (hand) {
    let accumulators  = {
        value: 0,
        a_counter: 0
    };
    hand.forEach(function(e,i,a){getValue(e,i,a, accumulators);});

    if (accumulators.a_counter == 1) {
        11 + accumulators.value > 21 ? accumulators.value += 1 : accumulators.value += 11;
    }

    else if(accumulators.a_counter > 1){
        if (accumulators.value + 11 + (accumulators.a_counter - 1) < 21) {
            accumulators.value += 11 + accumulators.a_counter-1;
        }
        else {
            accumulators.value += accumulators.a_counter;
        }
    }
    return accumulators.value;
};

function getValue(e,i,a, accumulators){
    let aCounter = 0;
    if (/[2-9]/.test(e)){
        accumulators.value += parseInt(e);
    }
    else if (/[JQK]/.test(e)) {
        accumulators.value += 10;
    }
    else if (e == "A"){
        accumulators.a_counter += 1;
    }
}



/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
