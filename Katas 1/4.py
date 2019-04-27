#Simple Fun #1: Seats in Theater

def seats_in_theater(tot_cols, tot_rows, col, row):
    blockedpeople = (tot_rows-row)*(tot_cols-(col-1))
    return blockedpeople