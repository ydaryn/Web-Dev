def lucky_sum(a, b, c):
   
    if b == 13 and c == 13:
        return a
    if a == 13:
        return 0
            
    if b == 13:
        if a != 13 and c != 13:
            return a
    if c == 13:
        return a + b
    else:
        return a + b + c 