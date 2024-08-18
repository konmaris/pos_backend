let date = new Date();
let timezoneOffset = date.getTimezoneOffset();
let pstOffset = -480; // this is the offset for the Pacific Standard Time timezone
let adjustedTime = new Date(date.getTime() + (pstOffset + timezoneOffset) * 60 * 1000);

//console.log(date);
//console.log(timezoneOffset);
