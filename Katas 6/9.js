function DNAStrand(dna){
    let compliment = '';
  
    for (let i = 0; i < dna.length; i++) {
      const currentLetter = dna[i];
      if (currentLetter == 'A') {
        compliment += 'T';
      }
      else if (currentLetter == 'T') {
        compliment += 'A';
      }
      else if (currentLetter == 'C') {
        compliment += 'G';
      }
      else if (currentLetter == 'G') {
        compliment += 'C';
      }
    }
  
    return compliment;
  }