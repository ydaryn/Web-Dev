def fix_teen(n):
    if 13 <= n <= 19 and n not in [15, 16]:
        return 0
    return n

def no_teen_sum(a, b, c):
    return fix_teen(a) + fix_teen(b) + fix_teen(c)
