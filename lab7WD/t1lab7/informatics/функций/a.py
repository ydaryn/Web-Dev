def min_of_four(a, b, c, d):
    if b < smallest:
        smallest = b
    if c < smallest:
        smallest = c
    if d < smallest:
        smallest = d
    return smallest

a, b, c, d = map(int, input().split())
print(min_of_four(a, b, c, d))
