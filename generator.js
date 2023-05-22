 // Global data array
 let data = ["syllabus.html", "p1.html", "p2.html", "style.html", "email.html", "system.html", "process.html"];

 // Function to display the table
 function displayTable() {
   var startRange = parseInt(document.getElementById("startRange").value);
   var endRange = parseInt(document.getElementById("endRange").value);
   var message = document.getElementById("message");

   if (isNaN(startRange) || isNaN(endRange) || startRange > endRange || startRange < 1 || endRange > data.length) {
     var validRange = "Valid Range: 1-" + data.length;
     message.textContent = "Invalid range, " + validRange;
     document.getElementById("tableContainer").innerHTML = "";
     return;
   }

   var table = "<table>";

   for (var i = startRange - 1; i <= endRange - 1; i++) {
     table += "<tr><td><a href='" + data[i] + "'>" + data[i] + "</a></td></tr>";
   }

   table += "</table>";

   document.getElementById("tableContainer").innerHTML = table;
   message.textContent = "";
 }

 // Function to display the initial valid range message
 function displayValidRangeMessage() {
   var validRangeMessage = "Valid Range: 1-" + data.length;
   document.getElementById("validRange").textContent = validRangeMessage;
 }