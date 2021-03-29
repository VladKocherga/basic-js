const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
let teamName = "";
try {
for (let member of members)
{
  if (typeof member !== "string") continue;
 
  {
    let membersStr = member.split("").join("").trim();
    teamName += membersStr[0].toUpperCase();
  }
}
}catch (TypeError)
  {
    return false;
  }
  return teamName.split("").sort().join("");

};
