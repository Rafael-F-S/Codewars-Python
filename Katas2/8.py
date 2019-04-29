#Find The Parity Outlier
def search_odd(list):
    for i in list:
        if i%2 != 0:
            return i
            
def search_even(list):
    for i in list:
        if i%2 == 0:
            return i            
        
def find_outlier(list):
    count_even=0
    count_odd=0
    for x in list:
        if x%2==0:
            count_even+=1
        else:
            count_odd+=1
    if count_even > count_odd:
        return search_odd(list)
    else:
        return search_even(list)