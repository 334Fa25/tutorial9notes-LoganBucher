"use strict";

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: Logan Bucher
   Date:  9-16-2025 

*/
/*Execute the function to run and display the countdown clock */
runClock();
setInterval("runClock()", 1000);


/*Function to create and run the countdown clock*/
function runClock(){
   /*Store the current date and time */
   var currentDay = new Date ();
   var dateStr = currentDay.toLocaleDateString();
   var timeStr = currentDay.toLocaleTimeString();
   
   /*Display the current date and time */
   document.getElementById("dateNow").innerHTML = dateStr + "<br />" + timeStr;
   
   /* calculate the days until january 1st */
   var newYear = new Date("January 1, 2025");
   var nextYear = currentDay.getFullYear() + 1;
   newYear.setFullYear(nextYear);
   var daysLeft = (newYear - currentDay)/(1000 * 60 * 60 * 24);
   
   /*calculate the hours left in the current day */
   var hrsLeft = ((daysLeft - Math.floor(daysLeft)) * 24);
   
   /*calculate the minutes and seconds left in the current hour */
   var minsLeft = ((hrsLeft - Math.floor(hrsLeft)) * 60);
   var secLeft = ((minsLeft - Math.floor(minsLeft)) * 60);
   
   /*display the time left until New Years Eve */
   document.getElementById("days").textContent = Math.floor (daysLeft);
    document.getElementById("hrs").textContent = Math.floor (hrsLeft);
    document.getElementById("mins").textContent = Math.floor (minsLeft);
    document.getElementById("secs").textContent = Math.floor (secLeft);
   
}