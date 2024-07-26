const { dividerClasses } = require("@mui/material");

const decodeTheRing = function (s, p) {
      if(s.length !== p.length + 1){
        return false;
      }
       let differenceFound = false;
       for(let i = 0 , j = 0; i < s.length; i++, j++){
        if(s[i] != p[j]){
          if(differenceFound){
            return false;
          }
          differenceFound = true;
          j--;
         }
       }
       return true;
  };
  
  module.exports = decodeTheRing;