#Find the smallest integer in the array

def find_smallest_int(arr):
    smallest = float('inf')
    for x in arr:
        if x < smallest:
            smallest = x
    return smallest    