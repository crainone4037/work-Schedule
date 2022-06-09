//display the current date 





var today = moment().format("dddd, MMM Do YYYY");
$("#currentDay").html(today); 


// depending on the time, this function will provide each slot with a different color(grey,red,green).

$(document).ready(function(){



function colorTextField(){ 

    var currentTime = moment().hours();
$(".time-block").each(function(){
    var timeEl = parseInt($(".time-block").attr("id"));

    if (currentTime === timeEl){ 
        $(this).addClass("present");

       }else if (currentTime > timeEl){
        $(this).addClass("past");

    }else {
        $(this).addClass("future");
    }
});

}

colorTextField();

//saves the data into local storage

$(".saveBtn").on("click",function(){
//creates a variable that will hold the value of the id
var time = $(this).parent().attr("id");

//creare a variable that will hold the value of the textfield
var textField = $(this).siblings(".description").val();

//save the data into localstorage
localStorage.setItem(time,textField);

});

});


 

    












