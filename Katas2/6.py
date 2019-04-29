#Sum of Triangular Numbers

def triangular_numbers(n):
    #triangular formula n(n+1)/2
    li=[]
    for x in range(1,n+1):
        y=(x*(x+1))/2
        li.append(y)
    return li    

def sum_triangular_numbers(n):
    if n<0:
        return 0
    else:
        triangular_list=triangular_numbers(n)
        sum_=0
        for number in triangular_list:
            sum_+=number
    
        return sum_