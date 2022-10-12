const locale = "pl-pl";

let dayDate = new Date();
let dayName = dayDate.toLocaleString(locale, { weekday: 'long' });
let dayNumber = dayDate.getDate();
//let month = today.getMonth() + 1;
let monthName = dayDate.toLocaleString(locale, { month: 'long' });
/*
switch (month)
{
    case 1: monthName = "Styczeń"; break;
    case 2: monthName = "Luty"; break;
    case 3: monthName = "Marzec"; break;
    case 4: monthName = "Kwiecień"; break;
    case 5: monthName = "Maj"; break;
    case 6: monthName = "Czerwiec"; break;
    case 7: monthName = "Lipiec"; break;
    case 8: monthName = "Sierpień"; break;
    case 9: monthName = "Wrzesień"; break;
    case 10: monthName = "Październik"; break;
    case 11: monthName = "Listopad"; break;
    case 12: monthName = "Grudzień"; break;
}
*/

document.getElementById("DayNumber").textContent = dayNumber;
document.getElementById("DayName").textContent = dayName;
document.getElementById("MonthName").textContent = monthName;
document.getElementById("DateString").textContent = dayNumber + " " + monthName + " 2022r., " + dayName;