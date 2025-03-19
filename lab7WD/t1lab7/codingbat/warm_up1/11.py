def front_back(s):
    if len(s) == 1:
        return s
    first_char = s[0]
    last_char = s[-1]
    middle = s[1:-1]
    return last_char + middle + first_char
