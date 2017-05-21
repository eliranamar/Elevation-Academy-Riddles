var coins = [18,20,15,30,10,14];
var player1 = [], player2 = [];

function win(arr) {
    var sum_even = 0, sum_odd = 0;
    for (var i = 0; i < coins.length-1; i+=2) { // summing even and odd indexes
        sum_even += coins[i];
        sum_odd += coins[i+1];
    }
    console.log("even indexes sum = " + sum_even + ", odd indexes sum = " + sum_odd);
    if (sum_even > sum_odd) {
        console.log("always choose even indexed coins");
    } else {
        console.log("always choose odd indexed coins");
    }
}

win(coins);