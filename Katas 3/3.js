//Decode the Morse code
decodeMorse = function(morseCode){
    var str = arguments[0];
    str = str.trim();
    var arr = str.split('   ');
     
    for(var j = 0; j < arr.length; j++){
         arr[j] = arr[j].split(' ');
        }
       
    for(var k = 0; k < arr.length; k++){  
         for(var i = 0; i < arr[k].length; i++){
             arr[k][i] = MORSE_CODE[arr[k][i]];
       }
     }
     for (var l = 0; l < arr.length; l++){
       arr[l] = arr[l].join('');
     }
     
     return arr.join(' ');
   }