#DNA to RNA Conversion
# create a function which returns an RNA sequence from the given DNA sequence

def DNAtoRNA(dna):
    rna=''
    for x in dna:
        if x == 'T':
            x='U'
            rna+=x
        else:
            rna+=x
    return rna        
            
    