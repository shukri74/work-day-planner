var Hours = [9, 10, 11, 12, 13, 14, 15, 16, 17,]

var TimeBlock = $("tr")

var ContainerEL = $(".container")

var CurrentHour = moment().format("HH")

var storedEvent = []

var storedEvent = JSON.parse(localStorage.getItem("event"))

var TimeEL;

/*let index = 0



Function DisplayDailyPlanner(){
    
    for (var i = 0; i < Hours.length; i++ ){
    
    var NewTimeblock = $("<tr>")

    NewTimeblock.addClass("row")

    NewTimeblock.attr("id", Hours[i])

    ContainerEL.append(NewTimeblock);

}

console.log(CurrentHour)/*

/* for(var i = 0; i <= Hours.length; i++){

    
if(TimeBlock.attr("id") < CurrentHour) {

    TimeBlock.addClass("past")

    console.log(CurrentHour)

}

else{

    TimeBlock.addClass("future")

    console.log(CurrentHour)

}

if(TimeBlock.attr("id") == CurrentHour) {

    TimeBlock.addClass("present")

    console.log(CurrentHour)

} 

console.log(ContainerEL.children().eq(0).attr("id"))


}*/    

/*$.each( TimeBlock, function(){

    if(TimeBlock.attr("id") < CurrentHour) {

        TimeBlock.addClass("past")
    
        console.log(CurrentHour)
    
    }
    
    else{
    
        TimeBlock.addClass("future")
    
        console.log(CurrentHour)
    
    }
    
    if(TimeBlock.attr("id") == CurrentHour) {
    
        TimeBlock.addClass("present")
    
        console.log(CurrentHour)
    
    } 

})

}

*/

function DisplayDailyPlanner(hour, storedEvent){

    var NewTimeblock = $("<tr>")

    NewTimeblock.addClass("row Description")
   
    var meridiem = hour >= 12 ? "AM": "PM";

    var Digitalto12Hour = (hour % 12) || 12; 

    if (CurrentHour > hour){

        NewTimeblock.addClass("past")
    }

    if(CurrentHour < hour){

        NewTimeblock.addClass("future")
    }

    if(CurrentHour == hour){

        NewTimeblock.addClass("present")
    };

    var TimeEL = $("<td>").addClass("hour").text(Digitalto12Hour+ meridiem)

    const x = {

        TimeEL : TimeEL
    }

    var InputEl = $("<td>").addClass("p-2 col-8 col-lg-10")
    
    var InputEventField = $("<textarea>").val(storedEvent)

    InputEventField.attr("name", hour)

    InputEventField.attr("value", storedEvent)

    InputEventField.addClass("col-8 col-lg-10")

    InputEl.append(InputEventField);

    var saveBtnEL = $("<td>").addClass("p-2 SaveEL")

    var SaveButton = $("<button>").addClass("col-5 col-lg-1 saveBtn")

    var buttonIcon = $("<i>").addClass("fas fa-save")

    SaveButton.append(buttonIcon)

    saveBtnEL.append(SaveButton)

    NewTimeblock.append (TimeEL, InputEl, saveBtnEL);

    ContainerEL.append(NewTimeblock);

}

for (var i = 0; i < Hours.length; i++){

    if(storedEvent = true){

        DisplayDailyPlanner(Hours[i], storedEvent[i])
    }

    else{
        DisplayDailyPlanner(Hours[i], "|")
    }
}


 var dateTodayEl = $('#currentDay')

function dateToday(){

 var today = moment().format("MMMM Do YYYY, h:mm:ss a");

 dateTodayEl.text(today)

}

ContainerEL.on("click", ".saveBtn", function (e) {

    e.preventDefault();

    var NewInputNumber = $(e.target).attr("name")

    var NewInput = $(e.target).parent().children().eq().val()

    localStorage.setItem(NewInputNumber, NewInput);

    
    console.log(NewInputNumber)
    console.log(NewInput)

});

$(".saveBtn").on("click", "fas", function (e) {

    e.stopPropogation();

    e.preventDefault();

    var NewInputNumber = JSON.stringify($(e.target).parent().parent().children().eq(1).attr("name"));

    var NewInput = JSON.stringify($(e.target).parent().parent().children.eq(1).val());

    console.log(NewInputNumber)
    console.log(NewInput)
    
    localStorage.setItem(NewInputNumber, NewInput);

});




setInterval(dateToday, 1000)

