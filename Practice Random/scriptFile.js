var myArray = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];



document.write(myArray.toString());


var fireOff = function() {
    for (var i = 0; i < myArray.length; i++) {
        document.getElementById('loop').innerHTML = myArray[i];
        console.log("Its working");
    }
}


var changeColor = function() {
    var colors = ['white', 'yellow', 'purple', 'green', 'black', 'gray','white', 'yellow', 'purple', 'green', 'black', 'gray','white', 'yellow', 'purple', 'green', 'black', 'gray'];
    var i = 0;

    function myLoop() {
        setTimeout(function() {
            document.body.style.background = colors[i];
            console.log(i);
            i++;
            if (i < colors.length) {
                myLoop();
            }
        }, 500);
    }
    myLoop();
}

var changeSize = function() {
    var i = 0;
    var myLoop = function() {
        setTimeout(function() {
        	document.getElementById('loop').style.fontSize = i+'px';
        	console.log(i);
            i++;
            if(i%4==0){
            	document.getElementById('loop').style.color = 'yellow';
            }
            else{
            	document.getElementById('loop').style.color = 'black';
            }
            if (i < 2001) {
                myLoop();
            }
        }, 50);
    }
    myLoop();
    //changeColor();
}


setInterval(function(){
	console.log('interval')
},2000);
