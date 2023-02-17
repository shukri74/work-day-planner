var Hours = [9, 10, 11, 12, 13, 14, 15, 16, 17,]

var SaveButton = $("<td>")

SaveButton.addClass("saveBtn")

SaveButton.addClass("btn")

SaveButton.addClass("p-2")

var ContainerEL = $(".container")

var CurrentHour = moment().format("HH")

$.each(Hours, function(){

    var NewTimeblock = $("<tr>")
    
    NewTimeblock.addClass("row")

    ContainerEL.append(NewTimeblock);

}) 



for(var i = 0; i < Hours.length; i++){

if(Hours[i] == CurrentHour) {

    ContainerEL.children().addClass("present")

} 


if (Hours[i] < CurrentHour) {

    ContainerEL.children().addClass("past")

}

else{

    ContainerEL.children().addClass("future")

}

}
    
var dateTodayEl = $('#currentDay')

function dateToday(){

 var today = moment().format("DD MMM YYYY");

 dateTodayEl.text(today)

}

dateToday()

console.log(dateToday)