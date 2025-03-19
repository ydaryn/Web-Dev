def close_far(a, b, c):
    ab = abs(a-b)
    bc = abs(b-c)
    ac = abs(a-c)

    if((ab >= 2 and bc >= 2) or 
       (ab >= 2 and ac >= 2) or 
       (bc >= 2 and ac >= 2)):
        return True
    else:
        return False