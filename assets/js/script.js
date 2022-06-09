//display the current date 





var today = moment().format("dddd, MMM Do YYYY");
$("#currentDay").html(today); 


// depending on the time, this function will provide each slot with a different color(grey,red,green).


//the .ready function basically makes sure that this code will run after everything has loaded. 
$(document).ready(function(){



function workSchedule(){ 

    var currentTime = moment().hours();
$(".time-block").each(function(){
    var timeEl = parseInt($(".time-block").attr("id"));

    if (currentTime === timeEl){ 
        $(".description").addClass("present");
        $(".description").removeClass("past");
        $(".description").removeClass("future");



       }else if (currentTime > timeEl){
        $(".description").addClass("past");
        $(".description").removeClass("present");
        $(".description").removeClass("future");



    }else if (currentTime < timeEl) {
        $(".description").addClass("future");
        $(".description").removeClass("past");
        $(".description").removeClass("present");

    }
});

}
workSchedule();
})


//saves the data into local storage

function saveStorage(){



$(".saveBtn").on("click",function(){
//creates a variable that will hold the value of the id
var time = $(this).parent().attr("id");

//creare a variable that will hold the value of the textfield
var textField = $(this).siblings(".description").val();

//save the data into localstorage
localStorage.setItem(time,textField);

});

};

saveStorage();








 

    












