/*function getMonthName(mo) {
  mo--; // Adjust month number for array index (so that 0 = Jan, 11 = Dec)
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  if (months[mo]) {
    return months[mo];
  } else {
    throw new Error("Invalid Month Number - valid values are between 1 to 12"); 
  }
}
myMonth = 13; // Example invalid month number
monthName = getMonthName(myMonth); // function could throw exception
console.log("Month name is: " + monthName);*/











function getMonthName(mo) {
  mo--; // Adjust month number for array index (so that 0 = Jan, 11 = Dec)
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  if (months[mo]) {
    return months[mo];
  } else {
    throw new Error("Invalid Month Number - valid values are between 1 to 12"); // throw keyword is used here
  }
}
try {
  //myMonth = Number(prompt("Enter the month number [1-12]"));
  myMonth = 13; // Example invalid month number
  monthName = getMonthName(myMonth); // function could throw exception
} catch (e) {
  monthName = "unknown";
  console.log(e); // pass exception object to error handler
}
console.log("Month name is: " + monthName);