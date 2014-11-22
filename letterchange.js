function advanceLetter(str) {
  var solution = '';
  
 for (var i = 0; i < str.length; i++) {
    if (str[i] === "z" || str[i] === "Z") {
      solution = solution + "A";
//       console.log(solution);
    }
   else if ( !( (str.charCodeAt(i) > 64 && str.charCodeAt(i) < 91)  ||
              (str.charCodeAt(i) > 96 && str.charCodeAt(i) < 123 ) ) ) {
//      console.log('-' + str.charCodeAt(i));
     solution += str[i];
   }
   else {
//      console.log('+' + str.charCodeAt(i) );
     solution = solution + String.fromCharCode(str.charCodeAt(i) + 1);
   }
 }
//  console.log('-->' + solution); 
 return solution;
}
  
 function changeVowel(str2){
   var vowelSolution = '';
   for (var j = 0; j < str2.length; j++) {
     if (str2[j] === "a" || str2[j] === "e" || str2[j] === "i" || str2[j] === "o" || str2[j] === "u") {
       vowelSolution += str2[j].toUpperCase();
     }
     else {
       vowelSolution += str2[j];
     }
   }
//    console.log(vowelSolution);
   return vowelSolution;
 }

function main(str) {
  var result1 = advanceLetter(str);
//    console.log(result1);
  return changeVowel(result1);
  
}

main(readline());           
