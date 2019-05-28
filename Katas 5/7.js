var sum_pairs=function(numbers, sum){
    const pairs = [];
    numbers.forEach((leftNumber, leftIndex) => {
      for (let rightIndex = leftIndex + 1; rightIndex < numbers.length; rightIndex++) {
        const rightNumber = numbers[rightIndex];
        if (leftNumber + rightNumber ==  sum) {
          pairs.push({
            pair: [leftNumber, rightNumber],
            rightIndex
          });
        }
      }
    });
  
    if (pairs.length > 0) {
      let earliestPair = pairs[0];
      for (let i = 1; i < pairs.length; i++) {
        if (earliestPair.rightIndex > pairs[i].rightIndex) {
          earliestPair = pairs[i];
        }
      }
      return earliestPair.pair;
    }
     return undefined;
}
  