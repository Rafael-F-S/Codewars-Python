#Geometric Mean I

import math 

def check_arr(arr):
    invalid_num=0
    for x in arr:
        if isinstance(x, str) ==True or x<0:
            invalid_num+=1
        else:
            pass
    return invalid_num    


def geometric_meanI(arr):
    invalid_num = check_arr(arr)
    total=1
    count=0
    arraycount=len(arr)
    if arraycount<=10:
        maximum_errors=1
    else:
        maximum_errors= math.floor(arraycount/10)
    if invalid_num <= maximum_errors:
        for x in arr:        
            if isinstance(x, str) == True or x<0:
                pass
            else:
                count+=1
                total*=x
        gm = total**(1/count)   
        return gm 
    else:
        return 0