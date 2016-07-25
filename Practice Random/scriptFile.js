var myArray = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];



document.write(myArray.toString());


var fireOff = function(){
    for (var i = 0; i < myArray.length; i++) {
        document.getElementById('loop').innerHTML = myArray[i];
        console.log("Its working");
    }
}