var Hours = [9, 10, 11, 12, 13, 14, 15, 16, 17,]

var ContainerEL = $(".container")

var CurrentHour = moment().format("HH")

$.each(Hours, function(){

    var NewTimeblock = $("<div>")

    NewTimeblock.addClass("time-block")
    
    NewTimeblock.addClass("row")

    ContainerEL.append(NewTimeblock);

}) 


for(var i = 0; i <= Hours.length; i++){

if(i > CurrentHour) {

        ContainerEL.children().addClass("future")

}

if(i == CurrentHour) {

    ContainerEL.children().addClass("present")

}

if(i < CurrentHour) {

    ContainerEL.children().addClass("past")

}

}
    
var dateTodayEl = $('#currentDay')

function dateToday(){

 var today = moment().format("DD MMM YYYY");

 dateTodayEl.text(today)

}

dateToday()

console.log(dateToday)