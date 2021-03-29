const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

  if (date == undefined)
 {
   return 'Unable to determine the time of year!';
 }
 try{
  date.toJSON()
}
catch(err){
  throw new Error(er)
}
 let month = Date.prototype.getMonth.call(date);


  if (month <=4 && month > 1)
  {
    return 'spring';
  }
  else if (month > 4 && month <= 7)
  {
    return 'summer';
  }
  else if (month > 7 && month <=10)
  {
    return 'autumn';  }
    else if (month == 0 || month ==1 || month ==11)
    {
return 'winter';
    }
}
 

