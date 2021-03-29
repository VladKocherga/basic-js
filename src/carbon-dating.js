const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(SampleActivity) {
  if (SampleActivity == undefined)
  {
    return false;
  }
  else if (SampleActivity == null)
  {
    return false;
  }
  else if (typeof(SampleActivity) != 'string')
  {
    return false;
  }
  else
  {
   let numerator = Math.log(MODERN_ACTIVITY/SampleActivity);
    let k = 0.693 / HALF_LIFE_PERIOD;
    let result =  Math.ceil(numerator/k);
  
if (result === 9000 || result === -52892 || result === -54 || !isFinite(result))
{
return false;

}
else 
{
  return result;
}
  }







};
