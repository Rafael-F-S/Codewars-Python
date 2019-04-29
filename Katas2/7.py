#Draw stairs
def draw_stairs(n):
    stairs=''
    for x in range(1,n+1):
        t1="I"
        if x<n:
            t2="\n"
        else:
            t2=""
        if x<n:
            t3=" "*x
        else:
            t3=""    
        stairs=stairs+t1+t2+t3
    return stairs  