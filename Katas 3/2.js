//Jaden Casing Strings
String.prototype.toJadenCase = function () {
    console.log(this);
    let jadenCase = '';
    let capitalize = true;

    for (let i = 0; i<this.length; i++) {
        const letter = this[i];
        if (letter === ' '){
            capitalize = true;
            jadenCase += ' ';
        }
        else {
             if (capitalize) {
                 jadenCase += letter.toUpperCase();
                 capitalize = false;
             } 
             else {
                 jadenCase += letter.toLocaleLowerCase();
             }
        }
    }
    return jadenCase;
  };

  var str = "How can mirrors be real if our eyes aren't real";
  var jadenStr = str.toJadenCase();
  console.log(jadenStr);