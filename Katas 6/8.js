function iqTest(numbers){
    numbers = numbers.split(' ');
    const even = {
       count: 0,
       lastIndex: -1
    };

    const odd = {
       count: 0,
       lastIndex: -1
    };
  
    for (let i = 0; i < numbers.length; i++) {
      const currentNumber = numbers[i];
      if (currentNumber % 2 == 0) {
        even.count++;
        even.lastIndex = i + 1;
      } else {
        odd.count++;
        odd.lastIndex = i + 1;
      }
    }
  
    if (even.count == 1) {
      return even.lastIndex;
    }
    else {
      return odd.lastIndex;
    }
  }
  
