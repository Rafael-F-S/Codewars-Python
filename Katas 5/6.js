var fatFingers = function(str) {
    if (str == null) return null;
    if (str == '') return '';
    let fatFingered = '';
    let capsLock = false;
    for (let i = 0; i < str.length; i++) {
      const letter = str[i];
      if (letter == 'a' || letter == 'A') {
        capsLock = !capsLock;
      } else {
        if (capsLock) {
          fatFingered += letter.toUpperCase();
        } else {
          fatFingered += letter;
        }
      }
    }
  
    return fatFingered;
};