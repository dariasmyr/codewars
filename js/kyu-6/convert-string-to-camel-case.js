// DESCRIPTION:
// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.
// 
// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// 
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
// 
// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"


// My Solution
function toCamelCase(str){
   if (str.trim().length === 0) {
     return str;
   } else { 
     function capitalizeFirstLetter (match, offset, string) {
       console.log('match:', match);     
       console.log('offset:', offset);   
       console.log('string:', string);
       return offset === 0 ? match : match.toUpperCase();
     }
     const newString = str.replace(/[-_](.)/g, capitalizeFirstLetter)
     const result = newString.replace(/[-_]/g, '');
     return result;
   }
}
