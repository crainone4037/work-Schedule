//display the current date 

var today = moment().format("dddd, MMM Do YYYY");
$("#currentDay").html(today); 


// depending on the time, this function will provide each slot with a different color(grey,red,green).
function colorAttribute(){ 




  //this variable will hold the current hour   
var currentTime = moment().hours();


//this for each loop will loop through the div elements and check to see if it matches the currentTime
$(".time-block").each(function(){


// in order to compare the time within our div id and the moment function, we need to convert the string to an integer.
    var timeEl = parseInt ($(".time-block").attribute("id"));

    if (currentTime < timeEl){ 
        $(".time-block").addClass("future");
    }else if ( currentTime > timeEl) {
        $(".time-block").addClass ("past");

    }else{
        $(".time-block").addClass("present");
        
    }





})

}












