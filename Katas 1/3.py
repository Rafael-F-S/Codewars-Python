#Transportation on vacation

def rental_car_cost(d):
    daily = 40
    dis3 = 20
    dis7 = 50
    total = daily * d
    if d >= 7:
        return total - dis7
    if d >= 3 and d < 7:
        return total - dis3
    else:
        return total