const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {

    let catCount = 0;
    const cat = "^^";
    for (let i = 0; i < arr.length; i++ )
    {
    for (let k = 0; k < arr[i].length; k++)
    {
      if (arr[i][k] == cat)
      {
        catCount++;
      }
    }
    }
    return catCount;
    };

