def end_other(str1, str2):
    str1 = str1.lower()
    str2 = str2.lower()
    return str1.endswith(str2) or str2.endswith(str1)
