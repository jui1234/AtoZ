var whichWeekDay = function(day){
    let dayName;
    switch(day){
        case 1:
         dayName = 'Monday';
         break;

         case 2:
         dayName = 'Tuesday';
         break;

         case 3:    
            dayName = 'Wednesday';
            break;

         case 4:
            dayName = 'Thursday';
            break;

        case 5:
            dayName = 'Friday';
            break;

        case 6:
            dayName = 'Saturday';
            break;
            
        case 7:
            dayName = 'Sunday';
            break;   
            
        default:
            dayName = 'Invalid day';    
    }

    return dayName;
}

console.log(whichWeekDay(1));
console.log(whichWeekDay(4));
console.log(whichWeekDay(7));
console.log(whichWeekDay(0));