"use strict";

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: Medin Feratovic
   Date:  NOV. 10, 2022 

*/


runClock();
setInterval("runClock()", 1000);

function runClock(){
   // Store current date and time
      var currentDay = new Date("May 23, 2021 14:35:05");
      var dateStr = currentDay.toLocaleDateString();
      var timeStr = currentDay.toLocaleTimeString();

   // Display current date and time
      document.getElementById("dateNow").innerHTML = dateStr + "<br />" + timeStr;

   // Calc days until Jan 1
      var newYear = new Date("January 1, 2022");
      var nextYear = currentDay.getFullYear() + 1;
      newYear.setFullYear(nextYear);
      var daysLeft = (newYear - currentDay)/(1000*60*60*24);

   // Calc hours/ mins/ secs left in current day
      var hrsLeft = (daysLeft - Math.floor(daysLeft))*24;
      var minsLeft = (hrsLeft - Math.floor(hrsLeft))*60;
      var secsLeft = (minsLeft - Math.floor(minsLeft))*60;

   // Display the time left until New Year's Eve
      document.getElementById("days").textContent = Math.floor(daysLeft);
      document.getElementById("hrs").textContent = Math.floor(hrsLeft);
      document.getElementById("mins").textContent = Math.floor(minsLeft);
      document.getElementById("secs").textContent = Math.floor(secsLeft);

}